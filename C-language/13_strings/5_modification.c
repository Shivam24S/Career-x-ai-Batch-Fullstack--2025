

#include <stdio.h>

int main()
{

    char alphabet[5] = {'a', 'b', 'c', 'd'};

    printf("%s", alphabet);

    // static modification

    alphabet[2] = 'z';

    printf("\n%s\n", alphabet);

    // dynamic modification

    printf("\n enter text to update\n");

    scanf("%s", &alphabet[3]);

    printf("\n%s\n", alphabet);

    return 0;
}