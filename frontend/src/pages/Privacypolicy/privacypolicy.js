import React from "react";
import Footer from "../../components/sections/footer";
import { Button, Container, Grid } from "@mui/material";
import { Text, Title, ButtonBack } from "./style";
import { Link } from "react-router-dom";

export default function privacypolicy() {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{ borderTop: "3px solid var(--gray-primary)" }}
      >
        <Container maxWidth="lg">
          <Grid container sx={{ paddingTop: "128px" }}>
            <Grid item xs={10}>
              <Title>Política de Privacidade</Title>
              <Text>
                A ALPHALEME, LDA adota medidas para proteger a privacidade dos
                Clientes e Utilizadores do seu website, bem como dos seus
                produtos e serviços, tendo elaborado a presente Política de
                Privacidade com o propósito de demonstrar o seu compromisso e
                respeito pelo Regulamento Geral de Proteção de Dados (RGPD).
                <br />
                Algumas das funcionalidades do website da ALPHALEME, LDA podem
                ser utilizadas sem recurso à divulgação de qualquer informação
                pessoal por parte do utilizador. <br />
                <br /> Os dados pessoais são recolhidos quando tal seja
                consentido pelo respetivo titular, e a disponibilização dos
                dados pessoais pelo titular implica o conhecimento e aceitação
                das condições constantes desta Política de Privacidade, pelo
                que, ao disponibilizar os seus dados pessoais, o Utilizador está
                a autorizar a recolha, uso e divulgação dos mesmos de acordo com
                as regras definidas nos instrumentos de recolha aplicáveis.{" "}
                <br />
                <br /> Os dados pessoais recolhidos destinam-se à utilização da
                ALPHALEME, LDA., podendo, quando autorizado pelo titular ser
                utilizados para a comunicação com os Clientes, processamento de
                pedidos de informação, pedidos de assistência, análise
                estatística, promoções e ações de marketing direto. <br />
                <br /> Os seus dados pessoais podem ser comunicados a
                prestadores de serviços da Alphaleme, subcontratados ou
                terceiros, para efeitos da prestação dos serviços, e a
                autoridades judiciais, fiscais e regulatórias, com a finalidade
                do cumprimento de imposições legais. <br />
                <br /> A ALPHALEME, LDA não divulga a terceiros quaisquer dados
                pessoais dos seus Clientes e Utilizadores, sem o seu
                consentimento, exceto quando tal seja necessário para que os
                colaboradores, funcionários, fornecedores ou parceiros
                comerciais da ALPHALEME, LDA possam fornecer um produto ou
                serviço ou executar uma função em nome da ALPHALEME, LDA, ou
                para cumprimento de ordem judicial ou de autoridade competente
                nos termos do previsto na legislação em vigor. <br />
                <br /> A ALPHALEME, LDA guarda os dados dos seus clientes e
                Utilizadores nos seus servidores localizados em Portugal. Estes
                são protegidos e mantidos de acordo com elevados níveis de
                segurança, acautelando a proteção dos dados pessoais que são
                disponibilizados pelos seus Clientes e/ou Utilizadores, contra a
                sua eventual utilização abusiva ou contra o acesso não
                autorizado. No entanto, a ALPHALEME, LDA não pode fornecer uma
                garantia absoluta relativamente aos dados do Utilizador. <br />
                <br /> A ALPHALEME, LDA adotará as precauções razoáveis para
                garantir que os seus funcionários ou colaboradores com acesso a
                dados pessoais recebam formação adequada ao seu correto
                processamento, com respeito pela presente política e pelas
                obrigações legais de proteção de dados. No caso de
                incumprimento, a ALPHALEME, LDA aplicará sanções disciplinares
                aos seus funcionários e colaboradores. <br />
                <br />
                Sempre que a ALPHALEME, LDA divulgar os dados pessoais do
                Utilizador salvaguardará o cumprimento do Regulamento Geral de
                Proteção de Dados, nomeadamente através da previsão de
                disposições contratuais que garantam que o terceiro utiliza os
                dados recebidos somente para as finalidades especificadas, e em
                conformidade com os fins descritos nesta política, e que faz uso
                de meios de segurança adequados, de forma a proteger os dados
                pessoais do Utilizador contra tratamentos ilegais ou não
                autorizados bem como contra a sua perda acidental, destruição ou
                outras ações danosas. <br />
                <br /> O website da ALPHALEME, LDA pode conter links para outros
                websites e endereços de e-mail de empresas não pertencentes à
                ALPHALEME, LDA. A presente Política de Privacidade não se aplica
                a esses websites e endereços de e-mail. <br />
                <br /> A ALPHALEME, LDA não partilha cookies com terceiros,
                incluindo fornecedores externos de dados ou websites.
                <br /> <br />A ALPHALEME, LDA reserva o direito de alterar a
                presente Política de Privacidade em qualquer altura. Quaisquer
                alterações serão publicadas nesta Política de Privacidade e as
                alterações materiais aplicar-se-ão às atividades e dados
                recolhidos no futuro. Em conformidade com o Regulamento Geral de
                Proteção de Dados, o Utilizador tem direito a obter informações
                sobre os seus dados pessoais. Tem o direito de saber que dados
                pessoais foram processados pela ALPHALEME, LDA, podendo também
                requerer para corrigir, complementar, bloquear ou eliminar os
                dados total ou parcialmente no caso de se revelarem incompletos,
                incorretos ou irrelevantes para efeitos de processamento. <br />
                <br /> Caso deseje, a qualquer momento, deixar de fazer parte da
                base de dados ALPHALEME, LDA poderá exercer esse direito,
                contactando-nos através dos seguintes meios: <br />
                <br />
                <b>Email:</b> alphaleme@alphaleme.pt
                <br />
                <b>Carta:</b> Alphaleme, Lda. – Avenida de CaboVerde, Lote 5 –
                4900-568 Viana do Castelo
                <br />
                <b>Telefone:</b> 258 800 600 - Horário de atendimento: Segunda a
                Sexta, 9.00h-13h00 e 14h00-18h00
                <br />
                <b>Site:</b> www.alphaleme.pt
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
