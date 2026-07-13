import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as d3 from 'd3';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import * as i0 from "@angular/core";
import * as i1 from "angular-plotly.js";
export class WaterfallChartComponent {
    constructor() {
        this.waterfallChartOptions = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.waterfallData = [];
        this.waterfallChartConfig = {
            displayModeBar: false,
            displaylogo: false,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d']
        };
    }
    ngOnInit() {
        this.waterfallData = [];
        this.dataProcessing();
    }
    ngOnChanges(changes) {
        if (changes['waterfallChartData']) {
            this.waterfallData = [];
            this.dataProcessing();
        }
    }
    dataProcessing() {
        if (!this.waterfallChartOptions || Object.keys(this.waterfallChartOptions).length == 0) {
            this.waterfallChartOptions = new GlobalChartOptions().waterfallChartOptions;
        }
        let datasetIndex = 0;
        let comparedIndex = 0;
        let _this = this;
        this.waterfallChartData.forEach(chartData => {
            let measures = [];
            let xLabels = [];
            let dataLabels = [];
            let yValues = [];
            let hoverinfos = [];
            let index = 0;
            chartData.waterfallItemData.forEach(itemData => {
                if (!itemData.hidden) {
                    measures.push(itemData.measure);
                    dataLabels.push(itemData.dataLabel);
                    yValues.push(itemData.value);
                    hoverinfos.push('all');
                }
                else {
                    measures.push('absolute');
                    dataLabels.push('');
                    yValues.push(0);
                    hoverinfos.push('none');
                }
                if (itemData.compared) {
                    comparedIndex = index;
                }
                xLabels.push(itemData.itemlabel);
                index++;
            });
            if (_this.waterfallExtendedChartData && _this.waterfallExtendedChartData[datasetIndex]) {
                measures.push('absolute');
                dataLabels.push('');
                yValues.push(0);
                hoverinfos.push('none');
                xLabels.push('');
                _this.waterfallExtendedChartData[datasetIndex].waterfallItemData.forEach(extendedData => {
                    if (!extendedData.hidden) {
                        measures.push(extendedData.measure);
                        dataLabels.push(extendedData.dataLabel);
                        yValues.push(extendedData.value);
                        hoverinfos.push('all');
                    }
                    else {
                        measures.push('absolute');
                        dataLabels.push('');
                        yValues.push(0);
                        hoverinfos.push('none');
                    }
                    xLabels.push(extendedData.itemlabel);
                });
            }
            if (!chartData.connectorColor) {
                chartData.connectorColor = 'rgba(36,123,160,0.5)';
            }
            if (!chartData.connectorWidth) {
                chartData.connectorWidth = 1;
            }
            let data = {
                name: chartData.name,
                type: 'waterfall',
                orientation: 'v',
                measure: measures,
                x: xLabels,
                textposition: 'outside',
                text: dataLabels,
                y: yValues,
                connector: {
                    line: {
                        color: chartData.connectorColor,
                        width: chartData.connectorWidth,
                    }
                },
                hoverinfo: hoverinfos,
                decreasing: { marker: { color: chartData.decreasingColor } },
                increasing: { marker: { color: chartData.increasingColor } },
                totals: { marker: { color: chartData.totalsColor } }
            };
            this.waterfallData.push(data);
            datasetIndex++;
        });
        if (this.waterfallExtendedChartData) {
            let min = 0;
            let max = 0;
            let comparedValue = 0;
            this.waterfallData.forEach(data => {
                let total = 0;
                let i = 0;
                data.measure.forEach(measure => {
                    if (measure == 'absolute') {
                        total = data.y[i];
                    }
                    else if (measure == 'relative') {
                        total += data.y[i];
                    }
                    if (total > max) {
                        max = total;
                    }
                    if (total < min) {
                        min = total;
                    }
                    if (i == comparedIndex) {
                        comparedValue = total;
                    }
                    i++;
                });
            });
            this.waterfallChartOptions.shapes = [{
                    x0: this.waterfallChartData[0].waterfallItemData.length,
                    x1: this.waterfallChartData[0].waterfallItemData.length,
                    y0: min,
                    y1: max,
                    line: {
                        dash: 'solid',
                        color: '#444444',
                        width: 3
                    },
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    opacity: 0.3,
                    fillcolor: '#7f7f7f'
                }, {
                    x0: comparedIndex,
                    x1: this.waterfallChartData[0].waterfallItemData.length + 1,
                    y0: comparedValue,
                    y1: comparedValue,
                    line: {
                        dash: 'dash',
                        color: '#444444',
                        width: 3
                    },
                    type: 'line',
                    xref: 'x',
                    yref: 'y',
                    opacity: 0.3,
                    fillcolor: '#7f7f7f'
                }];
            this.waterfallChartOptions.annotations = [{
                    x: Math.ceil(this.waterfallChartData[0].waterfallItemData.length / 2),
                    y: max * 1.1,
                    text: '<b>' + this.waterfallChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }, {
                    x: this.waterfallChartData[0].waterfallItemData.length
                        + Math.ceil(this.waterfallExtendedChartData[0].waterfallItemData.length / 2),
                    y: max * 1.1,
                    text: '<b>' + this.waterfallExtendedChartData[0].name + '</b>',
                    font: { color: 'rgb(60, 55, 201)' },
                    showarrow: false
                }];
        }
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
        d3.selectAll('.xaxislayer-above').selectAll('text').on('click', function (d) {
            _this.labelClick.emit(d.text);
        });
    }
}
WaterfallChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: WaterfallChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WaterfallChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: WaterfallChartComponent, selector: "lib-waterfall-chart", inputs: { waterfallChartData: "waterfallChartData", waterfallExtendedChartData: "waterfallExtendedChartData", waterfallChartOptions: "waterfallChartOptions" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, usesOnChanges: true, ngImport: i0, template: "<div>\r\n    <plotly-plot [data]=\"waterfallData\" [layout]=\"waterfallChartOptions\" [config]=\"waterfallChartConfig\" \r\n      [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\r\n      (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\r\n    </plotly-plot>\r\n</div>\r\n", styles: [":host ::ng-deep .xaxislayer-above{cursor:pointer;pointer-events:all}\n"], components: [{ type: i1.PlotComponent, selector: "plotly-plot", inputs: ["revision", "debug", "useResizeHandler", "data", "layout", "config", "frames", "style", "divId", "className"], outputs: ["initialized", "update", "purge", "error", "afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "buttonClicked", "click", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "relayout", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "transitioning", "transitionInterrupted", "unhover"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: WaterfallChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-waterfall-chart',
                    templateUrl: './waterfall-chart.component.html',
                    styleUrls: ['./waterfall-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { waterfallChartData: [{
                type: Input
            }], waterfallExtendedChartData: [{
                type: Input
            }], waterfallChartOptions: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], chartHover: [{
                type: Output
            }], labelClick: [{
                type: Output
            }] } });
