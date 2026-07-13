import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1$1 from 'angular-plotly.js';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import * as i1 from 'ng2-charts';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as Chart from 'chart.js';
import * as d3$1 from 'd3';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import * as waterfallPlugin from 'chartjs-plugin-waterfall';

class ChartLibService {
    constructor() { }
}
ChartLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChartLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ChartLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChartLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ChartLibComponent, selector: "lib-chart-lib", ngImport: i0, template: `
    <p>
      chart-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart-lib',
                    template: `
    <p>
      chart-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SimpleChartConfig {
    constructor() {
        this.isDisplayDataLabel = false;
        this.dataLabelAnchor = 'center';
        this.dataLabelAlign = 'center';
        this.yAxisLeftLabel = '';
        this.yAxisRightLabel = '';
        this.xAxisLabel = '';
        this.isDisplayLegend = true;
        this.legendPosition = 'top';
        this.isLegendPointStyle = false;
        this.isStacked = false;
        this.isDisplayYaxisLeftGrid = true;
        this.isDisplayYaxisRightGrid = false;
        this.isDisplayXaxisGrid = true;
        this.fontFamily = 'Helvetica Neue';
        this.fontSize = 12;
        this.fontColor = 'rgba(0,0,0,0.5)';
        this.gridColor = 'rgba(0,0,0,0.1)';
        this.isHorizontalBar = false;
        this.xAxisBeginAtZero = false;
        this.yAxisBeginAtZero = false;
    }
    static populateChartConfig(chartOptions, chartConfig) {
        if (chartConfig.isDisplayDataLabel) {
            let dataLabels = {
                display: true,
                anchor: chartConfig.dataLabelAnchor,
                align: chartConfig.dataLabelAlign,
            };
            chartOptions.plugins = { dataLabels };
        }
        if (chartConfig.yAxisLeftLabel.length > 0) {
            chartOptions.scales.yAxes[0].scaleLabel = {
                display: true,
                labelString: chartConfig.yAxisLeftLabel
            };
            chartOptions.scales.yAxes[0].gridLines = {
                display: chartConfig.isDisplayYaxisLeftGrid,
                color: chartConfig.gridColor
            };
            chartOptions.scales.yAxes[0].ticks = {
                beginAtZero: chartConfig.yAxisBeginAtZero,
                fontFamily: chartConfig.fontFamily,
                fontSize: chartConfig.fontSize,
                fontColor: chartConfig.fontColor,
            };
        }
        if (chartConfig.yAxisRightLabel.length > 0) {
            if (chartOptions.scales.yAxes.length == 1) {
                chartOptions.scales.yAxes.push({
                    position: 'right',
                    gridLines: { display: chartConfig.isDisplayYaxisRightGrid },
                    scaleLabel: {
                        display: true,
                        labelString: chartConfig.yAxisRightLabel
                    },
                    ticks: {
                        beginAtZero: chartConfig.yAxisBeginAtZero,
                        fontFamily: chartConfig.fontFamily,
                        fontSize: chartConfig.fontSize,
                        fontColor: chartConfig.fontColor
                    }
                });
            }
        }
        if (chartConfig.xAxisLabel.length > 0) {
            chartOptions.scales.xAxes[0].scaleLabel = {
                display: true,
                labelString: chartConfig.xAxisLabel
            };
            chartOptions.scales.xAxes[0].ticks = {
                fontFamily: chartConfig.fontFamily,
                fontSize: chartConfig.fontSize,
                fontColor: chartConfig.fontColor
            };
        }
        if (chartConfig.isDisplayLegend) {
            let positionType = 'top';
            if (chartConfig.legendPosition == 'top') {
                positionType = 'top';
            }
            else if (chartConfig.legendPosition == 'bottom') {
                positionType = 'bottom';
            }
            else if (chartConfig.legendPosition == 'left') {
                positionType = 'left';
            }
            else if (chartConfig.legendPosition == 'right') {
                positionType = 'right';
            }
            chartOptions.legend = {
                display: true,
                position: positionType
            };
        }
        else {
            chartOptions.legend = {
                display: false
            };
        }
        if (chartConfig.isLegendPointStyle) {
            if (!chartOptions.legend.labels) {
                chartOptions.legend.labels = {};
            }
            chartOptions.legend.labels.usePointStyle = true;
        }
        if (chartConfig.isStacked) {
            chartOptions.scales.yAxes[0].stacked = true;
            chartOptions.scales.xAxes[0].stacked = true;
        }
        return chartOptions;
    }
}

