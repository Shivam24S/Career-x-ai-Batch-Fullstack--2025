

#include <stdio.h>

int sum(int num)
{

    if (num < 0)
    {
        printf("\n sum is not defined for negative values\n");
    }
    else if (num == 0)
    {
        printf("\n sum is not defined for zero values\n");
    }
    else if (num == 1)
    {

        return 1;
    }
    else
    {
        return num + sum(num - 1);
    }
}

int main()
{

    int result1 = sum(5);

    int result2 = sum(10);

    printf("%d\n", result1);

    printf("\n%d\n", result2);

    return 0;
}