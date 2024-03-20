"use client";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [batch, setBatch] = useState(0);
  const [students, setStudents] = useState(0);
  const [placed, setPlaced] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (batch < 50) {
        setBatch(batch + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [batch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (students < 50) {
        setStudents(students + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [students]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (placed < 50) {
        setPlaced(placed + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [placed]);

  return (
    <div className="flex justify-evenly my-20">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-gray-800">Batches</p>
        <div className="flex justify-center items-center h-20 w-20 bg-gradient-to-tr from-cyan-900 to-cyan-400 rounded-full"><p className="font-mono text-4xl text-white">{batch}</p></div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold text-gray-800">Students</p>
        <div className="flex justify-center items-center h-20 w-20 bg-gradient-to-tr from-green-900 to-green-300 rounded-full"><p className="font-mono text-4xl text-white">{students}</p></div>
      </div>
      <div  className="flex flex-col items-center">
        <p className="text-3xl font-bold text-gray-800">Placed</p>
        <div className="flex justify-center items-center h-20 w-20 bg-gradient-to-tr from-amber-800 to-amber-400 rounded-full"><p className="font-mono text-4xl text-white">{placed}</p></div>
      </div>
    </div>
  );
};

export default Counter;
