

#include <stdio.h>

int calc(int num1, int num2, char operation)
{

    if (operation == '+')
    {

        return num1 + num2;
    }
    else if (operation == '-')
    {
        return num1 - num2;
    }
    else if (operation == '*')
    {
        return num1 * num2;
    }
    else if (operation == '/')
    {
        return num1 / num2;
    }
    else
    {
        printf("invalid operation\n");
    }
}

int main()
{

    int num1, num2;

    char operation;

    printf("enter num 1\n");
    scanf("%d", &num1);

    printf("\nenter num 2\n");
    scanf("%d", &num2);

    printf("please enter operation you want to perform\n ");
    scanf(" %c", &operation);

    printf("operation %c",operation);

    int result = calc(num1, num2, operation);

    printf("\nresult %d\n", result);

    return 0;
}