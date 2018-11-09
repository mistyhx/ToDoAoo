// eslint-disable
// this is an auto generated file. This will be overwritten

export const createList = `mutation CreateList($input: CreateListInput!) {
  createList(input: $input) {
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
export const updateList = `mutation UpdateList($input: UpdateListInput!) {
  updateList(input: $input) {
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
export const deleteList = `mutation DeleteList($input: DeleteListInput!) {
  deleteList(input: $input) {
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
export const createToDo = `mutation CreateToDo($input: CreateToDoInput!) {
  createToDo(input: $input) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const updateToDo = `mutation UpdateToDo($input: UpdateToDoInput!) {
  updateToDo(input: $input) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const deleteToDo = `mutation DeleteToDo($input: DeleteToDoInput!) {
  deleteToDo(input: $input) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
