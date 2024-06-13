import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaxiBookingList } from "./taxiBooking/TaxiBookingList";
import { TaxiBookingCreate } from "./taxiBooking/TaxiBookingCreate";
import { TaxiBookingEdit } from "./taxiBooking/TaxiBookingEdit";
import { TaxiBookingShow } from "./taxiBooking/TaxiBookingShow";
import { HotelBookingList } from "./hotelBooking/HotelBookingList";
import { HotelBookingCreate } from "./hotelBooking/HotelBookingCreate";
import { HotelBookingEdit } from "./hotelBooking/HotelBookingEdit";
import { HotelBookingShow } from "./hotelBooking/HotelBookingShow";
import { FlightBookingList } from "./flightBooking/FlightBookingList";
import { FlightBookingCreate } from "./flightBooking/FlightBookingCreate";
import { FlightBookingEdit } from "./flightBooking/FlightBookingEdit";
import { FlightBookingShow } from "./flightBooking/FlightBookingShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BookingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TaxiBooking"
          list={TaxiBookingList}
          edit={TaxiBookingEdit}
          create={TaxiBookingCreate}
          show={TaxiBookingShow}
        />
        <Resource
          name="HotelBooking"
          list={HotelBookingList}
          edit={HotelBookingEdit}
          create={HotelBookingCreate}
          show={HotelBookingShow}
        />
        <Resource
          name="FlightBooking"
          list={FlightBookingList}
          edit={FlightBookingEdit}
          create={FlightBookingCreate}
          show={FlightBookingShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
