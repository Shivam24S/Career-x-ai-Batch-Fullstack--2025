

#include <iostream>
using namespace std;

class Student
{
private:
    string name = "alice";

public:
    string course = "fsd";

    void display()
    {

        cout << name << endl;
    }

    void changeName(string studentName)
    {

        name = studentName;
    }
};

int main()
{

    Student s1;

    s1.display();

    cout << s1.course << endl;

    s1.changeName("micheal");

    s1.display();

    return 0;
}