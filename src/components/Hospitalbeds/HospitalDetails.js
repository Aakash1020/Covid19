import React, { useEffect, useState } from "react";
import axios from "axios";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import Modal from "react-modal";
// import AddDetails from "./AuthOperations/AddDetails";
// import EditDetails from "./AuthOperations/EditDetails";
// import ViewDetails from "./AuthOperations/ViewDetails";
import { Link } from "react-router-dom";
import AddDetails from "./AuthOperations/AddDetails";
import { motion } from "framer-motion";
// import { css } from "@emotion/core";
// import ClipLoader from "react-spinners/ClipLoader";
Modal.setAppElement("#root");
// import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

function HospitalDetails() {
  // const [loading, setLoading] = useState(false);
  // const [color, setColor] = useState("#0094FF");
  const [users, setUser] = useState([]);
  const [ModalisOpen, setModalisOpen] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
  };

  const table_style = {
    textAlign: "center",
  };
  const customStyles = {
    overlay: {
      backgroundColor: "#242424d7",
      zIndex: "99",
    },
    content: {
      width: "70%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const profileSlide = {
    initial: {
      opacity: 0,
      y: "1rem",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-1rem",
    },
  };
  const profileTransition = {
    type: "tween",
    duration: 0.9,
  };
  // const override = css`
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `;

  return (
    <div className="app">
      <main className="main">
        <div className="team">
          <h1>Hospital Beds</h1>
          <div className="team__setting">
            <button
              onClick={() => setModalisOpen(true)}
              type="button"
              className="btn btn-dark"
            >
              Add Hospitals
            </button>

            <Modal
              style={customStyles}
              isOpen={ModalisOpen}
              onRequestClose={() => setModalisOpen(false)}
            >
              <button
                onClick={() => setModalisOpen(false)}
                type="button"
                className="btn btn-dark position-relative"
              >
                Close
              </button>
              <h2>Add Hospital Details</h2>
              <AddDetails />
            </Modal>
          </div>
        </div>

        <div>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={profileSlide}
            transition={profileTransition}
          >
            <table style={table_style} className="table">
              <thead className="table">
                <tr>
                  <th scope="col">
                    <LocalHotelIcon />
                  </th>
                  <th scope="col">State</th>
                  <th scope="col">City</th>
                  <th scope="col">Hospital</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((beds, index) => (
                  <tr key={beds.id}>
                    <th scope="row">{index + 1}</th>

                    <td>{beds.State}</td>
                    <td>{beds.City}</td>
                    <td>{beds.Nameofhospital}</td>
                    <td>
                      <Link
                        className="btn btn-dark mr-2"
                        to={`/details/${beds.id}`}
                      >
                        View
                      </Link>

                      <Link
                        className="btn btn-outline-primary mr-2"
                        to={`/details/edit/${beds.id}`}
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteUser(beds.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default HospitalDetails;
