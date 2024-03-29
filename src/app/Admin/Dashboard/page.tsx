"use client";
import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextEditor from "./TextEditor";
import Notices from "./Notice";

export default function Dashboard() {
  const router = useRouter();
  const [blogVisible, setBlogVisible] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [recordVisible, setRecordVisible] = useState(false);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/Admin");
    }
  }, []);

  function logout() {
    localStorage.clear();
    alert("Logged out");
    router.replace("/");
  }

  function displayBlog() {
    setBlogVisible((blogVisible) => !blogVisible);
  }

  function displayNotice() {
    setNoticeVisible((noticeVisible) => !noticeVisible);
  }

  return (
    <>
      <h1 className="text-3xl text-center font-semibold text-orange-600 m-10">
        Dashboard
      </h1>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-3 md:mx-32 text-xl grid-cols-2 grid-rows-3 mx-5">
        <Link
          href="/"
          className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer"
        >
          <i className="fa fa-home"></i>
          <p>Home</p>
        </Link>
        <div
          className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer"
          onClick={displayBlog}
        >
          <i className="fa fa-edit"></i>
          <p>Blog</p>
        </div>
        <div className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer">
          <i className="fa fa-user-plus"></i>
          <p>Add Students</p>
        </div>
        <div className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer">
          <i className="fa fa-user-o"></i>
          <p>Student Records</p>
        </div>
        <div
          className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer"
          onClick={displayNotice}
        >
          <i className="fa fa-list-ol"></i>
          <p>Notice Board</p>
        </div>
        <div
          onClick={logout}
          className="bg-orange-600 text-white text-center p-10 hover:text-orange-600 hover:bg-white shadow-lg shadow-black hover:cursor-pointer"
        >
          <i className="fa fa-lock"></i>
          <p>Log out</p>
        </div>
      </div>
      {blogVisible && (
        <div
          className="z-10 fixed top-0 p-10 w-full bg-white"       
        >
          <div className="flex justify-end">
            <button className="bg-red-700 p-3 text-white"    onClick={displayBlog}>X</button>
          </div>
          <TextEditor />
        </div>
      )}
      {noticeVisible && (
        <div
          className="z-10 fixed top-0 p-10 w-full bg-white"     
        >
          <div className="flex justify-end">
            <button className="bg-red-700 p-3 text-white"      onClick={displayNotice}>X</button>
          </div>
          <Notices/>
        </div>
      )}
    </>
  );
}
