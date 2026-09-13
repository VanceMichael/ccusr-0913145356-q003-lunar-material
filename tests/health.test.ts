import { describe, expect, it } from "vitest";
import { buildApp } from "../src/app";

describe("健康检查", () => {
  it("返回运行状态", async () => {
    const app = buildApp();
    const response = await app.inject({ method: "GET", url: "/healthz" });
    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe("ok");
    await app.close();
  });
});
