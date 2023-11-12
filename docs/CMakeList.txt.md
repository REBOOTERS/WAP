## CMakeList Notes

- 通过 message 关键字可以在构建过程中打印信息。STATUS 表示普通信息，第二参是需要输出的信息

```shell
message(STATUS PROJECT_SOURCE_DIR: ${PROJECT_SOURCE_DIR})
```

- include_directories 可以搜索头文件进行包含，这样在使用某类时直接使用名称即可，不需要指定相对路径。

```shell
include_directories(${PROJECT_SOURCE_DIR}/src/header)
```
这样写之后，在其他文件内 `#include` header 目录下的头文件（.h 文件）时，直接写文件名即可

- aux_source_directory 可以搜索文件夹中的实现文件，并添加到后面的变量中，这里是 SRC_LIST

- add_executable 表示生成可执行文件，括号中第一个部分表示生成可执行文件的名称。后面跟着项目中所使用的源码文件。



## 参考文档

 - [Android NDK 开发 | CMake 使用手册 - 初见篇](https://juejin.cn/post/7125738805159542814)