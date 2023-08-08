import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-radius: 0px 0px 16px 16px;
  border-top: 1px solid #e9ecef;
  transform: translate(0%, 100%);
  transition: 0.225s all ease-in;
  ${(props) =>
    props.open &&
    css`
      transform: translate(0%, 0%);
    `}
`;
const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  transition: 0.225s all ease-in;
`;
const CircleButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0%;

  width: 70px;
  height: 70px;
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  font-size: 55px;
  transform: translate(-50%, 53%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 53%) rotate(45deg);
    `}
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm open={open}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
