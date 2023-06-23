import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyTableTitle = styled(Typography)`
  && {
    background: var(--blue);
    padding: 8px 16px;
    font-size: 24px;
    font-family: Poppins Regular;
    color: var(--white);
  }
`;

export const TypographyTableTitle2 = styled(Typography)`
  && {
    font-size: 20px;
    font-family: Poppins Medium;
    color: var(--black);
    display: flex;
    width: 194px;
    gap: 8px;
  }
`;

export const TypographyTableText = styled(Typography)`
  && {
    font-size: 16px;
    font-family: Poppins Regular;
    color: var(--black);
    padding: 0px 16px;
  }
`;

export const SGrid = styled(Grid)`
  && {
    background: var(--white);
    border-radius: 8px 0px 0px 0px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 16px 0px;
    margin-bottom: 3px;
    height: 132px;
  }
`;

export const SGrid2 = styled(Grid)`
  && {
    background: var(--white);
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 16px 0px;
    height: 132px;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 18px;
    font-family: Poppins Regular;
    color: var(--black);
  }
`;

export const TypographyTextBlue = styled(Typography)`
  && {
    font-size: 18px;
    font-family: Poppins Medium;
    color: var(--blue);
    margin: 16px 0px;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 24px;
    font-family: Poppins SemiBold;
    color: var(--blue);
    margin-top: 48px;
    margin-bottom: 32px;
  }
`;

export const TypographyBottom = styled(Typography)`
  && {
    font-family: Poppins Regular;
    font-size: 24px;
    color: var(--black);
  }
`;
