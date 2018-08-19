import gql from "graphql-tag";

export const LIST_TODOS = gql`
  {
    toDoes {
      id
      title
      description
    }
  }
`;

export const LIST_RECEIPES = gql`
  query listRecipes {
    listRecipes {
      items {
        name
        id
      }
    }
  }
`;

export const POSTLIST = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;
