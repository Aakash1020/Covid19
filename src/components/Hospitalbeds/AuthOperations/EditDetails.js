import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function EditDetails() {
  let history = useHistory();
  const { id } = useParams();
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

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div className="app">
        <main className="main">
          <div className="team">
            <div className="team__setting">
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

                <button type="submit" className="btn btn-primary">
                  Update user
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditDetails;
