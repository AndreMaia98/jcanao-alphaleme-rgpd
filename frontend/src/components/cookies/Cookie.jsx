import { Box, Container, Grid, List, Modal } from "@mui/material";
import React from "react";
import {
  SBox,
  SDivider,
  TypographyText,
  TypographyTitle,
  TypographyTitle2,
  SListItem,
  TypographyText2,
  ButtonAccept,
} from "./style";
import CookieIMG from "../../assets/images/cookieimg.svg";
import BG from "../../assets/images/BG.png";
import { Link } from "react-router-dom";

export default function Cookies({ handleClose }) {
  return (
    <Modal
      open={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "scroll",
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        maxWidth="false"
        sx={{
          width: "100%",
          height: "100%",
          background: `url(${BG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: { xs: "0px 0px", lg: "155px 0px" },
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <SBox>
            <Grid container>
              <Grid
                item
                lg
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginRight: "33px",
                }}
              >
                <img src={CookieIMG} alt="" style={{ height: "315px" }} />
                <TypographyTitle>Valorizamos a sua privacidade</TypographyTitle>
                <TypographyText>
                  Apenas utilizamos cookies para aprimorar sua experiência de
                  navegação. Ao clicar em "Aceitar", concorda com o uso de
                  cookies.
                </TypographyText>
                <TypographyText>
                  Verifique a nossa{" "}
                  <Link to="" target="_blank">
                    <span
                      style={{
                        color: "var(--blue)",
                        textDecoration: "underline",
                      }}
                    >
                      política de privacidade
                    </span>
                  </Link>
                  .
                </TypographyText>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "16px",
                    marginTop: "16px",
                  }}
                >
                  <ButtonAccept
                    onClick={handleClose}
                    className="btn btn-outline"
                  >
                    Aceitar
                  </ButtonAccept>
                </Box>
              </Grid>
              <Grid item sx={{ display: { xs: "none", lg: "block" } }}>
                <SDivider orientation="vertical" />
              </Grid>
              <Grid
                item
                lg
                sx={{
                  marginLeft: "33px",
                  display: { xs: "none", lg: "block" },
                }}
              >
                <TypographyTitle2>De acordo com GDPR.EU</TypographyTitle2>
                <List
                  sx={{
                    listStyle: "disc",
                    pl: 3,
                    pt: 0,
                    pb: 0,
                    "& .MuiListItem-root": {
                      display: "list-item",
                      padding: "0px",
                      "&::marker": {
                        color: "var(--blue)",
                      },
                    },
                  }}
                >
                  <SListItem>
                    O consentimento deve ser "dado livremente, específico,
                    informado e inequívoco";
                  </SListItem>
                  <SListItem>
                    A solicitação de consentimento deve ser "claramente
                    distinguível de outros assuntos" e apresentada em "linguagem
                    clara e simples";
                  </SListItem>
                  <SListItem>
                    Os titulares dos dados podem retirar o consentimento
                    previamente dado sempre que quiserem, devendo acatar a sua
                    decisão. Você não pode simplesmente mudar a base legal do
                    processamento para uma das outras justificativas,
                  </SListItem>
                  <SListItem>
                    Os titulares dos dados podem retirar o consentimento
                    previamente dado sempre que quiserem, devendo acatar a sua
                    decisão. Você não pode simplesmente mudar a base legal do
                    processamento para uma das outras justificativas;
                  </SListItem>
                  <SListItem>
                    Crianças menores de 13 anos só podem dar consentimento com
                    permissão dos pais;
                  </SListItem>
                  <SListItem>
                    É necessário manter provas documentais de consentimento.
                  </SListItem>
                </List>
                <TypographyText2>
                  Além disso, os dados não podem ser processados, a menos que os
                  titulares dos dados dêem consentimento específico e inequívoco
                  para processar os seus dados; por exemplo, se o utilizador
                  optou por uma lista de email marketing.
                </TypographyText2>
              </Grid>
            </Grid>
          </SBox>
        </Container>
      </Container>
    </Modal>
  );
}
