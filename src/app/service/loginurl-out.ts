
export class LoginurlOutPut {
  username: string;
  result: LoginOutputResult;
}
export class LoginOutputResult {
  status: string;
  data: LoginResultData;
}
export class LoginResultData {
    url: string;
}

export class loginurlInput {
  username: string;
  platformName: string;
}