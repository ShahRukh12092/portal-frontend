import { Email } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
const AddStudent = () => {
  const [FileName, setFileName] = useState(null);
  const [data, setdata] = useState([]);
  const [btn, setbtn] = useState(false);

  const addStudent = async (data) => {
    const { Name: name, Email: email, Department: department } = data;
    if (!name || !email || !department) {
      return;
    }
    try {
      const response = await fetch("http://localhost:30001/registerStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, department }),
      });
      const n = await response.json();
      //alert(JSON.stringify(n));
    } catch (error) {
      console.log(error);
    }
  };
  const hello = () => {
    data.map((data) => addStudent(data));
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const ExcelJson = XLSX.utils.sheet_to_json(worksheet);

    setdata(ExcelJson);
    console.log(data);
    setbtn(true);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {FileName && <h1>{FileName}</h1>}

      <input
        type="file"
        onChange={(e) => handleFile(e)}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
      {btn && <button onClick={() => hello()}>Add Students</button>}
      {data &&
        data.map((data) => (
          <p>
            {hello}
            <strong>Name</strong> = {data.Name} <strong>Email</strong> ={" "}
            {data.Email} <strong>Department</strong> = {data.Department}
          </p>
        ))}
    </div>
  );
};

export default AddStudent;
