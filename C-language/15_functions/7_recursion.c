

#include <stdio.h>

int factorial(int num)
{

    if (num < 0)
    {
        printf("\n factorial is not defined for negative values\n");
    }
    else if (num == 0)
    {
        printf("\n factorial is not defined for zero values\n");
    }
    else if (num == 1)
    {

        return 1;
    }
    else
    {
        return num * factorial(num - 1);
    }
}

int main()
{

    int result1 = factorial(5);

    int result2 = factorial(10);

    printf("%d\n", result1);

    printf("\n%d\n", result2);

    return 0;
}