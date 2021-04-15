import React from "react";
import { deletePerson, updatePerson } from "../actions/persons";
import { useDispatch, useSelector } from "react-redux";
import { SinglePerson } from "./singlepeson";

export const Persons = () => {
  const allpersons = useSelector((state) => state.persons);
  const dispath = useDispatch();
  return (
    <div>
      {allpersons.map((p) => (
        <SinglePerson
          key={p.id}
          fullname={p.fullname}
          deleted={() => dispath(deletePerson(p.id))}
          update={(e) => dispath(updatePerson(e, p.id))}
        />
      ))}
    </div>
  );
};
