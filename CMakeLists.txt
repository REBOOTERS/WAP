cmake_minimum_required(VERSION 3.26)
project(WAP)

message(STATUS ${PROJECT_BINARY_DIR})
message(STATUS ${PROJECT_SOURCE_DIR})

set(CMAKE_CXX_STANDARD 17)

# 头文件搜索路径
include_directories(${PROJECT_SOURCE_DIR}/src/header)

# 源文件搜索路径
aux_source_directory(${PROJECT_SOURCE_DIR}/src SRC_LIST)

message(STATUS ${SRC_LIST})

add_executable(WAP ${SRC_LIST}
        out/test.c)

#add_library(WAP SHARED src/sum.cpp)
