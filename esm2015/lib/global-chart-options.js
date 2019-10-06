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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNoYXJ0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsLWNoYXJ0LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUF1RFMsb0JBQWUsR0FBaUI7WUFDckMsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDcEM7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7d0JBRU4sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsS0FBSztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1NBQ0YsQ0FBQztRQUVLLHdCQUFtQixHQUFpQjtZQUN6QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBQ04sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0YsQ0FBQztnQkFDRixLQUFLLEVBQUUsQ0FBQzt3QkFDTixTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFDRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFO29CQUNWLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO1FBRUssb0JBQWUsR0FBaUI7WUFDckMsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDVixTQUFTOzs7OztvQkFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTs7OEJBQ2xCLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQzt3QkFDbEQsT0FBTyxLQUFLLENBQUM7b0JBQ2YsQ0FBQyxDQUFBO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO1FBRUssMEJBQXFCLEdBQVE7WUFFbEMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNELE1BQU0sRUFBRTtnQkFDTixDQUFDLEVBQUUsRUFBRTthQUNOO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxXQUFXO2dCQUN0QyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsU0FBUztnQkFDbEMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7YUFDcEM7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxlQUFlO1lBQzlCLFlBQVksRUFBRSxlQUFlO1NBQzlCLENBQUM7UUFFSyx3QkFBbUIsR0FBUTtZQUVoQyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTtnQkFDdkMsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsa0JBQWtCLENBQUMsV0FBVztnQkFDdEMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7Z0JBQ2xDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO2FBQ3BDO1lBQ0QsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztZQUNqQixhQUFhLEVBQUUsZUFBZTtZQUM5QixZQUFZLEVBQUUsZUFBZTtTQUM5QixDQUFDO1FBRUsscUJBQWdCLEdBQXlDO1lBQzlELFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLElBQUk7b0JBQ2IsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsQ0FBQzt3QkFFTixTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFFRixDQUFDO2dCQUNGLEtBQUssRUFBRSxDQUFDO3dCQUNKLEVBQUUsRUFBRSxVQUFVO3dCQUNkLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFDRjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFVBQVUsRUFBRSxFQUNYO1NBQ0YsQ0FBQztRQUVLLHlCQUFvQixHQUF5QztZQUNsRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFO29CQUNWLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBRU4sU0FBUyxFQUFFOzRCQUNULEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUNwQzt3QkFDRCxLQUFLLEVBQUU7NEJBQ0wsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFdBQVc7NEJBQzFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTOzRCQUN0QyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDeEM7cUJBQ0YsQ0FBQztnQkFDRixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsRUFBRSxFQUFFLFVBQVU7d0JBQ2QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDcEM7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxVQUFVO3dCQUNkLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFDRjtpQkFDRjthQUNGO1lBQ0QsVUFBVSxFQUFFLEVBQ1g7U0FDRixDQUFDO1FBRUssOEJBQXlCLEdBQWlCO1lBRS9DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRztnQkFDUCxPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRTtvQkFDVixPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLFVBQVUsRUFBRTs0QkFDVixPQUFPLEVBQUUsSUFBSTt5QkFDZDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFDRixDQUFDO2dCQUNGLEtBQUssRUFBRSxDQUFDO3dCQUNOLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixTQUFTLEVBQUU7NEJBQ1QsT0FBTyxFQUFFLEtBQUs7eUJBQ2Y7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGLEVBQUU7d0JBQ0QsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7d0JBQzdCLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7d0JBQzlCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7cUJBQzFCLENBQUM7YUFFSDtTQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFqVVEsZUFBZSxDQUFDLEtBQWEsRUFBRSxNQUFjOztZQUM5QyxPQUFPLEdBQVE7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsaUJBQWlCLENBQUMsc0JBQXNCO1lBQzlDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU0saUJBQWlCLENBQUMsS0FBYSxFQUFFLE1BQWM7O1lBQ2hELE9BQU8sR0FBUTtZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxzQkFBc0I7WUFDOUMsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsTUFBYzs7WUFDL0MsT0FBTyxHQUFRO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNqRCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sTUFBTSxFQUFFLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNuRCxXQUFXLEVBQUUsQ0FBQztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLEtBQUs7U0FDYjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxLQUFhLEVBQUUsTUFBYzs7WUFDOUMsT0FBTyxHQUFRO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7QUFuRGEsOEJBQVcsR0FBRyxnQkFBZ0IsQ0FBQztBQUMvQiw0QkFBUyxHQUFHLEVBQUUsQ0FBQzs7O0lBRDdCLCtCQUE2Qzs7SUFDN0MsNkJBQTZCOztJQW9EN0IsNkNBK0JFOztJQUVGLGlEQTZCRTs7SUFFRiw2Q0FVRTs7SUFFRixtREFzQkU7O0lBRUYsaURBdUJFOztJQUVGLDhDQWtERTs7SUFFRixrREFnREU7O0lBRUYsdURBMkNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuXG5leHBvcnQgY2xhc3MgR2xvYmFsQ2hhcnRPcHRpb25zIHtcblxuICBwdWJsaWMgc3RhdGljIEZPTlRfRkFNSUxZID0gJ0hlbHZldGljYSBOZXVlJztcbiAgcHVibGljIHN0YXRpYyBGT05UX1NJWkUgPSAxMjsgIFxuXG4gIHB1YmxpYyBwZWl0eVBpZU9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICBmaWxsOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICByYWRpdXM6IDgsXG4gICAgICB3aWR0aDogd2lkdGhcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgcGVpdHlEb251dE9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICBmaWxsOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBpbm5lclJhZGl1czogbnVsbCxcbiAgICAgIHJhZGl1czogOCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBwZWl0eUxpbmVPcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xuICAgICAgZGVsaW1pdGVyOiBcIixcIixcbiAgICAgIGZpbGw6IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF0sICAgIFxuICAgICAgbWF4OiBudWxsLFxuICAgICAgbWluOiAwLFxuICAgICAgc3Ryb2tlOiBHbG9iYWxDaGFydENvbG9ycy5nbG9iYWxCYWNrZ3JvdW5kQ29sb3JzWzFdLFxuICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBwZWl0eUJhck9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICBkZWxpbWl0ZXI6IFwiLFwiLFxuICAgICAgZmlsbDogW0dsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnNbMF1dLCAgICBcbiAgICAgIG1heDogbnVsbCxcbiAgICAgIG1pbjogMCxcbiAgICAgIHBhZGRpbmc6IDAuMSxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG4gIFxuICBwdWJsaWMgYmFyQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSwgICAgXG4gICAgc2NhbGVzOiB7IFxuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sIFxuICAgICAgeUF4ZXM6IFt7XG5cbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICB9XG4gICAgICB9XSBcbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgYW5jaG9yOiAnZW5kJyxcbiAgICAgICAgYWxpZ246ICdlbmQnLFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgc2NhdHRlckNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2NhbGVzOiB7IFxuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sIFxuICAgICAgeUF4ZXM6IFt7XG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0gXG4gICAgfSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sICAgICAgXG4gIH07XG5cbiAgcHVibGljIHBpZUNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsICAgIFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUsIGN0eCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gY3R4LmNoYXJ0LmRhdGEubGFiZWxzW2N0eC5kYXRhSW5kZXhdO1xuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyB3YXRlcmZhbGxDaGFydE9wdGlvbnM6IGFueSA9IHtcblxuICAgIHhheGlzOiB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxuICAgIH0sXG4gICAgbWFyZ2luOiB7ICAgICAgXG4gICAgICB0OiA2MCwgICAgICAgIFxuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICBzaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1JcbiAgICB9LFxuICAgIGF1dG9zaXplOiB0cnVlLFxuICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxuICAgIHBhcGVyX2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICBwbG90X2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJ1xuICB9O1xuXG4gIHB1YmxpYyBib3hQbG90Q2hhcnRPcHRpb25zOiBhbnkgPSB7XG5cbiAgICB4YXhpczoge1xuICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgIHNob3dncmlkOiBmYWxzZSxcbiAgICAgIGF1dG9tYXJnaW46IHRydWVcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgIHNob3dncmlkOiB0cnVlLFxuICAgICAgYXV0b21hcmdpbjogdHJ1ZSwgICAgICBcbiAgICAgIGdyaWRjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUiwgICAgICBcbiAgICAgIGdyaWR3aWR0aDogMVxuICAgIH0sICAgIFxuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgc2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SXG4gICAgfSxcbiAgICBhdXRvc2l6ZTogdHJ1ZSxcbiAgICBzaG93bGVnZW5kOiBmYWxzZSxcbiAgICBwYXBlcl9iZ2NvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgcGxvdF9iZ2NvbG9yOiAncmdiYSgwLDAsMCwwKSdcbiAgfTtcblxuICBwdWJsaWMgbGluZUNoYXJ0T3B0aW9uczogKENoYXJ0T3B0aW9ucyAmIHsgYW5ub3RhdGlvbjogYW55IH0pID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBhbmNob3I6ICdlbmQnLFxuICAgICAgICBhbGlnbjogJ2VuZCcsXG4gICAgICB9XG4gICAgfSwgIFxuICAgIHNjYWxlczogeyAgICAgIFxuICAgICAgeEF4ZXM6IFt7XG4gICAgICAgIFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3tcbiAgICAgICAgICBpZDogJ3ktYXhpcy0wJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXG4gICAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3ktYXhpcy0xJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBhbm5vdGF0aW9uOiB7ICAgICAgXG4gICAgfSxcbiAgfTsgIFxuXG4gIHB1YmxpYyBjb21iaW5lZENoYXJ0T3B0aW9uczogKENoYXJ0T3B0aW9ucyAmIHsgYW5ub3RhdGlvbjogYW55IH0pID0ge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9LCAgXG4gICAgc2NhbGVzOiB7ICAgICAgXG4gICAgICB4QXhlczogW3tcblxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH1dLFxuICAgICAgeUF4ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAneS1heGlzLTAnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAneS1heGlzLTEnLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLCAgICAgICAgICBcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXG4gICAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgICAgfSAgICAgIFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBhbm5vdGF0aW9uOiB7ICAgICAgXG4gICAgfSxcbiAgfTsgIFxuXG4gIHB1YmxpYyB2YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XG5cbiAgICByZXNwb25zaXZlOiB0cnVlLCAgICBcbiAgICBsZWdlbmQgOiB7IFxuICAgICAgZGlzcGxheTogZmFsc2UgXG4gICAgfSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sICAgXG4gICAgc2NhbGVzOiB7XG4gICAgICB4QXhlczogW3tcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsICAgICAgICAgIFxuICAgICAgICB9LCAgICAgICAgXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICB5QXhlczogW3sgICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLCAgICAgICAgXG4gICAgICAgIGdyaWRMaW5lczogeyAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXG4gICAgICAgIH1cbiAgICAgIH0sIHsgICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG4gICAgICAgIHNjYWxlTGFiZWw6IHsgZGlzcGxheTogZmFsc2UgfSwgICAgICAgIFxuICAgICAgICB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9XG4gICAgICB9XSxcbiAgICAgIFxuICAgIH1cbiAgfTtcbn0iXX0=