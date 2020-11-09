import SignUpController from "./signup";

describe("SignUp Controller", () => {
  test("Should return 400 if name no found", () => {
    const sut = new SignUpController();

    const httpRequest = {
      email: "any_email",
      password: "any_password",
      confirmPassword: "any_password",
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  });
});
