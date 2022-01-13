import axios from "axios";
import { useState } from "react";
export default function RestGet() {
  const [aaa, setAaa] = useState("");

  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setAaa(result.data.title);
  };

  return (
    <>
      <button onClick={zzz}>Rest-API 요청하기!!!</button>
      <div>{aaa}</div>
    </>
  );
}
