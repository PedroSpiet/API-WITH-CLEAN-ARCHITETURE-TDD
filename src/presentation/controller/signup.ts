export default class SignUpController {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      message: new Error("missing params: name"),
    };
  }
}
