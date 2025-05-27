#!/usr/bin/env sh

# 停止脚本，如果发生错误
set -e

# 构建
npm run docs:build 

# 进入生成的构建文件夹
cd ./src/.vuepress/dist


git add -A
git commit -m 'deploy'

git remote add origin https://gitee.com/RyanSu/blog.git
# 如果部署到 https://<USERNAME>.github.io/<REPO>

git push -u origin "main"
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd - # 返回上级目录