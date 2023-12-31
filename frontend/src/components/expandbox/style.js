import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  background: var(--white);
  box-shadow: 0px 3px 6px var(--gray);
  padding: 16px;
  border-radius: 8px;
  display: ${(props) => (props.isExpanded ? "block" : "flex")};
  height: ${(props) => (props.isExpanded ? "38px" : "38px")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  margin-bottom: 32px;
  position: relative;
  &:hover {
    background: var(--light-blue2);
    border: 1px solid var(--blue);
  }
`;

export const BoxExpanded = styled(Box)`
  padding: 24px;
  position: absolute;
  background: var(--white);
  box-shadow: 0px 3px 6px var(--gray);
  border-radius: 8px;
  z-index: 1;
  left: 0;
  top: 100%;
  border: 1px solid var(--blue);
  width: 100%;
  box-sizing: border-box;
`;

export const TypographyNumber = styled(Typography)`
  && {
    font-size: 48px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
    margin-right: 20px;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 500;
    font-family: Poppins Medium;
    color: var(--blue);
    padding-right: 8px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const TypographySubtitle = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 500;
    font-family: Poppins Medium;
    color: var(--black);
  }
`;
