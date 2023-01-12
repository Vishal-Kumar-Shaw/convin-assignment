import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/actions";

const AddVideo = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [bucket, setBucket] = useState("");
  const [link, setLink] = useState("");
  const [iframe, setIframe] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      addVideo({
        title: title,
        bucket: bucket,
        link: link,
        iframe: iframe,
      })
    );
    navigate("/");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        {" "}
        Go Back
      </Button>
      <h1>AddVideo</h1>
      <TextField
        id="standard-basic"
        label="Title"
        value={title}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Bucket"
        value={bucket}
        type="text"
        onChange={(e) => {
          setBucket(e.target.value);
        }}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Link"
        value={link}
        type="text"
        onChange={(e) => {
          setLink(e.target.value);
        }}
      />
      <br />

      <TextField
        id="standard-basic"
        label="iframe"
        value={iframe}
        type="text"
        onChange={(e) => {
          setIframe(e.target.value);
        }}
      />
      <br />
      <Button variant="contained" color="success" onClick={handleSubmit}>
        {" "}
        Submit
      </Button>
    </Box>
  );
};

export default AddVideo;
