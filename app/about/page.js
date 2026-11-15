import ServerInfo from "../server-info";

export const metadata = { title: "About · Cha Ghor Journal" };

export default function About() {
  return (
    <article className="article">
      <h1>About</h1>
      <p>Cha Ghor Journal is a Next.js app (App Router), server-rendered for every request: the line at
        the bottom of each page shows which server answered and when.</p>
      <ServerInfo />
    </article>
  );
}
