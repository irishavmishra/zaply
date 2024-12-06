import {Hono} from "hono";
import {handle} from "hono/vercel";

export const runtime = "nodejs"

const app = new Hono().basePath("/api")

app.get("/",(c)=>{
    return c.json({
        test: "hono api test"
    })
})

export const GET = handle(app)