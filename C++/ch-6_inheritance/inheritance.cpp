

#include <iostream>

using namespace std;

// base Class
class Employee
{

private:
    string name;

public:
    int empId;

    void setName(string name)
    {
        this->name = name;
    }

    void getName()
    {

        cout << name << endl;
    }
};

// derived class  ->simple inheritance;
class Manager : public Employee
{

protected:
    int salary;

public:
    void setEmployeeSalary(int salary)
    {

        this->salary = salary;
    };

    void getSalary()
    {

        cout << salary << endl;
    }

    void getEmployeeId()
    {

        cout << "emp id " << empId << endl;
    }

};

// multilevel inheritance
class Owner : public Manager
{

public:
    void changeSalary(int salary)
    {

        this->salary = salary;
    };
};

int main()
{

    Owner obj;

    obj.setName("alice");

    obj.setEmployeeSalary(2000);

    obj.getName();

    obj.getSalary();

    obj.changeSalary(5000);

    obj.getSalary();

    obj.empId = 123;

    obj.getEmployeeId();



    return 0;
}