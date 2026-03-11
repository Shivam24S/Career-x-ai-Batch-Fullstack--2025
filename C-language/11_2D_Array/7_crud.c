

#include <stdio.h>

int main()
{

    int row, col;

    printf("\n enter row size\n");

    scanf("%d", &row);

    printf("\n enter col size\n");

    scanf("%d", &col);

    int number[row][col];

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &number[i][j]);
        }
    }

    // iteration

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {

            printf("\n%d\n", number[i][j]);
        }
    }

    int rowNumber, ColNumber, updatedValue;

    printf("\n enter row number for update\n");

    scanf("%d", &rowNumber);

    printf("\n enter col size\n");

    scanf("%d", &ColNumber);

    printf("\n enter updated value \n");

    scanf("%d", &updatedValue);

    number[rowNumber][ColNumber] = updatedValue;

    printf("\n updated value  %d", number[rowNumber][ColNumber]);

    return 0;
}