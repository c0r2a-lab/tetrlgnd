import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Socketscapsule from "./socket/capsule";

import { RouterProvider } from 'react-router-dom';
import routes from "./routes";

AOS.init();

function App() {
  return (
    <React.Fragment>
      <Socketscapsule>
        <RouterProvider router={routes} />
      </Socketscapsule>
    </React.Fragment>
  );
}

export default App;
