import { Container, Grid } from "@mui/material";
import React from "react";
import Speed from "../../../assets/logo/speed.png";
import People from "../../../assets/logo/ios-people.png";
import Task from "../../../assets/logo/task.png";
import Button from "../../ui/buttons/button";
import Text from "../../ui/typographys/text";
import { TypographyTitle, TypographySubTitle, SImg } from "./style";
import DotBg from "../../../assets/images/253.svg";

export default function Sec7() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "297px",
            position: "relative",
          }}
        >
          <SImg
            src={DotBg}
            alt="dot"
            style={{
              position: "absolute",
              top: "50%",
              right: "-76%",
              zIndex: -1,
            }}
          />
          <Grid item xs={12} align="center">
            <TypographyTitle>
              Como ajudamos as empresas a suceder
            </TypographyTitle>
          </Grid>
          <Grid
            container
            sx={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              lg={2}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <img src={Speed} alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TypographySubTitle>
                Acelerar a sua estratégia de cibersegurança
              </TypographySubTitle>
              <Text>
                Obtenha uma análise holística do seu pessoal, processos e
                tecnologia. Fornecemos um roteiro dos serviços e produtos que o
                levarão onde você deve estar em termos de força, estratégia e
                capacidade de cibersegurança.
              </Text>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              lg={2}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <img src={People} alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TypographySubTitle>
                Alinhar todos os stakeholders
              </TypographySubTitle>
              <Text>
                Reúna participantes de várias áreas da sua organização num
                ambiente interativo onde pode obter uma visão abrangente do
                estado atual e das atualizações desejadas para os seus programas
                de segurança.
              </Text>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              lg={2}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <img src={Task} alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TypographySubTitle>Priorizar iniciativas</TypographySubTitle>
              <Text>
                Trabalhamos em conjunto consigo para entender o seu cenário de
                cibersegurança, tendo em consideração os seus recursos atuais e
                tecnologias para fazer recomendações a curto e longo prazo.
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "64px" }}>
          <Grid item xs={12} align="center">
            <Button>Entre já em contacto</Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
