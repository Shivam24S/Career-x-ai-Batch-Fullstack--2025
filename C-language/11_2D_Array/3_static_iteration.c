

#include <stdio.h>

int main()
{

    int num[3][3] = {{1, 2, 3},
                     {4, 5, 6},
                     {7, 8, 9}};

    printf("\n%d\n", num[0][0]); 
    printf("\n%d\n", num[0][1]);
    printf("\n%d\n", num[0][2]);

    printf("\n%d\n", num[1][0]);
    printf("\n%d\n", num[1][1]);
    printf("\n%d\n", num[1][2]);

    printf("\n%d\n", num[2][0]);
    printf("\n%d\n", num[2][1]);
    printf("\n%d\n", num[2][2]);

    return 0;
}