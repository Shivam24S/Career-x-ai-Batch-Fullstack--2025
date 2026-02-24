

#include <stdio.h>

int main()
{

    int sum = 0;
    int i = 0;

    while (i <= 100)
    {
        sum += i;
        i++;
    }

    printf("%d", sum);

    return 0;
}