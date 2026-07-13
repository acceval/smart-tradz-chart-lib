import { OnInit, EventEmitter } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
export declare class ScatterChartComponent implements OnInit {
    scatterChartOptions: ChartOptions;
    scatterChartLabels: Label[];
    scatterChartData: ChartDataSets[];
    scatterChartColors: Array<any>;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<ScatterChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScatterChartComponent, "lib-scatter-chart", never, { "scatterChartOptions": "scatterChartOptions"; "scatterChartLabels": "scatterChartLabels"; "scatterChartData": "scatterChartData"; "scatterChartColors": "scatterChartColors"; "simpleChartConfig": "simpleChartConfig"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never, never>;
}
