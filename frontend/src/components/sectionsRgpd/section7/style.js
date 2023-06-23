import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  background: var(--white);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px var(--gray);
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-family: Poppins Medium;
    font-weight: 500;
    color: var(--blue);
    margin-bottom: 26px;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 26px;
    font-family: Poppins Regular;
    font-weight: 400;
    color: var(--black);
    margin-bottom: 32px;
  }
`;
