

#include <stdio.h>

void greeting(char msg[])
{

    printf("%s\n", msg);
}

int main()
{

    greeting("good morning");
    greeting("good afternoon");
    greeting("good night");

    return 0;
}