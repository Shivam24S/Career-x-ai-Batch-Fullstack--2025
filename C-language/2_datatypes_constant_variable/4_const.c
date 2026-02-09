

#include <stdio.h>
#define pi 3.14

int main()
{

    const int num = 10;

    // constant can't reassign value again
    // num = 20;

    printf("%d\n", num);

    // pi = 4.15; // cant able to change the value

    printf("%f\n", pi);

    return 0;
}