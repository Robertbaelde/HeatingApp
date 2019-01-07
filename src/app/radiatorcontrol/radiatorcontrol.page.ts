import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import axios from 'axios';
@Component({
  selector: 'app-radiator-control',
  templateUrl: 'radiatorcontrol.page.html',
  styleUrls: ['radiatorcontrol.page.scss']
})
export class RadiatorcontrolPage {
    radiators: any = [];

    constructor(public toastController: ToastController) {}

    ngOnInit() {
        this.loadRadiators();
    }

    loadRadiators() {
        axios.get('radiators').then((response) => {
            this.radiators = response.data.data;
        });
    }

    async updateRadiator(event, radiator) {
        axios.post(`radiators/${radiator.id}/valve-override`, {
            'position': radiator.valve,
            'time': 60,
        }).then(() => {
            this.toastController.create({
                message: 'Your settings have been saved.',
                duration: 2000,
                position: 'top'
            }).then((toast) => {
                toast.present();
            });

        });
    }
}
