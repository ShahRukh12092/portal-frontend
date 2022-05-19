import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { RadioGroup } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import * as Yup from "yup";
const Register = () => {
  const initialValues = {
    name: "",
    cnic: "",
    email: "",
    phonenumber: "",
    passingyear: "",
    department: "",
    password: "",
    Cpassword: "",
    status: "",
    filed: "",
    designation: "",
    company: "",
    city: "",
    degree: "",
    uni: "",
  };
  const Onsubmit = async (values, props) => {
    console.log(values);
    const {
      name,
      cnic,
      email,
      phonenumber,
      passingyear,
      department,
      password,
      status,
      filed,
      designation,
      company,
      city,
      degree,
      uni,
    } = values;
    try {
      //alert(typeof Skills);
      const response = await fetch("http://localhost:30001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          cnic,
          email,
          phonenumber,
          passingyear,
          department,
          password,
          status,
          filed,
          designation,
          company,
          city,
          degree,
          uni,
        }),
      });
      const n = await response.json();
      alert(JSON.stringify(n));
    } catch (error) {
      console.log(error);
    }
    alert(JSON.stringify(values));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, "It's too short").required("Plz enter the name"),
    cnic: Yup.number("plz enter the numbers not Characters")
      .required("Plz enter CNIC")
      .test("len", "Must be exactly  13 number digit", (val) => {
        if (val) return val.toString().length === 13;
      }),
    email: Yup.string()
      .email("Enter valid email")
      .required("plz enter the email"),
    status: Yup.string()
      .oneOf(["Job", "Free", "Study", "Both"], "Required")
      .required("plz select your current status"),
    phonenumber: Yup.string()
      .typeError("Enter valid Phone Number")
      .required("plz enter phone number")
      .matches(/^[0-9]{11}$/, "Only 11 digits and not characters allowed"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    Cpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    department: Yup.string().required("plz select the Department"),
    passingyear: Yup.string().required("plz select the Passing Year"),
    // filed: Yup.string().required("plz select the your job filed"),
    // designation: Yup.string().required("plz select the Designation"),
    // company: Yup.string().required("plz enter your company"),
    // city: Yup.string().required("plz enter city were you are doing job"),
    // degree: Yup.string().required("plz select your current degree"),
    // uni: Yup.string().required("plz select the Unveristy"),
  });

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        p={1}
        boxShadow={2}
        bgcolor={"white"}
        mt={"3%"}
        borderRadius={5}
        width="50%"
        position={"sticky"}
        // boxShadow={"3px 3px 3px 3px black"}
        height={"fit-content"}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={Onsubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {console.log(props.values)}
              <Grid container spacing={2} sx={{ marginTop: "30px" }}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="name"
                    required
                    fullWidth
                    label="Name"
                    helperText={<ErrorMessage name="name" />}
                    error={props.errors.name && props.touched.name}
                    placeholder="Enter the Name"
                    variant="outlined"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="cnic"
                    label="Enter CNIC"
                    placeholder="Enter CNIC without dashes"
                    variant="outlined"
                    helperText={<ErrorMessage name="cnic" />}
                    error={props.errors.cnic && props.touched.cnic}
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="email"
                    type={"email"}
                    label="Email"
                    variant="outlined"
                    placeholder="Enter the Email"
                    helperText={<ErrorMessage name="email" />}
                    error={props.errors.email && props.touched.email}
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="phonenumber"
                    helperText={<ErrorMessage name="phonenumber" />}
                    error={
                      props.errors.phonenumber && props.touched.phonenumber
                    }
                    label="Phone number"
                    placeholder="03---------"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    label="Passing year"
                    select
                    fullWidth
                    name="passingyear"
                    required
                    helperText={<ErrorMessage name="passingyear" />}
                    error={
                      props.errors.passingyear && props.touched.passingyear
                    }
                    variant="outlined"
                  >
                    <MenuItem value="2014">2014</MenuItem>
                    <MenuItem value="2015">2015</MenuItem>
                    <MenuItem value="2016">2016</MenuItem>
                    <MenuItem value="2017">2017</MenuItem>
                    <MenuItem value="2018">2018</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    required
                    name="department"
                    variant="outlined"
                    label="Select Department"
                    select
                    helperText={<ErrorMessage name="department" />}
                    error={props.errors.department && props.touched.department}
                  >
                    <MenuItem value="EE">Electrical Engineer </MenuItem>
                    <MenuItem value="CS">Computer Science</MenuItem>
                    <MenuItem value="BBA">Business Administration</MenuItem>
                    <MenuItem value="MAth">Mathematical</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="password"
                    label="Password"
                    variant="outlined"
                    error={props.errors.password && props.touched.password}
                    helperText={<ErrorMessage name="password" />}
                    placeholder="Enter Password"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="Cpassword"
                    label="Confirm Password"
                    variant="outlined"
                    error={props.errors.Cpassword && props.touched.Cpassword}
                    helperText={<ErrorMessage name="Cpassword" />}
                    placeholder="Enter Confirm Password"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      <strong>Cureent Status</strong>
                    </FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="status"
                      style={{ display: "initial", marginLeft: "15px" }}
                    >
                      <FormControlLabel
                        value="Study"
                        control={<Radio />}
                        label="Study"
                      />
                      <FormControlLabel
                        value="Job"
                        control={<Radio />}
                        label="Job"
                      />
                      <FormControlLabel
                        value="Both"
                        control={<Radio />}
                        label="Both"
                      />
                      <FormControlLabel
                        value="Free"
                        control={<Radio />}
                        label="Free"
                      />
                    </Field>
                  </FormControl>
                  <FormHelperText error="true">
                    <ErrorMessage name="status" />
                  </FormHelperText>
                </Grid>
                {props.values.status === "Job" && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        label="Job Field"
                        select
                        name="filed"
                        fullWidth
                        //required
                        variant="outlined"
                      >
                        <MenuItem value="Front End Deveolper">
                          Front End Deveolper
                        </MenuItem>
                        <MenuItem value="Back End Deveolper">
                          Back End Deveolper
                        </MenuItem>
                        <MenuItem value="Full Stack Deveolper">
                          Full Stack Deveolper
                        </MenuItem>
                        <MenuItem value="UX/UI Designer">
                          UX/UI Designer
                        </MenuItem>
                        <MenuItem value="Cyber Security">
                          Cyber Security
                        </MenuItem>
                        <MenuItem value="Game Development">
                          Game Development
                        </MenuItem>
                        <MenuItem value="Devops">Devops</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        //required
                        name="designation"
                        variant="outlined"
                        label="Select Designation"
                        select
                      >
                        <MenuItem value="Associate Software Engineer">
                          Associate Software Engineer
                        </MenuItem>
                        <MenuItem value="Software Engineer">
                          Software Engineer
                        </MenuItem>
                        <MenuItem value="principal Software Engineer">
                          principal Software Engineer
                        </MenuItem>
                        <MenuItem value="ML engineer">ML engineer</MenuItem>
                        <MenuItem value="Secuirty Engineer">
                          Secuirty Engineer
                        </MenuItem>
                        <MenuItem value="Govt Employee">Govt Employee</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="company"
                        label="Enter Company name"
                        placeholder="Enter the Company name"
                        variant="outlined"
                      />
                    </Grid>{" "}
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="city"
                        label="City"
                        variant="outlined"
                        placeholder="Enter the City"
                      />
                    </Grid>
                  </>
                )}{" "}
                {props.values.status === "Free" && <></>}
                {props.values.status === "Study" && (
                  <>
                    {" "}
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        //required
                        name="degree"
                        variant="outlined"
                        label="Select Degree"
                        select
                      >
                        <MenuItem value="MS">MS </MenuItem>
                        <MenuItem value="PHD">PHD</MenuItem>
                        <MenuItem value="Postdoc">Postdoc</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="uni"
                        label="University"
                        variant="outlined"
                        placeholder="Enter the University"
                      />
                    </Grid>
                  </>
                )}{" "}
                {props.values.status === "Both" && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        label="Job Field"
                        select
                        name="filed"
                        fullWidth
                        //required
                        variant="outlined"
                      >
                        <MenuItem value="Front End Deveolper">
                          Front End Deveolper
                        </MenuItem>
                        <MenuItem value="Back End Deveolper">
                          Back End Deveolper
                        </MenuItem>
                        <MenuItem value="Full Stack Deveolper">
                          Full Stack Deveolper
                        </MenuItem>
                        <MenuItem value="UX/UI Designer">
                          UX/UI Designer
                        </MenuItem>
                        <MenuItem value="Cyber Security">
                          Cyber Security
                        </MenuItem>
                        <MenuItem value="Game Development">
                          Game Development
                        </MenuItem>
                        <MenuItem value="Devops">Devops</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        //required
                        name="designation"
                        variant="outlined"
                        label="Select Designation"
                        select
                      >
                        <MenuItem value="Associate Software Engineer">
                          Associate Software Engineer
                        </MenuItem>
                        <MenuItem value="Software Engineer">
                          Software Engineer
                        </MenuItem>
                        <MenuItem value="principal Software Engineer">
                          principal Software Engineer
                        </MenuItem>
                        <MenuItem value="ML engineer">ML engineer</MenuItem>
                        <MenuItem value="Secuirty Engineer">
                          Secuirty Engineer
                        </MenuItem>
                        <MenuItem value="Govt Employee">Govt Employee</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="company"
                        label="Enter Company name"
                        placeholder="Enter the Company name"
                        variant="outlined"
                      />
                    </Grid>{" "}
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="city"
                        label="City"
                        variant="outlined"
                        placeholder="Enter the City"
                      />
                    </Grid>{" "}
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        fullWidth
                        //required
                        name="degree"
                        variant="outlined"
                        label="Select Degree"
                        select
                      >
                        <MenuItem value="MS">MS </MenuItem>
                        <MenuItem value="PHD">PHD</MenuItem>
                        <MenuItem value="Postdoc">Postdoc</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        //required
                        fullWidth
                        name="uni"
                        label="University"
                        variant="outlined"
                        placeholder="Enter the University"
                      />
                    </Grid>
                  </>
                )}
                {/* <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    label="Job Field"
                    select
                    name="filed"
                    fullWidth
                    //required
                    variant="outlined"
                  >
                    <MenuItem value="Front End Deveolper">
                      Front End Deveolper
                    </MenuItem>
                    <MenuItem value="Back End Deveolper">
                      Back End Deveolper
                    </MenuItem>
                    <MenuItem value="Full Stack Deveolper">
                      Full Stack Deveolper
                    </MenuItem>
                    <MenuItem value="UX/UI Designer">UX/UI Designer</MenuItem>
                    <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                    <MenuItem value="Game Development">
                      Game Development
                    </MenuItem>
                    <MenuItem value="Devops">Devops</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    //required
                    name="designation"
                    variant="outlined"
                    label="Select Designation"
                    select
                  >
                    <MenuItem value="Associate Software Engineer">
                      Associate Software Engineer
                    </MenuItem>
                    <MenuItem value="Software Engineer">
                      Software Engineer
                    </MenuItem>
                    <MenuItem value="principal Software Engineer">
                      principal Software Engineer
                    </MenuItem>
                    <MenuItem value="ML engineer">ML engineer</MenuItem>
                    <MenuItem value="Secuirty Engineer">
                      Secuirty Engineer
                    </MenuItem>
                    <MenuItem value="Govt Employee">Govt Employee</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="company"
                    label="Enter Company name"
                    placeholder="Enter the Company name"
                    variant="outlined"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="city"
                    label="City"
                    variant="outlined"
                    placeholder="Enter the City"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    //required
                    name="degree"
                    variant="outlined"
                    label="Select Degree"
                    select
                  >
                    <MenuItem value="MS">MS </MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                    <MenuItem value="Postdoc">Postdoc</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="uni"
                    label="University"
                    variant="outlined"
                    placeholder="Enter the University"
                  /> 
                </Grid>*/}
                <Box
                  m={2}
                  display="flex"
                  justifyContent={"center"}
                  width={"100%"}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: "50%" }}
                  >
                    Register
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Register;
