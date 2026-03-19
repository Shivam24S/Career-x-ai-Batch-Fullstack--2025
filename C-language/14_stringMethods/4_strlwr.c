

#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{

    char alphabet[] = "ABCDEFGHI";

    char lowerCase[sizeof(alphabet)];

    int length = strlen(alphabet);

    int i;

    for (i = 0; i < length; i++)
    {

        lowerCase[i] = tolower(alphabet[i]);
    }

    lowerCase[i] = '\0';

    printf("lowerCase string is %s ", lowerCase);

    return 0;
}
