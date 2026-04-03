

#include <iostream>

using namespace std;

int main()
{
    int start, end;

    cout << "enter starting year : ";
    cin >> start;

    cout << "enter ending year : ";
    cin >> end;

    int leapYear[100];
    int count = 0;

    for (int year = start; year < end; year++)
    {

        if ((year % 400 == 0) || (year % 4 == 0 && year != 100))
        {

            leapYear[count] = year;

            count++;
        }
    }

    cout << "leap Years are : " << endl;

    for (int i = 0; i < count; i++)
    {

        cout << leapYear[i] << "," << endl;
    }

    return 0;
}