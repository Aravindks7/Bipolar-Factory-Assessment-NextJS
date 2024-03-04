import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import video1 from "../assets/Video1.png";
import video2 from "../assets/Video2.png";
import video3 from "../assets/Video3.png";
import video4 from "../assets/Video4.png";
import Image from "next/image";

const Item = process.browser
  ? styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }))
  : Paper;

const Pages2 = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ m: 4, mb: -2 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "600", fontSize: "24px" }}
      >
        Camera Health And Alert
      </Typography>
      </Box>
      <Box sx={{ m: 4 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: 2 }}
      >
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 2, ml: 3 }}
            >
              Offline Alert
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                mt: 1,
                ml: 3,
              }}
            >
              If camera is continuously offline for
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 24, mt: 1, ml: 3 }}
            >
              12 minutes
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                mt: 2,
                ml: 3,
              }}
            >
              Send an email to
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 14, mt: 1, mb: 2, ml: 3 }}
            >
              email.com
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 2, ml: 3 }}
            >
              Health Grade
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 34, mt: 1, ml: 3 }}
            >
              96%
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                mt: 1,
                ml: 3,
              }}
            >
              Cheers, this camera had no offline time in <br />
              the last 30 days
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: 14,
                color: "#4caf50",
                mt: 1,
                mb: 2,
                ml: 3,
              }}
            >
              Grade A
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 2, ml: 3 }}
            >
              Health Logs
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 15,
                color: "grey",
                mb: 2,
                mt: 1,
                ml: 3,
                lineHeight: '1.83'
              }}
            >
              Today, 04:37 pm: Activated <br />
              23 Aug, 02:22 pm: Deactivated <br />
              21 Aug, 05:12 am: Activated <br />
              20 Aug, 02:12 am: Deactivated <br />
              19 Aug, 02:12 am: Deactivated <br />
            </Typography>
          </Card>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{ m: 4, mb: -2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "600", fontSize: "24px" }}
      >
        Recent Recordings
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "600", fontSize: "20px", textDecoration: 'underline' }}
      >
        <a href='#' style= {{color: 'black'}}>View All</a>
      </Typography>
      </div>
      </Box>
      <Box sx={{ m: 4, mb: 8 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Card variant="outlined">
            <Box sx={{ mt: 2, ml: 2 }}>
              <Image
                src={video1}
                alt="Screenshot Image"
                width={310}
                height={218}
                sx={{ ml: 2 }}
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 1, ml: 2 }}
            >
              Recording_0121
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                ml: 2,
                mb: 2,
              }}
            >
              Today, 04:42 pm
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card variant="outlined">
          <Box sx={{ mt: 2, ml: 2 }}>
              <Image
                src={video2}
                alt="Screenshot Image"
                width={310}
                height={218}
                sx={{ ml: 2 }}
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 1, ml: 2 }}
            >
              Recording_0121
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                ml: 2,
                mb: 2,
              }}
            >
              Today, 02:14 pm
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card variant="outlined">
          <Box sx={{ mt: 2, ml: 2 }}>
              <Image
                src={video3}
                alt="Screenshot Image"
                width={310}
                height={218}
                sx={{ ml: 2 }}
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 1, ml: 2 }}
            >
              Recording_0121
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                ml: 2,
                mb: 2,
              }}
            >
              Today, 02:09 pm
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card variant="outlined">
          <Box sx={{ mt: 2, ml: 2 }}>
              <Image
                src={video4}
                alt="Screenshot Image"
                width={310}
                height={218}
                sx={{ ml: 2 }}
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 600, fontSize: 16, mt: 1, ml: 2 }}
            >
              Recording_0121
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 100,
                fontSize: 14,
                color: "grey",
                ml: 2,
                mb: 2,
              }}
            >
              Today, 01:11 pm
            </Typography>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
};

export default Pages2;
