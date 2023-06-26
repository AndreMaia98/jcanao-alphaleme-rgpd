import styled from "styled-components";
import { Typography } from "@mui/material";

export const TitleTypography = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
    text-align: left;
    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
`;
