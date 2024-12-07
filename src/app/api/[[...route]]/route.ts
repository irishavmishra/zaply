import {Hono} from "hono";
import {handle} from "hono/vercel";

import images from "./images"

// if we host on versel or change it it "edge"
export const runtime = "nodejs"

const app = new Hono().basePath("/api")


const routs = app.route("/images", images)


export const GET = handle(app)

export type AppType = typeof app;