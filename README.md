# Rat in a maze app in React js using Material UI
## I have used 4X4 (2D matrix)
Source and destination are at fixed.
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

Below are some of the visuals:</br>
NOTE: Green colored cells represent the path from the rat to the cheese!
![image](https://user-images.githubusercontent.com/111981040/210766552-f9437fb5-0260-46bf-9084-74e444f60b11.png)
![image](https://user-images.githubusercontent.com/111981040/210766625-548caf39-d6b4-4dbb-902f-d320c2c35e31.png)
![image](https://user-images.githubusercontent.com/111981040/210766726-a84ea862-0171-4dd4-b20b-d0f8c72837bf.png)
![image](https://user-images.githubusercontent.com/111981040/210766819-fee70a4c-b426-4409-862d-8d7ee5e3c124.png)




