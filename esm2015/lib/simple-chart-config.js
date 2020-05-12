/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class SimpleChartConfig {
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
    /**
     * @param {?} chartOptions
     * @param {?} chartConfig
     * @return {?}
     */
    static populateChartConfig(chartOptions, chartConfig) {
        if (chartConfig.isDisplayDataLabel) {
            /** @type {?} */
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
            /** @type {?} */
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
if (false) {
    /** @type {?} */
    SimpleChartConfig.prototype.isDisplayDataLabel;
    /** @type {?} */
    SimpleChartConfig.prototype.dataLabelAnchor;
    /** @type {?} */
    SimpleChartConfig.prototype.dataLabelAlign;
    /** @type {?} */
    SimpleChartConfig.prototype.yAxisLeftLabel;
    /** @type {?} */
    SimpleChartConfig.prototype.yAxisRightLabel;
    /** @type {?} */
    SimpleChartConfig.prototype.xAxisLabel;
    /** @type {?} */
    SimpleChartConfig.prototype.isDisplayLegend;
    /** @type {?} */
    SimpleChartConfig.prototype.legendPosition;
    /** @type {?} */
    SimpleChartConfig.prototype.isLegendPointStyle;
    /** @type {?} */
    SimpleChartConfig.prototype.isStacked;
    /** @type {?} */
    SimpleChartConfig.prototype.isDisplayYaxisLeftGrid;
    /** @type {?} */
    SimpleChartConfig.prototype.isDisplayYaxisRightGrid;
    /** @type {?} */
    SimpleChartConfig.prototype.isDisplayXaxisGrid;
    /** @type {?} */
    SimpleChartConfig.prototype.fontFamily;
    /** @type {?} */
    SimpleChartConfig.prototype.fontSize;
    /** @type {?} */
    SimpleChartConfig.prototype.fontColor;
    /** @type {?} */
    SimpleChartConfig.prototype.gridColor;
    /** @type {?} */
    SimpleChartConfig.prototype.isHorizontalBar;
    /** @type {?} */
    SimpleChartConfig.prototype.xAxisBeginAtZero;
    /** @type {?} */
    SimpleChartConfig.prototype.yAxisBeginAtZero;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNoYXJ0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtY2hhcnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBRUUsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksUUFBUSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVksUUFBUSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsMkJBQXNCLEdBQWEsSUFBSSxDQUFDO1FBQ3hDLDRCQUF1QixHQUFhLEtBQUssQ0FBQztRQUMxQyx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFDcEMsZUFBVSxHQUFZLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLGlCQUFpQixDQUFDO1FBQ3ZDLGNBQVMsR0FBWSxpQkFBaUIsQ0FBQztRQUN2QyxvQkFBZSxHQUFhLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBYSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO0lBdUdyQyxDQUFDOzs7Ozs7SUFyR1EsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQTBCLEVBQUUsV0FBOEI7UUFFMUYsSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUU7O2dCQUM5QixVQUFVLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsTUFBTSxFQUFFLFdBQVcsQ0FBQyxlQUFlO2dCQUNuQyxLQUFLLEVBQUUs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Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxZQUFZO2FBQ3ZCLENBQUM7U0FDSDthQUFNO1lBQ0wsWUFBWSxDQUFDLE1BQU0sR0FBRztnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1NBQ0g7UUFFRCxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQztZQUNELFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDekIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM1QyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQzdDO1FBR0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGOzs7SUExSEMsK0NBQXFDOztJQUNyQyw0Q0FBb0M7O0lBQ3BDLDJDQUFtQzs7SUFDbkMsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBQzlCLHVDQUF5Qjs7SUFDekIsNENBQWlDOztJQUNqQywyQ0FBZ0M7O0lBQ2hDLCtDQUFxQzs7SUFDckMsc0NBQTRCOztJQUM1QixtREFBd0M7O0lBQ3hDLG9EQUEwQzs7SUFDMUMsK0NBQW9DOztJQUNwQyx1Q0FBdUM7O0lBQ3ZDLHFDQUF1Qjs7SUFDdkIsc0NBQXVDOztJQUN2QyxzQ0FBdUM7O0lBQ3ZDLDRDQUFrQzs7SUFDbEMsNkNBQW1DOztJQUNuQyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydE9wdGlvbnMsIFBvc2l0aW9uVHlwZSB9IGZyb20gJ2NoYXJ0LmpzJztcblxuXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2hhcnRDb25maWcge1xuXG4gIGlzRGlzcGxheURhdGFMYWJlbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGF0YUxhYmVsQW5jaG9yPzogc3RyaW5nID0gJ2NlbnRlcic7XG4gIGRhdGFMYWJlbEFsaWduPzogc3RyaW5nID0gJ2NlbnRlcic7XG4gIHlBeGlzTGVmdExhYmVsPzogc3RyaW5nID0gJyc7XG4gIHlBeGlzUmlnaHRMYWJlbD86IHN0cmluZyA9ICcnO1xuICB4QXhpc0xhYmVsPzogc3RyaW5nID0gJyc7XG4gIGlzRGlzcGxheUxlZ2VuZD86IGJvb2xlYW4gPSB0cnVlO1xuICBsZWdlbmRQb3NpdGlvbj86IHN0cmluZyA9ICd0b3AnO1xuICBpc0xlZ2VuZFBvaW50U3R5bGU/OiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhY2tlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNEaXNwbGF5WWF4aXNMZWZ0R3JpZD86IGJvb2xlYW4gPSB0cnVlO1xuICBpc0Rpc3BsYXlZYXhpc1JpZ2h0R3JpZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNEaXNwbGF5WGF4aXNHcmlkPzogYm9vbGVhbiA9IHRydWU7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmcgPSAnSGVsdmV0aWNhIE5ldWUnO1xuICBmb250U2l6ZT86IG51bWJlciA9IDEyO1xuICBmb250Q29sb3I/OiBzdHJpbmcgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgZ3JpZENvbG9yPzogc3RyaW5nID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gIGlzSG9yaXpvbnRhbEJhcj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgeEF4aXNCZWdpbkF0WmVybz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgeUF4aXNCZWdpbkF0WmVybz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgc3RhdGljIHBvcHVsYXRlQ2hhcnRDb25maWcoY2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMsIGNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyk6IENoYXJ0T3B0aW9ucyB7XG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNEaXNwbGF5RGF0YUxhYmVsKSB7XG4gICAgICBsZXQgZGF0YUxhYmVscyA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiBjaGFydENvbmZpZy5kYXRhTGFiZWxBbmNob3IsXG4gICAgICAgIGFsaWduOiBjaGFydENvbmZpZy5kYXRhTGFiZWxBbGlnbixcbiAgICAgIH1cbiAgICAgIGNoYXJ0T3B0aW9ucy5wbHVnaW5zID0geyBkYXRhTGFiZWxzIH07XG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uc2NhbGVMYWJlbCA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsXG4gICAgICB9O1xuXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHtcbiAgICAgICAgZGlzcGxheTogY2hhcnRDb25maWcuaXNEaXNwbGF5WWF4aXNMZWZ0R3JpZCxcbiAgICAgICAgY29sb3I6IGNoYXJ0Q29uZmlnLmdyaWRDb2xvclxuICAgICAgfVxuXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzID0ge1xuICAgICAgICBiZWdpbkF0WmVybzogY2hhcnRDb25maWcueUF4aXNCZWdpbkF0WmVybyxcbiAgICAgICAgZm9udEZhbWlseTogY2hhcnRDb25maWcuZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IGNoYXJ0Q29uZmlnLmZvbnRTaXplLFxuICAgICAgICBmb250Q29sb3I6IGNoYXJ0Q29uZmlnLmZvbnRDb2xvcixcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy55QXhpc1JpZ2h0TGFiZWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlcy5wdXNoKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogY2hhcnRDb25maWcuaXNEaXNwbGF5WWF4aXNSaWdodEdyaWQgfSxcbiAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnlBeGlzUmlnaHRMYWJlbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBjaGFydENvbmZpZy55QXhpc0JlZ2luQXRaZXJvLFxuICAgICAgICAgICAgZm9udEZhbWlseTogY2hhcnRDb25maWcuZm9udEZhbWlseSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBjaGFydENvbmZpZy5mb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcueEF4aXNMYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnNjYWxlTGFiZWwgPSB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGxhYmVsU3RyaW5nOiBjaGFydENvbmZpZy54QXhpc0xhYmVsXG4gICAgICB9O1xuXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzID0ge1xuICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogY2hhcnRDb25maWcuZm9udFNpemUsXG4gICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNEaXNwbGF5TGVnZW5kKSB7XG5cbiAgICAgIGxldCBwb3NpdGlvblR5cGU6IFBvc2l0aW9uVHlwZSA9ICd0b3AnO1xuICAgICAgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICd0b3AnKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICd0b3AnO1xuICAgICAgfSBlbHNlIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAnYm90dG9tJykge1xuICAgICAgICBwb3NpdGlvblR5cGUgPSAnYm90dG9tJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ2xlZnQnKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICdsZWZ0JztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgICBwb3NpdGlvblR5cGUgPSAncmlnaHQnO1xuICAgICAgfVxuICAgICAgY2hhcnRPcHRpb25zLmxlZ2VuZCA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uVHlwZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnRPcHRpb25zLmxlZ2VuZCA9IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzTGVnZW5kUG9pbnRTdHlsZSkge1xuICAgICAgaWYgKCFjaGFydE9wdGlvbnMubGVnZW5kLmxhYmVscykge1xuICAgICAgICBjaGFydE9wdGlvbnMubGVnZW5kLmxhYmVscyA9IHt9O1xuICAgICAgfVxuICAgICAgY2hhcnRPcHRpb25zLmxlZ2VuZC5sYWJlbHMudXNlUG9pbnRTdHlsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzU3RhY2tlZCkge1xuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS5zdGFja2VkID0gdHJ1ZTtcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc3RhY2tlZCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gY2hhcnRPcHRpb25zO1xuICB9XG59ICJdfQ==