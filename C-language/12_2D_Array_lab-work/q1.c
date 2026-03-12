

#include <stdio.h>

int main()
{

    int row, col, sum = 0;

    float avg;

    printf("\nenter row size\n");
    scanf("%d", &row);

    printf("\nenter col size\n");
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
            sum = sum + number[i][j];
        }
    }

    avg = sum / (row * col);

    printf("%.2f", avg);

    return 0;
}