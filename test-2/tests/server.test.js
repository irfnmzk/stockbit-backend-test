const request = require("supertest");
const { initializeApp } = require("../src");

describe("API ENDPOINT", () => {
  it("should return correct movie with id tt0093175", async () => {
    const app = await initializeApp();
    const result = await request(app).get("/movie/tt0093175");
    expect(result.status).toBe(200);
  });
});
