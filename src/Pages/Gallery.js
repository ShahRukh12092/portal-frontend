import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, TextField, Typography, MenuItem } from "@mui/material";

const Gallery = () => {
  const [advanceShow, setAdvanceShow] = useState(false);
  const [currentSatus, setcurrentSatus] = useState("");
  const [department, setdepartment] = useState("");
  const [year, setYear] = useState("");
  const [Salary, setSalary] = useState("");
  const [gernal, setgernal] = useState(true);
  const [selected, setselected] = useState("");
  const [selectedValue, setselectedValue] = useState("");

  const showadvance = () => {
    setAdvanceShow(!advanceShow);
  };

  const handleCurrentStatus = (value) => {
    setdepartment("");
    setYear("");
    setSalary("");
    setcurrentSatus(value);
    setgernal(false);
    setselected("CURREnt Status");
    setselectedValue(value);
  };

  const handledepartment = (value) => {
    setcurrentSatus("");
    setYear("");
    setSalary("");
    setdepartment(value);
    setgernal(false);
    setselected("Department");
    setselectedValue(value);
  };

  const handleyear = (value) => {
    setcurrentSatus("");
    setdepartment("");
    setSalary("");
    setYear(value);
    setgernal(false);
    setselected("Year");
    setselectedValue(value);
  };

  const handleSalary = (value) => {
    setcurrentSatus("");
    setdepartment("");
    setYear("");
    setSalary(value);
    setgernal(false);
    setselected("Salary");
    setselectedValue(value);
  };
  return (
    <>
      <CssBaseline />
      <Box
        textAlign={"center"}
        sx={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        mt={0.2}
        ml={2}
      >
        <Box
          style={{
            display: "flex",
            width: "20vw",
          }}
        >
          <TextField
            required
            id="search"
            label="Search the user"
            //value={searchdata}
            //onChange={(e) => setsearchdata(e.target.value)}
            autoFocus
            sx={{ width: "95%" }}
            placeholder="Search the user"
          />
          <Button
            style={{
              backgroundColor: "green",
              //height: 58,
              borderRadius: 5,
              marginLeft: "8px",
              color: "white",
            }}
            type="submit"
            //onClick={handleSubmit}
          >
            Serach
          </Button>
        </Box>{" "}
        <TextField
          id="search"
          label="Passing year"
          value={year}
          onChange={(e) => handleyear(e.target.value)}
          select
          sx={{ width: "10%" }}
          placeholder="Search the user"
        >
          <MenuItem value="2014">2014</MenuItem>
          <MenuItem value="2015">2015</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </TextField>
        <TextField
          required
          id="search"
          label="Select Department"
          value={department}
          onChange={(e) => handledepartment(e.target.value)}
          select
          sx={{ width: "17%" }}
        >
          <MenuItem value="EE">Electrical Engineer </MenuItem>
          <MenuItem value="CS">Computer Science</MenuItem>
          <MenuItem value="BBA">Business Administration</MenuItem>
          <MenuItem value="MAth">Mathematical</MenuItem>
        </TextField>
        <TextField
          label="current status"
          value={currentSatus}
          onChange={(e) => handleCurrentStatus(e.target.value)}
          select
          sx={{ width: "12%" }}
          // size="small"
          // helperText="hello"
        >
          <MenuItem value="Job">Job</MenuItem>
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Both">job & studies</MenuItem>
          <MenuItem value="free">free</MenuItem>
        </TextField>{" "}
        <TextField
          label="Salary"
          value={Salary}
          onChange={(e) => handleSalary(e.target.value)}
          select
          sx={{ width: "12%" }}
          // size="small"
          // helperText="hello"
        >
          <MenuItem value="A">Less than 50K</MenuItem>
          <MenuItem value="B">50k to 75K</MenuItem>
          <MenuItem value="C">75k to 100K</MenuItem>
          <MenuItem value="D">More than 100k</MenuItem>
        </TextField>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": {
              fontWeight: "bold",
            },
          }}
          onClick={showadvance}
        >
          {!advanceShow ? "Advance Search" : "cancel"}
        </Typography>
      </Box>
      {advanceShow && (
        <Box height={"7vh"} bgcolor="red">
          helo
        </Box>
      )}
      <Typography>
        {gernal ? "GERNAL" : ` ${selected} = ${selectedValue}`}
      </Typography>
    </>
  );
};

export default Gallery;
