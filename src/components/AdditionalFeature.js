import React from "react";
import { Button } from 'react-bulma-components';
import { connect } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = (props) => {
  const addFeat = (event) => {
    event.preventDefault();
    props.addFeature(props.features[props.index]);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price}) */}
      <Button onClick={addFeat} className="button is-primary">
        Add
      </Button>
      {props.features[props.index].name} (+{props.features[props.index].price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return { features: state.additionalFeatures };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
