---
title: 'About Me'
description: 'About Me Description'
pubDate: 'August 08 2021'
author: "gavin me"
heroImage: '/blog-placeholder-about.jpg'
tags: ['心得']
---

关于自己

## 启动方式
### 启动数据库
ssr部分需mongodb数据库与node支持。
例如：
启动mongodb命令， cmd使用管理员运行：
```
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\Users\gavin\Desktop\dbserver\data\db"
```
### 启动node服务端
cmd运行：
```
yarn server
```
### 启动astro客户端
cmd运行：
```
yarn start
```

## 打包
运行命令， 构建astro资源。 标记为预渲染的资源会在此时进行构建。目标目录dist
```
yarn build
```
