import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const InputPredictive = (props) => {
  const [greeting, setGreeting] = useState();

  return (
      <div className="container-predective-input">
        <TextField id="standard-basic" label="Standard" />
        <div className="options-container">
          {props.options.map((person, index) =>
              <li key={index}>{person.nombre}</li>
          )}
        </div>
      </div>
      
  );
};
export default InputPredictive;