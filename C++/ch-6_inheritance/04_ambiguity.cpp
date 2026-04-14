

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

class OfficeWork : public HomeWork
{

public:
    string officeWork = "need to complete some work ";

    void currentWork()
    {

        cout << " currently i am at office and " << officeWork << endl;
    }
};

class SocialWork : public OfficeWork
{

public:
    string socialWork = "some ngo work ";

    void currentWork()
    {

        cout << " currently i am at ngo and " << socialWork << endl;
    };
};

class Friend : public SocialWork
{
};

int main()
{

    Friend obj;

    obj.OfficeWork::currentWork();

    obj.SocialWork::currentWork();

    obj.currentWork();

    return 0;
}