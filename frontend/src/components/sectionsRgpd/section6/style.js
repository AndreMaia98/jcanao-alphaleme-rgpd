import { Box, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  && {
    background: rgba(255, 255, 255, 0.74);
    border-radius: 8px;
    backdrop-filter: blur(30px);
    padding: 28px 32px;
  }
`;

export const STypography = styled(Typography)`
  && {
    font-family: Poppins Medium;
    font-size: 32px;
    color: var(--blue);
    margin-bottom: 70px;
  }
`;

export const STypographyText = styled(ListItem)`
  && {
    font-family: Poppins Regular;
    font-size: 20px;
    color: var(--black);
  }
`;
