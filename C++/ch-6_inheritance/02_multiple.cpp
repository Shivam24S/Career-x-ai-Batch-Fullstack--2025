

// multiple inheritance

// children has multiple Parent

#include <iostream>
using namespace std;

class GrandFather
{

public:
    int bhk = 3;

    void GrandFatherProperty()
    {

        cout << "GrandFather had build " << bhk << " house" << endl;
    };
};

class Father
{

public:
    int bhk = 4;

    void FatherProperty()
    {
        cout << "Father had build " << bhk << " house" << endl;
    };
};

class Son : public GrandFather, public Father
{

public:
    int bhk = 5;

    void property()
    {

        cout << "Son had build " << bhk << " house" << endl;
    };
};

int main()
{

    Son s;

    s.GrandFatherProperty();

    s.FatherProperty();

    s.property();

    return 0;
}