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
export class CombinedMeasureChartComponent {
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
    ngOnInit() {
        this.combinedChartPlugins.push(pluginAnnotations);
        this.combinedChartPlugins.push(ChartAnnotation);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['combinedChartData']) {
            if (this.combinedChartData == null) {
                return;
            }
            this.chart.update();
        }
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
CombinedMeasureChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-combined-measure-chart',
                template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bubble'\"\n          [plugins]=\"combinedChartPlugins\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                styles: [""]
            }] }
];
/** @nocollapse */
CombinedMeasureChartComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQVMsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sS0FBSyxlQUFlLE1BQU0sMkJBQTJCLENBQUM7QUFRN0QsTUFBTSxPQUFPLDZCQUE2QjtJQWdCeEM7UUFkUyx5QkFBb0IsR0FBaUIsRUFBRSxDQUFDO1FBRXhDLHdCQUFtQixHQUFZLEVBQUUsQ0FBQztRQUNsQyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0Isc0JBQWlCLEdBQW9CLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFDakMsd0JBQW1CLEdBQWUsRUFBRSxDQUFDO1FBQ3JDLHNCQUFpQixHQUFzQixFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxN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RTtnQkFDcEMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFFeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsOGtCQUFzRDs7YUFFdkQ7Ozs7O21DQUdFLEtBQUs7a0NBRUwsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7bUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07b0JBQ04sU0FBUyxTQUFDLGtCQUFrQjs7OztJQVo3Qiw2REFBaUQ7O0lBRWpELDREQUEyQzs7SUFDM0MsNERBQW9DOztJQUNwQywwREFBaUQ7O0lBQ2pELDZEQUEwQzs7SUFDMUMsNERBQThDOztJQUM5QywwREFBbUQ7O0lBRW5ELG1EQUE2RDs7SUFDN0QsbURBQTZEOztJQUM3RCxtREFBNkQ7O0lBQzdELDhDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnMsIENoYXJ0VHlwZSwgQ2hhcnREYXRhU2V0cyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IExhYmVsLCBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCAqIGFzIHBsdWdpbkRhdGFMYWJlbHMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgcGx1Z2luQW5ub3RhdGlvbnMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xuaW1wb3J0ICogYXMgQ2hhcnRBbm5vdGF0aW9uIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWFubm90YXRpb24nO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tYmluZWQtbWVhc3VyZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21iaW5lZC1tZWFzdXJlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbWJpbmVkTWVhc3VyZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcblxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0TGFiZWxzOiBMYWJlbFtdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdID0gW107XG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRQbHVnaW5zOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIGlmICghdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMuY29tYmluZWRDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuY29tYmluZWRDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLmNvbWJpbmVkQ2hhcnRPcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMsXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmNvbWJpbmVkQ2hhcnRQbHVnaW5zLnB1c2gocGx1Z2luQW5ub3RhdGlvbnMpO1xuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChDaGFydEFubm90YXRpb24pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydjb21iaW5lZENoYXJ0RGF0YSddKSB7XG4gICAgICBpZiAodGhpcy5jb21iaW5lZENoYXJ0RGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQge1xuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gJCgnI2NvbWJpbmVkQ2hhcnQnKVswXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGNvbWJpbmVkQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XG4gICAgdmFyIGJhc2UgPSBjb21iaW5lZENoYXJ0LmNoYXJ0QXJlYS5ib3R0b207XG4gICAgdmFyIGhlaWdodCA9IGNvbWJpbmVkQ2hhcnQuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xuICAgIHZhciBvZmZzZXQgPSAkKCcjY29tYmluZWRDaGFydCcpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXG4gICAgaWYgKGV2ZW50LnBhZ2VZID4gYmFzZSArIG9mZnNldCkge1xuICAgICAgdmFyIGNvdW50ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10udGlja3MubGVuZ3RoO1xuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ0xlZnQ7XG4gICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ1JpZ2h0O1xuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xuXG4gICAgICB2YXIgYmFySW5kZXggPSAoZXZlbnQub2Zmc2V0WCAtIHBhZGRpbmdMZWZ0IC0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3ktYXhpcy0wJ10ud2lkdGgpIC8geHdpZHRoO1xuXG4gICAgICBpZiAoYmFySW5kZXggPiAwICYmIGJhckluZGV4IDwgY291bnQpIHtcbiAgICAgICAgYmFySW5kZXggPSBNYXRoLmZsb29yKGJhckluZGV4KTtcbiAgICAgICAgdmFyIGRhdGFMYWJlbCA9IHRoaXMuY29tYmluZWRDaGFydExhYmVsc1tiYXJJbmRleF07XG4gICAgICAgIHRoaXMubGFiZWxDbGljay5lbWl0KGRhdGFMYWJlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHtcblxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==