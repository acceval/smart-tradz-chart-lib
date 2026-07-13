import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import * as pluginAnnotations from 'chartjs-plugin-datalabels';
import { SimpleChartConfig } from '../simple-chart-config';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
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
    ngOnInit() {
        this.combinedChartPlugins.push(pluginAnnotations);
        this.combinedChartPlugins.push(ChartAnnotation);
    }
    ngOnChanges(changes) {
        if (changes['combinedChartData']) {
            if (this.combinedChartData == null) {
                return;
            }
            this.chart.update();
        }
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
CombinedMeasureChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CombinedMeasureChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CombinedMeasureChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: CombinedMeasureChartComponent, selector: "lib-combined-measure-chart", inputs: { combinedChartOptions: "combinedChartOptions", combinedChartLabels: "combinedChartLabels", combinedChartLegend: "combinedChartLegend", combinedChartData: "combinedChartData", combinedChartPlugins: "combinedChartPlugins", combinedChartColors: "combinedChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n    <div style=\"display: block\">\r\n        <canvas #chart id=\"combinedChart\" baseChart\r\n          [datasets]=\"combinedChartData\"\r\n          [labels]=\"combinedChartLabels\"\r\n          [options]=\"combinedChartOptions\"\r\n          [plugins]=\"combinedChartPlugins\"\r\n          [colors]=\"combinedChartColors\" \r\n          [legend]=\"combinedChartLegend\"\r\n          [chartType]=\"'bubble'\"\r\n          [plugins]=\"combinedChartPlugins\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\">\r\n        </canvas>\r\n      </div>\r\n  ", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CombinedMeasureChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-combined-measure-chart',
                    templateUrl: './combined-measure-chart.component.html',
                    styleUrls: ['./combined-measure-chart.component.scss']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1tZWFzdXJlLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRXBILE9BQU8sRUFBUyxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxLQUFLLGVBQWUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBUTdELE1BQU0sT0FBTyw2QkFBNkI7SUFnQnhDO1FBZFMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUV4Qyx3QkFBbUIsR0FBWSxFQUFFLENBQUM7UUFDbEMsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQzNCLHNCQUFpQixHQUFvQixFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQVUsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQUNyQyxzQkFBaUIsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUs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QUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUMrQixLQUFLO3NCQUExQyxTQUFTO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XHJcbmltcG9ydCAqIGFzIHBsdWdpbkRhdGFMYWJlbHMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcclxuaW1wb3J0ICogYXMgcGx1Z2luQW5ub3RhdGlvbnMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XHJcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENoYXJ0QW5ub3RhdGlvbiBmcm9tICdjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uJztcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY29tYmluZWQtbWVhc3VyZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcclxuXHJcbiAgQElucHV0KCkgY29tYmluZWRDaGFydExhYmVsczogTGFiZWxbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnRMZWdlbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbWJpbmVkQ2hhcnREYXRhOiBDaGFydERhdGFTZXRzW10gPSBbXTtcclxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0UGx1Z2luczogYW55W10gPSBbXTtcclxuICBASW5wdXQoKSBjb21iaW5lZENoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRDb2xvcnMgPSBuZXcgR2xvYmFsQ2hhcnRDb2xvcnMoKS5nbG9iYWxDb2xvcnM7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY29tYmluZWRDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5jb21iaW5lZENoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5jb21iaW5lZENoYXJ0T3B0aW9ucztcclxuXHJcbiAgICAgIGlmICh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnICYmIE9iamVjdC5rZXlzKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zID0gU2ltcGxlQ2hhcnRDb25maWcucG9wdWxhdGVDaGFydENvbmZpZyh0aGlzLmNvbWJpbmVkQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY29tYmluZWRDaGFydFBsdWdpbnMucHVzaChwbHVnaW5Bbm5vdGF0aW9ucyk7XHJcbiAgICB0aGlzLmNvbWJpbmVkQ2hhcnRQbHVnaW5zLnB1c2goQ2hhcnRBbm5vdGF0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzWydjb21iaW5lZENoYXJ0RGF0YSddKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkQ2hhcnREYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQge1xyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGN0eCA9ICQoJyNjb21iaW5lZENoYXJ0JylbMF0uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIGNvbWJpbmVkQ2hhcnQ6IGFueSA9IHRoaXMuY2hhcnQuY2hhcnQ7XHJcbiAgICB2YXIgYmFzZSA9IGNvbWJpbmVkQ2hhcnQuY2hhcnRBcmVhLmJvdHRvbTtcclxuICAgIHZhciBoZWlnaHQgPSBjb21iaW5lZENoYXJ0LmhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xyXG4gICAgdmFyIG9mZnNldCA9ICQoJyNjb21iaW5lZENoYXJ0Jykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHJcbiAgICBpZiAoZXZlbnQucGFnZVkgPiBiYXNlICsgb2Zmc2V0KSB7XHJcbiAgICAgIHZhciBjb3VudCA9IGNvbWJpbmVkQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnRpY2tzLmxlbmd0aDtcclxuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gY29tYmluZWRDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ0xlZnQ7XHJcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS5wYWRkaW5nUmlnaHQ7XHJcbiAgICAgIHZhciB4d2lkdGggPSAod2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCkgLyBjb3VudDtcclxuXHJcbiAgICAgIHZhciBiYXJJbmRleCA9IChldmVudC5vZmZzZXRYIC0gcGFkZGluZ0xlZnQgLSBjb21iaW5lZENoYXJ0LnNjYWxlc1sneS1heGlzLTAnXS53aWR0aCkgLyB4d2lkdGg7XHJcblxyXG4gICAgICBpZiAoYmFySW5kZXggPiAwICYmIGJhckluZGV4IDwgY291bnQpIHtcclxuICAgICAgICBiYXJJbmRleCA9IE1hdGguZmxvb3IoYmFySW5kZXgpO1xyXG4gICAgICAgIHZhciBkYXRhTGFiZWwgPSB0aGlzLmNvbWJpbmVkQ2hhcnRMYWJlbHNbYmFySW5kZXhdO1xyXG4gICAgICAgIHRoaXMubGFiZWxDbGljay5lbWl0KGRhdGFMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7XHJcblxyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XHJcbiAgICAgICAgPGNhbnZhcyAjY2hhcnQgaWQ9XCJjb21iaW5lZENoYXJ0XCIgYmFzZUNoYXJ0XHJcbiAgICAgICAgICBbZGF0YXNldHNdPVwiY29tYmluZWRDaGFydERhdGFcIlxyXG4gICAgICAgICAgW2xhYmVsc109XCJjb21iaW5lZENoYXJ0TGFiZWxzXCJcclxuICAgICAgICAgIFtvcHRpb25zXT1cImNvbWJpbmVkQ2hhcnRPcHRpb25zXCJcclxuICAgICAgICAgIFtwbHVnaW5zXT1cImNvbWJpbmVkQ2hhcnRQbHVnaW5zXCJcclxuICAgICAgICAgIFtjb2xvcnNdPVwiY29tYmluZWRDaGFydENvbG9yc1wiIFxyXG4gICAgICAgICAgW2xlZ2VuZF09XCJjb21iaW5lZENoYXJ0TGVnZW5kXCJcclxuICAgICAgICAgIFtjaGFydFR5cGVdPVwiJ2J1YmJsZSdcIlxyXG4gICAgICAgICAgW3BsdWdpbnNdPVwiY29tYmluZWRDaGFydFBsdWdpbnNcIlxyXG4gICAgICAgICAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gICAgICAgICAgKGNoYXJ0Q2xpY2spPVwiY2hhcnRDbGlja2VkKCRldmVudClcIj5cclxuICAgICAgICA8L2NhbnZhcz5cclxuICAgICAgPC9kaXY+XHJcbiAgIl19