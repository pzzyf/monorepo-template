# process

pnpm init

根目录下的package.json设置 "private": true  "type": "module"  

创建utils pnpm init  main要指定好路径 配置"type": "module"  
创建constants pnpm init  main要指定好路径 配置"type": "module"

创建pnpm-workspace.yaml(这一步实际是在根仓库下依赖的时候把子仓的依赖也下上)

pnpm i "@afe1/utils@workspace:*" -w  
pnpm i "@afe1/constants@workspace:*" -w  
app import {xxx} form '@afe1/xxx'

# problem

直接通过git下载仓库

- rm -rf .git(所下载的仓库下)  
- git add xxx(根目录文件名)
