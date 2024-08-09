enum HttpStatusCode {
  // 2xx Success
  OK = 200,
  Created = 201,
  Accepted = 202,

  // 3xx Redirection
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  // 4xx Client Error
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,

  // 5xx Server Error
  InternalServerError = 500,
}
export interface Response<T = any> {
  data: T;
  message?: string;
  status: HttpStatusCode;
}

export interface ErrorResponse {
  error: string;
  message?: string;
  statusCode: HttpStatusCode;
}
