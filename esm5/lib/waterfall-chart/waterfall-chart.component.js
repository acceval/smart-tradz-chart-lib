/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
var WaterfallChartComponent = /** @class */ (function () {
    function WaterfallChartComponent() {
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
    WaterfallChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataProcessing();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WaterfallChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['waterfallChartData']) {
            this.dataProcessing();
        }
    };
    /**
     * @return {?}
     */
    WaterfallChartComponent.prototype.dataProcessing = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (!this.waterfallChartOptions || Object.keys(this.waterfallChartOptions).length == 0) {
            this.waterfallChartOptions = new GlobalChartOptions().waterfallChartOptions;
        }
        /** @type {?} */
        var datasetIndex = 0;
        /** @type {?} */
        var comparedIndex = 0;
        /** @type {?} */
        var _this = this;
        this.waterfallChartData.forEach((/**
         * @param {?} chartData
         * @return {?}
         */
        function (chartData) {
            /** @type {?} */
            var measures = [];
            /** @type {?} */
            var xLabels = [];
            /** @type {?} */
            var dataLabels = [];
            /** @type {?} */
            var yValues = [];
            /** @type {?} */
            var hoverinfos = [];
            /** @type {?} */
            var index = 0;
            chartData.waterfallItemData.forEach((/**
             * @param {?} itemData
             * @return {?}
             */
            function (itemData) {
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
                function (extendedData) {
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
            var data = {
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
            _this_1.waterfallData.push(data);
            datasetIndex++;
        }));
        if (this.waterfallExtendedChartData) {
            /** @type {?} */
            var min_1 = 0;
            /** @type {?} */
            var max_1 = 0;
            /** @type {?} */
            var comparedValue_1 = 0;
            this.waterfallData.forEach((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var total = 0;
                /** @type {?} */
                var i = 0;
                data.measure.forEach((/**
                 * @param {?} measure
                 * @return {?}
                 */
                function (measure) {
                    if (measure == 'absolute') {
                        total = data.y[i];
                    }
                    else if (measure == 'relative') {
                        total += data.y[i];
                    }
                    if (total > max_1) {
                        max_1 = total;
                    }
                    if (total < min_1) {
                        min_1 = total;
                    }
                    if (i == comparedIndex) {
                        comparedValue_1 = total;
                    }
                    i++;
                }));
            }));
            this.waterfallChartOptions.shapes = [{
                    x0: this.waterfallChartData[0].waterfallItemData.length,
                    x1: this.waterfallChartData[0].waterfallItemData.length,
                    y0: min_1,
                    y1: max_1,
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
                    y0: comparedValue_1,
                    y1: comparedValue_1,
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
                    y: max_1 * 1.1,
                    text: '<b>' + this.waterfallChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }, {
                    x: this.waterfallChartData[0].waterfallItemData.length
                        + Math.ceil(this.waterfallExtendedChartData[0].waterfallItemData.length / 2),
                    y: max_1 * 1.1,
                    text: '<b>' + this.waterfallExtendedChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }];
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WaterfallChartComponent.prototype.chartClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!(event instanceof MouseEvent)) {
            this.chartClick.emit(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WaterfallChartComponent.prototype.chartHovered = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.chartHover.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WaterfallChartComponent.prototype.chartAfterPlotted = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var _this = this;
        d3.selectAll('.xaxislayer-above').selectAll('text').on('click', (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.labelClick.emit(d.text);
        }));
    };
    WaterfallChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-waterfall-chart',
                    template: "<div>\n    <plotly-plot [data]=\"waterfallData\" [layout]=\"waterfallChartOptions\" [config]=\"waterfallChartConfig\" \n      [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n      (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n    </plotly-plot>\n</div>\n",
                    styles: [":host /deep/ .xaxislayer-above{cursor:pointer;pointer-events:all}"]
                }] }
    ];
    /** @nocollapse */
    WaterfallChartComponent.ctorParameters = function () { return []; };
    WaterfallChartComponent.propDecorators = {
        waterfallChartData: [{ type: Input }],
        waterfallExtendedChartData: [{ type: Input }],
        waterfallChartOptions: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }],
        labelClick: [{ type: Output }]
    };
    return WaterfallChartComponent;
}());
export { WaterfallChartComponent };
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
var WaterfallChartData = /** @class */ (function () {
    function WaterfallChartData() {
        this.decreasingColor = GlobalChartColors.globalBackgroundColors[0];
        this.increasingColor = GlobalChartColors.globalBackgroundColors[1];
        this.totalsColor = GlobalChartColors.globalBackgroundColors[2];
    }
    ;
    ;
    return WaterfallChartData;
}());
export { WaterfallChartData };
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
var WaterfallItemData = /** @class */ (function () {
    function WaterfallItemData() {
        this.hidden = false;
        this.compared = false;
    }
    return WaterfallItemData;
}());
export { WaterfallItemData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJN0Q7SUFzQkU7UUFiUywwQkFBcUIsR0FBUSxFQUFFLENBQUM7UUFDL0IsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0Qsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFFMUIseUJBQW9CLEdBQVE7WUFDMUIsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1NBQzdDLENBQUM7SUFHRixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDtRQUFBLG1CQXlLQztRQXhLQyxJQUFJLENBQUMs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USxFQUFFLHFCQUFxQjtvQkFDL0IseVZBQStDOztpQkFFaEQ7Ozs7O3FDQUdFLEtBQUs7NkNBQ0wsS0FBSzt3Q0FDTCxLQUFLOzZCQUNMLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNOztJQXNOVCw4QkFBQztDQUFBLEFBbE9ELElBa09DO1NBN05ZLHVCQUF1Qjs7O0lBRWxDLHFEQUFrRDs7SUFDbEQsNkRBQTBEOztJQUMxRCx3REFBeUM7O0lBQ3pDLDZDQUE2RDs7SUFDN0QsNkNBQTZEOztJQUM3RCw2Q0FBNkQ7O0lBRTdELGdEQUEwQjs7SUFFMUIsdURBSUU7O0FBZ05KO0lBQUE7UUFNRSxvQkFBZSxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLG9CQUFlLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsZ0JBQVcsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRndFLENBQUM7SUFDTCxDQUFDO0lBQ3RFLHlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFQQyxrQ0FBYTs7SUFDYiw0Q0FBd0I7O0lBQ3hCLDRDQUF3Qjs7SUFDeEIsK0NBQXVDOztJQUN2Qyw2Q0FBdUU7O0lBQ3ZFLDZDQUF1RTs7SUFDdkUseUNBQW1FOzs7O0FBR3JFO0lBQUE7UUFNRSxXQUFNLEdBQWEsS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBYSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFOQyxvQ0FBZ0I7O0lBQ2hCLHNDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2Qsc0NBQWtCOztJQUNsQixtQ0FBeUI7O0lBQ3pCLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmltcG9ydCB7IG1heCB9IGZyb20gJ21vbWVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXdhdGVyZmFsbC1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xuICBASW5wdXQoKSB3YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YTogV2F0ZXJmYWxsQ2hhcnREYXRhW107XG4gIEBJbnB1dCgpIHdhdGVyZmFsbENoYXJ0T3B0aW9uczogYW55ID0ge307XG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgd2F0ZXJmYWxsRGF0YTogYW55W10gPSBbXTtcblxuICB3YXRlcmZhbGxDaGFydENvbmZpZzogYW55ID0ge1xuICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcbiAgICBkaXNwbGF5bG9nbzogZmFsc2UsXG4gICAgbW9kZUJhckJ1dHRvbnNUb1JlbW92ZTogWydwYW4yZCcsICdsYXNzbzJkJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVByb2Nlc3NpbmcoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snd2F0ZXJmYWxsQ2hhcnREYXRhJ10pIHtcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICBkYXRhUHJvY2Vzc2luZygpIHtcbiAgICBpZiAoIXRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xuICAgIH1cbiAgICBsZXQgZGF0YXNldEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBjb21wYXJlZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53YXRlcmZhbGxDaGFydERhdGEuZm9yRWFjaChjaGFydERhdGEgPT4ge1xuXG4gICAgICBsZXQgbWVhc3VyZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgeExhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBkYXRhTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IHlWYWx1ZXM6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgaG92ZXJpbmZvczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcblxuICAgICAgY2hhcnREYXRhLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goaXRlbURhdGEgPT4ge1xuXG4gICAgICAgIGlmICghaXRlbURhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaChpdGVtRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goaXRlbURhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICB5VmFsdWVzLnB1c2goaXRlbURhdGEudmFsdWUpO1xuICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnYWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcbiAgICAgICAgICBjb21wYXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB4TGFiZWxzLnB1c2goaXRlbURhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEgJiYgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XSkge1xuXG4gICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XG4gICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XG4gICAgICAgIHhMYWJlbHMucHVzaCgnJyk7XG5cbiAgICAgICAgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XS53YXRlcmZhbGxJdGVtRGF0YS5mb3JFYWNoKGV4dGVuZGVkRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFleHRlbmRlZERhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKGV4dGVuZGVkRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChleHRlbmRlZERhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaChleHRlbmRlZERhdGEudmFsdWUpO1xuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgICAgICB5VmFsdWVzLnB1c2goMCk7XG4gICAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgeExhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5pdGVtbGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGFydERhdGEuY29ubmVjdG9yQ29sb3IpIHtcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yID0gJ3JnYmEoMzYsMTIzLDE2MCwwLjUpJztcbiAgICAgIH1cbiAgICAgIGlmICghY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoKSB7XG4gICAgICAgIGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXG4gICAgICAgIHR5cGU6ICd3YXRlcmZhbGwnLFxuICAgICAgICBvcmllbnRhdGlvbjogJ3YnLFxuICAgICAgICBtZWFzdXJlOiBtZWFzdXJlcyxcbiAgICAgICAgeDogeExhYmVscyxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiAnb3V0c2lkZScsXG4gICAgICAgIHRleHQ6IGRhdGFMYWJlbHMsXG4gICAgICAgIHk6IHlWYWx1ZXMsXG4gICAgICAgIGNvbm5lY3Rvcjoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjaGFydERhdGEuY29ubmVjdG9yQ29sb3IsXG4gICAgICAgICAgICB3aWR0aDogY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXJpbmZvOiBob3ZlcmluZm9zLFxuICAgICAgICBkZWNyZWFzaW5nOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLmRlY3JlYXNpbmdDb2xvciB9IH0sXG4gICAgICAgIGluY3JlYXNpbmc6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEuaW5jcmVhc2luZ0NvbG9yIH0gfSxcbiAgICAgICAgdG90YWxzOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLnRvdGFsc0NvbG9yIH0gfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgZGF0YXNldEluZGV4Kys7XG5cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhKSB7XG4gICAgICBsZXQgbWluOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IG1heDogbnVtYmVyID0gMDtcbiAgICAgIGxldCBjb21wYXJlZFZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgbGV0IHRvdGFsOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcbiAgICAgICAgZGF0YS5tZWFzdXJlLmZvckVhY2gobWVhc3VyZSA9PiB7XG4gICAgICAgICAgaWYgKG1lYXN1cmUgPT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgICAgdG90YWwgPSBkYXRhLnlbaV07XG4gICAgICAgICAgfSBlbHNlIGlmIChtZWFzdXJlID09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgIHRvdGFsICs9IGRhdGEueVtpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gY29tcGFyZWRJbmRleCkge1xuICAgICAgICAgICAgY29tcGFyZWRWYWx1ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLnNoYXBlcyA9IFt7XG4gICAgICAgIHgwOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHkwOiBtaW4sXG4gICAgICAgIHkxOiBtYXgsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBkYXNoOiAnc29saWQnLFxuICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsXG4gICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xuICAgICAgfSwge1xuICAgICAgICB4MDogY29tcGFyZWRJbmRleCxcbiAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCArIDEsXG4gICAgICAgIHkwOiBjb21wYXJlZFZhbHVlLFxuICAgICAgICB5MTogY29tcGFyZWRWYWx1ZSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGRhc2g6ICdkYXNoJyxcbiAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLFxuICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICB5cmVmOiAneScsXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgZmlsbGNvbG9yOiAnIzdmN2Y3ZidcbiAgICAgIH1dO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucy5hbm5vdGF0aW9ucyA9IFt7XG4gICAgICAgIHg6IE1hdGguY2VpbCh0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsXG4gICAgICAgIGZvbnQ6IHsgY29sb3I6ICdyZ2IoNjAsIDU1LCAyMDEpJyB9LFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG5cbiAgICAgIH0sIHtcbiAgICAgICAgeDogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoXG4gICAgICAgICAgKyBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbMF0ubmFtZSArICc8L2I+JyxcbiAgICAgICAgZm9udDogeyBjb2xvcjogJ3JnYig2MCwgNTUsIDIwMSknIH0sXG4gICAgICAgIHNob3dhcnJvdzogZmFsc2VcbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgZDMuc2VsZWN0QWxsKCcueGF4aXNsYXllci1hYm92ZScpLnNlbGVjdEFsbCgndGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cbiAgICAgIF90aGlzLmxhYmVsQ2xpY2suZW1pdChkLnRleHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydERhdGEge1xuXG4gIG5hbWU6IHN0cmluZztcbiAgY29ubmVjdG9yQ29sb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3RvcldpZHRoPzogbnVtYmVyO1xuICB3YXRlcmZhbGxJdGVtRGF0YTogV2F0ZXJmYWxsSXRlbURhdGFbXTtcbiAgZGVjcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXTtcbiAgaW5jcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1sxXTs7XG4gIHRvdGFsc0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1syXTs7XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxJdGVtRGF0YSB7XG5cbiAgbWVhc3VyZTogc3RyaW5nO1xuICBpdGVtbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGF0YUxhYmVsOiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tcGFyZWQ/OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=