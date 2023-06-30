import { Container } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";

const getButtonStyles = (activeRoute) => {
  if (activeRoute === "/rgpd") {
    return {
      backgroundColor: "var(--light-blue2)",
      color: "var(--black)",
    };
  } else if (activeRoute === "/") {
    return {
      backgroundColor: "var(--light-blue2)",
      color: "var(--black)",
    };
  } else {
    return {
      backgroundColor: "none",
      color: "var(--black)",
    };
  }
};

export const SContainer = styled(Container)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  height: 80px;
`;

export const SButton = styled(Button)`
  && {
    color: var(--black);
    font-size: 20px;
    text-transform: none;
    font-family: Poppins SemiBold;
    font-weight: 500;
    height: 100%;
    width: 200px;
    background: none;
    text-decoration: none;
    &:hover {
      background: var(--light-blue2);
      color: var(--black);
    }
    &:focus {
      background: var(--light-blue2);
      color: var(--blue);
    }
    @media (max-width: 600px) {
      font-size: 20px;
    }
    ${(props) =>
      props.activeRoute === props.route
        ? `
          background-color: var(--light-blue2);
          color: var(--blue);
        `
        : `
          background-color: none;
          color: var(--black);
        `}
  }
`;

export const Simg = styled.img`
  width: 237px;
  height: 80px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;
