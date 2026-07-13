import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';
import * as i0 from "@angular/core";
export declare class BaseChartComponent implements OnInit, OnDestroy, OnChanges {
    canvasRef: ElementRef;
    type: Chart.ChartType;
    data: Chart.ChartData;
    options: Chart.ChartOptions;
    plugins: any;
    chartClick: EventEmitter<{
        event?: MouseEvent;
        active?: {}[];
    }>;
    chartHover: EventEmitter<{
        event: MouseEvent;
        active: {}[];
    }>;
    private _options;
    private _chart;
    constructor();
    ngOnInit(): void;
    private chartClicked;
    private chartHovered;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseChartComponent, "lib-base-chart", never, { "type": "type"; "data": "data"; "options": "options"; "plugins": "plugins"; }, { "chartClick": "chartClick"; "chartHover": "chartHover"; }, never, never>;
}
