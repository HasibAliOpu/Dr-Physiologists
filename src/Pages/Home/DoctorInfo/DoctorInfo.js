import React from "react";
import Doctor from "../../../images/doctor.jpg";
const DoctorInfo = () => {
  return (
    <div className="md:flex items-center p-16 bg-sky-300">
      <div className="p-4">
        <h1 className="text-2xl pb-3 ">Hello My Name Dr.ArafathM.D, PH.D</h1>
        <p>
          My Qualification is BDS , MDS - Periodontology and Oral Implantology,
          16 Years Experience
        </p>
        <p>
          My Certification was National Specialist Register in psychology And
          Gynecology Department of Science Major
        </p>
        <p>
          This is My awards Industry Innovator Award <br />
          Prescription of Medicine <br />
          CMA Honorary Membership Award <br />
          Best Doctor for Psychiatrist
        </p>
      </div>
      <img src={Doctor} alt="doctor" className="rounded-full" />
    </div>
  );
};

export default DoctorInfo;
