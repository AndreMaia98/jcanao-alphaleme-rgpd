import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  border: 2px solid var(--blue);
  border-radius: 8px;
  box-shadow: 0px 3px 6px var(--gray);
  padding: 33px;
  margin-top: 323px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 128px;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--black);
    text-align: left;
    max-width: 420px;
  }
`;

export const TypographyText2 = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 500;
    font-family: Poppins Medium;
    color: var(--blue);
    text-align: center;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 18px;
    font-family: Poppins Medium;
    font-weight: 500;
    color: var(--black);
    text-align: left;
  }
`;

export const SListItem = styled(ListItem)`
  && {
    font-size: 16px;
    font-family: Poppins Regular;
    color: var(--black);
    text-align: left;
  }
`;

export const Circle = styled(Box)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--blue);
  position: absolute;
  bottom: -90px;
  right: -90px;
  filter: blur(30px);
`;
