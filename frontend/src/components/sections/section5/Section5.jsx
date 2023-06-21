import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "../../ui/buttons/button";
import { TypographyText, TypographyNumber, TypographyTitle } from "./style";
import Text from "../../ui/typographys/text";

export default function Sec5() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12} align="center">
            <TypographyTitle>
              Razões principais de falhas de cibersegurança
            </TypographyTitle>
          </Grid>
          <Grid container sx={{ display: "flex", gap: "16px" }}>
            <Grid item xs>
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <TypographyNumber>1</TypographyNumber>
                <TypographyText>Falta de conhecimento</TypographyText>
              </Box>
              <Text>
                Trabalhadores com falta de conhecimento, formação. São uma das
                principais razões para quase metade dos incidentes ocorridos.
              </Text>
            </Grid>
            <Grid item xs>
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <TypographyNumber>2</TypographyNumber>
                <TypographyText>Conhecimento reduzido</TypographyText>
              </Box>
              <Text>
                Conhecimento reduzido que leva a ignorar e amenizar a
                importância que a cibersegurança tem, até que surja um incidente
                grave ou uma coima elevada.
              </Text>
            </Grid>
            <Grid item xs>
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <TypographyNumber>3</TypographyNumber>
                <TypographyText>Reagir em vez de prevenir</TypographyText>
              </Box>
              <Text>
                Tendência de colocar no fim da lista de prioridades de
                investimento, no entanto, é um dos maiores custos a nível de
                coimas em grande parte das empresas, especialmente públicas.
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "64px" }}>
          <Grid item xs={12} align="center">
            <Button>Contactar</Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
