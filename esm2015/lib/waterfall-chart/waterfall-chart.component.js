/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
export class WaterfallChartComponent {
    constructor() {
        this.waterfallChartOptions = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.waterfallData = [];
        this.waterfallChartConfig = {
            displayModeBar: false,
            displaylogo: false,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d']
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.waterfallData = [];
        this.dataProcessing();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['waterfallChartData']) {
            this.waterfallData = [];
            this.dataProcessing();
        }
    }
    /**
     * @return {?}
     */
    dataProcessing() {
        if (!this.waterfallChartOptions || Object.keys(this.waterfallChartOptions).length == 0) {
            this.waterfallChartOptions = new GlobalChartOptions().waterfallChartOptions;
        }
        /** @type {?} */
        let datasetIndex = 0;
        /** @type {?} */
        let comparedIndex = 0;
        /** @type {?} */
        let _this = this;
        this.waterfallChartData.forEach((/**
         * @param {?} chartData
         * @return {?}
         */
        chartData => {
            /** @type {?} */
            let measures = [];
            /** @type {?} */
            let xLabels = [];
            /** @type {?} */
            let dataLabels = [];
            /** @type {?} */
            let yValues = [];
            /** @type {?} */
            let hoverinfos = [];
            /** @type {?} */
            let index = 0;
            chartData.waterfallItemData.forEach((/**
             * @param {?} itemData
             * @return {?}
             */
            itemData => {
                if (!itemData.hidden) {
                    measures.push(itemData.measure);
                    dataLabels.push(itemData.dataLabel);
                    yValues.push(itemData.value);
                    hoverinfos.push('all');
                }
                else {
                    measures.push('absolute');
                    dataLabels.push('');
                    yValues.push(0);
                    hoverinfos.push('none');
                }
                if (itemData.compared) {
                    comparedIndex = index;
                }
                xLabels.push(itemData.itemlabel);
                index++;
            }));
            if (_this.waterfallExtendedChartData && _this.waterfallExtendedChartData[datasetIndex]) {
                measures.push('absolute');
                dataLabels.push('');
                yValues.push(0);
                hoverinfos.push('none');
                xLabels.push('');
                _this.waterfallExtendedChartData[datasetIndex].waterfallItemData.forEach((/**
                 * @param {?} extendedData
                 * @return {?}
                 */
                extendedData => {
                    if (!extendedData.hidden) {
                        measures.push(extendedData.measure);
                        dataLabels.push(extendedData.dataLabel);
                        yValues.push(extendedData.value);
                        hoverinfos.push('all');
                    }
                    else {
                        measures.push('absolute');
                        dataLabels.push('');
                        yValues.push(0);
                        hoverinfos.push('none');
                    }
                    xLabels.push(extendedData.itemlabel);
                }));
            }
            if (!chartData.connectorColor) {
                chartData.connectorColor = 'rgba(36,123,160,0.5)';
            }
            if (!chartData.connectorWidth) {
                chartData.connectorWidth = 1;
            }
            /** @type {?} */
            let data = {
                name: chartData.name,
                type: 'waterfall',
                orientation: 'v',
                measure: measures,
                x: xLabels,
                textposition: 'outside',
                text: dataLabels,
                y: yValues,
                connector: {
                    line: {
                        color: chartData.connectorColor,
                        width: chartData.connectorWidth,
                    }
                },
                hoverinfo: hoverinfos,
                decreasing: { marker: { color: chartData.decreasingColor } },
                increasing: { marker: { color: chartData.increasingColor } },
                totals: { marker: { color: chartData.totalsColor } }
            };
            this.waterfallData.push(data);
            datasetIndex++;
        }));
        if (this.waterfallExtendedChartData) {
            /** @type {?} */
            let min = 0;
            /** @type {?} */
            let max = 0;
            /** @type {?} */
            let comparedValue = 0;
            this.waterfallData.forEach((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                /** @type {?} */
                let total = 0;
                /** @type {?} */
                let i = 0;
                data.measure.forEach((/**
                 * @param {?} measure
                 * @return {?}
                 */
                measure => {
                    if (measure == 'absolute') {
                        total = data.y[i];
                    }
                    else if (measure == 'relative') {
                        total += data.y[i];
                    }
                    if (total > max) {
                        max = total;
                    }
                    if (total < min) {
                        min = total;
                    }
                    if (i == comparedIndex) {
                        comparedValue = total;
                    }
                    i++;
                }));
            }));
            this.waterfallChartOptions.shapes = [{
                    x0: this.waterfallChartData[0].waterfallItemData.length,
                    x1: this.waterfallChartData[0].waterfallItemData.length,
                    y0: min,
                    y1: max,
                    line: {
                        dash: 'solid',
                        color: '#444444',
                        width: 3
                    },
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    opacity: 0.3,
                    fillcolor: '#7f7f7f'
                }, {
                    x0: comparedIndex,
                    x1: this.waterfallChartData[0].waterfallItemData.length + 1,
                    y0: comparedValue,
                    y1: comparedValue,
                    line: {
                        dash: 'dash',
                        color: '#444444',
                        width: 3
                    },
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    opacity: 0.3,
                    fillcolor: '#7f7f7f'
                }];
            this.waterfallChartOptions.annotations = [{
                    x: Math.ceil(this.waterfallChartData[0].waterfallItemData.length / 2),
                    y: max * 1.1,
                    text: '<b>' + this.waterfallChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }, {
                    x: this.waterfallChartData[0].waterfallItemData.length
                        + Math.ceil(this.waterfallExtendedChartData[0].waterfallItemData.length / 2),
                    y: max * 1.1,
                    text: '<b>' + this.waterfallExtendedChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }];
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    chartClicked(event) {
        if (!(event instanceof MouseEvent)) {
            this.chartClick.emit(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    chartHovered(event) {
        this.chartHover.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    chartAfterPlotted(event) {
        /** @type {?} */
        let _this = this;
        d3.selectAll('.xaxislayer-above').selectAll('text').on('click', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.labelClick.emit(d.text);
        }));
    }
}
WaterfallChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-waterfall-chart',
                template: "<div>\n    <plotly-plot [data]=\"waterfallData\" [layout]=\"waterfallChartOptions\" [config]=\"waterfallChartConfig\" \n      [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n      (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n    </plotly-plot>\n</div>\n",
                styles: [":host /deep/ .xaxislayer-above{cursor:pointer;pointer-events:all}"]
            }] }
];
/** @nocollapse */
WaterfallChartComponent.ctorParameters = () => [];
WaterfallChartComponent.propDecorators = {
    waterfallChartData: [{ type: Input }],
    waterfallExtendedChartData: [{ type: Input }],
    waterfallChartOptions: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }],
    labelClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    WaterfallChartComponent.prototype.waterfallChartData;
    /** @type {?} */
    WaterfallChartComponent.prototype.waterfallExtendedChartData;
    /** @type {?} */
    WaterfallChartComponent.prototype.waterfallChartOptions;
    /** @type {?} */
    WaterfallChartComponent.prototype.chartClick;
    /** @type {?} */
    WaterfallChartComponent.prototype.chartHover;
    /** @type {?} */
    WaterfallChartComponent.prototype.labelClick;
    /** @type {?} */
    WaterfallChartComponent.prototype.waterfallData;
    /** @type {?} */
    WaterfallChartComponent.prototype.waterfallChartConfig;
}
export class WaterfallChartData {
    constructor() {
        this.decreasingColor = GlobalChartColors.globalBackgroundColors[0];
        this.increasingColor = GlobalChartColors.globalBackgroundColors[1];
        this.totalsColor = GlobalChartColors.globalBackgroundColors[2];
    }
    ;
    ;
}
if (false) {
    /** @type {?} */
    WaterfallChartData.prototype.name;
    /** @type {?} */
    WaterfallChartData.prototype.connectorColor;
    /** @type {?} */
    WaterfallChartData.prototype.connectorWidth;
    /** @type {?} */
    WaterfallChartData.prototype.waterfallItemData;
    /** @type {?} */
    WaterfallChartData.prototype.decreasingColor;
    /** @type {?} */
    WaterfallChartData.prototype.increasingColor;
    /** @type {?} */
    WaterfallChartData.prototype.totalsColor;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export class WaterfallItemData {
    constructor() {
        this.hidden = false;
        this.compared = false;
    }
}
if (false) {
    /** @type {?} */
    WaterfallItemData.prototype.measure;
    /** @type {?} */
    WaterfallItemData.prototype.itemlabel;
    /** @type {?} */
    WaterfallItemData.prototype.value;
    /** @type {?} */
    WaterfallItemData.prototype.dataLabel;
    /** @type {?} */
    WaterfallItemData.prototype.hidden;
    /** @type {?} */
    WaterfallItemData.prototype.compared;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFTN0QsTUFBTSxPQUFPLHVCQUF1QjtJQWlCbEM7UUFiUywwQkFBcUIsR0FBUSxFQUFFLENBQUM7UUFDL0IsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0Qsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFFMUIseUJBQW9CLEdBQVE7WUFDMUIsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1NBQzdDLENBQUM7SUFHRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEVB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QUMsQ0FBQztJQUNMLENBQUM7OztZQW5PRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseVZBQStDOzthQUVoRDs7Ozs7aUNBR0UsS0FBSzt5Q0FDTCxLQUFLO29DQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07Ozs7SUFMUCxxREFBa0Q7O0lBQ2xELDZEQUEwRDs7SUFDMUQsd0RBQXlDOztJQUN6Qyw2Q0FBNkQ7O0lBQzdELDZDQUE2RDs7SUFDN0QsNkNBQTZEOztJQUU3RCxnREFBMEI7O0lBRTFCLHVEQUlFOztBQWtOSixNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBTUUsb0JBQWUsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFXLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUZ3RSxDQUFDO0lBQ0wsQ0FBQztDQUNyRTs7O0lBUEMsa0NBQWE7O0lBQ2IsNENBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLCtDQUF1Qzs7SUFDdkMsNkNBQXVFOztJQUN2RSw2Q0FBdUU7O0lBQ3ZFLHlDQUFtRTs7OztBQUdyRSxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBTUUsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQWEsS0FBSyxDQUFDO0lBQzdCLENBQUM7Q0FBQTs7O0lBTkMsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLGtDQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsbUNBQXlCOztJQUN6QixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBtYXggfSBmcm9tICdtb21lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi13YXRlcmZhbGwtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgd2F0ZXJmYWxsQ2hhcnREYXRhOiBXYXRlcmZhbGxDaGFydERhdGFbXTtcbiAgQElucHV0KCkgd2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydE9wdGlvbnM6IGFueSA9IHt9O1xuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHdhdGVyZmFsbERhdGE6IGFueVtdID0gW107XG5cbiAgd2F0ZXJmYWxsQ2hhcnRDb25maWc6IGFueSA9IHtcbiAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFsncGFuMmQnLCAnbGFzc28yZCddXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndhdGVyZmFsbERhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGFQcm9jZXNzaW5nKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3dhdGVyZmFsbENoYXJ0RGF0YSddKSB7XG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEgPSBbXTtcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICBkYXRhUHJvY2Vzc2luZygpIHtcbiAgICBpZiAoIXRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xuICAgIH1cbiAgICBsZXQgZGF0YXNldEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBjb21wYXJlZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53YXRlcmZhbGxDaGFydERhdGEuZm9yRWFjaChjaGFydERhdGEgPT4ge1xuXG4gICAgICBsZXQgbWVhc3VyZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgeExhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBkYXRhTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IHlWYWx1ZXM6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgaG92ZXJpbmZvczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcblxuICAgICAgY2hhcnREYXRhLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goaXRlbURhdGEgPT4ge1xuXG4gICAgICAgIGlmICghaXRlbURhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaChpdGVtRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goaXRlbURhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICB5VmFsdWVzLnB1c2goaXRlbURhdGEudmFsdWUpO1xuICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnYWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcbiAgICAgICAgICBjb21wYXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB4TGFiZWxzLnB1c2goaXRlbURhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEgJiYgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XSkge1xuXG4gICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XG4gICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XG4gICAgICAgIHhMYWJlbHMucHVzaCgnJyk7XG5cbiAgICAgICAgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XS53YXRlcmZhbGxJdGVtRGF0YS5mb3JFYWNoKGV4dGVuZGVkRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFleHRlbmRlZERhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKGV4dGVuZGVkRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChleHRlbmRlZERhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaChleHRlbmRlZERhdGEudmFsdWUpO1xuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgICAgICB5VmFsdWVzLnB1c2goMCk7XG4gICAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgeExhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5pdGVtbGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGFydERhdGEuY29ubmVjdG9yQ29sb3IpIHtcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yID0gJ3JnYmEoMzYsMTIzLDE2MCwwLjUpJztcbiAgICAgIH1cbiAgICAgIGlmICghY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoKSB7XG4gICAgICAgIGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXG4gICAgICAgIHR5cGU6ICd3YXRlcmZhbGwnLFxuICAgICAgICBvcmllbnRhdGlvbjogJ3YnLFxuICAgICAgICBtZWFzdXJlOiBtZWFzdXJlcyxcbiAgICAgICAgeDogeExhYmVscyxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiAnb3V0c2lkZScsXG4gICAgICAgIHRleHQ6IGRhdGFMYWJlbHMsXG4gICAgICAgIHk6IHlWYWx1ZXMsXG4gICAgICAgIGNvbm5lY3Rvcjoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjaGFydERhdGEuY29ubmVjdG9yQ29sb3IsXG4gICAgICAgICAgICB3aWR0aDogY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXJpbmZvOiBob3ZlcmluZm9zLFxuICAgICAgICBkZWNyZWFzaW5nOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLmRlY3JlYXNpbmdDb2xvciB9IH0sXG4gICAgICAgIGluY3JlYXNpbmc6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEuaW5jcmVhc2luZ0NvbG9yIH0gfSxcbiAgICAgICAgdG90YWxzOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLnRvdGFsc0NvbG9yIH0gfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgZGF0YXNldEluZGV4Kys7XG5cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhKSB7XG4gICAgICBsZXQgbWluOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IG1heDogbnVtYmVyID0gMDtcbiAgICAgIGxldCBjb21wYXJlZFZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgbGV0IHRvdGFsOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcbiAgICAgICAgZGF0YS5tZWFzdXJlLmZvckVhY2gobWVhc3VyZSA9PiB7XG4gICAgICAgICAgaWYgKG1lYXN1cmUgPT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgICAgdG90YWwgPSBkYXRhLnlbaV07XG4gICAgICAgICAgfSBlbHNlIGlmIChtZWFzdXJlID09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgIHRvdGFsICs9IGRhdGEueVtpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gY29tcGFyZWRJbmRleCkge1xuICAgICAgICAgICAgY29tcGFyZWRWYWx1ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLnNoYXBlcyA9IFt7XG4gICAgICAgIHgwOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHkwOiBtaW4sXG4gICAgICAgIHkxOiBtYXgsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBkYXNoOiAnc29saWQnLFxuICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsXG4gICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xuICAgICAgfSwge1xuICAgICAgICB4MDogY29tcGFyZWRJbmRleCxcbiAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCArIDEsXG4gICAgICAgIHkwOiBjb21wYXJlZFZhbHVlLFxuICAgICAgICB5MTogY29tcGFyZWRWYWx1ZSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGRhc2g6ICdkYXNoJyxcbiAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLFxuICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICB5cmVmOiAneScsXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgZmlsbGNvbG9yOiAnIzdmN2Y3ZidcbiAgICAgIH1dO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucy5hbm5vdGF0aW9ucyA9IFt7XG4gICAgICAgIHg6IE1hdGguY2VpbCh0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsXG4gICAgICAgIGZvbnQ6IHsgY29sb3I6ICdyZ2IoNjAsIDU1LCAyMDEpJyB9LFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG5cbiAgICAgIH0sIHtcbiAgICAgICAgeDogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoXG4gICAgICAgICAgKyBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbMF0ubmFtZSArICc8L2I+JyxcbiAgICAgICAgZm9udDogeyBjb2xvcjogJ3JnYig2MCwgNTUsIDIwMSknIH0sXG4gICAgICAgIHNob3dhcnJvdzogZmFsc2VcbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgZDMuc2VsZWN0QWxsKCcueGF4aXNsYXllci1hYm92ZScpLnNlbGVjdEFsbCgndGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cbiAgICAgIF90aGlzLmxhYmVsQ2xpY2suZW1pdChkLnRleHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydERhdGEge1xuXG4gIG5hbWU6IHN0cmluZztcbiAgY29ubmVjdG9yQ29sb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3RvcldpZHRoPzogbnVtYmVyO1xuICB3YXRlcmZhbGxJdGVtRGF0YTogV2F0ZXJmYWxsSXRlbURhdGFbXTtcbiAgZGVjcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXTtcbiAgaW5jcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1sxXTs7XG4gIHRvdGFsc0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1syXTs7XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxJdGVtRGF0YSB7XG5cbiAgbWVhc3VyZTogc3RyaW5nO1xuICBpdGVtbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGF0YUxhYmVsOiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tcGFyZWQ/OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=