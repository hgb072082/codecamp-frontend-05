import "../styles/globals.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
//
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = { accessToken, setAccessToken, setUserInfo, userInfo };
  useEffect(() => {
    // if (localStorage.getItem("accessToken")) {
    //   setAccessToken(localStorage.getItem("accessToken") || "");
    // }
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치

    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        console.log(err);
        // 2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          console.log(err);
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정 변경(accessToken만!! 바꿔치기)
            return forward(operation); // 변경된 operation 재요청하기!!
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { authorization: "Bearer " + accessToken },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
