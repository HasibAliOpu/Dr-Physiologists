import React, { useEffect, useState } from "react";
import Service from "../Service/service";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-14 font-mono font-semibold  text-3xl text-indigo-500">
        <span className="border-b-2 border-slate-700">
          Popular Therapy Services
        </span>
      </h1>
      <div className="grid md:grid-cols-3 p-8  md:px-16">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
