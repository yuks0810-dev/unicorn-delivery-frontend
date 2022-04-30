import * as React from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { type } from "os";

export const lightTheme = createTheme({ palette: { mode: "light" } });

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "auto",
  lineHeight: "60px",
}));

type Props = {
  data: any
}

const UnicornCards: React.VFC<Props> = ({data}) => {
  console.log(data, "here is data")
  return (
    <>
      <Item key={10} elevation={10}>
        <p style={{ padding: 0, margin: 0, height: "24px" }}>
          Created By: hoghoge
        </p>
        <p style={{ padding: 0, margin: 0 }}>Unicorn Name: {data.name}</p>
        <p style={{ padding: 0, margin: 0 }}>Unicorn Type: {data.type}</p>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100px", width: "100px" }}>
          <img
            alt=""
            src="https://img.freepik.com/free-vector/cute-unicorn-standing-icon-illustration-unicorn-mascot-cartoon-character-animal-icon-concept-white-isolated_138676-831.jpg"
            height={100}
          ></img>
        </Box>
      </Item>
    </>
  );
};

export default UnicornCards;
