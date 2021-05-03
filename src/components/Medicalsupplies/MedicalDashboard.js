import React from "react";
import MedicalDetails from "./MedicalDetails";

const MedicalDashboard = () => {
  return (
    <div>
      <div>
        <div className="app">
          <main className="main">
            <header className="main__header">
              <div className="main__search">
                <input type="search" size="25" placeholder="Search" />
                <span className="icon-search">
                  <svg
                    width="17"
                    height="17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.494 12.006a7.275 7.275 0 001.487-4.462C14.981 3.4 11.688 0 7.544 0S0 3.4 0 7.544s3.4 7.544 7.544 7.544c1.7 0 3.294-.532 4.462-1.488l3.188 3.188c.212.212.531.318.743.318.213 0 .532-.106.744-.319a1.027 1.027 0 000-1.487l-3.187-3.294zm-5.95.85c-2.975 0-5.419-2.337-5.419-5.312s2.444-5.419 5.419-5.419c2.975 0 5.419 2.444 5.419 5.419 0 2.975-2.444 5.312-5.42 5.312z"
                      fill="#A4A8BD"
                    />
                  </svg>
                </span>
              </div>
              {/* <div className="main__user">
                <span className="main__icon">
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="11" fill="#fff" />
                    <path
                      d="M26 30h-4c0 1.1.9 2 2 2s2-.9 2-2zM31 27h-.5c-.7-.7-1.5-1.7-1.5-3v-3c0-2.8-2.2-5-5-5s-5 2.2-5 5v3c0 1.3-.8 2.3-1.5 3H17c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"
                      fill="#A4A8BD"
                    />
                  </svg>
                </span>
                <div className="main__avatar">
                  <img
                    src="https://assets.codepen.io/2709552/small-avatar.png"
                    alt=""
                  />
                </div>
                <div className="main__title">
                  <h5>Mark A.</h5>
                  <span className="icon">
                    <svg
                      width="11"
                      height="6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.625.153L5.5 4.278 1.375.153l-.972.972 4.611 4.611a.687.687 0 00.972 0l4.611-4.611-.972-.972z"
                        fill="#A4A8BD"
                      />
                    </svg>
                  </span>
                </div>
              </div> */}
            </header>
            <div className="team">
              <h1>Medical Supplies</h1>
              <div className="team__setting">
                {/* <button className="btn btn--primary">
                  <span className="btn__icon">
                    <svg
                      width="14"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.667 8a4 4 0 100-8 4 4 0 000 8zM6.667 9.333C2.167 9.333 0 12.141 0 13.777v.89A1.333 1.333 0 001.333 16H12a1.333 1.333 0 001.333-1.333v-.89c0-1.636-2.166-4.444-6.666-4.444z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  Add Team Member
                </button> */}
                {/* <div className="team__icon">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2.665h-5.333v2.667H16V2.665zM9.334 3.998a3.99 3.99 0 00-7.755-1.333H0v2.667h1.579a3.99 3.99 0 007.755-1.334zm-4 1.334a1.333 1.333 0 110-2.667 1.333 1.333 0 010 2.667zM5.333 10.665H0v2.667h5.333v-2.667zM10.667 7.998a4 4 0 103.755 5.334H16v-2.667h-1.578a4 4 0 00-3.755-2.667zm0 5.334a1.334 1.334 0 110-2.667 1.334 1.334 0 010 2.667z"
                      fill="#A4A8BD"
                    />
                  </svg>
                </div> */}
              </div>
            </div>

            <MedicalDetails />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MedicalDashboard;
