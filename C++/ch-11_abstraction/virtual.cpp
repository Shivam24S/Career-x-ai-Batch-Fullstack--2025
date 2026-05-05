
#include <iostream>

using namespace std;

class Payment
{

public:
    virtual void pay()
    {

        cout << "this is generic method of pay " << endl;
    }
};

class Upi : public Payment
{

public:
    void Pay()
    {
        cout << "this is upi method  of payment" << endl;
    }
};

class Card : public Payment
{

public:
    void pay()
    {

        cout << "this is card method of payment" << endl;
    }
};

int main()
{

    Payment *p;

    Upi u;
    Card c;

    p = &u;
    p->pay();

    p = &c;
    p->pay();

    return 0;
}
