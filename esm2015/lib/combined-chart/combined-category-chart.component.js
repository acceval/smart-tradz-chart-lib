import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
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
        let chartPlugin = {
            beforeInit: function (chart, options) {
                chart.legend.afterFit = function () {
                    this.height = this.height + 20;
                };
            }
        };
        this.combinedChartPlugins.push(chartPlugin);
    }
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        var ctx = $('#combinedChart')[0].getContext("2d");
        var combinedChart = this.chart.chart;
        var base = combinedChart.chartArea.bottom;
        var height = combinedChart.height;
        var width = combinedChart.scales['x-axis-0'].width;
        var offset = $('#combinedChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            var count = combinedChart.scales['x-axis-0'].ticks.length;
            var paddingLeft = combinedChart.scales['x-axis-0'].paddingLeft;
            var paddingRight = combinedChart.scales['x-axis-0'].paddingRight;
            var xwidth = (width - paddingLeft - paddingRight) / count;
            var barIndex = (event.offsetX - paddingLeft - combinedChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                var dataLabel = this.combinedChartLabels[barIndex];
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
CombinedCategoryChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CombinedCategoryChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CombinedCategoryChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: CombinedCategoryChartComponent, selector: "lib-combined-category-chart", inputs: { combinedChartOptions: "combinedChartOptions", combinedChartLabels: "combinedChartLabels", combinedChartLegend: "combinedChartLegend", combinedChartData: "combinedChartData", combinedChartPlugins: "combinedChartPlugins", combinedChartColors: "combinedChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], ngImport: i0, template: "\r\n    <div style=\"display: block\">\r\n        <canvas #chart id=\"combinedChart\" baseChart\r\n          [datasets]=\"combinedChartData\"\r\n          [labels]=\"combinedChartLabels\"\r\n          [options]=\"combinedChartOptions\"\r\n          [plugins]=\"combinedChartPlugins\"\r\n          [colors]=\"combinedChartColors\" \r\n          [legend]=\"combinedChartLegend\"\r\n          [chartType]=\"'bar'\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\">\r\n        </canvas>\r\n      </div>\r\n  ", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CombinedCategoryChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-combined-category-chart',
                    templateUrl: './combined-category-chart.component.html',
                    styleUrls: ['./combined-category-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { combinedChartOptions: [{
                type: Input
            }], combinedChartLabels: [{
                type: Input
            }], combinedChartLegend: [{
                type: Input
            }], combinedChartData: [{
                type: Input
            }], combinedChartPlugins: [{
                type: Input
            }], combinedChartColors: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvY29tYmluZWQtY2hhcnQvY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFTLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBUTNELE1BQU0sT0FBTyw4QkFBOEI7SUFnQnpDO1FBZFMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUV4Qyx3QkFBbUIsR0FBWSxFQUFFLENBQUM7UUFDbEMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLHNCQUFpQixHQUFvQixFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQUNyQyxzQkFBaUIsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFF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O2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDK0IsS0FBSztzQkFBMUMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBDaGFydFR5cGUsIENoYXJ0RGF0YVNldHMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IExhYmVsLCBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICduZzItY2hhcnRzJztcclxuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb21iaW5lZC1jYXRlZ29yeS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJpbmVkLWNhdGVnb3J5LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb21iaW5lZC1jYXRlZ29yeS1jaGFydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21iaW5lZENhdGVnb3J5Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XHJcbiAgXHJcbiAgQElucHV0KCkgY29tYmluZWRDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMZWdlbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnREYXRhOiBDaGFydERhdGFTZXRzW10gPSBbXTtcclxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcclxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMuY29tYmluZWRDaGFydENvbG9ycykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5iYXJDaGFydE9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMsIFxyXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgICB0aGlzLmNvbWJpbmVkQ2hhcnRQbHVnaW5zLnB1c2gocGx1Z2luRGF0YUxhYmVscyk7XHJcbiAgICBsZXQgY2hhcnRQbHVnaW4gPSB7ICAgICAgXHJcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGNoYXJ0LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY2hhcnQubGVnZW5kLmFmdGVyRml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMjA7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb21iaW5lZENoYXJ0UGx1Z2lucy5wdXNoKGNoYXJ0UGx1Z2luKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGN0eCA9ICQoJyNjb21iaW5lZENoYXJ0JylbMF0uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIGNvbWJpbmVkQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XHJcbiAgICB2YXIgYmFzZSA9IGNvbWJpbmVkQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTsgICAgXHJcbiAgICB2YXIgaGVpZ2h0ID0gY29tYmluZWRDaGFydC5oZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS53aWR0aDtcclxuICAgIHZhciBvZmZzZXQgPSAkKCcjY29tYmluZWRDaGFydCcpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIFxyXG5cclxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcclxuICAgICAgdmFyIGNvdW50ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10udGlja3MubGVuZ3RoO1xyXG4gICAgICB2YXIgcGFkZGluZ0xlZnQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nTGVmdDtcclxuICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcclxuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xyXG4gICAgICBcclxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd5LWF4aXMtMCddLndpZHRoKSAvIHh3aWR0aDtcclxuXHJcbiAgICAgIGlmIChiYXJJbmRleCA+IDAgJiYgYmFySW5kZXggPCBjb3VudCkge1xyXG4gICAgICAgIGJhckluZGV4ID0gTWF0aC5mbG9vcihiYXJJbmRleCk7XHJcbiAgICAgICAgdmFyIGRhdGFMYWJlbCA9IHRoaXMuY29tYmluZWRDaGFydExhYmVsc1tiYXJJbmRleF07XHJcbiAgICAgICAgdGhpcy5sYWJlbENsaWNrLmVtaXQoZGF0YUxhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQge1xyXG4gICAgXHJcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj5cclxuICAgICAgICA8Y2FudmFzICNjaGFydCBpZD1cImNvbWJpbmVkQ2hhcnRcIiBiYXNlQ2hhcnRcclxuICAgICAgICAgIFtkYXRhc2V0c109XCJjb21iaW5lZENoYXJ0RGF0YVwiXHJcbiAgICAgICAgICBbbGFiZWxzXT1cImNvbWJpbmVkQ2hhcnRMYWJlbHNcIlxyXG4gICAgICAgICAgW29wdGlvbnNdPVwiY29tYmluZWRDaGFydE9wdGlvbnNcIlxyXG4gICAgICAgICAgW3BsdWdpbnNdPVwiY29tYmluZWRDaGFydFBsdWdpbnNcIlxyXG4gICAgICAgICAgW2NvbG9yc109XCJjb21iaW5lZENoYXJ0Q29sb3JzXCIgXHJcbiAgICAgICAgICBbbGVnZW5kXT1cImNvbWJpbmVkQ2hhcnRMZWdlbmRcIlxyXG4gICAgICAgICAgW2NoYXJ0VHlwZV09XCInYmFyJ1wiXHJcbiAgICAgICAgICAoY2hhcnRIb3Zlcik9XCJjaGFydEhvdmVyZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAoY2hhcnRDbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvY2FudmFzPlxyXG4gICAgICA8L2Rpdj5cclxuICAiXX0=