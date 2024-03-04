import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import edit1 from "../assets/edit.svg";
import trash from "../assets/trash.svg";


const StyledTableCell = typeof window !== 'undefined' ? styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#cfd8dc",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
})) : TableCell;

const StyledTableRow = typeof window !== 'undefined' ? styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
})) : TableRow;

function createData(
  name,
  email,
  role,
  locations1,
  locations2,
  last_active,
  permissions,
  status,
  action
) {
  const locations = [locations1, locations2];
  return {
    name,
    email,
    role,
    locations,
    last_active,
    permissions,
    status,
    action,
  };
}

const rows = [
  createData("Peter John", "Peter@gmail.com", "Owner", "Adam Stall", "Coimbatore", "Sep 13, 2023 5:51 PM"," All Permissions", <Button variant="contained"
  sx={{
    padding: "2px 4px",
    fontSize: "12.5px",
    backgroundColor: "#4caf50",
    boxShadow: "none",
    mb: 1,
    "&:hover": {
      backgroundColor: "#00c853",
    },
    textTransform: "capitalize",
  }}>Active</Button>,
  <div>
    <Grid display='flex'>
    <div style={{paddingRight: 4, marginRight: 4}}>
    <Image src={edit1} alt="Icon" width={28} height={28} />
    </div>
    <div style={{paddingLeft: 4}}>
    <Image src={trash} alt="Icon" width={28} height={28} />
    </div>
    </Grid>
  </div>),

  createData("Lingan", "Lin@gmail.com", "Executive", "MMDA", "Coimbatore", "Today, 2023 2:11 PM"," 3 Permissions",<Button variant="contained"
  sx={{
    padding: "2px 4px",
    fontSize: "12.5px",
    backgroundColor: "#4caf50",
    boxShadow: "none",
    mb: 1,
    "&:hover": {
      backgroundColor: "#00c853",
    },
    textTransform: "capitalize",
  }}>Active</Button>,
  <div>
    <Grid display='flex'>
    <div style={{paddingRight: 4, marginRight: 4}}>
    <Image src={edit1} alt="Icon" width={28} height={28} />
    </div>
    <div style={{paddingLeft: 4}}>
    <Image src={trash} alt="Icon" width={28} height={28} />
    </div>
    </Grid>
  </div>),
createData("Adam", "Adam@gmail.com", "Admin", "DEO Office", "Delhi", "Sep 13, 2023 5:51 PM"," 6 Permissions", <Button variant="contained"
  sx={{
    padding: "2px 4px",
    fontSize: "12.5px",
    backgroundColor: "#4caf50",
    boxShadow: "none",
    mb: 1,
    "&:hover": {
      backgroundColor: "#00c853",
    },
    textTransform: "capitalize",
  }}>Active</Button>,
  <div>
    <Grid display='flex'>
    <div style={{paddingRight: 4, marginRight: 4}}>
    <Image src={edit1} alt="Icon" width={28} height={28} />
    </div>
    <div style={{paddingLeft: 4}}>
    <Image src={trash} alt="Icon" width={28} height={28} />
    </div>
    </Grid>
  </div>),
createData("Smith", "Smith@gmail.com", "Supervisor", "Plot Hub", "Coimbatore", "Sep 13, 2023 5:51 PM"," 5 Permissions", <Button variant="contained"
  sx={{
    padding: "2px 4px",
    fontSize: "12.5px",
    backgroundColor: "#4caf50",
    boxShadow: "none",
    mb: 1,
    "&:hover": {
      backgroundColor: "#00c853",
    },
    textTransform: "capitalize",
  }}>Active</Button>,
  <div>
    <Grid display='flex'>
    <div style={{paddingRight: 4, marginRight: 4}}>
    <Image src={edit1} alt="Icon" width={28} height={28} />
    </div>
    <div style={{paddingLeft: 4}}>
    <Image src={trash} alt="Icon" width={28} height={28} />
    </div>
    </Grid>
  </div>),
createData("John Abraham`", "Jhon@gmail.com", "Executive", "CA", "Coimbatore", "Sep 13, 2023 5:51 PM"," 2 Permissions", <Button variant="contained"
sx={{
  padding: "2px 4px",
  fontSize: "12.5px",
  backgroundColor: "#ed1c24",
  boxShadow: "none",
  mb: 1,
  "&:hover": {
    backgroundColor: "#ff2b32",
  },
  textTransform: "capitalize",
}}>Inactive</Button>,
<div>
    <Grid display='flex'>
    <div style={{paddingRight: 4, marginRight: 4}}>
    <Image src={edit1} alt="Icon" width={28} height={28} />
    </div>
    <div style={{paddingLeft: 4}}>
    <Image src={trash} alt="Icon" width={28} height={28} />
    </div>
    </Grid>
  </div>),
  
];

export default function Tables() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor="#e0e0e0"
    >
      <TableContainer component={Paper} sx={{ border: "15px solid white", maxWidth: 1100, width: "100%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", overflow: "hidden", borderRadius: "10px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "#f3f3f3"}}>
            <TableRow className="squircle"> 
              <StyledTableCell align="center"sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Name</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Email</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Role</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Locations</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Last Active</StyledTableCell>
              <StyledTableCell align="center"sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Permissions</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Status</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: "#7a7a7a" }}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">
                {Array.isArray(row.locations) ? (
                  row.locations.map((location, index) => (
                    <div key={index} style={{ fontSize: index === 1 ? "10px" : "14px", margin: "2px" }}>{location}</div>
                  ))
                ) : (
                  <div style={{ fontSize: "14px", margin: "2px" }}>{row.locations}</div>
                )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.last_active}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.permissions}
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

