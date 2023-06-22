import React from "react";
import { Container, Grid } from "@mui/material";
import { SContainer, STypographyDesc } from "./styles";
import Linkedin from "../../../../assets/logo/linkedin.svg";
import { Link } from "react-router-dom";

export default function AdditionalInfo() {
  return (
    <SContainer maxWidth={false}>
      <Container maxWidth="lg" sx={{ height: "100%" }} disableGutters>
        <Grid
          container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Link
              to="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fpt.linkedin.com%2Fcompany%2Fjcanao"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </Link>
          </Grid>
          <Grid item>
            <STypographyDesc>
              ©2023 Alphaleme. All rights reserved.
            </STypographyDesc>
          </Grid>
        </Grid>
      </Container>
    </SContainer>
  );
}
