/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTzdELE1BQU0sT0FBTyx1QkFBdUI7SUFpQmxDO1FBYlMsMEJBQXFCLEdBQVEsRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRTFCLHlCQUFvQixHQUFRO1lBQzFCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLHNCQUFzQixFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztTQUM3QyxDQUFDO0lBR0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxF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QUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHlWQUErQzs7YUFFaEQ7Ozs7O2lDQUdFLEtBQUs7eUNBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNOzs7O0lBTFAscURBQWtEOztJQUNsRCw2REFBMEQ7O0lBQzFELHdEQUF5Qzs7SUFDekMsNkNBQTZEOztJQUM3RCw2Q0FBNkQ7O0lBQzdELDZDQUE2RDs7SUFFN0QsZ0RBQTBCOztJQUUxQix1REFJRTs7QUFrTkosTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQU1FLG9CQUFlLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsb0JBQWUsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxnQkFBVyxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFGd0UsQ0FBQztJQUNMLENBQUM7Q0FDckU7OztJQVBDLGtDQUFhOztJQUNiLDRDQUF3Qjs7SUFDeEIsNENBQXdCOztJQUN4QiwrQ0FBdUM7O0lBQ3ZDLDZDQUF1RTs7SUFDdkUsNkNBQXVFOztJQUN2RSx5Q0FBbUU7Ozs7QUFHckUsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQU1FLFdBQU0sR0FBYSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFhLEtBQUssQ0FBQztJQUM3QixDQUFDO0NBQUE7OztJQU5DLG9DQUFnQjs7SUFDaEIsc0NBQWtCOztJQUNsQixrQ0FBYzs7SUFDZCxzQ0FBa0I7O0lBQ2xCLG1DQUF5Qjs7SUFDekIscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd2F0ZXJmYWxsLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHdhdGVyZmFsbENoYXJ0RGF0YTogV2F0ZXJmYWxsQ2hhcnREYXRhW107XG4gIEBJbnB1dCgpIHdhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhOiBXYXRlcmZhbGxDaGFydERhdGFbXTtcbiAgQElucHV0KCkgd2F0ZXJmYWxsQ2hhcnRPcHRpb25zOiBhbnkgPSB7fTtcbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB3YXRlcmZhbGxEYXRhOiBhbnlbXSA9IFtdO1xuXG4gIHdhdGVyZmFsbENoYXJ0Q29uZmlnOiBhbnkgPSB7XG4gICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSxcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbJ3BhbjJkJywgJ2xhc3NvMmQnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy53YXRlcmZhbGxEYXRhID0gW107XG4gICAgdGhpcy5kYXRhUHJvY2Vzc2luZygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd3YXRlcmZhbGxDaGFydERhdGEnXSkge1xuICAgICAgdGhpcy53YXRlcmZhbGxEYXRhID0gW107XG4gICAgICB0aGlzLmRhdGFQcm9jZXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZGF0YVByb2Nlc3NpbmcoKSB7XG4gICAgaWYgKCF0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLndhdGVyZmFsbENoYXJ0T3B0aW9ucztcbiAgICB9XG4gICAgbGV0IGRhdGFzZXRJbmRleDogbnVtYmVyID0gMDtcbiAgICBsZXQgY29tcGFyZWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhLmZvckVhY2goY2hhcnREYXRhID0+IHtcblxuICAgICAgbGV0IG1lYXN1cmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IHhMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgZGF0YUxhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCB5VmFsdWVzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IGhvdmVyaW5mb3M6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICAgIGNoYXJ0RGF0YS53YXRlcmZhbGxJdGVtRGF0YS5mb3JFYWNoKGl0ZW1EYXRhID0+IHtcblxuICAgICAgICBpZiAoIWl0ZW1EYXRhLmhpZGRlbikge1xuICAgICAgICAgIG1lYXN1cmVzLnB1c2goaXRlbURhdGEubWVhc3VyZSk7XG4gICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGl0ZW1EYXRhLmRhdGFMYWJlbCk7XG4gICAgICAgICAgeVZhbHVlcy5wdXNoKGl0ZW1EYXRhLnZhbHVlKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ2FsbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XG4gICAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcbiAgICAgICAgICB5VmFsdWVzLnB1c2goMCk7XG4gICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW1EYXRhLmNvbXBhcmVkKSB7XG4gICAgICAgICAgY29tcGFyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgeExhYmVscy5wdXNoKGl0ZW1EYXRhLml0ZW1sYWJlbCk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhICYmIF90aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhW2RhdGFzZXRJbmRleF0pIHtcblxuICAgICAgICBtZWFzdXJlcy5wdXNoKCdhYnNvbHV0ZScpO1xuICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICB5VmFsdWVzLnB1c2goMCk7XG4gICAgICAgIGhvdmVyaW5mb3MucHVzaCgnbm9uZScpO1xuICAgICAgICB4TGFiZWxzLnB1c2goJycpO1xuXG4gICAgICAgIF90aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhW2RhdGFzZXRJbmRleF0ud2F0ZXJmYWxsSXRlbURhdGEuZm9yRWFjaChleHRlbmRlZERhdGEgPT4ge1xuICAgICAgICAgIGlmICghZXh0ZW5kZWREYXRhLmhpZGRlbikge1xuICAgICAgICAgICAgbWVhc3VyZXMucHVzaChleHRlbmRlZERhdGEubWVhc3VyZSk7XG4gICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goZXh0ZW5kZWREYXRhLmRhdGFMYWJlbCk7XG4gICAgICAgICAgICB5VmFsdWVzLnB1c2goZXh0ZW5kZWREYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnYWxsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XG4gICAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgICAgeVZhbHVlcy5wdXNoKDApO1xuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHhMYWJlbHMucHVzaChleHRlbmRlZERhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yKSB7XG4gICAgICAgIGNoYXJ0RGF0YS5jb25uZWN0b3JDb2xvciA9ICdyZ2JhKDM2LDEyMywxNjAsMC41KSc7XG4gICAgICB9XG4gICAgICBpZiAoIWNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCkge1xuICAgICAgICBjaGFydERhdGEuY29ubmVjdG9yV2lkdGggPSAxO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIG5hbWU6IGNoYXJ0RGF0YS5uYW1lLFxuICAgICAgICB0eXBlOiAnd2F0ZXJmYWxsJyxcbiAgICAgICAgb3JpZW50YXRpb246ICd2JyxcbiAgICAgICAgbWVhc3VyZTogbWVhc3VyZXMsXG4gICAgICAgIHg6IHhMYWJlbHMsXG4gICAgICAgIHRleHRwb3NpdGlvbjogJ291dHNpZGUnLFxuICAgICAgICB0ZXh0OiBkYXRhTGFiZWxzLFxuICAgICAgICB5OiB5VmFsdWVzLFxuICAgICAgICBjb25uZWN0b3I6IHtcbiAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yLFxuICAgICAgICAgICAgd2lkdGg6IGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyaW5mbzogaG92ZXJpbmZvcyxcbiAgICAgICAgZGVjcmVhc2luZzogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS5kZWNyZWFzaW5nQ29sb3IgfSB9LFxuICAgICAgICBpbmNyZWFzaW5nOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLmluY3JlYXNpbmdDb2xvciB9IH0sXG4gICAgICAgIHRvdGFsczogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS50b3RhbHNDb2xvciB9IH1cblxuICAgICAgfVxuXG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEucHVzaChkYXRhKTtcbiAgICAgIGRhdGFzZXRJbmRleCsrO1xuXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YSkge1xuICAgICAgbGV0IG1pbjogbnVtYmVyID0gMDtcbiAgICAgIGxldCBtYXg6IG51bWJlciA9IDA7XG4gICAgICBsZXQgY29tcGFyZWRWYWx1ZTogbnVtYmVyID0gMDtcblxuICAgICAgdGhpcy53YXRlcmZhbGxEYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgIGxldCB0b3RhbDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XG4gICAgICAgIGRhdGEubWVhc3VyZS5mb3JFYWNoKG1lYXN1cmUgPT4ge1xuICAgICAgICAgIGlmIChtZWFzdXJlID09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICAgIHRvdGFsID0gZGF0YS55W2ldO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWVhc3VyZSA9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICB0b3RhbCArPSBkYXRhLnlbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b3RhbCA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gdG90YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b3RhbCA8IG1pbikge1xuICAgICAgICAgICAgbWluID0gdG90YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09IGNvbXBhcmVkSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbXBhcmVkVmFsdWUgPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucy5zaGFwZXMgPSBbe1xuICAgICAgICB4MDogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoLFxuICAgICAgICB4MTogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoLFxuICAgICAgICB5MDogbWluLFxuICAgICAgICB5MTogbWF4LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgZGFzaDogJ3NvbGlkJyxcbiAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLFxuICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICB5cmVmOiAneScsXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgZmlsbGNvbG9yOiAnIzdmN2Y3ZidcbiAgICAgIH0sIHtcbiAgICAgICAgeDA6IGNvbXBhcmVkSW5kZXgsXG4gICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggKyAxLFxuICAgICAgICB5MDogY29tcGFyZWRWYWx1ZSxcbiAgICAgICAgeTE6IGNvbXBhcmVkVmFsdWUsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBkYXNoOiAnZGFzaCcsXG4gICAgICAgICAgY29sb3I6ICcjNDQ0NDQ0JyxcbiAgICAgICAgICB3aWR0aDogM1xuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHhyZWY6ICd4JyxcbiAgICAgICAgeXJlZjogJ3knLFxuICAgICAgICBvcGFjaXR5OiAwLjMsXG4gICAgICAgIGZpbGxjb2xvcjogJyM3ZjdmN2YnXG4gICAgICB9XTtcblxuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMuYW5ub3RhdGlvbnMgPSBbe1xuICAgICAgICB4OiBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoIC8gMiksXG4gICAgICAgIHk6IG1heCAqIDEuMSxcbiAgICAgICAgdGV4dDogJzxiPicgKyB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS5uYW1lICsgJzwvYj4nLFxuICAgICAgICBmb250OiB7IGNvbG9yOiAncmdiKDYwLCA1NSwgMjAxKScgfSxcbiAgICAgICAgc2hvd2Fycm93OiBmYWxzZVxuXG4gICAgICB9LCB7XG4gICAgICAgIHg6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aFxuICAgICAgICAgICsgTWF0aC5jZWlsKHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoIC8gMiksXG4gICAgICAgIHk6IG1heCAqIDEuMSxcbiAgICAgICAgdGV4dDogJzxiPicgKyB0aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsXG4gICAgICAgIGZvbnQ6IHsgY29sb3I6ICdyZ2IoNjAsIDU1LCAyMDEpJyB9LFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG4gICAgICB9XTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKGV2ZW50OiBhbnkpIHtcblxuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGV2ZW50OiBhbnkpIHtcblxuICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydEFmdGVyUGxvdHRlZChldmVudDogYW55KSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGQzLnNlbGVjdEFsbCgnLnhheGlzbGF5ZXItYWJvdmUnKS5zZWxlY3RBbGwoJ3RleHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZCkge1xuXG4gICAgICBfdGhpcy5sYWJlbENsaWNrLmVtaXQoZC50ZXh0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsQ2hhcnREYXRhIHtcblxuICBuYW1lOiBzdHJpbmc7XG4gIGNvbm5lY3RvckNvbG9yPzogc3RyaW5nO1xuICBjb25uZWN0b3JXaWR0aD86IG51bWJlcjtcbiAgd2F0ZXJmYWxsSXRlbURhdGE6IFdhdGVyZmFsbEl0ZW1EYXRhW107XG4gIGRlY3JlYXNpbmdDb2xvcj86IHN0cmluZyA9IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF07XG4gIGluY3JlYXNpbmdDb2xvcj86IHN0cmluZyA9IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMV07O1xuICB0b3RhbHNDb2xvcj86IHN0cmluZyA9IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMl07O1xufVxuXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsSXRlbURhdGEge1xuXG4gIG1lYXN1cmU6IHN0cmluZztcbiAgaXRlbWxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGRhdGFMYWJlbDogc3RyaW5nO1xuICBoaWRkZW4/OiBib29sZWFuID0gZmFsc2U7XG4gIGNvbXBhcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19