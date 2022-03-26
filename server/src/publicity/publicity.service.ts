import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PublicityServiceBase } from "./base/publicity.service.base";

@Injectable()
export class PublicityService extends PublicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
