/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
        this.waterfallData = [];
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
            this.waterfallData = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTdEO0lBc0JFO1FBYlMsMEJBQXFCLEdBQVEsRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRTFCLHlCQUFvQixHQUFRO1lBQzFCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLHNCQUFzQixFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztTQUM3QyxDQUFDO0lBR0YsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFFRCxnREFBYzs7O0lBQWQ7UUFBQSxtQkF5S0M7UUF4S0MsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUM3RTs7WUFDRyxZQUFZLEdBQVcsQ0FBQzs7WUFDeEIsYUFBYSxHQUFXLENBQUM7O1lBQ3pCLEtBQUssR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxTQUFTOztnQkFFbkMsUUFBUSxHQUFhLEVBQUU7O2dCQUN2QixPQUFPLEdBQWEsRUFBRTs7Z0JBQ3RCLFVBQVUsR0FBYSxFQUFFOztnQkFDekIsT0FBTyxHQUFhLEVBQUU7O2dCQUN0QixVQUFVLEdBQWEsRUFBRTs7Z0JBQ3pCLEtBQUssR0FBVyxDQUFDO1lBRXJCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxRQUFRO2dCQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO29CQUNyQixhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsS0FBSyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksS0FBSyxDQUFDLDBCQUEwQixJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFFdEYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFakIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxZQUFZO29CQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTt3QkFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDekI7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsU0FBUyxDQUFDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO2dCQUM3QixTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUM5Qjs7Z0JBQ0csSUFBSSxHQUFHO2dCQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDcEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsQ0FBQyxFQUFFLE9BQU87Z0JBQ1YsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2dCQUNoQixDQUFDLEVBQUUsT0FBTztnQkFDVixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxTQUFTLENBQUMsY0FBYzt3QkFDL0IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxjQUFjO3FCQUNoQztpQkFDRjtnQkFDRCxTQUFTLEVBQUUsVUFBVTtnQkFDckIsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDNUQsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDNUQsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTthQUVyRDtZQUVELE9BQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLFlBQVksRUFBRSxDQUFDO1FBRWpCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7O2dCQUMvQixLQUFHLEdBQVcsQ0FBQzs7Z0JBQ2YsS0FBRyxHQUFXLENBQUM7O2dCQUNmLGVBQWEsR0FBVyxDQUFDO1lBRTdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTs7b0JBQ3pCLEtBQUssR0FBVyxDQUFDOztvQkFDakIsQ0FBQyxHQUFXLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLE9BQU87b0JBQzFCLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTt3QkFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25CO3lCQUFNLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTt3QkFDaEMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO29CQUNELElBQUksS0FBSyxHQUFHLEtBQUcsRUFBRTt3QkFDZixLQUFHLEdBQUcsS0FBSyxDQUFDO3FCQUNiO29CQUNELElBQUksS0FBSyxHQUFHLEtBQUcsRUFBRTt3QkFDZixLQUFHLEdBQUcsS0FBSyxDQUFDO3FCQUNiO29CQUNELElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRTt3QkFDdEIsZUFBYSxHQUFHLEtBQUssQ0FBQztxQkFDdkI7b0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDbkMsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNO29CQUN2RCxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE1BQU07b0JBQ3ZELEVBQUUsRUFBRSxLQUFHO29CQUNQLEVBQUUsRUFBRSxLQUFHO29CQUNQLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7b0JBQ0QsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLEdBQUc7b0JBQ1osU0FBUyxFQUFFLFNBQVM7aUJBQ3JCLEVBQUU7b0JBQ0QsRUFBRSxFQUFFLGFBQWE7b0JBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQzNELEVBQUUsRUFBRSxlQUFhO29CQUNqQixFQUFFLEVBQUUsZUFBYTtvQkFDakIsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxTQUFTO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRCxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsR0FBRztvQkFDVCxJQUFJLEVBQUUsR0FBRztvQkFDVCxPQUFPLEVBQUUsR0FBRztvQkFDWixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxDQUFDO29CQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDckUsQ0FBQyxFQUFFLEtBQUcsR0FBRyxHQUFHO29CQUNaLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNO29CQUN0RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUVqQixFQUFFO29CQUNELENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTTswQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDOUUsQ0FBQyxFQUFFLEtBQUcsR0FBRyxHQUFHO29CQUNaLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNO29CQUM5RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRU0sOENBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUU1QixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVNLDhDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxtREFBaUI7Ozs7SUFBeEIsVUFBeUIsS0FBVTs7WUFFN0IsS0FBSyxHQUFHLElBQUk7UUFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztRQUFFLFVBQVUsQ0FBQztZQUV6RSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuT0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHlWQUErQzs7aUJBRWhEOzs7OztxQ0FHRSxLQUFLOzZDQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFDTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs7SUF3TlQsOEJBQUM7Q0FBQSxBQXBPRCxJQW9PQztTQS9OWSx1QkFBdUI7OztJQUVsQyxxREFBa0Q7O0lBQ2xELDZEQUEwRDs7SUFDMUQsd0RBQXlDOztJQUN6Qyw2Q0FBNkQ7O0lBQzdELDZDQUE2RDs7SUFDN0QsNkNBQTZEOztJQUU3RCxnREFBMEI7O0lBRTFCLHVEQUlFOztBQWtOSjtJQUFBO1FBTUUsb0JBQWUsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFXLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUZ3RSxDQUFDO0lBQ0wsQ0FBQztJQUN0RSx5QkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUEMsa0NBQWE7O0lBQ2IsNENBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLCtDQUF1Qzs7SUFDdkMsNkNBQXVFOztJQUN2RSw2Q0FBdUU7O0lBQ3ZFLHlDQUFtRTs7OztBQUdyRTtJQUFBO1FBTUUsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQWEsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBTkMsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLGtDQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsbUNBQXlCOztJQUN6QixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi13YXRlcmZhbGwtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgd2F0ZXJmYWxsQ2hhcnREYXRhOiBXYXRlcmZhbGxDaGFydERhdGFbXTtcbiAgQElucHV0KCkgd2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydE9wdGlvbnM6IGFueSA9IHt9O1xuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHdhdGVyZmFsbERhdGE6IGFueVtdID0gW107XG5cbiAgd2F0ZXJmYWxsQ2hhcnRDb25maWc6IGFueSA9IHtcbiAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxuICAgIG1vZGVCYXJCdXR0b25zVG9SZW1vdmU6IFsncGFuMmQnLCAnbGFzc28yZCddXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLndhdGVyZmFsbERhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGFQcm9jZXNzaW5nKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3dhdGVyZmFsbENoYXJ0RGF0YSddKSB7XG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEgPSBbXTtcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICBkYXRhUHJvY2Vzc2luZygpIHtcbiAgICBpZiAoIXRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xuICAgIH1cbiAgICBsZXQgZGF0YXNldEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBjb21wYXJlZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53YXRlcmZhbGxDaGFydERhdGEuZm9yRWFjaChjaGFydERhdGEgPT4ge1xuXG4gICAgICBsZXQgbWVhc3VyZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgeExhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBkYXRhTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IHlWYWx1ZXM6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgaG92ZXJpbmZvczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcblxuICAgICAgY2hhcnREYXRhLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goaXRlbURhdGEgPT4ge1xuXG4gICAgICAgIGlmICghaXRlbURhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaChpdGVtRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goaXRlbURhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICB5VmFsdWVzLnB1c2goaXRlbURhdGEudmFsdWUpO1xuICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnYWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcbiAgICAgICAgICBjb21wYXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB4TGFiZWxzLnB1c2goaXRlbURhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEgJiYgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XSkge1xuXG4gICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XG4gICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XG4gICAgICAgIHhMYWJlbHMucHVzaCgnJyk7XG5cbiAgICAgICAgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XS53YXRlcmZhbGxJdGVtRGF0YS5mb3JFYWNoKGV4dGVuZGVkRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFleHRlbmRlZERhdGEuaGlkZGVuKSB7XG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKGV4dGVuZGVkRGF0YS5tZWFzdXJlKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChleHRlbmRlZERhdGEuZGF0YUxhYmVsKTtcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaChleHRlbmRlZERhdGEudmFsdWUpO1xuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XG4gICAgICAgICAgICB5VmFsdWVzLnB1c2goMCk7XG4gICAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgeExhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5pdGVtbGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGFydERhdGEuY29ubmVjdG9yQ29sb3IpIHtcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yID0gJ3JnYmEoMzYsMTIzLDE2MCwwLjUpJztcbiAgICAgIH1cbiAgICAgIGlmICghY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoKSB7XG4gICAgICAgIGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXG4gICAgICAgIHR5cGU6ICd3YXRlcmZhbGwnLFxuICAgICAgICBvcmllbnRhdGlvbjogJ3YnLFxuICAgICAgICBtZWFzdXJlOiBtZWFzdXJlcyxcbiAgICAgICAgeDogeExhYmVscyxcbiAgICAgICAgdGV4dHBvc2l0aW9uOiAnb3V0c2lkZScsXG4gICAgICAgIHRleHQ6IGRhdGFMYWJlbHMsXG4gICAgICAgIHk6IHlWYWx1ZXMsXG4gICAgICAgIGNvbm5lY3Rvcjoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjaGFydERhdGEuY29ubmVjdG9yQ29sb3IsXG4gICAgICAgICAgICB3aWR0aDogY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXJpbmZvOiBob3ZlcmluZm9zLFxuICAgICAgICBkZWNyZWFzaW5nOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLmRlY3JlYXNpbmdDb2xvciB9IH0sXG4gICAgICAgIGluY3JlYXNpbmc6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEuaW5jcmVhc2luZ0NvbG9yIH0gfSxcbiAgICAgICAgdG90YWxzOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLnRvdGFsc0NvbG9yIH0gfVxuXG4gICAgICB9XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgZGF0YXNldEluZGV4Kys7XG5cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhKSB7XG4gICAgICBsZXQgbWluOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IG1heDogbnVtYmVyID0gMDtcbiAgICAgIGxldCBjb21wYXJlZFZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgbGV0IHRvdGFsOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcbiAgICAgICAgZGF0YS5tZWFzdXJlLmZvckVhY2gobWVhc3VyZSA9PiB7XG4gICAgICAgICAgaWYgKG1lYXN1cmUgPT0gJ2Fic29sdXRlJykge1xuICAgICAgICAgICAgdG90YWwgPSBkYXRhLnlbaV07XG4gICAgICAgICAgfSBlbHNlIGlmIChtZWFzdXJlID09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgIHRvdGFsICs9IGRhdGEueVtpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvdGFsIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gY29tcGFyZWRJbmRleCkge1xuICAgICAgICAgICAgY29tcGFyZWRWYWx1ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLnNoYXBlcyA9IFt7XG4gICAgICAgIHgwOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXG4gICAgICAgIHkwOiBtaW4sXG4gICAgICAgIHkxOiBtYXgsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBkYXNoOiAnc29saWQnLFxuICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsXG4gICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB4cmVmOiAneCcsXG4gICAgICAgIHlyZWY6ICd5JyxcbiAgICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xuICAgICAgfSwge1xuICAgICAgICB4MDogY29tcGFyZWRJbmRleCxcbiAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCArIDEsXG4gICAgICAgIHkwOiBjb21wYXJlZFZhbHVlLFxuICAgICAgICB5MTogY29tcGFyZWRWYWx1ZSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGRhc2g6ICdkYXNoJyxcbiAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLFxuICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgeHJlZjogJ3gnLFxuICAgICAgICB5cmVmOiAneScsXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgZmlsbGNvbG9yOiAnIzdmN2Y3ZidcbiAgICAgIH1dO1xuXG4gICAgICB0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucy5hbm5vdGF0aW9ucyA9IFt7XG4gICAgICAgIHg6IE1hdGguY2VpbCh0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsXG4gICAgICAgIGZvbnQ6IHsgY29sb3I6ICdyZ2IoNjAsIDU1LCAyMDEpJyB9LFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG5cbiAgICAgIH0sIHtcbiAgICAgICAgeDogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoXG4gICAgICAgICAgKyBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSxcbiAgICAgICAgeTogbWF4ICogMS4xLFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbMF0ubmFtZSArICc8L2I+JyxcbiAgICAgICAgZm9udDogeyBjb2xvcjogJ3JnYig2MCwgNTUsIDIwMSknIH0sXG4gICAgICAgIHNob3dhcnJvdzogZmFsc2VcbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgZDMuc2VsZWN0QWxsKCcueGF4aXNsYXllci1hYm92ZScpLnNlbGVjdEFsbCgndGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cbiAgICAgIF90aGlzLmxhYmVsQ2xpY2suZW1pdChkLnRleHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydERhdGEge1xuXG4gIG5hbWU6IHN0cmluZztcbiAgY29ubmVjdG9yQ29sb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3RvcldpZHRoPzogbnVtYmVyO1xuICB3YXRlcmZhbGxJdGVtRGF0YTogV2F0ZXJmYWxsSXRlbURhdGFbXTtcbiAgZGVjcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXTtcbiAgaW5jcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1sxXTs7XG4gIHRvdGFsc0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1syXTs7XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxJdGVtRGF0YSB7XG5cbiAgbWVhc3VyZTogc3RyaW5nO1xuICBpdGVtbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgZGF0YUxhYmVsOiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tcGFyZWQ/OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=