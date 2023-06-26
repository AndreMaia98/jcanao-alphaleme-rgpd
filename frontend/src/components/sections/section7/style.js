import styled from "styled-components";
import { Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-family: Poppins SemiBold;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 32px;
  }
`;

export const TypographySubTitle = styled(Typography)`
  && {
    font-size: 20px;
    font-family: Poppins SemiBold;
    font-weight: 600;
    color: var(--black);
  }
`;

export const SImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
