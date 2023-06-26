import React, { useState } from "react";
import {
  GridContainer1,
  GridContainer2,
  STypographyContactTitle,
  STypographyContactSubText,
  STypographyContactText,
  SInput,
  SLabel,
  SSelect,
  SCheckbox,
  STypographyCheck,
  SButtonSend,
  SContainerForm,
} from "./style.js";
import { MenuItem, Grid, CircularProgress, Modal } from "@mui/material";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm({ openModal, handleClose }) {
  const options = [
    "Demo do produto",
    "Mais informação",
    "Outros Planos",
    "Entrada em contacto",
  ];

  const [loading, setLoading] = useState(false);
  const [user_name, setUser_name] = useState("");
  const [user_empresa, setUser_empresa] = useState("");
  const [user_cargo, setUser_cargo] = useState("");
  const [user_mail, setUser_mail] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [user_produto, setUser_produto] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      user_name,
      user_empresa,
      user_cargo,
      user_mail,
      user_phone,
      user_produto,
    };

    setLoading(true);

    try {
      emailjs
        .send("service_nul8gzv", "template_7zo1twq", data, "XPyM3pvsU6t-qzaRc")
        .then((result) => {
          // handleOpenMessage();
          setLoading(false);
        });
    } catch (error) {
      toast.error("Erro ao enviar o email!");
      setLoading(false);
    }
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <SContainerForm maxWidth="lg">
        <Grid container sx={{ display: "flex", gap: "32px" }}>
          <GridContainer1 item xs={12} lg>
            <STypographyContactTitle>
              Abra uma porta para o futuro
            </STypographyContactTitle>
            <STypographyContactSubText>
              Saiba como pode melhorar o seu negócio com as nossas ferramentas
              de fácil integração, adaptáveis ao detalhe de cada negócio.
            </STypographyContactSubText>
            <STypographyContactText>
              Deixe-nos o seu contacto para que lhe enviemos mais informação ou
              para marcar uma apresentação do produto sem qualquer compromisso.
            </STypographyContactText>
          </GridContainer1>

          <GridContainer2 item xs={12} lg>
            <Grid item xs>
              <SLabel>Nome</SLabel>
              <SInput
                disableUnderline={true}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </Grid>

            <Grid container sx={{ display: "flex", gap: "21px" }}>
              <Grid item xs>
                <SLabel>Empresa</SLabel>
                <SInput
                  disableUnderline={true}
                  onChange={(e) => setUser_empresa(e.target.value)}
                />
              </Grid>
              <Grid item xs>
                <SLabel>Cargo</SLabel>
                <SInput
                  disableUnderline={true}
                  onChange={(e) => setUser_cargo(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ display: "flex", gap: "21px" }}>
              <Grid item xs>
                <SLabel>Email</SLabel>
                <SInput
                  disableUnderline={true}
                  onChange={(e) => setUser_mail(e.target.value)}
                />
              </Grid>
              <Grid item xs>
                <SLabel>Telemóvel</SLabel>
                <SInput
                  name="user_phone"
                  disableUnderline={true}
                  onChange={(e) => setUser_phone(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} lg={4}>
                <SLabel>Pretendo obter</SLabel>
              </Grid>
              <Grid item xs={12} lg={8}>
                <SSelect
                  id="outlined-select-currency"
                  select="true"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiSvgIcon-root": { color: "var(--blue)" },
                    "& .MuiSelect-select": {
                      color: "var(--blue)",
                      fontSize: "20px",
                      fontWeight: "300",
                      fontFamily: "Poppins Light",
                    },
                  }}
                  onChange={(e) => setUser_produto(e.target.value)}
                  defaultValue=""
                >
                  {options.map((item, index) => (
                    <MenuItem
                      sx={{
                        fontSize: "20px",
                        fontWeight: "300",
                        fontFamily: "Poppins Light",
                        "&:hover": {
                          color: "var(--blue)",
                        },
                        selected: {
                          fontSize: "20px",
                          fontWeight: "300",
                          fontFamily: "Poppins Light",
                        },
                      }}
                      key={index}
                      value={item}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </SSelect>
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: "22px" }}>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <SCheckbox type="checkbox" />
                <STypographyCheck>
                  Li e aceito os termos de Privacidade
                </STypographyCheck>
              </Grid>
              <Grid item xs={12} lg={4} align="end">
                <SButtonSend type="submit" onClick={sendEmail}>
                  {loading ? (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: "var(--white)",
                      }}
                    />
                  ) : (
                    "Enviar"
                  )}
                </SButtonSend>
              </Grid>
            </Grid>
          </GridContainer2>
        </Grid>
      </SContainerForm>
    </Modal>
  );
}
