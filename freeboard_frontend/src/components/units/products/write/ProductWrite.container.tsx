import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function BoardWrite(props) {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const handleChange = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능!!
    trigger("contents");
  };

  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isAddressModalOn, setIsAddressModalOn] = useState(false);
  const [images, setImages] = useState(["", "", ""]);

  const onCompleteDaumPostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    onClickIsAddressModal();
  };
  const onClickIsAddressModal = () => {
    setIsAddressModalOn((prev) => !prev);
  };

  const onChangeAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const onClickSubmitBtn = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            images,
            price: Number(data.price),
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result);
      router.push(`/products/${result?.data.createUseditem._id}`);
      Modal.success({ content: "상품이 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickUpdate = async (data) => {
    try {
      interface IUpdateUseditemInput {
        name?: string;
        contents?: string;
        price?: number;
        remarks?: string;
        useditemAddress?: {
          zipcode?: string;
          address?: string;
          addressDetail?: string;
          lat?: number;
          lng?: number;
        };
      }
      const updateUseditemInput: IUpdateUseditemInput = {};

      if (data.name) {
        updateUseditemInput.name = data.name;
      }
      if (data.contents) {
        updateUseditemInput.contents = data.contents;
      }
      if (data.price) {
        updateUseditemInput.price = Number(data.price);
      }
      if (data.remarks) {
        updateUseditemInput.remarks = data.remarks;
      }
      if (address || zipcode || addressDetail) {
        updateUseditemInput.useditemAddress = {};
        if (address) {
          updateUseditemInput.useditemAddress.address = address;
        }
        if (zipcode) {
          updateUseditemInput.useditemAddress.zipcode = zipcode;
        }
        if (addressDetail) {
          updateUseditemInput.useditemAddress.addressDetail = addressDetail;
        }
      }
      console.log(updateUseditemInput);
      const result = await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: router.query.productNum,
        },
      });
      console.log(result);
      router.push(`/products/${router.query.productNum}`);
      Modal.success({ content: "상품이 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  useEffect(() => {
    // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9263f0edb6dedfd7f8d69aa27fa25d82&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // window.kakao.maps.event.addListener(
            //   map,
            //   "click",
            //   function (mouseEvent) {
            //     // 클릭한 위도, 경도 정보를 가져옵니다
            //     const latlng = mouseEvent.latLng;

            //     // 마커 위치를 클릭한 위치로 옮깁니다
            //     marker.setPosition(latlng);

            //     let message =
            //       "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            //     message += "경도는 " + latlng.getLng() + " 입니다";

            //     const resultDiv = document.getElementById("clickLatlng");
            //     resultDiv.innerHTML = message;
            //   }
            // );

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });

        // // 마커가 표시될 위치입니다
        // const markerPosition = new window.kakao.maps.LatLng(
        //   33.450701,
        //   126.570667
        // );

        // // 마커를 생성합니다
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);

        // // 지도에 클릭 이벤트를 등록합니다
        // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent: any) {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     const latlng = mouseEvent.latLng;

        //     // 마커 위치를 클릭한 위치로 옮깁니다
        //     marker.setPosition(latlng);
        //   }
        // );
      });
    };
  }, [address]);

  return (
    <>
      <ProductWriteUI
        onClickSubmitBtn={onClickSubmitBtn}
        isEditing={props.isEditing}
        data={props.data}
        onClickUpdate={onClickUpdate}
        onClickIsAddressModal={onClickIsAddressModal}
        zipcode={zipcode}
        onCompleteDaumPostcode={onCompleteDaumPostcode}
        isAddressModalOn={isAddressModalOn}
        onChangeAddressDetail={onChangeAddressDetail}
        address={address}
        images={images}
        setImages={setImages}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
