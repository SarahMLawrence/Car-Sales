import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';
// import AdditionalFeature from './AdditionalFeature';

import { Button } from 'react-bulma-components';
const AddedFeature = (props) => {
  const handleRemove = (e) => {
    e.preventDefault();
    props.removeFeature(props.features[props.index]);
  };
  return (
   
    <li className="is-active">
      {/* Add an onClick to run a function to remove a feature */}
      <Button onClick={handleRemove} className="button is-danger is-outlined">
        X
      </Button>
      {/* {props.feature.name} */}
      {props.features[props.index].name}
    </li>
   
  );
};

const mapStateToProps = (state) => {
  return { features: state.car.features };
};

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);



