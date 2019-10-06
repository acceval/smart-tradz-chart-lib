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
export class CombinedCategoryChartComponent {
    constructor() {
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
    ngOnInit() {
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
        let chartPlugin = {
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
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    chartClicked({ event, active }) {
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
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    chartHovered({ event, active }) {
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    }
}
CombinedCategoryChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-combined-category-chart',
                template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bar'\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                styles: [""]
            }] }
];
/** @nocollapse */
CombinedCategoryChartComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLWNhdGVnb3J5LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFTLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVEzRCxNQUFNLE9BQU8sOEJBQThCO0lBZ0J6QztRQWRTLHlCQUFvQixHQUFpQixFQUFFLENBQUM7UUFFeEMsd0JBQW1CLEdBQVksRUFBRSxDQUFDO1FBQ2xDLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixzQkFBaUIsR0FBb0IsRUFBRSxDQUFDO1FBQ3hDLHlCQUFvQixHQUFVLEVBQUUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBZSxFQUFFLENBQUM7UUFDckMsc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUs3RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDcEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFFckUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUN6RixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUMzQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztZQUM3QyxXQUFXLEdBQUc7WUFDaEIsVUFBVTs7Ozs7WUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPO2dCQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7OztnQkFBRztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakMsQ0FBQyxDQUFBLENBQUM7WUFDSixDQUFDLENBQUE7U0FDRjtRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QztRQUN4RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDOztZQUVHLEdBQUcsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztZQUM3QyxhQUFhLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOztZQUNyQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNOztZQUNyQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU07O1lBQzdCLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7O1lBQzlDLE1BQU0sR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUdyRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU0sRUFBRTs7Z0JBQzNCLEtBQUssR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOztnQkFDckQsV0FBVyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVzs7Z0JBQzFELFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVk7O2dCQUM1RCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxHQUFHLEtBQUs7O2dCQUVyRCxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU07WUFFOUYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUU7Z0JBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXVDO1FBRXhFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDZoQkFBdUQ7O2FBRXhEOzs7OzttQ0FHRSxLQUFLO2tDQUVMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLO21DQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUVMLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO29CQUNOLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFaN0IsOERBQWlEOztJQUVqRCw2REFBMkM7O0lBQzNDLDZEQUFvQzs7SUFDcEMsMkRBQWlEOztJQUNqRCw4REFBMEM7O0lBQzFDLDZEQUE4Qzs7SUFDOUMsMkRBQW1EOztJQUVuRCxvREFBNkQ7O0lBQzdELG9EQUE2RDs7SUFDN0Qsb0RBQTZEOztJQUM3RCwrQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGFiZWwsIEJhc2VDaGFydERpcmVjdGl2ZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tYmluZWQtY2F0ZWdvcnktY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21iaW5lZC1jYXRlZ29yeS1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29tYmluZWRDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuICBcbiAgQElucHV0KCkgY29tYmluZWRDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0TGVnZW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydENvbG9yczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBzaW1wbGVDaGFydENvbmZpZzogU2ltcGxlQ2hhcnRDb25maWcgPSB7fTtcblxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICAgIGlmICghdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMuY29tYmluZWRDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuY29tYmluZWRDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLmJhckNoYXJ0T3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkgeyAgICAgICBcbiAgICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucywgXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgICB0aGlzLmNvbWJpbmVkQ2hhcnRQbHVnaW5zLnB1c2gocGx1Z2luRGF0YUxhYmVscyk7XG4gICAgbGV0IGNoYXJ0UGx1Z2luID0geyAgICAgIFxuICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24oY2hhcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgY2hhcnQubGVnZW5kLmFmdGVyRml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCArIDIwO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbWJpbmVkQ2hhcnRQbHVnaW5zLnB1c2goY2hhcnRQbHVnaW4pO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cblxuICAgIHZhciBjdHggPSAkKCcjY29tYmluZWRDaGFydCcpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgY29tYmluZWRDaGFydDogYW55ID0gdGhpcy5jaGFydC5jaGFydDtcbiAgICB2YXIgYmFzZSA9IGNvbWJpbmVkQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTsgICAgXG4gICAgdmFyIGhlaWdodCA9IGNvbWJpbmVkQ2hhcnQuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xuICAgIHZhciBvZmZzZXQgPSAkKCcjY29tYmluZWRDaGFydCcpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICBcblxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcbiAgICAgIHZhciBjb3VudCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnRpY2tzLmxlbmd0aDtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdMZWZ0O1xuICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcbiAgICAgIFxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd5LWF4aXMtMCddLndpZHRoKSAvIHh3aWR0aDtcblxuICAgICAgaWYgKGJhckluZGV4ID4gMCAmJiBiYXJJbmRleCA8IGNvdW50KSB7XG4gICAgICAgIGJhckluZGV4ID0gTWF0aC5mbG9vcihiYXJJbmRleCk7XG4gICAgICAgIHZhciBkYXRhTGFiZWwgPSB0aGlzLmNvbWJpbmVkQ2hhcnRMYWJlbHNbYmFySW5kZXhdO1xuICAgICAgICB0aGlzLmxhYmVsQ2xpY2suZW1pdChkYXRhTGFiZWwpO1xuICAgICAgfVxuICAgIH0gIFxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHtcbiAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG59XG4iXX0=