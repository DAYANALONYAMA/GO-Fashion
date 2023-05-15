import { gql } from "@apollo/client";

export const GET_ALL_ROLES = gql`
query getAllRoles{
    customRoles{
      data{
        id
        attributes{
          name
          slug
        }
      }
    }
  }
`