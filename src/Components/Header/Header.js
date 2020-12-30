import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root:{background:"#1f1f1f"},
    navLabels:{
        color:"#90caf9"
    }
})
;
    
const Header=()=> {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
      
  return (
      <AppBar className={classes.root}>
        <Container maxWidth="xl">
        <Grid container alignItems="center" justify='space-between'>
        <Grid item xs={4}>
            <Typography color="primary" display="inline" variant="h6">Deepanshu </Typography><Typography color="secondary" display="inline" variant="h6">Sharma</Typography>
        </Grid>
        <Grid item xs={4}>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="#1f1f1f"
            centered
        >
            <Tab label="Item One" disableRipple={true} className={classes.navLabels} />
            <Tab label="Item Two" disableRipple={true} className={classes.navLabels}/>
            <Tab label="Item Three" disableRipple={true} className={classes.navLabels}/>
        </Tabs>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        </Grid>
        </Container>
      </AppBar>
  );
}

export default Header;