class GlobalChartColors {
    constructor() {
        this.globalColors = [
            {
                backgroundColor: 'rgba(36,123,160,0.6)',
                borderColor: 'rgba(36,123,160,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
                cubicInterpolationMode: 'monotone',
            },
            {
                backgroundColor: 'rgba(107,76,154,0.6)',
                borderColor: 'rgba(69,49,99,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
            },
            {
                backgroundColor: 'rgba(112,193,179,0.6)',
                borderColor: 'rgba(112,193,179,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
            },
            {
                backgroundColor: 'rgba(235,84,124,0.6)',
                borderColor: 'rgba(235,84,124,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
            },
            {
                backgroundColor: 'rgba(229,227,24,0.6)',
                borderColor: 'rgba(229,227,24,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
            },
            {
                backgroundColor: 'rgba(204,194,16,0.6)',
                borderColor: 'rgba(121,115,9,1.0)',
                borderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235,84,124,1.0)',
            }
        ];
    }
}
GlobalChartColors.FONT_COLOR = 'rgba(0,0,0,0.5)';
GlobalChartColors.GRID_COLOR = 'rgba(0,0,0,0.1)';
GlobalChartColors.globalBackgroundColors = [
    'rgba(36,123,160,0.6)',
    'rgba(112,193,179,0.6)',
    'rgba(235,84,124,0.6)',
    'rgba(229,227,24,0.6)',
    'rgba(204,194,16,0.6)',
    'rgba(107,76,154,0.6)',
];

class GlobalChartOptions {
    constructor() {
        this.barChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }]
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                }
            }
        };
        this.scatterChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }]
            },
            plugins: {
                datalabels: {
                    display: false,
                }
            },
        };
        this.pieChartOptions = {
            responsive: true,
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.waterfallChartOptions = {
            xaxis: {
                type: 'category',
                automargin: true
            },
            yaxis: {
                type: 'linear',
                automargin: true
            },
            margin: {
                t: 60,
            },
            font: {
                family: GlobalChartOptions.FONT_FAMILY,
                size: GlobalChartOptions.FONT_SIZE,
                color: GlobalChartColors.FONT_COLOR
            },
            autosize: false,
            width: 1150,
            height: 800,
            showlegend: false,
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)'
        };
        this.boxPlotChartOptions = {
            xaxis: {
                type: 'category',
                showgrid: false,
                automargin: true
            },
            yaxis: {
                type: 'linear',
                showgrid: true,
                automargin: true,
                gridcolor: GlobalChartColors.GRID_COLOR,
                gridwidth: 1
            },
            font: {
                family: GlobalChartOptions.FONT_FAMILY,
                size: GlobalChartOptions.FONT_SIZE,
                color: GlobalChartColors.FONT_COLOR
            },
            autosize: true,
            showlegend: false,
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)'
        };
        this.lineChartOptions = {
            responsive: true,
            plugins: {
                datalabels: {
                    display: true,
                    anchor: 'end',
                    align: 'end',
                }
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }],
                yAxes: [{
                        id: 'y-axis-0',
                        position: 'left',
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }
                ]
            },
            annotation: {},
        };
        this.combinedChartOptions = {
            responsive: true,
            plugins: {
                datalabels: {
                    display: false,
                }
            },
            scales: {
                xAxes: [{
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }
                ]
            },
            annotation: {},
        };
        this.variableWidthChartOptions = {
            responsive: true,
            legend: {
                display: false
            },
            plugins: {
                datalabels: {
                    display: false,
                }
            },
            scales: {
                xAxes: [{
                        scaleLabel: {
                            display: true,
                        },
                        gridLines: {
                            color: GlobalChartColors.GRID_COLOR
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }],
                yAxes: [{
                        position: 'left',
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontFamily: GlobalChartOptions.FONT_FAMILY,
                            fontSize: GlobalChartOptions.FONT_SIZE,
                            fontColor: GlobalChartColors.FONT_COLOR,
                        }
                    }, {
                        position: 'right',
                        gridLines: { display: false },
                        scaleLabel: { display: false },
                        ticks: { display: false }
                    }],
            }
        };
    }
    peityPieOptions(width, height) {
        let options = {
            delimiter: null,
            fill: GlobalChartColors.globalBackgroundColors,
            height: height,
            radius: 8,
            width: width
        };
        return options;
    }
    peityDonutOptions(width, height) {
        let options = {
            delimiter: null,
            fill: GlobalChartColors.globalBackgroundColors,
            height: height,
            innerRadius: null,
            radius: 8,
            width: width
        };
        return options;
    }
    peityLineOptions(width, height) {
        let options = {
            delimiter: ",",
            fill: GlobalChartColors.globalBackgroundColors[0],
            max: null,
            min: 0,
            stroke: GlobalChartColors.globalBackgroundColors[1],
            strokeWidth: 1,
            height: height,
            width: width
        };
        return options;
    }
    peityBarOptions(width, height) {
        let options = {
            delimiter: ",",
            fill: [GlobalChartColors.globalBackgroundColors[0]],
            max: null,
            min: 0,
            padding: 0.1,
            height: height,
            width: width
        };
        return options;
    }
}
GlobalChartOptions.FONT_FAMILY = 'Helvetica Neue';
GlobalChartOptions.FONT_SIZE = 12;

