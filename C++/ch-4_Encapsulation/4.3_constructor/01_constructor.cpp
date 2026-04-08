

#include <iostream>
using namespace std;

class Car
{

private:
    string color = "black";
    string name = "g-wagon";

public:
    // default constructor
    Car()
    {

        cout << "car name is " << name << " and car color is " << color << endl;
    }

    ~Car()
    {

        cout << "it will call automatically" << endl;
    }
};

int main()

{

    Car c1;

    return 0;
}
