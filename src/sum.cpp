#include <stdio.h>
#include <emscripten/emscripten.h>

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE int add(int a, int b) {
    return a + b;
}

EXTERN EMSCRIPTEN_KEEPALIVE void call_with_string(int a, int b, const char *host, int times) {
    printf("call_with_string Called \n");
    printf("a = %d, b = %d, host = %s,times=%d\n", a, b, host, times);
}


