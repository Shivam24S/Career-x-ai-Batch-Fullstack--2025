

#include <stdio.h>

int main()
{

    int a = 5;

    float b = 10;

    char c = 's';

    double d = 123;

    printf("int size %zu\n", sizeof(a));
    printf("float size %zu\n", sizeof(b));
    printf("char size %zu\n", sizeof(c));
    printf("double size %zu\n", sizeof(d));

    printf("int size %d\n", sizeof(a));
    printf("float size %d\n", sizeof(b));
    printf("char size %d\n", sizeof(c));
    printf("double size %d\n", sizeof(d));

    printf("int size %lu\n", sizeof(a));
    printf("float size %lu\n", sizeof(b));
    printf("char size %lu\n", sizeof(c));
    printf("double size %lu\n", sizeof(d));

    return 0;
}