"use client";

import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';


export default function Form() {

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      [`&.${toggleButtonGroupClasses.disabled}`]: {
        border: 0,
      },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
    },
  }));

  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#e0e0e0" }}
    >
      <Card
        sx={{
          padding: "60px",
          maxWidth: 450,
          borderRadius: 5,
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box justifyContent="center" display="flex" sx={{ mb: 4}}>
          <Typography
            variant="body"
            sx={{ fontSize: "35px", fontWeight: "bold" }}
          >
            XYZ
          </Typography>
        </Box>
        <Box justifyContent="center" display="flex">
          <Typography variant="body" sx={{ fontSize: "30px" }}>
            Welcome Onboard
          </Typography>
        </Box>
        <Box sx={{ mt: 3, width: 500, maxWidth: "100%" }}>
          <TextField
            id="filled-basic"
            fullWidth
            label="Your Name"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "black", // Label text color
              },
            }}
            sx={{
              borderRadius: 2,
              backgroundColor: "#e7e0ec",
              "& .MuiInputBase-root": {
                backgroundColor: "#e7e0ec",
              },
            }}
          />
          <Box sx={{ mt: 2, width: 500, maxWidth: "100%" }}>
            <TextField
              id="filled-basic"
              fullWidth
              label="Company Name"
              variant="filled"
              InputLabelProps={{
                sx: {
                  color: "black", // Label text color
                },
              }}
              sx={{
                borderRadius: 2,
                backgroundColor: "#e7e0ec",
                "& .MuiInputBase-root": {
                  backgroundColor: "#e7e0ec",
                },
              }}
            />
          </Box>
          <Box sx={{ mt: 2, width: 500, maxWidth: "100%" }}>
            <FormControl fullWidth variant="filled" sx={{ backgroundColor: "#e7e0ec", borderRadius: 2 }}>
              <InputLabel id="demo-simple-select-label">Select Industry</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Industry"
                variant="filled"
                sx={{ backgroundColor: "#e7e0ec" }}
              >
                <MenuItem value={1}>Accenture</MenuItem>
                <MenuItem value={2}>Wipro</MenuItem>
                <MenuItem value={3}>Infosys</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography justifyContent="left" display="flex" variant="body" sx={{ fontSize: "15px", fontWeight: "bold" }}>
            Select Number of Locations
          </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'flex-start' }}>
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            justifyContent="left" display="flex"
          >
            <ToggleButton value="1-10"
              sx={{
                display: 'flex', gap: 2,
                padding: "7px 20px",
                fontSize: '15px',
                fontWeight: 'Bold',
                textTransform: 'capitalize',
                borderRadius: 1,

                '&.Mui-selected': {
                  backgroundColor: '#222222',
                  color: '#ffffff',
                },
                '&:not(.Mui-selected)': {
                  backgroundColor: '#e7e0ec',
                  color: '#000000',
                },
                '&.hover': {
                  backgroundColor: '#333333',
                  color: "#ffffff",
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#333333',
                  color: '#ffffff',
                }
              }}>1-10</ToggleButton>

            <ToggleButton value="10-50"
              sx={{
                display: 'flex', gap: 2,
                padding: "5px 15px",
                fontSize: '15px',
                fontWeight: 'Bold',
                textTransform: 'capitalize',
                borderRadius: 1,

                '&.Mui-selected': {
                  backgroundColor: '#222222',
                  color: '#ffffff',
                },
                '&:not(.Mui-selected)': {
                  backgroundColor: '#e7e0ec',
                  color: '#000000',
                },
                '&.hover': {
                  backgroundColor: '#333333',
                  color: "#ffffff",
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#333333',
                  color: '#ffffff',
                }
              }}>10-50</ToggleButton>

            <ToggleButton value="50-150"
              sx={{
                display: 'flex', gap: 2,
                padding: "5px 12px",
                fontSize: '15px',
                fontWeight: 'Bold',
                textTransform: 'capitalize',
                borderRadius: 1,

                '&.Mui-selected': {
                  backgroundColor: '#222222',
                  color: '#ffffff',
                },
                '&:not(.Mui-selected)': {
                  backgroundColor: '#e7e0ec',
                  color: '#000000',
                },
                '&.hover': {
                  backgroundColor: '#333333',
                  color: "#ffffff",
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#333333',
                  color: '#ffffff',
                }
              }}>50-150</ToggleButton>

            <ToggleButton value="150+"
              sx={{
                display: 'flex', gap: 2,
                padding: "5px 20px",
                fontSize: '15px',
                fontWeight: 'Bold',
                textTransform: 'capitalize',
                margin: 0.5,
                border: 0,
                borderRadius: 2,

                '&.Mui-selected': {
                  backgroundColor: '#222222',
                  color: '#ffffff',
                },
                '&:not(.Mui-selected)': {
                  backgroundColor: '#e7e0ec',
                  color: '#000000',
                },
                '&.hover': {
                  backgroundColor: '#333333',
                  color: "#ffffff",
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#333333',
                  color: '#ffffff',
                }

              }}>150+</ToggleButton>
          </StyledToggleButtonGroup>

        </Box>
        <Box justifyContent="center" display="flex" sx={{mb:2}}>
          <Button variant="contained"
            sx={{
              padding: '10px 185px',
              borderRadius: "2",
              mt: 2, backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#222222',
                color: "#ffffff",
              }
            }}>Continue</Button>
        </Box>
      </Card>
    </Box>
  );
}
