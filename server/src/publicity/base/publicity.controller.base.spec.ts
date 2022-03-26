import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PublicityController } from "../publicity.controller";
import { PublicityService } from "../publicity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  avtive: "exampleAvtive",
  content: "exampleContent",
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  isReady: "true",
  playing: "examplePlaying",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  avtive: "exampleAvtive",
  content: "exampleContent",
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  isReady: "true",
  playing: "examplePlaying",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    avtive: "exampleAvtive",
    content: "exampleContent",
    createdAt: new Date(),
    date: new Date(),
    id: "exampleId",
    isReady: "true",
    playing: "examplePlaying",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  avtive: "exampleAvtive",
  content: "exampleContent",
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  isReady: "true",
  playing: "examplePlaying",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Publicity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PublicityService,
          useValue: service,
        },
      ],
      controllers: [PublicityController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /publicities", async () => {
    await request(app.getHttpServer())
      .post("/publicities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /publicities", async () => {
    await request(app.getHttpServer())
      .get("/publicities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /publicities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/publicities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /publicities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/publicities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
