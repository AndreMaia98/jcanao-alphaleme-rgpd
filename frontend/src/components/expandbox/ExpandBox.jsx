import { Box, Grid, List, ListItem } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
  const expandBoxRef = useRef(null);

  const handleExpand = (number) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandBoxRef.current &&
        !expandBoxRef.current.containes(event.target)
      ) {
        setIsExpanded({});
      }
    };
  }, []);

  const firstGridData = data.Action.slice(0, 5);
  const secondGridData = data.Action.slice(5);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        gap: { xs: "0px", lg: "16px" },
        marginBottom: "64px",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={12} md={8} lg>
        {firstGridData.map((item) => (
          <SBox
            ref={expandBoxRef}
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
              <img
                src={Arrow}
                alt=""
                style={{
                  marginLeft: "auto",
                  transition: "transform 0.3s ease-in-out",
                  transform: isExpanded[item.Number] ? "rotate(180deg)" : "",
                }}
              />
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
                      "&::marker": {
                        color: "var(--blue)",
                      },
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
      <Grid item xs={12} sm={12} md={8} lg>
        {secondGridData.map((item) => (
          <SBox
            ref={expandBoxRef}
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
              <img
                src={Arrow}
                alt=""
                style={{
                  marginLeft: "auto",
                  transition: "transform 0.3s ease-in-out",
                  transform: isExpanded[item.Number] ? "rotate(180deg)" : "",
                }}
              />
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
                      "&::marker": {
                        color: "var(--blue)",
                      },
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
