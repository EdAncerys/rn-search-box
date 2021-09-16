import { client } from '../../apollo/client';
import { QUERY_USER_ACCOUNT, QUERY_USER_POSTS } from '../../apollo/queries/users';
import { setLoadingAction } from './postActions';

export const getUserAccountAction = async ({ dispatch, jwt, id }) => {
  try {
    console.log('getUserAccountAction triggered'); //debug
    setLoadingAction(dispatch, true);
    setUserAccountAction({ dispatch, userAccount: null });

    //1. get user profile and add to context
    const userAccount = await getUserAccount({ jwt, id });
    console.log('userAccount', userAccount); //debug
    setUserAccountAction({ dispatch, userAccount });
    //2. get user posts and add to context
    const userPosts = await getUserPosts({ jwt, id });
    console.log('userPosts', userPosts); //debug
    setUserPostsAction({ dispatch, userPosts });

    setLoadingAction(dispatch, false);
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
    setLoadingAction(dispatch, false);
  }
};

export const getUserAccount = async ({ jwt, id }) => {
  console.log('getUserAccount triggered'); //debug
  const getUserAccountResponse = await client.query({
    query: QUERY_USER_ACCOUNT,
    variables: { id },
    context: {
      headers: {
        authorization: jwt ? 'Bearer ' + jwt : '',
      },
    },
  });
  return getUserAccountResponse.data.user;
};

export const getUserPosts = async ({ jwt, id }) => {
  console.log('getUserAccount triggered'); //debug
  const getUserAccountResponse = await client.query({
    query: QUERY_USER_POSTS,
    variables: { id },
    context: {
      headers: {
        authorization: jwt ? 'Bearer ' + jwt : '',
      },
    },
  });
  return getUserAccountResponse.data.posts;
};

// SET CONTEXT ---------------------------------------------------------
export const setUserAccountAction = async ({ dispatch, userAccount }) => {
  console.log('setUserAccountAction triggered'); //debug
  dispatch({ type: 'SET_USER_ACCOUNT', payload: userAccount });
};

export const setUserPostsAction = async ({ dispatch, userPosts }) => {
  console.log('setUserPostsAction triggered'); //debug
  dispatch({ type: 'SET_USER_POSTS', payload: userPosts });
};
