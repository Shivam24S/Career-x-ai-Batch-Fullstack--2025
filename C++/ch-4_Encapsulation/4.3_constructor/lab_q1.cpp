

#include <iostream>
using namespace std;

class DiamondCompanies
{

private:
    int comp_id;
    string comp_name;
    int comp_staff_qty;
    double comp_revenue;
    int comp_imported_raw_diamond;
    int comp_exported_diamond;
    string comp_ceo;

public:
    // parameterized constructor

    DiamondCompanies(int id, string name, int staff_qty, double revenue, int imported_raw_diamond, int exported_diamond, string ceo)
    {

        comp_id = id;
        comp_name = name;
        comp_staff_qty = staff_qty;
        comp_revenue = revenue;
        comp_imported_raw_diamond = imported_raw_diamond;
        comp_exported_diamond = exported_diamond;
        comp_ceo = ceo;
    };

    void displayCompaniesDetails()
    {

        cout << "\n============== Company Detail =============\n";
        cout << "company id                   " << comp_id << endl;
        cout << "company name                 " << comp_name << endl;
        cout << "company staff quantity       " << comp_staff_qty << endl;
        cout << "company revenue              " << comp_revenue << endl;
        cout << "company imported raw diamond " << comp_imported_raw_diamond << endl;
        cout << "company exported diamond     " << comp_exported_diamond << endl;
        cout << "company ceo                  " << comp_ceo << endl;
    }
};

int main()
{

    int n;

    cout << "enter company number you want to add detail " << endl;
    cin >> n;
    cin.ignore();

    DiamondCompanies *d[n];

    int id;
    string name;
    int staff_qty;
    double revenue;
    int imported_raw_diamond;
    int exported_diamond;
    string ceo;

    for (int i = 0; i < n; i++)
    {
        cout << "you are entering detail of company number " << i + 1 << endl;

        cout << "enter company Id " << endl;
        cin >> id;
        cin.ignore();

        cout << "enter company Name " << endl;
        getline(cin, name);

        cout << "enter company staff quantity " << endl;
        cin >> staff_qty;
        cin.ignore();

        cout << "enter company revenue" << endl;
        cin >> revenue;
        cin.ignore();

        cout << "enter company imported raw diamond" << endl;
        cin >> imported_raw_diamond;
        cin.ignore();

        cout << "enter company exported diamond" << endl;
        cin >> exported_diamond;
        cin.ignore();

        cout << "enter company ceo " << endl;
        getline(cin, ceo);

        d[i] = new DiamondCompanies(id, name, staff_qty, revenue, imported_raw_diamond, exported_diamond, ceo);
    }

    for (int i = 0; i < n; i++)
    {

        d[i]->displayCompaniesDetails();
    }

    return 0;
}