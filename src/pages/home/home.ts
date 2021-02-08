import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loggedIn: Boolean;
  accessToken: string;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {}

  gotoChild() {
    this.navCtrl.push('ChildOnePage');
  }

  ionViewDidEnter() {
    this.getData();
  }

  async login() {
    await this.auth.login();
    this.getData();
  }

  async logout() {
    await this.auth.logout();
    this.getData();
  }

  async refresh() {
    await this.auth.refreshSession();
    this.getData();
  }

  private async getData() {
    this.loggedIn = await this.auth.isAuthenticated();
    this.accessToken = this.loggedIn ? JSON.stringify(await this.auth.getIdToken()) : '';
  }
}
