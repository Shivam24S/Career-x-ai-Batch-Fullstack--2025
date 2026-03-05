

#include <stdio.h>

int main()
{

    int num[5] = {10, 20, 30, 40, 50};

    printf("%d", num[0]);
    printf("%d", num[1]);
    printf("%d", num[2]);
    printf("%d", num[3]);
    printf("%d", num[4]);


    for(int i=0;i<=4;i++){
        printf("\n%d\n",num[i]);
    }

    return 0;
}