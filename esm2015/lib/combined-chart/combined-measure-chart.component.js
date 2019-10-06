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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQVMsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTNELE1BQU0sT0FBTyw2QkFBNkI7SUFnQnhDO1FBZFMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUV4Qyx3QkFBbUIsR0FBWSxFQUFFLENBQUM7UUFDbEMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLHNCQUFpQixHQUFvQixFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQUNyQyxzQkFBaUIsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzNELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENB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QUMsUUFBUSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QztRQUV4RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0Qyw4a0JBQXNEOzthQUV2RDs7Ozs7bUNBR0UsS0FBSztrQ0FFTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFFTCxNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTtvQkFDTixTQUFTLFNBQUMsa0JBQWtCOzs7O0lBWjdCLDZEQUFpRDs7SUFFakQsNERBQTJDOztJQUMzQyw0REFBb0M7O0lBQ3BDLDBEQUFpRDs7SUFDakQsNkRBQTBDOztJQUMxQyw0REFBOEM7O0lBQzlDLDBEQUFtRDs7SUFFbkQsbURBQTZEOztJQUM3RCxtREFBNkQ7O0lBQzdELG1EQUE2RDs7SUFDN0QsOENBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGFiZWwsIEJhc2VDaGFydERpcmVjdGl2ZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5Bbm5vdGF0aW9ucyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb21iaW5lZC1tZWFzdXJlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21iaW5lZC1tZWFzdXJlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29tYmluZWRDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuICBcbiAgQElucHV0KCkgY29tYmluZWRDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0TGVnZW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXSA9IFtdO1xuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgY29tYmluZWRDaGFydENvbG9yczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBzaW1wbGVDaGFydENvbmZpZzogU2ltcGxlQ2hhcnRDb25maWcgPSB7fTtcblxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7IFxuXG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuY29tYmluZWRDaGFydE9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnICYmIE9iamVjdC5rZXlzKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpLmxlbmd0aCA+IDApIHsgICAgICAgXG4gICAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMsIFxuICAgICAgICAgIHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpO1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChwbHVnaW5Bbm5vdGF0aW9ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbWJpbmVkQ2hhcnREYXRhJ10pIHtcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkQ2hhcnREYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gJCgnI2NvbWJpbmVkQ2hhcnQnKVswXS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIGNvbWJpbmVkQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XG4gICAgdmFyIGJhc2UgPSBjb21iaW5lZENoYXJ0LmNoYXJ0QXJlYS5ib3R0b207ICAgIFxuICAgIHZhciBoZWlnaHQgPSBjb21iaW5lZENoYXJ0LmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS53aWR0aDtcbiAgICB2YXIgb2Zmc2V0ID0gJCgnI2NvbWJpbmVkQ2hhcnQnKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXG5cbiAgICBpZiAoZXZlbnQucGFnZVkgPiBiYXNlICsgb2Zmc2V0KSB7XG4gICAgICB2YXIgY291bnQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nUmlnaHQ7XG4gICAgICB2YXIgeHdpZHRoID0gKHdpZHRoIC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQpIC8gY291bnQ7XG4gICAgICBcbiAgICAgIHZhciBiYXJJbmRleCA9IChldmVudC5vZmZzZXRYIC0gcGFkZGluZ0xlZnQgLSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS53aWR0aCkgLyB4d2lkdGg7XG5cbiAgICAgIGlmIChiYXJJbmRleCA+IDAgJiYgYmFySW5kZXggPCBjb3VudCkge1xuICAgICAgICBiYXJJbmRleCA9IE1hdGguZmxvb3IoYmFySW5kZXgpO1xuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5jb21iaW5lZENoYXJ0TGFiZWxzW2JhckluZGV4XTtcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcbiAgICAgIH1cbiAgICB9ICBcbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7XG4gICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxufVxuIl19