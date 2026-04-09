

#include <iostream>

using namespace std;

void changeNumberValue(int &num)

{

    num = 50;
}

int main()
{

    int num = 20;

    cout << "num value " << num << endl;

    changeNumberValue(num);

    cout << "num value " << num << endl;

    return 0;
}