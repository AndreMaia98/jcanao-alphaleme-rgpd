import React from "react";
import Footer from "../../components/sections/footer";
import { Button, Container, Grid } from "@mui/material";
import { Text, Title, ButtonBack, Title2 } from "./style";
import { Link } from "react-router-dom";

export default function cookiespolicy() {
  return (
    <>
      <Container
      id="cookies"
        maxWidth="false"
        sx={{ borderTop: "3px solid var(--gray-primary)" }}
      >
        <Container maxWidth="lg">
          <Grid container sx={{ paddingTop: "128px" }}>
            <Grid item xs={10}>
              <Title>Política de Cookies</Title>
              <Title2>O que são Cookies?</Title2>
              <Text>
                Os cookies são pequenos ficheiros de texto enviados para o seu
                computador ou dispositivo móvel quando visita websites. Os
                cookies ajudam os websites a armazenar e recuperar informação
                sobre os seus hábitos de navegação por forma a personalizar a
                navegação de acordo com as suas preferências​
              </Text>
              <Title2>Que tipos de cookies utiliza o nosso website?</Title2>
              <Text>
                Cookies de sessão: são cookies temporárias que permanecem em
                arquivo de cookies do navegador até que este abandone a página
                web, pelo que não fica qualquer registo no disco rígido do
                utilizador. A Informação recolhida por estes cookies servem para
                analisar padrões de tráfego do site. Em última análise, isso
                permite-nos melhorar o conteúdo e melhorar a usabilidade do
                site.
              </Text>
              <Text>
                Cookies de análise: São aqueles que bem tratados por nós ou por
                terceiros, nos permitem quantificar o número de utilizadores e
                realizar a medição e análise estatística de como os utilizadores
                usam o serviço oferecido. Examinamos a sua navegação no nosso
                site, com o objetivo de melhorar o fornecimento dos serviços que
                lhe disponibilizamos.
              </Text>
              <Text>
                Cookies publicitárias: São aqueles que tratadas por nós ou por
                terceiros, nos permitem gerir de uma forma mais eficaz a oferta
                de espaços publicitários que existem no site, podendo analisar
                os seus hábitos de navegação e mostrar-lhe publicidade
                relacionada com o seu perfil de navegação.
              </Text>
              <Title2>
                Quais são os cookies que utilizamos no nosso site?
              </Title2>
              <Text>
                <b>Cookies Próprios:</b> <br />
                - Cookies de sessão;
                <br /> - Armazenam a informação de categoria para mostrar as
                páginas de forma mais rápida;
                <br /> - Indicam se está atualmente logado no site;
                <br /> - ID's de sessão no servidor;
                <br /> - Informações sobre pesquisas;
                <br /> - Indicam se o utilizador autoriza o uso de cookies.
              </Text>
              <Text>
                <b>Cookies de terceiros:</b> <br />
                - Utilizados para distinguir utilizadores e sessões; <br /> -
                Utilizadas para determinar novas visitas, sessões; <br /> -
                Armazenam a fonte de tráfego para explicar como o utilizador
                chega ao site; <br /> - Utilizam-se para identificar
                utilizadores e prevenir usos fraudulentos de dados de
                utilizadores e proteger dados de utilizadores de terceiros;{" "}
                <br /> - Utilizadas para personalizar publicidade em redes de
                Publisher; <br /> - Permitem ao site recordar preferências de
                navegação, idioma, região.
              </Text>
              <Text>
                <b>Outros:</b> <br />
                - Analíticas web e vídeos; <br /> - Determina que servidor
                mostra a informação ao utilizador; <br /> - Segue as sessões
                ativas; <br /> - Determina se as cookies estão ativas; <br /> -
                Mede o tempo de resposta dos utilizadores; <br /> - Identifica
                quantas vezes nos visitou um utilizador, - Permitem saber se é a
                primeira visita ao site ou não.
              </Text>
              <Title2>O que implica não autorizar o uso de cookies?</Title2>
              <Text>
                Se preferir não permitir cookies tem a possibilidade de
                desativar os cookies no navegador de internet (browser) que
                utiliza, mas deverá ter em conta que poderá impedir que algumas
                páginas Web sejam apresentadas corretamente.
              </Text>
            </Grid>
            <Grid item xs={2} align="end">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "var(--black)",
                }}
              >
                <ButtonBack disableRipple>Voltar</ButtonBack>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
