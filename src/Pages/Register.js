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
  const Onsubmit = (values, props) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter the Name"),
  });
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        p={1}
        boxShadow={2}
        bgcolor={"white"}
        mt={"5%"}
        width="50%"
        height={"fit-content"}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={Onsubmit}
          //validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {" "}
              <Grid container spacing={2} sx={{ marginTop: "30px" }}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="name"
                    //required
                    fullWidth
                    label="Name"
                    helperText={<ErrorMessage name="name" />}
                    placeholder="Enter the Name"
                    autoFocus
                    variant="outlined"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="cnic"
                    label="Enter CNIC"
                    placeholder="Enter the CNIC number"
                    variant="outlined"
                    type="number"
                    helperText="enter cnic without dashes"
                    size="normal"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    fullWidth
                    name="email"
                    type={"email"}
                    label="Email"
                    variant="outlined"
                    placeholder="Enter the Email"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    //required
                    name="phonenumber"
                    fullWidth
                    type={"number"}
                    label="Phone number"
                    placeholder="Enter the phone number"
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
                    //required
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
                    //required
                    name="department"
                    variant="outlined"
                    label="Select Department"
                    select
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
                    placeholder="Enter Confirm Password"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Cureent Status
                    </FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="status"
                      style={{ display: "initial" }}
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
                </Grid>
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
                </Grid>{" "}
                <Grid item xs={12} sm={12} textalign="center">
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Register;
