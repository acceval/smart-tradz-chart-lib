import { ChartOptions } from 'chart.js';
export declare class SimpleChartConfig {
    isDisplayDataLabel?: boolean;
    dataLabelAnchor?: string;
    dataLabelAlign?: string;
    yAxisLeftLabel?: string;
    yAxisRightLabel?: string;
    xAxisLabel?: string;
    isDisplayLegend?: boolean;
    legendPosition?: string;
    isLegendPointStyle?: boolean;
    isStacked?: boolean;
    isDisplayYaxisLeftGrid?: boolean;
    isDisplayYaxisRightGrid?: boolean;
    isDisplayXaxisGrid?: boolean;
    fontFamily?: string;
    fontSize?: number;
    fontColor?: string;
    gridColor?: string;
    isHorizontalBar?: boolean;
    static populateChartConfig(chartOptions: ChartOptions, chartConfig: SimpleChartConfig): ChartOptions;
}
