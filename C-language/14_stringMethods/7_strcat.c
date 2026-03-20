

#include <stdio.h>

#include <string.h>

int main()
{

    char str1[] = "hello";

    char str2[] = " good morning";

    strcat(str1, str2);

    printf("%s", str1);

    return 0;
}