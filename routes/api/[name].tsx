import { type Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const name = ctx.params.name;
    return new Response(
      `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
    );
  },
};
