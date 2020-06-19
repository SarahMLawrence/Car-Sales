export const ADD_FEATURE = "ADD_FEATURE";


export const addFeature = newFeature => {
  console.log("add feature action creator");
  return { type: ADD_FEATURE, payload: newFeature };
};
