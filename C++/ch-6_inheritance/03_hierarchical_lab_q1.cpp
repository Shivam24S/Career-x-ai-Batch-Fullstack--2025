
// one parent has multiple child

#include <iostream>
using namespace std;

class RBI
{

protected:
    float rate = 6;

public:
    void getRoi()
    {

        cout << "current interest rate is " << rate << endl;
    };
};

class SBI : public RBI
{

public:
    SBI()
    {

        rate = 7.0;
    }
};

class BOB : public RBI
{

public:
    BOB()
    {
        rate = 8.0;
    }
};

class ICICI : public RBI
{

public:
    ICICI()
    {

        rate = 9.0;
    }
};

int main()
{

    RBI R;
    SBI S;
    BOB B;
    ICICI I;

    cout << "RBI interest rate" << endl;
    R.getRoi();

    cout << "SBI interest rate" << endl;
    S.getRoi();

    cout << "BOB interest rate" << endl;
    B.getRoi();

    cout << "ICICI interest rate" << endl;
    I.getRoi();

    return 0;
}