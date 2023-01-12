import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadVideo, updateVideo } from "../redux/actions";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const video = useSelector((state) => state.videos.video);

  const [title, setTitle] = useState("");
  const [bucket, setBucket] = useState("");
  const [link, setLink] = useState("");
  const [iframe, setIframe] = useState("");

  const update = () => {
    dispatch(
      updateVideo({
        id,
        video: {
          title,
          bucket,
          link,
          iframe,
        },
      })
    );
    navigate(-1);
  };

  useEffect(() => {
    dispatch(loadVideo(id));
  }, []);

  useEffect(() => {
    if (video) {
      setTitle(video.title);
      setBucket(video.bucket);
      setLink(video.link);
      setIframe(video.iframe);
    }
  }, [video]);

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
      <h1>EditVideo</h1>
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
      <Button variant="contained" color="success" onClick={update}>
        Update
      </Button>
    </Box>
  );
};

export default Edit;
