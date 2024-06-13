#!/bin/zsh

echo "npm create vite@latest "${1}"-- --template react"

npm create vite@latest $1 -- --template react
echo "cd " $1
cd $1

echo "npm install"
npm install
echo "npm install @mui/material @emotion/react @emotion/styled"
npm install @mui/material @emotion/react @emotion/styled

echo "npm install @mui/styled-engine-sc styled-components"
npm install @mui/material @mui/styled-engine-sc styled-components

echo "npm install @fontsource/roboto"
npm install @fontsource/roboto

echo "npm install @mui/icons-material"
npm install @mui/icons-material

cd src

echo "" > App.jsx
echo "" > App.css
echo "" > index.css
echo "
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ScriptApp</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
" > ../index.html

