// eslint-disable
// this is an auto generated file. This will be overwritten

export const getLists = `query GetLists {
  getLists {
    id
    name
    pinned
    toDoes {
      id
      title
      description
      prioritized
      status
      listId
    }
  }
}
`;
export const getToDoes = `query GetToDoes {
  getToDoes {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const getList = `query GetList($id: ID!) {
  getList(id: $id) {
    id
    name
    pinned
    toDoes {
      id
      title
      description
      prioritized
      status
      listId
    }
  }
}
`;
export const listLists = `query ListLists(
  $filter: TableListFilterInput
  $limit: Int
  $nextToken: String
) {
  listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      pinned
      toDoes {
        id
        title
        description
        prioritized
        status
        listId
      }
    }
    nextToken
  }
}
`;
export const getToDo = `query GetToDo($id: ID!) {
  getToDo(id: $id) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const listToDos = `query ListToDos(
  $filter: TableToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      prioritized
      status
      listId
    }
    nextToken
  }
}
`;
export const queryToDosByListIdIndex = `query QueryToDosByListIdIndex($listId: ID!, $first: Int, $after: String) {
  queryToDosByListIdIndex(listId: $listId, first: $first, after: $after) {
    items {
      id
      title
      description
      prioritized
      status
      listId
    }
    nextToken
  }
}
`;
