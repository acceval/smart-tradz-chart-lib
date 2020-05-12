/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import * as pluginAnnotations from 'chartjs-plugin-datalabels';
import { SimpleChartConfig } from '../simple-chart-config';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
var CombinedMeasureChartComponent = /** @class */ (function () {
    function CombinedMeasureChartComponent() {
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
        if (!this.combinedChartColors || Object.keys(this.combinedChartColors).length == 0) {
            this.combinedChartColors = new GlobalChartColors().globalColors;
        }
        if (!this.combinedChartOptions || Object.keys(this.combinedChartOptions).length == 0) {
            this.combinedChartOptions = new GlobalChartOptions().combinedChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.combinedChartOptions = SimpleChartConfig.populateChartConfig(this.combinedChartOptions, this.simpleChartConfig);
            }
        }
    }
    /**
     * @return {?}
     */
    CombinedMeasureChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.combinedChartPlugins.push(pluginAnnotations);
        this.combinedChartPlugins.push(ChartAnnotation);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CombinedMeasureChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['combinedChartData']) {
            if (this.combinedChartData == null) {
                return;
            }
            this.chart.update();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    CombinedMeasureChartComponent.prototype.chartClicked = /**
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
    CombinedMeasureChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    CombinedMeasureChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-combined-measure-chart',
                    template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bubble'\"\n          [plugins]=\"combinedChartPlugins\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CombinedMeasureChartComponent.ctorParameters = function () { return []; };
    CombinedMeasureChartComponent.propDecorators = {
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
    return CombinedMeasureChartComponent;
}());
export { CombinedMeasureChartComponent };
if (false) {
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartOptions;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartLabels;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartLegend;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartData;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartPlugins;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.combinedChartColors;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.chartClick;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.chartHover;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.labelClick;
    /** @type {?} */
    CombinedMeasureChartComponent.prototype.chart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQVMsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sS0FBSyxlQUFlLE1BQU0sMkJBQTJCLENBQUM7QUFHN0Q7SUFxQkU7UUFkUyx5QkFBb0IsR0FBaUIsRUFBRSxDQUFDO1FBRXhDLHdCQUFtQixHQUFZLEVBQUUsQ0FBQztRQUNsQyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0Isc0JBQWlCLEdBQW9CLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFDakMsd0JBQW1CLEdBQWUsRUFBRSxDQUFDO1FBQ3JDLHNCQUFpQixHQUFzQixFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBRTFFLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFDekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxnREFBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELG1EQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRTtnQkFDbEMsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRU0sb0RBQVk7Ozs7SUFBbkIsVUFBb0IsRUFBc0Q7WUFBcEQsZ0JBQUssRUFBRSxrQkFBTTtRQUNqQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDOztZQUVHLEdBQUcsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztZQUM3QyxhQUFhLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOztZQUNyQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNOztZQUNyQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU07O1lBQzdCLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7O1lBQzlDLE1BQU0sR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUdyRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRTs7Z0JBQzNCLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOztnQkFDckQsV0FBVyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVzs7Z0JBQzFELFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVk7O2dCQUM1RCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxHQUFHLEtBQUs7O2dCQUVyRCxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU07WUFFOUYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUU7Z0JBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVNLG9EQUFZOzs7O0lBQW5CLFVBQW9CLEVBQXNEO1lBQXBELGdCQUFLLEVBQUUsa0JBQU07UUFFakMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsOGtCQUFzRDs7aUJBRXZEOzs7Ozt1Q0FHRSxLQUFLO3NDQUVMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3VDQUNMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzZCQUVMLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNO3dCQUNOLFNBQVMsU0FBQyxrQkFBa0I7O0lBb0UvQixvQ0FBQztDQUFBLEFBdkZELElBdUZDO1NBbEZZLDZCQUE2Qjs7O0lBRXhDLDZEQUFpRDs7SUFFakQsNERBQTJDOztJQUMzQyw0REFBb0M7O0lBQ3BDLDBEQUFpRDs7SUFDakQsNkRBQTBDOztJQUMxQyw0REFBOEM7O0lBQzlDLDBEQUFtRDs7SUFFbkQsbURBQTZEOztJQUM3RCxtREFBNkQ7O0lBQzdELG1EQUE2RDs7SUFDN0QsOENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGFiZWwsIEJhc2VDaGFydERpcmVjdGl2ZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5Bbm5vdGF0aW9ucyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBDaGFydEFubm90YXRpb24gZnJvbSAnY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvbic7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb21iaW5lZC1tZWFzdXJlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21iaW5lZC1tZWFzdXJlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29tYmluZWRDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMYWJlbHM6IExhYmVsW10gPSBbXTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydExlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnREYXRhOiBDaGFydERhdGFTZXRzW10gPSBbXTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydFBsdWdpbnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XG5cbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChCYXNlQ2hhcnREaXJlY3RpdmUpIHB1YmxpYyBjaGFydDogQmFzZUNoYXJ0RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuY29tYmluZWRDaGFydE9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnICYmIE9iamVjdC5rZXlzKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyxcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChwbHVnaW5Bbm5vdGF0aW9ucyk7XG4gICAgdGhpcy5jb21iaW5lZENoYXJ0UGx1Z2lucy5wdXNoKENoYXJ0QW5ub3RhdGlvbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbWJpbmVkQ2hhcnREYXRhJ10pIHtcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkQ2hhcnREYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7XG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cblxuICAgIHZhciBjdHggPSAkKCcjY29tYmluZWRDaGFydCcpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgY29tYmluZWRDaGFydDogYW55ID0gdGhpcy5jaGFydC5jaGFydDtcbiAgICB2YXIgYmFzZSA9IGNvbWJpbmVkQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTtcbiAgICB2YXIgaGVpZ2h0ID0gY29tYmluZWRDaGFydC5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ud2lkdGg7XG4gICAgdmFyIG9mZnNldCA9ICQoJyNjb21iaW5lZENoYXJ0Jykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cbiAgICBpZiAoZXZlbnQucGFnZVkgPiBiYXNlICsgb2Zmc2V0KSB7XG4gICAgICB2YXIgY291bnQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nUmlnaHQ7XG4gICAgICB2YXIgeHdpZHRoID0gKHdpZHRoIC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQpIC8gY291bnQ7XG5cbiAgICAgIHZhciBiYXJJbmRleCA9IChldmVudC5vZmZzZXRYIC0gcGFkZGluZ0xlZnQgLSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS53aWR0aCkgLyB4d2lkdGg7XG5cbiAgICAgIGlmIChiYXJJbmRleCA+IDAgJiYgYmFySW5kZXggPCBjb3VudCkge1xuICAgICAgICBiYXJJbmRleCA9IE1hdGguZmxvb3IoYmFySW5kZXgpO1xuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5jb21iaW5lZENoYXJ0TGFiZWxzW2JhckluZGV4XTtcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQge1xuXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxufVxuIl19