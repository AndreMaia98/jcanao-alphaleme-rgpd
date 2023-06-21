import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../../ui/typographys/title";
import Text from "../../ui/typographys/text";
import { SBox, STypography } from "./style";

export default function Sec2() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: "var(--white)",
        paddingTop: "315px",
        paddingBottom: "285px",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container sx={{ display: "flex", gap: "16px" }}>
          <Grid
            item
            xs={12}
            lg
            sx={{ display: "flex", flexDirection: "column", gap: "26px" }}
          >
            <Title>Novo Decreto-Lei 65/2021</Title>
            <Box>
              <Text>
                Define o Regime Jurídico da Segurança do Ciberespaço em
                Portugal, elencando as obrigações das entidades abrangidas no
                âmbito da certificação da cibersegurança e transpondo para a lei
                nacional o Regulamento (EU) 2019/881 do Parlamento Europeu (17
                de abril 2019).
              </Text>
              <br></br>
              <Text>
                Todos os organismos da Administração Pública, mas também as
                entidades consideradas Operadores de Infraestruturas Críticas e
                de Serviços Essenciais, e todos os Prestadores de Serviços
                Digitais, estão abrangidos pelo DL 65/2021.
              </Text>
            </Box>
          </Grid>
          <Grid item xs={12} lg>
            <SBox>
              <STypography>
                Conheça as obrigações que as entidades devem respeitar:
              </STypography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  color: "var(--dark)",
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <ListItem>
                  Comunicar ao Centro Nacional de Cibersegurança (CNCS) a
                  identidade e contatos do responsável de segurança e do
                  contacto permanente dessa mesma entidade;
                </ListItem>
                <ListItem>
                  Desenvolver um plano de segurança da informação;
                </ListItem>
                <ListItem>
                  Elaborar um inventário onde constem todos os ativos e
                  comunicá-lo ao CNCS;
                </ListItem>
                <ListItem>
                  Elaborar relatórios anuais de segurança da informação e
                  apresentá-los ao CNCS;
                </ListItem>
                <ListItem>
                  Avaliação de riscos a todos os ativos que garantam a
                  continuidade do funcionamento das redes e dos sistemas de
                  informação.
                </ListItem>
                <ListItem>
                  No caso de incidentes em matéria de cibersegurança, existe
                  ainda a obrigação destas entidades reportarem o incidente ao
                  CNCS com a maior brevidade possível.
                </ListItem>
              </List>
            </SBox>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
