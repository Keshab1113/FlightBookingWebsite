import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const Header = () => {

  return (
    <div className=" bg-white top-2 mx-auto w-[90vw] flex justify-between items-center sm:px-12 px-2 h-16 rounded-xl shadow-lg shadow-cyan-500/50 z-50 fixed ml-[5vw]">
        <NavLink className=' text-cyan-900 text-2xl font-bold'>
          FlightBooking
      </NavLink>
      
      <NavLink to={'login'} className=' text-cyan-900'>
        <Button variant="outlined">
        Login
      </Button>
        </NavLink>
      
    </div>
  );
};

export default Header;
