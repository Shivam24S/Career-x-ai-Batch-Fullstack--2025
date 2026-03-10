

#include <stdio.h>

int main()
{

    int num[2][2];

    printf("\n enter first element\n");

    scanf("%d", &num[0][0]);

    printf("\n enter second element\n");

    scanf("%d", &num[0][1]);

    printf("\n enter third element\n");

    scanf("%d", &num[1][0]);

    printf("\n enter fourth element\n");

    scanf("%d", &num[1][1]);

    printf("\n%d\n", num[0][0]);
    printf("%d\n", num[0][1]);
    printf("%d\n", num[1][0]);
    printf("%d\n", num[1][1]);

    return 0;
}