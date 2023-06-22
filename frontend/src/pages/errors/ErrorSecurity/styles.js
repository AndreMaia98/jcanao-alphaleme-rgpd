import { Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 26px;
    font-family: Poppins SemiBold;
    color: var(--white);
    text-align: left;
    margin-bottom: 32px;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 16px;
    font-family: Poppins Regular;
    color: var(--white);
    text-align: left;
  }
`;
