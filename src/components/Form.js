import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';  
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
 
   
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width:100,
    },
    
  }));

const job_titles  = [
    {
        value: 'Writer',
        label: 'Writer',
    },
    {
        value: 'Editor',
        label: 'Editor',
    },
    {
        value: 'Publisher',
        label: 'Publisher',
    }
];

const Form = () =>{
    const classes = useStyles();
    const [job_title, setJobTitle] = React.useState('Writer');
    const [showEmail, setShowEmail] = React.useState({
        checkedA: true,
        checkedB: true,
        
      });
 
    const ChangeJobTitle = (event) => {
        setJobTitle(event.target.value);
    };
    const ChangeShowEmail = (event) => {
        setShowEmail({ ...showEmail, [event.target.name]: event.target.checked });
    }
        return(
            <form className={classes.root} noValidate autoComplete="off">

                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs >
                        <Button variant="contained" color="secondary">
                            Chnage Picture
                        </Button>
                    </Grid>
                    <Grid item xs nowrap  >
                        <Button variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs >
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs nowrap  >
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs >
                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                    </Grid>
                    <Grid item xs nowrap  >
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs >
                        <TextField id="outlined-basic" label="Birth Date" variant="outlined" />      
                    </Grid>
                    <Grid item xs nowrap  >
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="title"
                            value={job_title}
                            onChange={ChangeJobTitle}
                            SelectProps={{
                                native: true,
                            }}
                            
                            variant="outlined"
                            >
                            {job_titles.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs >
                    <FormControlLabel
                                label="Display Email"
                                control={<Switch checked={showEmail.checkedA} onChange={ChangeShowEmail} name="checkedA" />}
                            />
                    </Grid>
                    <Grid item xs nowrap  >
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="position" name="position">
                                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid >
                    <Grid item xs>
                        <FormControl component="textfield">
                            <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>

                
              
          
            </form>
        )
}

export default Form