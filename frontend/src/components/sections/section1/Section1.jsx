import { Container } from "@mui/material";
import React from "react";
import { TypographyTitle, TypographySubTitle, SBox } from "./style";
import BG from "../../../assets/images/BG.png";
import Title from "../../ui/typographys/title";
import Text from "../../ui/typographys/text";
import Button from "../../ui/buttons/button";

export default function Sec1() {
  return (
    <Container
      id="ciberseguranca"
      maxWidth="false"
      sx={{
        background: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <TypographyTitle>Consultoria Especializada</TypographyTitle>
        <TypographySubTitle>
          Garanta o cumprimento Jurídico de Cibersegurança
        </TypographySubTitle>
        <SBox>
          <Title>Criamos o seu plano de segurança</Title>
          <Text>
            Delineamos tudo o que necessita de aplicar e corrigir, ferramentas e
            métodos para o realizar, acompanhando ao longo da sua execução.
            Analisamos os riscos, a implementação e criamos do{" "}
            <b>relatório anual</b> e no <b>inventário de ativos</b>.<br></br>
            Providenciamos ainda formação sobre as melhores práticas para
            prevenir ciberataques e dicas/alertas para detetar os casos mais
            comuns de ciberataques.
          </Text>
          <Button>Saber Mais</Button>
        </SBox>
      </Container>
    </Container>
  );
}
