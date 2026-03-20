

#include <stdio.h>

#include <string.h>

int main()
{

    char str1[] = "abc";

    char str2[] = "efg";

    char str3[sizeof(str1)];

    int result1 = strcmp(str1, str2);

    printf("%d\n", result1);

    int result2 = strcmp(str2, str1);

    printf("%d\n", result2);

    strcpy(str3, str1);

    int result3 = strcmp(str1, str3);

    printf("%d\n", result3);

    

    return 0;
}

// abc = abc = 0

// abc = efg = -1

// efg = abc = 1