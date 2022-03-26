import { Module } from "@nestjs/common";
import { PublicityModuleBase } from "./base/publicity.module.base";
import { PublicityService } from "./publicity.service";
import { PublicityController } from "./publicity.controller";
import { PublicityResolver } from "./publicity.resolver";

@Module({
  imports: [PublicityModuleBase],
  controllers: [PublicityController],
  providers: [PublicityService, PublicityResolver],
  exports: [PublicityService],
})
export class PublicityModule {}
