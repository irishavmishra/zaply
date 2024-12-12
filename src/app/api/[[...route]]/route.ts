import { Hono } from "hono";
import { handle } from "hono/vercel";
import ai from "./ai"
import images from "./images"


// if we host on versel or change it it "edge"
export const runtime = "nodejs"

const app = new Hono().basePath("/api")


app.route("/ai", ai)
app.route("/images", images)


export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof app;