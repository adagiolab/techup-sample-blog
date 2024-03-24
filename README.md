# techup-sample-blog
Sample Blog webapp for TechUp


Stuff to install:
- npm init -y
- npm install express
- npm install ejs
- npm install dotenv (for DB env files)
- npm install @prisma/client (for Prisma)

- ejs language extension
- Fix codespaces ejs support (https://stackoverflow.com/questions/59238175/visual-studio-code-isnt-recognising-ejs)
- EJS passing of vars (https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)

Deployment:
- Must use port 10000 for Render (oh wait you dont need to lol. Yup double confirmed no need)
- Build command change to `yarn; npx prisma db push; npx prisma generate`
- Still need to check how to run migrations if no exsiting db

Note to self:
- partials to be introduced during hands on? or much much later in the programme
- remind participants to start and stop node server when you feel things are not working (need to restart when adding a new file)

For Prisma:
- npm install @prisma/client (if not yet installed)
- npx prisma init (confirm with (y)es when prompted)
- Need to create Postgres database on render (clickops)
- Use External Database URL copy past from render into .env for DATABASE_URL
