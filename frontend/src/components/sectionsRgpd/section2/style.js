import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  background: var(--white);
  border: 1px solid var(--blue);
  border-radius: 8px;
  padding: 32px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const STypography = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--black-second);
    text-align: left;
  }
`;
