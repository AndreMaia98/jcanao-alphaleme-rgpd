import { Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--black);
    margin-bottom: 50px;
  }
`;

export const TypographyNumber = styled(Typography)`
  && {
    font-size: 48px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--black);
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
  }
`;
