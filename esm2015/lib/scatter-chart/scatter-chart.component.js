import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
export class ScatterChartComponent {
    constructor() {
        this.scatterChartOptions = {};
        this.scatterChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        if (!this.scatterChartColors || Object.keys(this.scatterChartColors).length == 0) {
            this.scatterChartColors = new GlobalChartColors().globalColors;
            this.scatterChartColors.forEach(color => {
                color['pointRadius'] = 5;
                color['pointHoverRadius'] = 5;
            });
        }
        if (!this.scatterChartOptions || Object.keys(this.scatterChartOptions).length == 0) {
            this.scatterChartOptions = new GlobalChartOptions().scatterChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.scatterChartOptions = SimpleChartConfig.populateChartConfig(this.scatterChartOptions, this.simpleChartConfig);
            }
        }
    }
    ngOnInit() {
    }
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
    }
    chartHovered({ event, active }) {
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    }
}
ScatterChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ScatterChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ScatterChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ScatterChartComponent, selector: "lib-scatter-chart", inputs: { scatterChartOptions: "scatterChartOptions", scatterChartLabels: "scatterChartLabels", scatterChartData: "scatterChartData", scatterChartColors: "scatterChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, ngImport: i0, template: "<div style=\"display: block\">\r\n  <canvas baseChart\r\n    [datasets]=\"scatterChartData\"\r\n    [options]=\"scatterChartOptions\"\r\n    [labels]=\"scatterChartLabels\"\r\n    [colors]=\"scatterChartColors\"\r\n    [chartType]=\"'scatter'\"\r\n    (chartHover)=\"chartHovered($event)\"\r\n    (chartClick)=\"chartClicked($event)\">\r\n  </canvas>\r\n</div>", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ScatterChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-scatter-chart',
                    templateUrl: './scatter-chart.component.html',
                    styleUrls: ['./scatter-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { scatterChartOptions: [{
                type: Input
            }], scatterChartLabels: [{
                type: Input
            }], scatterChartData: [{
                type: Input
            }], scatterChartColors: [{
                type: Input
            }], simpleChartConfig: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi9zY2F0dGVyLWNoYXJ0L3NjYXR0ZXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvc2NhdHRlci1jaGFydC9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQU8zRCxNQUFNLE9BQU8scUJBQXFCO0lBV2hDO1FBVFMsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUd2Qyx1QkFBa0IsR0FBZSxFQUFFLENBQUM7UUFDcEMsc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTNELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUV4RSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQ3ZGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QztRQUN4RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVNLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXVDO1FBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOztrSEE1Q1UscUJBQXFCO3NHQUFyQixxQkFBcUIsb1ZDWmxDLDBXQVVNOzJGREVPLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDOUM7MEVBR1UsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnREYXRhU2V0cywgQ2hhcnRUeXBlIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ25nMi1jaGFydHMnO1xyXG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xyXG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zY2F0dGVyLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2NhdHRlci1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2NhdHRlci1jaGFydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2F0dGVyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzY2F0dGVyQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7fTtcclxuICBASW5wdXQoKSBzY2F0dGVyQ2hhcnRMYWJlbHM6IExhYmVsW107XHJcbiAgQElucHV0KCkgc2NhdHRlckNoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdO1xyXG4gIEBJbnB1dCgpIHNjYXR0ZXJDaGFydENvbG9yczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xyXG4gIFxyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG5cclxuICAgIGlmICghdGhpcy5zY2F0dGVyQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5zY2F0dGVyQ2hhcnRDb2xvcnMpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2NhdHRlckNoYXJ0Q29sb3JzID0gbmV3IEdsb2JhbENoYXJ0Q29sb3JzKCkuZ2xvYmFsQ29sb3JzO1xyXG4gICAgICB0aGlzLnNjYXR0ZXJDaGFydENvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcclxuICAgICAgICBjb2xvclsncG9pbnRSYWRpdXMnXSA9IDU7XHJcbiAgICAgICAgY29sb3JbJ3BvaW50SG92ZXJSYWRpdXMnXSA9IDU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLnNjYXR0ZXJDaGFydE9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zLCBcclxuICAgICAgICAgIHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcclxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXHJcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XHJcbiAgPGNhbnZhcyBiYXNlQ2hhcnRcclxuICAgIFtkYXRhc2V0c109XCJzY2F0dGVyQ2hhcnREYXRhXCJcclxuICAgIFtvcHRpb25zXT1cInNjYXR0ZXJDaGFydE9wdGlvbnNcIlxyXG4gICAgW2xhYmVsc109XCJzY2F0dGVyQ2hhcnRMYWJlbHNcIlxyXG4gICAgW2NvbG9yc109XCJzY2F0dGVyQ2hhcnRDb2xvcnNcIlxyXG4gICAgW2NoYXJ0VHlwZV09XCInc2NhdHRlcidcIlxyXG4gICAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gICAgKGNoYXJ0Q2xpY2spPVwiY2hhcnRDbGlja2VkKCRldmVudClcIj5cclxuICA8L2NhbnZhcz5cclxuPC9kaXY+Il19