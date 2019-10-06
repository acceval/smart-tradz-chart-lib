import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';
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
}
