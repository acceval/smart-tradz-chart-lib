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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk3RDtJQXNCRTtRQWJTLDBCQUFxQixHQUFRLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUUxQix5QkFBb0IsR0FBUTtZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixzQkFBc0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxtQkEwS0M7UUF4S0MsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUM3RTs7WUFDRyxZQUFZLEdBQVcsQ0FBQzs7WUFDeEIsYUFBYSxHQUFXLENBQUM7O1lBQ3pCLEtBQUssR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxTQUFTOztnQkFFbkMsUUFBUSxHQUFhLEVBQUU7O2dCQUN2QixPQUFPLEdBQWEsRUFBRTs7Z0JBQ3RCLFVBQVUsR0FBYSxFQUFFOztnQkFDekIsT0FBTyxHQUFhLEVBQUU7O2dCQUN0QixVQUFVLEdBQWEsRUFBRTs7Z0JBQ3pCLEtBQUssR0FBVyxDQUFDO1lBRXJCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxRQUFRO2dCQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO29CQUNyQixhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsS0FBSyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksS0FBSyxDQUFDLDBCQUEwQixJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFFdEYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFakIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxZQUFZO29CQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTt3QkFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDekI7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsU0FBUyxDQUFDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO2dCQUM3QixTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUM5Qjs7Z0JBQ0csSUFBSSxHQUFHO2dCQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDcEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsQ0FBQyxFQUFFLE9BQU87Z0JBQ1YsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2dCQUNoQixDQUFDLEVBQUUsT0FBTztnQkFDVixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxTQUFTLENBQUMsY0FBYzt3QkFDL0IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxjQUFjO3FCQUNoQztpQkFDRjtnQkFDRCxTQUFTLEVBQUUsVUFBVTtnQkFDckIsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDNUQsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDNUQsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTthQUVyRDtZQUVELE9BQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLFlBQVksRUFBRSxDQUFDO1FBRWpCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7O2dCQUMvQixLQUFHLEdBQVcsQ0FBQzs7Z0JBQ2YsS0FBRyxHQUFXLENBQUM7O2dCQUNmLGVBQWEsR0FBVyxDQUFDO1lBRTdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTs7b0JBQ3pCLEtBQUssR0FBVyxDQUFDOztvQkFDakIsQ0FBQyxHQUFXLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLE9BQU87b0JBQzFCLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTt3QkFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25CO3lCQUFNLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTt3QkFDaEMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO29CQUNELElBQUksS0FBSyxHQUFHLEtBQUcsRUFBRTt3QkFDZixLQUFHLEdBQUcsS0FBSyxDQUFDO3FCQUNiO29CQUNELElBQUksS0FBSyxHQUFHLEtBQUcsRUFBRTt3QkFDZixLQUFHLEdBQUcsS0FBSyxDQUFDO3FCQUNiO29CQUNELElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRTt3QkFDdEIsZUFBYSxHQUFHLEtBQUssQ0FBQztxQkFDdkI7b0JBQ0QsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDakMsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNO29CQUN2RCxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE1BQU07b0JBQ3ZELEVBQUUsRUFBRSxLQUFHO29CQUNQLEVBQUUsRUFBRSxLQUFHO29CQUNQLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7b0JBQ0QsSUFBSSxFQUFFLE1BQU07b0JBQ1osSUFBSSxFQUFFLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLEdBQUc7b0JBQ1osU0FBUyxFQUFFLFNBQVM7aUJBQ3JCLEVBQUU7b0JBQ0QsRUFBRSxFQUFFLGFBQWE7b0JBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQzNELEVBQUUsRUFBRSxlQUFhO29CQUNqQixFQUFFLEVBQUUsZUFBYTtvQkFDakIsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxTQUFTO3dCQUNoQixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRCxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsR0FBRztvQkFDVCxJQUFJLEVBQUUsR0FBRztvQkFDVCxPQUFPLEVBQUUsR0FBRztvQkFDWixTQUFTLEVBQUUsU0FBUztpQkFDdkIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsR0FBRyxDQUFDO29CQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDckUsQ0FBQyxFQUFFLEtBQUcsR0FBRyxHQUFHO29CQUNaLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNO29CQUN0RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUVqQixFQUFFO29CQUNELENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTTswQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDOUUsQ0FBQyxFQUFFLEtBQUcsR0FBRyxHQUFHO29CQUNaLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNO29CQUM5RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7b0JBQ25DLFNBQVMsRUFBRSxLQUFLO2lCQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRU0sOENBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUU1QixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVNLDhDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxtREFBaUI7Ozs7SUFBeEIsVUFBeUIsS0FBVTs7WUFFN0IsS0FBSyxHQUFHLElBQUk7UUFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztRQUFFLFVBQVMsQ0FBQztZQUV4RSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF4TkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHlWQUErQzs7aUJBRWhEOzs7OztxQ0FHRSxLQUFLOzZDQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFDTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs7SUE2TVQsOEJBQUM7Q0FBQSxBQXpORCxJQXlOQztTQXBOWSx1QkFBdUI7OztJQUVsQyxxREFBa0Q7O0lBQ2xELDZEQUEwRDs7SUFDMUQsd0RBQXlDOztJQUN6Qyw2Q0FBNkQ7O0lBQzdELDZDQUE2RDs7SUFDN0QsNkNBQTZEOztJQUU3RCxnREFBMEI7O0lBRTFCLHVEQUlFOztBQXVNSjtJQUFBO1FBTUUsb0JBQWUsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFXLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUZ3RSxDQUFDO0lBQ0wsQ0FBQztJQUN0RSx5QkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUEMsa0NBQWE7O0lBQ2IsNENBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLCtDQUF1Qzs7SUFDdkMsNkNBQXVFOztJQUN2RSw2Q0FBdUU7O0lBQ3ZFLHlDQUFtRTs7OztBQUdyRTtJQUFBO1FBTUUsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQWEsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBTkMsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLGtDQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsbUNBQXlCOztJQUN6QixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSAnbW9tZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd2F0ZXJmYWxsLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuaHRtbCcsICAgIFxuICBzdHlsZVVybHM6IFsnLi93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xuICBASW5wdXQoKSB3YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YTogV2F0ZXJmYWxsQ2hhcnREYXRhW107XG4gIEBJbnB1dCgpIHdhdGVyZmFsbENoYXJ0T3B0aW9uczogYW55ID0ge307XG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7ICBcbiAgXG4gIHdhdGVyZmFsbERhdGE6IGFueVtdID0gW107ICBcbiAgXG4gIHdhdGVyZmFsbENoYXJ0Q29uZmlnOiBhbnkgPSB7XG4gICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSwgICAgICBcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbJ3BhbjJkJywgJ2xhc3NvMmQnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xuICAgIH0gICAgICAgIFxuICAgIGxldCBkYXRhc2V0SW5kZXg6IG51bWJlciA9IDA7XG4gICAgbGV0IGNvbXBhcmVkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YS5mb3JFYWNoKGNoYXJ0RGF0YSA9PiB7XG5cbiAgICAgIGxldCBtZWFzdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCB4TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGRhdGFMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgeVZhbHVlczogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCBob3ZlcmluZm9zOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgICBjaGFydERhdGEud2F0ZXJmYWxsSXRlbURhdGEuZm9yRWFjaChpdGVtRGF0YSA9PiB7XG5cbiAgICAgICAgaWYgKCFpdGVtRGF0YS5oaWRkZW4pIHtcbiAgICAgICAgICBtZWFzdXJlcy5wdXNoKGl0ZW1EYXRhLm1lYXN1cmUpO1xuICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChpdGVtRGF0YS5kYXRhTGFiZWwpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaChpdGVtRGF0YS52YWx1ZSk7XG4gICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTsgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcbiAgICAgICAgICBjb21wYXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB4TGFiZWxzLnB1c2goaXRlbURhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEgJiYgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XSkge1xuICAgICAgICBcbiAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcbiAgICAgICAgeVZhbHVlcy5wdXNoKDApO1xuICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgeExhYmVscy5wdXNoKCcnKTtcblxuICAgICAgICBfdGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVtkYXRhc2V0SW5kZXhdLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goZXh0ZW5kZWREYXRhID0+IHtcbiAgICAgICAgICBpZiAoIWV4dGVuZGVkRGF0YS5oaWRkZW4pIHtcbiAgICAgICAgICAgIG1lYXN1cmVzLnB1c2goZXh0ZW5kZWREYXRhLm1lYXN1cmUpO1xuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5kYXRhTGFiZWwpO1xuICAgICAgICAgICAgeVZhbHVlcy5wdXNoKGV4dGVuZGVkRGF0YS52YWx1ZSk7XG4gICAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ2FsbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKCdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnbm9uZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB4TGFiZWxzLnB1c2goZXh0ZW5kZWREYXRhLml0ZW1sYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoYXJ0RGF0YS5jb25uZWN0b3JDb2xvcikge1xuICAgICAgICBjaGFydERhdGEuY29ubmVjdG9yQ29sb3IgPSAncmdiYSgzNiwxMjMsMTYwLDAuNSknO1xuICAgICAgfVxuICAgICAgaWYgKCFjaGFydERhdGEuY29ubmVjdG9yV2lkdGgpIHtcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoID0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBuYW1lOiBjaGFydERhdGEubmFtZSxcbiAgICAgICAgdHlwZTogJ3dhdGVyZmFsbCcsXG4gICAgICAgIG9yaWVudGF0aW9uOiAndicsXG4gICAgICAgIG1lYXN1cmU6IG1lYXN1cmVzLFxuICAgICAgICB4OiB4TGFiZWxzLFxuICAgICAgICB0ZXh0cG9zaXRpb246ICdvdXRzaWRlJyxcbiAgICAgICAgdGV4dDogZGF0YUxhYmVscyxcbiAgICAgICAgeTogeVZhbHVlcywgICAgICAgIFxuICAgICAgICBjb25uZWN0b3I6IHtcbiAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yLFxuICAgICAgICAgICAgd2lkdGg6IGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCwgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcmluZm86IGhvdmVyaW5mb3MsXG4gICAgICAgIGRlY3JlYXNpbmc6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEuZGVjcmVhc2luZ0NvbG9yIH0gfSxcbiAgICAgICAgaW5jcmVhc2luZzogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS5pbmNyZWFzaW5nQ29sb3IgfSB9LFxuICAgICAgICB0b3RhbHM6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEudG90YWxzQ29sb3IgfSB9XG4gICAgICBcbiAgICAgIH1cblxuICAgICAgdGhpcy53YXRlcmZhbGxEYXRhLnB1c2goZGF0YSk7XG4gICAgICBkYXRhc2V0SW5kZXgrKztcblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEpIHtcbiAgICAgIGxldCBtaW46IG51bWJlciA9IDA7XG4gICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xuICAgICAgbGV0IGNvbXBhcmVkVmFsdWU6IG51bWJlciA9IDA7XG4gICAgICBcbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBsZXQgdG90YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xuICAgICAgICBkYXRhLm1lYXN1cmUuZm9yRWFjaChtZWFzdXJlID0+IHtcbiAgICAgICAgICBpZiAobWVhc3VyZSA9PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgICAgICB0b3RhbCA9IGRhdGEueVtpXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lYXN1cmUgPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgdG90YWwgKz0gZGF0YS55W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG90YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHRvdGFsO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgaWYgKHRvdGFsIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gY29tcGFyZWRJbmRleCkge1xuICAgICAgICAgICAgY29tcGFyZWRWYWx1ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLnNoYXBlcyA9IFt7XG4gICAgICAgICAgeDA6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCwgXG4gICAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCwgXG4gICAgICAgICAgeTA6IG1pbiwgXG4gICAgICAgICAgeTE6IG1heCwgXG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgZGFzaDogJ3NvbGlkJywgXG4gICAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLCBcbiAgICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgICAgfSwgXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLCBcbiAgICAgICAgICB4cmVmOiAneCcsIFxuICAgICAgICAgIHlyZWY6ICd5JywgXG4gICAgICAgICAgb3BhY2l0eTogMC4zLCBcbiAgICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgeDA6IGNvbXBhcmVkSW5kZXgsIFxuICAgICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggKyAxLCBcbiAgICAgICAgICB5MDogY29tcGFyZWRWYWx1ZSwgXG4gICAgICAgICAgeTE6IGNvbXBhcmVkVmFsdWUsXG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgZGFzaDogJ2Rhc2gnLCBcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsIFxuICAgICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgICB9LCBcbiAgICAgICAgICB0eXBlOiAnbGluZScsIFxuICAgICAgICAgIHhyZWY6ICd4JywgXG4gICAgICAgICAgeXJlZjogJ3knLCBcbiAgICAgICAgICBvcGFjaXR5OiAwLjMsIFxuICAgICAgICAgIGZpbGxjb2xvcjogJyM3ZjdmN2YnXG4gICAgICB9XTtcblxuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMuYW5ub3RhdGlvbnMgPSBbe1xuICAgICAgICB4OiBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoIC8gMiksIFxuICAgICAgICB5OiBtYXggKiAxLjEsIFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsIFxuICAgICAgICBmb250OiB7IGNvbG9yOiAncmdiKDYwLCA1NSwgMjAxKScgfSwgXG4gICAgICAgIHNob3dhcnJvdzogZmFsc2VcblxuICAgICAgfSwge1xuICAgICAgICB4OiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggXG4gICAgICAgICAgKyBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSwgXG4gICAgICAgIHk6IG1heCAqIDEuMSwgXG4gICAgICAgIHRleHQ6ICc8Yj4nICsgdGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS5uYW1lICsgJzwvYj4nLCBcbiAgICAgICAgZm9udDogeyBjb2xvcjogJ3JnYig2MCwgNTUsIDIwMSknIH0sIFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG4gICAgICB9XTtcbiAgICB9ICAgIFxuICB9XG4gICAgXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuICBcbiAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChldmVudCk7XG4gIH1cbiAgICBcbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIFxuICAgIGxldCBfdGhpcyA9IHRoaXM7ICAgICAgXG4gICAgZDMuc2VsZWN0QWxsKCcueGF4aXNsYXllci1hYm92ZScpLnNlbGVjdEFsbCgndGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcblxuICAgICAgX3RoaXMubGFiZWxDbGljay5lbWl0KGQudGV4dCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbENoYXJ0RGF0YSB7XG5cbiAgbmFtZTogc3RyaW5nO1xuICBjb25uZWN0b3JDb2xvcj86IHN0cmluZztcbiAgY29ubmVjdG9yV2lkdGg/OiBudW1iZXI7XG4gIHdhdGVyZmFsbEl0ZW1EYXRhOiBXYXRlcmZhbGxJdGVtRGF0YVtdO1xuICBkZWNyZWFzaW5nQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzBdO1xuICBpbmNyZWFzaW5nQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzFdOztcbiAgdG90YWxzQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzJdOztcbn1cblxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbEl0ZW1EYXRhIHtcblxuICBtZWFzdXJlOiBzdHJpbmc7XG4gIGl0ZW1sYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBkYXRhTGFiZWw6IHN0cmluZztcbiAgaGlkZGVuPzogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21wYXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==