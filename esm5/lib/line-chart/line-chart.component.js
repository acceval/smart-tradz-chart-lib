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
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
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
            function (color) {
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
    LineChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.lineChartPlugins.push(pluginDataLabels);
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
        this.lineChartPlugins.push(chartPlugin);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LineChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['lineChartData']) {
            if (this.lineChartData == null) {
                return;
            }
            this.chart.update();
        }
    };
    /**
     * @return {?}
     */
    LineChartComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        this.chart.update();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    LineChartComponent.prototype.chartClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
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
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    LineChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    LineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-line-chart',
                    template: "<div style=\"display: block;\">\n  <canvas #chart id=\"lineChart\" baseChart \n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"      \n      [legend]=\"lineChartLegend\"\n      [chartType]=\"'line'\"\n      [plugins]=\"lineChartPlugins\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\">\n  </canvas>  \n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LineChartComponent.ctorParameters = function () { return []; };
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
    return LineChartComponent;
}());
export { LineChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdEO0lBcUJFO1FBZFMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUVwQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0zRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUU1RCxJQUFJLENBQUMsZUFBZSxD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QUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTt3QkFFTixTQUFTLFNBQUMsa0JBQWtCOztJQTBGL0IseUJBQUM7Q0FBQSxBQTdHRCxJQTZHQztTQXhHWSxrQkFBa0I7OztJQUU3Qiw4Q0FBNkM7O0lBQzdDLDZDQUFrQzs7SUFDbEMsNkNBQWdDOztJQUNoQywyQ0FBd0M7O0lBQ3hDLDZDQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0QywrQ0FBbUQ7O0lBRW5ELHdDQUE2RDs7SUFDN0Qsd0NBQTZEOztJQUM3RCx3Q0FBNkQ7O0lBRTdELG1DQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydERhdGFTZXRzLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0RGlyZWN0aXZlLCBMYWJlbCB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saW5lLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGxpbmVDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRMYWJlbHM6IExhYmVsW107XG4gIEBJbnB1dCgpIGxpbmVDaGFydExlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIGxpbmVDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXTsgIFxuICBASW5wdXQoKSBsaW5lQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgbGluZUNoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XG5cbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgXG4gICAgaWYgKCF0aGlzLmxpbmVDaGFydENvbG9ycyB8fCBPYmplY3Qua2V5cyh0aGlzLmxpbmVDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMubGluZUNoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xuXG4gICAgICB0aGlzLmxpbmVDaGFydENvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgY29sb3JbJ2ZpbGwnXSA9IGZhbHNlO1xuICAgICAgICBjb2xvclsnY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSddID0gJ21vbm90b25lJztcbiAgICAgICAgY29sb3JbJ2xpbmVUZW5zaW9uJ10gPSAxO1xuICAgICAgICBjb2xvclsncG9pbnRSYWRpdXMnXSA9IDM7XG4gICAgICAgIGNvbG9yWydwb2ludEhvdmVyUmFkaXVzJ10gPSAzO1xuICAgICAgfSk7ICBcbiAgICB9XG4gICAgICAgICAgXG4gICAgaWYgKCF0aGlzLmxpbmVDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5saW5lQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5saW5lQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLmxpbmVDaGFydE9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnICYmIE9iamVjdC5rZXlzKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpLmxlbmd0aCA+IDApIHsgICAgICAgXG4gICAgICAgIHRoaXMubGluZUNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5saW5lQ2hhcnRPcHRpb25zLCBcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGluZUNoYXJ0UGx1Z2lucy5wdXNoKHBsdWdpbkRhdGFMYWJlbHMpO1xuXG4gICAgbGV0IGNoYXJ0UGx1Z2luID0geyAgICAgIFxuICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24oY2hhcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgY2hhcnQubGVnZW5kLmFmdGVyRml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCArIDIwO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxpbmVDaGFydFBsdWdpbnMucHVzaChjaGFydFBsdWdpbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVDaGFydERhdGEnXSkge1xuICAgICAgaWYgKHRoaXMubGluZUNoYXJ0RGF0YSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuXG5cbiAgICB2YXIgY3R4ID0gJCgnI2xpbmVDaGFydCcpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgbGluZUNoYXJ0OiBhbnkgPSB0aGlzLmNoYXJ0LmNoYXJ0O1xuICAgIHZhciBiYXNlID0gbGluZUNoYXJ0LmNoYXJ0QXJlYS5ib3R0b207ICAgIFxuICAgIHZhciBoZWlnaHQgPSBsaW5lQ2hhcnQuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGxpbmVDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ud2lkdGg7XG4gICAgdmFyIG9mZnNldCA9ICQoJyNsaW5lQ2hhcnQnKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXG4gICAgaWYgKGV2ZW50LnBhZ2VZID4gYmFzZSArIG9mZnNldCkge1xuICAgICAgdmFyIGNvdW50ID0gbGluZUNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBsaW5lQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdMZWZ0O1xuICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGxpbmVDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ1JpZ2h0O1xuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xuICAgICAgXG4gICAgICB2YXIgYmFySW5kZXggPSAoZXZlbnQub2Zmc2V0WCAtIHBhZGRpbmdMZWZ0IC0gbGluZUNoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS53aWR0aCkgLyB4d2lkdGg7XG5cbiAgICAgIGlmIChiYXJJbmRleCA+IDAgJiYgYmFySW5kZXggPCBjb3VudCkge1xuICAgICAgICBiYXJJbmRleCA9IE1hdGguZmxvb3IoYmFySW5kZXgpO1xuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5saW5lQ2hhcnRMYWJlbHNbYmFySW5kZXhdO1xuICAgICAgICB0aGlzLmxhYmVsQ2xpY2suZW1pdChkYXRhTGFiZWwpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG59XG4iXX0=