import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPerson } from "../actions/person";
import { addPerson } from "../actions/persons";
export const NewPerson = () => {
  const person = useSelector((state) => state.person);
  const dispatch = useDispatch();
  return (
    <div className="newsletter-subscribe">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">مدیریت کردن اشخاص</h2>
          <p className="text-center">
            نام و فامیل خود را به طور کامل وارد کنید.{" "}
          </p>
        </div>
        <form
          className="d-flex justify-content-center "
          method="post"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-group text-center">
            <input
              className="form-control "
              type="text"
              name="fullfamily"
              placeholder="نام و نام خانوادگی"
              value={person}
              onChange={(e) => dispatch(setPerson(e))}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => dispatch(addPerson(person))}
            >
              اضافه کن{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
