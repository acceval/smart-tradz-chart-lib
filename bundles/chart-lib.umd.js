(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('angular-plotly.js'), require('plotly.js/dist/plotly.js'), require('chartjs-plugin-annotation'), require('chartjs-plugin-datalabels'), require('ng2-charts'), require('d3'), require('chartjs-plugin-waterfall'), require('@angular/core'), require('chart.js')) :
    typeof define === 'function' && define.amd ? define('chart-lib', ['exports', '@angular/common', 'angular-plotly.js', 'plotly.js/dist/plotly.js', 'chartjs-plugin-annotation', 'chartjs-plugin-datalabels', 'ng2-charts', 'd3', 'chartjs-plugin-waterfall', '@angular/core', 'chart.js'], factory) :
    (factory((global['chart-lib'] = {}),global.ng.common,global.angularPlotly_js,global.PlotlyJS,global.ChartAnnotation,global.pluginDataLabels,global.ng2Charts,global.d3$1,global.waterfallPlugin,global.ng.core,global.Chart));
}(this, (function (exports,common,angularPlotly_js,PlotlyJS,ChartAnnotation,pluginDataLabels,ng2Charts,d3$1,waterfallPlugin,i0,Chart) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartLibService = /** @class */ (function () {
        function ChartLibService() {
        }
        ChartLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ChartLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ ChartLibService.ngInjectableDef = i0.defineInjectable({ factory: function ChartLibService_Factory() { return new ChartLibService(); }, token: ChartLibService, providedIn: "root" });
        return ChartLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartLibComponent = /** @class */ (function () {
        function ChartLibComponent() {
        }
        /**
         * @return {?}
         */
        ChartLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ChartLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-chart-lib',
                        template: "\n    <p>\n      chart-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ChartLibComponent.ctorParameters = function () { return []; };
        return ChartLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleChartConfig = /** @class */ (function () {
        function SimpleChartConfig() {
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
        /**
         * @param {?} chartOptions
         * @param {?} chartConfig
         * @return {?}
         */
        SimpleChartConfig.populateChartConfig = /**
         * @param {?} chartOptions
         * @param {?} chartConfig
         * @return {?}
         */
            function (chartOptions, chartConfig) {
                if (chartConfig.isDisplayDataLabel) {
                    /** @type {?} */
                    var dataLabels = {
                        display: true,
                        anchor: chartConfig.dataLabelAnchor,
                        align: chartConfig.dataLabelAlign,
                    };
                    chartOptions.plugins = { dataLabels: dataLabels };
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
                    /** @type {?} */
                    var positionType = 'top';
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
            };
        return SimpleChartConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalChartColors = /** @class */ (function () {
        function GlobalChartColors() {
            this.globalColors = [
                {
                    // blue        
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
                    // purple    
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
                    // green
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
                    // red
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
                    // yellow
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
                    // earth        
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
        return GlobalChartColors;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalChartOptions = /** @class */ (function () {
        function GlobalChartOptions() {
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
                        formatter: ( /**
                         * @param {?} value
                         * @param {?} ctx
                         * @return {?}
                         */function (value, ctx) {
                            /** @type {?} */
                            var label = ctx.chart.data.labels[ctx.dataIndex];
                            return label;
                        }),
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
                autosize: true,
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
        /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GlobalChartOptions.prototype.peityPieOptions = /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                /** @type {?} */
                var options = {
                    delimiter: null,
                    fill: GlobalChartColors.globalBackgroundColors,
                    height: height,
                    radius: 8,
                    width: width
                };
                return options;
            };
        /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GlobalChartOptions.prototype.peityDonutOptions = /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                /** @type {?} */
                var options = {
                    delimiter: null,
                    fill: GlobalChartColors.globalBackgroundColors,
                    height: height,
                    innerRadius: null,
                    radius: 8,
                    width: width
                };
                return options;
            };
        /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GlobalChartOptions.prototype.peityLineOptions = /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                /** @type {?} */
                var options = {
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
            };
        /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GlobalChartOptions.prototype.peityBarOptions = /**
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (width, height) {
                /** @type {?} */
                var options = {
                    delimiter: ",",
                    fill: [GlobalChartColors.globalBackgroundColors[0]],
                    max: null,
                    min: 0,
                    padding: 0.1,
                    height: height,
                    width: width
                };
                return options;
            };
        GlobalChartOptions.FONT_FAMILY = 'Helvetica Neue';
        GlobalChartOptions.FONT_SIZE = 12;
        return GlobalChartOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BarChartComponent = /** @class */ (function () {
        function BarChartComponent() {
            this.barChartOptions = {};
            this.barChartLabels = [];
            this.barChartLegend = true;
            this.barChartData = [];
            this.barChartPlugins = [];
            this.barChartColors = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
            this.chartType = 'bar';
        }
        /**
         * @return {?}
         */
        BarChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
                /** @type {?} */
                var chartPlugin = {
                    beforeInit: ( /**
                     * @param {?} chart
                     * @param {?} options
                     * @return {?}
                     */function (chart, options) {
                        chart.legend.afterFit = ( /**
                         * @return {?}
                         */function () {
                            this.height = this.height + 20;
                        });
                    })
                };
                this.barChartPlugins.push(chartPlugin);
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        BarChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
                /** @type {?} */
                var ctx = $('#barChart')[0].getContext("2d");
                /** @type {?} */
                var barChart = this.chart.chart;
                /** @type {?} */
                var base = barChart.chartArea.bottom;
                /** @type {?} */
                var height = barChart.height;
                /** @type {?} */
                var width = barChart.scales['x-axis-0'].width;
                /** @type {?} */
                var offset = $('#barChart').offset().top - $(window).scrollTop();
                if (event.pageY > base + offset) {
                    /** @type {?} */
                    var count = barChart.scales['x-axis-0'].ticks.length;
                    /** @type {?} */
                    var paddingLeft = barChart.scales['x-axis-0'].paddingLeft;
                    /** @type {?} */
                    var paddingRight = barChart.scales['x-axis-0'].paddingRight;
                    /** @type {?} */
                    var xwidth = (width - paddingLeft - paddingRight) / count;
                    /** @type {?} */
                    var barIndex = (event.offsetX - paddingLeft - barChart.scales['y-axis-0'].width) / xwidth;
                    if (barIndex > 0 && barIndex < count) {
                        barIndex = Math.floor(barIndex);
                        /** @type {?} */
                        var dataLabel = this.barChartLabels[barIndex];
                        this.labelClick.emit(dataLabel);
                    }
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        BarChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        BarChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-bar-chart',
                        template: "\n    <div style=\"display: block\">\n      <canvas #chart id=\"barChart\" baseChart\n        [datasets]=\"barChartData\"\n        [labels]=\"barChartLabels\"\n        [options]=\"barChartOptions\"\n        [plugins]=\"barChartPlugins\"\n        [colors]=\"barChartColors\" \n        [legend]=\"barChartLegend\"\n        [chartType]=\"chartType\"\n        (chartHover)=\"chartHovered($event)\"\n        (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BarChartComponent.ctorParameters = function () { return []; };
        BarChartComponent.propDecorators = {
            barChartOptions: [{ type: i0.Input }],
            barChartLabels: [{ type: i0.Input }],
            barChartLegend: [{ type: i0.Input }],
            barChartData: [{ type: i0.Input }],
            barChartPlugins: [{ type: i0.Input }],
            barChartColors: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }],
            chart: [{ type: i0.ViewChild, args: [ng2Charts.BaseChartDirective,] }]
        };
        return BarChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BoxPlotChartComponent = /** @class */ (function () {
        function BoxPlotChartComponent() {
            this.boxPlotChartOptions = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
            this.boxPlotData = [];
            this.boxPlotChartConfig = {
                displayModeBar: false,
                displaylogo: false,
                modeBarButtonsToRemove: ['pan2d', 'lasso2d']
            };
        }
        /**
         * @return {?}
         */
        BoxPlotChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                if (!this.boxPlotChartOptions || Object.keys(this.boxPlotChartOptions).length == 0) {
                    this.boxPlotChartOptions = new GlobalChartOptions().boxPlotChartOptions;
                }
                this.boxPlotChartData.forEach(( /**
                 * @param {?} chartData
                 * @return {?}
                 */function (chartData) {
                    /** @type {?} */
                    var data = {
                        y: chartData.yValues,
                        name: chartData.name,
                        type: 'box',
                        boxpoints: chartData.boxpoints,
                        marker: { color: chartData.markerColor }
                    };
                    _this_1.boxPlotData.push(data);
                }));
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BoxPlotChartComponent.prototype.chartClicked = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!(event instanceof MouseEvent)) {
                    this.chartClick.emit(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BoxPlotChartComponent.prototype.chartHovered = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.chartHover.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BoxPlotChartComponent.prototype.chartAfterPlotted = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var _this = this;
                d3$1.selectAll(".xaxislayer-above").selectAll('text').on("click", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    _this.labelClick.emit(d.text);
                }));
            };
        BoxPlotChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-box-plot-chart',
                        template: "<div>\n  <plotly-plot [data]=\"boxPlotData\" [layout]=\"boxPlotChartOptions\" [config]=\"boxPlotChartConfig\" \n    [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n    (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n  </plotly-plot>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BoxPlotChartComponent.ctorParameters = function () { return []; };
        BoxPlotChartComponent.propDecorators = {
            boxPlotChartOptions: [{ type: i0.Input }],
            boxPlotChartData: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }]
        };
        return BoxPlotChartComponent;
    }());
    var BoxPlotChartData = /** @class */ (function () {
        function BoxPlotChartData() {
            this.markerColor = GlobalChartColors.globalBackgroundColors[0];
            this.boxpoints = false;
        }
        return BoxPlotChartData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CombinedCategoryChartComponent = /** @class */ (function () {
        function CombinedCategoryChartComponent() {
            this.combinedChartOptions = {};
            this.combinedChartLabels = [];
            this.combinedChartLegend = true;
            this.combinedChartData = [];
            this.combinedChartPlugins = [];
            this.combinedChartColors = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        CombinedCategoryChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
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
                /** @type {?} */
                var chartPlugin = {
                    beforeInit: ( /**
                     * @param {?} chart
                     * @param {?} options
                     * @return {?}
                     */function (chart, options) {
                        chart.legend.afterFit = ( /**
                         * @return {?}
                         */function () {
                            this.height = this.height + 20;
                        });
                    })
                };
                this.combinedChartPlugins.push(chartPlugin);
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        CombinedCategoryChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
                /** @type {?} */
                var ctx = $('#combinedChart')[0].getContext("2d");
                /** @type {?} */
                var combinedChart = this.chart.chart;
                /** @type {?} */
                var base = combinedChart.chartArea.bottom;
                /** @type {?} */
                var height = combinedChart.height;
                /** @type {?} */
                var width = combinedChart.scales['x-axis-0'].width;
                /** @type {?} */
                var offset = $('#combinedChart').offset().top - $(window).scrollTop();
                if (event.pageY > base + offset) {
                    /** @type {?} */
                    var count = combinedChart.scales['x-axis-0'].ticks.length;
                    /** @type {?} */
                    var paddingLeft = combinedChart.scales['x-axis-0'].paddingLeft;
                    /** @type {?} */
                    var paddingRight = combinedChart.scales['x-axis-0'].paddingRight;
                    /** @type {?} */
                    var xwidth = (width - paddingLeft - paddingRight) / count;
                    /** @type {?} */
                    var barIndex = (event.offsetX - paddingLeft - combinedChart.scales['y-axis-0'].width) / xwidth;
                    if (barIndex > 0 && barIndex < count) {
                        barIndex = Math.floor(barIndex);
                        /** @type {?} */
                        var dataLabel = this.combinedChartLabels[barIndex];
                        this.labelClick.emit(dataLabel);
                    }
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        CombinedCategoryChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        CombinedCategoryChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-combined-category-chart',
                        template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bar'\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CombinedCategoryChartComponent.ctorParameters = function () { return []; };
        CombinedCategoryChartComponent.propDecorators = {
            combinedChartOptions: [{ type: i0.Input }],
            combinedChartLabels: [{ type: i0.Input }],
            combinedChartLegend: [{ type: i0.Input }],
            combinedChartData: [{ type: i0.Input }],
            combinedChartPlugins: [{ type: i0.Input }],
            combinedChartColors: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }],
            chart: [{ type: i0.ViewChild, args: [ng2Charts.BaseChartDirective,] }]
        };
        return CombinedCategoryChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CombinedMeasureChartComponent = /** @class */ (function () {
        function CombinedMeasureChartComponent() {
            this.combinedChartOptions = {};
            this.combinedChartLabels = [];
            this.combinedChartLegend = true;
            this.combinedChartData = [];
            this.combinedChartPlugins = [];
            this.combinedChartColors = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
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
        /**
         * @return {?}
         */
        CombinedMeasureChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.combinedChartPlugins.push(pluginDataLabels);
                this.combinedChartPlugins.push(ChartAnnotation);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        CombinedMeasureChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['combinedChartData']) {
                    if (this.combinedChartData == null) {
                        return;
                    }
                    this.chart.update();
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        CombinedMeasureChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
                /** @type {?} */
                var ctx = $('#combinedChart')[0].getContext("2d");
                /** @type {?} */
                var combinedChart = this.chart.chart;
                /** @type {?} */
                var base = combinedChart.chartArea.bottom;
                /** @type {?} */
                var height = combinedChart.height;
                /** @type {?} */
                var width = combinedChart.scales['x-axis-0'].width;
                /** @type {?} */
                var offset = $('#combinedChart').offset().top - $(window).scrollTop();
                if (event.pageY > base + offset) {
                    /** @type {?} */
                    var count = combinedChart.scales['x-axis-0'].ticks.length;
                    /** @type {?} */
                    var paddingLeft = combinedChart.scales['x-axis-0'].paddingLeft;
                    /** @type {?} */
                    var paddingRight = combinedChart.scales['x-axis-0'].paddingRight;
                    /** @type {?} */
                    var xwidth = (width - paddingLeft - paddingRight) / count;
                    /** @type {?} */
                    var barIndex = (event.offsetX - paddingLeft - combinedChart.scales['y-axis-0'].width) / xwidth;
                    if (barIndex > 0 && barIndex < count) {
                        barIndex = Math.floor(barIndex);
                        /** @type {?} */
                        var dataLabel = this.combinedChartLabels[barIndex];
                        this.labelClick.emit(dataLabel);
                    }
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        CombinedMeasureChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        CombinedMeasureChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-combined-measure-chart',
                        template: "\n    <div style=\"display: block\">\n        <canvas #chart id=\"combinedChart\" baseChart\n          [datasets]=\"combinedChartData\"\n          [labels]=\"combinedChartLabels\"\n          [options]=\"combinedChartOptions\"\n          [plugins]=\"combinedChartPlugins\"\n          [colors]=\"combinedChartColors\" \n          [legend]=\"combinedChartLegend\"\n          [chartType]=\"'bubble'\"\n          [plugins]=\"combinedChartPlugins\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\">\n        </canvas>\n      </div>\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CombinedMeasureChartComponent.ctorParameters = function () { return []; };
        CombinedMeasureChartComponent.propDecorators = {
            combinedChartOptions: [{ type: i0.Input }],
            combinedChartLabels: [{ type: i0.Input }],
            combinedChartLegend: [{ type: i0.Input }],
            combinedChartData: [{ type: i0.Input }],
            combinedChartPlugins: [{ type: i0.Input }],
            combinedChartColors: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }],
            chart: [{ type: i0.ViewChild, args: [ng2Charts.BaseChartDirective,] }]
        };
        return CombinedMeasureChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LineChartComponent = /** @class */ (function () {
        function LineChartComponent() {
            this.lineChartOptions = {};
            this.lineChartLegend = true;
            this.lineChartColors = [];
            this.lineChartPlugins = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
            if (!this.lineChartColors || Object.keys(this.lineChartColors).length == 0) {
                this.lineChartColors = new GlobalChartColors().globalColors;
                this.lineChartColors.forEach(( /**
                 * @param {?} color
                 * @return {?}
                 */function (color) {
                    color['fill'] = false;
                    color['cubicInterpolationMode'] = 'monotone';
                    color['lineTension'] = 1;
                    color['pointRadius'] = 3;
                    color['pointHoverRadius'] = 3;
                }));
            }
            if (!this.lineChartOptions || Object.keys(this.lineChartOptions).length == 0) {
                this.lineChartOptions = new GlobalChartOptions().lineChartOptions;
                if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                    this.lineChartOptions = SimpleChartConfig.populateChartConfig(this.lineChartOptions, this.simpleChartConfig);
                }
            }
        }
        /**
         * @return {?}
         */
        LineChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.lineChartPlugins.push(pluginDataLabels);
                /** @type {?} */
                var chartPlugin = {
                    beforeInit: ( /**
                     * @param {?} chart
                     * @param {?} options
                     * @return {?}
                     */function (chart, options) {
                        chart.legend.afterFit = ( /**
                         * @return {?}
                         */function () {
                            this.height = this.height + 20;
                        });
                    })
                };
                this.lineChartPlugins.push(chartPlugin);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LineChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['lineChartData']) {
                    if (this.lineChartData == null) {
                        return;
                    }
                    this.chart.update();
                }
            };
        /**
         * @return {?}
         */
        LineChartComponent.prototype.update = /**
         * @return {?}
         */
            function () {
                this.chart.update();
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        LineChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
                /** @type {?} */
                var ctx = $('#lineChart')[0].getContext("2d");
                /** @type {?} */
                var lineChart = this.chart.chart;
                /** @type {?} */
                var base = lineChart.chartArea.bottom;
                /** @type {?} */
                var height = lineChart.height;
                /** @type {?} */
                var width = lineChart.scales['x-axis-0'].width;
                /** @type {?} */
                var offset = $('#lineChart').offset().top - $(window).scrollTop();
                if (event.pageY > base + offset) {
                    /** @type {?} */
                    var count = lineChart.scales['x-axis-0'].ticks.length;
                    /** @type {?} */
                    var paddingLeft = lineChart.scales['x-axis-0'].paddingLeft;
                    /** @type {?} */
                    var paddingRight = lineChart.scales['x-axis-0'].paddingRight;
                    /** @type {?} */
                    var xwidth = (width - paddingLeft - paddingRight) / count;
                    /** @type {?} */
                    var barIndex = (event.offsetX - paddingLeft - lineChart.scales['y-axis-0'].width) / xwidth;
                    if (barIndex > 0 && barIndex < count) {
                        barIndex = Math.floor(barIndex);
                        /** @type {?} */
                        var dataLabel = this.lineChartLabels[barIndex];
                        this.labelClick.emit(dataLabel);
                    }
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        LineChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        LineChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-line-chart',
                        template: "<div style=\"display: block;\">\n  <canvas #chart id=\"lineChart\" baseChart \n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"      \n      [legend]=\"lineChartLegend\"\n      [chartType]=\"'line'\"\n      [plugins]=\"lineChartPlugins\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\">\n  </canvas>  \n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LineChartComponent.ctorParameters = function () { return []; };
        LineChartComponent.propDecorators = {
            lineChartOptions: [{ type: i0.Input }],
            lineChartLabels: [{ type: i0.Input }],
            lineChartLegend: [{ type: i0.Input }],
            lineChartData: [{ type: i0.Input }],
            lineChartColors: [{ type: i0.Input }],
            lineChartPlugins: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }],
            chart: [{ type: i0.ViewChild, args: [ng2Charts.BaseChartDirective,] }]
        };
        return LineChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PieChartComponent = /** @class */ (function () {
        function PieChartComponent() {
            var _this = this;
            this.pieChartOptions = {};
            this.pieChartLabels = [];
            this.pieChartData = [];
            this.pieChartLegend = true;
            this.pieChartPlugins = [];
            this.pieChartColors = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            if (!this.pieChartColors || Object.keys(this.pieChartColors).length == 0) {
                this.pieChartColors = [{
                        backgroundColor: [],
                    }];
                /** @type {?} */
                var globalColors = new GlobalChartColors().globalColors;
                globalColors.forEach(( /**
                 * @param {?} color
                 * @return {?}
                 */function (color) {
                    _this.pieChartColors[0].backgroundColor.push(color.backgroundColor);
                }));
            }
            if (!this.pieChartOptions || Object.keys(this.pieChartOptions).length == 0) {
                this.pieChartOptions = new GlobalChartOptions().pieChartOptions;
                if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                    this.pieChartOptions = SimpleChartConfig.populateChartConfig(this.pieChartOptions, this.simpleChartConfig);
                }
            }
        }
        /**
         * @return {?}
         */
        PieChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.pieChartPlugins) {
                    this.pieChartPlugins = [];
                }
                this.pieChartPlugins.push(pluginDataLabels);
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        PieChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        PieChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        PieChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-pie-chart',
                        template: "<div style=\"display: block;\">\n  <canvas baseChart\n    [data]=\"pieChartData\"\n    [labels]=\"pieChartLabels\"    \n    [options]=\"pieChartOptions\"\n    [plugins]=\"pieChartPlugins\"    \n    [colors]=\"pieChartColors\" \n    [legend]=\"pieChartLegend\"\n    [chartType]=\"'pie'\"    \n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PieChartComponent.ctorParameters = function () { return []; };
        PieChartComponent.propDecorators = {
            pieChartOptions: [{ type: i0.Input }],
            pieChartLabels: [{ type: i0.Input }],
            pieChartData: [{ type: i0.Input }],
            pieChartLegend: [{ type: i0.Input }],
            pieChartPlugins: [{ type: i0.Input }],
            pieChartColors: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }]
        };
        return PieChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScatterChartComponent = /** @class */ (function () {
        function ScatterChartComponent() {
            this.scatterChartOptions = {};
            this.scatterChartColors = [];
            this.simpleChartConfig = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            if (!this.scatterChartColors || Object.keys(this.scatterChartColors).length == 0) {
                this.scatterChartColors = new GlobalChartColors().globalColors;
                this.scatterChartColors.forEach(( /**
                 * @param {?} color
                 * @return {?}
                 */function (color) {
                    color['pointRadius'] = 6;
                    color['pointHoverRadius'] = 6;
                }));
            }
            if (!this.scatterChartOptions || Object.keys(this.scatterChartOptions).length == 0) {
                this.scatterChartOptions = new GlobalChartOptions().scatterChartOptions;
                if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                    this.scatterChartOptions = SimpleChartConfig.populateChartConfig(this.scatterChartOptions, this.simpleChartConfig);
                }
            }
        }
        /**
         * @return {?}
         */
        ScatterChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        ScatterChartComponent.prototype.chartClicked = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartClick.emit(active[0]);
                }
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        ScatterChartComponent.prototype.chartHovered = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var event = _a.event, active = _a.active;
                if (active.length > 0) {
                    this.chartHover.emit(active[0]);
                }
            };
        ScatterChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-scatter-chart',
                        template: "<div style=\"display: block\">\n  <canvas baseChart\n    [datasets]=\"scatterChartData\"\n    [options]=\"scatterChartOptions\"\n    [labels]=\"scatterChartLabels\"\n    [colors]=\"scatterChartColors\"\n    [chartType]=\"'scatter'\"\n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ScatterChartComponent.ctorParameters = function () { return []; };
        ScatterChartComponent.propDecorators = {
            scatterChartOptions: [{ type: i0.Input }],
            scatterChartLabels: [{ type: i0.Input }],
            scatterChartData: [{ type: i0.Input }],
            scatterChartColors: [{ type: i0.Input }],
            simpleChartConfig: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }]
        };
        return ScatterChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TreeLayoutChartComponent = /** @class */ (function () {
        function TreeLayoutChartComponent() {
            this.selectedSegmentationIndex = -1;
            this.chartClick = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        TreeLayoutChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var _this = this;
                // Set the dimensions and margins of the diagram
                /** @type {?} */
                var margin = { top: 20, right: 90, bottom: 30, left: 90 };
                /** @type {?} */
                var width = 960 - margin.left - margin.right;
                /** @type {?} */
                var height = 700 - margin.top - margin.bottom;
                // append the svg object to the body of the page
                // appends a 'group' element to 'svg'
                // moves the 'group' element to the top left margin
                /** @type {?} */
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
                /** @type {?} */
                var i = 0;
                /** @type {?} */
                var duration = 750;
                /** @type {?} */
                var root;
                // declares a tree layout and assigns the size
                /** @type {?} */
                var treemap = d3.tree().size([height, width]);
                // Assigns parent, children, height, depth
                root = d3.hierarchy(this.treeData, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.children; }));
                root.x0 = height / 2;
                root.y0 = 0;
                // Collapse after the second level
                //root.children.forEach(collapse);
                update(root);
                /**
                 * @param {?} source
                 * @return {?}
                 */
                function update(source) {
                    // Assigns the x and y position for the nodes
                    /** @type {?} */
                    var treeData = treemap(root);
                    // Compute the new tree layout.
                    /** @type {?} */
                    var nodes = treeData.descendants();
                    /** @type {?} */
                    var links = treeData.descendants().slice(1);
                    // Normalize for fixed-depth.
                    nodes.forEach(( /**
                     * @param {?} d
                     * @param {?} i
                     * @return {?}
                     */function (d, i) {
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
                    }));
                    // ****************** Nodes section ***************************
                    // Update the nodes...
                    /** @type {?} */
                    var node = svg.selectAll('g.node')
                        .data(nodes, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.id || (d.id = ++i); }));
                    // Enter any new modes at the parent's previous position.
                    /** @type {?} */
                    var nodeEnter = node.enter().append('g')
                        .attr('class', 'node')
                        .attr("id", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return 'g-' + d.id; }))
                        .attr("transform", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        return "translate(" + source.y0 + "," + source.x0 + ")";
                    }))
                        .on('click', click);
                    // Add Circle for the nodes
                    nodeEnter.append('circle')
                        .attr('class', 'node')
                        .attr('r', 1e-6)
                        .style("fill", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        //return d._children ? "lightsteelblue" : "#fff";
                        return d.children || d._children ? "#fff" : "#82b1c6";
                    }));
                    // Add labels for the nodes
                    nodeEnter.append('text')
                        .attr("dy", ".35em")
                        .attr("x", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        //return d.children || d._children ? -13 : 13;
                        return -13;
                    }))
                        .attr("text-anchor", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        //return d.children || d._children ? "end" : "start";
                        return "end";
                    }))
                        .text(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.data.name; }));
                    // UPDATE
                    /** @type {?} */
                    var nodeUpdate = nodeEnter.merge(node);
                    // Transition to the proper position for the node
                    nodeUpdate.transition()
                        .duration(duration)
                        .attr("transform", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    }));
                    // Update the node attributes and style
                    nodeUpdate.select('circle.node')
                        .attr('r', 10)
                        .style("fill", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        //return d._children ? "lightsteelblue" : "#fff";
                        return d.children || d._children ? "#fff" : "#82b1c6";
                    }))
                        .attr('cursor', 'pointer');
                    // Remove any exiting nodes
                    /** @type {?} */
                    var nodeExit = node.exit().transition()
                        .duration(duration)
                        .attr("transform", ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        return "translate(" + source.y + "," + source.x + ")";
                    }))
                        .remove();
                    // On exit reduce the node circles size to 0
                    nodeExit.select('circle')
                        .attr('r', 1e-6);
                    // On exit reduce the opacity of text labels
                    nodeExit.select('text')
                        .style('fill-opacity', 1e-6);
                    // ****************** links section ***************************
                    // Update the links...
                    /** @type {?} */
                    var link = svg.selectAll('path.link')
                        .data(links, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return d.id; }));
                    // Enter any new links at the parent's previous position.
                    /** @type {?} */
                    var linkEnter = link.enter().insert('path', "g")
                        .attr("class", "link")
                        .attr('d', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        /** @type {?} */
                        var o = { x: source.x0, y: source.y0 };
                        return diagonal(o, o);
                    }));
                    // UPDATE
                    /** @type {?} */
                    var linkUpdate = linkEnter.merge(link);
                    // Transition back to the parent element position
                    linkUpdate.transition()
                        .duration(duration)
                        .attr('d', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) { return diagonal(d, d.parent); }));
                    // Remove any exiting links
                    /** @type {?} */
                    var linkExit = link.exit().transition()
                        .duration(duration)
                        .attr('d', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        /** @type {?} */
                        var o = { x: source.x, y: source.y };
                        return diagonal(o, o);
                    }))
                        .remove();
                    // Store the old positions for transition.
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        d.x0 = d.x;
                        d.y0 = d.y;
                    }));
                    // Creates a curved (diagonal) path from parent to the child nodes
                    /**
                     * @param {?} s
                     * @param {?} d
                     * @return {?}
                     */
                    function diagonal(s, d) {
                        /** @type {?} */
                        var path = "M " + s.y + " " + s.x + "\n            C " + (s.y + d.y) / 2 + " " + s.x + ",\n              " + (s.y + d.y) / 2 + " " + d.x + ",\n              " + d.y + " " + d.x;
                        return path;
                    }
                    // Toggle children on click.
                    /**
                     * @param {?} d
                     * @return {?}
                     */
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
                        /** @type {?} */
                        var index = -1;
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
            };
        TreeLayoutChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tree-layout-chart',
                        template: "<svg width=\"100%\" height=\"700\" viewBox=\"0 0 500 700\" preserveAspectRatio=\"xMidYMid meet\">  \n  <rect fill=\"#fbfbfb\" width=\"100%\" height=\"100%\"></rect>\n</svg>",
                        styles: [":host ::ng-deep .node circle{fill:#fff;stroke:#247ba0;stroke-width:1px}:host ::ng-deep .node.select circle{stroke-width:3px;fill:#f398b0;stroke:#eb547c}:host ::ng-deep .node text{font:10px sans-serif}:host ::ng-deep .link{fill:none;stroke:#ccc;stroke-width:2px}"]
                    }] }
        ];
        /** @nocollapse */
        TreeLayoutChartComponent.ctorParameters = function () { return []; };
        TreeLayoutChartComponent.propDecorators = {
            selectedSegmentationIndex: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            treeData: [{ type: i0.Input }]
        };
        return TreeLayoutChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VariableWidthChartComponent = /** @class */ (function () {
        function VariableWidthChartComponent() {
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
                // red
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
        /**
         * @return {?}
         */
        VariableWidthChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.variableWidthChartOptions || Object.keys(this.variableWidthChartOptions).length == 0) {
                    this.variableWidthChartOptions = new GlobalChartOptions().variableWidthChartOptions;
                }
                this.buildChartData();
            };
        /**
         * @private
         * @return {?}
         */
        VariableWidthChartComponent.prototype.buildChartData = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.variableWidthChartData) {
                    return;
                }
                this.generatedChartData = [];
                this.generatedChartColors = [];
                /** @type {?} */
                var _this = this;
                /** @type {?} */
                var start = 0;
                /** @type {?} */
                var index = 1;
                /** @type {?} */
                var previousState = -1;
                this.variableWidthChartData.map(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    /** @type {?} */
                    var end = start + d.xValue;
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
                }));
                if (this.limitLineData) {
                    this.generatedChartData.unshift({
                        type: 'line',
                        label: this.limitLineData.label,
                        data: [{ x: this.limitLineData.xValue, y: 0 }, { x: this.limitLineData.xValue, y: 1250 }]
                    });
                    this.generatedChartColors.unshift(this.limitLineColor);
                }
                _this.chart.update();
            };
        /**
         * @private
         * @param {?} state
         * @param {?} index
         * @return {?}
         */
        VariableWidthChartComponent.prototype.getVolumeAllocationColor = /**
         * @private
         * @param {?} state
         * @param {?} index
         * @return {?}
         */
            function (state, index) {
                /** @type {?} */
                var bg = this.volumeAllocaitonColors[0][0];
                /** @type {?} */
                var border = this.volumeAllocaitonColors[0][0];
                // state : 0=win, 1=confirm, 2=current, 4=balance
                /** @type {?} */
                var color = this.volumeAllocaitonColors[state];
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
            };
        VariableWidthChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-variable-width-chart',
                        template: "<div style=\"display: block\">\n  <canvas #chart baseChart height=\"150\"\n    [datasets]=\"generatedChartData\"\n    [options]=\"variableWidthChartOptions\"\n    [colors]=\"generatedChartColors\"\n    [legend]=\"variableWidthChartLegend\"\n    [chartType]=\"'bubble'\">\n  </canvas>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        VariableWidthChartComponent.ctorParameters = function () { return []; };
        VariableWidthChartComponent.propDecorators = {
            chart: [{ type: i0.ViewChild, args: [ng2Charts.BaseChartDirective,] }],
            variableWidthChartData: [{ type: i0.Input }],
            limitLineData: [{ type: i0.Input }],
            variableWidthChartLegend: [{ type: i0.Input }],
            variableWidthChartOptions: [{ type: i0.Input }]
        };
        return VariableWidthChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WaterfallChartComponent = /** @class */ (function () {
        function WaterfallChartComponent() {
            this.waterfallChartOptions = {};
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
            this.labelClick = new i0.EventEmitter();
            this.waterfallData = [];
            this.waterfallChartConfig = {
                displayModeBar: false,
                displaylogo: false,
                modeBarButtonsToRemove: ['pan2d', 'lasso2d']
            };
        }
        /**
         * @return {?}
         */
        WaterfallChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.waterfallData = [];
                this.dataProcessing();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        WaterfallChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['waterfallChartData']) {
                    this.waterfallData = [];
                    this.dataProcessing();
                }
            };
        /**
         * @return {?}
         */
        WaterfallChartComponent.prototype.dataProcessing = /**
         * @return {?}
         */
            function () {
                var _this_1 = this;
                if (!this.waterfallChartOptions || Object.keys(this.waterfallChartOptions).length == 0) {
                    this.waterfallChartOptions = new GlobalChartOptions().waterfallChartOptions;
                }
                /** @type {?} */
                var datasetIndex = 0;
                /** @type {?} */
                var comparedIndex = 0;
                /** @type {?} */
                var _this = this;
                this.waterfallChartData.forEach(( /**
                 * @param {?} chartData
                 * @return {?}
                 */function (chartData) {
                    /** @type {?} */
                    var measures = [];
                    /** @type {?} */
                    var xLabels = [];
                    /** @type {?} */
                    var dataLabels = [];
                    /** @type {?} */
                    var yValues = [];
                    /** @type {?} */
                    var hoverinfos = [];
                    /** @type {?} */
                    var index = 0;
                    chartData.waterfallItemData.forEach(( /**
                     * @param {?} itemData
                     * @return {?}
                     */function (itemData) {
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
                    }));
                    if (_this.waterfallExtendedChartData && _this.waterfallExtendedChartData[datasetIndex]) {
                        measures.push('absolute');
                        dataLabels.push('');
                        yValues.push(0);
                        hoverinfos.push('none');
                        xLabels.push('');
                        _this.waterfallExtendedChartData[datasetIndex].waterfallItemData.forEach(( /**
                         * @param {?} extendedData
                         * @return {?}
                         */function (extendedData) {
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
                        }));
                    }
                    if (!chartData.connectorColor) {
                        chartData.connectorColor = 'rgba(36,123,160,0.5)';
                    }
                    if (!chartData.connectorWidth) {
                        chartData.connectorWidth = 1;
                    }
                    /** @type {?} */
                    var data = {
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
                    _this_1.waterfallData.push(data);
                    datasetIndex++;
                }));
                if (this.waterfallExtendedChartData) {
                    /** @type {?} */
                    var min_1 = 0;
                    /** @type {?} */
                    var max_1 = 0;
                    /** @type {?} */
                    var comparedValue_1 = 0;
                    this.waterfallData.forEach(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        /** @type {?} */
                        var total = 0;
                        /** @type {?} */
                        var i = 0;
                        data.measure.forEach(( /**
                         * @param {?} measure
                         * @return {?}
                         */function (measure) {
                            if (measure == 'absolute') {
                                total = data.y[i];
                            }
                            else if (measure == 'relative') {
                                total += data.y[i];
                            }
                            if (total > max_1) {
                                max_1 = total;
                            }
                            if (total < min_1) {
                                min_1 = total;
                            }
                            if (i == comparedIndex) {
                                comparedValue_1 = total;
                            }
                            i++;
                        }));
                    }));
                    this.waterfallChartOptions.shapes = [{
                            x0: this.waterfallChartData[0].waterfallItemData.length,
                            x1: this.waterfallChartData[0].waterfallItemData.length,
                            y0: min_1,
                            y1: max_1,
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
                            y0: comparedValue_1,
                            y1: comparedValue_1,
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
                            y: max_1 * 1.1,
                            text: '<b>' + this.waterfallChartData[0].name + '</b>',
                            font: { color: 'rgb(60, 55, 201)' },
                            showarrow: false
                        }, {
                            x: this.waterfallChartData[0].waterfallItemData.length
                                + Math.ceil(this.waterfallExtendedChartData[0].waterfallItemData.length / 2),
                            y: max_1 * 1.1,
                            text: '<b>' + this.waterfallExtendedChartData[0].name + '</b>',
                            font: { color: 'rgb(60, 55, 201)' },
                            showarrow: false
                        }];
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WaterfallChartComponent.prototype.chartClicked = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!(event instanceof MouseEvent)) {
                    this.chartClick.emit(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WaterfallChartComponent.prototype.chartHovered = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.chartHover.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WaterfallChartComponent.prototype.chartAfterPlotted = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var _this = this;
                d3$1.selectAll('.xaxislayer-above').selectAll('text').on('click', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    _this.labelClick.emit(d.text);
                }));
            };
        WaterfallChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-waterfall-chart',
                        template: "<div>\n    <plotly-plot [data]=\"waterfallData\" [layout]=\"waterfallChartOptions\" [config]=\"waterfallChartConfig\" \n      [revision]=\"0\" [debug]=\"true\" [useResizeHandler]=\"true\"\n      (click)=\"chartClicked($event)\" (hover)=\"chartHovered($event)\" (afterPlot)=\"chartAfterPlotted($event)\">\n    </plotly-plot>\n</div>\n",
                        styles: [":host /deep/ .xaxislayer-above{cursor:pointer;pointer-events:all}"]
                    }] }
        ];
        /** @nocollapse */
        WaterfallChartComponent.ctorParameters = function () { return []; };
        WaterfallChartComponent.propDecorators = {
            waterfallChartData: [{ type: i0.Input }],
            waterfallExtendedChartData: [{ type: i0.Input }],
            waterfallChartOptions: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }],
            labelClick: [{ type: i0.Output }]
        };
        return WaterfallChartComponent;
    }());
    var WaterfallChartData = /** @class */ (function () {
        function WaterfallChartData() {
            this.decreasingColor = GlobalChartColors.globalBackgroundColors[0];
            this.increasingColor = GlobalChartColors.globalBackgroundColors[1];
            this.totalsColor = GlobalChartColors.globalBackgroundColors[2];
        }
        return WaterfallChartData;
    }());
    var WaterfallItemData = /** @class */ (function () {
        function WaterfallItemData() {
            this.hidden = false;
            this.compared = false;
        }
        return WaterfallItemData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WaterfallPluginChartComponent = /** @class */ (function () {
        function WaterfallPluginChartComponent() {
            this.plugins = [waterfallPlugin];
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
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
        /**
         * @return {?}
         */
        WaterfallPluginChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.adaptDataForPlugin();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        WaterfallPluginChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @private
         * @return {?}
         */
        WaterfallPluginChartComponent.prototype.adaptDataForPlugin = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.waterfallPluginChartData) {
                    return;
                }
                /** @type {?} */
                var adaptedData = [];
                /** @type {?} */
                var currentTotal = 0;
                this.waterfallPluginChartData.forEach(( /**
                 * @param {?} v
                 * @param {?} idx
                 * @return {?}
                 */function (v, idx) {
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
                            stack: "" + idx
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
                            stack: "" + idx
                        });
                    }
                    else {
                        /** @type {?} */
                        var backgroundColor = [];
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
                            stack: "" + idx
                        });
                    }
                }));
                this.chartData = {
                    labels: ['Waterfall Model'],
                    datasets: adaptedData
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WaterfallPluginChartComponent.prototype.chartClicked = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.chartClick.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WaterfallPluginChartComponent.prototype.chartHovered = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.chartHover.emit(event);
            };
        WaterfallPluginChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-waterfall-plugin-chart',
                        template: "<lib-base-chart type=\"bar\" [data]=\"chartData\" [plugins]=\"plugins\" [options]=\"options\"\n  (chartHover)=\"chartHovered($event)\"\n  (chartClick)=\"chartClicked($event)\">\n</lib-base-chart>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        WaterfallPluginChartComponent.ctorParameters = function () { return []; };
        WaterfallPluginChartComponent.propDecorators = {
            waterfallPluginChartData: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }]
        };
        return WaterfallPluginChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseChartComponent = /** @class */ (function () {
        function BaseChartComponent() {
            this.chartClick = new i0.EventEmitter();
            this.chartHover = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        BaseChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.options) {
                    /** @type {?} */
                    var opt = Object.assign(Object.create(Object.getPrototypeOf(this.options)), this.options);
                    opt.onClick = ( /**
                     * @param {?=} event
                     * @param {?=} active
                     * @return {?}
                     */function (event, active) {
                        _this.chartClicked(event, active);
                    });
                    opt.hover = opt.hover || {};
                    opt.hover.onHover = ( /**
                     * @param {?} event
                     * @param {?} active
                     * @return {?}
                     */function (event, active) {
                        _this.chartHovered(event, active);
                    });
                    this._options = opt;
                }
                else {
                    /** @type {?} */
                    var opt = {};
                    opt.onClick = ( /**
                     * @param {?=} event
                     * @param {?=} active
                     * @return {?}
                     */function (event, active) {
                        _this.chartClicked(event, active);
                    });
                    opt.hover = opt.hover || {};
                    opt.hover.onHover = ( /**
                     * @param {?} event
                     * @param {?} active
                     * @return {?}
                     */function (event, active) {
                        _this.chartHovered(event, active);
                    });
                    this._options = opt;
                }
                this._chart = new Chart(this.canvasRef.nativeElement, {
                    type: this.type,
                    data: this.data,
                    options: this._options,
                    plugins: this.plugins
                });
            };
        /**
         * @private
         * @param {?} event
         * @param {?} chartObj
         * @return {?}
         */
        BaseChartComponent.prototype.chartClicked = /**
         * @private
         * @param {?} event
         * @param {?} chartObj
         * @return {?}
         */
            function (event, chartObj) {
                this.chartClick.emit(chartObj);
            };
        /**
         * @private
         * @param {?} event
         * @param {?} chartObj
         * @return {?}
         */
        BaseChartComponent.prototype.chartHovered = /**
         * @private
         * @param {?} event
         * @param {?} chartObj
         * @return {?}
         */
            function (event, chartObj) {
                this.chartHover.emit(chartObj);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BaseChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
            };
        /**
         * @return {?}
         */
        BaseChartComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._chart) {
                    this._chart.destroy();
                }
            };
        BaseChartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-base-chart',
                        template: "<div class=\"chart-container\" style=\"position: relative; width: 100%; height: 100%\">\n  <canvas #chartCanvas></canvas>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        BaseChartComponent.ctorParameters = function () { return []; };
        BaseChartComponent.propDecorators = {
            canvasRef: [{ type: i0.ViewChild, args: ['chartCanvas',] }],
            type: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            plugins: [{ type: i0.Input }],
            chartClick: [{ type: i0.Output }],
            chartHover: [{ type: i0.Output }]
        };
        return BaseChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    angularPlotly_js.PlotlyModule.plotlyjs = PlotlyJS;
    var ChartLibModule = /** @class */ (function () {
        function ChartLibModule() {
        }
        ChartLibModule.decorators = [
            { type: i0.NgModule, args: [{
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
                            common.CommonModule,
                            ng2Charts.ChartsModule,
                            angularPlotly_js.PlotlyModule
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
                            BaseChartComponent
                        ]
                    },] }
        ];
        return ChartLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ChartLibService = ChartLibService;
    exports.ChartLibComponent = ChartLibComponent;
    exports.ChartLibModule = ChartLibModule;
    exports.BarChartComponent = BarChartComponent;
    exports.SimpleChartConfig = SimpleChartConfig;
    exports.GlobalChartColors = GlobalChartColors;
    exports.GlobalChartOptions = GlobalChartOptions;
    exports.BoxPlotChartComponent = BoxPlotChartComponent;
    exports.BoxPlotChartData = BoxPlotChartData;
    exports.CombinedCategoryChartComponent = CombinedCategoryChartComponent;
    exports.CombinedMeasureChartComponent = CombinedMeasureChartComponent;
    exports.LineChartComponent = LineChartComponent;
    exports.PieChartComponent = PieChartComponent;
    exports.ScatterChartComponent = ScatterChartComponent;
    exports.TreeLayoutChartComponent = TreeLayoutChartComponent;
    exports.VariableWidthChartComponent = VariableWidthChartComponent;
    exports.WaterfallChartComponent = WaterfallChartComponent;
    exports.WaterfallChartData = WaterfallChartData;
    exports.WaterfallItemData = WaterfallItemData;
    exports.WaterfallPluginChartComponent = WaterfallPluginChartComponent;
    exports.BaseChartComponent = BaseChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=chart-lib.umd.js.map