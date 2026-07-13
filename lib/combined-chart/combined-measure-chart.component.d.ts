import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
export declare class CombinedMeasureChartComponent implements OnInit, OnChanges {
    combinedChartOptions: ChartOptions;
    combinedChartLabels: Label[];
    combinedChartLegend: boolean;
    combinedChartData: ChartDataSets[];
    combinedChartPlugins: any[];
    combinedChartColors: Array<any>;
    simpleChartConfig: SimpleChartConfig;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    labelClick: EventEmitter<any>;
    chart: BaseChartDirective;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    chartClicked({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
    chartHovered({ event, active }: {
        event: MouseEvent;
        active: {}[];
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CombinedMeasureChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CombinedMeasureChartComponent, "lib-combined-measure-chart", never, { "combinedChartOptions": "combinedChartOptions"; "combinedChartLabels": "combinedChartLabels"; "combinedChartLegend": "combinedChartLegend"; "combinedChartData": "combinedChartData"; "combinedChartPlugins": "combinedChartPlugins"; "combinedChartColors": "combinedChartColors"; "simpleChartConfig": "simpleChartConfig"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; "labelClick": "labelClick"; }, never, never>;
}
