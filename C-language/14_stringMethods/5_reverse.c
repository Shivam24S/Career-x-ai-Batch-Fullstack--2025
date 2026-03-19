

#include <stdio.h>
#include <string.h>

int main()
{

    char str[] = "hello";

    char reverseStr[sizeof(str)];

    int length = strlen(str);

    int i, j;

    for (i = length - 1, j = 0; i >= 0; i--, j++)
    {

        reverseStr[j] = str[i];
    }

    reverseStr[j] = '\0';

    printf("%s", reverseStr);

    return 0;
}