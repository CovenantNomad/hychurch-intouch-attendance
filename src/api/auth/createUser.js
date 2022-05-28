import request, { gql } from "graphql-request";
import { ENDPOINT } from "../../config/API";


export const singUpMutation = gql`
  mutation singUp(
    $name:String!,
    $phone:String!,
    $password:String!,
    $authenticationNumber:String!
  ){
    signUp(input: {
      name: $name,
      phone: $phone,
      password: $password,
      authenticationNumber: $authenticationNumber
    }){
      user{
        id
        name
      }
  }
}
`;

export const singUpRequest = async (name, phone, password, authenticationNumber) => {
  return await request(ENDPOINT, singUpMutation, { name, phone, password, authenticationNumber })
}