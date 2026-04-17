

#include <iostream>
using namespace std;

class Employee
{
protected:
    int emp_id;
    string emp_name;
    int emp_age;
    int emp_salary;

public:
    Employee(int id, string name, int age, int salary)
    {
        emp_id = id;
        emp_name = name;
        emp_age = age;
        emp_salary = salary;
    }

    virtual void display()
    {
        cout << "\n emp_id " << emp_id << endl;
        cout << "\n emp_name " << emp_name << endl;
        cout << "\n emp_age " << emp_age << endl;
        cout << "\n emp_salary " << emp_salary << endl;
    }

    virtual ~Employee() {}
};

class FullTimeEmployee : public Employee
{

private:
    float bonus;

public:
    FullTimeEmployee(int id, string name, int age, int salary, float bonus) : Employee(id, name, age, salary)
    {

        this->bonus = bonus;
    }

    void display() override
    {

        Employee::display();

        cout << "Employee Bonus " << bonus << endl;
    }
};

class PartTimeEmployee : public Employee
{

private:
    int hours_worked;

public:
    PartTimeEmployee(int id, string name, int age, int salary, int hours) : Employee(id, name, age, salary)
    {

        hours_worked = hours;
    };

    void display() override
    {

        Employee::display();

        cout << "part time employee work hours " << hours_worked << endl;
    };
};

int main()
{

    Employee *employees[100];

    int choice;

    int count = 0;

    do
    {

        cout << "\nwelcome to Employee Management System " << endl;

        cout << "\n1.Add Employee" << endl;
        cout << "\n2.Display All Employee" << endl;
        cout << "\n3.Delete Employee" << endl;
        cout << "\n4.Exit" << endl;

        cout << "enter your choice from above menu " << endl;
        cin >> choice;

        if (choice == 1)
        {

            int type;

            cout << "\n1.Add FullTime Employee" << endl;
            cout << "\n2.Add PartTime Employee" << endl;

            cin >> type;

            int id, age, salary;
            string name;

            cout << "\nEnter Employee Id " << endl;
            cin >> id;
            cin.ignore();

            cout << "\nEnter Employee Name " << endl;
            getline(cin, name);

            cout << "\nEnter Employee Age " << endl;
            cin >> age;

            cout << "\nEnter Employee Salary " << endl;
            cin >> salary;

            if (type == 1)
            {

                int bonus;

                cout << "\nEnter Employee Bonus " << endl;
                cin >> bonus;

                employees[count] = new FullTimeEmployee(id, name, age, salary, bonus);

                count++;
            }
            else if (type == 2)
            {

                int hours;

                cout << "\n Enter PartTime Employee Extra Hours " << endl;
                cin >> hours;

                employees[count] = new PartTimeEmployee(id, name, age, salary, hours);

                count++;
            }
        }
        else if (choice == 2)
        {

            if (count == 0)
            {

                cout << "no Employee data found" << endl;
            }
            else
            {
                for (int i = 0; i < count; i++)
                {
                    employees[i]->display();
                }
            }
        }

        else if (choice == 3)
        {

            int index;

            cout << "Enter index to delete (0 - " << count - 1 << "): " << endl;
            cin >> index;

            if (index >= 0 && index < count)
            {

                delete employees[index];

                for (int i = index; i < count - 1; i++)
                {

                    employees[i] = employees[i + 1];
                }

                count--;
                cout << "employee data deleted " << endl;
            }
            else
            {
                cout << "invalid index to delete " << endl;
            };
        };

    } while (choice != 4);

    for (int i = 0; i < count; i++)
    {
        delete employees[i];

        cout << "memory free " << endl;
    }

    return 0;
}