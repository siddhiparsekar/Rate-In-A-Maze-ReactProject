import React from "react";
import ReactDOM from "react-dom";
import { Button, Grid, Box, Paper } from "@material-ui/core";
import Cell from "./Cell";
import Path from "./Path";
import Footer from './Footer'
import "../index.css";


class Maze extends React.Component {
  matrix = [2];
  paths = [];
  idx = 0;
  numPaths = 0;
  pathIdx = 0;

  index = () => {
    this.idx += 1;
    return this.matrix[this.idx];
  };

  findColor = (path) => {
    this.pathIdx += 1;
    let result = path[this.pathIdx];
    if (this.pathIdx == 14) {
      this.pathIdx = 0;
    }
    console.log(result)
    return result;
    
  };

  // generate random 16 length matrix with 0,2.
  // e.g. [2, 0, 0, 2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2]
  generateMatrix = () => {
    for (let i = 0; i < 14; i++) {
      let val = Math.floor(Math.random() * 4); // generate random number in 0, 1, 2, 3
      if (val == 0) {
        this.matrix.push(0); // create blocks i.e red cells
      } else {
        this.matrix.push(2); // white cells
      }
    }
    this.matrix.push(2);
  };

  inMaze = (x, y, visited) => {
    // if cell is valid return true
    return (
      x >= 0 &&
      x < 4 &&
      y >= 0 &&
      y < 4 &&
      this.matrix[x * 4 + y] > 0 &&
      visited[x * 4 + y] == 0
    );
  };

  calculatePaths = () => {
    let visited = [];
    for (let i = 0; i < 16; i++) {
      visited[i] = 0;
    }
    this.mazeUtil(visited, 0, 0, []);
    // console.log(this.numPaths);
    // console.log(this.paths);
    return this.paths;
  };

  mazeUtil = (visited, x, y, currentPath) => {
    if (x == 3 && y == 3) {
      this.numPaths += 1;
      this.paths.push([...currentPath]);
      visited[15] = 0;
      return;
    }
    if (!this.inMaze(x, y, visited)) {
      return;
    }

    visited[4 * x + y] = 1;

    currentPath.push([x + 1, y]);
    this.mazeUtil(visited, x + 1, y, currentPath);
    currentPath.pop();

    currentPath.push([x, y + 1]);
    this.mazeUtil(visited, x, y + 1, currentPath);
    currentPath.pop();

    visited[4 * x + y] = 0;
    return;
  };

  getNumPaths = () => {
    return (
      <div className="totalPath" style={{ color: "black" }}>
        <center>
          <b>Total Paths = {this.numPaths} </b>{" "}
        </center>
      </div>
    );
  };

  findPaths = () => {
    const displayNumPaths = <this.getNumPaths></this.getNumPaths>;
    const countDisplay=document.getElementById('count')
    ReactDOM.render(displayNumPaths, countDisplay);

    let grids = document.getElementById("routes");

    for (let i = 0; i < this.paths.length; i++) {
      const solution = (
        <Path currentPath={this.paths[i]} maze={this.matrix}></Path>
      );
      const id = Math.random();
      const d = document.createElement("span");
      d.id = id;
      const space = document.createElement("br");
      grids.appendChild(d);
      grids.appendChild(space);
      ReactDOM.render(solution, document.getElementById(id));
    }
  };
  addFooter(){
    const footer=document.getElementById('footer');
    const footerComponent= <Footer> </Footer>
    ReactDOM.render(footerComponent,footer)
  }

  handleClick = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  render() {
    this.matrix = new Array();
    this.matrix = [2];
    this.generateMatrix();
    this.calculatePaths();
    this.addFooter();

    return (
      <span className="maze" >
        <center>
          <h1>Rat in a Maze App</h1>
        </center>
        <br></br>
        <Grid container spacing={2} justifyContent="center" direction="column"
        style={{ backgroundColor: "rgb(238, 179, 69",borderRadius:"5px" }}
        >
          <p>
            <Grid container spacing={2} justifyContent="center" direction="row"
            >
              <Grid item>
                <Paper elevation={3}>
                  <Box padding={2} height={50} width={50}
                  style={{ display: "flex", alignItems: "center",justifyContent:"center",background:"rgb(243, 240, 240" }}
                  >
                    <center>
                      <img
                        src="rat.png"
                        height={70}
                        width={70}
                        vertical-align="middle"
                      ></img>
                    </center>
                  </Box>
                </Paper>
              </Grid>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={2} justify="center" direction="row">
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={2} justify="center" direction="row">
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
            </Grid>
          </p>

          <p>
            <Grid container spacing={2} justify="center" direction="row">
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Cell N={this.index()}></Cell>
              <Grid item>
                <Paper elevation={3}>
                  <Box padding={2} height={50} width={50}
                  style={{ display: "flex", alignItems: "center",justifyContent:"center",background:"rgb(243, 240, 240" }}
                  >
                    <center>
                      <img
                        src="cheese.jfif"
                        height={70}
                        width={70}
                        vertical-align="middle"
                      ></img>
                    </center>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </p>
          <div>
            <center>
              <Button
                onClick={this.handleClick}
                style={{
                  margin: 15,
                  color: "white",
                  background: "#4CAF50",
                  padding: 8,
                }}
              >
                <b>Generate new maze</b>
              </Button>
              <Button
                onClick={this.findPaths}
                style={{
                  margin: 15,
                  color: "white",
                  background: "#4CAF50",
                  padding: 8,
                }}
              >
                <b> Find Paths </b>
              </Button>
              <br></br>
            </center>
          </div>
        </Grid>
      </span>
    );
  }
}

export default Maze;