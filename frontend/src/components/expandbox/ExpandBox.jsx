import { Box, Grid, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import Arrow from "../../assets/icons/arrow_down.svg";
import {
  SBox,
  BoxExpanded,
  TypographyNumber,
  TypographyTitle,
  TypographySubtitle,
} from "./style";
import data from "../../data/action.json";

export default function ExpandBox() {
  const [isExpanded, setIsExpanded] = useState({});

  const handleExpand = (number) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  const firstGridData = data.Action.slice(0, 5);
  const secondGridData = data.Action.slice(5);

  return (
    <Grid container sx={{ display: "flex", gap: "16px" }}>
      <Grid item xs>
        {firstGridData.map((item) => (
          <SBox
            key={item.number}
            onClick={() => handleExpand(item.Number)}
            isExpanded={isExpanded[item.Number]}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                height: "100%",
              }}
            >
              <TypographyNumber>{item.Number}</TypographyNumber>
              <TypographyTitle>{item.Title}</TypographyTitle>
              <img src={Arrow} alt="" style={{ marginLeft: "auto" }} />
            </Box>
            {isExpanded[item.Number] && (
              <BoxExpanded>
                <TypographySubtitle>{item.Subtitle}</TypographySubtitle>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: "20px",
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  {item.Lista.map((listItem, index) => (
                    <ListItem key={index}>{listItem}</ListItem>
                  ))}
                </List>
              </BoxExpanded>
            )}
          </SBox>
        ))}
      </Grid>
      <Grid item xs>
        {secondGridData.map((item) => (
          <SBox
            key={item.number}
            onClick={() => handleExpand(item.Number)}
            isExpanded={isExpanded[item.Number]}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                height: "100%",
              }}
            >
              <TypographyNumber>{item.Number}</TypographyNumber>
              <TypographyTitle>{item.Title}</TypographyTitle>
              <img src={Arrow} alt="" style={{ marginLeft: "auto" }} />
            </Box>
            {isExpanded[item.Number] && (
              <BoxExpanded>
                <TypographySubtitle>{item.Subtitle}</TypographySubtitle>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: "20px",
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  {item.Lista.map((listItem, index) => (
                    <ListItem key={index}>{listItem}</ListItem>
                  ))}
                </List>
              </BoxExpanded>
            )}
          </SBox>
        ))}
      </Grid>
    </Grid>
  );
}
