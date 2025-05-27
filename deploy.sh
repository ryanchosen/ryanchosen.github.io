#!/usr/bin/env sh

# 停止脚本，如果发生错误
set -e

# 构建
npm run docs:build 

# 进入生成的构建文件夹
cd ./src/.vuepress/dist


git add -A
git commit -m 'deploy'

# --- 添加远程仓库检测逻辑 ---
# 检查 'origin' 远程仓库是否存在
if git remote -v | grep -q '^origin'; then
  echo "Remote 'origin' already exists. Skipping addition."
else
  echo "Remote 'origin' not found. Adding..."
  git remote add origin git@github.com:ryanchosen/blog.git
  echo "Remote 'origin' added successfully."
fi

git push -u origin "main"
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd - # 返回上级目录