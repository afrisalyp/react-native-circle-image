import React, { Component } from 'react';
import {
  Image
} from 'react-native';

const CircleImage = (props) => {
  if(!props.style) props.style = {};
  props.style.borderRadius = 20;
  return (<Image source={props.source} style={props.style} />);
};

export default CircleImage;
