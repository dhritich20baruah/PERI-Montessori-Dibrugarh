import parse from "html-react-parser";
import Link from "next/link";
import { pool } from "@/utils/dbConnect";
import Image from "next/image";

export default async function Blogs() {
  const data = await pool.query(`SELECT * FROM blog`);
  const items = data.rows;
  return (
    <>
      <div className="flex items-center">
        <Link href="/">
          <button className="p-2 m-5">
            <Image
              src="/perilogo.jpg"
              alt="PERI"
              width={500}
              height={500}
              className="w-20 h-auto"
            />
          </button>
        </Link>
        <Link href="/">
          <button className="p-2 m-5 border-2 border-orange-600 rounded-lg hover:shadow-lg hover:shadow-orange-500">
            <Image
              src="/home.svg"
              alt="home"
              width={500}
              height={500}
              className="w-7 h-7"
            />
          </button>
        </Link>
      </div>
      <h1 className="text-center text-4xl text-orange-600">BLOG</h1>
      <article>
        {items.map((item) => {
          return (
            <Link href={"/Blog/" + item.id} key={item.id}>
              <ul className="bg-white m-10 p-5 rounded-md shadow-xl shadow-black">
                <li className="text-2xl font-bold">{item.title}</li>
                <li className="italic text-xl font-sans font-semibold">
                  &quot;{parse(`${item.content}`.slice(0, 300))}....&quot;
                </li>
                <li className="text-orange-600 italic text-lg text-left font-semibold">
                  {`${item.createdat}`.slice(0, 10)}
                </li>
              </ul>
            </Link>
          );
        })}
      </article>
    </>
  );
}
