import { Container, Typography } from "@mui/material";
import React from "react";
import { SBox } from "./style";

export default function Sec5() {
  return (
    <Container maxWidth="false">
      <Container maxWidth="lg" disableGutters>
        <SBox>
          <Grid container>
            <Grid item>
              <Typography>Sabia que</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Infrações muito graves podem ser punidas com coima de €10.000 a
                €50.000
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                Infrações graves podem ser punidas com coima de €3.000 a €9.000
              </Typography>
            </Grid>
          </Grid>
        </SBox>
      </Container>
    </Container>
  );
}
