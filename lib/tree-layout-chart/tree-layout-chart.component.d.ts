import { OnInit, EventEmitter } from '@angular/core';
export declare class TreeLayoutChartComponent implements OnInit {
    selectedSegmentationIndex: number;
    chartClick: EventEmitter<any>;
    treeData: any;
    constructor();
    ngOnInit(): void;
}
