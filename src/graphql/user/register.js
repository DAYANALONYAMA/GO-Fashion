
import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
mutation registerMutation(
  $username: String!
  $email: String!
  $password: String!
  $firstName: String!
  $lastName: String!
  $middleName: String!
  $birthDate: Date!
  $telephone: String!
  $isActive: Boolean!
  $customRole: ID
) {
  register(
    input: {
      middleName: $middleName
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      birthDate: $birthDate
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
      middleName
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
