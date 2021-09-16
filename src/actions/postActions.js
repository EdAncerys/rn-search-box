import { client } from '../apollo/client';
import { QUERY_GET_POSTS } from '../apollo/queries/posts';
import { logIn } from './loginActions';

export const getPosts = async ({ setPosts }) => {
  try {
    console.log('getPosts triggered'); //debug
    //0. silent user login to get jwt

    const logInResponse = await logIn();
    const { jwt } = logInResponse;
    console.log('jwt ', jwt); //debug

    //1. get all posts and add to state
    const posts = await getPostsAction({ jwt });
    setPosts(posts);
    console.log('posts', posts); //debug
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
  }
};

export const getPostsAction = async ({ jwt }) => {
  console.log('getPostsAction triggered'); //debug
  const getUserResponse = await client.query({
    query: QUERY_GET_POSTS,
    context: {
      headers: {
        authorization: jwt ? 'Bearer ' + jwt : '',
      },
    },
  });
  return getUserResponse.data.posts;
};
