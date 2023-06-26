import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  background: var(--blue);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px var(--gray);
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-family: Poppins Medium;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 26px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 26px;
    font-family: Poppins Regular;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 32px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const SImg = styled.img`
  position: absolute;
  top: -10%;
  left: -12%;
  z-index: -1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
