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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQVMsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNEO0lBcUJFO1FBZFMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUV4Qyx3QkFBbUIsR0FBWSxFQUFFLENBQUM7UUFDbEMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLHNCQUFpQixHQUFvQixFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQUNyQyxzQkFBaUIsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzNELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLElBQUks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QUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sb0RBQVk7Ozs7SUFBbkIsVUFBb0IsRUFBc0Q7WUFBcEQsZ0JBQUssRUFBRSxrQkFBTTtRQUVqQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBckZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyw4a0JBQXNEOztpQkFFdkQ7Ozs7O3VDQUdFLEtBQUs7c0NBRUwsS0FBSztzQ0FDTCxLQUFLO29DQUNMLEtBQUs7dUNBQ0wsS0FBSztzQ0FDTCxLQUFLO29DQUNMLEtBQUs7NkJBRUwsTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLGtCQUFrQjs7SUFtRS9CLG9DQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0FqRlksNkJBQTZCOzs7SUFFeEMsNkRBQWlEOztJQUVqRCw0REFBMkM7O0lBQzNDLDREQUFvQzs7SUFDcEMsMERBQWlEOztJQUNqRCw2REFBMEM7O0lBQzFDLDREQUE4Qzs7SUFDOUMsMERBQW1EOztJQUVuRCxtREFBNkQ7O0lBQzdELG1EQUE2RDs7SUFDN0QsbURBQTZEOztJQUM3RCw4Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBDaGFydFR5cGUsIENoYXJ0RGF0YVNldHMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBMYWJlbCwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmltcG9ydCAqIGFzIHBsdWdpbkFubm90YXRpb25zIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbWJpbmVkLW1lYXN1cmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XG4gIFxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0TGFiZWxzOiBMYWJlbFtdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRQbHVnaW5zOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydENvbG9ycyB8fCBPYmplY3Qua2V5cyh0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgPSBuZXcgR2xvYmFsQ2hhcnRDb2xvcnMoKS5nbG9iYWxDb2xvcnM7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5jb21iaW5lZENoYXJ0T3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkgeyAgICAgICBcbiAgICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucywgXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5jb21iaW5lZENoYXJ0UGx1Z2lucy5wdXNoKHBsdWdpbkFubm90YXRpb25zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snY29tYmluZWRDaGFydERhdGEnXSkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRDaGFydERhdGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cblxuICAgIHZhciBjdHggPSAkKCcjY29tYmluZWRDaGFydCcpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgY29tYmluZWRDaGFydDogYW55ID0gdGhpcy5jaGFydC5jaGFydDtcbiAgICB2YXIgYmFzZSA9IGNvbWJpbmVkQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTsgICAgXG4gICAgdmFyIGhlaWdodCA9IGNvbWJpbmVkQ2hhcnQuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xuICAgIHZhciBvZmZzZXQgPSAkKCcjY29tYmluZWRDaGFydCcpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICBcblxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcbiAgICAgIHZhciBjb3VudCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnRpY2tzLmxlbmd0aDtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdMZWZ0O1xuICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcbiAgICAgIFxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd5LWF4aXMtMCddLndpZHRoKSAvIHh3aWR0aDtcblxuICAgICAgaWYgKGJhckluZGV4ID4gMCAmJiBiYXJJbmRleCA8IGNvdW50KSB7XG4gICAgICAgIGJhckluZGV4ID0gTWF0aC5mbG9vcihiYXJJbmRleCk7XG4gICAgICAgIHZhciBkYXRhTGFiZWwgPSB0aGlzLmNvbWJpbmVkQ2hhcnRMYWJlbHNbYmFySW5kZXhdO1xuICAgICAgICB0aGlzLmxhYmVsQ2xpY2suZW1pdChkYXRhTGFiZWwpO1xuICAgICAgfVxuICAgIH0gIFxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHtcbiAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG59XG4iXX0=