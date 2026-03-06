

#include <stdio.h>

int main()
{

    int num[5] = {10, 20, 30, 40, 50};

    num[0] = 200;

    printf("%d", num[0]);

    printf("\nenter element to update\n");
    scanf("%d", &num[1]);

    printf("%d", num[1]);

    return 0;
}