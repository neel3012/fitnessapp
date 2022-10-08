import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#28282B",
        color: "#e8e8e8",
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'column',
        marginTop:'30px'
        ,padding:'20px 0'
      }}
    >
      <Typography variant="h6">Made for Lambton college @2022</Typography>
      <small>Neel Patel</small>
    </div>
  );
}

export default Footer;
