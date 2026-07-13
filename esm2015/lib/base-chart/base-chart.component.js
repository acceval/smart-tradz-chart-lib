import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import * as i0 from "@angular/core";
export class BaseChartComponent {
    constructor() {
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
    }
    ngOnInit() {
        if (this.options) {
            const opt = Object.assign(Object.create(Object.getPrototypeOf(this.options)), this.options);
            opt.onClick = (event, active) => {
                this.chartClicked(event, active);
            };
            opt.hover = opt.hover || {};
            opt.hover.onHover = (event, active) => {
                this.chartHovered(event, active);
            };
            this._options = opt;
        }
        else {
            const opt = {};
            opt.onClick = (event, active) => {
                this.chartClicked(event, active);
            };
            opt.hover = opt.hover || {};
            opt.hover.onHover = (event, active) => {
                this.chartHovered(event, active);
            };
            this._options = opt;
        }
        this._chart = new Chart(this.canvasRef.nativeElement, {
            type: this.type,
            data: this.data,
            options: this._options,
            plugins: this.plugins
        });
    }
    chartClicked(event, chartObj) {
        this.chartClick.emit(chartObj);
    }
    chartHovered(event, chartObj) {
        this.chartHover.emit(chartObj);
    }
    ngOnChanges(changes) {
    }
    ngOnDestroy() {
        if (this._chart) {
            this._chart.destroy();
        }
    }
}
BaseChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BaseChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BaseChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: BaseChartComponent, selector: "lib-base-chart", inputs: { type: "type", data: "data", options: "options", plugins: "plugins" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, viewQueries: [{ propertyName: "canvasRef", first: true, predicate: ["chartCanvas"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"chart-container\" style=\"position: relative; width: 100%; height: 100%\">\r\n  <canvas #chartCanvas></canvas>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BaseChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-base-chart',
                    templateUrl: './base-chart.component.html'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { canvasRef: [{
                type: ViewChild,
                args: ['chartCanvas']
            }], type: [{
                type: Input
            }], data: [{
                type: Input
            }], options: [{
                type: Input
            }], plugins: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxDQUFDOztBQU1sQyxNQUFNLE9BQU8sa0JBQWtCO0lBZTdCO1FBTmlCLGVBQVUsR0FBd0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRixlQUFVLEdBQXNELElBQUksWUFBWSxFQUFFLENBQUM7SUFNcEcsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFaEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFrQixFQUFFLE1BQWEsRUFBRSxFQUFFO2dCQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxNQUFZLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FFckI7YUFBTTtZQUVMLE1BQU0sR0FBRyxHQUF1QixFQUFFLENBQUM7WUFDbkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQWtCLEVBQUUsTUFBYSxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFpQixFQUFFLE1BQVksRUFBRSxFQUFFO2dCQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDcEQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWlCLEVBQUUsUUFBYTtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQWlCLEVBQUUsUUFBYTtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7OytHQXhFVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixzVUNQL0IsMklBR0E7MkZESWEsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7aUJBQzNDOzBFQUcyQixTQUFTO3NCQUFsQyxTQUFTO3VCQUFDLGFBQWE7Z0JBRWYsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUVXLFVBQVU7c0JBQTFCLE1BQU07Z0JBQ1UsVUFBVTtzQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgQ2hhcnQgZnJvbSAnY2hhcnQuanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYmFzZS1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtY2hhcnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBcclxuICBAVmlld0NoaWxkKCdjaGFydENhbnZhcycpIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgdHlwZTogQ2hhcnQuQ2hhcnRUeXBlO1xyXG4gIEBJbnB1dCgpIGRhdGE6IENoYXJ0LkNoYXJ0RGF0YTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBDaGFydC5DaGFydE9wdGlvbnM7XHJcbiAgQElucHV0KCkgcGx1Z2luczogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjx7IGV2ZW50PzogTW91c2VFdmVudCwgYWN0aXZlPzoge31bXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM6IENoYXJ0LkNoYXJ0T3B0aW9ucztcclxuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xyXG5cclxuICAgICAgY29uc3Qgb3B0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLm9wdGlvbnMpKSwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgIG9wdC5vbkNsaWNrID0gKGV2ZW50PzogTW91c2VFdmVudCwgYWN0aXZlPzoge31bXSkgPT4geyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGFydENsaWNrZWQoZXZlbnQsIGFjdGl2ZSk7ICAgICAgICBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIG9wdC5ob3ZlciA9IG9wdC5ob3ZlciB8fCB7fTtcclxuICAgICAgb3B0LmhvdmVyLm9uSG92ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhcnRIb3ZlcmVkKGV2ZW50LCBhY3RpdmUpOyAgICAgIFxyXG4gICAgICB9OyAgICAgIFxyXG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0O1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBvcHQ6IENoYXJ0LkNoYXJ0T3B0aW9ucyA9IHt9O1xyXG4gICAgICBvcHQub25DbGljayA9IChldmVudD86IE1vdXNlRXZlbnQsIGFjdGl2ZT86IHt9W10pID0+IHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2hhcnRDbGlja2VkKGV2ZW50LCBhY3RpdmUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgb3B0LmhvdmVyID0gb3B0LmhvdmVyIHx8IHt9O1xyXG4gICAgICBvcHQuaG92ZXIub25Ib3ZlciA9IChldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFydEhvdmVyZWQoZXZlbnQsIGFjdGl2ZSk7ICAgICAgICBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcclxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhcnRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50LCBjaGFydE9iajogYW55KSB7XHJcbiAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChjaGFydE9iaik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYXJ0SG92ZXJlZChldmVudDogTW91c2VFdmVudCwgY2hhcnRPYmo6IGFueSkge1xyXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoY2hhcnRPYmopO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcclxuICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCVcIj5cclxuICA8Y2FudmFzICNjaGFydENhbnZhcz48L2NhbnZhcz5cclxuPC9kaXY+XHJcbiJdfQ==