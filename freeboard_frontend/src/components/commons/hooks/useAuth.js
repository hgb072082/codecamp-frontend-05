import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { accessToken } = useContext(GlobalContext);
  useEffect(() => {
    async function aaa() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        console.log(newAccessToken);

        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요!!!");
          router.push("/login");
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
