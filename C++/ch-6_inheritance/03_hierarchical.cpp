

#include <iostream>
using namespace std;

class HomeWork
{

public:
    string work = "doing some gardening work ";

    void currentWork()
    {

        cout << " currently i am at home and " << work << endl;
    }
};

class OfficeWork
{

public:
    string officeWork = "need to complete some work ";

    void currentlyOfficeWork()
    {

        cout << " currently i am at office and " << officeWork << endl;
    }
};

class socialWork
{

public:
    string socialWork = "some ngo work ";

    void currentlySocialWork()
    {

        cout << " currently i am at ngo and " << socialWork << endl;
    };
};

class Friend : public HomeWork, public OfficeWork, public socialWork
{
};

int main()
{

    Friend ask;

    ask.currentlyOfficeWork();

    ask.currentWork();

    ask.currentlySocialWork();

    return 0;
}