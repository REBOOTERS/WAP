//
// Created by Real on 2023/11/12.
//
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int call_with_string(int a, int b, const char *host, int times) {
    return a * b + times;
//    printf("call_with_string Called \n");
//    printf("a = %d, b = %d, host = %s,times=%d\n", a, b, host, times);
}