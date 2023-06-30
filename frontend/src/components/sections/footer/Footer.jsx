import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterBG from "../../../assets/images/footer1.svg";
import { TypographyText, TypographyTitles, TypographyDesc } from "./style";
import Alphaleme from "../../../assets/logo/alpha_blue.svg";
import { Link } from "react-router-dom";
import FooterBottom from "../../../layouts/Footer/components/AdditionalInfo";

export default function Footer2() {
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
          "@media(max-width: 768px)": {
            background: "none",
          },
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ paddingTop: "175px", paddingBottom: "47px" }}
        >
          <Grid container>
            <Grid item xs={12} lg={6}>
              <img src={Alphaleme} alt="" />
              <TypographyText>
                Garanta a segurança dos seus dados. O maior valor de qualquer
                pessoa, negócio ou tecnologia, são os seus dados.
              </TypographyText>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: "215px",
              display: "flex",
              justifyContent: "end",
              gap: "26px",
            }}
          >
            <Grid item xs={12} lg={2}>
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
            <Grid item xs={12} lg={2.5}>
              <TypographyTitles>Localização</TypographyTitles>
              <TypographyDesc>
                R. Alexandre Herculano 15 1250-008 Lisboa (sede)
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
            <Grid item xs={12} lg={2}>
              <TypographyTitles>Legal</TypographyTitles>
              <TypographyDesc>
                <Link
                  to="/cookies-policy"
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
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
        </Container>
      </Container>
      <FooterBottom />
    </>
  );
}
