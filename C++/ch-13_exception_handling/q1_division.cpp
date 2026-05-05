
#include <iostream>
using namespace std;

int main()
{

    int firstNum, divisor;

    cout << "enter number " << endl;

    cin >> firstNum;

    cout << "enter divisor number " << endl;

    cin >> divisor;

    try
    {

        if (divisor <= 0)
        {

            throw "number can't be divide by zero or negative values";
        }
        else
        {

            int result = firstNum / divisor;

            cout << "the result is  " << result << endl;
        }
    }
    catch (const char *msg)
    {

        cout << msg << endl;
    }

    return 0;
}