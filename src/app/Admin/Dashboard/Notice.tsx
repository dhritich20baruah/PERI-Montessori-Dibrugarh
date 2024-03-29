import axios from "axios";
import React, { useEffect, useState } from "react";

type noticeType = {
    id: string,
    notice: string,
    written_on: string
}

export default function Notices() {
  const [notice, setNotice] = useState("");
  const [date, setDate] = useState("");
  const [noticeArr, setNoticeArr] = useState([])

  //Add notice
  async function addNotice(event: React.FormEvent) {
    event.preventDefault();
    const noticeObj = {
      notice: notice,
      written_on: date,
    };
    try {
      await axios.post("/api/notice", noticeObj);
      alert("Notice Added");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  //READ
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("/api/notice");
      const result = response.data;
      setNoticeArr(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <main className="m-10">
      <form className="shadow-lg shadow-black rounded-md p-5">
        <label htmlFor="notice">
          Add notice
          <input
            type="text"
            name="notice"
            id="notice"
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            className="border-[1px] border-gray-600  p-1 my-3 rounded-md w-[95%]"
          />
        </label>
        <br />
        <label htmlFor="date">
          Date <br />
          <input
            type="date"
            name="date"
            id="date"
            className="border-[1px] border-gray-600  p-1 my-3 rounded-md w-[95%]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button
          className="p-2 rounded-md text-white bg-orange-800"
          type="submit"
          onClick={addNotice}
        >
          SUBMIT
        </button>
      </form>

      <div className="my-5">
        <h1 className="my-3 text-center">Notices</h1>
        {/* {noticeArr.map((items) => {
          return (
            <ul className="flex justify-between my-2" key={items.id}>
              <li>&gt; {items.notice}</li>
              <li>
                <button
                  className="rounded-md border-2 text-red-700 border-red-700 p-1 hover:bg-red-700 hover:text-white"
                //   onClick={(id) => deleteNotice(items.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })} */}
      </div>
    </main>
  );
}
