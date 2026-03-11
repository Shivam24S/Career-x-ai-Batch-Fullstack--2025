

#include <stdio.h>

int main()
{

    int number[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}

    };

    printf("\n%d\n", number[1][1]);

    printf("\n enter num element to update\n");

    scanf("%d", &number[1][1]);

    printf("\n%d\n", number[1][1]);


    

    return 0;
}