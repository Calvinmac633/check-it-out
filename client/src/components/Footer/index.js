import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (

    <footer class="" style={{backgroundColor:"#b9ebcc"}}>
      <Typography variant="body2" color="textSecondary" align="center"style={{color: 'grey', fontSize: '20px', fontFamily:"londrina Shadow"}}>

        {'Copyright © '}
        <Link color="inherit">
          Check it Out
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    </footer>
  );
}

export default Copyright;