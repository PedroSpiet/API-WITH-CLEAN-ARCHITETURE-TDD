/* eslint-disable no-restricted-syntax */
import { HttpRequest, HttpResponse } from "../protocols/http";
import MissingParamError from "../errors/missing-params-error";
import { badRequest } from "../helpers/helper";

export default class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }

    const requiredFields = ["email", "name"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
