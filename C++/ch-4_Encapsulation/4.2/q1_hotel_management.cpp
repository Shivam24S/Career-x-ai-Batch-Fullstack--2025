

#include <iostream>
using namespace std;

class Hotel
{

private:
    int hotel_id, hotel_establish_year, hotel_staff_quantity, hotel_room_quantity;
    string hotel_name, hotel_type, hotel_rating, hotel_location;

    // static member

    static int hotelCount;

public:
    void setHotelDetail()
    {

        cout << "enter hotel Id " << endl;
        cin >> hotel_id;
        cin.ignore();

        cout << "enter hotel Name " << endl;
        getline(cin, hotel_name);

        cout << "enter hotel Type " << endl;
        getline(cin, hotel_type);

        cout << "enter hotel Rating " << endl;
        getline(cin, hotel_rating);

        cout << "enter hotel Location " << endl;
        getline(cin, hotel_location);

        cout << "enter hotel Year " << endl;
        cin >> hotel_establish_year;
        cin.ignore();

        cout << "enter hotel staff quantity " << endl;
        cin >> hotel_staff_quantity;
        cin.ignore();

        cout << "enter hotel room quantity " << endl;
        cin >> hotel_room_quantity;
        cin.ignore();

        hotelCount++;
    }

    void getHotelDetail()
    {

        cout << "Hotel id             " << hotel_id << endl;
        cout << "Hotel name           " << hotel_name << endl;
        cout << "Hotel type           " << hotel_type << endl;
        cout << "Hotel rating         " << hotel_rating << endl;
        cout << "Hotel location       " << hotel_location << endl;
        cout << "Hotel establish year " << hotel_establish_year << endl;
        cout << "Hotel staff number   " << hotel_staff_quantity << endl;
        cout << "Hotel room number    " << hotel_room_quantity << endl;
    }

    // static function

    static void totalHotel()
    {

        cout << "total hotels are " << hotelCount << endl;
    }
};

// static resolution operator
int Hotel::hotelCount = 0;

int main()
{

    int n;

    cout << "enter hotels number you want to add ";
    cin >> n;
    cin.ignore();

    // array of object
    Hotel h[n];

    for (int i = 0; i < n; i++)
    {

        cout << "\nentering detail of hotel number " << i + 1 << endl;

        h[i].setHotelDetail();
    }

    for (int i = 0; i < n; i++)
    {

        cout << "\nhotel detail number " << i + 1 << endl;

        h[i].getHotelDetail();
    }

    // static member function access

    Hotel::totalHotel();

    return 0;
}