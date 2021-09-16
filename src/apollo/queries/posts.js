import { gql } from '@apollo/client';

export const QUERY_GET_POSTS = gql`
  query getPosts {
    posts(limit: 20, sort: "created_at:desc") {
      id
      title
      body
      known_tags {
        id
        tagname
      }
      canVolunteer
      planet
      people
      picture {
        url
      }
      user {
        id
        username
        firstName
        lastName
        validated
        picture {
          id
          url
        }
      }
    }
  }
`;

export const QUERY_GET_POSTS_WHERE_USER = gql`
  query getUserPosts($id: ID!) {
    posts(where: { user: { id: $id } }) {
      id
      title
      picture {
        url
      }
      planet
      known_tags {
        tagname
      }
    }
  }
`;

export const QUERY_GET_POSTS_WHERE_TAG = gql`
  query getPostsWithTags($tagname: String) {
    posts(where: { known_tags: { tagname: $tagname } }) {
      id
      title
      body
      known_tags {
        id
        tagname
      }
      canVolunteer
      people
      people
      picture {
        url
      }
      user {
        id
        username
        firstName
        lastName
        picture {
          id
          url
        }
      }
    }
  }
`;

export const QUERY_GET_ONE_POST = gql`
  query getOnePost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      canVolunteer
      people
      people
      picture {
        url
      }
      user {
        id
        username
        firstName
        lastName
        picture {
          id
          url
        }
      }
    }
  }
`;

export const QUERY_GET_ALL_POSTS_WHERE = gql`
  query getAllPostsWhere($words: String!) {
    PostText(words: $words, limit: 50, start: 0) {
      id
      title
      body
      known_tags {
        id
        tagname
      }
      canVolunteer
      people
      people
      picture {
        url
      }
      user {
        id
        username
        firstName
        lastName
        picture {
          id
          url
        }
      }
    }
  }
`;
