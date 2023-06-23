import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyTitleSection = styled(Typography)`
  && {
    && {
      font-size: 32px;
      font-weight: 600;
      font-family: Poppins SemiBold;
      color: var(--blue);
    }
  }
`;

export const SBox = styled(Box)`
  && {
    background: var(--gray-primary);
    border-radius: 8px;
    padding: 32px;
    min-height: 340px;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 20px;
    font-family: Poppins Medium;
    color: var(--blue);
    margin-bottom: 12px;
  }
`;

export const TypographyDesc = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 16px;
    font-family: Poppins Regular;
    color: var(--black);
  }
`;
