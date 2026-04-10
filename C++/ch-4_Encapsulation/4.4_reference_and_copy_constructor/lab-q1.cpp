

#include <iostream>
using namespace std;
#include <vector>

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

    ~Student()
    {

        cout << "student destructor called" << endl;
    }
};

class StudentRecordManager
{

private:
    vector<Student> students;

public:
    void addStudent(const Student &s)
    {
        students.push_back(s);
        cout << "student added " << endl;
    }

    void displayAllStudent() const
    {

        if (students.empty())
        {

            cout << "no student data found" << endl;
            return;
        }
        else
        {

            for (int i = 0; i < students.size(); i++)
            {

                students[i].studentData();
            }
        }
    }

    void findStudentByRollNo(int rollNo)
    {

        for (int i = 0; i < students.size(); i++)
        {

            if (students[i].getRoll() == rollNo)
            {

                cout << "student found " << endl;

                students[i].studentData();
                return;
            }
        }

        cout << "student not found with this rollNo " << endl;
    }
};

int main()
{

    Student s1("alice", 1, 10.0);
    Student s2("charlie", 2, 9.0);

    StudentRecordManager admin;

    admin.addStudent(s1);
    admin.addStudent(s2);

    cout << "all student data " << endl;

    admin.displayAllStudent();

    cout << "finding by roll no " << endl;

    admin.findStudentByRollNo(12);

    return 0;
}
