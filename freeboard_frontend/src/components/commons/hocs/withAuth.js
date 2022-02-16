import { useEffect } from "react";
import { useRouter } from "next/router";
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    if (!localStorage.getItem("accessToken")) {
      alert("로그인하고 다시와!");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