export class WaterfallChartData {
    constructor() {
        this.decreasingColor = GlobalChartColors.globalBackgroundColors[0];
        this.increasingColor = GlobalChartColors.globalBackgroundColors[1];
        this.totalsColor = GlobalChartColors.globalBackgroundColors[2];
    }
    ;
    ;
}
export class WaterfallItemData {
    constructor() {
        this.hidden = false;
        this.compared = false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL3dhdGVyZmFsbC1jaGFydC93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvd2F0ZXJmYWxsLWNoYXJ0L3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQU83RCxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQztRQWJTLDBCQUFxQixHQUFRLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUUxQix5QkFBb0IsR0FBUTtZQUMxQixjQUFjLEVBQUUsS0FBSztZQUNyQixXQUFXLEVBQUUsS0FBSztZQUNsQixzQkFBc0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQztJQUdGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENB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RXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXdhdGVyZmFsbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydERhdGE6IFdhdGVyZmFsbENoYXJ0RGF0YVtdO1xyXG4gIEBJbnB1dCgpIHdhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhOiBXYXRlcmZhbGxDaGFydERhdGFbXTtcclxuICBASW5wdXQoKSB3YXRlcmZhbGxDaGFydE9wdGlvbnM6IGFueSA9IHt9O1xyXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxhYmVsQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB3YXRlcmZhbGxEYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICB3YXRlcmZhbGxDaGFydENvbmZpZzogYW55ID0ge1xyXG4gICAgZGlzcGxheU1vZGVCYXI6IGZhbHNlLFxyXG4gICAgZGlzcGxheWxvZ286IGZhbHNlLFxyXG4gICAgbW9kZUJhckJ1dHRvbnNUb1JlbW92ZTogWydwYW4yZCcsICdsYXNzbzJkJ11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy53YXRlcmZhbGxEYXRhID0gW107XHJcbiAgICB0aGlzLmRhdGFQcm9jZXNzaW5nKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snd2F0ZXJmYWxsQ2hhcnREYXRhJ10pIHtcclxuICAgICAgdGhpcy53YXRlcmZhbGxEYXRhID0gW107XHJcbiAgICAgIHRoaXMuZGF0YVByb2Nlc3NpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRhdGFQcm9jZXNzaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy53YXRlcmZhbGxDaGFydE9wdGlvbnMgPSBuZXcgR2xvYmFsQ2hhcnRPcHRpb25zKCkud2F0ZXJmYWxsQ2hhcnRPcHRpb25zO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGFzZXRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIGxldCBjb21wYXJlZEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhLmZvckVhY2goY2hhcnREYXRhID0+IHtcclxuXHJcbiAgICAgIGxldCBtZWFzdXJlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgbGV0IHhMYWJlbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGxldCBkYXRhTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBsZXQgeVZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgbGV0IGhvdmVyaW5mb3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgIGNoYXJ0RGF0YS53YXRlcmZhbGxJdGVtRGF0YS5mb3JFYWNoKGl0ZW1EYXRhID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtRGF0YS5oaWRkZW4pIHtcclxuICAgICAgICAgIG1lYXN1cmVzLnB1c2goaXRlbURhdGEubWVhc3VyZSk7XHJcbiAgICAgICAgICBkYXRhTGFiZWxzLnB1c2goaXRlbURhdGEuZGF0YUxhYmVsKTtcclxuICAgICAgICAgIHlWYWx1ZXMucHVzaChpdGVtRGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICBob3ZlcmluZm9zLnB1c2goJ2FsbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZWFzdXJlcy5wdXNoKCdhYnNvbHV0ZScpO1xyXG4gICAgICAgICAgZGF0YUxhYmVscy5wdXNoKCcnKTtcclxuICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcclxuICAgICAgICAgIGhvdmVyaW5mb3MucHVzaCgnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbURhdGEuY29tcGFyZWQpIHtcclxuICAgICAgICAgIGNvbXBhcmVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhMYWJlbHMucHVzaChpdGVtRGF0YS5pdGVtbGFiZWwpO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKF90aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhICYmIF90aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhW2RhdGFzZXRJbmRleF0pIHtcclxuXHJcbiAgICAgICAgbWVhc3VyZXMucHVzaCgnYWJzb2x1dGUnKTtcclxuICAgICAgICBkYXRhTGFiZWxzLnB1c2goJycpO1xyXG4gICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcclxuICAgICAgICBob3ZlcmluZm9zLnB1c2goJ25vbmUnKTtcclxuICAgICAgICB4TGFiZWxzLnB1c2goJycpO1xyXG5cclxuICAgICAgICBfdGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YVtkYXRhc2V0SW5kZXhdLndhdGVyZmFsbEl0ZW1EYXRhLmZvckVhY2goZXh0ZW5kZWREYXRhID0+IHtcclxuICAgICAgICAgIGlmICghZXh0ZW5kZWREYXRhLmhpZGRlbikge1xyXG4gICAgICAgICAgICBtZWFzdXJlcy5wdXNoKGV4dGVuZGVkRGF0YS5tZWFzdXJlKTtcclxuICAgICAgICAgICAgZGF0YUxhYmVscy5wdXNoKGV4dGVuZGVkRGF0YS5kYXRhTGFiZWwpO1xyXG4gICAgICAgICAgICB5VmFsdWVzLnB1c2goZXh0ZW5kZWREYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdhbGwnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lYXN1cmVzLnB1c2goJ2Fic29sdXRlJyk7XHJcbiAgICAgICAgICAgIGRhdGFMYWJlbHMucHVzaCgnJyk7XHJcbiAgICAgICAgICAgIHlWYWx1ZXMucHVzaCgwKTtcclxuICAgICAgICAgICAgaG92ZXJpbmZvcy5wdXNoKCdub25lJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB4TGFiZWxzLnB1c2goZXh0ZW5kZWREYXRhLml0ZW1sYWJlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yKSB7XHJcbiAgICAgICAgY2hhcnREYXRhLmNvbm5lY3RvckNvbG9yID0gJ3JnYmEoMzYsMTIzLDE2MCwwLjUpJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCkge1xyXG4gICAgICAgIGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgbmFtZTogY2hhcnREYXRhLm5hbWUsXHJcbiAgICAgICAgdHlwZTogJ3dhdGVyZmFsbCcsXHJcbiAgICAgICAgb3JpZW50YXRpb246ICd2JyxcclxuICAgICAgICBtZWFzdXJlOiBtZWFzdXJlcyxcclxuICAgICAgICB4OiB4TGFiZWxzLFxyXG4gICAgICAgIHRleHRwb3NpdGlvbjogJ291dHNpZGUnLFxyXG4gICAgICAgIHRleHQ6IGRhdGFMYWJlbHMsXHJcbiAgICAgICAgeTogeVZhbHVlcyxcclxuICAgICAgICBjb25uZWN0b3I6IHtcclxuICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgY29sb3I6IGNoYXJ0RGF0YS5jb25uZWN0b3JDb2xvcixcclxuICAgICAgICAgICAgd2lkdGg6IGNoYXJ0RGF0YS5jb25uZWN0b3JXaWR0aCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhvdmVyaW5mbzogaG92ZXJpbmZvcyxcclxuICAgICAgICBkZWNyZWFzaW5nOiB7IG1hcmtlcjogeyBjb2xvcjogY2hhcnREYXRhLmRlY3JlYXNpbmdDb2xvciB9IH0sXHJcbiAgICAgICAgaW5jcmVhc2luZzogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS5pbmNyZWFzaW5nQ29sb3IgfSB9LFxyXG4gICAgICAgIHRvdGFsczogeyBtYXJrZXI6IHsgY29sb3I6IGNoYXJ0RGF0YS50b3RhbHNDb2xvciB9IH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICBkYXRhc2V0SW5kZXgrKztcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy53YXRlcmZhbGxFeHRlbmRlZENoYXJ0RGF0YSkge1xyXG4gICAgICBsZXQgbWluOiBudW1iZXIgPSAwO1xyXG4gICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICBsZXQgY29tcGFyZWRWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgIHRoaXMud2F0ZXJmYWxsRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCB0b3RhbDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcclxuICAgICAgICBkYXRhLm1lYXN1cmUuZm9yRWFjaChtZWFzdXJlID0+IHtcclxuICAgICAgICAgIGlmIChtZWFzdXJlID09ICdhYnNvbHV0ZScpIHtcclxuICAgICAgICAgICAgdG90YWwgPSBkYXRhLnlbaV07XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG1lYXN1cmUgPT0gJ3JlbGF0aXZlJykge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBkYXRhLnlbaV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodG90YWwgPiBtYXgpIHtcclxuICAgICAgICAgICAgbWF4ID0gdG90YWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodG90YWwgPCBtaW4pIHtcclxuICAgICAgICAgICAgbWluID0gdG90YWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaSA9PSBjb21wYXJlZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbXBhcmVkVmFsdWUgPSB0b3RhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLndhdGVyZmFsbENoYXJ0T3B0aW9ucy5zaGFwZXMgPSBbe1xyXG4gICAgICAgIHgwOiB0aGlzLndhdGVyZmFsbENoYXJ0RGF0YVswXS53YXRlcmZhbGxJdGVtRGF0YS5sZW5ndGgsXHJcbiAgICAgICAgeDE6IHRoaXMud2F0ZXJmYWxsQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCxcclxuICAgICAgICB5MDogbWluLFxyXG4gICAgICAgIHkxOiBtYXgsXHJcbiAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgZGFzaDogJ3NvbGlkJyxcclxuICAgICAgICAgIGNvbG9yOiAnIzQ0NDQ0NCcsXHJcbiAgICAgICAgICB3aWR0aDogM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgIHhyZWY6ICd4JyxcclxuICAgICAgICB5cmVmOiAneScsXHJcbiAgICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICAgIGZpbGxjb2xvcjogJyM3ZjdmN2YnXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB4MDogY29tcGFyZWRJbmRleCxcclxuICAgICAgICB4MTogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoICsgMSxcclxuICAgICAgICB5MDogY29tcGFyZWRWYWx1ZSxcclxuICAgICAgICB5MTogY29tcGFyZWRWYWx1ZSxcclxuICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICBkYXNoOiAnZGFzaCcsXHJcbiAgICAgICAgICBjb2xvcjogJyM0NDQ0NDQnLFxyXG4gICAgICAgICAgd2lkdGg6IDNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICB4cmVmOiAneCcsXHJcbiAgICAgICAgeXJlZjogJ3knLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgICBmaWxsY29sb3I6ICcjN2Y3ZjdmJ1xyXG4gICAgICB9XTtcclxuXHJcbiAgICAgIHRoaXMud2F0ZXJmYWxsQ2hhcnRPcHRpb25zLmFubm90YXRpb25zID0gW3tcclxuICAgICAgICB4OiBNYXRoLmNlaWwodGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoIC8gMiksXHJcbiAgICAgICAgeTogbWF4ICogMS4xLFxyXG4gICAgICAgIHRleHQ6ICc8Yj4nICsgdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ubmFtZSArICc8L2I+JyxcclxuICAgICAgICBmb250OiB7IGNvbG9yOiAncmdiKDYwLCA1NSwgMjAxKScgfSxcclxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXHJcblxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgeDogdGhpcy53YXRlcmZhbGxDaGFydERhdGFbMF0ud2F0ZXJmYWxsSXRlbURhdGEubGVuZ3RoXHJcbiAgICAgICAgICArIE1hdGguY2VpbCh0aGlzLndhdGVyZmFsbEV4dGVuZGVkQ2hhcnREYXRhWzBdLndhdGVyZmFsbEl0ZW1EYXRhLmxlbmd0aCAvIDIpLFxyXG4gICAgICAgIHk6IG1heCAqIDEuMSxcclxuICAgICAgICB0ZXh0OiAnPGI+JyArIHRoaXMud2F0ZXJmYWxsRXh0ZW5kZWRDaGFydERhdGFbMF0ubmFtZSArICc8L2I+JyxcclxuICAgICAgICBmb250OiB7IGNvbG9yOiAncmdiKDYwLCA1NSwgMjAxKScgfSxcclxuICAgICAgICBzaG93YXJyb3c6IGZhbHNlXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYXJ0Q2xpY2tlZChldmVudDogYW55KSB7XHJcblxyXG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xyXG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhcnRBZnRlclBsb3R0ZWQoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBkMy5zZWxlY3RBbGwoJy54YXhpc2xheWVyLWFib3ZlJykuc2VsZWN0QWxsKCd0ZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcclxuXHJcbiAgICAgIF90aGlzLmxhYmVsQ2xpY2suZW1pdChkLnRleHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsQ2hhcnREYXRhIHtcclxuXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvbm5lY3RvckNvbG9yPzogc3RyaW5nO1xyXG4gIGNvbm5lY3RvcldpZHRoPzogbnVtYmVyO1xyXG4gIHdhdGVyZmFsbEl0ZW1EYXRhOiBXYXRlcmZhbGxJdGVtRGF0YVtdO1xyXG4gIGRlY3JlYXNpbmdDb2xvcj86IHN0cmluZyA9IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF07XHJcbiAgaW5jcmVhc2luZ0NvbG9yPzogc3RyaW5nID0gR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1sxXTs7XHJcbiAgdG90YWxzQ29sb3I/OiBzdHJpbmcgPSBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzJdOztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdGVyZmFsbEl0ZW1EYXRhIHtcclxuXHJcbiAgbWVhc3VyZTogc3RyaW5nO1xyXG4gIGl0ZW1sYWJlbDogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbiAgZGF0YUxhYmVsOiBzdHJpbmc7XHJcbiAgaGlkZGVuPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbXBhcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiIsIjxkaXY+XHJcbiAgICA8cGxvdGx5LXBsb3QgW2RhdGFdPVwid2F0ZXJmYWxsRGF0YVwiIFtsYXlvdXRdPVwid2F0ZXJmYWxsQ2hhcnRPcHRpb25zXCIgW2NvbmZpZ109XCJ3YXRlcmZhbGxDaGFydENvbmZpZ1wiIFxyXG4gICAgICBbcmV2aXNpb25dPVwiMFwiIFtkZWJ1Z109XCJ0cnVlXCIgW3VzZVJlc2l6ZUhhbmRsZXJdPVwidHJ1ZVwiXHJcbiAgICAgIChjbGljayk9XCJjaGFydENsaWNrZWQoJGV2ZW50KVwiIChob3Zlcik9XCJjaGFydEhvdmVyZWQoJGV2ZW50KVwiIChhZnRlclBsb3QpPVwiY2hhcnRBZnRlclBsb3R0ZWQoJGV2ZW50KVwiPlxyXG4gICAgPC9wbG90bHktcGxvdD5cclxuPC9kaXY+XHJcbiJdfQ==