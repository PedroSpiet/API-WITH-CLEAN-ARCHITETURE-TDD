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
    expect(httpResponse.message).toEqual(new Error("missing params: name"));
  });

  test("should return 400 if email is not provided", () => {
    const sut = new SignUpController();

    const httpRequest = {
      name: "any_name",
      password: "any_password",
      confirmPassword: "any_password",
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.message).toEqual(new Error("missing params: email"));
  });
});