class BarChartComponent {
    constructor() {
        this.barChartOptions = {};
        this.barChartLabels = [];
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartPlugins = [];
        this.barChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.chartType = 'bar';
    }
    ngOnInit() {
        if (!this.barChartColors || Object.keys(this.barChartColors).length == 0) {
            this.barChartColors = new GlobalChartColors().globalColors;
        }
        if (!this.barChartOptions || Object.keys(this.barChartOptions).length == 0) {
            this.barChartOptions = new GlobalChartOptions().barChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                if (!this.simpleChartConfig.isHorizontalBar) {
                    this.chartType = 'bar';
                }
                else {
                    this.chartType = 'horizontalBar';
                }
                this.barChartOptions = SimpleChartConfig.populateChartConfig(this.barChartOptions, this.simpleChartConfig);
            }
        }
        this.barChartPlugins.push(pluginDataLabels);
        let chartPlugin = {
            beforeInit: function (chart, options) {
                chart.legend.afterFit = function () {
                    this.height = this.height + 20;
                };
            }
        };
        this.barChartPlugins.push(chartPlugin);
    }
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
        var ctx = $('#barChart')[0].getContext("2d");
        var barChart = this.chart.chart;
        var base = barChart.chartArea.bottom;
        var height = barChart.height;
        var width = barChart.scales['x-axis-0'].width;
        var offset = $('#barChart').offset().top - $(window).scrollTop();
        if (event.pageY > base + offset) {
            var count = barChart.scales['x-axis-0'].ticks.length;
            var paddingLeft = barChart.scales['x-axis-0'].paddingLeft;
            var paddingRight = barChart.scales['x-axis-0'].paddingRight;
            var xwidth = (width - paddingLeft - paddingRight) / count;
            var barIndex = (event.offsetX - paddingLeft - barChart.scales['y-axis-0'].width) / xwidth;
            if (barIndex > 0 && barIndex < count) {
                barIndex = Math.floor(barIndex);
                var dataLabel = this.barChartLabels[barIndex];
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
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BarChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: BarChartComponent, selector: "lib-bar-chart", inputs: { barChartOptions: "barChartOptions", barChartLabels: "barChartLabels", barChartLegend: "barChartLegend", barChartData: "barChartData", barChartPlugins: "barChartPlugins", barChartColors: "barChartColors", simpleChartConfig: "simpleChartConfig" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, viewQueries: [{ propertyName: "chart", first: true, predicate: BaseChartDirective, descendants: true }], ngImport: i0, template: "\r\n    <div style=\"display: block\">\r\n      <canvas #chart id=\"barChart\" baseChart\r\n        [datasets]=\"barChartData\"\r\n        [labels]=\"barChartLabels\"\r\n        [options]=\"barChartOptions\"\r\n        [plugins]=\"barChartPlugins\"\r\n        [colors]=\"barChartColors\" \r\n        [legend]=\"barChartLegend\"\r\n        [chartType]=\"chartType\"\r\n        (chartHover)=\"chartHovered($event)\"\r\n        (chartClick)=\"chartClicked($event)\">\r\n      </canvas>\r\n    </div>\r\n", styles: [""], directives: [{ type: i1.BaseChartDirective, selector: "canvas[baseChart]", inputs: ["options", "data", "datasets", "labels", "chartType", "colors", "legend", "plugins"], outputs: ["chartClick", "chartHover"], exportAs: ["base-chart"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styleUrls: ['./bar-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { barChartOptions: [{
                type: Input
            }], barChartLabels: [{
                type: Input
            }], barChartLegend: [{
                type: Input
            }], barChartData: [{
                type: Input
            }], barChartPlugins: [{
                type: Input
            }], barChartColors: [{
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

class BaseChartComponent {
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

class BoxPlotChartComponent {
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
        d3$1.selectAll(".xaxislayer-above").selectAll('text').on("click", function (d) {
            _this.labelClick.emit(d.text);
        });
    }
}
BoxPlotChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BoxPlotChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BoxPlotChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: BoxPlotChartComponent, selector: "lib-box-plot-chart", inputs: { boxPlotChartOptions: "boxPlotChartOptions", boxPlotChartData: "boxPlotChartData" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, ngImport: i0, template: "<div>\r\n  <plotly-plot [data]=\"boxPlotData\" [layout]=\"boxPlotChartOptions\" [config]=\"boxPlotChartConfig\" \r\n    [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\r\n    (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\r\n  </plotly-plot>\r\n</div>\r\n", styles: [""], components: [{ type: i1$1.PlotComponent, selector: "plotly-plot", inputs: ["revision", "debug", "useResizeHandler", "data", "layout", "config", "frames", "style", "divId", "className"], outputs: ["initialized", "update", "purge", "error", "afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "buttonClicked", "click", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "relayout", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "transitioning", "transitionInterrupted", "unhover"] }] });
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
class BoxPlotChartData {
    constructor() {
        this.markerColor = GlobalChartColors.globalBackgroundColors[0];
        this.boxpoints = false;
    }
}

class CombinedCategoryChartComponent {
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

class CombinedMeasureChartComponent {
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
        this.combinedChartPlugins.push(pluginDataLabels);
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

class LineChartComponent {
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

class PieChartComponent {
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

class ScatterChartComponent {
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

class TreeLayoutChartComponent {
    constructor() {
        this.selectedSegmentationIndex = -1;
        this.chartClick = new EventEmitter();
    }
    ngOnInit() {
        let _this = this;
        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 90, bottom: 30, left: 90 }, width = 960 - margin.left - margin.right, height = 700 - margin.top - margin.bottom;
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("svg")
            //.attr("width", width + margin.right + margin.left)
            //.attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate("
            + margin.left + "," + margin.top + ")");
        /*var aspect = width / height;
        d3.select(window)
        .on("resize", function() {
    
            var targetWidth = svg.node().getBoundingClientRect().width;
            console.log("targetWidth : " + targetWidth);
            svg.attr("width", targetWidth);
            svg.attr("height", targetWidth / aspect);
        });*/
        var i = 0, duration = 750, root;
        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);
        // Assigns parent, children, height, depth
        root = d3.hierarchy(this.treeData, function (d) { return d.children; });
        root.x0 = height / 2;
        root.y0 = 0;
        // Collapse after the second level
        //root.children.forEach(collapse);
        update(root);
        // Collapse the node and all it's children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
        function update(source) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);
            // Compute the new tree layout.
            var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach(function (d, i) {
                console.log(i + ", d.depth " + d.depth);
                d.y = 0;
                switch (d.depth) {
                    case 6: d.y += 90;
                    case 5: d.y += 90;
                    case 4: d.y += 90;
                    case 3: d.y += 90;
                    case 2: d.y += 50;
                    case 1: d.y += 50;
                    case 0:
                        d.y += -70;
                        break;
                    default: d.y = d.depth * 90;
                }
            });
            // ****************** Nodes section ***************************
            // Update the nodes...
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });
            // Enter any new modes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("id", function (d) { return 'g-' + d.id; })
                .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
                .on('click', click);
            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style("fill", function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            });
            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", function (d) {
                //return d.children || d._children ? -13 : 13;
                return -13;
            })
                .attr("text-anchor", function (d) {
                //return d.children || d._children ? "end" : "start";
                return "end";
            })
                .text(function (d) { return d.data.name; });
            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });
            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            })
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            // Update the links...
            var link = svg.selectAll('path.link')
                .data(links, function (d) { return d.id; });
            // Enter any new links at the parent's previous position.
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", "link")
                .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
            // UPDATE
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', function (d) { return diagonal(d, d.parent); });
            // Remove any exiting links
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
                .remove();
            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
                return path;
            }
            // Toggle children on click.
            function click(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                }
                else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
                let index = -1;
                d3.selectAll("g.node").attr('class', 'node');
                if (d.data.index || d.data.index >= 0) {
                    index = d.data.index;
                    d3.select("#g-" + d.id).attr('class', 'node select');
                    d3.select("#g-" + d.id).select('circle.node')
                        .style("fill", "#f398b0");
                }
                _this.selectedSegmentationIndex = index;
                _this.chartClick.emit(d);
            }
        }
    }
}
TreeLayoutChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TreeLayoutChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TreeLayoutChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TreeLayoutChartComponent, selector: "lib-tree-layout-chart", inputs: { selectedSegmentationIndex: "selectedSegmentationIndex", treeData: "treeData" }, outputs: { chartClick: "chartClick" }, ngImport: i0, template: "<svg width=\"100%\" height=\"700\" viewBox=\"0 0 500 700\" preserveAspectRatio=\"xMidYMid meet\">  \r\n  <rect fill=\"#fbfbfb\" width=\"100%\" height=\"100%\"></rect>\r\n</svg>", styles: [":host ::ng-deep .node circle{fill:#fff;stroke:#247ba0;stroke-width:1px}:host ::ng-deep .node.select circle{stroke-width:3px;fill:#f398b0;stroke:#eb547c}:host ::ng-deep .node text{font:10px sans-serif}:host ::ng-deep .link{fill:none;stroke:#ccc;stroke-width:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TreeLayoutChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tree-layout-chart',
                    templateUrl: './tree-layout-chart.component.html',
                    styleUrls: ['./tree-layout-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { selectedSegmentationIndex: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], treeData: [{
                type: Input
            }] } });

