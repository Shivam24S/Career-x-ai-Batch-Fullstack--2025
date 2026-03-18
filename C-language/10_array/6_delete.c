

#include <stdio.h>

int main()
{

    int num[5] = {10, 20, 30, 40, 50};

    // printf("%d", num[2]);

    int pos = 2;

    for (int i = pos; i < 5; i++)
    {

        num[i] = num[i + 1];
    }

       for (int i = 0; i < 4; i++)
    {
        printf("%d\n", num[i]);
    }

    // printf("%d", num[2]);

    return 0;
}