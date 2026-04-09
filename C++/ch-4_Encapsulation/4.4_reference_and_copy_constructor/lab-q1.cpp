

#include <iostream>
using namespace std;

class Student
{
private:
    string stu_name;
    int stu_roll;
    float stu_GPA;

public:
    // default constructor
    Student()
    {
        stu_name = "not set";
        stu_roll = 0;
        stu_GPA = 0.0;

        cout << " default constructor called " << endl;
    }

    // parameterized constructor

    Student(string name, int rollNo, float gpa)
    {
        stu_name = name;
        stu_roll = rollNo;
        stu_GPA = gpa;

        cout << " parameterized constructor called " << endl;
    }

    // copy constructor

    Student(const Student &obj)
    {

        stu_name = obj.stu_name;
        stu_roll = obj.stu_roll;
        stu_GPA = obj.stu_GPA;

        cout << " copy constructor called " << endl;
    }

    int getRoll() const
    {

        return stu_roll;
    }

    string getName() const
    {
        return stu_name;
    }
    float getGPA() const
    {

        return stu_GPA;
    }

    void studentData() const
    {

        cout << "\n student name   is  " << stu_name << endl;
        cout << "   student rollNo is  " << stu_roll << endl;
        cout << "   student gpa    is  " << stu_GPA << endl;
    }
};

int main()
{

    Student s1("alice", 1, 10.0);
    Student s2("charlie", 2, 9.0);

    s1.studentData();

    s2.studentData();

    return 0;
}
