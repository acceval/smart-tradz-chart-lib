/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.barChartOptions = {};
        this.barChartLabels = [];
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartPlugins = [];
        this.barChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.chartType = 'bar';
    }
    /**
     * @return {?}
     */
    BarChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.barChartColors || Object.keys(this.barChartColors).length == 0) {
            this.barChartColors = new GlobalChartColors().globalColors;
        }
        if (!this.barChartOptions || Object.keys(this.barChartOptions).length == 0) {
            this.barChartOptions = new GlobalChartOptions().barChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                if (!this.simpleChartConfig.isHorizontalBar) {
                    this.chartType = 'bar';
                }
                else {
                    this.chartType = 'horizontalBar';
                }
                this.barChartOptions = SimpleChartConfig.populateChartConfig(this.barChartOptions, this.simpleChartConfig);
            }
        }
        this.barChartPlugins.push(pluginDataLabels);
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
        this.barChartPlugins.push(chartPlugin);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BarChartComponent.prototype.chartClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        /** @type {?} */
        var ctx = $('#barChart')[0].getContext("2d");
        /** @type {?} */
        var barChart = this.chart.chart;
        /** @type {?} */
        var base = barChart.chartArea.bottom;
        /** @type {?} */
        var height = barChart.height;
        /** @type {?} */
        var width = barChart.scales['x-axis-0'].width;
        /** @type {?} */
        var offset = $('#barChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            /** @type {?} */
            var count = barChart.scales['x-axis-0'].ticks.length;
            /** @type {?} */
            var paddingLeft = barChart.scales['x-axis-0'].paddingLeft;
            /** @type {?} */
            var paddingRight = barChart.scales['x-axis-0'].paddingRight;
            /** @type {?} */
            var xwidth = (width - paddingLeft - paddingRight) / count;
            /** @type {?} */
            var barIndex = (event.offsetX - paddingLeft - barChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                /** @type {?} */
                var dataLabel = this.barChartLabels[barIndex];
                this.labelClick.emit(dataLabel);
            }
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BarChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    BarChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-bar-chart',
                    template: "\n    <div style=\"display: block\">\n      <canvas #chart id=\"barChart\" baseChart\n        [datasets]=\"barChartData\"\n        [labels]=\"barChartLabels\"\n        [options]=\"barChartOptions\"\n        [plugins]=\"barChartPlugins\"\n        [colors]=\"barChartColors\" \n        [legend]=\"barChartLegend\"\n        [chartType]=\"chartType\"\n        (chartHover)=\"chartHovered($event)\"\n        (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BarChartComponent.ctorParameters = function () { return []; };
    BarChartComponent.propDecorators = {
        barChartOptions: [{ type: Input }],
        barChartLabels: [{ type: Input }],
        barChartLegend: [{ type: Input }],
        barChartData: [{ type: Input }],
        barChartPlugins: [{ type: Input }],
        barChartColors: [{ type: Input }],
        simpleChartConfig: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }],
        labelClick: [{ type: Output }],
        chart: [{ type: ViewChild, args: [BaseChartDirective,] }]
    };
    return BarChartComponent;
}());
export { BarChartComponent };
if (false) {
    /** @type {?} */
    BarChartComponent.prototype.barChartOptions;
    /** @type {?} */
    BarChartComponent.prototype.barChartLabels;
    /** @type {?} */
    BarChartComponent.prototype.barChartLegend;
    /** @type {?} */
    BarChartComponent.prototype.barChartData;
    /** @type {?} */
    BarChartComponent.prototype.barChartPlugins;
    /** @type {?} */
    BarChartComponent.prototype.barChartColors;
    /** @type {?} */
    BarChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    BarChartComponent.prototype.chartClick;
    /** @type {?} */
    BarChartComponent.prototype.chartHover;
    /** @type {?} */
    BarChartComponent.prototype.labelClick;
    /** @type {?} */
    BarChartComponent.prototype.chart;
    /** @type {?} */
    BarChartComponent.prototype.chartType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxLQUFLLGdCQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBUyxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc3RDtJQXFCRTtRQWRTLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFDbkMsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBZSxFQUFFLENBQUE7UUFDL0Isc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxjQUFTLEdBQVcsS0FBSyxDQUFDO0lBRzFCLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMs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SW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnREYXRhU2V0cyB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCAqIGFzIHBsdWdpbkRhdGFMYWJlbHMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XG5pbXBvcnQgeyBMYWJlbCwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYmFyQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTsgIFxuICBASW5wdXQoKSBiYXJDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xuICBASW5wdXQoKSBiYXJDaGFydExlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIGJhckNoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdID0gW107XG4gIEBJbnB1dCgpIGJhckNoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgYmFyQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXVxuICBASW5wdXQoKSBzaW1wbGVDaGFydENvbmZpZzogU2ltcGxlQ2hhcnRDb25maWcgPSB7fTtcblxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XG4gIGNoYXJ0VHlwZTogc3RyaW5nID0gJ2Jhcic7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICghdGhpcy5iYXJDaGFydENvbG9ycyB8fCBPYmplY3Qua2V5cyh0aGlzLmJhckNoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5iYXJDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYmFyQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuYmFyQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5iYXJDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuYmFyQ2hhcnRPcHRpb25zO1xuICAgICAgXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICghdGhpcy5zaW1wbGVDaGFydENvbmZpZy5pc0hvcml6b250YWxCYXIpIHtcbiAgICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9ICdiYXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhcnRUeXBlID0gJ2hvcml6b250YWxCYXInO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFyQ2hhcnRPcHRpb25zID0gU2ltcGxlQ2hhcnRDb25maWcucG9wdWxhdGVDaGFydENvbmZpZyh0aGlzLmJhckNoYXJ0T3B0aW9ucywgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgICBcbiAgICB0aGlzLmJhckNoYXJ0UGx1Z2lucy5wdXNoKHBsdWdpbkRhdGFMYWJlbHMpO1xuICAgIGxldCBjaGFydFBsdWdpbiA9IHsgICAgICBcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGNoYXJ0LCBvcHRpb25zKSB7XG4gICAgICAgIGNoYXJ0LmxlZ2VuZC5hZnRlckZpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAyMDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iYXJDaGFydFBsdWdpbnMucHVzaChjaGFydFBsdWdpbik7XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuXG4gICAgdmFyIGN0eCA9ICQoJyNiYXJDaGFydCcpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgYmFyQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XG4gICAgdmFyIGJhc2UgPSBiYXJDaGFydC5jaGFydEFyZWEuYm90dG9tOyAgICBcbiAgICB2YXIgaGVpZ2h0ID0gYmFyQ2hhcnQuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS53aWR0aDtcbiAgICB2YXIgb2Zmc2V0ID0gJCgnI2JhckNoYXJ0Jykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFxuXG4gICAgaWYgKGV2ZW50LnBhZ2VZID4gYmFzZSArIG9mZnNldCkge1xuICAgICAgdmFyIGNvdW50ID0gYmFyQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnRpY2tzLmxlbmd0aDtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBiYXJDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ1JpZ2h0O1xuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xuICAgICAgXG4gICAgICB2YXIgYmFySW5kZXggPSAoZXZlbnQub2Zmc2V0WCAtIHBhZGRpbmdMZWZ0IC0gYmFyQ2hhcnQuc2NhbGVzWyd5LWF4aXMtMCddLndpZHRoKSAvIHh3aWR0aDtcblxuICAgICAgaWYgKGJhckluZGV4ID4gMCAmJiBiYXJJbmRleCA8IGNvdW50KSB7XG4gICAgICAgIGJhckluZGV4ID0gTWF0aC5mbG9vcihiYXJJbmRleCk7XG4gICAgICAgIHZhciBkYXRhTGFiZWwgPSB0aGlzLmJhckNoYXJ0TGFiZWxzW2JhckluZGV4XTtcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHtcbiAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==