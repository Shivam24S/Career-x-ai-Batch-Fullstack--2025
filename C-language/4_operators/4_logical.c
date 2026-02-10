

#include <stdio.h>

int main()
{

    int a = 1;

    int b = 0;

    // in and both condition must be true

    printf("\nAND %d\n", a && b);

    // in or atleast one condition must be true

    printf("\n OR %d\n", a || b);

    // not

    printf("\n NOT %d\n", !a);

    return 0;
}