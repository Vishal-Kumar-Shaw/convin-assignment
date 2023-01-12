import React, { useEffect } from "react";
// styling
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo, loadVideos } from "../redux/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure? ")) {
      dispatch(deleteVideo(id));
    }
  };

  const handleLinkClick = (data) => {
    const oldRecord = localStorage.getItem("history");

    const newRecord = oldRecord ? JSON.parse(oldRecord) : [];

    const index = newRecord.findIndex((item) => item.id === data.id);

    if (index > -1) newRecord[index].time = new Date();
    else newRecord.push({ ...data, time: new Date() });

    localStorage.setItem("history", JSON.stringify(newRecord));

    window.open(data.link, "_blank");
  };

  useEffect(() => {
    dispatch(loadVideos());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div>
      {/* <Navbarr/> */}
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/buckets">Buckets</Nav.Link>
        <Nav.Link href="/addVideo">Upload</Nav.Link>
        <Nav.Link href="/list-history">History</Nav.Link>
      </Nav>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Title </StyledTableCell>
              <StyledTableCell align="center">Bucket </StyledTableCell>

              <StyledTableCell align="center">Link</StyledTableCell>
              <StyledTableCell align="center">iframe</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos &&
              videos.map((video) => (
                <StyledTableRow key={video.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {video.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {video.bucket}
                  </StyledTableCell>

                  <StyledTableCell
                    align="center"
                    onClick={() => handleLinkClick(video)}
                    style={{
                      cursor: "pointer",
                      color: "blue",
                      textDecoration: "underline",
                    }}
                  >
                    Link
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <iframe
                      width="320"
                      height="220"
                      src={video.iframe}
                      title="Lecture 1: Intro to Programming & Flowcharts"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        style={{ marginRight: "5px" }}
                        onClick={(e) => {
                          navigate(`./editvideo/${video.id}`);
                        }}
                      >
                        {" "}
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        style={{ marginRight: "5px" }}
                        onClick={() => handleDelete(video.id)}
                      >
                        {" "}
                        Delete{" "}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: "5px" }}
                      >
                        {" "}
                        Change Bucket
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
