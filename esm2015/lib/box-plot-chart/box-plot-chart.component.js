import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlobalChartOptions } from '../global-chart-options';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
import * as i0 from "@angular/core";
import * as i1 from "angular-plotly.js";
export class BoxPlotChartComponent {
    constructor() {
        this.boxPlotChartOptions = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.boxPlotData = [];
        this.boxPlotChartConfig = {
            displayModeBar: false,
            displaylogo: false,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d']
        };
    }
    ngOnInit() {
        if (!this.boxPlotChartOptions || Object.keys(this.boxPlotChartOptions).length == 0) {
            this.boxPlotChartOptions = new GlobalChartOptions().boxPlotChartOptions;
        }
        this.boxPlotChartData.forEach(chartData => {
            let data = {
                y: chartData.yValues,
                name: chartData.name,
                type: 'box',
                boxpoints: chartData.boxpoints,
                marker: { color: chartData.markerColor }
            };
            this.boxPlotData.push(data);
        });
    }
    chartClicked(event) {
        if (!(event instanceof MouseEvent)) {
            this.chartClick.emit(event);
        }
    }
    chartHovered(event) {
        this.chartHover.emit(event);
    }
    chartAfterPlotted(event) {
        let _this = this;
        d3.selectAll(".xaxislayer-above").selectAll('text').on("click", function (d) {
            _this.labelClick.emit(d.text);
        });
    }
}
BoxPlotChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BoxPlotChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BoxPlotChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: BoxPlotChartComponent, selector: "lib-box-plot-chart", inputs: { boxPlotChartOptions: "boxPlotChartOptions", boxPlotChartData: "boxPlotChartData" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, ngImport: i0, template: "<div>\r\n  <plotly-plot [data]=\"boxPlotData\" [layout]=\"boxPlotChartOptions\" [config]=\"boxPlotChartConfig\" \r\n    [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\r\n    (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\r\n  </plotly-plot>\r\n</div>\r\n", styles: [""], components: [{ type: i1.PlotComponent, selector: "plotly-plot", inputs: ["revision", "debug", "useResizeHandler", "data", "layout", "config", "frames", "style", "divId", "className"], outputs: ["initialized", "update", "purge", "error", "afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "buttonClicked", "click", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "relayout", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "transitioning", "transitionInterrupted", "unhover"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BoxPlotChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-box-plot-chart',
                    templateUrl: './box-plot-chart.component.html',
                    styleUrls: ['./box-plot-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { boxPlotChartOptions: [{
                type: Input
            }], boxPlotChartData: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }], labelClick: [{
                type: Output
            }] } });
