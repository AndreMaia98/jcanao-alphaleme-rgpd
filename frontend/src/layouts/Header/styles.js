import { Container } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";

export const SContainer = styled(Container)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  height: 80px;
`;

export const SButton = styled(Button)`
  && {
    color: var(--blue);
    font-size: 24px;
    text-transform: none;
    font-family: Poppins Medium;
    font-weight: 500;
    &:hover {
      background: var(--white);
    }
  }
`;

export const Simg = styled.img`
  width: 237px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;
