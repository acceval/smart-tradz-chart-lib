import { Component, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalChartOptions } from '../global-chart-options';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
export class VariableWidthChartComponent {
    constructor() {
        this.generatedChartData = [{
                type: 'line',
                label: '',
                data: [{ y: 0, x: 0 }, { y: 0, x: 0 }],
            }];
        this.generatedChartColors = [{
                fill: true,
                backgroundColor: '#000000',
                pointRadius: 0,
            }];
        this.variableWidthChartLegend = true;
        this.variableWidthChartOptions = {};
        this.limitLineColor = {
            fill: false,
            borderColor: 'rgba(235, 84, 124, 1)',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointRadius: 0,
            pointHitRadius: 10,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(235, 84, 124, 1)',
            cubicInterpolationMode: 'monotone',
        };
        this.volumeAllocaitonColors = [
            ['#45a090', '#5fbaaa', '#82c9bd', '#a6d8d0', '#cae8e3'],
            ['#2a90bb', '#35a3d2', '#5fb6db', '#7bc3e1', '#a4d6eb'],
            ['#ec5f85'],
            ['#a6a6a5', '#b7b7b6', '#c8c8c7', '#d9d9d8']
        ];
    }
    ngOnInit() {
        if (!this.variableWidthChartOptions || Object.keys(this.variableWidthChartOptions).length == 0) {
            this.variableWidthChartOptions = new GlobalChartOptions().variableWidthChartOptions;
        }
        this.buildChartData();
    }
    ngOnChanges(changes) {
        if (!this.variableWidthChartOptions || Object.keys(this.variableWidthChartOptions).length == 0) {
            this.variableWidthChartOptions = new GlobalChartOptions().variableWidthChartOptions;
        }
        this.buildChartData();
    }
    buildChartData() {
        if (!this.variableWidthChartData) {
            return;
        }
        this.generatedChartData = [];
        this.generatedChartColors = [];
        let _this = this;
        let start = 0;
        let index = 1;
        let previousState = -1;
        this.variableWidthChartData.map(function (d) {
            let end = start + d.xValue;
            _this.generatedChartData.push({
                type: 'line',
                label: d.label,
                data: [{ x: start, y: d.yValue }, { x: end, y: d.yValue }]
            });
            if (previousState == d.state) {
                index++;
            }
            else {
                previousState = d.state;
                index = 0;
            }
            _this.generatedChartColors.push(_this.getVolumeAllocationColor(d.state, index));
            start = end;
        });
        if (this.limitLineData) {
            this.generatedChartData.unshift({
                type: 'line',
                label: this.limitLineData.label,
                data: [{ x: this.limitLineData.xValue, y: 0 }, { x: this.limitLineData.xValue, y: 1250 }]
            });
            this.generatedChartColors.unshift(this.limitLineColor);
        }
        _this.chart.update();
    }
    getVolumeAllocationColor(state, index) {
        let bg = this.volumeAllocaitonColors[0][0];
        let border = this.volumeAllocaitonColors[0][0];
        // state : 0=win, 1=confirm, 2=current, 4=balance
        let color = this.volumeAllocaitonColors[state];
        bg = color[index % color.length];
        border = bg;
        return {
            fill: true,
            backgroundColor: bg,
            borderColor: border,
            borderWidth: 1,
            pointRadius: 0,
            pointHitRadius: 10,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(235,84,124,1)',
            cubicInterpolationMode: 'monotone',
        };
    }
}
VariableWidthChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: VariableWidthChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VariableWidthChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: VariableWidthChartComponent, selector: "lib-variable-width-chart", inputs: { variableWidthChartData: "variableWidthChartData", limitLineData: "limitLineData", variableWidthChartLegend: "variableWidthChartLegend", variableWidthChartOptions: "variableWidthChartOptions" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div style=\"display: block\">\r\n  <canvas #chart baseChart height=\"150\"\r\n    [datasets]=\"generatedChartData\"\r\n    [options]=\"variableWidthChartOptions\"\r\n    [colors]=\"generatedChartColors\"\r\n    [legend]=\"variableWidthChartLegend\"\r\n    [chartType]=\"'bubble'\">\r\n  </canvas>\r\n</div>\r\n", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: VariableWidthChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-variable-width-chart',
                    templateUrl: './variable-width-chart.component.html',
                    styleUrls: ['./variable-width-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chart: [{
                type: ViewChild,
                args: [BaseChartDirective]
            }], variableWidthChartData: [{
                type: Input
            }], limitLineData: [{
                type: Input
            }], variableWidthChartLegend: [{
                type: Input
            }], variableWidthChartOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvdmFyaWFibGUtd2lkdGgtY2hhcnQvdmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvdmFyaWFibGUtd2lkdGgtY2hhcnQvdmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQVM3RCxNQUFNLE9BQU8sMkJBQTJCO0lBb0J0QztRQWxCTyx1QkFBa0IsR0FBZSxDQUFDO2dCQUN2QyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1FBRUkseUJBQW9CLEdBQWUsQ0FBQztnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLFdBQVcsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1FBS00sNkJBQXdCLEdBQVksSUFBSSxDQUFDO1FBQ3pDLDhCQUF5QixHQUFpQixFQUFFLENBQUM7UUFpRS9DLG1CQUFjLEdBQVE7WUFFekIsSUFBSSxFQUFDLEtBQUs7WUFDVixXQUFXLEVB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QUFFLENBQUM7WUFFZCxjQUFjLEVBQUUsRUFBRTtZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHFCQUFxQixFQUFFLENBQUM7WUFDeEIseUJBQXlCLEVBQUUsTUFBTTtZQUNqQyxxQkFBcUIsRUFBRSxvQkFBb0I7WUFFM0Msc0JBQXNCLEVBQUMsVUFBVTtTQUNwQyxDQUFBO0lBQ0wsQ0FBQzs7d0hBcElVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLG1UQWMzQixrQkFBa0IscUVDekIvQix5VEFTQTsyRkRFYSwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztvQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7aUJBQ3JEOzBFQWV1QyxLQUFLO3NCQUExQyxTQUFTO3VCQUFDLGtCQUFrQjtnQkFDcEIsc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUNHLHlCQUF5QjtzQkFBakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0RGlyZWN0aXZlIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcclxuaW1wb3J0IHsgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdmFyaWFibGUtd2lkdGgtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYWJsZS13aWR0aC1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFyaWFibGVXaWR0aENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uQ2hhbmdlcyB7XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZWRDaGFydERhdGE6IEFycmF5PGFueT4gPSBbe1xyXG4gICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgbGFiZWw6ICcnLFxyXG4gICAgZGF0YTogW3t5OjAsIHg6MH0sIHt5OjAsIHg6MH1dLFxyXG4gIH1dO1xyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVkQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbe1xyXG4gICAgZmlsbDogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgfV07XHJcblxyXG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSB2YXJpYWJsZVdpZHRoQ2hhcnREYXRhOiBBcnJheTxWYXJpYWJsZVdpZHRoQ2hhcnREYXRhPjtcclxuICBASW5wdXQoKSBsaW1pdExpbmVEYXRhOiBMaW1pdExpbmVEYXRhO1xyXG4gIEBJbnB1dCgpIHZhcmlhYmxlV2lkdGhDaGFydExlZ2VuZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgdmFyaWFibGVXaWR0aENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFyaWFibGVXaWR0aENoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLnZhcmlhYmxlV2lkdGhDaGFydE9wdGlvbnMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMudmFyaWFibGVXaWR0aENoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS52YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zOyAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIHRoaXMuYnVpbGRDaGFydERhdGEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMudmFyaWFibGVXaWR0aENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy52YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLnZhcmlhYmxlV2lkdGhDaGFydE9wdGlvbnM7ICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgdGhpcy5idWlsZENoYXJ0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZENoYXJ0RGF0YSgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMudmFyaWFibGVXaWR0aENoYXJ0RGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZW5lcmF0ZWRDaGFydERhdGEgPSBbXTtcclxuICAgIHRoaXMuZ2VuZXJhdGVkQ2hhcnRDb2xvcnMgPSBbXTtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzOyAgICBcclxuICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICBsZXQgaW5kZXggPSAxO1xyXG4gICAgbGV0IHByZXZpb3VzU3RhdGUgPSAtMTtcclxuICAgIHRoaXMudmFyaWFibGVXaWR0aENoYXJ0RGF0YS5tYXAoZnVuY3Rpb24oZCkge1xyXG4gICAgICAgIGxldCBlbmQgPSBzdGFydCArIGQueFZhbHVlO1xyXG4gICAgICAgIF90aGlzLmdlbmVyYXRlZENoYXJ0RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBsYWJlbDogZC5sYWJlbCxcclxuICAgICAgICAgICAgZGF0YTogW3t4OiBzdGFydCwgeTogZC55VmFsdWV9LCB7eDogZW5kLCB5OiBkLnlWYWx1ZX1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09IGQuc3RhdGUpIHtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmV2aW91c1N0YXRlID0gZC5zdGF0ZTsgXHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMuZ2VuZXJhdGVkQ2hhcnRDb2xvcnMucHVzaChfdGhpcy5nZXRWb2x1bWVBbGxvY2F0aW9uQ29sb3IoZC5zdGF0ZSwgaW5kZXgpKTtcclxuXHJcbiAgICAgICAgc3RhcnQgPSBlbmQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5saW1pdExpbmVEYXRhKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVkQ2hhcnREYXRhLnVuc2hpZnQoe1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLCBcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLmxpbWl0TGluZURhdGEubGFiZWwsIFxyXG4gICAgICAgICAgZGF0YTogW3t4OiB0aGlzLmxpbWl0TGluZURhdGEueFZhbHVlLCB5OiAwfSwge3g6IHRoaXMubGltaXRMaW5lRGF0YS54VmFsdWUsIHk6IDEyNTB9XVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVkQ2hhcnRDb2xvcnMudW5zaGlmdCh0aGlzLmxpbWl0TGluZUNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBfdGhpcy5jaGFydC51cGRhdGUoKTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbGltaXRMaW5lQ29sb3I6IGFueSA9IHsgLy8gcmVkXHJcblxyXG4gICAgICBmaWxsOmZhbHNlLFxyXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjM1LCA4NCwgMTI0LCAxKScsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAxLjUsXHJcbiAgICAgIGJvcmRlckRhc2g6IFs1LDVdLFxyXG4gICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG5cclxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiA1LFxyXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjM1LCA4NCwgMTI0LCAxKScsXHJcblxyXG4gICAgICBjdWJpY0ludGVycG9sYXRpb25Nb2RlOiAnbW9ub3RvbmUnLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdm9sdW1lQWxsb2NhaXRvbkNvbG9ycyA6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW1xyXG4gICAgWycjNDVhMDkwJywgJyM1ZmJhYWEnLCAnIzgyYzliZCcsJyNhNmQ4ZDAnLCcjY2FlOGUzJ10sXHJcbiAgICBbJyMyYTkwYmInLCAnIzM1YTNkMicsICcjNWZiNmRiJywgJyM3YmMzZTEnLCAnI2E0ZDZlYiddLFxyXG4gICAgWycjZWM1Zjg1J10sXHJcbiAgICBbJyNhNmE2YTUnLCAnI2I3YjdiNicsICcjYzhjOGM3JywgJyNkOWQ5ZDgnXVxyXG4gIF1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWb2x1bWVBbGxvY2F0aW9uQ29sb3Ioc3RhdGU6IG51bWJlciwgaW5kZXg6IG51bWJlcikgOiBhbnkge1xyXG5cclxuICAgICAgbGV0IGJnID0gdGhpcy52b2x1bWVBbGxvY2FpdG9uQ29sb3JzWzBdWzBdO1xyXG4gICAgICBsZXQgYm9yZGVyID0gdGhpcy52b2x1bWVBbGxvY2FpdG9uQ29sb3JzWzBdWzBdO1xyXG5cclxuICAgICAgLy8gc3RhdGUgOiAwPXdpbiwgMT1jb25maXJtLCAyPWN1cnJlbnQsIDQ9YmFsYW5jZVxyXG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnZvbHVtZUFsbG9jYWl0b25Db2xvcnNbc3RhdGVdO1xyXG4gICAgICBiZyA9IGNvbG9yW2luZGV4JWNvbG9yLmxlbmd0aF07XHJcbiAgICAgIGJvcmRlciA9IGJnO1xyXG5cclxuICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXIsXHJcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxyXG5cclxuICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDUsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIzNSw4NCwxMjQsMSknLFxyXG5cclxuICAgICAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6J21vbm90b25lJyxcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYXJpYWJsZVdpZHRoQ2hhcnREYXRhIHtcclxuXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB4VmFsdWU6IG51bWJlcjtcclxuICB5VmFsdWU6IG51bWJlcjtcclxuICBzdGF0ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpbWl0TGluZURhdGEge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgeFZhbHVlOiBudW1iZXI7XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XHJcbiAgPGNhbnZhcyAjY2hhcnQgYmFzZUNoYXJ0IGhlaWdodD1cIjE1MFwiXHJcbiAgICBbZGF0YXNldHNdPVwiZ2VuZXJhdGVkQ2hhcnREYXRhXCJcclxuICAgIFtvcHRpb25zXT1cInZhcmlhYmxlV2lkdGhDaGFydE9wdGlvbnNcIlxyXG4gICAgW2NvbG9yc109XCJnZW5lcmF0ZWRDaGFydENvbG9yc1wiXHJcbiAgICBbbGVnZW5kXT1cInZhcmlhYmxlV2lkdGhDaGFydExlZ2VuZFwiXHJcbiAgICBbY2hhcnRUeXBlXT1cIididWJibGUnXCI+XHJcbiAgPC9jYW52YXM+XHJcbjwvZGl2PlxyXG4iXX0=