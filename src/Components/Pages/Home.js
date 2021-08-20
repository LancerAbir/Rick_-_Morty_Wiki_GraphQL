import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Home = () => {
   return (
      <div>
         <Navbar />
         <div class="jumbotron">
            <h1 class="display-4">Rick & Morty Wiki ..!</h1>
            <p class="lead">
               This is a simple hero unit, a simple jumbotron-style component
               for calling extra attention to featured content or information.
            </p>
            <hr class="my-4" />
            <p>
               It uses utility classes for typography and spacing to space
               content out within the larger container.
            </p>
            <p class="lead">
               <Link class="btn btn-primary btn-lg" to="/" role="button">
                  Learn more
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Home;
