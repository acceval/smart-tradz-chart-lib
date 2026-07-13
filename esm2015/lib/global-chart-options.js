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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNoYXJ0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFydC1saWIvc3JjL2xpYi9nbG9iYWwtY2hhcnQtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBdURTLG9CQUFlLEdBQWlCO1lBQ3JDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsQ0FBQzt3QkFDTixTQUFTLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3BDO3dCQUNELEtBQUssRUFBRTs0QkFDTCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsV0FBVzs0QkFDMUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQVM7NEJBQ3RDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO3lCQUN4QztxQkFDRixDQUFDO2dCQUNGLEtBQUssRUFBRSxDQUFDO3dCQUVOLFNBQVMsRUFBRTs0QkFDVCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVTt5QkFDcEM7d0JBQ0QsS0FBSyxFQUFFOzRCQUNMLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXOzRCQUMxQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsU0FBUzs0QkFDdEMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7eUJBQ3hDO3FCQUNGLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRjtTQUNGLENBQUM7UUFFSyx3QkFBbUIsR0FBaUI7WUFDekMsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNOLFNBQVMs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Q0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDakQsR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsQ0FBQztZQUNOLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDbkQsV0FBVyxFQUFFLENBQUM7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQTtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxlQUFlLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDbEQsSUFBSSxPQUFPLEdBQVE7WUFDakIsU0FBUyxFQUFFLEdBQUc7WUFDZCxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLEdBQUc7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQTtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O0FBbkRhLDhCQUFXLEdBQUcsZ0JBQWdCLENBQUM7QUFDL0IsNEJBQVMsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxDaGFydE9wdGlvbnMge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEZPTlRfRkFNSUxZID0gJ0hlbHZldGljYSBOZXVlJztcclxuICBwdWJsaWMgc3RhdGljIEZPTlRfU0laRSA9IDEyO1xyXG5cclxuICBwdWJsaWMgcGVpdHlQaWVPcHRpb25zKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYW55IHtcclxuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIGRlbGltaXRlcjogbnVsbCxcclxuICAgICAgZmlsbDogR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9ycyxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgIHJhZGl1czogOCxcclxuICAgICAgd2lkdGg6IHdpZHRoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZWl0eURvbnV0T3B0aW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGFueSB7XHJcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICBkZWxpbWl0ZXI6IG51bGwsXHJcbiAgICAgIGZpbGw6IEdsb2JhbENoYXJ0Q29sb3JzLmdsb2JhbEJhY2tncm91bmRDb2xvcnMsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICBpbm5lclJhZGl1czogbnVsbCxcclxuICAgICAgcmFkaXVzOiA4LFxyXG4gICAgICB3aWR0aDogd2lkdGhcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBlaXR5TGluZU9wdGlvbnMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xyXG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgZGVsaW1pdGVyOiBcIixcIixcclxuICAgICAgZmlsbDogR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXSxcclxuICAgICAgbWF4OiBudWxsLFxyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIHN0cm9rZTogR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1sxXSxcclxuICAgICAgc3Ryb2tlV2lkdGg6IDEsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2lkdGhcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBlaXR5QmFyT3B0aW9ucyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGFueSB7XHJcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICBkZWxpbWl0ZXI6IFwiLFwiLFxyXG4gICAgICBmaWxsOiBbR2xvYmFsQ2hhcnRDb2xvcnMuZ2xvYmFsQmFja2dyb3VuZENvbG9yc1swXV0sXHJcbiAgICAgIG1heDogbnVsbCxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLjEsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2lkdGhcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJhckNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4QXhlczogW3tcclxuICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxyXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXHJcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XSxcclxuICAgICAgeUF4ZXM6IFt7XHJcblxyXG4gICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXHJcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcclxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcclxuICAgICAgICB9XHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgYW5jaG9yOiAnZW5kJyxcclxuICAgICAgICBhbGlnbjogJ2VuZCcsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgc2NhdHRlckNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4QXhlczogW3tcclxuICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxyXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXHJcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XSxcclxuICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcclxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxyXG4gICAgICAgIH1cclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgcGllQ2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgZm9ybWF0dGVyOiAodmFsdWUsIGN0eCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBjdHguY2hhcnQuZGF0YS5sYWJlbHNbY3R4LmRhdGFJbmRleF07XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgd2F0ZXJmYWxsQ2hhcnRPcHRpb25zOiBhbnkgPSB7XHJcblxyXG4gICAgeGF4aXM6IHtcclxuICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgIHR5cGU6ICdsaW5lYXInLFxyXG4gICAgICBhdXRvbWFyZ2luOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHQ6IDYwLFxyXG4gICAgfSxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgZmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXHJcbiAgICAgIHNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXHJcbiAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SXHJcbiAgICB9LFxyXG4gICAgYXV0b3NpemU6IGZhbHNlLFxyXG4gICAgd2lkdGg6IDExNTAsXHJcbiAgICBoZWlnaHQ6IDgwMCxcclxuICAgIHNob3dsZWdlbmQ6IGZhbHNlLFxyXG4gICAgcGFwZXJfYmdjb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgcGxvdF9iZ2NvbG9yOiAncmdiYSgwLDAsMCwwKSdcclxuICB9O1xyXG5cclxuICBwdWJsaWMgYm94UGxvdENoYXJ0T3B0aW9uczogYW55ID0ge1xyXG5cclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6ICdjYXRlZ29yeScsXHJcbiAgICAgIHNob3dncmlkOiBmYWxzZSxcclxuICAgICAgYXV0b21hcmdpbjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgIHR5cGU6ICdsaW5lYXInLFxyXG4gICAgICBzaG93Z3JpZDogdHJ1ZSxcclxuICAgICAgYXV0b21hcmdpbjogdHJ1ZSxcclxuICAgICAgZ3JpZGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SLFxyXG4gICAgICBncmlkd2lkdGg6IDFcclxuICAgIH0sXHJcbiAgICBmb250OiB7XHJcbiAgICAgIGZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxyXG4gICAgICBzaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUlxyXG4gICAgfSxcclxuICAgIGF1dG9zaXplOiB0cnVlLFxyXG4gICAgc2hvd2xlZ2VuZDogZmFsc2UsXHJcbiAgICBwYXBlcl9iZ2NvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICBwbG90X2JnY29sb3I6ICdyZ2JhKDAsMCwwLDApJ1xyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBsaW5lQ2hhcnRPcHRpb25zOiAoQ2hhcnRPcHRpb25zICYgeyBhbm5vdGF0aW9uOiBhbnkgfSkgPSB7XHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgcGx1Z2luczoge1xyXG4gICAgICBkYXRhbGFiZWxzOiB7XHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICBhbmNob3I6ICdlbmQnLFxyXG4gICAgICAgIGFsaWduOiAnZW5kJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4QXhlczogW3tcclxuXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcclxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1dLFxyXG4gICAgICB5QXhlczogW3tcclxuICAgICAgICBpZDogJ3ktYXhpcy0wJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXHJcbiAgICAgICAgICBmb250U2l6ZTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfU0laRSxcclxuICAgICAgICAgIGZvbnRDb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuRk9OVF9DT0xPUixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ3ktYXhpcy0xJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxyXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXHJcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBhbm5vdGF0aW9uOiB7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBjb21iaW5lZENoYXJ0T3B0aW9uczogKENoYXJ0T3B0aW9ucyAmIHsgYW5ub3RhdGlvbjogYW55IH0pID0ge1xyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgZGF0YWxhYmVsczoge1xyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHhBeGVzOiBbe1xyXG5cclxuICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgIGNvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5HUklEX0NPTE9SXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgZm9udEZhbWlseTogR2xvYmFsQ2hhcnRPcHRpb25zLkZPTlRfRkFNSUxZLFxyXG4gICAgICAgICAgZm9udFNpemU6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX1NJWkUsXHJcbiAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XSxcclxuICAgICAgeUF4ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3ktYXhpcy0wJyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgY29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkdSSURfQ09MT1JcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9GQU1JTFksXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICAgICAgICBmb250Q29sb3I6IEdsb2JhbENoYXJ0Q29sb3JzLkZPTlRfQ09MT1IsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgYW5ub3RhdGlvbjoge1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgdmFyaWFibGVXaWR0aENoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge1xyXG5cclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4QXhlczogW3tcclxuICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICBjb2xvcjogR2xvYmFsQ2hhcnRDb2xvcnMuR1JJRF9DT0xPUlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcclxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxyXG4gICAgICAgIH1cclxuICAgICAgfV0sXHJcbiAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IEdsb2JhbENoYXJ0T3B0aW9ucy5GT05UX0ZBTUlMWSxcclxuICAgICAgICAgIGZvbnRTaXplOiBHbG9iYWxDaGFydE9wdGlvbnMuRk9OVF9TSVpFLFxyXG4gICAgICAgICAgZm9udENvbG9yOiBHbG9iYWxDaGFydENvbG9ycy5GT05UX0NPTE9SLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBmYWxzZSB9LFxyXG4gICAgICAgIHNjYWxlTGFiZWw6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgICB0aWNrczogeyBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgIH1dLFxyXG5cclxuICAgIH1cclxuICB9O1xyXG59Il19