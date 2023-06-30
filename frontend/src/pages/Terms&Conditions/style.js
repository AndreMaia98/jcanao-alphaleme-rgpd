import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled(Typography)`
  && {
    font-size: 32px;
    font-family: Poppins Semibold;
    color: var(--blue);
    margin-bottom: 32px;
  }
`;

export const Title2 = styled(Typography)`
  && {
    font-size: 24px;
    font-family: Poppins Semibold;
    color: var(--blue);
    margin-bottom: 16px;
  }
`;

export const Text = styled(Typography)`
  && {
    font-size: 16px;
    font-family: Poppins Regular;
    color: var(--black);
    margin-bottom: 32px;
  }
`;

export const ButtonBack = styled(Button)`
  && {
    position: sticky;
    bottom: 0;
    top: 200px;

    font-size: 20px;
    font-family: Poppins Medium;
    color: var(--blue);
    background-color: var(--white);
    border: 1px solid var(--blue);
    width: max-content;
    padding: 8px 14px;
    text-transform: none;
    min-height: 46px;
    height: 46px;
    border-radius: 7px;
    &:hover {
      background-color: var(--blue);
      color: var(--white);
    }
  }
`;
