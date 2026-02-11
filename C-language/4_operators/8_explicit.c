

#include <stdio.h>
#include <stdlib.h>

int main()
{

    int num1 = 10;

    char *num2 = "20";

    int total = num1 + atoi(num2);

    printf("%d", total);

    return 0;
}