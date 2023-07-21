import { Button } from "@mui/material";
import styled from "styled-components";

export const SButton = styled(Button)`
  && {
    border-radius: 8px;
    background: var(--blue);
    box-shadow: 0px 1px 3px var(--gray);
    padding: 10px 26px;
    font-size: 20px;
    font-family: Poppins Medium;
    font-weight: 500;
    color: var(--white);
    text-transform: none;
    &:hover {
      background: var(--blue-second);
    }
    width: max-content;
  }
`;
