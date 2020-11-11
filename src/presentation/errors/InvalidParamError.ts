export default class InvalidParamError extends Error {
  constructor(invalidParam: string) {
    super(`Invalid Param: ${invalidParam}`);
    this.name = "InvalidParamError";
  }
}
