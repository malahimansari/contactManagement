import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">My Contact App</h1>
        <p className="text-gray-700">Welcome to your contact management app!</p>
        <div className="btn-group pt-4 space-x-2 flex items-center justify-center">
          <Link to="/register">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
