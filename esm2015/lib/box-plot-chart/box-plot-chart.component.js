/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalChartOptions } from '../global-chart-options';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
export class BoxPlotChartComponent {
    constructor() {
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
    ngOnInit() {
        if (!this.boxPlotChartOptions || Object.keys(this.boxPlotChartOptions).length == 0) {
            this.boxPlotChartOptions = new GlobalChartOptions().boxPlotChartOptions;
        }
        this.boxPlotChartData.forEach((/**
         * @param {?} chartData
         * @return {?}
         */
        chartData => {
            /** @type {?} */
            let data = {
                y: chartData.yValues,
                name: chartData.name,
                type: 'box',
                boxpoints: chartData.boxpoints,
                marker: { color: chartData.markerColor }
            };
            this.boxPlotData.push(data);
        }));
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
        d3.selectAll(".xaxislayer-above").selectAll('text').on("click", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.labelClick.emit(d.text);
        }));
    }
}
BoxPlotChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-box-plot-chart',
                template: "<div>\n  <plotly-plot [data]=\"boxPlotData\" [layout]=\"boxPlotChartOptions\" [config]=\"boxPlotChartConfig\" \n    [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n    (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n  </plotly-plot>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BoxPlotChartComponent.ctorParameters = () => [];
BoxPlotChartComponent.propDecorators = {
    boxPlotChartOptions: [{ type: Input }],
    boxPlotChartData: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }],
    labelClick: [{ type: Output }]
};
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
export class BoxPlotChartData {
    constructor() {
        this.markerColor = GlobalChartColors.globalBackgroundColors[0];
        this.boxpoints = false;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXBsb3QtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL2JveC1wbG90LWNoYXJ0L2JveC1wbG90LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8scUJBQXFCO0lBZ0JoQztRQWRTLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUU3QixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUV4Qix1QkFBa0IsR0FBUTtZQUN4QixjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixzQkFBc0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7O2dCQUNwQyxJQUFJLEdBQUc7Z0JBQ1QsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7Z0JBQ3BCLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztnQkFDOUIsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEtBQVU7UUFFNUIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsS0FBVTtRQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLEtBQVU7O1lBRTdCLEtBQUssR0FBRyxJQUFJO1FBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFTLENBQUM7WUFFeEUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwyVUFBOEM7O2FBRS9DOzs7OztrQ0FHRSxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07Ozs7SUFKUCxvREFBdUM7O0lBQ3ZDLGlEQUE4Qzs7SUFDOUMsMkNBQTZEOztJQUM3RCwyQ0FBNkQ7O0lBQzdELDJDQUE2RDs7SUFFN0QsNENBQXdCOztJQUV4QixtREFJRTs7QUErQ0osTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUlFLGdCQUFXLEdBQVksaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsY0FBUyxHQUFTLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQUE7OztJQUpDLG1DQUFrQjs7SUFDbEIsZ0NBQWE7O0lBQ2IsdUNBQW1FOztJQUNuRSxxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYm94LXBsb3QtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYm94LXBsb3QtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3gtcGxvdC1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJveFBsb3RDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSBib3hQbG90Q2hhcnRPcHRpb25zOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgYm94UGxvdENoYXJ0RGF0YTogQm94UGxvdENoYXJ0RGF0YVtdO1xuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAgXG4gIFxuICBib3hQbG90RGF0YTogYW55W10gPSBbXTsgIFxuICBcbiAgYm94UGxvdENoYXJ0Q29uZmlnOiBhbnkgPSB7XG4gICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxuICAgIGRpc3BsYXlsb2dvOiBmYWxzZSwgICAgICBcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbJ3BhbjJkJywgJ2xhc3NvMmQnXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyAgICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuYm94UGxvdENoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLmJveFBsb3RDaGFydE9wdGlvbnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmJveFBsb3RDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuYm94UGxvdENoYXJ0T3B0aW9ucztcbiAgICB9ICAgIFxuXG4gICAgdGhpcy5ib3hQbG90Q2hhcnREYXRhLmZvckVhY2goY2hhcnREYXRhID0+IHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB5OiBjaGFydERhdGEueVZhbHVlcyxcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXG4gICAgICAgIHR5cGU6ICdib3gnLCAgICAgICAgXG4gICAgICAgIGJveHBvaW50czogY2hhcnREYXRhLmJveHBvaW50cyxcbiAgICAgICAgbWFya2VyOiB7Y29sb3I6IGNoYXJ0RGF0YS5tYXJrZXJDb2xvcn0gICAgICAgIFxuICAgICAgfVxuXG4gICAgICB0aGlzLmJveFBsb3REYXRhLnB1c2goZGF0YSk7XG4gICAgfSk7ICAgICAgICAgICAgICAgIFxuICB9XG4gICAgXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xuICBcbiAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChldmVudCk7XG4gIH1cbiAgICBcbiAgcHVibGljIGNoYXJ0QWZ0ZXJQbG90dGVkKGV2ZW50OiBhbnkpIHtcbiAgICAgIFxuICAgIGxldCBfdGhpcyA9IHRoaXM7ICBcbiAgICBkMy5zZWxlY3RBbGwoXCIueGF4aXNsYXllci1hYm92ZVwiKS5zZWxlY3RBbGwoJ3RleHQnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGQpIHtcblxuICAgICAgX3RoaXMubGFiZWxDbGljay5lbWl0KGQudGV4dCk7ICAgICAgXG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQm94UGxvdENoYXJ0RGF0YSB7XG5cbiAgeVZhbHVlczogbnVtYmVyW107XG4gIG5hbWU6IHN0cmluZzsgIFxuICBtYXJrZXJDb2xvcj86IHN0cmluZyA9IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF07ICBcbiAgYm94cG9pbnRzPzogYW55ID0gZmFsc2U7XG59XG4iXX0=