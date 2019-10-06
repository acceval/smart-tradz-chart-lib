import { ChartOptions } from 'chart.js';
export declare class GlobalChartOptions {
    static FONT_FAMILY: string;
    static FONT_SIZE: number;
    peityPieOptions(width: number, height: number): any;
    peityDonutOptions(width: number, height: number): any;
    peityLineOptions(width: number, height: number): any;
    peityBarOptions(width: number, height: number): any;
    barChartOptions: ChartOptions;
    scatterChartOptions: ChartOptions;
    pieChartOptions: ChartOptions;
    waterfallChartOptions: any;
    boxPlotChartOptions: any;
    lineChartOptions: (ChartOptions & {
        annotation: any;
    });
    combinedChartOptions: (ChartOptions & {
        annotation: any;
    });
    variableWidthChartOptions: ChartOptions;
}
