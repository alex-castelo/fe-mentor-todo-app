#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:alex-castelo/fe-mentor-todo-app.git main:gh-pages

cd -
