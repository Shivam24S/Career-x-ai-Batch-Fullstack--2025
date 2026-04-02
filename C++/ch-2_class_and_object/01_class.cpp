

#include <iostream>
using namespace std;

class Student
{
public:
    string name;
    string course;
    string grade;

    void setStudentDetail(string n, string c, string g)
    {

        name = n;

        course = c;

        grade = g;
    }

    void displayStudentInfo()
    {

        cout << "student name is " << name << endl;
        cout << "student course is " << course << endl;
        cout << "student grade is " << grade << endl;
    }
};

int main()
{

    Student s1;

    s1.setStudentDetail("alice", "fsd", "A");

    s1.displayStudentInfo();

    Student s2;

    s2.setStudentDetail("john", "graphic", "B");

    s2.displayStudentInfo();

    return 0;
}