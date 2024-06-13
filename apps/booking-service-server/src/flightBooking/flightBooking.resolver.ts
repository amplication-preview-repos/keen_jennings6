import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FlightBookingResolverBase } from "./base/flightBooking.resolver.base";
import { FlightBooking } from "./base/FlightBooking";
import { FlightBookingService } from "./flightBooking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FlightBooking)
export class FlightBookingResolver extends FlightBookingResolverBase {
  constructor(
    protected readonly service: FlightBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
