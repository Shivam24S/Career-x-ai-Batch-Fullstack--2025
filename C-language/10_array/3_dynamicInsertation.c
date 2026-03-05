

#include <stdio.h>

int main()
{

    int num[5];

    printf("enter first element\n");
    scanf("%d", &num[0]);

    printf("enter second element\n");
    scanf("%d", &num[1]);

    printf("enter third element\n");
    scanf("%d", &num[2]);

    printf("enter fourth element\n");
    scanf("%d", &num[3]);

    printf("enter fifth element\n");
    scanf("%d", &num[4]);

    printf("%d", num[0]);
    printf("%d", num[1]);
    printf("%d", num[2]);
    printf("%d", num[3]);
    printf("%d", num[4]);

    return 0;
}