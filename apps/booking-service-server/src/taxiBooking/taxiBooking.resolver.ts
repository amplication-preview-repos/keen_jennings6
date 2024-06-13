import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TaxiBookingResolverBase } from "./base/taxiBooking.resolver.base";
import { TaxiBooking } from "./base/TaxiBooking";
import { TaxiBookingService } from "./taxiBooking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TaxiBooking)
export class TaxiBookingResolver extends TaxiBookingResolverBase {
  constructor(
    protected readonly service: TaxiBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
