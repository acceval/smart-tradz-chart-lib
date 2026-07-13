import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import * as i0 from "@angular/core";
export declare class VariableWidthChartComponent implements OnInit, OnChanges {
    generatedChartData: Array<any>;
    generatedChartColors: Array<any>;
    chart: BaseChartDirective;
    variableWidthChartData: Array<VariableWidthChartData>;
    limitLineData: LimitLineData;
    variableWidthChartLegend: boolean;
    variableWidthChartOptions: ChartOptions;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private buildChartData;
    limitLineColor: any;
    private volumeAllocaitonColors;
    private getVolumeAllocationColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<VariableWidthChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VariableWidthChartComponent, "lib-variable-width-chart", never, { "variableWidthChartData": "variableWidthChartData"; "limitLineData": "limitLineData"; "variableWidthChartLegend": "variableWidthChartLegend"; "variableWidthChartOptions": "variableWidthChartOptions"; }, {}, never, never>;
}
export interface VariableWidthChartData {
    label: string;
    xValue: number;
    yValue: number;
    state: number;
}
export interface LimitLineData {
    label: string;
    xValue: number;
}
