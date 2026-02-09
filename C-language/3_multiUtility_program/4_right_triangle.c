

#include <stdio.h>

int main()
{

    int angle1, angle2, angle3;

    printf("\n Enter angle 1\n");

    scanf("%d", &angle1);

    printf("\n Enter angle 2\n");

    scanf("%d", &angle2);

    angle3 = 180 - (angle1 + angle2);

    printf("\n Third angle %d", angle3);

    return 0;
}