import { clearPerson } from "./person";
export const addPerson = (fullname) => {
  return async (dispatch, getState) => {
    const persons = [...getState().persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname,
    };

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      await dispatch({ type: "ADD_PERSON", payload: persons });
      await dispatch(clearPerson());
    }
  };
};
export const deletePerson = (personId) => {
  return async (dispatch, getState) => {
    const persons = [...getState().persons];
    const filteredPersons = persons.filter((p) => p.id !== personId);
    await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });
  };
};

export const updatePerson = (event, personId) => {
  return async (dispatch, getState) => {
    const allPersons = [...getState().persons];
    const indexPerson = allPersons.findIndex((d) => d.id === personId);
    allPersons[indexPerson].fullname = event.target.value;
    const updatedPerson = allPersons[indexPerson];
    allPersons[indexPerson] = updatedPerson;
    const persons = [...allPersons];
    await dispatch({ type: "UPDATE_PERSON", payload: persons });
  };
};