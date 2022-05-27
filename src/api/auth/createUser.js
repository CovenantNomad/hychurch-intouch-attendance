import request, { gql } from "graphql-request";

export const hyEndpoint = "http://hychurch.duckdns.org:3000/graphql";

export const createUserMutation = gql`
  mutation singUp($name:String!,$phone:String!,$password:String!,$authenticationNumber:String!){
    signUp(input:{
      name: $name,
      phone: $phone,
      password: $password,
      authenticationNumber: $authenticationNumber
    }){
      user{
        id
        name
        phone
      }
  }
}
`;

export const createUserRequest = async (name,phone,password,passwordConfirm,authenticationNumber) => {
  return await request(hyEndpoint,createUserMutation,{name,phone,password,passwordConfirm,authenticationNumber})
}