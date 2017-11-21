# static-lib

当前最新版本 V0.3

基础静态资源,负责引用jquery,bootstrap各版本的文件以及相应的各类控件所需要的文件

##文件夹及对应存放内容

文件夹|存放内容
----|----
css|bootstrap和各类控件所需要的样式文件
fonts|bootstrap所需要的字体文件
img|全局都需要用到的图片文件,谨慎添加
js|jquery,bootstrap和各类控件所需要的js文件

注意:
- 所有提交到master分支的文件均应该压缩后提交
- 该仓库的合并需要总监审批
- 注意bootstrap的字体文件路径修改

## 关于作者

```php
date_default_timezone_set('Asia/Shanghai');

class me extends 码畜
{

    public $_sNickName = 'pandajingjing';

    public $_sWebSite = 'http://pandajingjing.jxulife.com';

    protected $_iQQ = 18073848;
}
```

## change log
- 20171121 V0.3
	- 1.增加infinitescroll(3.0.2)类库
	- 2.增加masonry(4.2.0)类库
	- 3.调整目录结构,根据版本区分文件和文件夹
- 20170410 V0.2
	- 1.调整目录结构,增加控件或类库的文件夹
	- 2.增加syntaxhighlighter(3.0.83)类库
- 20170204 V0.1
	- 1.定义仓库内容
	- 2.创建基本目录结构
	- 3.新增jquery(3.1.0),bootstrap(3.3.0)以及bootstrap(3.3.7)所有文件
	- 4.新增收藏夹图标