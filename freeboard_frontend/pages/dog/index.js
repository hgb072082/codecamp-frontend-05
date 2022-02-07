import { useState, useEffect } from "react";
import axios from "axios";
export default function ILoveDogsPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");

      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

  return (
    <>
      <div>나는 강쥐를 사랑해 ! ㅠㅠㅠ </div>

      <div>랜덤 강쥐!!!!! 새로고침하면 다른 강쥐가 나온다구?!</div>
      <img src={dogUrl} />
    </>
  );
}
