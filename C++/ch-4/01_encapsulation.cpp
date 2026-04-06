

#include <iostream>
using namespace std;

class Bank
{

private:
    double bankBalance = 2000;

public:
    void getBankBalance()
    {

        cout << "bank balance is " << bankBalance << endl;
    }

    void setBankBalance(double bankBalance)
    {
        this->bankBalance += bankBalance;
    }
};

int main()
{

    Bank b1;

    b1.getBankBalance();

    b1.setBankBalance(8000);

    b1.getBankBalance();

    return 0;
}