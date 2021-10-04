const request = require("supertest");
const { initializeApp } = require("../src");
const { database } = require("../src/config/database");

describe("API ENDPOINT", () => {
  beforeAll(async () => {
    await database.sync();
  });

  it("should return correct movie with id tt0093175", async () => {
    const app = await initializeApp();
    const result = await request(app).get("/movie/tt0093175");
    expect(result.status).toBe(200);
  });
});
