import { createRequestHandler } from "react-router";
// @ts-expect-error - this file exists after `npm run build`
import * as build from "../build/server/index.js";

export const config = {
  runtime: "nodejs",
};

const handler = createRequestHandler(build);

export default async (req: Request) => {
  return handler(req);
};
