/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        var _this = this;
        this.pieChartOptions = {};
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.pieChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        if (!this.pieChartColors || Object.keys(this.pieChartColors).length == 0) {
            this.pieChartColors = [{
                    backgroundColor: [],
                }];
            /** @type {?} */
            var globalColors = new GlobalChartColors().globalColors;
            globalColors.forEach((/**
             * @param {?} color
             * @return {?}
             */
            function (color) {
                _this.pieChartColors[0].backgroundColor.push(color.backgroundColor);
            }));
        }
        if (!this.pieChartOptions || Object.keys(this.pieChartOptions).length == 0) {
            this.pieChartOptions = new GlobalChartOptions().pieChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.pieChartOptions = SimpleChartConfig.populateChartConfig(this.pieChartOptions, this.simpleChartConfig);
            }
        }
    }
    /**
     * @return {?}
     */
    PieChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.pieChartPlugins) {
            this.pieChartPlugins = [];
        }
        this.pieChartPlugins.push(pluginDataLabels);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PieChartComponent.prototype.chartClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PieChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    PieChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pie-chart',
                    template: "<div style=\"display: block;\">\n  <canvas baseChart\n    [data]=\"pieChartData\"\n    [labels]=\"pieChartLabels\"    \n    [options]=\"pieChartOptions\"\n    [plugins]=\"pieChartPlugins\"    \n    [colors]=\"pieChartColors\" \n    [legend]=\"pieChartLegend\"\n    [chartType]=\"'pie'\"    \n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PieChartComponent.ctorParameters = function () { return []; };
    PieChartComponent.propDecorators = {
        pieChartOptions: [{ type: Input }],
        pieChartLabels: [{ type: Input }],
        pieChartData: [{ type: Input }],
        pieChartLegend: [{ type: Input }],
        pieChartPlugins: [{ type: Input }],
        pieChartColors: [{ type: Input }],
        simpleChartConfig: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return PieChartComponent;
}());
export { PieChartComponent };
if (false) {
    /** @type {?} */
    PieChartComponent.prototype.pieChartOptions;
    /** @type {?} */
    PieChartComponent.prototype.pieChartLabels;
    /** @type {?} */
    PieChartComponent.prototype.pieChartData;
    /** @type {?} */
    PieChartComponent.prototype.pieChartLegend;
    /** @type {?} */
    PieChartComponent.prototype.pieChartPlugins;
    /** @type {?} */
    PieChartComponent.prototype.pieChartColors;
    /** @type {?} */
    PieChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    PieChartComponent.prototype.chartClick;
    /** @type {?} */
    PieChartComponent.prototype.chartHover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0Q7SUFrQkU7UUFBQSxpQkFtQkM7UUE5QlEsb0JBQWUsR0FBaUIsRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLHNCQUFpQixHQUFzQixFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQztvQkFDbkIsZUFBZSxFQUFFLEVBQUU7aUJBQ3BCLENBQUMsQ0FBQzs7Z0JBQ0QsWUFBWSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxZQUFZO1lBQ3ZELFlBQVksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUN4QixLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUVoRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDL0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFTSx3Q0FBWTs7OztJQUFuQixVQUFvQixFQUFzRDtZQUFwRCxnQkFBSyxFQUFFLGtCQUFNO1FBQ2pDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVNLHdDQUFZOzs7O0lBQW5CLFVBQW9CLEVBQXNEO1lBQXBELGdCQUFLLEVBQUUsa0JBQU07UUFDakMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDRaQUF5Qzs7aUJBRTFDOzs7OztrQ0FHRSxLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7aUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzZCQUVMLE1BQU07NkJBQ04sTUFBTTs7SUF5Q1Qsd0JBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXBEWSxpQkFBaUI7OztJQUU1Qiw0Q0FBNEM7O0lBQzVDLDJDQUFzQzs7SUFDdEMseUNBQXFDOztJQUNyQywyQ0FBK0I7O0lBQy9CLDRDQUFxQzs7SUFDckMsMkNBQXlDOztJQUN6Qyw4Q0FBbUQ7O0lBRW5ELHVDQUE2RDs7SUFDN0QsdUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBDaGFydFR5cGUsIENoYXJ0RGF0YVNldHMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgTGFiZWwsIENvbG9yIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBpZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGllQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcbiAgQElucHV0KCkgcGllQ2hhcnRMYWJlbHM6IExhYmVsW10gPSBbXTtcbiAgQElucHV0KCkgcGllQ2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xuICBASW5wdXQoKSBwaWVDaGFydExlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIHBpZUNoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcGllQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXTsgIFxuICBASW5wdXQoKSBzaW1wbGVDaGFydENvbmZpZzogU2ltcGxlQ2hhcnRDb25maWcgPSB7fTtcblxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMucGllQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5waWVDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMucGllQ2hhcnRDb2xvcnMgPSBbeyAgIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXG4gICAgICAgIH1dOyAgXG4gICAgICBsZXQgZ2xvYmFsQ29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xuICAgICAgZ2xvYmFsQ29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICB0aGlzLnBpZUNoYXJ0Q29sb3JzWzBdLmJhY2tncm91bmRDb2xvci5wdXNoKGNvbG9yLmJhY2tncm91bmRDb2xvcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucGllQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMucGllQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5waWVDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkucGllQ2hhcnRPcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxuICAgICAgICB0aGlzLnBpZUNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5waWVDaGFydE9wdGlvbnMsIFxuICAgICAgICAgIHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGllQ2hhcnRQbHVnaW5zKSB7XG4gICAgICB0aGlzLnBpZUNoYXJ0UGx1Z2lucyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnBpZUNoYXJ0UGx1Z2lucy5wdXNoKHBsdWdpbkRhdGFMYWJlbHMpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==