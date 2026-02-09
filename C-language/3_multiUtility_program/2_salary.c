

#include <stdio.h>

int main()
{

    float baseSalary, GrossSalary, HRA, DA, TA;

    baseSalary = 100;

    HRA = 10;

    DA = 5;

    TA = 8;

    float HraPercentage = 100 * HRA / 100;
    float DaPercentage = 100 * DA / 100;
    float TaPercentage = 100 * TA / 100;

    GrossSalary = baseSalary + HraPercentage + DaPercentage + TaPercentage;

    printf("\nGross Salary %.2f", GrossSalary);

        return 0;
}