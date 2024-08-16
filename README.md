# process

pnpm init

根目录下的package.json设置 "private": true  "type": "module"  

创建utils pnpm init  main要指定好路径 配置"type": "module"  
创建constants pnpm init  main要指定好路径 配置"type": "module"

创建pnpm-workspace.yaml  

pnpm i @afe1/utils@workspace:* -w  
pnpm i @afe1/constants@workspace:* -w  

app import {xxx} form '@afe1/xxx'
