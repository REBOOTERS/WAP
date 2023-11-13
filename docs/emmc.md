```shell
 emcc src/sum.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" -o out/my_page.html
```

```shell
emcc src/sum.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall','allocate','intArrayFromString','_free']" -o out/sum.html
```

```shell

emcc src/sum.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall','allocate','intArrayFromString']" -s "EXPORTED_FUNCTIONS=['_free']" -o out/sum.html
```
or

```shell
emcc src/test.c -Os -s WASM=1 -s SIDE_MODULE=1 -o out/test.wasm
```