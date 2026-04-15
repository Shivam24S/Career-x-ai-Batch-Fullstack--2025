

#include <iostream>

using namespace std;

class Parent
{

public:
    void show()
    {

        cout << "this is parent class " << endl;
    };
};

class Child
{

public:
    void show()
    {

        cout << "this is child class " << endl;
    };
};

class Family : public Parent, public Child
{
};

int main()
{

    Family F;

    F.Parent::show();

    F.Child::show();

    return 0;
}