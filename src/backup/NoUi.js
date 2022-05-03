import React, { useState } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { Grid } from '../elements';

const NoUi = () => {
  const [state, setState] = useState({ //기본 설정값
      textValue: null,
      percent: null
})


  const onSlide = (render, handle, value, un, percent) => {
   
      setState({
      textValue: value[0].toFixed(2),
      percent: percent[0].toFixed(2)
    });
   
  }

  return (
    <React.Fragment>
      <Grid width="100%" height="300px" >
      <Nouislider
          range={{ min: 0, max: 100 }}
          start={[20, 80]}
          connect 
          onSlide={onSlide}
          />
           {state.textValue && state.percent && (
          <div>
            Value: {state.textValue}, {state.percent.percent} %
          </div>
        )}
        </Grid>
    </React.Fragment>
  );
};

export default NoUi;

