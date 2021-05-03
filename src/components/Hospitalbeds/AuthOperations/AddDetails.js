import axios from "axios";
import React, { useState } from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

function AddDetails() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#0094FF");
  const [user, setUser] = useState({
    State: "",
    City: "",
    Nameofhospital: "",
    Address: "",
    PhoneNumber: "",
    TotalBeds: "",
    IsolationBeds: "",
    WithoutOxygen: "",
    WithOxygen: "",
    ICUWithoutVentilator: "",
    ICUWithVentilator: "",
    LastVarifiedOn: "",
  });
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    window.location.reload();
  };
  const button__style = {
    display: "flex",
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                name="State"
                value={user.State}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="City"
                value={user.City}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name Of Hospital"
                name="Nameofhospital"
                value={user.Nameofhospital}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="Address"
                value={user.Address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Number (Landline Preferable)"
                name="PhoneNumber"
                value={user.PhoneNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col ">
              <input
                type="text"
                className="form-control"
                placeholder="Total Beds"
                name="TotalBeds"
                value={user.TotalBeds}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Isolation Beds"
                name="IsolationBeds"
                value={user.IsolationBeds}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Without Oxygen"
                name="WithoutOxygen"
                value={user.WithoutOxygen}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="With Oxygen"
                name="WithOxygen"
                value={user.WithOxygen}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="ICU Without Ventilator"
                name="ICUWithoutVentilator"
                value={user.ICUWithoutVentilator}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="ICU With Ventilator"
                name="ICUWithVentilator"
                value={user.ICUWithVentilator}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last Varified On"
                name="LastVarifiedOn"
                value={user.LastVarifiedOn}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div style={button__style}>
            <button
              onClick={() => setLoading(!loading)}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
            <RingLoader
              color={color}
              loading={loading}
              css={override}
              size={30}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDetails;
