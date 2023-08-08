import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate.js";
import TodoHead from "./components/TodoHead.js";
import TodoList from "./components/TodoList.js";
import TodoCreate from "./components/TodoCreate.js";
import { TodoProvider } from "./TodoContext.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
