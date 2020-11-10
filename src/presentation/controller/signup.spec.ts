import SignUpController from "./signup";
import MissingParamError from "../errors/missing-params-error";

describe("SignUp Controller", () => {
  test("Should return 400 if name no found", () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        email: "any_email",
        password: "any_password",
        confirmPassword: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("should return 400 if email is not provided", () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: "any_name",
        password: "any_password",
        confirmPassword: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  test("Should return 400 if password no provided", () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email",
        passwordConfirmation: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });

  test("Should return 400 if passwordConfirmation no provided", () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email",
        password: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passwordConfirmation")
    );
  });
});
