import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 88px;
    font-family: Poppins SemiBold;
    font-weight: 600;
    color: var(--black);
    text-align: left;
    margin-bottom: 16px;
    margin-top: 200px;
    @media (max-width: 768px) {
      font-size: 46px;
      margin-top: 100px;
      width: 100%;
    }
  }
`;

export const TypographySubTitle = styled(Typography)`
  && {
    font-size: 40px;
    font-family: Poppins SemiBold;
    font-weight: 600;
    color: var(--blue);
    text-align: left;
    @media (max-width: 768px) {
      font-size: 26px;
      width: 100%;
    }
  }
`;

export const SBox = styled(Box)`
  && {
    border-radius: 8px;
    background: var(--white);
    box-shadow: 0px 1px 3px var(--light-blue);
    padding: 32px;
    max-width: 660px;
    margin-top: 64px;
    margin-bottom: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    @media (max-width: 768px) {
      padding: 16px;
    }
  }
`;
