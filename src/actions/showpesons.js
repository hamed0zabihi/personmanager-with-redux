export const showpersons = () => {
  return async (dispatch) => {
    await dispatch({ type: "SHOW_PERSONS" });
  };
};
