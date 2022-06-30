import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DrawerService } from '../services/drawer.service';
import homeData from '../../assets/netflix-ui/mockdata/home.json';
import { ModalPage } from '../modal/modal.page';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal-animation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  sections = homeData.sections;
  spotlight = homeData.spotlight;

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true,
  };

  constructor(
    private modalCtrl: ModalController,
    private drawerService: DrawerService
  ) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { value: 123 },
      cssClass: 'transparent-modal',
    });

    await modal.present();
  }

  openInfo(series) {
    this.drawerService.openDrawer(series.title);
  }
}
