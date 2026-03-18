

#include <stdio.h>

int main()
{

    // static insert

    char a[6];

    a[0] = 'h';
    a[1] = 'e';
    a[2] = 'l';
    a[3] = 'l';
    a[4] = 'o';

    printf("%s", a);

    // dynamic insert

    char b[6];

    printf("\n enter string\n");
    scanf("%s", &b);

    printf("%s", b);

    return 0;
}