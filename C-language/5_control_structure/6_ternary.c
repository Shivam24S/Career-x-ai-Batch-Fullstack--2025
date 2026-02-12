

#include <stdio.h>

int main()
{

    int age = 18;

    // if (age < 18)
    // {
    //     printf("you are not eligible for voting");
    // }
    // else
    // {
    //     printf("you are eligible for voting");
    // }

    // shorthand property for if else

    (age < 18) ? printf("you are not eligible for voting") : printf("you are eligible for voting");

    return 0;
}