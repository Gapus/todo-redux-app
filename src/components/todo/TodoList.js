import React from "react";

import styled from "styled-components";

import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;

export const Container = styled.div`
  width: 400px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;
