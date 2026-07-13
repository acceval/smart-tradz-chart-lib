import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class WaterfallPluginChartComponent implements OnInit, OnChanges {
    waterfallPluginChartData: WaterfallPluginChartData[];
    chartData: Chart.ChartData;
    plugins: any[];
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private adaptDataForPlugin;
    options: {
        plugins: {
            datalabels: {
                display: boolean;
            };
            waterFallPlugin: {
                stepLines: {
                    enabled: boolean;
                };
            };
        };
    };
    chartClicked(event: any): void;
    chartHovered(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WaterfallPluginChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WaterfallPluginChartComponent, "lib-waterfall-plugin-chart", never, { "waterfallPluginChartData": "waterfallPluginChartData"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never, never>;
}
export interface WaterfallPluginChartData {
    label: string;
    data: number;
    backgroundColor?: string;
    total?: boolean;
}
