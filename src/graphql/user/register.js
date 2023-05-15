
import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
mutation registerMutation(
  $username: String!
  $email: String!
  $password: String!
  $firstName: String!
  $lastName: String!
  $telephone: String!
  $isActive: Boolean!
  $customRole: ID
) {
  register(
    input: {
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      telephone: $telephone
      custom_role: $customRole
      isActive: $isActive
    }
  ) {
    jwt
    user {
      id
      username
      isActive
      firstName
      lastName
      telephone
      custom_role {
        data {
          id
          attributes {
            name
            slug
          }
        }
      }
      avatar {
        name
        url
      }
    }
  }
}

`
