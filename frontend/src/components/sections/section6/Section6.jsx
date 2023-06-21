import { Container, Grid, List } from "@mui/material";
import React from "react";
import { SBox,TypographyTitle,SListItem,TypographyText,TypographyText2 } from "./style";
import Title from "../../ui/typographys/title";
import Button from "../../ui/buttons/button";

export default function Sec5() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <SBox>
          <Grid container>
            <Grid item xs={12} sx={{marginBottom:'32px'}}>
              <Title>Sabia que</Title>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
              <TypographyTitle>
                Infrações muito graves podem ser punidas com coima de €10.000 a
                €50.000
              </TypographyTitle>
              <List sx={{listStyleType:'disc', pl:3 ,'& .MuiListItem-root': {
  display: 'list-item',
 },}}>
                <SListItem>
                Incumprimento da obrigação de implementar requisitos de segurança;
                </SListItem>
                <SListItem>Incumprimento da intruções de cibersegurança emitidas pelo CNCS.</SListItem>
              </List>
              <TypographyText>A negligência é punível, sendo os limites mínimos e máximos das coimas reduzidos a metade.</TypographyText>
            </Grid>
            <Grid item xs={6}>
              <TypographyTitle>
                Infrações graves podem ser punidas com coima de €3.000 a €9.000
              </TypographyTitle>
              <List sx={{listStyleType:'disc', pl:3 ,'& .MuiListItem-root': {
  display: 'list-item',
 },}}>
                <SListItem>
                Incumprimento da obrigaçãode notificar o CNCS dos incidentes de segurança da informação;
                </SListItem>
                <SListItem>Incumprimento da obrigação de notificar o CNCS do exercício de atividade no setor das infraestruturas digitais;</SListItem>
                <SListItem>Incumprimento da obrigação de notificar o CNCS da identificação como prestador de serviços digitais.</SListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container align="center" sx={{marginTop:'64px'}}>
            <Grid item xs={12}>
              <TypographyText2>Não corra riscos desnecessários</TypographyText2>
            </Grid>
            <Grid item xs={12} sx={{marginTop:'16px'}}>
              <Button>Contacte já!</Button>
            </Grid>
          </Grid>
          </Grid>
        </SBox>
      </Container>
    </Container>
  );
}
