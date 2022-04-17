import React from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { checkoutId } = useParams();
  //   console.log(Check);
  return (
    <div>
      <h1>Check Out id: {checkoutId}</h1>
    </div>
  );
};

export default CheckOut;
