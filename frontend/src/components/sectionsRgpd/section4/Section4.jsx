import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TypographyBox, SBox, TypographyText, TypographyTitle } from "./style";
import Button from "../../ui/buttons/button";

export default function Sec4() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters sx={{ marginTop: "265px" }}>
        <Grid
          container
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <TypographyTitle>Boas Práticas</TypographyTitle>
            <TypographyText>
              Estes documentos são um complemento aos requisitos técnicos
              envolvidos na implementação do RGPD e de Cibersegurança. Pretende
              ajudar na conformidades com as respetivas regras, sob pena de
              penalizações que certamente pretendem evitar.
            </TypographyText>
            <Box
              sx={{
                marginLeft: "33px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "33px",
                marginBottom: "33px",
              }}
            >
              <SBox>
                <TypographyBox>
                  Parte I – Deveres e responsabilidades das organizações
                </TypographyBox>
              </SBox>
              <SBox>
                <TypographyBox>
                  Parte II – Contributos para políticas e procedimentos
                </TypographyBox>
              </SBox>
              <SBox>
                <TypographyBox>Parte III – Segurança física</TypographyBox>
              </SBox>
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
