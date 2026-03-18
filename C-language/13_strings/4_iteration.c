

#include <stdio.h>

int main()
{

    char greeting[15] = {'g', 'o', 'o', 'd', 'm', 'o', 'r', 'n', 'i', 'n', 'g', '\0'};

    printf("%s\n", greeting);

    // static iteration

    printf("%c\n", greeting[0]);
    printf("%c\n", greeting[1]);
    printf("%c\n", greeting[2]);
    printf("%c\n", greeting[3]);

    // dynamic iteration

    for (int i = 0; i <13; i++)
    {

        printf("\n%c\n", greeting[i]);
    }

    return 0;
}