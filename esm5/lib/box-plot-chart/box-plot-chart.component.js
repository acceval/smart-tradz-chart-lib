/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalChartOptions } from '../global-chart-options';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
var BoxPlotChartComponent = /** @class */ (function () {
    function BoxPlotChartComponent() {
        this.boxPlotChartOptions = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.boxPlotData = [];
        this.boxPlotChartConfig = {
            displayModeBar: false,
            displaylogo: false,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d']
        };
    }
    /**
     * @return {?}
     */
    BoxPlotChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (!this.boxPlotChartOptions || Object.keys(this.boxPlotChartOptions).length == 0) {
            this.boxPlotChartOptions = new GlobalChartOptions().boxPlotChartOptions;
        }
        this.boxPlotChartData.forEach((/**
         * @param {?} chartData
         * @return {?}
         */
        function (chartData) {
            /** @type {?} */
            var data = {
                y: chartData.yValues,
                name: chartData.name,
                type: 'box',
                boxpoints: chartData.boxpoints,
                marker: { color: chartData.markerColor }
            };
            _this_1.boxPlotData.push(data);
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BoxPlotChartComponent.prototype.chartClicked = /**
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
    BoxPlotChartComponent.prototype.chartHovered = /**
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
    BoxPlotChartComponent.prototype.chartAfterPlotted = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var _this = this;
        d3.selectAll(".xaxislayer-above").selectAll('text').on("click", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.labelClick.emit(d.text);
        }));
    };
    BoxPlotChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-box-plot-chart',
                    template: "<div>\n  <plotly-plot [data]=\"boxPlotData\" [layout]=\"boxPlotChartOptions\" [config]=\"boxPlotChartConfig\" \n    [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n    (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n  </plotly-plot>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BoxPlotChartComponent.ctorParameters = function () { return []; };
    BoxPlotChartComponent.propDecorators = {
        boxPlotChartOptions: [{ type: Input }],
        boxPlotChartData: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }],
        labelClick: [{ type: Output }]
    };
    return BoxPlotChartComponent;
}());
export { BoxPlotChartComponent };
if (false) {
    /** @type {?} */
    BoxPlotChartComponent.prototype.boxPlotChartOptions;
    /** @type {?} */
    BoxPlotChartComponent.prototype.boxPlotChartData;
    /** @type {?} */
    BoxPlotChartComponent.prototype.chartClick;
    /** @type {?} */
    BoxPlotChartComponent.prototype.chartHover;
    /** @type {?} */
    BoxPlotChartComponent.prototype.labelClick;
    /** @type {?} */
    BoxPlotChartComponent.prototype.boxPlotData;
    /** @type {?} */
    BoxPlotChartComponent.prototype.boxPlotChartConfig;
}
var BoxPlotChartData = /** @class */ (function () {
    function BoxPlotChartData() {
        this.markerColor = GlobalChartColors.globalBackgroundColors[0];
        this.boxpoints = false;
    }
    return BoxPlotChartData;
}());
export { BoxPlotChartData };
if (false) {
    /** @type {?} */
    BoxPlotChartData.prototype.yValues;
    /** @type {?} */
    BoxPlotChartData.prototype.name;
    /** @type {?} */
    BoxPlotChartData.prototype.markerColor;
    /** @type {?} */
    BoxPlotChartData.prototype.boxpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXBsb3QtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL2JveC1wbG90LWNoYXJ0L2JveC1wbG90LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRDtJQXFCRTtRQWRTLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4Qix1QkFBa0IsR0FBUTtZQUN4QixjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixzQkFBc0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxtQkFpQkM7UUFmQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLFNBQVM7O2dCQUNqQyxJQUFJLEdBQUc7Z0JBQ1QsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7Z0JBQ3BCLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztnQkFDOUIsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUM7YUFDdkM7WUFFRCxPQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sNENBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUU1QixJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVNLDRDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQVU7UUFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxpREFBaUI7Ozs7SUFBeEIsVUFBeUIsS0FBVTs7WUFFN0IsS0FBSyxHQUFHLElBQUk7UUFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztRQUFFLFVBQVMsQ0FBQztZQUV4RSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDJVQUE4Qzs7aUJBRS9DOzs7OztzQ0FHRSxLQUFLO21DQUNMLEtBQUs7NkJBQ0wsTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07O0lBcURULDRCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0EzRFkscUJBQXFCOzs7SUFFaEMsb0RBQXVDOztJQUN2QyxpREFBOEM7O0lBQzlDLDJDQUE2RDs7SUFDN0QsMkNBQTZEOztJQUM3RCwyQ0FBNkQ7O0lBRTdELDRDQUF3Qjs7SUFFeEIsbURBSUU7O0FBK0NKO0lBQUE7UUFJRSxnQkFBVyxHQUFZLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLGNBQVMsR0FBUyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFKQyxtQ0FBa0I7O0lBQ2xCLGdDQUFhOztJQUNiLHVDQUFtRTs7SUFDbkUscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJveC1wbG90LWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JveC1wbG90LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm94LXBsb3QtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb3hQbG90Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgQElucHV0KCkgYm94UGxvdENoYXJ0T3B0aW9uczogYW55ID0ge307XG4gIEBJbnB1dCgpIGJveFBsb3RDaGFydERhdGE6IEJveFBsb3RDaGFydERhdGFbXTtcbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIFxuICBcbiAgYm94UGxvdERhdGE6IGFueVtdID0gW107ICBcbiAgXG4gIGJveFBsb3RDaGFydENvbmZpZzogYW55ID0ge1xuICAgIGRpc3BsYXlNb2RlQmFyOiBmYWxzZSxcbiAgICBkaXNwbGF5bG9nbzogZmFsc2UsICAgICAgXG4gICAgbW9kZUJhckJ1dHRvbnNUb1JlbW92ZTogWydwYW4yZCcsICdsYXNzbzJkJ11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgICAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKCF0aGlzLmJveFBsb3RDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5ib3hQbG90Q2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5ib3hQbG90Q2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLmJveFBsb3RDaGFydE9wdGlvbnM7XG4gICAgfSAgICBcblxuICAgIHRoaXMuYm94UGxvdENoYXJ0RGF0YS5mb3JFYWNoKGNoYXJ0RGF0YSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgeTogY2hhcnREYXRhLnlWYWx1ZXMsXG4gICAgICAgIG5hbWU6IGNoYXJ0RGF0YS5uYW1lLFxuICAgICAgICB0eXBlOiAnYm94JywgICAgICAgIFxuICAgICAgICBib3hwb2ludHM6IGNoYXJ0RGF0YS5ib3hwb2ludHMsXG4gICAgICAgIG1hcmtlcjoge2NvbG9yOiBjaGFydERhdGEubWFya2VyQ29sb3J9ICAgICAgICBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ib3hQbG90RGF0YS5wdXNoKGRhdGEpO1xuICAgIH0pOyAgICAgICAgICAgICAgICBcbiAgfVxuICAgIFxuICBwdWJsaWMgY2hhcnRDbGlja2VkKGV2ZW50OiBhbnkpIHtcblxuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGV2ZW50OiBhbnkpIHtcbiAgXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xuICB9XG4gICAgXG4gIHB1YmxpYyBjaGFydEFmdGVyUGxvdHRlZChldmVudDogYW55KSB7XG4gICAgICBcbiAgICBsZXQgX3RoaXMgPSB0aGlzOyAgXG4gICAgZDMuc2VsZWN0QWxsKFwiLnhheGlzbGF5ZXItYWJvdmVcIikuc2VsZWN0QWxsKCd0ZXh0Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbihkKSB7XG5cbiAgICAgIF90aGlzLmxhYmVsQ2xpY2suZW1pdChkLnRleHQpOyAgICAgIFxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEJveFBsb3RDaGFydERhdGEge1xuXG4gIHlWYWx1ZXM6IG51bWJlcltdO1xuICBuYW1lOiBzdHJpbmc7ICBcbiAgbWFya2VyQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzBdOyAgXG4gIGJveHBvaW50cz86IGFueSA9IGZhbHNlO1xufVxuIl19