import React from 'react';
import Button from '@material-ui/core/Button';

const RecodingButton = ({ buttonName, onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {buttonName}
  </Button>
)

export default RecodingButton
