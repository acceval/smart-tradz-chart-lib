import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BoxPlotChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BoxPlotChartComponent, "lib-box-plot-chart", never, { "boxPlotChartOptions": "boxPlotChartOptions"; "boxPlotChartData": "boxPlotChartData"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; "labelClick": "labelClick"; }, never, never>;
}
export declare class BoxPlotChartData {
    yValues: number[];
    name: string;
    markerColor?: string;
    boxpoints?: any;
}
