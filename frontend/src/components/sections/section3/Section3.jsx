import { Box, Container } from "@mui/material";
import React from "react";
import { STypography } from "./style";
import Button from "../../ui/buttons/button";
import ExpandBox from "../../expandbox";

export default function Sec2() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <STypography align="center">Plano de Ação</STypography>
        <ExpandBox />
        <Box align="center">
          <Button>Inicie já o seu!</Button>
        </Box>
      </Container>
    </Container>
  );
}
