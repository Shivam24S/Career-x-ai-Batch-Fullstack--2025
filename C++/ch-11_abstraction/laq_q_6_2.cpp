#include <iostream>
using namespace std;

// abstract class 
class Shape
{

public:
    virtual void calculate() = 0;
};

class Circle : public Shape
{

private:
    float radius;

public:
    Circle(float r)
    {

        radius = r;
    }

    void calculate() override
    {

        cout << "the area of circle is " << 3.14 * radius * radius << endl;
    };
};

class Triangle : public Shape
{

private:
    int base, height;

public:
    Triangle(int b, int h)
    {
        base = b;
        height = h;
    };

    void calculate() override
    {

        cout << "the area of triangle is " << 0.5 * base * height << endl;
    }
};

class Rectangle : public Shape
{

private:
    int length, base;

public:
    Rectangle(int l, int b)
    {
        length = l;
        base = b;
    }

    void calculate() override
    {

        cout << "the area of Rectangle is " << length * base << endl;
    }
};

int main()
{

    Shape *s;

    Circle c(10);
    Triangle t(10, 20);
    Rectangle r(30, 40);

    // area of circle
    s = &c;
    s->calculate();

    // area of triangle

    s = &t;
    s->calculate();

    // area of Rectangle

    s = &r;
    s->calculate();

    return 0;
}