import { Hero } from './service/hero';
import {loginurlInput, LoginurlOutPut} from "./service/loginurl-out";

export const LOGINURL_OUT: LoginurlOutPut = {
    "username": "testuser",
        "result": {
        "status": "0",
            "data": {
            "url": "https://redirect.CONTDELIVERY.COM/Casino/Default.aspx?applicationid=1023&sext1=demo&sext2=demo&csid=16113&serverid=16113&gameid=americanroulette&ul=en&theme=igamingA4&usertype=0&variant=instantplay"
        }
    }
}

export const LOGINURL_IN: loginurlInput = {"username":"testuser", "platformName": "mg"}