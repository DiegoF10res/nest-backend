import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/infrastructure/prisma.service';

describe('Auth E2E', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const testUser = { name: 'e2e user', email: 'e2e@example.com', password: 'testpass' };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get(PrismaService);

    await app.init();

    // 👇 Limpieza antes de los tests
    await prisma.cleanDb();
  });

  it('register -> login -> profile', async () => {
    // Register
    await request(app.getHttpServer()).post('/users/register').send(testUser).expect(201);

    // Login
    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: testUser.email, password: testUser.password })
      .expect(201);

    expect(login.body.access_token).toBeDefined();
    const token = login.body.access_token;

    // Profile
    const profile = await request(app.getHttpServer())
      .get('/auth/profile')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(profile.body.email || profile.body.username).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
