

#include <iostream>
using namespace std;

class Student
{

private:
    int rollNo;
    string name;

public:
    // parameterized constructor
    Student(int rollNo, string name)
    {
        this->rollNo = rollNo;
        this->name = name;
    }

    // copy Constructor

    Student(const Student &s)
    {

        rollNo = s.rollNo;
        name = s.name;
    }

    // display

    void displayStudentDetail()
    {

        cout << "student name is " << name << " and their roll no is " << rollNo << endl;
    }
};

int main()
{

    Student s1(101, "alice");

    Student s2 = s1;

    // s1.displayStudentDetail();

    s2.displayStudentDetail();

        return 0;
}