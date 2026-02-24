

// condition is not satisfied but still code will execute once

// #include <stdio.h>

// int main()
// {

//     int num = 10;

//     do
//     {
//         printf("%d", num);
//     } while (num < 10);

//     return 0;
// }

// now condition is true

#include <stdio.h>

int main()
{

    int num = 0;

    do
    {
        printf("%d\n", num);
        num++;
    } while (num < 10);

    return 0;
}