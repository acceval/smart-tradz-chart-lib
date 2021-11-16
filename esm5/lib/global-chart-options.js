/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GlobalChartColors } from './global-chart-colors';
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
                    formatter: (/**
                     * @param {?} value
                     * @param {?} ctx
                     * @return {?}
                     */
                    function (value, ctx) {
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
export { GlobalChartOptions };
if (false) {
    /** @type {?} */
    GlobalChartOptions.FONT_FAMILY;
    /** @type {?} */
    GlobalChartOptions.FONT_SIZE;
    /** @type {?} */
    GlobalChartOptions.prototype.barChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.scatterChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.pieChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.waterfallChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.boxPlotChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.lineChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.combinedChartOptions;
    /** @type {?} */
    GlobalChartOptions.prototype.variableWidthChartOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNoYXJ0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsLWNoYXJ0LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBQUE7UUF1RFMsb0JBQWUsR0FBaUI7WUFDckMsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDcEM7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7d0JBRU4sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1NBQ0YsQ0FBQztRQUVLLHdCQUFtQixHQUFpQjtZQUN6QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBQ04sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxV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Q0FBQyxDQUFDO1lBQ2pELEdBQUcsRUFBRSxJQUFJO1lBQ1QsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFdBQVcsRUFBRSxDQUFDO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU0sNENBQWU7Ozs7O0lBQXRCLFVBQXVCLEtBQWEsRUFBRSxNQUFjOztZQUM5QyxPQUFPLEdBQVE7WUFDakIsU0FBUyxFQUFFLEdBQUc7WUFDZCxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBbkRhLDhCQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsNEJBQVMsR0FBRyxFQUFFLENBQUM7SUF5VC9CLHlCQUFDO0NBQUEsQUE1VEQsSUE0VEM7U0E1VFksa0JBQWtCOzs7SUFFN0IsK0JBQTZDOztJQUM3Qyw2QkFBNkI7O0lBb0Q3Qiw2Q0ErQkU7O0lBRUYsaURBNkJFOztJQUVGLDZDQVVFOztJQUVGLG1EQXdCRTs7SUFFRixpREF1QkU7O0lBRUYsOENBa0RFOztJQUVGLGtEQW9DRTs7SUFFRix1REEyQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxDaGFydE9wdGlvbnMge1xuXG4gIHB1YmxpYyBzdGF0aWMgRk9OVF9GQU1JTFkgPSAnSGVsdmV0aWNhIE5ldWUnO1xuICBwdWJsaWMgc3RhdGljIEZPTlRfU0laRSA9IDEyO1xuXG4gIHB1YmxpYyBwZWl0eVBpZU9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICBmaWxsOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICByYWRpdXM6IDgsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgcGVpdHlEb251dE9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICBmaWxsOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBpbm5lclJhZGl1czogbnVsbCxcbiAgICAgIHJhZGl1czogOCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBwZWl0eUxpbmVPcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xuICAgICAgZGVsaW1pdGVyOiBcIixcIixcbiAgICAgIGZpbGw6IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IDAsXG4gICAgICBzdHJva2U6IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMV0sXG4gICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHVibGljIHBlaXR5QmFyT3B0aW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGFueSB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgIGRlbGltaXRlcjogXCIsXCIsXG4gICAgICBmaWxsOiBbR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXV0sXG4gICAgICBtYXg6IG51bGwsXG4gICAgICBtaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLjEsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBiYXJDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcblxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGFuY2hvcjogJ2VuZCcsXG4gICAgICAgIGFsaWduOiAnZW5kJyxcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHVibGljIHNjYXR0ZXJDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHB1YmxpYyBwaWVDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUsIGN0eCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gY3R4LmNoYXJ0LmRhdGEubGFiZWxzW2N0eC5kYXRhSW5kZXhdO1xuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyB3YXRlcmZhbGxDaGFydE9wdGlvbnM6IGFueSA9IHtcblxuICAgIHhheGlzOiB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgIH0sXG4gICAgbWFyZ2luOiB7XG4gICAgICB0OiA2MCxcbiAgICB9LFxuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgc2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SXG4gICAgfSxcbiAgICBhdXRvc2l6ZTogZmFsc2UsXG4gICAgd2lkdGg6IDExNTAsXG4gICAgaGVpZ2h0OiA4MDAsXG4gICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgcGFwZXJfYmdjb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgIHBsb3RfYmdjb2xvcjogJ3JnYmEoMCwwLDAsMCknXG4gIH07XG5cbiAgcHVibGljIGJveFBsb3RDaGFydE9wdGlvbnM6IGFueSA9IHtcblxuICAgIHhheGlzOiB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgc2hvd2dyaWQ6IGZhbHNlLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgc2hvd2dyaWQ6IHRydWUsXG4gICAgICBhdXRvbWFyZ2luOiB0cnVlLFxuICAgICAgZ3JpZGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SLFxuICAgICAgZ3JpZHdpZHRoOiAxXG4gICAgfSxcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgIHNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUlxuICAgIH0sXG4gICAgYXV0b3NpemU6IHRydWUsXG4gICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgcGFwZXJfYmdjb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgIHBsb3RfYmdjb2xvcjogJ3JnYmEoMCwwLDAsMCknXG4gIH07XG5cbiAgcHVibGljIGxpbmVDaGFydE9wdGlvbnM6IChDaGFydE9wdGlvbnMgJiB7IGFubm90YXRpb246IGFueSB9KSA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiAnZW5kJyxcbiAgICAgICAgYWxpZ246ICdlbmQnLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB4QXhlczogW3tcblxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cblxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgaWQ6ICd5LWF4aXMtMCcsXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd5LWF4aXMtMScsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGFubm90YXRpb246IHtcbiAgICB9LFxuICB9O1xuXG4gIHB1YmxpYyBjb21iaW5lZENoYXJ0T3B0aW9uczogKENoYXJ0T3B0aW9ucyAmIHsgYW5ub3RhdGlvbjogYW55IH0pID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG5cbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHlBeGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3ktYXhpcy0wJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGFubm90YXRpb246IHtcbiAgICB9LFxuICB9O1xuXG4gIHB1YmxpYyB2YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG5cbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIGxlZ2VuZDoge1xuICAgICAgZGlzcGxheTogZmFsc2VcbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XSxcbiAgICAgIHlBeGVzOiBbe1xuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxuICAgICAgICBzY2FsZUxhYmVsOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgIHRpY2tzOiB7IGRpc3BsYXk6IGZhbHNlIH1cbiAgICAgIH1dLFxuXG4gICAgfVxuICB9O1xufSJdfQ==