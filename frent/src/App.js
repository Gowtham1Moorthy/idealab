import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {

  const [a] = useState({
    email:"moorthyselvi94@gmail.com",
    password: "g",
    name: "gowtham",
    designation: "hod",
    department: "csbs",
    facultyid: "1234",
    dob: "28-05-2005",
    mobile: "9876543210",
    who: "hostfaculty"
  });

  const [r, setr] = useState("");

useEffect(()=>{
  axios.post("/update", a).catch(err=>{
    console.log(err);
  })
}, []);
  

  return (
    <div className="App">
        <button >Submit</button>
        {r}
    </div>
  );
}

export default App;
