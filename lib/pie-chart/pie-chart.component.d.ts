import { OnInit, EventEmitter } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
export declare class PieChartComponent implements OnInit {
    pieChartOptions: ChartOptions;
    pieChartLabels: Label[];
    pieChartData: number[];
    pieChartLegend: boolean;
    pieChartPlugins: any[];
    pieChartColors: Array<any>;
    simpleChartConfig: SimpleChartConfig;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    chartClicked({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
    chartHovered({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
}
