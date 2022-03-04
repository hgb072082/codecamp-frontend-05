import { gql } from "@apollo/client";
// 나의상품 / 마이찜
// 충전/구매 전체내역  충저내역 구매내역 판매내역

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name

      contents
      price
      soldAt
      createdAt
      updatedAt
    }
  }
`; // 나의상품 (내가 판거)
// 상품명, 판매가격, 판매자, 날짜
export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name

      contents
      price
      soldAt
      createdAt
      updatedAt
      seller {
        _id

        name
      }
    }
  }
`; // 마이찜 확인
// 날짜, 내용, 포인트사용 및 충전내역, 잔액
export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`; // 포인트 충전 / 구매 전체내역

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
      status
      statusDetail
    }
  }
`; // 포인트 충전내역  충전일, 결제ID (IMP id), 충전내역, 충전 후 잔액

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      createdAt
      _id
      status
      statusDetail
      balance
      amount
      useditem {
        _id
        name
      }
    }
  }
`; // 상품 구매 / 포인트 사용 내역

// 거래일 상품명 거래내역 거래 후 잔액 판매자

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      createdAt
      status
      statusDetail
      balance
      amount
      useditem {
        name
      }
    }
  }
`; // 상품판매 / 포인트 충전내역
// 거래일 상품명 거래내역 거래후 잔액
