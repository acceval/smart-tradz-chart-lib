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
export class BarChartComponent {
    constructor() {
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
    ngOnInit() {
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
        this.barChartPlugins.push(chartPlugin);
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
BarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-bar-chart',
                template: "\n    <div style=\"display: block\">\n      <canvas #chart id=\"barChart\" baseChart\n        [datasets]=\"barChartData\"\n        [labels]=\"barChartLabels\"\n        [options]=\"barChartOptions\"\n        [plugins]=\"barChartPlugins\"\n        [colors]=\"barChartColors\" \n        [legend]=\"barChartLegend\"\n        [chartType]=\"chartType\"\n        (chartHover)=\"chartHovered($event)\"\n        (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BarChartComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxLQUFLLGdCQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBUyxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVE3RCxNQUFNLE9BQU8saUJBQWlCO0lBZ0I1QjtRQWRTLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFDbkMsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBZSxFQUFFLENBQUE7UUFDL0Isc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxjQUFTLEdBQVcsS0FBSyxDQUFDO0lBRzFCLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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LENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNO1lBRXpGLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxFQUFFO2dCQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7b0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUVILENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFFeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG9lQUF5Qzs7YUFFMUM7Ozs7OzhCQUdFLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07b0JBQ04sU0FBUyxTQUFDLGtCQUFrQjs7OztJQVg3Qiw0Q0FBNEM7O0lBQzVDLDJDQUFzQzs7SUFDdEMsMkNBQStCOztJQUMvQix5Q0FBNEM7O0lBQzVDLDRDQUFxQzs7SUFDckMsMkNBQXdDOztJQUN4Qyw4Q0FBbUQ7O0lBRW5ELHVDQUE2RDs7SUFDN0QsdUNBQTZEOztJQUM3RCx1Q0FBNkQ7O0lBQzdELGtDQUFnRTs7SUFDaEUsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnMsIENoYXJ0RGF0YVNldHMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xuaW1wb3J0IHsgTGFiZWwsIEJhc2VDaGFydERpcmVjdGl2ZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGJhckNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307ICBcbiAgQElucHV0KCkgYmFyQ2hhcnRMYWJlbHM6IExhYmVsW10gPSBbXTtcbiAgQElucHV0KCkgYmFyQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBiYXJDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXSA9IFtdO1xuICBASW5wdXQoKSBiYXJDaGFydFBsdWdpbnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGJhckNoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW11cbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XG5cbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChCYXNlQ2hhcnREaXJlY3RpdmUpIHB1YmxpYyBjaGFydDogQmFzZUNoYXJ0RGlyZWN0aXZlO1xuICBjaGFydFR5cGU6IHN0cmluZyA9ICdiYXInO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuYmFyQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5iYXJDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYmFyQ2hhcnRDb2xvcnMgPSBuZXcgR2xvYmFsQ2hhcnRDb2xvcnMoKS5nbG9iYWxDb2xvcnM7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmJhckNoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLmJhckNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYmFyQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLmJhckNoYXJ0T3B0aW9ucztcbiAgICAgIFxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoIXRoaXMuc2ltcGxlQ2hhcnRDb25maWcuaXNIb3Jpem9udGFsQmFyKSB7XG4gICAgICAgICAgdGhpcy5jaGFydFR5cGUgPSAnYmFyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9ICdob3Jpem9udGFsQmFyJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhckNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5iYXJDaGFydE9wdGlvbnMsIHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpO1xuICAgICAgfVxuICAgIH0gICAgXG4gICAgXG4gICAgdGhpcy5iYXJDaGFydFBsdWdpbnMucHVzaChwbHVnaW5EYXRhTGFiZWxzKTtcbiAgICBsZXQgY2hhcnRQbHVnaW4gPSB7ICAgICAgXG4gICAgICBiZWZvcmVJbml0OiBmdW5jdGlvbihjaGFydCwgb3B0aW9ucykge1xuICAgICAgICBjaGFydC5sZWdlbmQuYWZ0ZXJGaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMjA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYmFyQ2hhcnRQbHVnaW5zLnB1c2goY2hhcnRQbHVnaW4pO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cblxuICAgIHZhciBjdHggPSAkKCcjYmFyQ2hhcnQnKVswXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGJhckNoYXJ0OiBhbnkgPSB0aGlzLmNoYXJ0LmNoYXJ0O1xuICAgIHZhciBiYXNlID0gYmFyQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTsgICAgXG4gICAgdmFyIGhlaWdodCA9IGJhckNoYXJ0LmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBiYXJDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ud2lkdGg7XG4gICAgdmFyIG9mZnNldCA9ICQoJyNiYXJDaGFydCcpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICBcblxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcbiAgICAgIHZhciBjb3VudCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBiYXJDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ0xlZnQ7XG4gICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gYmFyQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcbiAgICAgIFxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGJhckNoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS53aWR0aCkgLyB4d2lkdGg7XG5cbiAgICAgIGlmIChiYXJJbmRleCA+IDAgJiYgYmFySW5kZXggPCBjb3VudCkge1xuICAgICAgICBiYXJJbmRleCA9IE1hdGguZmxvb3IoYmFySW5kZXgpO1xuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5iYXJDaGFydExhYmVsc1tiYXJJbmRleF07XG4gICAgICAgIHRoaXMubGFiZWxDbGljay5lbWl0KGRhdGFMYWJlbCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7XG4gICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=