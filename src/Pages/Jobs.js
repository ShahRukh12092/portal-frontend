import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./jobs.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Grid } from "@mui/material";

const Jobs = (props) => {
  const { children, value, index, ...other } = props;

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [addjob, setAddjob] = useState(false);
  const [job, setjob] = useState({
    title: "",
    company: "",
    description: "",
    posted_by: "",
  });
  let Name, Value;
  let s = {
    title: "",
    company: "",
    description: "",
    posted_by: "",
  };
  const postjobs = async (e) => {
    e.preventDefault();
    console.log("ff");
    const { title, company, description, posted_by } = job;
    const response = await fetch("/Jobs/postjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, company, description, posted_by }),
    });
    const n = await response.json();
    if (response.status === 200) {
      setJobs([...jobs, n]);
      // job.title = "";
      // job.description = "";
      // job.posted_by = "";
      // job.company = "";
      // setjob(job);
      // setAddjob(false);
      setjob(s);
    }

    console.log(n);
  };

  const [showbtn, setshowbtn] = useState(false);
  useEffect(() => {
    // fetch("/getjobs")
    //   .then((response) => response.json())
    //   .then((data) => setJobs(data))
    //   .catch((error) => console.error(error));
    // // console.log(hello);
    getdat();

    setshowbtn(true);
  }, []);
  const getdat = async () => {
    //ry {
    // const response = await fetch("/getjobs", {
    //   method: "GET",
    //   headers: {
    //     Accept: "appllication/json",
    //     "Content-Type": "appllication/json",
    //   },
    //   credentials: "include",
    // });
    // const data = await response.json();
    // setJobs(data);
    // // sethello(data);
    // //console.log(data);
    if (!sessionStorage.getItem("center")) {
      navigate("/signin");
    }
    // } catch (err) {
    //   navigate("/signin");
    // }
  };

  // $(document).ready(function() {
  //   const text = document.getElementById("description");
  //   text.addEventListener("keyup", function height() {
  //     text.style.height = this.scrollHeight;
  //   });
  // });
  // const text = document.getElementById("description");
  // text.addEventListener("keyup", (e) => {
  //   text.style.height = e.target.scrollHeight;
  // });
  const getinput = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setjob({ ...job, [Name]: Value });
  };
  return (
    <>
      <div className="Tbody">
        {jobs.map((ele) => (
          <div key={ele._id} className="card">
            <h1 className="tit">{ele.title}</h1>
            <h2>Company :{ele.company}</h2>
            <p>{ele.description}</p> <h4>Posted by :{ele.posted_by}</h4>
          </div>
        ))}
      </div>
      {addjob && (
        <div className="jobform">
          {" "}
          <div
            onClick={() => {
              setAddjob(false);
              setjob(s);
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
                id="company"
                label="Company"
                name="company"
                placeholder="Enter the company name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Give the Description"
                name="description"
                autoComplete="family-name"
                multiline={true}
                rows={4}
              />
            </Grid>
          </Grid>
          {/* <form className="job-form" method="POST">
            <div className="title-company">
              <div className="t">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={job.title}
                  onChange={getinput}
                  placeholder="Enter the title"
                />
              </div>
              <div className="t">
                <label htmlFor="title">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={job.company}
                  onChange={getinput}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="dsc">
              <label for="description">job description</label>
              <textarea
                id="description"
                name="description"
                value={job.description}
                onChange={getinput}
                placeholder="Give the job description"
              ></textarea>
            </div>

            <div className="div1">
              <input
                type="submit"
                onClick={postjobs}
                value="Add"
                className="btn"
              />
            </div> 
          </form>*/}
        </div>
      )}
      <div
        className="addbtn"
        onClick={() => {
          setAddjob(true);
        }}
      >
        <h1 className="plus">+</h1>
      </div>
    </>
  );
};

export default Jobs;
