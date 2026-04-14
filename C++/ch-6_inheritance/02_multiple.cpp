
#include <iostream>

using namespace std;

class Employee
{

public:
    string work = "finance department";

    void currentWork()
    {

        cout << "worker is currently doing " << work << endl;
    };
};

class Manager : public Employee
{

public:
    void currentWork()
    {
        cout << "worker is currently doing " << work << endl;
    }
};

class Owner : public Employee
{

public:
    // string work = "IT department";

    // void currentWork()
    // {
    //     cout << "worker is currently doing " << work << endl;
    // }
};

int main()
{

    Manager m;

    m.currentWork();

    Owner o;

    o.work = "it department";

    o.currentWork();

    return 0;
}