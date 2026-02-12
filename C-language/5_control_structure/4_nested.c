

#include <stdio.h>

int main()
{

    int age = 18;

    int drivingLicence = 1;

    if (age >= 18)
    {
        if (drivingLicence == 1)
        {
            printf("you can drive vehicle");
        }
        else
        {

            printf("you have to register on parivahanSarthi");
        }
    }
    else
    {
        printf("you are not eligible for driving yet");
    }

    return 0;
}