export class BoxPlotChartData {
    constructor() {
        this.markerColor = GlobalChartColors.globalBackgroundColors[0];
        this.boxpoints = false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXBsb3QtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvYm94LXBsb3QtY2hhcnQvYm94LXBsb3QtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvYm94LXBsb3QtY2hhcnQvYm94LXBsb3QtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTzNELE1BQU0sT0FBTyxxQkFBcUI7SUFnQmhDO1FBZFMsd0JBQW1CLEdBQVEsRUFBRSxDQUFDO1FBRTdCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBRXhCLHVCQUFrQixHQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLHNCQUFzQixFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztTQUM3QyxDQUFDO0lBR0YsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN4QyxJQUFJLElBQUksR0FBRztnQkFDVCxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDcEIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO2dCQUM5QixNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBQzthQUN2QyxDQUFBO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQVU7UUFFNUIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUFVO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxLQUFVO1FBRWpDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO1lBRXhFLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tIQXpEVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixtUENWbEMsNlVBTUE7MkZESWEscUJBQXFCO2tCQUxqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzswRUFHVSxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNJLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNOztBQXVEVCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBSUUsZ0JBQVcsR0FBWSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxjQUFTLEdBQVMsS0FBSyxDQUFDO0lBQzFCLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ib3gtcGxvdC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JveC1wbG90LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib3gtcGxvdC1jaGFydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3hQbG90Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGJveFBsb3RDaGFydE9wdGlvbnM6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGJveFBsb3RDaGFydERhdGE6IEJveFBsb3RDaGFydERhdGFbXTtcclxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgIFxyXG4gIFxyXG4gIGJveFBsb3REYXRhOiBhbnlbXSA9IFtdOyAgXHJcbiAgXHJcbiAgYm94UGxvdENoYXJ0Q29uZmlnOiBhbnkgPSB7XHJcbiAgICBkaXNwbGF5TW9kZUJhcjogZmFsc2UsXHJcbiAgICBkaXNwbGF5bG9nbzogZmFsc2UsICAgICAgXHJcbiAgICBtb2RlQmFyQnV0dG9uc1RvUmVtb3ZlOiBbJ3BhbjJkJywgJ2xhc3NvMmQnXVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyAgICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJveFBsb3RDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5ib3hQbG90Q2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmJveFBsb3RDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkuYm94UGxvdENoYXJ0T3B0aW9ucztcclxuICAgIH0gICAgXHJcblxyXG4gICAgdGhpcy5ib3hQbG90Q2hhcnREYXRhLmZvckVhY2goY2hhcnREYXRhID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgeTogY2hhcnREYXRhLnlWYWx1ZXMsXHJcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXHJcbiAgICAgICAgdHlwZTogJ2JveCcsICAgICAgICBcclxuICAgICAgICBib3hwb2ludHM6IGNoYXJ0RGF0YS5ib3hwb2ludHMsXHJcbiAgICAgICAgbWFya2VyOiB7Y29sb3I6IGNoYXJ0RGF0YS5tYXJrZXJDb2xvcn0gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJveFBsb3REYXRhLnB1c2goZGF0YSk7XHJcbiAgICB9KTsgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gICAgXHJcbiAgcHVibGljIGNoYXJ0Q2xpY2tlZChldmVudDogYW55KSB7XHJcblxyXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xyXG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGV2ZW50OiBhbnkpIHtcclxuICBcclxuICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcbiAgICBcclxuICBwdWJsaWMgY2hhcnRBZnRlclBsb3R0ZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICBcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7ICBcclxuICAgIGQzLnNlbGVjdEFsbChcIi54YXhpc2xheWVyLWFib3ZlXCIpLnNlbGVjdEFsbCgndGV4dCcpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZCkge1xyXG5cclxuICAgICAgX3RoaXMubGFiZWxDbGljay5lbWl0KGQudGV4dCk7ICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm94UGxvdENoYXJ0RGF0YSB7XHJcblxyXG4gIHlWYWx1ZXM6IG51bWJlcltdO1xyXG4gIG5hbWU6IHN0cmluZzsgIFxyXG4gIG1hcmtlckNvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXTsgIFxyXG4gIGJveHBvaW50cz86IGFueSA9IGZhbHNlO1xyXG59XHJcbiIsIjxkaXY+XHJcbiAgPHBsb3RseS1wbG90IFtkYXRhXT1cImJveFBsb3REYXRhXCIgW2xheW91dF09XCJib3hQbG90Q2hhcnRPcHRpb25zXCIgW2NvbmZpZ109XCJib3hQbG90Q2hhcnRDb25maWdcIiBcclxuICAgIFtyZXZpc2lvbl09XCIwXCIgW2RlYnVnXT1cInRydWVcIiBbdXNlUmVzaXplSGFuZGxlcl09XCJ0cnVlXCJcclxuICAgIChjbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiIChob3Zlcik9XCJjaGFydEhvdmVyZWQoJGV2ZW50KVwiIChhZnRlclBsb3QpPVwiY2hhcnRBZnRlclBsb3R0ZWQoJGV2ZW50KVwiPlxyXG4gIDwvcGxvdGx5LXBsb3Q+XHJcbjwvZGl2PlxyXG4iXX0=