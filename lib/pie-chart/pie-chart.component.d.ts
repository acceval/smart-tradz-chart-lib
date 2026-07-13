import { OnInit, EventEmitter } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<PieChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PieChartComponent, "lib-pie-chart", never, { "pieChartOptions": "pieChartOptions"; "pieChartLabels": "pieChartLabels"; "pieChartData": "pieChartData"; "pieChartLegend": "pieChartLegend"; "pieChartPlugins": "pieChartPlugins"; "pieChartColors": "pieChartColors"; "simpleChartConfig": "simpleChartConfig"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never, never>;
}
