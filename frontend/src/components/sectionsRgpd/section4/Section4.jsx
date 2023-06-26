import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyBox, SBox, TypographyText, TypographyTitle } from "./style";
import Button from "../../ui/buttons/button";
import { Link } from "react-router-dom";

export default function Sec4() {
  return (
    <Container maxWidth="false">
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          marginTop: { xs: "128px", lg: "265px" },
          marginBottom: { xs: "128px", lg: "383px" },
        }}
      >
        <Grid
          container
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} lg={6}>
            <TypographyTitle>Boas Práticas</TypographyTitle>
            <TypographyText>
              Estes documentos são um complemento aos requisitos técnicos
              envolvidos na implementação do RGPD e de Cibersegurança. Pretende
              ajudar na conformidades com as respetivas regras, sob pena de
              penalizações que certamente pretendem evitar.
            </TypographyText>
            <Box
              sx={{
                marginLeft: { xs: "0px", lg: "33px" },
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "33px",
                marginBottom: "33px",
              }}
            >
              <Link
                to="https://www.gns.gov.pt/docs/boas-praticas-i.pdf"
                target="
                _blank"
                style={{ textDecoration: "none" }}
              >
                <SBox>
                  <TypographyBox>
                    Parte I – Deveres e responsabilidades das organizações
                  </TypographyBox>
                </SBox>
              </Link>
              <Link
                to="https://www.gns.gov.pt/docs/boas-praticas-ii.pdf"
                target="
                _blank"
                style={{ textDecoration: "none" }}
              >
                <SBox>
                  <TypographyBox>
                    Parte II – Contributos para políticas e procedimentos
                  </TypographyBox>
                </SBox>
              </Link>
              <Link
                to="https://www.gns.gov.pt/docs/boas-praticas-iii.pdf"
                target="
                _blank"
                style={{ textDecoration: "none" }}
              >
                <SBox>
                  <TypographyBox>Parte III – Segurança física</TypographyBox>
                </SBox>
              </Link>
            </Box>
            <TypographyText>
              Com a nossa ajuda não necessita de se preocupar com estes
              documentos e as demais regras e requisitos que não se encontram
              aqui presentes, assim como as que ainda virão. Deixe esse trabalho
              connosco e nós iremos guia-lo ao longo de todo o processo.
            </TypographyText>
            <Box sx={{ marginTop: "33px" }}>
              <Button>Entre já em contacto</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
