import { useState } from "react";

export default function StateSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMassage, setEmailMassage] = useState("");
  const [passwordMassage, setPasswordMassage] = useState("");

  function aaa(event) {
    //event.target=> <input type="text" /> 태그 전체를 가져옴
    setEmail(event.target.value); // => 해당 태그의 값을 가져옴
  }
  function bbb(event) {
    setPassword(event.target.value);
  }

  function ccc() {
    console.log("email: " + email);
    console.log("password: " + password);

    if (!email.includes("@")) {
      setEmailMassage("이메일에 @가 없어용 ㅠㅠ");
    } else {
      setEmailMassage("문제가 없어용 ㅎㅎ");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={aaa} value={email} /> <br />
      <span>{emailMassage}</span> <br />
      비밀번호 <input type="password" onChange={bbb} /> <br />
      <span>{passwordMassage}</span> <br />
      <br />
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}
