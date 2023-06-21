import { Container, Grid } from "@mui/material";
import React from "react";
import { TypographyText, TypographyTitle, TypographyText2 } from "./style";
import percentage27 from "../../../assets/images/27.png";
import percentage40 from "../../../assets/images/40.png";
import percentage83 from "../../../assets/images/83.png";
import percentage50 from "../../../assets/images/50.png";
import hexa257 from "../../../assets/images/257.png";

export default function Sec4() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "315px",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={10}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={percentage27} alt="" />
          </Grid>
          <Grid item xs={12} md={10} lg={6}>
            <TypographyText>
              Dos ataques foram relacionados com <b>com extorsão</b>.{" "}
            </TypographyText>
            <TypographyText>
              Destacam-se acima de tudo setores que sofram grandes prejuízos se
              tiverem os sistemas em baixo, pelo que se veem sem alternativas a
              não ser pagar valores altos para recuperar o mais rápido possível.
            </TypographyText>
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "245px",
            justifyContent: "center",
          }}
        >
          <Grid item lg={3}></Grid>
          <Grid item xs={12} md={10} lg={6}>
            <TypographyText>
              Phishing é a infeção mais comum. Em grande parte destes casos, os
              atacantes fazem-se passar por outra pessoa, enviando uma mensagem
              que contém um anexo, anexo esse que será a porta de entrada para o
              ataque real. Para garantir que simulam a pessoa certa, tentam
              sequestrar informações sobre a vítima.
            </TypographyText>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={percentage40} alt="" />
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "225px" }}>
          <Grid item xs={12} align="center">
            <Grid item xs={8.5}>
              <TypographyTitle>
                Custo médio global de violações de dados atinge máximo histório
              </TypographyTitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "175px",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={10}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={percentage83} alt="" />
          </Grid>
          <Grid item xs={12} md={10} lg={6}>
            <TypographyText>
              83% das empresas já sofreram mais do que uma violação de dados
              desde que foram criadas.
            </TypographyText>
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "127px",
            justifyContent: "center",
          }}
        >
          <Grid item lg={3}></Grid>
          <Grid item xs={12} md={10} lg={6}>
            <TypographyText>
              Mais de 50% das empresas aumentaram os custos dos seus serviços e
              bens para ajudar a suportar essas perdas e investir em métodos de
              prevenção de novos incidentes.
            </TypographyText>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            lg={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={percentage50} alt="" />
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "315px", marginBottom: "490px" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={7}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "35px",
              }}
            >
              <img src={hexa257} alt="" />
              <TypographyText2>
                Crie uma estrutura resiliente, capaz de agir, reagir e prevenir
                situações inesperadas.
              </TypographyText2>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
