import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { replicate } from "@/lib/replicate";



// Define the schema using Zod
const promptSchema = z.object({
    prompt: z.string(),
});

// Define the validation middleware using zValidator
const promptValidator = zValidator('json', promptSchema);


const app = new Hono()


app.get("/hello", (c) => {
    return c.json({ hello: "hello" })
})


app.post("/generate-image", promptValidator, async (c) => {
    const { prompt } = c.req.valid("json");

    const input = { prompt: prompt };

    const output = await replicate.run("stability-ai/stable-diffusion-3", { input });

    const res = output as Array<string>;

    return c.json({ data: res[0] });
},
);

export default app;