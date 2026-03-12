
#include <stdio.h>

int main()
{

    int row, col;

    printf("\nenter row size\n");
    scanf("%d", &row);

    printf("\nenter col size\n");
    scanf("%d", &col);

    printf("\n entering first 2d array elements\n");

    int number1[row][col];

    for (int i = 0; i < row; i++)
    {

        for (int j = 0; j < col; j++)
        {

            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &number1[i][j]);
        }
    }

    int number2[row][col];

    printf("\n entering second 2d array elements\n");

    for (int i = 0; i < row; i++)
    {

        for (int j = 0; j < col; j++)
        {

            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &number2[i][j]);
        }
    }

    printf("\n first 2d array elements\n");

    for (int i = 0; i < row; i++)
    {

        for (int j = 0; j < col; j++)
        {

            printf("\n%d\n", number1[i][j]);
        }
    }

    printf("\n second 2d array elements\n");

    for (int i = 0; i < row; i++)
    {

        for (int j = 0; j < col; j++)
        {

            printf("\n%d\n", number2[i][j]);
        }
    }

    // sum of both array

    int number3[row][col];

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {

            number3[i][j] = number1[i][j] + number2[i][j];
        }
    }

    printf("\n third 2d array element using addition\n");

    for (int i = 0; i < row; i++)
    {

        for (int j = 0; j < col; j++)
        {

            printf("\n%d\n", number3[i][j]);
        }
    }

    return 0;
}