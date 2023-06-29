import { Box, Container } from "@mui/material";
import React from "react";
import { TypographyTitle, TypographySubTitle, SBox } from "./style";
import BG from "../../../assets/images/bgRGPD.png";
import Title from "../../ui/typographys/title";
import Text from "../../ui/typographys/text";
import Button from "../../ui/buttons/button";

export default function Sec1() {
  return (
    <Container
      id="rgpd"
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
          Garanta o cumprimento Jurídico em RGPD
        </TypographySubTitle>
        <SBox>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Title>Concebemos o seu plano RGPD</Title>
            <Text>
              Todos os nossos planos tem dois objetivos principais. Garantir o
              cumprimento de todas as obrigações legais referentes ao RGPD.
              Assegurar que a implementação do primeiro objetivo afeta o mínimo
              possível o normal funcionamento do negócio.
            </Text>
          </Box>
          <Button>Saber Mais</Button>
        </SBox>
      </Container>
    </Container>
  );
}
