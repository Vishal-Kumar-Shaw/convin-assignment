import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/actions";
import axios from "axios";

const AddVideo = () => {
   const [title, setTitle] = useState("");
   const [bucket, setBucket] = useState("");
   const [link, setLink] = useState("");
   const [iframe, setIframe] = useState("");

   const navigate = useNavigate();

   const data = {
    title: title,
    bucket: bucket,
    link: link,
    iframe: iframe
   }

   function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:5000/videos', data)
    .then(navigate('/'))
   }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
      }}
    
    >
    <Button variant="contained" color="secondary"> Go Back</Button>
      <h1>AddVideo</h1>
      <TextField id="standard-basic" label="Title"  value={title} type="text"  onChange={(e)=>{setTitle(e.target.value)}}/>
      <br />
      <TextField id="standard-basic" label="Bucket" value={bucket} type="text" onChange={(e)=>{setBucket(e.target.value)}}/>
      <br />
      <TextField id="standard-basic" label="Link" value={link}  type="text"   onChange={(e)=>{setLink(e.target.value)}}/>
      <br />
     
      <TextField id="standard-basic" label="iframe" value={iframe} type="text"  onChange={(e)=>{setIframe(e.target.value)}}/>
      <br />
      <Button variant="contained" color="success" onClick={handleSubmit}> Submit</Button>

    </Box>
  );
};

export default AddVideo;
