import React from "react";
import Footer from "../../components/sections/footer";
import { Container, Grid } from "@mui/material";
import { Text, Title, ButtonBack, Title2 } from "./style";
import { Link } from "react-router-dom";

export default function cookiespolicy() {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{ borderTop: "3px solid var(--gray-primary)" }}
      >
        <Container maxWidth="lg">
          <Grid container sx={{ paddingTop: "128px" }}>
            <Grid item xs={10}>
              <Title>Termos e Condições</Title>
              <Title2>Termos de utilização do site</Title2>
              <Text>
                A ALPHALEME, LDA com sede na Rua Alexandre Herculano, Nº 15 - 4º
                Andar 1250-008 Lisboa, com o capital social de € 50.000,00.
                <br />A ALPHALEME, LDA pode a qualquer momento modificar,
                adicionar ou eliminar qualquer um dos Termos de Utilização do
                seu website através da atualização do conteúdo desta página. O
                Utilizador é assim aconselhado a visitar esta página
                regularmente.
              </Text>
              <Title2>Aceitação dos termos de utilização</Title2>
              <Text>
                Ao aceder a este website, o utilizador declara ter lido,
                compreendido e aceite os Termos de Utilização abaixo descritos,
                sem necessidade de qualquer ato ou consentimento posterior.
              </Text>
              <Title2>Direitos de autor</Title2>
              <Text>
                Os textos, imagens, gráficos, downloads, sons, vídeos, animação,
                e todas as outras informações juntamente com a forma como são
                representadas graficamente no website, assim como a disposição e
                a estrutura do site (Materiais e Informação), estão todos
                sujeitos aos direitos de autor da ALPHALEME, LDA.
                <br />
                <br />
                A ALPHALEME, LDA não lhe concede licença ou direitos de
                propriedade sobre os Materiais e Informação, pelo que não tem o
                direito de reproduzi-los para qualquer outro fim que não a
                utilização pessoal.
                <br />
                Nem o website nem partes do mesmo podem ser copiados,
                distribuídos, modificados ou colocados noutros sites, sem
                autorização prévia por escrito da ALPHALEME, LDA.
              </Text>
              <Title2>Links para páginas de terceiros</Title2>
              <Text>
                A ALPHALEME, LDA poderá disponibilizar links para páginas de
                terceiros no seu website. Estes sites não pertencem nem são
                operados ou controlados pela ALPHALEME, LDA e, por esta razão, a
                ALPHALEME, LDA não se responsabiliza pelo seu conteúdo. A
                utilização destes links é por sua conta e risco.
              </Text>
              <Title2>Exclusão de responsabilidade</Title2>
              <Text>
                As informações existentes neste website são fornecidas pela
                ALPHALEME, LDA no estado em que se encontram e, até à máxima
                extensão permitida pela lei aplicável, são fornecidas sem
                qualquer tipo de garantia, expressa ou implícita. Embora as
                informações sejam tidas como corretas, podem incluir erros ou
                imprecisões, e poderão ser alteradas sem aviso prévio.
              </Text>
              <Text>
                A ALPHALEME, LDA não representa nem garante que as funções ou
                aplicações contidas neste website sejam contínuas ou não tenham
                erros. A ALPHALEME, LDA não garante que o servidor e/ou o
                website não contenham vírus ou outros componentes prejudiciais.
                A ALPHALEME, LDA não garante que os materiais deste website
                sejam adequados para utilização noutros locais. É proibido o
                acesso a materiais a partir de um território em que os conteúdos
                sejam ilegais.
              </Text>
              <Title2>Descontinuação</Title2>
              <Text>
                A ALPHALEME, LDA pode descontinuar, a qualquer momento, o
                website sem aviso prévio.
              </Text>
              <Title2>Renúncia</Title2>
              <Text>
                A ALPHALEME, LDA renuncia a qualquer responsabilidade por erros
                que possam ocorrer devido a erros do sistema ou falha
                (temporária ou permanente) do website, das aplicações ou de
                outras ferramentas. Até à máxima extensão possível ao abrigo da
                lei aplicável, a ALPHALEME, LDA não se responsabilizará por
                quaisquer danos resultantes da utilização, ou da impossibilidade
                de utilização, do website.
              </Text>
              <Title2>Lei aplicável</Title2>
              <Text>
                Os presentes Termos de Utilização são regidos e elaborados de
                acordo com a legislação Portuguesa. Qualquer conflito ou
                divergência de interpretação dos mesmos será submetido ao
                Tribunal português competente.
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
