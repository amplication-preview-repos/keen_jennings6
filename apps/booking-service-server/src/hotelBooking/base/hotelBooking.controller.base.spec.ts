import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { HotelBookingController } from "../hotelBooking.controller";
import { HotelBookingService } from "../hotelBooking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkInDate: new Date(),
  checkOutDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  roomType: "exampleRoomType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  checkInDate: new Date(),
  checkOutDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  roomType: "exampleRoomType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    checkInDate: new Date(),
    checkOutDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    roomType: "exampleRoomType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  checkInDate: new Date(),
  checkOutDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  roomType: "exampleRoomType",
  updatedAt: new Date(),
};

const service = {
  createHotelBooking() {
    return CREATE_RESULT;
  },
  hotelBookings: () => FIND_MANY_RESULT,
  hotelBooking: ({ where }: { where: { id: string } }) => {
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

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("HotelBooking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HotelBookingService,
          useValue: service,
        },
      ],
      controllers: [HotelBookingController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /hotelBookings", async () => {
    await request(app.getHttpServer())
      .post("/hotelBookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInDate: CREATE_RESULT.checkInDate.toISOString(),
        checkOutDate: CREATE_RESULT.checkOutDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /hotelBookings", async () => {
    await request(app.getHttpServer())
      .get("/hotelBookings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkInDate: FIND_MANY_RESULT[0].checkInDate.toISOString(),
          checkOutDate: FIND_MANY_RESULT[0].checkOutDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /hotelBookings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hotelBookings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hotelBookings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hotelBookings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkInDate: FIND_ONE_RESULT.checkInDate.toISOString(),
        checkOutDate: FIND_ONE_RESULT.checkOutDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /hotelBookings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/hotelBookings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInDate: CREATE_RESULT.checkInDate.toISOString(),
        checkOutDate: CREATE_RESULT.checkOutDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/hotelBookings")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
