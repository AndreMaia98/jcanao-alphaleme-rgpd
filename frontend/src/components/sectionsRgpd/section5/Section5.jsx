import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Title from "../../ui/typographys/title";
import {
  TypographyTableTitle,
  TypographyTableTitle2,
  SGrid,
  SGrid2,
  TypographyTableText,
  TypographyText,
  TypographyTextBlue,
  TypographyTitle,
  TypographyBottom,
  SGridMobile,
  SGrid2Mobile,
  SImg,
} from "./style";
import warning from "../../../assets/icons/warning.svg";
import warning2 from "../../../assets/icons/warning2.svg";
import Button from "../../ui/buttons/button";
import Seta from "../../../assets/images/seta.svg";

export default function Sec5() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          disableGutters
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Grid item xs={12} lg={3}>
            <Title>Coimas por inconformidade</Title>
          </Grid>
          <Grid
            item
            xs={3}
            alignSelf="end"
            borderRight={2}
            borderColor={"white"}
          >
            <TypographyTableTitle>Grandes empresas</TypographyTableTitle>
          </Grid>
          <Grid
            item
            xs={3}
            alignSelf="end"
            borderRight={2}
            borderColor={"white"}
          >
            <TypographyTableTitle>PME's</TypographyTableTitle>
          </Grid>
          <Grid item xs={3} alignSelf="end">
            <TypographyTableTitle>Pessoas Singulares</TypographyTableTitle>
          </Grid>
        </Grid>
        <SGrid
          container
          disableGutters
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Grid
            item
            xs={3}
            borderRight={2}
            borderColor={"white"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <TypographyTableTitle2>
              <img src={warning} alt="" />
              Contraordenações graves
            </TypographyTableTitle2>
          </Grid>
          <Grid item xs={3} borderRight={2} borderColor={"white"}>
            <TypographyTableText>
              5000€ a 20.000.000€ ou 4% do volume de negócios anual, a nível
              mundial, conforme o que for mais elevado
            </TypographyTableText>
          </Grid>

          <Grid item xs={3} borderRight={2} borderColor={"white"}>
            <TypographyTableText>
              2000€ a 2.000.000€ ou 4% do volume de negócios anual, a nível
              mundial, conforme o que for mais elevado
            </TypographyTableText>
          </Grid>
          <Grid item xs={3}>
            <TypographyTableText>1000€ a 500.000€</TypographyTableText>
          </Grid>
        </SGrid>
        <SGrid2
          container
          disableGutters
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Grid
            item
            xs={3}
            borderRight={2}
            borderColor={"white"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <TypographyTableTitle2>
              <img src={warning2} alt="" />
              Contraordenações muito graves
            </TypographyTableTitle2>
          </Grid>
          <Grid item xs={3} borderRight={2} borderColor={"white"}>
            <TypographyTableText>
              2500€ a 10.000.000€ ou 2% do volume de negócios anual, a nível
              mundial
            </TypographyTableText>
          </Grid>

          <Grid item xs={3} borderRight={2} borderColor={"white"}>
            <TypographyTableText>
              1000€ a 1.000.000€ ou 2% do volume de negócios anual, a nível
              mundial
            </TypographyTableText>
          </Grid>
          <Grid item xs={3}>
            <TypographyTableText>500€ a 250.000€</TypographyTableText>
          </Grid>
        </SGrid2>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{ display: { xs: "block", lg: "none" }, marginBottom: "32px" }}
        >
          <Title>Coimas por inconformidade</Title>
        </Grid>
        <SGridMobile sx={{ display: { xs: "block", lg: "none" } }}>
          <TypographyTableTitle2>
            <img src={warning} alt="" />
            Contraordenações graves
          </TypographyTableTitle2>
          <TypographyTableText>
            As coimas podem ir dos 2000€ a 20.000.000€ ou 4% do volume de
            negócios anual, a nível mundial, conforme o que for mais elevado
          </TypographyTableText>
        </SGridMobile>
        <SGrid2Mobile sx={{ display: { xs: "block", lg: "none" } }}>
          <TypographyTableTitle2>
            <img src={warning2} alt="" />
            Contraordenações muito graves
          </TypographyTableTitle2>
          <TypographyTableText>
            As coimas podem ir dos 1000€ a 10.000.000€ ou 2% do volume de
            negócios anual, a nível mundial, conforme o que for mais elevado
          </TypographyTableText>
        </SGrid2Mobile>
        <Grid container disableGutters sx={{ marginTop: "64px" }}>
          <Grid item xs={12}>
            <Grid item xs={12} lg={6}>
              <TypographyText>
                Embora estas coimas possam atingir valores bastante elevados, em
                nada se comparam com os possíveis custos de uma violação de
                dados pessoais (em situação de não conformidade com RGPD).
              </TypographyText>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: { xs: "64px", lg: "0px" },
              position: "relative",
            }}
          >
            <SImg src={Seta} alt="dot" />
            <Grid item xs={12} lg={6}>
              <TypographyTitle>Ação legal</TypographyTitle>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} lg={6}>
              <TypographyText>
                Ao abrigo dos regulamentos de proteção de dados, as organizações
                são legalmente obrigadas a demonstrar que tomaram todas as
                medidas necessárias para proteger os dados pessoais. Se esta
                segurança de dados for comprometida, quer seja intencional ou
                não, os indivíduos podem procurar uma ação legal para reclamar
                uma indemnização.
              </TypographyText>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} lg={6}>
              <TypographyTextBlue>
                A violação de dados pessoais da Equifax afetou mais de 145
                milhões de pessoas em todo o mundo, tendo custado 1.4 biliões de
                dólares em compensação aos seus clientes.
              </TypographyTextBlue>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} lg={6}>
              <TypographyText>
                Não existem sistemas impenetráveis, pelo que é sempre possível
                sofrer de uma violação de dados, no entanto, podemos atenuar o
                seu impacto drasticamente, cumprindo com os requisitos RGPD.
              </TypographyText>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "32px" }}>
          <Button>Saiba como podemos ajudar</Button>
        </Box>
        <Grid container sx={{ marginTop: { xs: " 256px", lg: "250px" } }}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} lg={8.5}>
              <TypographyBottom>
                <span
                  style={{
                    fontFamily: "Poppins SemiBold",
                    fontSize: "24px",
                    color: "var(--blue)",
                  }}
                >
                  Apoie-se
                </span>{" "}
                em nós e{" "}
                <span
                  style={{
                    fontFamily: "Poppins SemiBold",
                    fontSize: "24px",
                    color: "var(--blue)",
                  }}
                >
                  deixe de se preocupar
                </span>{" "}
                com as mudanças na legislação. Nós fazemo-lo por si!
                Acompanhamo-lo na implementação e oferecemos suporte com
                auditorias periódicas, serviços de monitorização e assistência
                na adaptação às mudanças regulatórias.
              </TypographyBottom>
              <Box sx={{ marginTop: "32px" }}>
                <Button>Contacte já!</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
