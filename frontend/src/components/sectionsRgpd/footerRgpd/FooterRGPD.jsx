import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterBG from "../../../assets/images/ciber_bottom.png";
import { TypographyText, TypographyTitles, TypographyDesc } from "./style";
import Alphaleme from "../../../assets/logo/alpha_blue.svg";
import { Link } from "react-router-dom";
import FooterBottom from "../../../layouts/Footer/components/AdditionalInfo";

export default function Footer1() {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{
          background: `url(${FooterBG})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          marginTop: { xs: "128px", lg: "430px" },
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ paddingTop: "175px", paddingBottom: "47px" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                background: "var(--white)",
                padding: { xs: "16px", lg: "32px" },
              }}
            >
              <img src={Alphaleme} alt="" />
              <TypographyText>
                Companhias que se preocupam com a Proteção de Dados,
                preocupam-se com os seus clientes!
              </TypographyText>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              marginTop: "215px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                gap: "26px",
                background: "var(--white)",
                padding: { xs: "16px", lg: "32px" },
              }}
            >
              <Grid item xs={12} lg={4}>
                <TypographyTitles>Contactos</TypographyTitles>
                <TypographyDesc>
                  +351 <b>924 453 260</b> <br />
                  <span style={{ fontSize: "9px" }}>
                    (chamada para rede móvel nacional)
                  </span>
                </TypographyDesc>
                <Typography fontSize={14} fontFamily={"Poppins Regular"}>
                  alphaleme@alphaleme.pt
                </Typography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <TypographyTitles>Localização</TypographyTitles>
                <TypographyDesc>
                  R. Alexandre Herculano 15, 4º Andar, 1250-008 Lisboa (sede)
                </TypographyDesc>
                <TypographyDesc>
                  Av. de Cabo Verde, lote 5 4900-568 Viana do Castelo
                </TypographyDesc>
                <Link
                  to="https://goo.gl/maps/99aMJ8tZskjkg7Rk9"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <TypographyDesc>
                    <b>Googlemaps</b>
                  </TypographyDesc>
                </Link>
              </Grid>
              <Grid item xs={12} lg={4}>
                <TypographyTitles>Legal</TypographyTitles>
                <TypographyDesc>
                  <Link
                    to="/cookies-policy"
                    style={{
                      textDecoration: "none",
                      color: "var(--black)",
                    }}
                  >
                    Política de Cookies
                  </Link>
                </TypographyDesc>
                <TypographyDesc>
                  <Link
                    to="/privacy-policy"
                    style={{
                      textDecoration: "none",
                      color: "var(--black)",
                    }}
                  >
                    Política de Privacidade
                  </Link>
                </TypographyDesc>
                <TypographyDesc>
                  <Link
                    to="/terms-conditions"
                    style={{
                      textDecoration: "none",
                      color: "var(--black)",
                    }}
                  >
                    Termos e Condições
                  </Link>
                </TypographyDesc>
                <TypographyDesc>
                  <Link
                    to="https://www.livroreclamacoes.pt/Inicio/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "var(--black)",
                    }}
                  >
                    Livro de Reclamações
                  </Link>
                </TypographyDesc>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <FooterBottom />
    </>
  );
}
