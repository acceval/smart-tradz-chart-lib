import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
import * as i0 from "@angular/core";
import * as i1 from "ng2-charts";
export class PieChartComponent {
    constructor() {
        this.pieChartOptions = {};
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.pieChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        if (!this.pieChartColors || Object.keys(this.pieChartColors).length == 0) {
            this.pieChartColors = [{
                    backgroundColor: [],
                }];
            let globalColors = new GlobalChartColors().globalColors;
            globalColors.forEach(color => {
                this.pieChartColors[0].backgroundColor.push(color.backgroundColor);
            });
        }
        if (!this.pieChartOptions || Object.keys(this.pieChartOptions).length == 0) {
            this.pieChartOptions = new GlobalChartOptions().pieChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.pieChartOptions = SimpleChartConfig.populateChartConfig(this.pieChartOptions, this.simpleChartConfig);
            }
        }
    }
    ngOnInit() {
        if (!this.pieChartPlugins) {
            this.pieChartPlugins = [];
        }
        this.pieChartPlugins.push(pluginDataLabels);
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
PieChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PieChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PieChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: PieChartComponent, selector: "lib-pie-chart", inputs: { pieChartOptions: "pieChartOptions", pieChartLabels: "pieChartLabels", pieChartData: "pieChartData", pieChartLegend: "pieChartLegend", pieChartPlugins: "pieChartPlugins", pieChartColors: "pieChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, ngImport: i0, template: "<div style=\"display: block;\">\r\n  <canvas baseChart\r\n    [data]=\"pieChartData\"\r\n    [labels]=\"pieChartLabels\"    \r\n    [options]=\"pieChartOptions\"\r\n    [plugins]=\"pieChartPlugins\"    \r\n    [colors]=\"pieChartColors\" \r\n    [legend]=\"pieChartLegend\"\r\n    [chartType]=\"'pie'\"    \r\n    (chartHover)=\"chartHovered($event)\"\r\n    (chartClick)=\"chartClicked($event)\">\r\n  </canvas>\r\n</div>\r\n", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PieChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-pie-chart',
                    templateUrl: './pie-chart.component.html',
                    styleUrls: ['./pie-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { pieChartOptions: [{
                type: Input
            }], pieChartLabels: [{
                type: Input
            }], pieChartData: [{
                type: Input
            }], pieChartLegend: [{
                type: Input
            }], pieChartPlugins: [{
                type: Input
            }], pieChartColors: [{
                type: Input
            }], simpleChartConfig: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTzNELE1BQU0sT0FBTyxpQkFBaUI7SUFhNUI7UUFYUyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBWSxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDO29CQUNuQixlQUFlLEVBQUUsRUFBRTtpQkFDcEIsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxZQUFZLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN4RCxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUVoRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDL0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QztRQUN4RSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVNLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXVDO1FBQ3hFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs4R0FuRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsc1hDYjlCLDRhQWFBOzJGREFhLGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzFDOzBFQUdVLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5pbXBvcnQgKiBhcyBwbHVnaW5EYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQ29sb3IgfSBmcm9tICduZzItY2hhcnRzJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItcGllLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGllLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGllQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwaWVDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xyXG4gIEBJbnB1dCgpIHBpZUNoYXJ0TGFiZWxzOiBMYWJlbFtdID0gW107XHJcbiAgQElucHV0KCkgcGllQ2hhcnREYXRhOiBudW1iZXJbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBpZUNoYXJ0TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwaWVDaGFydFBsdWdpbnM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgcGllQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXTsgIFxyXG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xyXG5cclxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICghdGhpcy5waWVDaGFydENvbG9ycyB8fCBPYmplY3Qua2V5cyh0aGlzLnBpZUNoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLnBpZUNoYXJ0Q29sb3JzID0gW3sgICBcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXHJcbiAgICAgICAgfV07ICBcclxuICAgICAgbGV0IGdsb2JhbENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcclxuICAgICAgZ2xvYmFsQ29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgIHRoaXMucGllQ2hhcnRDb2xvcnNbMF0uYmFja2dyb3VuZENvbG9yLnB1c2goY29sb3IuYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBpZUNoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLnBpZUNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5waWVDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkucGllQ2hhcnRPcHRpb25zO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkgeyAgICAgICBcclxuICAgICAgICB0aGlzLnBpZUNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5waWVDaGFydE9wdGlvbnMsIFxyXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XHJcbiAgICAgIH1cclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5waWVDaGFydFBsdWdpbnMpIHtcclxuICAgICAgdGhpcy5waWVDaGFydFBsdWdpbnMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMucGllQ2hhcnRQbHVnaW5zLnB1c2gocGx1Z2luRGF0YUxhYmVscyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcclxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXHJcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPlxyXG4gIDxjYW52YXMgYmFzZUNoYXJ0XHJcbiAgICBbZGF0YV09XCJwaWVDaGFydERhdGFcIlxyXG4gICAgW2xhYmVsc109XCJwaWVDaGFydExhYmVsc1wiICAgIFxyXG4gICAgW29wdGlvbnNdPVwicGllQ2hhcnRPcHRpb25zXCJcclxuICAgIFtwbHVnaW5zXT1cInBpZUNoYXJ0UGx1Z2luc1wiICAgIFxyXG4gICAgW2NvbG9yc109XCJwaWVDaGFydENvbG9yc1wiIFxyXG4gICAgW2xlZ2VuZF09XCJwaWVDaGFydExlZ2VuZFwiXHJcbiAgICBbY2hhcnRUeXBlXT1cIidwaWUnXCIgICAgXHJcbiAgICAoY2hhcnRIb3Zlcik9XCJjaGFydEhvdmVyZWQoJGV2ZW50KVwiXHJcbiAgICAoY2hhcnRDbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiPlxyXG4gIDwvY2FudmFzPlxyXG48L2Rpdj5cclxuIl19