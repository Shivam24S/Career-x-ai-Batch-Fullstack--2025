

#include <stdio.h>

int checkBalance(int balance)
{

    return balance;
}

int withDraw(int amount)
{

    int balance = checkBalance(10000);

    if (amount < balance)
    {

        int remain =  balance - amount;

        return remain;
    }
    else
    {
         printf("insufficient balance\n");
    }
}

int main(

)
{

    int remainBalance = withDraw(11000);

    printf("remain balance %d\n", remainBalance);

    return 0;
}