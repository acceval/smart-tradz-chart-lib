import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<LineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineChartComponent, "lib-line-chart", never, { "lineChartOptions": "lineChartOptions"; "lineChartLabels": "lineChartLabels"; "lineChartLegend": "lineChartLegend"; "lineChartData": "lineChartData"; "lineChartColors": "lineChartColors"; "lineChartPlugins": "lineChartPlugins"; "simpleChartConfig": "simpleChartConfig"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; "labelClick": "labelClick"; }, never, never>;
}
