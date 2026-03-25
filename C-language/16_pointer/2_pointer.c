

#include <stdio.h>

int main()
{

    int a = 10;

    int *ptr;

    ptr = &a;

    printf("%p", ptr);

    printf("%d\n", a);

    *ptr = 20;

    printf("%d\n", a);

    return 0;
}
