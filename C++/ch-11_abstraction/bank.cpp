#include <iostream>
using namespace std;

class Bank
{

private:
    int balance;

public:
    Bank(int amount)
    {
        balance = amount;
    }

    void deposit(int amount)
    {

        balance += amount;

        cout << amount << " amount has been credited to account " << endl;
    }

    void withDraw(int amount)
    {

        if (amount > balance)
        {
            cout << "insufficient balance " << endl;
        }
        else
        {
            balance -= amount;

            cout << amount << " has been deduct from account " << endl;
        }
    }

    void checkBalance()
    {

        if (balance <= 0)
        {
            cout << "you bank balance is empty " << endl;
        }
        else
        {

            cout << "your account balance is " << balance << endl;
        }
    }
};

int main()
{

    Bank obj(5000);

    obj.checkBalance();

    obj.deposit(5000);

    obj.checkBalance();

    obj.withDraw(2000);

    obj.checkBalance();

    return 0;
}
