
#include <stdio.h>

int main()
{

    char str[] = "any random string here";

    int length;
    int i;

    for (i = 0; str[i] != '\0'; i++)
    {

        printf("%c", str[i]);
    }

    printf("%d", i);

    printf("%c", str[36]);

    return 0;
}