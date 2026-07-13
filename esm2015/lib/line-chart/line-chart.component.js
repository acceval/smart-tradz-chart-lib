import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { SimpleChartConfig } from '../simple-chart-config';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
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
            this.lineChartColors.forEach(color => {
                color['fill'] = false;
                color['cubicInterpolationMode'] = 'monotone';
                color['lineTension'] = 1;
                color['pointRadius'] = 3;
                color['pointHoverRadius'] = 3;
            });
        }
        if (!this.lineChartOptions || Object.keys(this.lineChartOptions).length == 0) {
            this.lineChartOptions = new GlobalChartOptions().lineChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.lineChartOptions = SimpleChartConfig.populateChartConfig(this.lineChartOptions, this.simpleChartConfig);
            }
        }
    }
    ngOnInit() {
        this.lineChartPlugins.push(pluginDataLabels);
        let chartPlugin = {
            beforeInit: function (chart, options) {
                chart.legend.afterFit = function () {
                    this.height = this.height + 20;
                };
            }
        };
        this.lineChartPlugins.push(chartPlugin);
    }
    ngOnChanges(changes) {
        if (changes['lineChartData']) {
            if (this.lineChartData == null) {
                return;
            }
            this.chart.update();
        }
    }
    update() {
        this.chart.update();
    }
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        var ctx = $('#lineChart')[0].getContext("2d");
        var lineChart = this.chart.chart;
        var base = lineChart.chartArea.bottom;
        var height = lineChart.height;
        var width = lineChart.scales['x-axis-0'].width;
        var offset = $('#lineChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            var count = lineChart.scales['x-axis-0'].ticks.length;
            var paddingLeft = lineChart.scales['x-axis-0'].paddingLeft;
            var paddingRight = lineChart.scales['x-axis-0'].paddingRight;
            var xwidth = (width - paddingLeft - paddingRight) / count;
            var barIndex = (event.offsetX - paddingLeft - lineChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                var dataLabel = this.lineChartLabels[barIndex];
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
LineChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LineChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LineChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: LineChartComponent, selector: "lib-line-chart", inputs: { lineChartOptions: "lineChartOptions", lineChartLabels: "lineChartLabels", lineChartLegend: "lineChartLegend", lineChartData: "lineChartData", lineChartColors: "lineChartColors", lineChartPlugins: "lineChartPlugins", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div style=\"display: block;\">\r\n  <canvas #chart id=\"lineChart\" baseChart \r\n      [datasets]=\"lineChartData\"\r\n      [labels]=\"lineChartLabels\"\r\n      [options]=\"lineChartOptions\"\r\n      [colors]=\"lineChartColors\"      \r\n      [legend]=\"lineChartLegend\"\r\n      [chartType]=\"'line'\"\r\n      [plugins]=\"lineChartPlugins\"\r\n      (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\">\r\n  </canvas>  \r\n</div>", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LineChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-line-chart',
                    templateUrl: './line-chart.component.html',
                    styleUrls: ['./line-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { lineChartOptions: [{
                type: Input
            }], lineChartLabels: [{
                type: Input
            }], lineChartLegend: [{
                type: Input
            }], lineChartData: [{
                type: Input
            }], lineChartColors: [{
                type: Input
            }], lineChartPlugins: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEgsT0FBTyxLQUFLLGdCQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBUyxNQUFNLFlBQVksQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBUTdELE1BQU0sT0FBTyxrQkFBa0I7SUFnQjdCO1FBZFMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUVwQyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixvQkFBZSxHQUFlLEVBQUUsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0zRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUks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QyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzsrR0F2R1Usa0JBQWtCO21HQUFsQixrQkFBa0Isb2NBY2xCLGtCQUFrQixxRUM1Qi9CLHlkQVlNOzJGREVPLGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7MEVBR1UsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFFK0IsS0FBSztzQkFBMUMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFydERhdGFTZXRzLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCAqIGFzIHBsdWdpbkRhdGFMYWJlbHMgZnJvbSAnY2hhcnRqcy1wbHVnaW4tZGF0YWxhYmVscyc7XHJcbmltcG9ydCB7IEJhc2VDaGFydERpcmVjdGl2ZSwgTGFiZWwgfSBmcm9tICduZzItY2hhcnRzJztcclxuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1saW5lLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGxpbmVDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xyXG4gIEBJbnB1dCgpIGxpbmVDaGFydExhYmVsczogTGFiZWxbXTtcclxuICBASW5wdXQoKSBsaW5lQ2hhcnRMZWdlbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGxpbmVDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXTsgIFxyXG4gIEBJbnB1dCgpIGxpbmVDaGFydENvbG9yczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGxpbmVDaGFydFBsdWdpbnM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKEJhc2VDaGFydERpcmVjdGl2ZSkgcHVibGljIGNoYXJ0OiBCYXNlQ2hhcnREaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMubGluZUNoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMubGluZUNoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmxpbmVDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcclxuXHJcbiAgICAgIHRoaXMubGluZUNoYXJ0Q29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgIGNvbG9yWydmaWxsJ10gPSBmYWxzZTtcclxuICAgICAgICBjb2xvclsnY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSddID0gJ21vbm90b25lJztcclxuICAgICAgICBjb2xvclsnbGluZVRlbnNpb24nXSA9IDE7XHJcbiAgICAgICAgY29sb3JbJ3BvaW50UmFkaXVzJ10gPSAzO1xyXG4gICAgICAgIGNvbG9yWydwb2ludEhvdmVyUmFkaXVzJ10gPSAzO1xyXG4gICAgICB9KTsgIFxyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICBpZiAoIXRoaXMubGluZUNoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLmxpbmVDaGFydE9wdGlvbnMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMubGluZUNoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5saW5lQ2hhcnRPcHRpb25zO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkgeyAgICAgICBcclxuICAgICAgICB0aGlzLmxpbmVDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMubGluZUNoYXJ0T3B0aW9ucywgXHJcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxpbmVDaGFydFBsdWdpbnMucHVzaChwbHVnaW5EYXRhTGFiZWxzKTtcclxuXHJcbiAgICBsZXQgY2hhcnRQbHVnaW4gPSB7ICAgICAgXHJcbiAgICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGNoYXJ0LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY2hhcnQubGVnZW5kLmFmdGVyRml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgMjA7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5saW5lQ2hhcnRQbHVnaW5zLnB1c2goY2hhcnRQbHVnaW4pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXNbJ2xpbmVDaGFydERhdGEnXSkge1xyXG4gICAgICBpZiAodGhpcy5saW5lQ2hhcnREYXRhID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5jaGFydC51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBjdHggPSAkKCcjbGluZUNoYXJ0JylbMF0uZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIGxpbmVDaGFydDogYW55ID0gdGhpcy5jaGFydC5jaGFydDtcclxuICAgIHZhciBiYXNlID0gbGluZUNoYXJ0LmNoYXJ0QXJlYS5ib3R0b207ICAgIFxyXG4gICAgdmFyIGhlaWdodCA9IGxpbmVDaGFydC5oZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSBsaW5lQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLndpZHRoO1xyXG4gICAgdmFyIG9mZnNldCA9ICQoJyNsaW5lQ2hhcnQnKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICBcclxuICAgIGlmIChldmVudC5wYWdlWSA+IGJhc2UgKyBvZmZzZXQpIHtcclxuICAgICAgdmFyIGNvdW50ID0gbGluZUNoYXJ0LnNjYWxlc1sneC1heGlzLTAnXS50aWNrcy5sZW5ndGg7XHJcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IGxpbmVDaGFydC5zY2FsZXNbJ3gtYXhpcy0wJ10ucGFkZGluZ0xlZnQ7XHJcbiAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBsaW5lQ2hhcnQuc2NhbGVzWyd4LWF4aXMtMCddLnBhZGRpbmdSaWdodDtcclxuICAgICAgdmFyIHh3aWR0aCA9ICh3aWR0aCAtIHBhZGRpbmdMZWZ0IC0gcGFkZGluZ1JpZ2h0KSAvIGNvdW50O1xyXG4gICAgICBcclxuICAgICAgdmFyIGJhckluZGV4ID0gKGV2ZW50Lm9mZnNldFggLSBwYWRkaW5nTGVmdCAtIGxpbmVDaGFydC5zY2FsZXNbJ3ktYXhpcy0wJ10ud2lkdGgpIC8geHdpZHRoO1xyXG5cclxuICAgICAgaWYgKGJhckluZGV4ID4gMCAmJiBiYXJJbmRleCA8IGNvdW50KSB7XHJcbiAgICAgICAgYmFySW5kZXggPSBNYXRoLmZsb29yKGJhckluZGV4KTtcclxuICAgICAgICB2YXIgZGF0YUxhYmVsID0gdGhpcy5saW5lQ2hhcnRMYWJlbHNbYmFySW5kZXhdO1xyXG4gICAgICAgIHRoaXMubGFiZWxDbGljay5lbWl0KGRhdGFMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxyXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj5cclxuICA8Y2FudmFzICNjaGFydCBpZD1cImxpbmVDaGFydFwiIGJhc2VDaGFydCBcclxuICAgICAgW2RhdGFzZXRzXT1cImxpbmVDaGFydERhdGFcIlxyXG4gICAgICBbbGFiZWxzXT1cImxpbmVDaGFydExhYmVsc1wiXHJcbiAgICAgIFtvcHRpb25zXT1cImxpbmVDaGFydE9wdGlvbnNcIlxyXG4gICAgICBbY29sb3JzXT1cImxpbmVDaGFydENvbG9yc1wiICAgICAgXHJcbiAgICAgIFtsZWdlbmRdPVwibGluZUNoYXJ0TGVnZW5kXCJcclxuICAgICAgW2NoYXJ0VHlwZV09XCInbGluZSdcIlxyXG4gICAgICBbcGx1Z2luc109XCJsaW5lQ2hhcnRQbHVnaW5zXCJcclxuICAgICAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gICAgICAoY2hhcnRDbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiPlxyXG4gIDwvY2FudmFzPiAgXHJcbjwvZGl2PiJdfQ==