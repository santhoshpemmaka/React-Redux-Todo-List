import {
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO,
  SET_VISIBILITY_FILTER
} from "../containers/todoContainers";

let TodoId = 1;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: TodoId++,
    text
  };
};

export const deleteTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOOGLE_TODO,
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
