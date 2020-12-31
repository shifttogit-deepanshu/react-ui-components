import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles({
    root: {
        background:"rgba(0,0,0,0.8)",
        top:0,
        backdropFilter:"blur(8px)"
    },
    title:{
        color:"rgba(255,255,255,0.7)",
    },
    midline:{
        borderTopColor:"rgba(255,255,255,0.7)",
        borderTopWidth:1,
    },
    content:{
        color:"rgba(255,255,255,0.7)",
        fontWeight:600,
        marginRight:30,
        "&:hover":{
            color:"white",
            transition:"0.2s"
        }
    }
    // test:{
    //     background:"red"
    // }
  });
  

const Header = ()=>{
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
            <AppBar className={classes.root} position="fixed">
                <Container>
                <Grid container justify="space-between">
                    <Grid item><Typography className={classes.content} variant="h6">Deepanshu Sharma</Typography></Grid>                    
                    <Grid item><GitHubIcon className={classes.content}/><FacebookIcon className={classes.content}/><InstagramIcon className={classes.content}/></Grid>
                    <Grid item xs={12}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        centered
                    >
                        <Tab label="Item One" className={classes.title}/>
                        <Tab label="Item Two" className={classes.title}/>
                        <Tab label="Item Three" className={classes.title}/>
                        <Tab label="Item Two" className={classes.title}/>
                        <Tab label="Item Three" className={classes.title}/>
                    </Tabs>
                    </Grid>
                </Grid>
                
                </Container>
            </AppBar>
    )
}

export default Header