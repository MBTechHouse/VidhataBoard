import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white'
  }
});

export default function SignUpTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root} style={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<i class="ni ni-sound-wave" style={{ fontSize: 20 }}></i>} label="Pending" {...a11yProps(0)} />
        <Tab icon={<i class="ni ni-check-bold" style={{ fontSize: 20 }}></i>} label="Allowed" {...a11yProps(1)} />
        <Tab icon={<i class="ni ni-active-40" style={{ fontSize: 20 }}></i>} label="Rejected" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {props.pending}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.allowed}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {props.rejected}
      </TabPanel>
    </Paper>
  );
}
