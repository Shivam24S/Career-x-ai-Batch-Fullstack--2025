

#include <stdio.h>

int main()
{

    int x, y, z;

    printf("\nenter first number\n");

    scanf("%d", &x);

    printf("\nenter second number\n");

    scanf("%d", &y);

    printf("\nenter third number\n");

    scanf("%d", &z);

    printf("the numbers are,%d%d%d", x, y, z);

    if (x >= y)
    {

        if (x >= z)
        {
            printf("x is the largest number %d", x);
        }
        else
        {
            printf("z is the largest number %d", z);
        }
    }
    else if (y >= z)
    {
        printf("y is the largest number %d", x);
    }
    else
    {
        printf("z is the largest number %d", z);
    }

    return 0;
}