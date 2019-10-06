import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
export declare class LineChartComponent implements OnInit, OnChanges {
    lineChartOptions: ChartOptions;
    lineChartLabels: Label[];
    lineChartLegend: boolean;
    lineChartData: ChartDataSets[];
    lineChartColors: Array<any>;
    lineChartPlugins: any[];
    simpleChartConfig: SimpleChartConfig;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    labelClick: EventEmitter<any>;
    chart: BaseChartDirective;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    chartClicked({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
    chartHovered({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
}
