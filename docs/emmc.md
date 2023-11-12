```shell
 emcc src/sum.cpp -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']" -o out/my_page.html
```