import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { TextField, Typography, MenuItem } from "@mui/material";
import "./style.css";
import Galleryitem from "../components/Gallery_item";
import DualRing from "../components/DualRing";
import Jobcard from "../components/Jobcard";
import Startup from "../components/Startup";
const Gallery = () => {
  const [advanceShow, setAdvanceShow] = useState(false);
  const [advanceapply, setadvancespply] = useState(false);
  const [searchdata, setsearchdata] = useState("");
  const [currentSatus, setcurrentSatus] = useState("");
  const [department, setdepartment] = useState("");
  const [year, setYear] = useState("");
  const [Salary, setSalary] = useState("");
  const [gernal, setgernal] = useState(true);
  const [selected, setselected] = useState("");
  const [selectedValue, setselectedValue] = useState("");
  var data = {};
  const Reset = () => {
    setsearchdata("");
    setYear("");
    setdepartment("");
    setcurrentSatus("");
    setSalary("");
  };
  const showadvance = () => {
    setAdvanceShow(!advanceShow);
    Reset();
    setadvancespply(false);
  };
  const advancapply = () => {
    data = {
      name: `${searchdata}`,
      year: `${year}`,
      department: `${department}`,
      status: `${currentSatus}`,
      salary: `${Salary}`,
    };
    setadvancespply(!advanceapply);
  };
  const handlesearchdata = (value) => {
    if (advanceShow) {
      setsearchdata(value);
    } else {
      setdepartment("");
      setYear("");
      setSalary("");
      setcurrentSatus("");
      setgernal(false);
      setsearchdata(value);
      setselected("Search data");
      setselectedValue(value);
    }
  };

  const handleCurrentStatus = (value) => {
    if (advanceShow) {
      setcurrentSatus(value);
    } else {
      setdepartment("");
      setYear("");
      setsearchdata("");
      setSalary("");
      setcurrentSatus(value);
      setgernal(false);
      setselected("CURREnt Status");
      setselectedValue(value);
    }
  };

  const handledepartment = (value) => {
    if (advanceShow) {
      setdepartment(value);
    } else {
      setcurrentSatus("");
      setYear("");
      setsearchdata("");
      setSalary("");
      setdepartment(value);
      setgernal(false);
      setselected("Department");
      setselectedValue(value);
    }
  };

  const handleyear = (value) => {
    if (advanceShow) {
      setYear(value);
    } else {
      setcurrentSatus("");
      setdepartment("");
      setSalary("");
      setsearchdata("");
      setYear(value);
      setgernal(false);
      setselected("Year");
      setselectedValue(value);
    }
  };

  const handleSalary = (value) => {
    if (advanceShow) {
      setSalary(value);
    } else {
      setcurrentSatus("");
      setdepartment("");
      setYear("");
      setsearchdata("");
      setSalary(value);
      setgernal(false);
      setselected("Salary");
      setselectedValue(value);
    }
  };
  return (
    <Box>
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
      >
        <Box
          style={{
            display: "flex",
            width: advanceShow ? "12vw" : "18vw",
          }}
        >
          <TextField
            label="Search the user"
            value={searchdata}
            onChange={(e) => handlesearchdata(e.target.value)}
            sx={{ width: "95%" }}
            placeholder="Search the user"
          />
          {advanceShow ? (
            ""
          ) : (
            <i
              className="fas fa-search"
              style={{
                marginLeft: "8px",
                fontSize: "24px",
                marginTop: "20px",
              }}
            />
          )}
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
          sx={{ width: "16.3%" }}
        >
          <MenuItem value="EE">Electrical Engineer </MenuItem>
          <MenuItem value="CS">Computer Science</MenuItem>
          <MenuItem value="BBA">Business Administration</MenuItem>
          <MenuItem value="MAth">Mathematical</MenuItem>
        </TextField>{" "}
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
        <Typography>
          {!advanceShow ? (
            <Typography
              onClick={showadvance}
              sx={{
                "&:hover": {
                  fontWeight: "bold",
                },
                cursor: "pointer",
              }}
            >
              Advance Search
            </Typography>
          ) : (
            <span>
              <span className="hover" onClick={Reset}>
                RESET
              </span>
              <span
                style={{ marginLeft: "9px" }}
                className="hover green"
                onClick={advancapply}
              >
                Apply
              </span>
              <span
                style={{ marginLeft: "9px" }}
                onClick={showadvance}
                className="hover red"
              >
                Cancel
              </span>
            </span>
          )}
        </Typography>
      </Box>
      <hr />
      {advanceapply && (
        <Box height={"7vh"} bgcolor="red">
          {searchdata} {year} {department} {currentSatus}
          {Salary}
          {data.name}
        </Box>
      )}
      {!advanceapply && (
        <Typography>
          {gernal ? "GERNAL" : ` ${selected} = ${selectedValue}`}
        </Typography>
      )}

      <Box
        //bgcolor={"lightblue"}
        m={2}
        display="flex"
        justifyContent={"space-between"}
        flexWrap="wrap"
      >
        {/* <Galleryitem />
        <Galleryitem />
        <Galleryitem />
        <Galleryitem />
        <Galleryitem />
        <Galleryitem /> */}
        {/* <Jobcard /> <Jobcard /> <Jobcard /> */}
        {/* <Startup />
        <Startup />
        <Startup />
        <Startup />
        <Startup />
        <Startup />
        <Startup />
        <Startup /> */}
      </Box>
    </Box>
  );
};

export default Gallery;
