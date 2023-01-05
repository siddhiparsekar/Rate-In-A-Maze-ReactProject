import React from "react";
import { Grid, Paper, Box, makeStyles } from "@material-ui/core";
import "../index.css"

const style1 = {
    paper: {
        background:"#4CAF50",
    },
};

const style2 ={
    paper: {
        background:"#FF5757",
    },
};

const useStyle1 = makeStyles(style1);
const useStyle2 = makeStyles(style2);

function Cell(props){
    const N=Number(props.N)
    if(N === 0){
        return <RedCell > </RedCell>
    }
    else if(N === 1){
        return <GreenCell ></GreenCell>
    } else {
        return <WhiteCell></WhiteCell>
    }

}
function WhiteCell(){
    return (
        <Grid item>
            <Paper elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    );
}
function RedCell(){
    const classes = useStyle2();
   return (
        <Grid item>
            <Paper className={classes.paper} elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
   );
}
function GreenCell(){
    const classes = useStyle1();
    return (
        <Grid item>
            <Paper className={classes.paper} elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    )
}
export default Cell