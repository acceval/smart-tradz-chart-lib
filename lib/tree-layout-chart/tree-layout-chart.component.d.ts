import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TreeLayoutChartComponent implements OnInit {
    selectedSegmentationIndex: number;
    chartClick: EventEmitter<any>;
    treeData: any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLayoutChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLayoutChartComponent, "lib-tree-layout-chart", never, { "selectedSegmentationIndex": "selectedSegmentationIndex"; "treeData": "treeData"; }, { "chartClick": "chartClick"; }, never, never>;
}
