import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import bank from "../assets/bank.png";
import tooltask from "../assets/tooltask.svg";
import errortask from "../assets/errortask.svg";
import location from "../assets/location.svg";
import trash from "../assets/trash.svg";
import camera from "../assets/camera.svg";
import poll from "../assets/poll.svg";
import taskadd from "../assets/taskadd.svg";

export default function Cards() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#e0e0e0" }}
    >
      <Box mr={2} sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: "none" }}>
          <Image
            src={bank}
            alt="Screenshot Image"
            width={345}
            height={245}
            sx={{ ml: 2 }}
          />
          <CardContent sx={{ px: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", mb: 1.5 }}
              component="div"
            >
              Back Entrance-front-view Camera1
            </Typography>
            <Box display="flex">
              <Image src={tooltask} alt="Your Icon" width={18} height={18} />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                  ml: 1,
                  mb: 1.5,
                }}
                variant="body2"
                color="text.secondary"
              >
                3 Recipes Added
              </Typography>
            </Box>
            <Box display="flex">
              <Image src={errortask} alt="Your Icon" width={19} height={19} />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  mb: 1.5,
                  fontSize: "13px",
                }}
                variant="body2"
                color="text.secondary"
              >
                today, 4:45pm: Unidentified face detected
              </Typography>
            </Box>
            <Box display="flex" sx={{ mb: -3 }}>
              <Image src={location} alt="Your Icon" width={19} height={19} />
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                  ml: 1,
                  mb: 1.5,
                }}
                variant="body2"
                color="text.secondary"
              >
                Coimbatore branch
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between", px: 3 }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "2px 4px",
                fontSize: "12.5px",
                fontWeight: "bold",
                backgroundColor: "#20df61",
                boxShadow: "none",
                mb: 1,
                "&:hover": {
                  backgroundColor: "#00c853",
                },
                textTransform: "capitalize",
              }}
            >
              Active
            </Button>
            <Grid
              container
              columnSpacing={{ mr: 4, md: 4 }}
              justifyContent="flex-end"
            >
              <Grid item xs={1}>
                <Image src={trash} alt="Your Icon" width={26} height={26} />
              </Grid>
              <Grid item xs={1}>
                <Image
                  src={camera}
                  alt="Your Icon"
                  width={26}
                  height={26}
                  sx={{}}
                />
              </Grid>
              <Grid item xs={3}>
                <Image src={poll} alt="Your Icon" width={28} height={28} />
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Box>
      <Box ml={20}>
        <Card
          sx={{
            padding: "20px",
            paddingRight: '35px',
            maxWidth: 345,
            borderRadius: 2,
            boxShadow: "none",
          }}
        >
          <Image src={taskadd} alt="Your Icon" width={45} height={45} />
          <Typography
            variant="body1"
            color="#656565"
            sx={{ fontSize: "22px", mt: 1, mb: -1.5 }}
          >
            Recipe Management
          </Typography>
          <Typography
            variant="body"
            color="#656565"
            sx={{ fontSize: "11px", fontWeight: "bold", ml: 28.5 }}
          >
            Manage
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}
