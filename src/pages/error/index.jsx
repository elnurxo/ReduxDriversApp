import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import errorPageImg from "../../assets/errorpage.jpg";

function ErrorPage() {
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <h1
          style={{
            margin: "30px 0",
            display: "block",
            fontWeight: "bolder",
            marginTop: "120px",
          }}
        >
          You got something wrong... It's error page
        </h1>
        <Button style={{marginBottom:'14px'}} variant="contained">
          <Link style={{color:'white'}} to="/">Go Back to Home</Link>
        </Button>
        <Box
          sx={{
            width: "63%",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;",
          }}
        >
          <img width="100%" src={errorPageImg} alt="error page" />
        </Box>
      </Box>
    </div>
  );
}

export default ErrorPage;
