import { Box, Container, Grid, List, ListItem } from "@mui/material";
import React from "react";
import Title from "../../ui/typographys/title";
import Text from "../../ui/typographys/text";
import { SBox, STypography } from "./style";
import Button from "../../ui/buttons/button";

export default function Sec2() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: "var(--white)",
        paddingTop: { xs: "128px", lg: "315px" },
        paddingBottom: { xs: "128px", lg: "383px" },
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{ display: "flex", gap: { xs: "32px", lg: "16px" } }}
        >
          <Grid item xs={12}>
            <Title>Beneficie com o RGPD</Title>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            <Box>
              <Text>
                Entrou em vigor dia 25 de Maio de 2018, trazendo regras mais
                rígidas e oferecendo aos cidadãos maior controlo sobre os seus
                dados pessoais. Isso significa que agora as empresas necessitam
                seguir diretrizes mais jutas em relação à proteção de dados.
              </Text>
              <br />
              <Text>
                Se lida com dados pessoais ou sensíveis, é altamente
                recomendável ter um Encarregado de Proteção de Dados (DPO). Em
                alguns casos (ex. o setor público) é até mesmo obrigatório!
              </Text>
              <br />
              <Text>
                <b>
                  A parte boa é que o RGPD permite que externalizar essa função
                  e responsabilidade para um parceiro confiável.
                </b>
              </Text>
              <br />
              <Text>
                Aproveite essa vantagem e proteja os seus dados com
                tranquilidade. Saiba mais com o Artigo 29º do RGPD.
              </Text>
            </Box>
            <Button>Obtenha um DPO</Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg
            sx={{ marginTop: { xs: "64px", lg: "0px" } }}
          >
            <SBox>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <STypography>A quem se aplica?</STypography>
                <Text>
                  A todas as organizações que procedam ao tratamento de Dados
                  Pessoais de Cidadões da UE (independemente da sua
                  localização).
                </Text>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "64px",
                }}
              >
                <STypography>
                  Obrigatoriedade de um DPO nas entidades públicas
                </STypography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 3,
                    pt: 0,
                    pb: 0,
                    color: "var(--dark)",
                    "& .MuiListItem-root": {
                      display: "list-item",
                      "&::marker": {
                        color: "var(--blue)",
                      },
                    },
                  }}
                >
                  <ListItem>
                    Obrigatoriedade de um DPO nas entidades públicas
                  </ListItem>
                  <ListItem>Por cada município;</ListItem>
                  <ListItem>
                    Nas freguesias com mais de 750 habitantes.
                  </ListItem>
                </List>
              </Box>
            </SBox>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
