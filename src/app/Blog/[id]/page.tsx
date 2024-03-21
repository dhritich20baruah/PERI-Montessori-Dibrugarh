import parse from "html-react-parser";
import { pool } from "@/utils/dbConnect";
import Link from "next/link";
import Image from "next/image";

export default async function post({ params }: { params: { id: string } }) {
  const postID = params?.id;
  const data = await pool.query(`SELECT * FROM blog WHERE id = $1`, [postID]);
  const post = data.rows[0];
  const allPost = await pool.query(`SELECT id, title FROM blog`);
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
            className="w-8 h-8"
          />
        </button>
      </Link>
      <Link href="/Blog">
        <button className="p-2 m-5 border-2 border-orange-600 rounded-lg hover:shadow-lg hover:shadow-orange-500">
          <Image
            src="/blog.svg"
            alt="All Blogs"
            width={500}
            height={500}
            className="w-8 h-8"
          />
        </button>
      </Link>
    </div>
      <main className="md:flex md:flex-row flex-col md:h-[80vh]">
        <div className="md:w-3/4 p-5 mx-5 bg-white space-y-5 rounded-lg shadow-lg shadow-black overflow-auto">
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <p className="text-orange-600 italic text-lg text-left font-semibold">
            {`${post.createdat}`.slice(0, 10)}
          </p>
          <div className="text text-justify">{parse(`${post.content}`)}</div>
        </div>
        <div className="recent-blogs md:w-1/4 mx-5 p-5 bg-white space-y-5 rounded-lg shadow-lg shadow-black">
          <h1 className="text-lg font-semibold">Recent posts</h1>
          {allPost.rows.map((titles) => {
            return (
              <Link href={"/Blog/" + titles.id} key={titles.id}>
                <h3 className="text-orange-600 font-semibold my-5 hover:cursor-pointer hover:underline">
                  &#62; {titles.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
