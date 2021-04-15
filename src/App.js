import React from "react";
import { NewPerson } from "./components/person";
import { Persons } from "./components/persons";
import { showpersons } from "./actions/showpesons";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const showperson = useSelector((state) => state.showpresons);
  return (
    <React.Fragment>
      <NewPerson />
      <div className="text-center d-flex justify-content-center">
        <button
          type="button"
          className={showperson ? "btn btn-primary " : "btn btn-danger"}
          onClick={() => dispatch(showpersons())}
        >
          نمایش
        </button>
      </div>
      {showperson ? <Persons /> : null}
    </React.Fragment>
  );
}

export default App;
