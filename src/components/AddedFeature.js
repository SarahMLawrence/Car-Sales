import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';
import AdditionalFeature from './AdditionalFeature';

const AddedFeature = (props) => {
  const handleRemove = (e) => {
    e.preventDefault();
    props.removeFeature(props.features[props.index]);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">
        X
      </button>
      {/* {props.feature.name} */}
      {props.features[props.index].name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return { features: state.car.features };
};

const mapDispatchToProps = { removeFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);



