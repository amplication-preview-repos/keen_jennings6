/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FlightBookingWhereUniqueInput } from "./FlightBookingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FlightBookingUpdateInput } from "./FlightBookingUpdateInput";

@ArgsType()
class UpdateFlightBookingArgs {
  @ApiProperty({
    required: true,
    type: () => FlightBookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlightBookingWhereUniqueInput)
  @Field(() => FlightBookingWhereUniqueInput, { nullable: false })
  where!: FlightBookingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FlightBookingUpdateInput,
  })
  @ValidateNested()
  @Type(() => FlightBookingUpdateInput)
  @Field(() => FlightBookingUpdateInput, { nullable: false })
  data!: FlightBookingUpdateInput;
}

export { UpdateFlightBookingArgs as UpdateFlightBookingArgs };
