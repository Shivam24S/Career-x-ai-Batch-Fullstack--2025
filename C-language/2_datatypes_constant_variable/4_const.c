

#include <stdio.h>
#define Pi 3.14

int main()
{

    const int Num = 10;

    // num = 10; you have to assign value at the time of declaration otherwise you will get error

    // constant can't reassign value again
    // num = 20;

    printf("%d\n", Num);

    // pi = 4.15; // cant able to change the value

    printf("%f\n", Pi);

    return 0;
}