

#include <stdio.h>

int main()
{

    int num[4][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 16}};

    printf("%d\n", num[1][2]);

    num[1][2] = 700;

    printf("%d\n", num[1][2]);

    num[3][3] = 1600;

    printf("%d\n", num[3][3]);

        return 0;
}