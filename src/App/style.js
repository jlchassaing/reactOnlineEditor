import styled from "styled-components";

export const Main = styled.main`
  font: 100% Helvetica, sans-serif;
  width: 80%;
  margin: 0 auto;
`;

export const Post = styled.article`
  border-bottom: 1px solid #e3e3e3;
`;

export const Editor = styled.div``;

export const Button = styled.button`
  line-height: 1.8em;
  padding: 0 10px;
  margin: 10px;
  background-color: #e3e3e3;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: #999;
  }
`;

export const Input = styled.input`
  line-height: 2em;
  margin: 5px 0;
`;
