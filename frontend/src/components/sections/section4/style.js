import { Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyText = styled(Typography)`
  && {
    font-size: 20px;
    font-family: Poppins Regular;
    color: var(--blue);
    text-align: left;
  }
`;

export const TypographyText2 = styled(Typography)`
  && {
    font-size: 24px;
    font-family: Poppins Medium;
    color: var(--blue);
    text-align: left;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 48px;
    font-family: Poppins Medium;
    color: var(--black);
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const SImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
