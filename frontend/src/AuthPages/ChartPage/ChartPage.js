import React from "react";
import NavBar from "../../global-components/NavBar/Navbar";
import Footer from "../../global-components/Footer/Footer";
import { Calculator } from "../../Pages/Calculator/Calculator";
import { UserProfileCard } from "./UserProfileCard";

export function ChartPage() {
    const windowStorageUser = window.localStorage.getItem("currUser");
    const verifiedUser = JSON.parse(windowStorageUser);
    console.log(verifiedUser);
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly mt-5">
        <div className="w-1/4">
          <UserProfileCard firstName={verifiedUser.firstName} lastName={verifiedUser.lastName}/>
        </div>
        <div className="">
            <Calculator />
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
