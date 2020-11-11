/* eslint-disable no-restricted-syntax */
import { HttpRequest, HttpResponse } from "../protocols/http";
import MissingParamError from "../errors/missing-params-error";
import { badRequest } from "../helpers/helper";
import { EmailValidator } from "../protocols/email-validator";
import InvalidParamError from "../errors/InvalidParamError";

export default class SignUpController {
  private readonly emailValidator: EmailValidator;

  constructor(isValidEmail: EmailValidator) {
    this.emailValidator = isValidEmail;
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }

    const requiredFields = [
      "email",
      "name",
      "password",
      "passwordConfirmation",
    ];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email);
    if (!isValid) {
      return badRequest(new InvalidParamError("email"));
    }
  }
}
