import {
  Container
} from "@mui/material";
import {
  Button
} from "@mui/material";
import styled from "styled-components";

export const SContainer = styled(Container)
`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  @media (max-width: 1100px) {
    background: transparent;
  }
`;

export const SButton = styled(Button)
`
  && {
    color: #ffffff;
    font-size: 20px;
    text-transform: none;
    font-family: "Poppins Extra Light";
    margin: 0 20px;
  }
  `;