class VariableWidthChartComponent {
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

class WaterfallChartComponent {
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
        d3$1.selectAll('.xaxislayer-above').selectAll('text').on('click', function (d) {
            _this.labelClick.emit(d.text);
        });
    }
}
WaterfallChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: WaterfallChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WaterfallChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: WaterfallChartComponent, selector: "lib-waterfall-chart", inputs: { waterfallChartData: "waterfallChartData", waterfallExtendedChartData: "waterfallExtendedChartData", waterfallChartOptions: "waterfallChartOptions" }, outputs: { chartClick: "chartClick", chartHover: "chartHover", labelClick: "labelClick" }, usesOnChanges: true, ngImport: i0, template: "<div>\r\n    <plotly-plot [data]=\"waterfallData\" [layout]=\"waterfallChartOptions\" [config]=\"waterfallChartConfig\" \r\n      [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\r\n      (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\r\n    </plotly-plot>\r\n</div>\r\n", styles: [":host ::ng-deep .xaxislayer-above{cursor:pointer;pointer-events:all}\n"], components: [{ type: i1$1.PlotComponent, selector: "plotly-plot", inputs: ["revision", "debug", "useResizeHandler", "data", "layout", "config", "frames", "style", "divId", "className"], outputs: ["initialized", "update", "purge", "error", "afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "buttonClicked", "click", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "relayout", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "transitioning", "transitionInterrupted", "unhover"] }] });
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
class WaterfallChartData {
    constructor() {
        this.decreasingColor = GlobalChartColors.globalBackgroundColors[0];
        this.increasingColor = GlobalChartColors.globalBackgroundColors[1];
        this.totalsColor = GlobalChartColors.globalBackgroundColors[2];
    }
    ;
    ;
}
class WaterfallItemData {
    constructor() {
        this.hidden = false;
        this.compared = false;
    }
}

class WaterfallPluginChartComponent {
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
WaterfallPluginChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: WaterfallPluginChartComponent, selector: "lib-waterfall-plugin-chart", inputs: { waterfallPluginChartData: "waterfallPluginChartData" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, usesOnChanges: true, ngImport: i0, template: "<lib-base-chart type=\"bar\" [data]=\"chartData\" [plugins]=\"plugins\" [options]=\"options\"\r\n  (chartHover)=\"chartHovered($event)\"\r\n  (chartClick)=\"chartClicked($event)\">\r\n</lib-base-chart>\r\n", styles: [""], components: [{ type: BaseChartComponent, selector: "lib-base-chart", inputs: ["type", "data", "options", "plugins"], outputs: ["chartClick", "chartHover"] }] });
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

// PlotlyModule.plotlyjs = PlotlyJS;
PlotlyViaCDNModule.plotlyVersion = "1.50.0"; // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.plotlyBundleNames = ['cartesian', 'finance']; // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'
class ChartLibModule {
}
ChartLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, declarations: [ChartLibComponent,
        BarChartComponent,
        BoxPlotChartComponent,
        CombinedCategoryChartComponent,
        CombinedMeasureChartComponent,
        LineChartComponent,
        PieChartComponent,
        ScatterChartComponent,
        TreeLayoutChartComponent,
        VariableWidthChartComponent,
        WaterfallChartComponent,
        WaterfallPluginChartComponent,
        BaseChartComponent], imports: [CommonModule,
        ChartsModule,
        PlotlyViaCDNModule], exports: [ChartLibComponent,
        BarChartComponent,
        BoxPlotChartComponent,
        CombinedCategoryChartComponent,
        CombinedMeasureChartComponent,
        LineChartComponent,
        PieChartComponent,
        ScatterChartComponent,
        TreeLayoutChartComponent,
        VariableWidthChartComponent,
        WaterfallChartComponent,
        WaterfallPluginChartComponent,
        BaseChartComponent,
        ChartsModule] });
ChartLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, imports: [[
            CommonModule,
            ChartsModule,
            PlotlyViaCDNModule
        ], ChartsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartLibComponent,
                        BarChartComponent,
                        BoxPlotChartComponent,
                        CombinedCategoryChartComponent,
                        CombinedMeasureChartComponent,
                        LineChartComponent,
                        PieChartComponent,
                        ScatterChartComponent,
                        TreeLayoutChartComponent,
                        VariableWidthChartComponent,
                        WaterfallChartComponent,
                        WaterfallPluginChartComponent,
                        BaseChartComponent
                    ],
                    imports: [
                        CommonModule,
                        ChartsModule,
                        PlotlyViaCDNModule
                    ],
                    exports: [
                        ChartLibComponent,
                        BarChartComponent,
                        BoxPlotChartComponent,
                        CombinedCategoryChartComponent,
                        CombinedMeasureChartComponent,
                        LineChartComponent,
                        PieChartComponent,
                        ScatterChartComponent,
                        TreeLayoutChartComponent,
                        VariableWidthChartComponent,
                        WaterfallChartComponent,
                        WaterfallPluginChartComponent,
                        BaseChartComponent,
                        ChartsModule
                    ]
                }]
        }] });

/*
 * Public API Surface of chart-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BarChartComponent, BaseChartComponent, BoxPlotChartComponent, BoxPlotChartData, ChartLibComponent, ChartLibModule, ChartLibService, CombinedCategoryChartComponent, CombinedMeasureChartComponent, GlobalChartColors, GlobalChartOptions, LineChartComponent, PieChartComponent, ScatterChartComponent, SimpleChartConfig, TreeLayoutChartComponent, VariableWidthChartComponent, WaterfallChartComponent, WaterfallChartData, WaterfallItemData, WaterfallPluginChartComponent };
//# sourceMappingURL=chart-lib.js.map
