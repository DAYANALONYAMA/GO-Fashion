
import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation loginMutation($identifier: String!, $password: String!) {
  login(input: { identifier: $identifier, password: $password }) {
    jwt
    user {
    id
      username
      isActive
      firstName
      lastName
      middleName
      telephone
      custom_role{
        data{
          id
          attributes{
            name
            slug
          }
        }
      }
      avatar{
        name
        url
      }
      
    }
  }
}
`