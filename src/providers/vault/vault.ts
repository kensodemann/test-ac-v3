import { Injectable } from '@angular/core';
import { AuthMode, IonicIdentityVaultUser, IonicNativeAuthPlugin } from '@ionic-enterprise/identity-vault';
import { Platform } from 'ionic-angular';
import { BrowserVaultPlugin } from '../browser-vault.plugin';

@Injectable()
export class VaultProvider extends IonicIdentityVaultUser<any> {
  constructor(private browserVaultPlugin: BrowserVaultPlugin, platform: Platform) {
    super(platform, {
      unlockOnAccess: true,
      hideScreenOnBackground: true,
      lockAfter: 5000,
      authMode: AuthMode.SecureStorage
    });
  }

  getPlugin(): IonicNativeAuthPlugin {
    if ((this.platform as Platform).is('cordova')) {
      console.log('real');
      return super.getPlugin();
    }
    console.log('fake');
    return this.browserVaultPlugin;
  }
}
