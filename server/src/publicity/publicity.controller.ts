import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PublicityService } from "./publicity.service";
import { PublicityControllerBase } from "./base/publicity.controller.base";

@swagger.ApiTags("publicities")
@common.Controller("publicities")
export class PublicityController extends PublicityControllerBase {
  constructor(
    protected readonly service: PublicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
