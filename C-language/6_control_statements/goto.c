

#include <stdio.h>

int main()
{

    int age;

    printf("enter age\n");

    scanf("%d", &age);

    if (age < 18)
    {
        goto notEligible;
    }
    else
    {
        goto eligible;
    }

notEligible:
    printf("you are not eligible\n");
    return 0;

eligible:
    printf("you are  eligible\n");

    return 0;
}