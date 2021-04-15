import React from "react";

export const SinglePerson = ({ fullname, deleted, update }) => {
  return (
    <div className="card col-md-auto">
      <div className="d-flex justify-content-center">
        <div className="card-body col-3">
          <h5 className="card-title text-center">{fullname}</h5>
          <div className="card-text">
            <div className="input-group justify-content-center">
              <input
                type="text"
                className="form-control w-50"
                placeholder={fullname}
                onChange={update}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-sm btn-danger fa fa-trash"
                  onClick={deleted}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
