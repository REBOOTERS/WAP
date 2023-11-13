# WAP
WebAssemblyPlayground


## CMake

- [CMakeList.txt 教程](./docs/CMakeList.txt.md)

## WebAssembly 

编译命令

```shell
emcc src/sum.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" -o out/sum.html
```




## Refer

- [stackoverflow](https://stackoverflow.com/questions/64588986/how-to-solve-extra-exported-runtime-methods-exception-when-cmake-used-with-emscr)