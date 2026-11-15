import Link from "next/link";
import { posts } from "../lib/posts";
import ServerInfo from "./server-info";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Stories about tea from Dhaka</h1>
        <p>Recipes, history and the occasional strong opinion.</p>
      </section>
      <div className="posts">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`} className="post">
            <time>{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
          </Link>
        ))}
      </div>
      <ServerInfo />
    </>
  );
}
