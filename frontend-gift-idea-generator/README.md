# Welcome to the gift-idea-generator

DO NOT TOUCH THE GITIGNORE unless you are adding something to it, i don't want your node_modules

to run this project you will need the following: Node.js, yarn and vite 
to get node.js follow this link https://nodejs.org/en you should be able to just download and keep hitting next
run node -v to make sure it installed properly
it should also give you access to npm, if it doesn't follow this link https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
from there all you need to do is run npm install -g yarn
and npm install vite

you also might have to npm install react, but i forget

you may also have to install these
npm install -D @shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add radio-group
npx shadcn-ui@latest add label
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto

then you should be able to cd into the gift-idea-generator/frontend-gift-idea-generator and hit a yarn run dev, then go to the link

if you get errors, you likely need to install tailwind although i was able to do it on a second computer without needing to install this



Backend:
First run: pip install fastapi uvicorn openai
then cd into the backend folder and run uvicorn main:app --reload
This will make it so the frontend can hit the backend!

