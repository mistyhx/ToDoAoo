import gql from "graphql-tag";

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

export const PRIORITIES = gql`
  {
    toDoes(where: { prioritized: true }) {
      id
      title
      description
      date
      situation
      list {
        id
        name
      }
      prioritized
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

//mutations
export const PRIORITY_MUTATION = gql`
  mutation($toDoId: ID!) {
    updateToDo(data: { prioritized: false }, where: { id: $toDoId }) {
      id
      prioritized
    }
  }
`;

//Create a new item
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
