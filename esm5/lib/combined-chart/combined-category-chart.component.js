/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
var CombinedCategoryChartComponent = /** @class */ (function () {
    function CombinedCategoryChartComponent() {
        this.combinedChartOptions = {};
        this.combinedChartLabels = [];
        this.combinedChartLegend = true;
        this.combinedChartData = [];
        this.combinedChartPlugins = [];
        this.combinedChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CombinedCategoryChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.combinedChartColors || Object.keys(this.combinedChartColors).length == 0) {
            this.combinedChartColors = new GlobalChartColors().globalColors;
        }
        if (!this.combinedChartOptions || Object.keys(this.combinedChartOptions).length == 0) {
            this.combinedChartOptions = new GlobalChartOptions().barChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.combinedChartOptions = SimpleChartConfig.populateChartConfig(this.combinedChartOptions, this.simpleChartConfig);
            }
        }
        this.combinedChartPlugins.push(pluginDataLabels);
        /** @type {?} */
        var chartPlugin = {
            beforeInit: (/**
             * @param {?} chart
             * @param {?} options
             * @return {?}
             */
            function (chart, options) {
                chart.legend.afterFit = (/**
                 * @return {?}
                 */
                function () {
                    this.height = this.height + 20;
                });
            })
        };
        this.combinedChartPlugins.push(chartPlugin);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CombinedCategoryChartComponent.prototype.chartClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        /** @type {?} */
        var ctx = $('#combinedChart')[0].getContext("2d");
        /** @type {?} */
        var combinedChart = this.chart.chart;
        /** @type {?} */
        var base = combinedChart.chartArea.bottom;
        /** @type {?} */
        var height = combinedChart.height;
        /** @type {?} */
        var width = combinedChart.scales['x-axis-0'].width;
        /** @type {?} */
        var offset = $('#combinedChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            /** @type {?} */
            var count = combinedChart.scales['x-axis-0'].ticks.length;
            /** @type {?} */
            var paddingLeft = combinedChart.scales['x-axis-0'].paddingLeft;
            /** @type {?} */
            var paddingRight = combinedChart.scales['x-axis-0'].paddingRight;
            /** @type {?} */
            var xwidth = (width - paddingLeft - paddingRight) / count;
            /** @type {?} */
            var barIndex = (event.offsetX - paddingLeft - combinedChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                /** @type {?} */
                var dataLabel = this.combinedChartLabels[barIndex];
                this.labelClick.emit(dataLabel);
            }
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CombinedCategoryChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    CombinedCategoryChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-combined-category-chart',
                    template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bar'\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CombinedCategoryChartComponent.ctorParameters = function () { return []; };
    CombinedCategoryChartComponent.propDecorators = {
        combinedChartOptions: [{ type: Input }],
        combinedChartLabels: [{ type: Input }],
        combinedChartLegend: [{ type: Input }],
        combinedChartData: [{ type: Input }],
        combinedChartPlugins: [{ type: Input }],
        combinedChartColors: [{ type: Input }],
        simpleChartConfig: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }],
        labelClick: [{ type: Output }],
        chart: [{ type: ViewChild, args: [BaseChartDirective,] }]
    };
    return CombinedCategoryChartComponent;
}());
export { CombinedCategoryChartComponent };
if (false) {
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartOptions;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartLabels;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartLegend;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartData;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartPlugins;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.combinedChartColors;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.chartClick;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.chartHover;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.labelClick;
    /** @type {?} */
    CombinedCategoryChartComponent.prototype.chart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLWNhdGVnb3J5LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFTLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUczRDtJQXFCRTtRQWRTLHlCQUFvQixHQUFpQixFQUFFLENBQUM7UUFFeEMsd0JBQW1CLEdBQVksRUFBRSxDQUFDO1FBQ2xDLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixzQkFBaUIsR0FBb0IsRUFBRSxDQUFDO1FBQ3hDLHlCQUFvQixHQUFVLEVBQUUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBZSxFQUFFLENBQUM7UUFDckMsc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs3RCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUVyRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQ3pGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1lBQzdDLFdBQVcsR0FBRztZQUNoQixVQUFVOzs7OztZQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU87Z0JBQ2pDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTs7O2dCQUFHO29CQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxDQUFDLENBQUEsQ0FBQztZQUNKLENBQUMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVNLHFEQUFZOzs7O0lBQW5CLFVBQW9CLEVBQXNEO1lBQXBELGdCQUFLLEVBQUUsa0JBQU07UUFDakMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQzs7WUFFRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7WUFDN0MsYUFBYSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzs7WUFDckMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTTs7WUFDckMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNOztZQUM3QixLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLOztZQUM5QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUU7UUFHckUsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxNQUFNLEVBQUU7O2dCQUMzQixLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTs7Z0JBQ3JELFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVc7O2dCQUMxRCxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZOztnQkFDNUQsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUMsR0FBRyxLQUFLOztnQkFFckQsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNO1lBRTlGLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxFQUFFO2dCQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7b0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxxREFBWTs7OztJQUFuQixVQUFvQixFQUFzRDtZQUFwRCxnQkFBSyxFQUFFLGtCQUFNO1FBRWpDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFwRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDZoQkFBdUQ7O2lCQUV4RDs7Ozs7dUNBR0UsS0FBSztzQ0FFTCxLQUFLO3NDQUNMLEtBQUs7b0NBQ0wsS0FBSzt1Q0FDTCxLQUFLO3NDQUNMLEtBQUs7b0NBQ0wsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTt3QkFDTixTQUFTLFNBQUMsa0JBQWtCOztJQWtFL0IscUNBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQWhGWSw4QkFBOEI7OztJQUV6Qyw4REFBaUQ7O0lBRWpELDZEQUEyQzs7SUFDM0MsNkRBQW9DOztJQUNwQywyREFBaUQ7O0lBQ2pELDhEQUEwQzs7SUFDMUMsNkRBQThDOztJQUM5QywyREFBbUQ7O0lBRW5ELG9EQUE2RDs7SUFDN0Qsb0RBQTZEOztJQUM3RCxvREFBNkQ7O0lBQzdELCtDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBDaGFydFR5cGUsIENoYXJ0RGF0YVNldHMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBMYWJlbCwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb21iaW5lZC1jYXRlZ29yeS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iaW5lZC1jYXRlZ29yeS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbWJpbmVkLWNhdGVnb3J5LWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYmluZWRDYXRlZ29yeUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XG4gIFxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0TGFiZWxzOiBMYWJlbFtdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRQbHVnaW5zOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyBcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuYmFyQ2hhcnRPcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxuICAgICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zID0gU2ltcGxlQ2hhcnRDb25maWcucG9wdWxhdGVDaGFydENvbmZpZyh0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zLCBcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChwbHVnaW5EYXRhTGFiZWxzKTtcbiAgICBsZXQgY2hhcnRQbHVnaW4gPSB7ICAgICAgXG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbihjaGFydCwgb3B0aW9ucykge1xuICAgICAgICBjaGFydC5sZWdlbmQuYWZ0ZXJGaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMjA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChjaGFydFBsdWdpbik7XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuXG4gICAgdmFyIGN0eCA9ICQoJyNjb21iaW5lZENoYXJ0JylbMF0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHZhciBjb21iaW5lZENoYXJ0OiBhbnkgPSB0aGlzLmNoYXJ0LmNoYXJ0O1xuICAgIHZhciBiYXNlID0gY29tYmluZWRDaGFydC5jaGFydEFyZWEuYm90dG9tOyAgICBcbiAgICB2YXIgaGVpZ2h0ID0gY29tYmluZWRDaGFydC5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ud2lkdGg7XG4gICAgdmFyIG9mZnNldCA9ICQoJyNjb21iaW5lZENoYXJ0Jykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFxuXG4gICAgaWYgKGV2ZW50LnBhZ2VZID4gYmFzZSArIG9mZnNldCkge1xuICAgICAgdmFyIGNvdW50ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10udGlja3MubGVuZ3RoO1xuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ0xlZnQ7XG4gICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ1JpZ2h0O1xuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xuICAgICAgXG4gICAgICB2YXIgYmFySW5kZXggPSAoZXZlbnQub2Zmc2V0WCAtIHBhZGRpbmdMZWZ0IC0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3ktYXhpcy0wJ10ud2lkdGgpIC8geHdpZHRoO1xuXG4gICAgICBpZiAoYmFySW5kZXggPiAwICYmIGJhckluZGV4IDwgY291bnQpIHtcbiAgICAgICAgYmFySW5kZXggPSBNYXRoLmZsb29yKGJhckluZGV4KTtcbiAgICAgICAgdmFyIGRhdGFMYWJlbCA9IHRoaXMuY29tYmluZWRDaGFydExhYmVsc1tiYXJJbmRleF07XG4gICAgICAgIHRoaXMubGFiZWxDbGljay5lbWl0KGRhdGFMYWJlbCk7XG4gICAgICB9XG4gICAgfSAgXG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQge1xuICAgIFxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==