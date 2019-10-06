import { OnInit, EventEmitter } from '@angular/core';
export declare class BoxPlotChartComponent implements OnInit {
    boxPlotChartOptions: any;
    boxPlotChartData: BoxPlotChartData[];
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    labelClick: EventEmitter<any>;
    boxPlotData: any[];
    boxPlotChartConfig: any;
    constructor();
    ngOnInit(): void;
    chartClicked(event: any): void;
    chartHovered(event: any): void;
    chartAfterPlotted(event: any): void;
}
export declare class BoxPlotChartData {
    yValues: number[];
    name: string;
    markerColor?: string;
    boxpoints?: any;
}
