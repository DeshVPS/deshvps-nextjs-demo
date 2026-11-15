import Link from "next/link";
import { notFound } from "next/navigation";
import { findPost } from "../../../lib/posts";
import ServerInfo from "../../server-info";

export async function generateMetadata({ params }) {
  const post = findPost((await params).slug);
  return { title: post ? `${post.title} · Cha Ghor Journal` : "Not found" };
}

export default async function Post({ params }) {
  const post = findPost((await params).slug);
  if (!post) notFound();
  return (
    <article className="article">
      <Link href="/" className="back">← All stories</Link>
      <h1>{post.title}</h1>
      <time>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
      {post.body.map((para, i) => <p key={i}>{para}</p>)}
      <ServerInfo />
    </article>
  );
}
