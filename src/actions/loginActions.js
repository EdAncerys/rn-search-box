import { client } from '../apollo/client';
import { MUTATION_LOG_IN } from '../apollo/queries/users';

export const logIn = async ({ setLogInResponse }) => {
  console.log('logIn triggered'); //debug
  const { REACT_APP_LOGIN_USERNAME, REACT_APP_LOGIN_PASSWORD } = process.env;

  const logInData = {
    identifier: REACT_APP_LOGIN_USERNAME,
    password: REACT_APP_LOGIN_PASSWORD,
  };
  const logInResponse = await client.mutate({
    mutation: MUTATION_LOG_IN,
    variables: logInData,
  });
  setLogInResponse(logInResponse.data.login);

  return logInResponse.data.login;
};
