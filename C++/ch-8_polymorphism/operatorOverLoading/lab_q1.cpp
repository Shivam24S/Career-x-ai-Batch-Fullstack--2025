

#include <iostream>
using namespace std;

class Number
{

public:
    int num;

    Number(int n)
    {
        num = n;
    };

    bool operator>(Number obj)
    {

        if (num > obj.num)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
};

int main()
{

    Number n1(30);

    Number n2(20);

    if (n1 > n2)
    {

        cout << "n1 is greater than n2" << endl;
    }
    else
    {
        cout << "n2 is greater than n1" << endl;
    }

    return 0;
}