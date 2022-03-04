import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { accessToken } = useContext(GlobalContext);
  useEffect(() => {
    console.log("이펙트 실행되었니?");
    async function aaa() {
      console.log("에이에이 실행되었니?");
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        console.log(newAccessToken);
        console.log("토근재발급완료");

        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요!!!");
          router.push("/login");
        } else {
          console.log("로그인되었다고판단");
          setIsLoading(false);
        }
      } else {
        console.log("로그인되었다고판단");
        setIsLoading(false);
      }
    }
    aaa();
  }, []);
  return {
    isLoading,
  };
}
