
#include <iostream>
using namespace std;

class Employee
{

private:
    int emp_id;
    string emp_name;
    int emp_age;
    string emp_role;
    double emp_salary;
    string emp_city;
    int emp_experience;
    string emp_company_name;

public:
    void setEmpDetail(int id, string name, int age, string role, double salary, string city, int experience, string companyName)
    {

        emp_id = id;
        emp_name = name;
        emp_age = age;
        emp_role = role;
        emp_salary = salary;
        emp_city = city;
        emp_experience = experience;
        emp_company_name = companyName;
    }

    void displayEmployeeDetail()
    {

        cout << "Employee Id           :" << emp_id << endl;
        cout << "Employee Name         :" << emp_name << endl;
        cout << "Employee age          :" << emp_age << endl;
        cout << "Employee role         :" << emp_role << endl;
        cout << "Employee salary       :" << emp_salary << endl;
        cout << "Employee city         :" << emp_city << endl;
        cout << "Employee experience   :" << emp_experience << endl;
        cout << "Employee company name :" << emp_company_name << endl;
    }
};

int main()
{

    Employee e1;

    e1.setEmpDetail(1, "micheal", 35, "developer", 200000, "bvn", 1, "tcs");

    e1.displayEmployeeDetail();

    Employee e2;

    e2.setEmpDetail(2, "charlie", 30, "tester", 100000, "ahm", 2, "infosys");

    e2.displayEmployeeDetail();

    return 0;
}