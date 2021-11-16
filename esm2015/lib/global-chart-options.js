/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GlobalChartColors } from './global-chart-colors';
export class GlobalChartOptions {
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
                    formatter: (/**
                     * @param {?} value
                     * @param {?} ctx
                     * @return {?}
                     */
                    (value, ctx) => {
                        /** @type {?} */
                        const label = ctx.chart.data.labels[ctx.dataIndex];
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
    peityPieOptions(width, height) {
        /** @type {?} */
        let options = {
            delimiter: null,
            fill: GlobalChartColors.globalBackgroundColors,
            height: height,
            radius: 8,
            width: width
        };
        return options;
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    peityDonutOptions(width, height) {
        /** @type {?} */
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
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    peityLineOptions(width, height) {
        /** @type {?} */
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
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    peityBarOptions(width, height) {
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNoYXJ0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsLWNoYXJ0LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUF1RFMsb0JBQWUsR0FBaUI7WUFDckMsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDcEM7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7d0JBRU4sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1NBQ0YsQ0FBQztRQUVLLHdCQUFtQixHQUFpQjtZQUN6QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBQ04sU0FBUyxFQUFFOzRCQUNULEtBQUss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Q0FBQztZQUNqRCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sTUFBTSxFQUFFLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNuRCxXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxLQUFhLEVBQUUsTUFBYzs7WUFDOUMsT0FBTyxHQUFRO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7QUFuRGEsOEJBQVcsR0FBRyxnQkFBZ0IsQ0FBQztBQUMvQiw0QkFBUyxHQUFHLEVBQUUsQ0FBQzs7O0lBRDdCLCtCQUE2Qzs7SUFDN0MsNkJBQTZCOztJQW9EN0IsNkNBK0JFOztJQUVGLGlEQTZCRTs7SUFFRiw2Q0FVRTs7SUFFRixtREF3QkU7O0lBRUYsaURBdUJFOztJQUVGLDhDQWtERTs7SUFFRixrREFvQ0U7O0lBRUYsdURBMkNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuXG5leHBvcnQgY2xhc3MgR2xvYmFsQ2hhcnRPcHRpb25zIHtcblxuICBwdWJsaWMgc3RhdGljIEZPTlRfRkFNSUxZID0gJ0hlbHZldGljYSBOZXVlJztcbiAgcHVibGljIHN0YXRpYyBGT05UX1NJWkUgPSAxMjtcblxuICBwdWJsaWMgcGVpdHlQaWVPcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xuICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgZmlsbDogR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9ycyxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcmFkaXVzOiA4LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHVibGljIHBlaXR5RG9udXRPcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xuICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgZmlsbDogR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9ycyxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgaW5uZXJSYWRpdXM6IG51bGwsXG4gICAgICByYWRpdXM6IDgsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgcGVpdHlMaW5lT3B0aW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGFueSB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgIGRlbGltaXRlcjogXCIsXCIsXG4gICAgICBmaWxsOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzBdLFxuICAgICAgbWF4OiBudWxsLFxuICAgICAgbWluOiAwLFxuICAgICAgc3Ryb2tlOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzFdLFxuICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBwZWl0eUJhck9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IFwiLFwiLFxuICAgICAgZmlsbDogW0dsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF1dLFxuICAgICAgbWF4OiBudWxsLFxuICAgICAgbWluOiAwLFxuICAgICAgcGFkZGluZzogMC4xLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgYmFyQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeUF4ZXM6IFt7XG5cbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0sXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBhbmNob3I6ICdlbmQnLFxuICAgICAgICBhbGlnbjogJ2VuZCcsXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBzY2F0dGVyQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHhBeGVzOiBbe1xuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBwdWJsaWMgcGllQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGZvcm1hdHRlcjogKHZhbHVlLCBjdHgpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IGN0eC5jaGFydC5kYXRhLmxhYmVsc1tjdHguZGF0YUluZGV4XTtcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgd2F0ZXJmYWxsQ2hhcnRPcHRpb25zOiBhbnkgPSB7XG5cbiAgICB4YXhpczoge1xuICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICB9LFxuICAgIG1hcmdpbjoge1xuICAgICAgdDogNjAsXG4gICAgfSxcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgIHNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUlxuICAgIH0sXG4gICAgYXV0b3NpemU6IGZhbHNlLFxuICAgIHdpZHRoOiAxMTUwLFxuICAgIGhlaWdodDogODAwLFxuICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxuICAgIHBhcGVyX2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICBwbG90X2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJ1xuICB9O1xuXG4gIHB1YmxpYyBib3hQbG90Q2hhcnRPcHRpb25zOiBhbnkgPSB7XG5cbiAgICB4YXhpczoge1xuICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgIHNob3dncmlkOiBmYWxzZSxcbiAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgIHNob3dncmlkOiB0cnVlLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcbiAgICAgIGdyaWRjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUixcbiAgICAgIGdyaWR3aWR0aDogMVxuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICBzaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1JcbiAgICB9LFxuICAgIGF1dG9zaXplOiB0cnVlLFxuICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxuICAgIHBhcGVyX2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICBwbG90X2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJ1xuICB9O1xuXG4gIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zOiAoQ2hhcnRPcHRpb25zICYgeyBhbm5vdGF0aW9uOiBhbnkgfSkgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGFuY2hvcjogJ2VuZCcsXG4gICAgICAgIGFsaWduOiAnZW5kJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeEF4ZXM6IFt7XG5cbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG5cbiAgICAgIH1dLFxuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIGlkOiAneS1heGlzLTAnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAneS1heGlzLTEnLFxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgfSxcbiAgfTtcblxuICBwdWJsaWMgY29tYmluZWRDaGFydE9wdGlvbnM6IChDaGFydE9wdGlvbnMgJiB7IGFubm90YXRpb246IGFueSB9KSA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9XG4gICAgfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHhBeGVzOiBbe1xuXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICd5LWF4aXMtMCcsXG4gICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBhbm5vdGF0aW9uOiB7XG4gICAgfSxcbiAgfTtcblxuICBwdWJsaWMgdmFyaWFibGVXaWR0aENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgfSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB4QXhlczogW3tcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgICAgc2NhbGVMYWJlbDogeyBkaXNwbGF5OiBmYWxzZSB9LFxuICAgICAgICB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9XG4gICAgICB9XSxcblxuICAgIH1cbiAgfTtcbn0iXX0=