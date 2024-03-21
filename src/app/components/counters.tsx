"use client";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [batch, setBatch] = useState(0);
  const [students, setStudents] = useState(0);
  const [passed, setpassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (batch < 15) {
        setBatch(batch + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [batch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (students < 200) {
        setStudents(students + 10);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [students]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (passed < 180) {
        setpassed(passed + 10);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [passed]);

  return (
    <div className="flex md:flex-row flex-col justify-evenly md:my-20 my-5">
      <div className="flex flex-col items-center my-10">
        <p className="md:text-3xl text-xl font-semibold text-gray-800">No. of Batches</p>
        <div className="flex justify-center items-center m-5 h-20 w-20 bg-gradient-to-tr from-cyan-900 to-cyan-400 rounded-full"><p className="font-mono text-4xl text-white">{batch}</p></div>
      </div>
      <div className="flex flex-col items-center my-10">
        <p className="md:text-3xl text-xl font-semibold text-gray-800">Total Students Enrolled</p>
        <div className="flex justify-center items-center m-5 h-20 w-20 bg-gradient-to-tr from-green-900 to-green-300 rounded-full"><p className="font-mono text-4xl text-white">{students}</p></div>
      </div>
      <div  className="flex flex-col items-center my-10">
        <p className="md:text-3xl text-xl font-semibold text-gray-800">Students Passed</p>
        <div className="flex justify-center items-center m-5 h-20 w-20 bg-gradient-to-tr from-amber-800 to-amber-400 rounded-full"><p className="font-mono text-4xl text-white">{passed}</p></div>
      </div>
    </div>
  );
};

export default Counter;
