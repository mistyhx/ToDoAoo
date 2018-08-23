import gql from "graphql-tag";

export const LIST_TODOS = gql`
  {
    toDoes {
      id
      title
      description
      date
      situation
    }
  }
`;

export const LISTS = gql`
  {
    lists {
      id
      name
      toDoes {
        id
        title
        description
        situation
        prioritized
        date
      }
      situation
      pinned
    }
  }
`;

export const PINNED_LISTS = gql`
  {
    lists(where: { pinned: true }) {
      id
      name
      toDoes {
        id
        title
        description
        situation
        prioritized
        date
      }
      situation
      pinned
    }
  }
`;
