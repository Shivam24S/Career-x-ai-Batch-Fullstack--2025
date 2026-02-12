

#include <stdio.h>

int main()
{

    int marks;

    printf("\n enter your marks\n");

    scanf("%d", &marks);

    if (marks >= 90)
    {
        printf("\n you have achieved A grade\n");
    }
    else if (marks >= 80)
    {
        printf("\n you have achieved B grade\n");
    }
    else if (marks >= 70)
    {
        printf("\n you have achieved C grade\n");
    }
    else if (marks >= 60)
    {
        printf("\n you have achieved D grade\n");
    }
    else if (marks >= 35)
    {
        printf("\n you have achieved D grade\n");
    }
    else
    {
        printf("\n you have failed in this exam\n");
    }

    return 0;
}