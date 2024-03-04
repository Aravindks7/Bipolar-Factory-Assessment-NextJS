import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import img1 from "../assets/Screenshot1.png";
import Image from "next/image";
import Card from "@mui/material/Card";
import Pages2 from "./Pages2";
import { BiVideoRecording } from "react-icons/bi";
import { TbRefreshDot } from "react-icons/tb";

export default function Pages() {
  return (
    <Box>
      <Toolbar sx={{ ml: -2, mb: 4 }}>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mb: 6}}>
        <ArrowBackIcon
          style={{
            backgroundColor: "#efefef",
            padding: "7px",
            fontSize: "38px",
            borderRadius: "20%",
          }}
        />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "600", fontSize: "40px", ml: 2 }}
          >
            VMS
          </Typography>
          <Box sx={{ ml: 0.5, mt: 2 }}>
            <Typography
              variant="body1"
              component="div"
              sx={{ fontSize: "16px", fontWeight: "Bold" }}
            >
              / Cameras / Camera details
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: "12px", color: "grey", ml: 2 }}
        >
          Bank Entrance-Front-View Camera1
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: "15px", mt: 2, ml: 2 }}
        >
          View and manage camera details, recordings and connection details
        </Typography>
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          sx={{ m: 1, mb: 7, textTransform: "capitalize", padding: "15px 20px", borderRadius: '10px', fontSize: '12px',fontWeight: 'bold' }}
        >
          Edit Camera
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          sx={{ m: 1, mb: 7, textTransform: "capitalize", padding: "15px 20px", borderRadius: '10px', fontSize: '12px',fontWeight: 'bold' }}
        >
          Deactivate
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          size="large"
          sx={{
            m: 1, mb: 7,
            backgroundColor: "white",
            color: "red",
            textTransform: "capitalize",
            padding: "15px 20px", borderRadius: '10px', fontSize: '12px',fontWeight: 'bold'
          }}
        >
          Delete Camera
        </Button>
      </Box>
      </Toolbar>

      <Box sx={{ flexGrow: 1 }}>
        <Card variant="outlined">
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<BiVideoRecording style={{ fontSize: 34 }} />}
                sx={{
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  padding: "10px 30px",
                  boxShadow: "none",
                  mt: 4,
                  ml: 4,
                }}
              >
                View Recorded Videos
              </Button>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<TbRefreshDot style={{ fontSize: 34 }} />}
                sx={{
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  padding: "10px 30px",
                  boxShadow: "none",
                  mt: 4,
                  ml: 2,
                }}
              >
                Refetch Camera
              </Button>
            </Box>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                sx={{ textAlign: "left", mt: 4, ml: 3, mr: 40 }}
              >
                <Image
                  src={img1}
                  alt="Screenshot Image"
                  width={800}
                  height={453}
                />
              </Grid>
              <Grid item xs={5} sx={{ textAlign: "left", mt: 4.5 }}>
                <Card variant="outlined">
                  <Box sx={{ mb: -2 }}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ flexGrow: 1, textAlign: "left", mt: 4 }}>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: 600, fontSize: 26, ml: 3 }}
                        >
                          Camera Details
                        </Typography>
                      </Box>
                      <Box sx={{ m: 3 }}>
                        <Button
                          size="small"
                          sx={{
                            m: 1,
                            backgroundColor: "#21e062",
                            color: "white",
                            textTransform: "capitalize", // Ensures the text is in lowercase
                            "&:hover": {
                              backgroundColor: "#22e563", // Change background color on hover
                            },
                            fontWeight: 'bold'
                          }}
                        >
                          Active
                        </Button>
                      </Box>
                    </Box>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
                      >
                        Location:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2 }}
                      >
                        Coimbatore
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
                      >
                        City:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2 }}
                      >
                        Coimbatore
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
                      >
                        Timezone:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2 }}
                      >
                        Delhi-India
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
                      >
                        Date added:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2 }}
                      >
                        Aug 03, 2023 12:01:42 PM
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2 }}
                      >
                        Last update:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2 }}
                      >
                        Aug 03, 2023 12:01:42 PM
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 3 }}
                      >
                        Manufacture details:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 3 }}
                      >
                        ADT
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ fontWeight: "bold", ml: 3, mt: 2, mb: 10 }}
                      >
                        RTSP/HLS URL:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ ml: 1, mt: 2, mb: 10 }}
                      >
                        <a href="#">Copy URL</a>
                      </Typography>
                    </div>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Pages2 />
          </AppBar>
        </Card>
      </Box>
    </Box>
  );
}
