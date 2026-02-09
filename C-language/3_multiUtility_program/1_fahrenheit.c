

#include <stdio.h>

int main()
{

    float celsius, fahrenheit;

    printf("\n enter celsius value\n");

    scanf("%f", &celsius);

    fahrenheit = (9.0 / 5.0) * celsius + 32;

    printf("The Temperature in Fahrenheit %.2f", fahrenheit);

    return 0;
}