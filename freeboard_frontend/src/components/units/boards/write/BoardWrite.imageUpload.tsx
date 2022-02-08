import * as styles from "./BoardWrite.styles"
import {useRef, ChangeEvent } from 'react'
import { useMutation } from "@apollo/client";
import { checkFileValidation } from "../../../commons/libraries/validation";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./BoardWrite.queries";
export default function FileUpload (props) {
    const [uploadFile]=useMutation <Pick<IMutation,"uploadFile">,IMutationUploadFileArgs> (UPLOAD_FILE)

    const fileRef = useRef<HTMLInputElement>(null);
    const onClickImage = () => {
        fileRef.current?.click();
      };
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
    
        const isValid = checkFileValidation(file);
        if (!isValid) return;
    
        try {
          const result = await uploadFile({ variables: { file } });
          console.log(result.data?.uploadFile.url);
       const tmpImg =  [...props.images]
       tmpImg.push(result.data?.uploadFile.url || "")
          props.setImages(tmpImg);
        } catch (error) {
          alert(error.message);
        }
      };


return (<>
<styles.PictureUploadBtn key={props.e} onClick={onClickImage}>
<styles.PicturePlusText>+</styles.PicturePlusText>
<styles.PictureUploadText>Upload</styles.PictureUploadText>
</styles.PictureUploadBtn>
<img style={{width:"100px",height:"100px"}} src={`https://storage.googleapis.com/${props.images[props.idx]}`} />
 <input
 style={{ display: "none" }}
 type="file"
 ref={fileRef}
 onChange={onChangeFile}
/>

</>
)

}