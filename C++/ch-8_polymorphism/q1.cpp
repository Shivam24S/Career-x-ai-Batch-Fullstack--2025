

#include <iostream>
using namespace std;

class Calculate
{

public:
    void calculation(int a, int b)
    {

        int result = a / b;

        cout << "division result " << result << endl;
    }

    void calculation(int a, int b, int c)
    {

        int result = a - b - c;

        cout << "substraction result " << result << endl;
    }

    void calculation(int a, int b, int c, int d)
    {

        int result = a * b * c * d;

        cout << "multiplication result " << result << endl;
    }

    void calculation(int a, int b, int c, int d, int e)
    {

        int result = a + b + c + d + e;
        cout << "addition result " << result << endl;
    }
};

int main()
{

    Calculate obj;

    // addition
    obj.calculation(10, 20, 30, 40, 50);

    // division
    obj.calculation(20, 10);

    // substraction

    obj.calculation(50, 20, 10);

    // multiplication

    obj.calculation(1, 2, 3, 4);

    return 0;
}