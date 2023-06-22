import { Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyText = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--black);
    margin-top: 16px;
  }
`;

export const TypographyTitles = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
    margin-bottom: 16px;
  }
`;

export const TypographyDesc = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--black);
    margin-bottom: 6px;
  }
`;
