import { IonicAuth } from '@ionic-enterprise/auth';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';

@Injectable()
export class AuthProvider extends IonicAuth {
  constructor(platform: Platform) {
    super({
      authConfig: 'azure',
      clientID: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
      discoveryUrl:
        'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_acdemo2',
      audience: '',
      iosWebView: 'private',
      logLevel: 'DEBUG',
      scope:
        'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ed8cb65d-7bb2-4107-bc36-557fb680b994/demo.read',
      platform: platform.is('hybrid') ? 'cordova' : 'web',
      redirectUri: platform.is('hybrid')
        ? 'msauth://com.ionic.acprovider/O5m5Gtd2Xt8UNkW3wk7DWyKGfv8%3D'
        : 'http://localhost:8100',
      logoutUrl: platform.is('hybrid')
        ? 'msauth://com.ionic.acprovider/O5m5Gtd2Xt8UNkW3wk7DWyKGfv8%3D'
        : 'http://localhost:8100'
    });
  }
}
