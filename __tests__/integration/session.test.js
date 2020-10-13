const request = require("supertest");

const app = require("../../src/app");

describe("Authentication", () => {
    it("should authenticate with valid credentials", async () => {
        const user = await factory.create("User", {
            password: "123123"
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123123"
        });

        expect(response.status).toBe(200);
    });
});