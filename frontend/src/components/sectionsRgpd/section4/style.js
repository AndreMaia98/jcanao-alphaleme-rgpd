import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
    margin-bottom: 16px;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--black);
  }
`;

export const SBox = styled(Box)`
  && {
    background: var(--gray-primary);
    border-radius: 8px;
    border: 1px solid var(--blue);
    padding: 12px;
  }
`;

export const TypographyBox = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--blue);
  }
`;
