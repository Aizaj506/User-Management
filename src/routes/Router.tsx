import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";

const Router = () => {
  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
