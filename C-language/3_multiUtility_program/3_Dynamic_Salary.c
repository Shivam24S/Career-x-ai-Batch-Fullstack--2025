

#include <stdio.h>

int main()
{

    float baseSalary, GrossSalary, HRA, DA, TA;

    printf("\n enter your base Salary\n");
    scanf("%f", &baseSalary);

    printf("\n enter your HRA\n");
    scanf("%f", &HRA);

    printf("\n enter your DA\n");
    scanf("%f", &DA);

    printf("\n enter your TA \n");
    scanf("%f", &TA);

    GrossSalary = baseSalary * (1 + (HRA + DA + TA) / 100);

    printf("\nGross Salary %.2f", GrossSalary);

    return 0;
}