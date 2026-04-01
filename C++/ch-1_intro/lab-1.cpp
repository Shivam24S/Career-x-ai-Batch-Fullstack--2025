

#include <iostream>

using namespace std;

int main()
{

    cout << "enter array element size you want to add : ";

    int n;

    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++)
    {

        cout << "arr[" << i << "] : ";

        cin >> arr[i];
    }

    cout << "even elements are \n";

    for (int i = 0; i < n; i++)
    {

        if (arr[i] % 2 == 0)
        {
            cout << arr[i] << " ";
        }
    }

    return 0;
}