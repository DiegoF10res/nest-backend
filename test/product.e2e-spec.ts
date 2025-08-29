import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Product E2E', () => {
  let app: INestApplication;
  let token: string | null = null;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    try {
      const res = await request(app.getHttpServer()).post('/auth/login').send({ username: 'e2e@example.com', password: 'testpass' });
      token = res.body.access_token;
    } catch (e) {
      token = null;
    }
  });

  it('POST /product creates product', async () => {
    const req = request(app.getHttpServer()).post('/product').send({ name: 'E2E Prod', price: 10, providerId: 1, stock: 100 });
    const res = token ? await req.set('Authorization', `Bearer ${token}`).expect(201) : await req.expect(201);
    expect(res.body.name).toBe('E2E Prod');
    expect(res.body.id).toBeDefined();
  });

  it('GET /product returns array', async () => {
    const req = request(app.getHttpServer()).get('/product');
    const res = token ? await req.set('Authorization', `Bearer ${token}`).expect(200) : await req.expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});