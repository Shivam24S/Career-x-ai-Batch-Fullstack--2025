

#include <stdio.h>

// function declaration
// parameter are placeholder
void calc(int a, int b)
{

    printf("%d\n", a + b);
};

int main()
{

    // function invocation
    calc(10, 12);

    // reusing

    // arguments
    calc(12, 12);

    return 0;
}