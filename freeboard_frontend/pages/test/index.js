export default function TestPage() {
  let check = new Promise(function(complete,reject) {

complete();


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
