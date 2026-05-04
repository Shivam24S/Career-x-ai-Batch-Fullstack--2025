
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

            cout << "number can't be divide by zero or negative values " << endl;
        }
        else
        {

            int result = firstNum / divisor;

            cout << "the result is  " << result << endl;
        }
    }
    catch (char *msg)
    {

        cout << msg << endl;
    }

    return 0;
}