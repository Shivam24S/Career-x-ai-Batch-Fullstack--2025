
// dynamic binding , runtime polymorphism, overriding

#include <iostream>
using namespace std;

class Cricket
{

public:
    virtual void getTotalOvers()
    {

        cout << "initial overs are zero " << endl;
    }
};

class T20 : public Cricket
{

    void getTotalOvers()
    {

        cout << "T20 match has 20 overs " << endl;
    };
};

class TestMatch : public Cricket
{

    void getTotalOvers()
    {

        cout << "Test Match has 90 overs " << endl;
    };
};

int main()

{

    // base class

    Cricket *match;

    // t20 match
    T20 t20Match;

    match = &t20Match;

    match->getTotalOvers();

    // test match

    TestMatch testMatch;

    match = &testMatch;

    match->getTotalOvers();

    return 0;
}