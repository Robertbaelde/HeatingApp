import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    data2 = [
        {
            "name": "Germany",
            "series": [
                {
                    "name": "2010",
                    "value": 7300000
                },
                {
                    "name": "2011",
                    "value": 8940000
                }
            ]
        },
{
    "name": "USA",
    "series": [
        {
            "name": "2010",
            "value": 7870000
        },
        {
            "name": "2011",
            "value": 8270000
        }
        ]
}
];
     data = [
        {
            'name': 'Room temperature',
            'series': [
                {
                    'value': 25,
                    'name': '2016-09-16T21:39:49.543Z'
                },
                {
                    'value': 23,
                    'name': '2016-09-14T12:59:29.755Z'
                },
                {
                    'value': 24,
                    'name': '2016-09-24T06:36:35.831Z'
                }
            ]
        },
        {
            'name': 'Target temperature',
            'series': [
                {
                    'value': 23,
                    'name': '2016-09-16T21:39:49.543Z'
                },
                {
                    'value': 23,
                    'name': '2016-09-14T12:59:29.755Z'
                },
                {
                    'value': 23,
                    'name': '2016-09-24T06:36:35.831Z'
                }
            ]
        }
    ];
    single: any[];
    multi: any[];

    view: any[] = [100, 400];

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        Object.assign(this, { single });
        window.dispatchEvent(new Event('resize'));
    }

    onSelect(event) {
        console.log(event);
    }
}
