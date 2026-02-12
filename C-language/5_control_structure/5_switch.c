

#include <stdio.h>

int main()
{

    char signal;

    printf("/n enter signal color (r=red,g=green,y=yellow)");

    scanf("%c", &signal);

    switch (signal)
    {

    case 'r':
        printf("\n you have to stop\n");
        break;

    case 'g':
        printf("\n you can go");
        break;

    case 'y':
        printf("\n you have to be prepared for stop");
        break;

    default:
    {
        printf("\n invalid choice please select from an option\n");
    }
    }

    return 0;
}