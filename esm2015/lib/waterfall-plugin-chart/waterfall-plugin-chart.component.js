import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as waterfallPlugin from 'chartjs-plugin-waterfall';
import * as i0 from "@angular/core";
import * as i1 from "../base-chart/base-chart.component";
export class WaterfallPluginChartComponent {
    constructor() {
        this.plugins = [waterfallPlugin];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.options = {
            plugins: {
                datalabels: {
                    display: false,
                },
                waterFallPlugin: {
                    stepLines: {
                        enabled: false,
                    },
                },
            },
        };
    }
    ngOnInit() {
        this.adaptDataForPlugin();
    }
    ngOnChanges(changes) {
    }
    adaptDataForPlugin() {
        if (!this.waterfallPluginChartData) {
            return;
        }
        const adaptedData = [];
        let currentTotal = 0;
        this.waterfallPluginChartData.forEach((v, idx) => {
            if (!!v.total) {
                currentTotal = v.data;
            }
            else {
                if (v.data < 0) {
                    currentTotal += v.data;
                }
                adaptedData.push({
                    data: [currentTotal],
                    waterfall: {
                        dummyStack: true
                    },
                    stack: `${idx}`
                });
                if (v.data > 0) {
                    currentTotal += v.data;
                }
            }
            if (v.backgroundColor) {
                adaptedData.push({
                    label: v.label,
                    data: [Math.abs(v.data)],
                    backgroundColor: v.backgroundColor,
                    stack: `${idx}`
                });
            }
            else {
                let backgroundColor = [];
                if (v.total) {
                    backgroundColor = ['rgba(255, 99, 132, 0.5)'];
                }
                else {
                    if (v.data > 0) {
                        backgroundColor = ['rgba(54, 162, 235, 0.5)'];
                    }
                    else {
                        backgroundColor = ['rgba(255, 206, 86, 0.5)'];
                    }
                }
                adaptedData.push({
                    label: v.label,
                    data: [Math.abs(v.data)],
                    backgroundColor: backgroundColor,
                    stack: `${idx}`
                });
            }
        });
        this.chartData = {
            labels: ['Waterfall Model'],
            datasets: adaptedData
        };
    }
    chartClicked(event) {
        this.chartClick.emit(event);
    }
    chartHovered(event) {
        this.chartHover.emit(event);
    }
}
WaterfallPluginChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: WaterfallPluginChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WaterfallPluginChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: WaterfallPluginChartComponent, selector: "lib-waterfall-plugin-chart", inputs: { waterfallPluginChartData: "waterfallPluginChartData" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, usesOnChanges: true, ngImport: i0, template: "<lib-base-chart type=\"bar\" [data]=\"chartData\" [plugins]=\"plugins\" [options]=\"options\"\r\n  (chartHover)=\"chartHovered($event)\"\r\n  (chartClick)=\"chartClicked($event)\">\r\n</lib-base-chart>\r\n", styles: [""], components: [{ type: i1.BaseChartComponent, selector: "lib-base-chart", inputs: ["type", "data", "options", "plugins"], outputs: ["chartClick", "chartHover"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: WaterfallPluginChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-waterfall-plugin-chart',
                    templateUrl: './waterfall-plugin-chart.component.html',
                    styleUrls: ['./waterfall-plugin-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { waterfallPluginChartData: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLXBsdWdpbi1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0L3dhdGVyZmFsbC1wbHVnaW4tY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvd2F0ZXJmYWxsLXBsdWdpbi1jaGFydC93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEtBQUssZUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7QUFPNUQsTUFBTSxPQUFPLDZCQUE2QjtJQVV4QztRQUxBLFlBQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWxCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUEyRTdELFlBQU8sR0FBRztZQUNSLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVMsRUFBRTt3QkFDVCxPQUFPLEVBQUUsS0FBSztxQkFDZjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQW5GRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFDbEMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUVELE1BQU0sV0FBVyxH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dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyB3YXRlcmZhbGxQbHVnaW4gZnJvbSAnY2hhcnRqcy1wbHVnaW4td2F0ZXJmYWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXdhdGVyZmFsbC1wbHVnaW4tY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB3YXRlcmZhbGxQbHVnaW5DaGFydERhdGE6IFdhdGVyZmFsbFBsdWdpbkNoYXJ0RGF0YVtdO1xyXG5cclxuICBjaGFydERhdGE6IENoYXJ0LkNoYXJ0RGF0YTtcclxuICBwbHVnaW5zID0gW3dhdGVyZmFsbFBsdWdpbl07XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRhcHREYXRhRm9yUGx1Z2luKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkYXB0RGF0YUZvclBsdWdpbigpIHtcclxuICAgIGlmICghdGhpcy53YXRlcmZhbGxQbHVnaW5DaGFydERhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkYXB0ZWREYXRhID0gW107XHJcbiAgICBsZXQgY3VycmVudFRvdGFsID0gMDtcclxuXHJcbiAgICB0aGlzLndhdGVyZmFsbFBsdWdpbkNoYXJ0RGF0YS5mb3JFYWNoKCh2LCBpZHgpID0+IHtcclxuXHJcbiAgICAgIGlmICghIXYudG90YWwpIHtcclxuICAgICAgICBjdXJyZW50VG90YWwgPSB2LmRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHYuZGF0YSA8IDApIHtcclxuICAgICAgICAgIGN1cnJlbnRUb3RhbCArPSB2LmRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGFwdGVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGRhdGE6IFtjdXJyZW50VG90YWxdLFxyXG4gICAgICAgICAgd2F0ZXJmYWxsOiB7XHJcbiAgICAgICAgICAgIGR1bW15U3RhY2s6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdGFjazogYCR7aWR4fWBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHYuZGF0YSA+IDApIHtcclxuICAgICAgICAgIGN1cnJlbnRUb3RhbCArPSB2LmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodi5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICBhZGFwdGVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiB2LmxhYmVsLFxyXG4gICAgICAgICAgZGF0YTogW01hdGguYWJzKHYuZGF0YSldLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB2LmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgIHN0YWNrOiBgJHtpZHh9YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHYudG90YWwpIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IFsncmdiYSgyNTUsIDk5LCAxMzIsIDAuNSknXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHYuZGF0YSA+IDApIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gWydyZ2JhKDU0LCAxNjIsIDIzNSwgMC41KSddO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gWydyZ2JhKDI1NSwgMjA2LCA4NiwgMC41KSddO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhZGFwdGVkRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiB2LmxhYmVsLFxyXG4gICAgICAgICAgZGF0YTogW01hdGguYWJzKHYuZGF0YSldLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICBzdGFjazogYCR7aWR4fWBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGFydERhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogWydXYXRlcmZhbGwgTW9kZWwnXSxcclxuICAgICAgZGF0YXNldHM6IGFkYXB0ZWREYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb3B0aW9ucyA9IHsgICAgXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgd2F0ZXJGYWxsUGx1Z2luOiB7XHJcbiAgICAgICAgc3RlcExpbmVzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSwgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sICAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0Q2xpY2tlZChldmVudDogYW55KSB7XHJcbiBcclxuICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoZXZlbnQ6IGFueSkge1xyXG4gIFxyXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXYXRlcmZhbGxQbHVnaW5DaGFydERhdGEge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGF0YTogbnVtYmVyO1xyXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICAvLyBtYXJrcyBkYXRhIGFzIHRvdGFsXHJcbiAgdG90YWw/OiBib29sZWFuO1xyXG59IiwiPGxpYi1iYXNlLWNoYXJ0IHR5cGU9XCJiYXJcIiBbZGF0YV09XCJjaGFydERhdGFcIiBbcGx1Z2luc109XCJwbHVnaW5zXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiXHJcbiAgKGNoYXJ0SG92ZXIpPVwiY2hhcnRIb3ZlcmVkKCRldmVudClcIlxyXG4gIChjaGFydENsaWNrKT1cImNoYXJ0Q2xpY2tlZCgkZXZlbnQpXCI+XHJcbjwvbGliLWJhc2UtY2hhcnQ+XHJcbiJdfQ==