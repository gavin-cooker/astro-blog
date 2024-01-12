---
title: 'first post'
description: 'first post description'
pubDate: '2024/1/10 14:21:00'
author: "gavin"
heroImage: '/blog-placeholder-1.jpg'
tags: ['前端', '浏览器']
---

astro功能：
 1. 结构。支持md文件的解析；当md内嵌自定义模版时， 需要一并解析自定义模版。
 2. 路由。
	 1. 组织。基于目录+文件名做映射，来当作唯一路由url。
	 2. 解析。一对一映射， 当为自定义映射符时， 需返回目标集用于路由匹配。 
 3. 模版。模版预处理，根据对应文件类型使用对应库解析