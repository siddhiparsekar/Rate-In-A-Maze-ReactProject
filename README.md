# Rat in a maze app in React js using Material UI
## I have used 4X4 (2D matrix)
_ Sorce and destination are at fixed.
- Here,source location is [0][0].
- Destination location is [n-1][n-1].
- The rat can move right or down only.
- Mouse starts from source location and if it reaches to the destination then it is marked. It finds the possible paths from the source to the destination.
- Here I have used Material UI for grid and cell.
### **generateMatrix()**
generates new matrix each time.

### **findPath()**
finds possible paths from rat(source position) to the destination and creates a new grid for every path.

### Screenshot:generateNewMatrix:
![matrix](./public/generateNewMatrix.png)


### Screenshot:findPaths:
![matrix](./public/findpaths.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




