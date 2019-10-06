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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVM3RCxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQztRQWJTLDBCQUFxQixHQUFRLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUUxQix5QkFBb0IsR0FBUTtZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixzQkFBc0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUM3RTs7WUFDRyxZQUFZLEdBQVcsQ0FBQzs7WUFDeEIs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QUU3RCxnREFBMEI7O0lBRTFCLHVEQUlFOztBQXVNSixNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBTUUsb0JBQWUsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFXLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUZ3RSxDQUFDO0lBQ0wsQ0FBQztDQUNyRTs7O0lBUEMsa0NBQWE7O0lBQ2IsNENBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLCtDQUF1Qzs7SUFDdkMsNkNBQXVFOztJQUN2RSw2Q0FBdUU7O0lBQ3ZFLHlDQUFtRTs7OztBQUdyRSxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBTUUsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQWEsS0FBSyxDQUFDO0lBQzdCLENBQUM7Q0FBQTs7O0lBTkMsb0NBQWdCOztJQUNoQixzQ0FBa0I7O0lBQ2xCLGtDQUFjOztJQUNkLHNDQUFrQjs7SUFDbEIsbUNBQXlCOztJQUN6QixxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSAnbW9tZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItd2F0ZXJmYWxsLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuaHRtbCcsICAgIFxuICBzdHlsZVVybHM6IFsnLi93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXYXRlcmZhbGxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xuICBASW5wdXQoKSB3YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YTogV2F0ZXJmYWxsQ2hhcnREYXRhW107XG4gIEBJbnB1dCgpIHdhdGVyZmFsbENoYXJ0T3B0aW9uczogYW55ID0ge307XG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7ICBcbiAgXG4gIHdhdGVyZmFsbERhdGE6IGFueVtdID0gW107ICBcbiAgXG4gIHdhdGVyZmFsbENoYXJ0Q29uZmlnOiBhbnkgPSB7XG4gICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSwgICAgICBcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbJ3BhbjJkJywgJ2xhc3NvMmQnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xuICAgIH0gICAgICAgIFxuICAgIGxldCBkYXRhc2V0SW5kZXg6IG51bWJlciA9IDA7XG4gICAgbGV0IGNvbXBhcmVkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YS5mb3JFYWNoKGNoYXJ0RGF0YSA9PiB7XG5cbiAgICAgIGxldCBtZWFzdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCB4TGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGRhdGFMYWJlbHM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgeVZhbHVlczogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCBob3ZlcmluZm9zOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgICBjaGFydERhdGEud2F0ZXJmYWxsSXRlbURhdGEuZm9yRWFjaChpdGVtRGF0YSA9PiB7XG5cbiAgICAgICAgaWYgKCFpdGVtRGF0YS5oaWRkZW4pIHtcbiAgICAgICAgICBtZWFzdXJlcy5wdXNoKGl0ZW1EYXRhLm1lYXN1cmUpO1xuICAgICAgICAgIGRhdGFMYWJlbHMucHVzaChpdGVtRGF0YS5kYXRhTGFiZWwpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaChpdGVtRGF0YS52YWx1ZSk7XG4gICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTsgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcbiAgICAgICAgICBjb21wYXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB4TGFiZWxzLnB1c2goaXRlbURhdGEuaXRlbWxhYmVsKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEgJiYgX3RoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbZGF0YXNldEluZGV4XSkge1xuICAgICAgICBcbiAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcbiAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcbiAgICAgICAgeVZhbHVlcy5wdXNoKDApO1xuICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcbiAgICAgICAgeExhYmVscy5wdXNoKCcnKTtcblxuICAgICAgICBfdGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVtkYXRhc2V0SW5kZXhdLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goZXh0ZW5kZWREYXRhID0+IHtcbiAgICAgICAgICBpZiAoIWV4dGVuZGVkRGF0YS5oaWRkZW4pIHtcbiAgICAgICAgICAgIG1lYXN1cmVzLnB1c2goZXh0ZW5kZWREYXRhLm1lYXN1cmUpO1xuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5kYXRhTGFiZWwpO1xuICAgICAgICAgICAgeVZhbHVlcy5wdXNoKGV4dGVuZGVkRGF0YS52YWx1ZSk7XG4gICAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ2FsbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKCdhYnNvbHV0ZScpO1xuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcbiAgICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnbm9uZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB4TGFiZWxzLnB1c2goZXh0ZW5kZWREYXRhLml0ZW1sYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoYXJ0RGF0YS5jb25uZWN0b3JDb2xvcikge1xuICAgICAgICBjaGFydERhdGEuY29ubmVjdG9yQ29sb3IgPSAncmdiYSgzNiwxMjMsMTYwLDAuNSknO1xuICAgICAgfVxuICAgICAgaWYgKCFjaGFydERhdGEuY29ubmVjdG9yV2lkdGgpIHtcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvcldpZHRoID0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBuYW1lOiBjaGFydERhdGEubmFtZSxcbiAgICAgICAgdHlwZTogJ3dhdGVyZmFsbCcsXG4gICAgICAgIG9yaWVudGF0aW9uOiAndicsXG4gICAgICAgIG1lYXN1cmU6IG1lYXN1cmVzLFxuICAgICAgICB4OiB4TGFiZWxzLFxuICAgICAgICB0ZXh0cG9zaXRpb246ICdvdXRzaWRlJyxcbiAgICAgICAgdGV4dDogZGF0YUxhYmVscyxcbiAgICAgICAgeTogeVZhbHVlcywgICAgICAgIFxuICAgICAgICBjb25uZWN0b3I6IHtcbiAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yLFxuICAgICAgICAgICAgd2lkdGg6IGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCwgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcmluZm86IGhvdmVyaW5mb3MsXG4gICAgICAgIGRlY3JlYXNpbmc6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEuZGVjcmVhc2luZ0NvbG9yIH0gfSxcbiAgICAgICAgaW5jcmVhc2luZzogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS5pbmNyZWFzaW5nQ29sb3IgfSB9LFxuICAgICAgICB0b3RhbHM6IHsgbWFya2VyOiB7IGNvbG9yOiBjaGFydERhdGEudG90YWxzQ29sb3IgfSB9XG4gICAgICBcbiAgICAgIH1cblxuICAgICAgdGhpcy53YXRlcmZhbGxEYXRhLnB1c2goZGF0YSk7XG4gICAgICBkYXRhc2V0SW5kZXgrKztcblxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGEpIHtcbiAgICAgIGxldCBtaW46IG51bWJlciA9IDA7XG4gICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xuICAgICAgbGV0IGNvbXBhcmVkVmFsdWU6IG51bWJlciA9IDA7XG4gICAgICBcbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBsZXQgdG90YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwO1xuICAgICAgICBkYXRhLm1lYXN1cmUuZm9yRWFjaChtZWFzdXJlID0+IHtcbiAgICAgICAgICBpZiAobWVhc3VyZSA9PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgICAgICB0b3RhbCA9IGRhdGEueVtpXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lYXN1cmUgPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgdG90YWwgKz0gZGF0YS55W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG90YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHRvdGFsO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgaWYgKHRvdGFsIDwgbWluKSB7XG4gICAgICAgICAgICBtaW4gPSB0b3RhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgPT0gY29tcGFyZWRJbmRleCkge1xuICAgICAgICAgICAgY29tcGFyZWRWYWx1ZSA9IHRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLnNoYXBlcyA9IFt7XG4gICAgICAgICAgeDA6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCwgXG4gICAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCwgXG4gICAgICAgICAgeTA6IG1pbiwgXG4gICAgICAgICAgeTE6IG1heCwgXG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgZGFzaDogJ3NvbGlkJywgXG4gICAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLCBcbiAgICAgICAgICAgIHdpZHRoOiAzXG4gICAgICAgICAgfSwgXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLCBcbiAgICAgICAgICB4cmVmOiAneCcsIFxuICAgICAgICAgIHlyZWY6ICd5JywgXG4gICAgICAgICAgb3BhY2l0eTogMC4zLCBcbiAgICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgeDA6IGNvbXBhcmVkSW5kZXgsIFxuICAgICAgICAgIHgxOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggKyAxLCBcbiAgICAgICAgICB5MDogY29tcGFyZWRWYWx1ZSwgXG4gICAgICAgICAgeTE6IGNvbXBhcmVkVmFsdWUsXG4gICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgZGFzaDogJ2Rhc2gnLCBcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsIFxuICAgICAgICAgICAgd2lkdGg6IDNcbiAgICAgICAgICB9LCBcbiAgICAgICAgICB0eXBlOiAnbGluZScsIFxuICAgICAgICAgIHhyZWY6ICd4JywgXG4gICAgICAgICAgeXJlZjogJ3knLCBcbiAgICAgICAgICBvcGFjaXR5OiAwLjMsIFxuICAgICAgICAgIGZpbGxjb2xvcjogJyM3ZjdmN2YnXG4gICAgICB9XTtcblxuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMuYW5ub3RhdGlvbnMgPSBbe1xuICAgICAgICB4OiBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoIC8gMiksIFxuICAgICAgICB5OiBtYXggKiAxLjEsIFxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLm5hbWUgKyAnPC9iPicsIFxuICAgICAgICBmb250OiB7IGNvbG9yOiAncmdiKDYwLCA1NSwgMjAxKScgfSwgXG4gICAgICAgIHNob3dhcnJvdzogZmFsc2VcblxuICAgICAgfSwge1xuICAgICAgICB4OiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggXG4gICAgICAgICAgKyBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGggLyAyKSwgXG4gICAgICAgIHk6IG1heCAqIDEuMSwgXG4gICAgICAgIHRleHQ6ICc8Yj4nICsgdGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVswXS5uYW1lICsgJzwvYj4nLCBcbiAgICAgICAgZm9udDogeyBjb2xvcjogJ3JnYig2MCwgNTUsIDIwMSknIH0sIFxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXG4gICAgICB9XTtcbiAgICB9ICAgIFxuICB9XG4gICAgXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuICBcbiAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChldmVudCk7XG4gIH1cbiAgICBcbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIFxuICAgIGxldCBfdGhpcyA9IHRoaXM7ICAgICAgXG4gICAgZDMuc2VsZWN0QWxsKCcueGF4aXNsYXllci1hYm92ZScpLnNlbGVjdEFsbCgndGV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcblxuICAgICAgX3RoaXMubGFiZWxDbGljay5lbWl0KGQudGV4dCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbENoYXJ0RGF0YSB7XG5cbiAgbmFtZTogc3RyaW5nO1xuICBjb25uZWN0b3JDb2xvcj86IHN0cmluZztcbiAgY29ubmVjdG9yV2lkdGg/OiBudW1iZXI7XG4gIHdhdGVyZmFsbEl0ZW1EYXRhOiBXYXRlcmZhbGxJdGVtRGF0YVtdO1xuICBkZWNyZWFzaW5nQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzBdO1xuICBpbmNyZWFzaW5nQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzFdOztcbiAgdG90YWxzQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzJdOztcbn1cblxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbEl0ZW1EYXRhIHtcblxuICBtZWFzdXJlOiBzdHJpbmc7XG4gIGl0ZW1sYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBkYXRhTGFiZWw6IHN0cmluZztcbiAgaGlkZGVuPzogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21wYXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==