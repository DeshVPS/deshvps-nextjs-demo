import os from "node:os";
import { connection } from "next/server";

/** Rendered on the server for every request. */
export default async function ServerInfo() {
  await connection();
  const time = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dhaka", hour12: false });
  return (
    <p className="server">
      Running on DeshVPS · Next.js on Node {process.version} · {os.hostname()} · rendered at {time} Dhaka time
    </p>
  );
}
