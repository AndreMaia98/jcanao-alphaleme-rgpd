import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import styled from "styled-components";

export const SBox = styled(Box)`
  && {
    background: var(--white);
    border-radius: 8px;
    padding: 32px;
  }
`;

export const SDivider = styled(Divider)`
  && {
    background: var(--blue-second);
    width: 2px;
    border-radius: 8px;
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    font-size: 32px;
    font-weight: 500;
    color: var(--blue);
    font-family: Poppins Medium;
    text-align: left;
    margin-bottom: 16px;
    margin-top: 33px;
  }
`;

export const TypographyTitle2 = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 600;
    color: var(--blue);
    font-family: Poppins SemiBold;
    text-align: left;
    margin-bottom: 16px;
  }
`;

export const TypographyText = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 500;
    color: var(--black);
    font-family: Poppins Medium;
    text-align: left;
    margin-bottom: 16px;
  }
`;

export const ButtonAccept = styled(Button)`
  && {
    border-radius: 8px;
    background: var(--blue);
    box-shadow: 0px 1px 3px var(--gray);
    padding: 10px 26px;
    font-size: 20px;
    font-family: Poppins Medium;
    font-weight: 500;
    color: var(--white);
    text-transform: none;
    &:hover {
      background: var(--blue-second);
    }
    width: max-content;
  }
`;

export const SListItem = styled(ListItem)`
  && {
    font-size: 16px;
    font-weight: 400;
    color: var(--black);
    font-family: Poppins Regular;
    text-align: left;
  }
`;

export const TypographyText2 = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 400;
    color: var(--black);
    font-family: Poppins Regular;
    text-align: left;
    margin-top: 16px;
  }
`;
