

#include <iostream>
using namespace std;

class Admin
{

protected:
    int manager_salary;
    int employee_salary;
    int total_staff;

private:
    double total_revenue;
    bool can_terminate;

public:
    string company_name;

    Admin()
    {

        company_name = "xyz corporation";
        manager_salary = 50000;
        employee_salary = 20000;
        total_staff = 100;
        total_revenue = 50000000;
        can_terminate = true;
    };

    virtual void myAccess()
    {

        cout << "=========admin access========" << endl;
        cout << "company Name " << company_name << endl;
        cout << "manager salary " << manager_salary << endl;
        cout << "employee salary " << employee_salary << endl;
        cout << "total staff " << total_staff << endl;
        cout << "total revenue " << total_revenue << endl;
        cout << "can terminate employee " << can_terminate << endl;
    }
};

class Manager : public Admin
{

public:
    void myAccess() override
    {

        cout << "=========== Manager access =========" << endl;
        cout << "company Name " << company_name << endl;
        cout << "manager salary " << manager_salary << endl;
        cout << "employee salary " << employee_salary << endl;
        cout << "total staff " << total_staff << endl;

        cout << "can't access admin private attribute " << endl;

        // cout << "total revenue " << total_revenue << endl;
        // cout << "can terminate employee " << can_terminate << endl;
    }
};

class Employee : public Manager
{

public:
    void myAccess() override
    {

        cout << "=========== Employee access =========" << endl;
        cout << "company Name " << company_name << endl;
        cout << "employee salary " << employee_salary << endl;
        cout << "total staff " << total_staff << endl;

        cout << "can't access admin as well as manager private attribute " << endl;

        // cout << "total revenue " << total_revenue << endl;
        // cout << "can terminate employee " << can_terminate << endl;
    };
};

int main()
{

    Admin a;
    Manager m;
    Employee e;

    a.myAccess();

    m.myAccess();

    e.myAccess();

    return 0;
}