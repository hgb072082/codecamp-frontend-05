import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import { useMutation, gql } from "@apollo/client";

const FETCH_PRODUCT=gql`
query fetchProduct($productId:ID)
{

fetchProduct(productId: $productId){

_id
seller
name
detail
price


}


}


`

export default function DynamicRoutedPage(){

const router = useRouter()

const {data} =useQuery(FETCH_PRODUCT,{variables:{
productId:(router.query.aaa)


}})
console.log(data)
console.log(router.query)
return(<>

      <div>판매자:{data?.fetchProduct.seller} </div>
        
      <div>제품이름:{data?.fetchProduct.name} </div>
      <div>제품정보:{data?.fetchProduct.detail} </div>
      <div>가격:{data?.fetchProduct.price} </div>





</>



)


}