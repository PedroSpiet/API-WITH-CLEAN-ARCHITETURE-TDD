export default class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.name) {
      return {
        statusCode: 400,
        message: new Error("missing params: name"),
      };
    }

    if (!httpRequest.email) {
      return {
        statusCode: 400,
        message: new Error("missing params: email"),
      };
    }
  }
}
