import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  width: 450px;
  height: 650px;
  border-radius: 30px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
