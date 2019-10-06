/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
export class LineChartComponent {
    constructor() {
        this.lineChartOptions = {};
        this.lineChartLegend = true;
        this.lineChartColors = [];
        this.lineChartPlugins = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        if (!this.lineChartColors || Object.keys(this.lineChartColors).length == 0) {
            this.lineChartColors = new GlobalChartColors().globalColors;
            this.lineChartColors.forEach((/**
             * @param {?} color
             * @return {?}
             */
            color => {
                color['fill'] = false;
                color['cubicInterpolationMode'] = 'monotone';
                color['lineTension'] = 1;
                color['pointRadius'] = 3;
                color['pointHoverRadius'] = 3;
            }));
        }
        if (!this.lineChartOptions || Object.keys(this.lineChartOptions).length == 0) {
            this.lineChartOptions = new GlobalChartOptions().lineChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.lineChartOptions = SimpleChartConfig.populateChartConfig(this.lineChartOptions, this.simpleChartConfig);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lineChartPlugins.push(pluginDataLabels);
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
        this.lineChartPlugins.push(chartPlugin);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['lineChartData']) {
            if (this.lineChartData == null) {
                return;
            }
            this.chart.update();
        }
    }
    /**
     * @return {?}
     */
    update() {
        this.chart.update();
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
        var ctx = $('#lineChart')[0].getContext("2d");
        /** @type {?} */
        var lineChart = this.chart.chart;
        /** @type {?} */
        var base = lineChart.chartArea.bottom;
        /** @type {?} */
        var height = lineChart.height;
        /** @type {?} */
        var width = lineChart.scales['x-axis-0'].width;
        /** @type {?} */
        var offset = $('#lineChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            /** @type {?} */
            var count = lineChart.scales['x-axis-0'].ticks.length;
            /** @type {?} */
            var paddingLeft = lineChart.scales['x-axis-0'].paddingLeft;
            /** @type {?} */
            var paddingRight = lineChart.scales['x-axis-0'].paddingRight;
            /** @type {?} */
            var xwidth = (width - paddingLeft - paddingRight) / count;
            /** @type {?} */
            var barIndex = (event.offsetX - paddingLeft - lineChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                /** @type {?} */
                var dataLabel = this.lineChartLabels[barIndex];
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
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-line-chart',
                template: "<div style=\"display: block;\">\n  <canvas #chart id=\"lineChart\" baseChart \n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"      \n      [legend]=\"lineChartLegend\"\n      [chartType]=\"'line'\"\n      [plugins]=\"lineChartPlugins\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\">\n  </canvas>  \n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
LineChartComponent.ctorParameters = () => [];
LineChartComponent.propDecorators = {
    lineChartOptions: [{ type: Input }],
    lineChartLabels: [{ type: Input }],
    lineChartLegend: [{ type: Input }],
    lineChartData: [{ type: Input }],
    lineChartColors: [{ type: Input }],
    lineChartPlugins: [{ type: Input }],
    simpleChartConfig: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }],
    labelClick: [{ type: Output }],
    chart: [{ type: ViewChild, args: [BaseChartDirective,] }]
};
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.lineChartOptions;
    /** @type {?} */
    LineChartComponent.prototype.lineChartLabels;
    /** @type {?} */
    LineChartComponent.prototype.lineChartLegend;
    /** @type {?} */
    LineChartComponent.prototype.lineChartData;
    /** @type {?} */
    LineChartComponent.prototype.lineChartColors;
    /** @type {?} */
    LineChartComponent.prototype.lineChartPlugins;
    /** @type {?} */
    LineChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    LineChartComponent.prototype.chartClick;
    /** @type {?} */
    LineChartComponent.prototype.chartHover;
    /** @type {?} */
    LineChartComponent.prototype.labelClick;
    /** @type {?} */
    LineChartComponent.prototype.chart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUTdELE1BQU0sT0FBTyxrQkFBa0I7SUFnQjdCO1FBZFMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUVwQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0zRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUU1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LE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO29CQUVOLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFaN0IsOENBQTZDOztJQUM3Qyw2Q0FBa0M7O0lBQ2xDLDZDQUFnQzs7SUFDaEMsMkNBQXdDOztJQUN4Qyw2Q0FBMEM7O0lBQzFDLDhDQUFzQzs7SUFDdEMsK0NBQW1EOztJQUVuRCx3Q0FBNkQ7O0lBQzdELHdDQUE2RDs7SUFDN0Qsd0NBQTZEOztJQUU3RCxtQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnREYXRhU2V0cywgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IEJhc2VDaGFydERpcmVjdGl2ZSwgTGFiZWwgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGluZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBsaW5lQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcbiAgQElucHV0KCkgbGluZUNoYXJ0TGFiZWxzOiBMYWJlbFtdO1xuICBASW5wdXQoKSBsaW5lQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBsaW5lQ2hhcnREYXRhOiBDaGFydERhdGFTZXRzW107ICBcbiAgQElucHV0KCkgbGluZUNoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIGxpbmVDaGFydFBsdWdpbnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChCYXNlQ2hhcnREaXJlY3RpdmUpIHB1YmxpYyBjaGFydDogQmFzZUNoYXJ0RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICAgIGlmICghdGhpcy5saW5lQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5saW5lQ2hhcnRDb2xvcnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmxpbmVDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcblxuICAgICAgdGhpcy5saW5lQ2hhcnRDb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgIGNvbG9yWydmaWxsJ10gPSBmYWxzZTtcbiAgICAgICAgY29sb3JbJ2N1YmljSW50ZXJwb2xhdGlvbk1vZGUnXSA9ICdtb25vdG9uZSc7XG4gICAgICAgIGNvbG9yWydsaW5lVGVuc2lvbiddID0gMTtcbiAgICAgICAgY29sb3JbJ3BvaW50UmFkaXVzJ10gPSAzO1xuICAgICAgICBjb2xvclsncG9pbnRIb3ZlclJhZGl1cyddID0gMztcbiAgICAgIH0pOyAgXG4gICAgfVxuICAgICAgICAgIFxuICAgIGlmICghdGhpcy5saW5lQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMubGluZUNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMubGluZUNoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5saW5lQ2hhcnRPcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxuICAgICAgICB0aGlzLmxpbmVDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMubGluZUNoYXJ0T3B0aW9ucywgXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbmVDaGFydFBsdWdpbnMucHVzaChwbHVnaW5EYXRhTGFiZWxzKTtcblxuICAgIGxldCBjaGFydFBsdWdpbiA9IHsgICAgICBcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGNoYXJ0LCBvcHRpb25zKSB7XG4gICAgICAgIGNoYXJ0LmxlZ2VuZC5hZnRlckZpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAyMDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5saW5lQ2hhcnRQbHVnaW5zLnB1c2goY2hhcnRQbHVnaW4pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydsaW5lQ2hhcnREYXRhJ10pIHtcbiAgICAgIGlmICh0aGlzLmxpbmVDaGFydERhdGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cblxuXG4gICAgdmFyIGN0eCA9ICQoJyNsaW5lQ2hhcnQnKVswXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGxpbmVDaGFydDogYW55ID0gdGhpcy5jaGFydC5jaGFydDtcbiAgICB2YXIgYmFzZSA9IGxpbmVDaGFydC5jaGFydEFyZWEuYm90dG9tOyAgICBcbiAgICB2YXIgaGVpZ2h0ID0gbGluZUNoYXJ0LmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBsaW5lQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xuICAgIHZhciBvZmZzZXQgPSAkKCcjbGluZUNoYXJ0Jykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcbiAgICAgIHZhciBjb3VudCA9IGxpbmVDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10udGlja3MubGVuZ3RoO1xuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gbGluZUNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBsaW5lQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcbiAgICAgIFxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGxpbmVDaGFydC5zY2FsZXNbJ3ktYXhpcy0wJ10ud2lkdGgpIC8geHdpZHRoO1xuXG4gICAgICBpZiAoYmFySW5kZXggPiAwICYmIGJhckluZGV4IDwgY291bnQpIHtcbiAgICAgICAgYmFySW5kZXggPSBNYXRoLmZsb29yKGJhckluZGV4KTtcbiAgICAgICAgdmFyIGRhdGFMYWJlbCA9IHRoaXMubGluZUNoYXJ0TGFiZWxzW2JhckluZGV4XTtcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxufVxuIl19