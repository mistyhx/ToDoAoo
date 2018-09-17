import gql from "graphql-tag";

export const SEARCH_TODO = gql`
  query SearchToDo($filter: String!) {
    listToDos(filter: { title: { contains: $filter } }) {
      items {
        id
        title
        description
        prioritized

        listId
        status
      }
    }
  }
`;

export const GET_TODO = gql`
  query GetToDo {
    listToDos {
      items {
        id
        title
        description
        prioritized

        listId
        status
      }
    }
  }
`;

export const GET_LISTS = gql`
  query GetLists {
    listLists {
      items {
        name
        id
        pinned
        toDoes {
          id
          title
          prioritized
          description
          status
        }
      }
    }
  }
`;

export const PINNED_LISTS = gql`
  query FilterLists {
    listLists(filter: { pinned: { eq: true } }) {
      items {
        name
        id
        pinned
        toDoes {
          id
          title
          prioritized
          description
          status
        }
      }
    }
  }
`;

export const PRIORITIES = gql`
  query GetToDoes {
    listToDos(filter: { prioritized: { eq: true } }) {
      items {
        id
        title
        description
        prioritized

        listId
        status
      }
    }
  }
`;

//mutations
export const PRIORITIZE_TODO = gql`
  mutation PrioritizeToDo($id: ID!, $prioritized: Boolean!) {
    updateToDo(input: { id: $id, prioritized: $prioritized }) {
      id
      title
      description
      status
      prioritized
      listId
    }
  }
`;

//Create a new item

export const CREATE_TODO = gql`
  mutation CreateToDo(
    $title: String!
    $description: String
    $prioritized: Boolean!
    $listId: ID!
    $status: ToDoStatus = pending
  ) {
    createToDo(
      input: {
        title: $title
        description: $description
        prioritized: $prioritized
        listId: $listId
        status: $status
      }
    ) {
      id
      title
      description
      prioritized
      listId
      status
    }
  }
`;

export const CREATE_ITEM = gql`
  mutation($title: String!) {
    createToDo(
      data: {
        title: $title
        list: { connect: { id: "cjl3xtjlqkuch0989f4y6hk40" } }
      }
    ) {
      id
      title
    }
  }
`;

/*
mutation{
    updateToDo(
        data:{
        prioritized:false
    }
    where:{
        id:"cjl3xscbxku9x098935rfnlyr"
    }

) {
        title
        prioritized
    }
}

mutation{
  createToDo(
   data:{
    title: "make cake"
    list:{connect:{
      id: "cjl3xtjlqkuch0989f4y6hk40"
    }}
    prioritized:false

  }
  ) {
    id
    title
    prioritized
    list{name}
  }
}

*/
