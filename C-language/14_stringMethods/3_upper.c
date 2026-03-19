

#include <stdio.h>

#include <ctype.h>

#include <string.h>

int main()
{

    char alphabet[] = "abcdefghi";

    char upperCase[sizeof(alphabet)];

    int i;

    for (i = 0; alphabet[i] != '\0'; i++)
    {

        upperCase[i] = toupper(alphabet[i]);
    }

    upperCase[i] = '\0';

    printf(" uppercase string is  %s", upperCase);

    return 0;
}