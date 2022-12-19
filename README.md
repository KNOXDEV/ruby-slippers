# ruby-slippers

A magic tool that helps find your way home.

Built with the following technologies:
* [SvelteKit](https://kit.svelte.dev/) - frontend ui and meta framework
* [TypeScript](https://www.typescriptlang.org/) - types to not go insane
* [TailwindCSS](https://tailwindcss.com/) - css framework
* [daisyUI](https://daisyui.com/) - ui and component framework
* [supabase](https://supabase.com/) - database (postgres)
* [Prisma](https://www.prisma.io/) - ORM for database
* [Vercel](https://vercel.com/) - serverless deployment

## developing

First make sure you get the latest version of the [`ruby-slippers-db`](https://github.com/KNOXDEV/ruby-slippers-db)
dependency. This schema is in a submodule because it's included by multiple projects.

```bash
git submodule update --init --recursive
pnpm install 
pnpx prisma generate # generate the primsa client libraries
```

Next, you'll need to set the `DATABASE_URL` environment variable, most likely in your `.env` file
at the root of the project.

After that, you should be able to run the app like 

```bash
pnpm run dev -- --open
```

## building and deploying

This app is continuously deployed via Vercel and uses Supabase as its backend Postgres DB.
A few notes:

1. When in development and running `prisma migrate`, you should use the regular Supabase DB connection URL.
When in production on Vercel, you should provide the
[pooled URL](https://supabase.com/docs/guides/integrations/prisma#connection-pooling-with-supabase).