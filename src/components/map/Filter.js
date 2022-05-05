import React, { Component, useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Grid,Text } from '../../elements/index';
import _ from 'lodash';

import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}원`;
}

const Filter=()=> {
  const classes = useStyles();
  const [value, setValue] = useState([0,100]);


  
  

  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };
  return (
      <React.Fragment>
        <Otter>
        <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
        {/* {numberFormat(value[0])}원 ~ {numberFormat(value[1])}원 */}
            <Text bold size="1.25rem">가격</Text>
        </Typography>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            
            sx={{
                width: 110,
                height: 8,
                color: "#ff679e",
              }}
        />
        </div>
        </Otter>
    </React.Fragment>
  );
}
const Otter=styled.div`
    margin:10px;
    box-sizing:border-box;
`

export default Filter