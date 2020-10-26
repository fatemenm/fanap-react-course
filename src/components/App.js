import React from 'react'
import Form from './Form'
import CardHeader from '@material-ui/core/CardHeader';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import DisplayData from './DisplayData';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const App = () =>{
    
    const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Learning React
                    </Typography>
                    </Toolbar>
                </AppBar>
                <main style={{ padding: 20 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                            <Paper className={classes.paper}><DisplayData/></Paper>
                            </Grid>
                            <Grid item xs={8}>
                            <Paper className={classes.paper}><Form/></Paper>
                            </Grid>
                        </Grid>
                </main>
            </React.Fragment>
        )
    }

export default App