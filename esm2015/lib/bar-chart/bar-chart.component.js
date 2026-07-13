import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
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
        let chartPlugin = {
            beforeInit: function (chart, options) {
                chart.legend.afterFit = function () {
                    this.height = this.height + 20;
                };
            }
        };
        this.barChartPlugins.push(chartPlugin);
    }
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        var ctx = $('#barChart')[0].getContext("2d");
        var barChart = this.chart.chart;
        var base = barChart.chartArea.bottom;
        var height = barChart.height;
        var width = barChart.scales['x-axis-0'].width;
        var offset = $('#barChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            var count = barChart.scales['x-axis-0'].ticks.length;
            var paddingLeft = barChart.scales['x-axis-0'].paddingLeft;
            var paddingRight = barChart.scales['x-axis-0'].paddingRight;
            var xwidth = (width - paddingLeft - paddingRight) / count;
            var barIndex = (event.offsetX - paddingLeft - barChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                var dataLabel = this.barChartLabels[barIndex];
                this.labelClick.emit(dataLabel);
            }
        }
    }
    chartHovered({ event, active }) {
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    }
}
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BarChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: BarChartComponent, selector: "lib-bar-chart", inputs: { barChartOptions: "barChartOptions", barChartLabels: "barChartLabels", barChartLegend: "barChartLegend", barChartData: "barChartData", barChartPlugins: "barChartPlugins", barChartColors: "barChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], ngImport: i0, template: "\r\n    <div style=\"display: block\">\r\n      <canvas #chart id=\"barChart\" baseChart\r\n        [datasets]=\"barChartData\"\r\n        [labels]=\"barChartLabels\"\r\n        [options]=\"barChartOptions\"\r\n        [plugins]=\"barChartPlugins\"\r\n        [colors]=\"barChartColors\" \r\n        [legend]=\"barChartLegend\"\r\n        [chartType]=\"chartType\"\r\n        (chartHover)=\"chartHovered($event)\"\r\n        (chartClick)=\"chartClicked($event)\">\r\n      </canvas>\r\n    </div>\r\n", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styleUrls: ['./bar-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { barChartOptions: [{
                type: Input
            }], barChartLabels: [{
                type: Input
            }], barChartLegend: [{
                type: Input
            }], barChartData: [{
                type: Input
            }], barChartPlugins: [{
                type: Input
            }], barChartColors: [{
                type: Input
            }], simpleChartConfig: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }], labelClick: [{
                type: Output
            }], chart: [{
                type: ViewChild,
                args: [BaseChartDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFTLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFRN0QsTUFBTSxPQUFPLGlCQUFpQjtJQWdCNUI7UUFkUyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBWSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBb0IsRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQWUsRUFBRSxDQUFBO1FBQy9CLHNCQUFpQixHQUFzQixFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0QsY0FBUyxHQUFX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RyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDK0IsS0FBSztzQkFBMUMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XHJcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYmFyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBiYXJDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9OyAgXHJcbiAgQElucHV0KCkgYmFyQ2hhcnRMYWJlbHM6IExhYmVsW10gPSBbXTtcclxuICBASW5wdXQoKSBiYXJDaGFydExlZ2VuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgYmFyQ2hhcnREYXRhOiBDaGFydERhdGFTZXRzW10gPSBbXTtcclxuICBASW5wdXQoKSBiYXJDaGFydFBsdWdpbnM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgYmFyQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXVxyXG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XHJcbiAgY2hhcnRUeXBlOiBzdHJpbmcgPSAnYmFyJztcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuYmFyQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5iYXJDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5iYXJDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuYmFyQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuYmFyQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmJhckNoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5iYXJDaGFydE9wdGlvbnM7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnLmlzSG9yaXpvbnRhbEJhcikge1xyXG4gICAgICAgICAgdGhpcy5jaGFydFR5cGUgPSAnYmFyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jaGFydFR5cGUgPSAnaG9yaXpvbnRhbEJhcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFyQ2hhcnRPcHRpb25zID0gU2ltcGxlQ2hhcnRDb25maWcucG9wdWxhdGVDaGFydENvbmZpZyh0aGlzLmJhckNoYXJ0T3B0aW9ucywgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIHRoaXMuYmFyQ2hhcnRQbHVnaW5zLnB1c2gocGx1Z2luRGF0YUxhYmVscyk7XHJcbiAgICBsZXQgY2hhcnRQbHVnaW4gPSB7ICAgICAgXHJcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGNoYXJ0LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY2hhcnQubGVnZW5kLmFmdGVyRml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMjA7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5iYXJDaGFydFBsdWdpbnMucHVzaChjaGFydFBsdWdpbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcclxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdHggPSAkKCcjYmFyQ2hhcnQnKVswXS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB2YXIgYmFyQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XHJcbiAgICB2YXIgYmFzZSA9IGJhckNoYXJ0LmNoYXJ0QXJlYS5ib3R0b207ICAgIFxyXG4gICAgdmFyIGhlaWdodCA9IGJhckNoYXJ0LmhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS53aWR0aDtcclxuICAgIHZhciBvZmZzZXQgPSAkKCcjYmFyQ2hhcnQnKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAoZXZlbnQucGFnZVkgPiBiYXNlICsgb2Zmc2V0KSB7XHJcbiAgICAgIHZhciBjb3VudCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XHJcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcclxuICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGJhckNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nUmlnaHQ7XHJcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcclxuICAgICAgXHJcbiAgICAgIHZhciBiYXJJbmRleCA9IChldmVudC5vZmZzZXRYIC0gcGFkZGluZ0xlZnQgLSBiYXJDaGFydC5zY2FsZXNbJ3ktYXhpcy0wJ10ud2lkdGgpIC8geHdpZHRoO1xyXG5cclxuICAgICAgaWYgKGJhckluZGV4ID4gMCAmJiBiYXJJbmRleCA8IGNvdW50KSB7XHJcbiAgICAgICAgYmFySW5kZXggPSBNYXRoLmZsb29yKGJhckluZGV4KTtcclxuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5iYXJDaGFydExhYmVsc1tiYXJJbmRleF07XHJcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHtcclxuICAgIFxyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxyXG4gICAgICA8Y2FudmFzICNjaGFydCBpZD1cImJhckNoYXJ0XCIgYmFzZUNoYXJ0XHJcbiAgICAgICAgW2RhdGFzZXRzXT1cImJhckNoYXJ0RGF0YVwiXHJcbiAgICAgICAgW2xhYmVsc109XCJiYXJDaGFydExhYmVsc1wiXHJcbiAgICAgICAgW29wdGlvbnNdPVwiYmFyQ2hhcnRPcHRpb25zXCJcclxuICAgICAgICBbcGx1Z2luc109XCJiYXJDaGFydFBsdWdpbnNcIlxyXG4gICAgICAgIFtjb2xvcnNdPVwiYmFyQ2hhcnRDb2xvcnNcIiBcclxuICAgICAgICBbbGVnZW5kXT1cImJhckNoYXJ0TGVnZW5kXCJcclxuICAgICAgICBbY2hhcnRUeXBlXT1cImNoYXJ0VHlwZVwiXHJcbiAgICAgICAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gICAgICAgIChjaGFydENsaWNrKT1cImNoYXJ0Q2xpY2tlZCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiJdfQ==