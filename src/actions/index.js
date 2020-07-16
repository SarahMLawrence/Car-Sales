export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addFeature = newFeature => {
  console.log("add feature action creator");
  return { type: ADD_FEATURE, payload: newFeature };
};


export const removeFeature = oldFeature => {
  console.log("remove feature action creator");
  return { type: REMOVE_FEATURE, payload: oldFeature };
};