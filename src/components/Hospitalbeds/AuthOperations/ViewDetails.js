import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import "../Dashboard.css";

const ViewDetails = () => {
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
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="app">
      <main className="main">
        <section className="container__view">
          <div className="head_view">
            <div className="header_container_view">
              <h1>
                <LocalHospitalIcon fontSize="large" color="secondary" />{" "}
                {user.Nameofhospital}
              </h1>
            </div>
            <div className="text_container_view">
              <section className="section1">
                <div>
                  <h5 className="text_details_view">State : {user.State}</h5>
                  <h5 className="text_details_view">City : {user.City}</h5>
                  <h5 className="text_details_view">
                    Address : {user.Address}
                  </h5>
                  <h5 className="text_details_view">
                    Phone Number : {user.PhoneNumber}
                  </h5>
                  <h5 className="text_details_view">
                    Total Beds : {user.TotalBeds}
                  </h5>
                  <h5 className="text_details_view">
                    Isolation Beds : {user.IsolationBeds}
                  </h5>
                </div>
              </section>
              <section className="section2">
                <div>
                  <h5 className="text_details_view">
                    Without Oxygen : {user.WithoutOxygen}
                  </h5>
                  <h5 className="text_details_view">
                    With Oxygen : {user.WithOxygen}
                  </h5>
                  <h5 className="text_details_view">
                    ICU Without Ventilator : {user.ICUWithoutVentilator}
                  </h5>
                  <h5 className="text_details_view">
                    ICU With Ventilator : {user.ICUWithVentilator}
                  </h5>
                  <h5 className="text_details_view">
                    Last Varified On : {user.LastVarifiedOn}
                  </h5>
                </div>
              </section>
            </div>
            <div className="header_container_view">
              <Link className="btn btn-primary" to="/">
                back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewDetails;
