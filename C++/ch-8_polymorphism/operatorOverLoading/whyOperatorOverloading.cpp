

#include <iostream>
using namespace std;

class Number
{

public:
    int num;

    Number(int n)
    {

        num = n;
    }
};

int main()
{

    Number n1(10);

    Number n2(20);

    // this will not work and will give error because in class you can't do operation using operators for that we have to use operator overloading
    // cout << "total " << n1 + n2 << endl;

    return 0;
}