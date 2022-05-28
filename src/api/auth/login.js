import request, { gql } from "graphql-request";
import { ENDPOINT } from "../../config/API";

export const loginMutation = gql`
  mutation login($phone: String!, $password: String!) {
    login(input: {
      phone: $phone, 
      password: $password
    }) {
      accessToken
      user {
        id
        name
        phone
        roles
      }
    }
  }
`;

export const loginRequest = async (phone, password) => {
  return await request(ENDPOINT, loginMutation, { phone, password })
}