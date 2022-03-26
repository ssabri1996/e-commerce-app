import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PublicityResolverBase } from "./base/publicity.resolver.base";
import { Publicity } from "./base/Publicity";
import { PublicityService } from "./publicity.service";

@graphql.Resolver(() => Publicity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PublicityResolver extends PublicityResolverBase {
  constructor(
    protected readonly service: PublicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
