

#include <iostream>
using namespace std;

class Number1
{

protected:
    int num1;

public:
    Number1(int x)
    {
        num1 = x;
    }
};

class Number2 : public Number1
{

protected:
    int num2;

public:
    Number2(int x, int y) : Number1(x)
    {

        num2 = y;
    }
};

class Number3
{

protected:
    int num3;

public:
    Number3(int x)
    {
        num3 = x;
    }
};

class Number4 : public Number2, public Number3
{

protected:
    int num4;

public:
    Number4(int w, int x, int y, int z) : Number2(x, y), Number3(w)
    {

        num4 = z;
    };

    void sumOfAllNumber()
    {

        cout << "total " << num1 + num2 + num3 + num4 << endl;
    };
};

int main()
{

    Number4 obj(10, 20, 30, 40);

    obj.sumOfAllNumber();

    return 0;
}