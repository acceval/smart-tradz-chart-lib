import { OnInit, EventEmitter } from '@angular/core';
export declare class WaterfallChartComponent implements OnInit {
    waterfallChartData: WaterfallChartData[];
    waterfallExtendedChartData: WaterfallChartData[];
    waterfallChartOptions: any;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    labelClick: EventEmitter<any>;
    waterfallData: any[];
    waterfallChartConfig: any;
    constructor();
    ngOnInit(): void;
    chartClicked(event: any): void;
    chartHovered(event: any): void;
    chartAfterPlotted(event: any): void;
}
export declare class WaterfallChartData {
    name: string;
    connectorColor?: string;
    connectorWidth?: number;
    waterfallItemData: WaterfallItemData[];
    decreasingColor?: string;
    increasingColor?: string;
    totalsColor?: string;
}
export declare class WaterfallItemData {
    measure: string;
    itemlabel: string;
    value: number;
    dataLabel: string;
    hidden?: boolean;
    compared?: boolean;
}
