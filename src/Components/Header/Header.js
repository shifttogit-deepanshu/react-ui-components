import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root:{background:"#1f1f1f"},
    title:{
        marginLeft:50
    }
})

const Header=()=> {
    const classes = useStyles()
  return (
      <AppBar className={classes.root}>
        <Container maxWidth="xl">
        <Grid container alignItems="center" justify='space-between'>
        <Grid item>
        <div className={classes.title}>
            <Typography color="primary" display="inline" variant="h4">Deepanshu </Typography><Typography color="secondary" display="inline" variant="h4">Sharma</Typography>
        </div>
        </Grid>
        <Grid item>
        <div className={classes.title}>
            <Typography color="primary" display="inline" variant="h4">Deepanshu </Typography><Typography color="secondary" display="inline" variant="h4">Sharma</Typography>
        </div>
        </Grid>
        <Grid item>
        <div className={classes.title}>
            <Typography color="primary" display="inline" variant="h4">Deepanshu </Typography><Typography color="secondary" display="inline" variant="h4">Sharma</Typography>
        </div>
        </Grid>
        </Grid>
        </Container>
      </AppBar>
  );
}

export default Header;