import { Box, Container, Grid, List } from "@mui/material";
import React from "react";
import {
  SBox,
  SDivider,
  TypographyText,
  TypographyTitle,
  ButtonDeny,
  TypographyTitle2,
  SListItem,
  TypographyText2,
} from "./style";
import CookieIMG from "../../assets/images/cookieimg.svg";
import Button from "../../components/ui/buttons/button";
import BG from "../../assets/images/BG.png";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "155px 0px",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <SBox>
          <Grid container>
            <Grid
              item
              xs
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
                  justifyContent: "center",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <Button>Aceitar</Button>
                <ButtonDeny>Recusar</ButtonDeny>
              </Box>
            </Grid>
            <Grid item>
              <SDivider orientation="vertical" />
            </Grid>
            <Grid item xs sx={{ marginLeft: "33px" }}>
              <TypographyTitle2>De acordo com GDPR.EU</TypographyTitle2>
              <List
                sx={{
                  listStyle: "disc",
                  pl: 3,
                  pt: 0,
                  pb: 0,
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
                <SListItem>
                  O consentimento deve ser "dado livremente, específico,
                  informado e inequívoco";
                </SListItem>
              </List>
              <TypographyText2>
                Além disso, os dados não podem ser processados, a menos que os
                titulares dos dados dêem consentimento específico e inequívoco
                para processar os seus dados; por exemplo, se o utilizador optou
                por uma lista de email marketing.
              </TypographyText2>
            </Grid>
          </Grid>
        </SBox>
      </Container>
    </Container>
  );
}
