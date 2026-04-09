

#include <iostream>
using namespace std;

class Student
{

private:
    int stu_id, stu_age;
    string stu_name, stu_course, stu_city, stu_email, stu_college;

public:
    void getStudentDetail()
    {

        cout << "student   Id " << stu_id << endl;
        cout << "student name " << stu_name << endl;
        cout << "student  age " << stu_age << endl;
        cout << "student  course " << stu_course << endl;
        cout << "student  city " << stu_city << endl;
        cout << "student  email" << stu_email << endl;
        cout << "student  college" << stu_college << endl;
    }

    void setStudentDetail()
    {

        cout << "enter student id " << endl;
        cin >> stu_id;
        cin.ignore();

        cout << "enter student name " << endl;
        cin >> stu_name;
        getline(cin, stu_name);

        cout << "enter student age " << endl;
        cin >> stu_age;
        cin.ignore();

        cout << "enter student course " << endl;
        cin >> stu_course;
        getline(cin, stu_course);

        cout << "enter student city " << endl;
        cin >> stu_city;
        getline(cin, stu_city);

        cout << "enter student email " << endl;
        cin >> stu_email;
        getline(cin, stu_email);

        cout << "enter student college " << endl;
        cin >> stu_college;
        getline(cin, stu_college);
    }
};

int main()
{

    Student s[5];

    for (int i = 0; i < 5; i++)
    {

        cout << "enter student detail " << i + 1 << endl;

        s[i].setStudentDetail();
    }

    for (int i = 0; i < 5; i++)
    {

        s[i].getStudentDetail();
    }

    return 0;
}