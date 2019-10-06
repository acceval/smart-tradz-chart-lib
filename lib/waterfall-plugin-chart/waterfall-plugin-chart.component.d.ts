import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
}
export interface WaterfallPluginChartData {
    label: string;
    data: number;
    backgroundColor?: string;
    total?: boolean;
}
