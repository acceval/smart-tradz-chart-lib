import { OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
export declare class VariableWidthChartComponent implements OnInit {
    generatedChartData: Array<any>;
    generatedChartColors: Array<any>;
    chart: BaseChartDirective;
    variableWidthChartData: Array<VariableWidthChartData>;
    limitLineData: LimitLineData;
    variableWidthChartLegend: boolean;
    variableWidthChartOptions: ChartOptions;
    constructor();
    ngOnInit(): void;
    private buildChartData;
    limitLineColor: any;
    private volumeAllocaitonColors;
    private getVolumeAllocationColor;
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
