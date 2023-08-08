import React, { useContext } from "react";
import styled from "styled-components";
import { TodoProvider, useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 30px;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    color: #868e96;
    font-size: 20px;
    margin-top: 10px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 30px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>2023년 8월 2일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
