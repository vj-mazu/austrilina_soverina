import { handle } from "hono/vercel";
import renderAppPromise from "../__create/index";

export const config = {
  runtime: "nodejs",
};

export default async (req: Request) => {
  const app = await renderAppPromise;
  return handle(app)(req);
};
