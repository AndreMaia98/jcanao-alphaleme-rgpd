import { Container, Grid } from "@mui/material";
import React from "react";
import {
  SBox,
  TypographyDesc,
  TypographyTitle,
  TypographyTitleSection,
} from "./style";

export default function Sec3() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid container disableGutters>
          <Grid item xs={12} align="center" sx={{ marginBottom: "32px" }}>
            <TypographyTitleSection>Fases do Processo</TypographyTitleSection>
          </Grid>
          <Grid
            container
            sx={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={4} lg>
              <SBox>
                <TypographyTitle>Avaliação</TypographyTitle>
                <TypographyDesc>
                  Realizamos uma avaliação de alto a baixo de modo a compreender
                  a sua situação atual e possíveis obstáculos para garantir que
                  se encontra em conformidade com o RGPD.
                </TypographyDesc>
              </SBox>
            </Grid>
            <Grid item xs={12} sm={4} lg>
              <SBox>
                <TypographyTitle>Diagnóstico</TypographyTitle>
                <TypographyDesc>
                  Após uma avaliação, criamos um diagnóstico pormenorizado com
                  todas as alterações que serão necessárias realizar e quais as
                  possíveis soluções de implementação, tentando amenizar o
                  distúrbio do negócio.
                </TypographyDesc>
              </SBox>
            </Grid>
            <Grid item xs={12} sm={4} lg>
              <SBox>
                <TypographyTitle>Implementação</TypographyTitle>
                <TypographyDesc>
                  Uma vez definida a solução ideal, iniciamos a Implementação e
                  garantimos que está tudo de acordo com o plano.
                </TypographyDesc>
              </SBox>
            </Grid>
            <Grid item xs={12} sm={4} lg>
              <SBox>
                <TypographyTitle>DPO</TypographyTitle>
                <TypographyDesc>
                  Acompanha-lo ao longo dos anos prestando o serviço de DPO
                  (Encarregado de Proteção de Dados), garantindo o cumprimento
                  das obrigações legais, acompanhamento e adaptação às novas
                  leis ainda implementação e formação de boas práticas.
                </TypographyDesc>
              </SBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
