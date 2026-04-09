

#include <iostream>
using namespace std;

int main()
{

    int x = 10;

    int &y = x;

    cout << "value before changing" << endl;

    cout << "x value " << x << endl;

    cout << "y value " << y << endl;

    cout << "value after changing" << endl;

    y = 24;

    cout << "x value " << x << endl;

    cout << "y value " << y << endl;

    return 0;
}