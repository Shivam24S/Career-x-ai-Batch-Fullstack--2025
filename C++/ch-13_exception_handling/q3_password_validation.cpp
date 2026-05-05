

#include <iostream>
using namespace std;

int main()
{

    string password;
    bool hasUpper = false;

    cout << "enter password " << endl;
    cin >> password;

    try
    {

        for (int i = 0; i < password.length(); i++)
        {

            if (password[i] >= 'A' && password[i] <= 'Z')
            {
                hasUpper = true;
                break;
            }
        }

        if (!hasUpper)
        {
            throw "password must contain atleast one uppercase later";
        }

        cout << "password set successfully";
    }
    catch (...)
    {

        cout << "invalid password" << endl;
    }

    return 0;
}