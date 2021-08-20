import React from "react";
import Navbar from "../Layout/Navbar";

const NotFound = () => {
   return (
      <div>
         <Navbar />
         <div className="container">
            <div className="row">
               <div className="col-md-12 hyper-padding">
                  <h1 className="text-center"> 404, Not Found! </h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFound;
