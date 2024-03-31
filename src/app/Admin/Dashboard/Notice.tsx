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
  const [noticeArr, setNoticeArr] = useState<noticeType[]>([])

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

  //DELETE
  const deleteNotice = async (id: string) => {
    await axios.post(`/api/notice/${id}`)
    alert('Notice Deleted')
    window.location.reload()
  }
  
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
          className="p-2 rounded-md text-white bg-green-700"
          type="submit"
          onClick={addNotice}
        >
          SUBMIT
        </button>
      </form>

      <div className="my-5">
        <h1 className="my-3 text-center font-bold text-2xl">Notices</h1>
         {noticeArr.map((items) => {
          return (
            <ul className="flex justify-between my-5 font-semibold rounded-md bg-orange-400 p-2 text-white" key={items.id}>
              <li>{items.written_on}</li>
              <li>{items.notice}</li>
              <li>
                <button
                  className="rounded-md border-2 text-red-700 border-red-700 p-1 hover:bg-red-700 hover:text-white bg-white"
                  onClick={(id) => deleteNotice(items.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })} 
      </div>
    </main>
  );
}
