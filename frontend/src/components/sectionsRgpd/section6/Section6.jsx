import { Container, Grid, List } from "@mui/material";
import React from "react";
import BottomRgpd from "../../../assets/images/bottomRGPD.png";
import { SBox, STypographyText, STypography } from "./style";

export default function Sec6() {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: `url(${BottomRgpd})`,
        marginTop: "442px",
        paddingTop: " 296px",
        paddingBottom: "480px",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={5} align="center">
            <STypography>9 Princípios para conformidade com o RGPD</STypography>
          </Grid>
        </Grid>
        <SBox>
          <Grid container>
            <Grid item xs>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  pb: 0,
                  pt: 0,
                  "& .MuiListItem-root": {
                    display: "list-item",
                    "&::marker": {
                      color: "var(--blue)",
                    },
                  },
                }}
              >
                <STypographyText>
                  Nunca compartilhe senhas de acesso a computadores ou outros
                  como email ou serviços em cloud
                </STypographyText>
                <STypographyText>
                  Mantenha os dados o mais centralizados possível para poder
                  cumprir os direitos de forma ágil
                </STypographyText>
                <STypographyText>
                  Criar registos de processamento de dados ou aderir a
                  ferramentas e plataformas que possuem tais registos
                </STypographyText>
                <STypographyText>
                  Não armazene dados confidenciais localmente no computador
                </STypographyText>
              </List>
            </Grid>
            <Grid item xs>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  pb: 0,
                  pt: 0,
                  "& .MuiListItem-root": {
                    display: "list-item",
                    "&::marker": {
                      color: "var(--blue)",
                    },
                  },
                }}
              >
                <STypographyText>
                  Mantenha qualquer documento e mídia física com dados pessoais
                  em local seguro e confidencial
                </STypographyText>
                <STypographyText>
                  Mantenha qualquer documento e mídia física com dados pessoais
                  em local seguro e confidencial
                </STypographyText>
                <STypographyText>
                  Controle o acesso a documentos com dados pessoais
                </STypographyText>
                <STypographyText>
                  Criptografar dados confidenciais
                </STypographyText>
                <STypographyText>
                  Implemente a política de segurança de documentos
                </STypographyText>
              </List>
            </Grid>
          </Grid>
        </SBox>
      </Container>
    </Container>
  );
}
