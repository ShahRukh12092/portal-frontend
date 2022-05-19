import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./jobs.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField, Grid } from "@mui/material";
import { Box, MenuItem } from "@material-ui/core";
import Jobcard from "../components/Jobcard";

const Jobs = (props) => {
  const { children, value, index, ...other } = props;
  const Removetags = (Removeindex) => {
    setSkils(Skills.filter((skill, index) => index !== Removeindex));
  };
  const AddTags = (Event) => {
    if (Event.key === "Enter" && Event.target.value !== "") {
      setSkils([...Skills, Event.target.value]);
      Event.target.value = "";
    }
  };
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [Skills, setSkils] = useState([]);
  const [addjob, setAddjob] = useState(false);
  const [title, settitle] = useState("");
  const [company, setcompany] = useState("");
  const [Experience, setExperience] = useState("");
  const [Description, setDescription] = useState("");
  const [btn, setbtn] = useState(false);

  // const postjobs = async (e) => {
  //   e.preventDefault();
  //   console.log("ff");
  //   const { title, company, description, posted_by } = job;
  //   const response = await fetch("/Jobs/postjob", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, company, description, posted_by }),
  //   });
  //   const n = await response.json();
  //   if (response.status === 200) {
  //     setJobs([...jobs, n]);
  //     // job.title = "";
  //     // job.description = "";
  //     // job.posted_by = "";
  //     // job.company = "";
  //     // setjob(job);
  //     // setAddjob(false);
  //     setjob(s);
  //   }

  //   console.log(n);
  // };

  const postjob = async () => {
    //alert(` ${title} ${company} ${Experience} ${Description} ${tags}`);

    try {
      //alert(typeof Skills);
      const response = await fetch("http://localhost:30001/postjob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          company,
          Description,
          Experience,
          Skills,
        }),
      });
      const n = await response.json();
      setJobs([...jobs, n]);
      //alert(JSON.stringify(n));
    } catch (error) {}
  };

  useEffect(() => {
    getdat();
  }, []);
  const getdat = async () => {
    const response = await fetch("http://localhost:30001/getjobs", {
      method: "GET",
    });
    const n = await response.json();
    setJobs(n);
    if (!sessionStorage.getItem("center") && !sessionStorage.getItem("user")) {
      navigate("/signin");
    }
    if (sessionStorage.getItem("center")) {
      setbtn(true);
    } else {
      const user = sessionStorage.getItem("user");
      if (user.isAlumni) {
        setbtn(true);
      }
    }
  };

  return (
    <>
      <Box
        m={2}
        display="flex"
        justifyContent={"space-between"}
        flexWrap="wrap"
      >
        {jobs.map((ele) => (
          <Jobcard ele={ele} />
        ))}
      </Box>
      {addjob && (
        <div className="jobform">
          {" "}
          <div
            onClick={() => {
              setAddjob(false);
            }}
            className="closebtn"
          >
            X
          </div>
          <h3>Job</h3>{" "}
          <Grid container spacing={2} sx={{ marginTop: "30px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                value={title}
                onChange={(e) => settitle(e.target.value)}
                fullWidth
                id="title"
                label="Title"
                placeholder="Enter the title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                id="company"
                label="Company"
                name="company"
                placeholder="Enter the company name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="search"
                label="Required Experience"
                value={Experience}
                onChange={(e) => setExperience(e.target.value)}
                select
                fullWidth
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermadiate">Intermadiate</MenuItem>
                <MenuItem value="Expert">Expert</MenuItem>
              </TextField>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                label="Give the Description"
                name="description"
                autoComplete="family-name"
                multiline={true}
                rows={3}
              />
            </Grid>
          </Grid>
          <div className="tags">
            <ul id="tags">
              {Skills.map((skill, index) => (
                <li className="tagItem" key={index}>
                  <span className="tagName">{skill}</span>{" "}
                  <span className="closetag">
                    <CancelIcon onClick={() => Removetags(index)} />
                  </span>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Type and Press enter to add tags"
              onKeyUp={AddTags}
            />
          </div>
          <button
            style={{
              border: "none",
              backgroundColor: "green",
              width: "50px",
              height: "40px",
              marginTop: "5px",
              borderRadius: "8px",
              fontWeight: "bolder",
              marginLeft: "50%",
            }}
            type="submit"
            onClick={postjob}
          >
            Post
          </button>
        </div>
      )}
      {btn && (
        <div
          className="addbtn"
          onClick={() => {
            setAddjob(true);
          }}
        >
          <h1 className="plus">+</h1>
        </div>
      )}
    </>
  );
};

export default Jobs;
