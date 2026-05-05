

#include <iostream>
using namespace std;

int main()
{

    int age;

    cout << "enter your age " << endl;

    cin >> age;

    try
    {

        if (age < 18)
        {
            throw age;
        }

        cout << "your age is " << age << " which valid age for voting " << endl;
    }
    catch (int age)
    {

        cout << "your age is " << age << " which is not eligible for voting" << endl;
    }

    return 0;
}