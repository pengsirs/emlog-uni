# emlog-wxmini


#### 介绍
EmlogPro官方出了Api接口，比以往的插件版Brief使用更方便，所以我另外重新写了一个程序，还叫Brief
Brirf-5.0使用uni-app开发，适配安卓、iOS、小程序
Rro的Api接口还不完善，所以实现的功能可能没有老版本多，等到新的接口发布，我会第一时间更新！

#### 安装教程

1.  导入项目到HBuilderX
2.  修改setting.js内的配置信息
3.  注册账号（http://tp.hkiii.cn）
4.  联系我激活账号即可

#### 更新记录

1.  2022-05-04
	项目开始时间
	新增文章发布
2.  2022-06-12
	新增文章列表和文章详情
	文章发布支持标签
	修复小bug
3.  2022-06-15
	文章发布支持上传图片到七牛云 
4.  2022-06-17
	新增文章发布验证
	新增关于、反馈等页面
5.  2022-06-25
	新增App登录功能
	新增收录查询功能
	修复bug若干
6.  2022-07-03
    新增文章分类
	新增app、小程序端分享功能
	修复小bug
7.  2022-07-04
	修复上传图片bug
	小程序配置改为后台设置
8.  2022-07-07
	修复小程序端bug
9.	2022-7-29
	新增浏览量自增
10.	2022-7-30
	修复文章页面图片显示异常
11. 2022-8-3
	修复小bug
12. 2022-12-9
	新增标签显示
	新增标签搜索
13. 2022-12-28
	完成原生百度小程序开发
	
## 新版（brief6.0）
14. 2022-12-30
	优化搜索功能
15. 2022-12-31
	优化页面
	新增专题推荐
	完成文章搜索和标签搜索
16. 2023-1-1
	准备将原有的后台管理改成EmlogApp管理插件
	修改文章详情内的显示方式
	将轮播图改为后台设置
	将文章列表上的评论数量改为格式化后的时间
	新增分类页面放到tabbar
17. 2023-1-2
	完成EmlogApp设置插件
	准备将插件内的设置同步到App（可在后台设置，也可在App设置）
	重写我的页面
	制作百度链接提交、文章发布编辑、发布笔记、程序管理、登录、侧边栏等页面原型图（未完成）
18. 2023-1-3
	重写并完成发布页面
	优化EmlogApp管理插件
	完成目前已有的插件内Api
19. 2023-1-4
	准备实现App自动更新功能
	新增审核模式
	前端接入部分Api
	普通用户功能基本完成
	
20. 2023-1-7
	修复专题显示问题
	
21. 2023-1-13
	前几天因为不小心把写完的插件删了
	这几天一直在重写
	前端接口后台插件
	接入在线更新（模板）
	完成后台更新Api设置
	修复了好多好多Bug，也新写了好多好多Bug
	插件对接完毕

22. 2023-1-17
	侧边统计
	链接提交

23. 2023-2-3
	兼容百度小程序
	更新站长头像获取方式
	修复文章详情内图片显示问题
	
#### 小程序服务器域名配置
1. https://tp.hkiii.cn（非必须，不配置或导致无法上传图片）
2. https://api.tianapi.com（非必须，调用百度查询）
3. 您的博客域名（必须） 
4. 
#### 使用教程
1. 需要申请的api接口
	* [百度收录量](https://www.tianapi.com/apiview/203)
	* [搜狗收录量](https://www.tianapi.com/apiview/204)

2. 需要注册的网站
	* [Dcloud](https://dev.dcloud.net.cn/) （用于App打包，可不使用uniapp，直接联系我要小程序包即可）

#### 源码下载
>   github地址：https://github.com/pengsirs/emlog-uni
>   [gitee地址](https://gitee.com/pengsirs/emlog-wxmini) 
