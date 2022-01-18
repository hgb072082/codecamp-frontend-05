import { useRouter } from "next/router";
import DynamicRoutingPageUI from "./move.presenter";


export default function DynamicRouting () {

    const router = useRouter();
    const onClickMove1 = () => {
      router.push("/05-06-dynamic-routed-board/1");
    };
  
    const onClickMove2 = () => {
      router.push("/05-06-dynamic-routed-board/2");
    };
    const onClickMove3 = () => {
      router.push("/05-06-dynamic-routed-board/3");
    };
  
return (

<DynamicRoutingPageUI 
onClickMove1={onClickMove1}
onClickMove2={onClickMove2}
onClickMove3={onClickMove3}
/>

)

}