// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateList = `subscription OnCreateList($id: ID, $name: String, $pinned: Boolean) {
  onCreateList(id: $id, name: $name, pinned: $pinned) {
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
export const onUpdateList = `subscription OnUpdateList($id: ID, $name: String, $pinned: Boolean) {
  onUpdateList(id: $id, name: $name, pinned: $pinned) {
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
export const onDeleteList = `subscription OnDeleteList($id: ID, $name: String, $pinned: Boolean) {
  onDeleteList(id: $id, name: $name, pinned: $pinned) {
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
export const onCreateToDo = `subscription OnCreateToDo(
  $id: ID
  $title: String
  $description: String
  $prioritized: Boolean
  $listId: ID
) {
  onCreateToDo(
    id: $id
    title: $title
    description: $description
    prioritized: $prioritized
    listId: $listId
  ) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const onUpdateToDo = `subscription OnUpdateToDo(
  $id: ID
  $title: String
  $description: String
  $prioritized: Boolean
  $listId: ID
) {
  onUpdateToDo(
    id: $id
    title: $title
    description: $description
    prioritized: $prioritized
    listId: $listId
  ) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
export const onDeleteToDo = `subscription OnDeleteToDo(
  $id: ID
  $title: String
  $description: String
  $prioritized: Boolean
  $listId: ID
) {
  onDeleteToDo(
    id: $id
    title: $title
    description: $description
    prioritized: $prioritized
    listId: $listId
  ) {
    id
    title
    description
    prioritized
    status
    listId
  }
}
`;
