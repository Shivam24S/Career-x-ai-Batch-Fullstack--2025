

#include <stdio.h>
#include <string.h>

int main()
{

    char str[] = "hello";

    char copyString[sizeof(str)];

    // strcpy("destination","source");

    strcpy(copyString, str);

    printf("the copied string is %s", copyString);

    return 0;
}