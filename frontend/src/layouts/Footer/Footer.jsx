import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/footer.json";
import { STypographyTitle, STypographyDesc } from "./styles";
import AdditionalInfo from "./components/AdditionalInfo";

export default function Footer() {
  return (
    <>
      <Container maxWidth={false} sx={{ background: "black" }}>
        <Container>
          <Grid container sx={{ marginTop: "86px" }}>
            {Object.entries(data).map(([title, items]) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={title}
                sx={{ marginTop: "86px" }}
              >
                <STypographyTitle>{title}</STypographyTitle>
                {Array.isArray(items)
                  ? items.map((item) => (
                      <Link to={item.link} key={item.text}>
                        <STypographyDesc key={item}>{item.text}</STypographyDesc>
                      </Link>
                    ))
                  : ""}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
      <AdditionalInfo />
    </>
  );
}
