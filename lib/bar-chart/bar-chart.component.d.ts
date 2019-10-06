import { OnInit, EventEmitter } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
export declare class BarChartComponent implements OnInit {
    barChartOptions: ChartOptions;
    barChartLabels: Label[];
    barChartLegend: boolean;
    barChartData: ChartDataSets[];
    barChartPlugins: any[];
    barChartColors: Array<any>;
    simpleChartConfig: SimpleChartConfig;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    labelClick: EventEmitter<any>;
    chart: BaseChartDirective;
    chartType: string;
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
