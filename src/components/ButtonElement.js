import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  margin-top: 32px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: ${(props) => (props.dark ? "black" : "#01bf71")};
  color: ${(props) => (props.dark ? "white" : "#010606")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.dark ? "#01bf71" : "#fff")};
    color: #010606;
  }
`;
