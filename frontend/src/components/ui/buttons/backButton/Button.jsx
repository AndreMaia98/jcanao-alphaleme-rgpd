import React from "react";
import { Button } from "@mui/material";

export default function Home({ children }) {
  return (
    <Button>
        {children}
    </Button>
  );
}
