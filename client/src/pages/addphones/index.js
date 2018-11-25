import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from'@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const styles = theme =>({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    paddingTop: theme.spacing.unit * 3,
    paddingLeft:theme.spacing.unit * 3,
    paddingRight:theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heading: {
    padding:theme.spacing.unit*5,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
    padding:theme.spacing.unit,
  },
   submit: {
      marginTop: theme.spacing.unit * 3,
    },

});
class Addphone extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          userInfo:[]
        }
    }

    handleSubmit(event){
      fetch('http://localhost:5000/api/addphones/', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem('usertoken')
        },
        body:JSON.stringify({
          brand:document.getElementById('brand').value,
          name:document.getElementById('name').value,
          imglink1:document.getElementById('imglink1').value,
          imglink2:document.getElementById('imglink2').value,
          announced:document.getElementById('announced').value,
          status:document.getElementById('status').value,
          dimensions:document.getElementById('dimensions').value,
          weight:document.getElementById('weight').value,
          build:document.getElementById('build').value,
          sim:document.getElementById('sim').value,
          disptype:document.getElementById('disptype').value,
          dispsize:document.getElementById('dispsize').value,
          dispres:document.getElementById('dispres').value,
          ismultitouch:document.getElementById('ismultitouch').value,
          protection:document.getElementById('protection').value,
          os:document.getElementById('os').value,
          chipset:document.getElementById('chipset').value,
          gpu:document.getElementById('gpu').value,
          maincamtype:document.getElementById('maincamtype').value,
          maincamfeatures:document.getElementById('maincamfeatures').value,
          maincamvid:document.getElementById('maincamvid').value,
          selfcamtype:document.getElementById('selfcamtype').value,
          selfcamfeatures:document.getElementById('selfcamfeatures').value,
          selfcamvid:document.getElementById('selfcamvid').value,
          alerttype:document.getElementById('alerttype').value,
          loudspeakers:document.getElementById('loudspeakers').value,
          jack:document.getElementById('jack').value,
          soundmisc:document.getElementById('soundmisc').value,
          wlan:document.getElementById('wlan').value,
          bluetooth:document.getElementById('bluetooth').value,
          gps:document.getElementById('gps').value,
          nfc:document.getElementById('nfc').value,
          radio:document.getElementById('radio').value,
          usb:document.getElementById('usb').value,
          sensors:document.getElementById('sensors').value,
          messaging:document.getElementById('messaging').value,
          browser:document.getElementById('browser').value,
          batterybasic:document.getElementById('batterybasic').value,
          talktime:document.getElementById('talktime').value,
          musicplay:document.getElementById('musicplay').value,
          colors:document.getElementById('colors').value,
          price:document.getElementById('price').value,
        })
      
      }).then(function(response) {
        if(response.ok){
          return response.json();
        }else{
       throw new Error ('something went wrong with your fetch');
     }
   }).then(function(body){
     console.log(body);
   }).catch(function(error){
     console.log(error);
   });
   this.props.history.push('/');
}
   

    render() {
      const {classes} = this.props;
    return (
      <div className="addphones">
      <main className={classes.main}>
      <CssBaseline />
      <Paper elevation={1}>
        <Typography className={classes.heading} variant="h4" component="h3">
          Add Phone Details
        </Typography>
        <form>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="brand">Phone Brand</InputLabel>
            <Input id="brand" name="brand" autoComplete="Phone Brand" autoFocus fullWidth/>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
       <FormControl margin="normal" required >
            <InputLabel htmlFor="name">Phone Name</InputLabel>
            <Input id="name" name="name" autoComplete="Phone Name" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="imglink1">Image Link 1</InputLabel>
            <Input id="imglink1" name="imglink1" fullWidth autoComplete="Image Link" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
       <FormControl margin="normal" >
            <InputLabel htmlFor="imglink2">Image Link 2</InputLabel>
            <Input id="imglink2" name="imglink2" fullWidth autoComplete="Image Link" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="announced">Announced</InputLabel>
            <Input id="announced" name="announced" autoComplete="Announced" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
       <FormControl margin="normal" required >
            <InputLabel htmlFor="status">Status</InputLabel>
            <Input id="status" name="status" autoComplete="Status" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="dimensions">Dimensions</InputLabel>
            <Input id="dimensions" name="dimensions" autoComplete="Dimensions" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="weight">Weight</InputLabel>
            <Input id="weight" name="weight" autoComplete="Weight" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="build">Build</InputLabel>
            <Input id="build" name="build" autoComplete="Build" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="sim">Sim</InputLabel>
            <Input id="sim" name="sim" autoComplete="Sim" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="disptype">Display Type</InputLabel>
            <Input id="disptype" name="disptype" autoComplete="Display Type" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="dispsize">Display Size</InputLabel>
            <Input id="dispsize" name="dispsize" autoComplete="Display Size" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" >
            <InputLabel htmlFor="dispres">Display Resolution</InputLabel>
            <Input id="dispres" name="dispres" autoComplete="Display Resolution" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="ismultitouch">Multitouch</InputLabel>
            <Input id="ismultitouch" name="multitouch" autoComplete="Multitouch" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" >
            <InputLabel htmlFor="protection">Protection</InputLabel>
            <Input id="protection" name="protection" autoComplete="Protection" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="os">Operating System</InputLabel>
            <Input id="os" name="os" autoComplete="Operating System" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="chipset">Chipset</InputLabel>
            <Input id="chipset" name="chipset" autoComplete="Chipset" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="gpu">GPU</InputLabel>
            <Input id="gpu" name="gpu" autoComplete="GPU" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="maincamtype">Main Camera Type</InputLabel>
            <Input id="maincamtype" name="maincamtype" autoComplete="Main Camera Type" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="maincamfeatures">Main Camera Features</InputLabel>
            <Input id="maincamfeatures" name="maincamfeatures" autoComplete="Main Camera Features" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="maincamvid">Main Camera Video</InputLabel>
            <Input id="maincamvid" name="maincamvideo" autoComplete="Main Camera Video" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="selfcamtype">Selfie Camera Type</InputLabel>
            <Input id="selfcamtype" name="selfcamtype" autoComplete="Selfie Camera Type" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
          <FormControl margin="normal" >
            <InputLabel htmlFor="selfcamfeatures">Selfie Camera Features</InputLabel>
            <Input id="selfcamfeatures" name="selfcamfeatures" autoComplete="Selfie Camera Features" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
         <FormControl margin="normal"  >
            <InputLabel htmlFor="selfcamvid">Selfie Camera Video</InputLabel>
            <Input id="selfcamvid" name="selfcamvideo" autoComplete="Selfie Camera Video" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
      <FormControl margin="normal" required >
            <InputLabel htmlFor="alerttype">Alert Type</InputLabel>
            <Input id="alerttype" name="alerttype" autoComplete="Alert Type" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="loudspeakers">Loudspeakers</InputLabel>
            <Input id="loudspeakers" name="loudspeakers" autoComplete="Loudspeakers" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="jack">Jack</InputLabel>
            <Input id="jack" name="jack" autoComplete="Jack" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="soundmisc">Sound Additional Features</InputLabel>
            <Input id="soundmisc" name="soundmisc" autoComplete="Sound Additional Features" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="wlan">WLAN</InputLabel>
            <Input id="wlan" name="wlan" autoComplete="WLAN" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="bluetooth">Bluetooth</InputLabel>
            <Input id="bluetooth" name="bluetooth" autoComplete="Bluetooth" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="gps">GPS</InputLabel>
            <Input id="gps" name="gps" autoComplete="GPS" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="nfc">NFC</InputLabel>
            <Input id="nfc" name="nfc" autoComplete="NFC" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="radio">Radio</InputLabel>
            <Input id="radio" name="radio" autoComplete="Radio" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="usb">USB</InputLabel>
            <Input id="usb" name="usb" autoComplete="USB" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="sensors">Sensors</InputLabel>
            <Input id="sensors" name="sensors" autoComplete="Sensors" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="messaging">Messaging</InputLabel>
            <Input id="messaging" name="messaging" autoComplete="Messaging" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="browser">Browser</InputLabel>
            <Input id="browser" name="browser" autoComplete="Browser" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" required >
            <InputLabel htmlFor="batterybasic">Battery</InputLabel>
            <Input id="batterybasic" name="batterybasic" autoComplete="Battery" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="talktime">Talktime</InputLabel>
            <Input id="talktime" name="talktime" autoComplete="Talktime" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal"  >
            <InputLabel htmlFor="musicplay">Music Play</InputLabel>
            <Input id="musicplay" name="musicplay" autoComplete="Music Play" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="colors">Colors</InputLabel>
            <Input id="colors" name="colors" autoComplete="Colors" fullWidth autoFocus />
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl margin="normal" >
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input id="price" name="price" autoComplete="Price" fullWidth autoFocus />
      </FormControl>
      </Grid>
      </Grid>
      <Button
            onClick={this.handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit
          </Button>
      </form>
      </Paper>
      </main>
      <br/>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Addphone));