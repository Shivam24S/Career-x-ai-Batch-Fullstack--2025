

#include <stdio.h>

int main()
{

    // create

    // static insert

    int num[5] = {10, 20, 30, 40, 50};

    // dynamic insert

    printf("\nenter array of element\n");

    scanf("%d", &num[0]);

    // read

    // static iteration
    printf("\n%d\n", num[0]);

    // dynamic iteration

    for (int i = 0; i < 4; i++)
    {
        printf("\n%d\n", num[i]);
    }

    // update

    // static modification

    num[0] = 100;

    // dynamic modification

    printf("\n enter updated num value\n");

    scanf("%d", &num[0]);

    // deletion

    int pos = 1;

    for (int i = pos; i < 4; i++)
    {
        num[i] = num[i + 1];
    }

    printf("\n new array without deleted element\n");

    for (int i = 0; i < 4; i++)
    {
        printf("\n%d\n", num[i]);
    }

    return 0;
}