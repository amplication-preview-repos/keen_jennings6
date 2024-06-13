import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FlightBookingTitle } from "../flightBooking/FlightBookingTitle";
import { HotelBookingTitle } from "../hotelBooking/HotelBookingTitle";
import { TaxiBookingTitle } from "../taxiBooking/TaxiBookingTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="flightBookings"
          reference="FlightBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FlightBookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hotelBookings"
          reference="HotelBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HotelBookingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="taxiBookings"
          reference="TaxiBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaxiBookingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
