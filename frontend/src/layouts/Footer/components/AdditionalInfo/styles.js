import { Container, Typography } from "@mui/material";
import styled from "styled-components";


export const STypographyDesc = styled(Typography)`
  && {
    font-weight: 400;
    font-family: Poppins Regular;
    font-size: 16px;
    color: black;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;

export const SContainer = styled(Container)`
  && {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const STypography = styled(Typography)`
  && {
    font-weight: 600;
    font-family: Poppins Semi Bold;
    font-size: 20px;
    color: black;
    text-align: left;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;
