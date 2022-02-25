import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      updatedAt
      deletedAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
