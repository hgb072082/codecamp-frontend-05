export default function TestPage() {
  const check = new Promise(function (resolve, reject) {
    resolve();
  });

  check
    .then(function () {
      console.log("연산에 성공해써요");
    })
    .catch(function () {
      console.log("실패해써요..");
    });

  return (
    <>
      <button type="button">성공?실패?</button>
    </>
  );
}
