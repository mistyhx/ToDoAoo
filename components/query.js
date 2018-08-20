import gql from "graphql-tag";

export const LIST_TODOS = gql`
  {
    toDoes {
      id
      title
      description
      date
      situation
      dataTime
    }
  }
`;
