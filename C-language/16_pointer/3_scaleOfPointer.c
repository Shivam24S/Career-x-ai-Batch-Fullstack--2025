

#include <stdio.h>

int main()
{

    int num = 24;

    int *ptr;

    ptr = &num;

    printf("%u\n", ptr);
    printf("%u\n", ptr + 1);

    char word = 'a';

    char *ptr2;

    ptr2 = &word;

    printf("%u\n", ptr2);
    printf("%u\n", ptr2 + 1);

    return 0;
}