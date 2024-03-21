"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const jwt = require("jsonwebtoken");
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const adminObj = {
      email,
      password,
    };

    const result = await axios.post("/api/signIn", adminObj);
    const data = result.data;
    console.log(data)
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Sign In Successful");
      router.push("/Admin/Dashboard");
    } else {
      alert("Please check email and password");
    }
  };
  return (
    <>
     <Link href="/">
        <button className="p-2 mt-5 ml-5 border-2 border-orange-600 rounded-lg hover:shadow-lg hover:shadow-orange-500">
          <Image
            src="/home.svg"
            alt="home"
            width={500}
            height={500}
            className="w-8 h-8"
          />
        </button>
      </Link>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="p-5 bg-gray-500 flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="p-2 w-[100%]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 w-[100%]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="p-2 text-white bg-orange-600"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}
