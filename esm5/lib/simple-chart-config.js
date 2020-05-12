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
export { SimpleChartConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNoYXJ0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtY2hhcnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQUFBO1FBRUUsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksUUFBUSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVksUUFBUSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsMkJBQXNCLEdBQWEsSUFBSSxDQUFDO1FBQ3hDLDRCQUF1QixHQUFhLEtBQUssQ0FBQztRQUMxQyx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFDcEMsZUFBVSxHQUFZLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLGlCQUFpQixDQUFDO1FBQ3ZDLGNBQVMsR0FBWSxpQkFBaUIsQ0FBQztRQUN2QyxvQkFBZSxHQUFhLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBYSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO0lBdUdyQyxDQUFDOzs7Ozs7SUFyR2UscUNBQW1COzs7OztJQUFqQyxVQUFrQyxZQUEwQixFQUFFLFdBQThCO1FBRTFGLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFOztnQkFDOUIsVUFBVSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE1BQU0sRUFBRSxXQUFXLENBQUMsZUFBZTtnQkFDbkMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxjQUFjO2FB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RUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxZQUFZO2FBQ3ZCLENBQUM7U0FDSDthQUFNO1lBQ0wsWUFBWSxDQUFDLE1BQU0sR0FBRztnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1NBQ0g7UUFFRCxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQztZQUNELFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDekIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM1QyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQzdDO1FBR0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVIRCxJQTRIQzs7OztJQTFIQywrQ0FBcUM7O0lBQ3JDLDRDQUFvQzs7SUFDcEMsMkNBQW1DOztJQUNuQywyQ0FBNkI7O0lBQzdCLDRDQUE4Qjs7SUFDOUIsdUNBQXlCOztJQUN6Qiw0Q0FBaUM7O0lBQ2pDLDJDQUFnQzs7SUFDaEMsK0NBQXFDOztJQUNyQyxzQ0FBNEI7O0lBQzVCLG1EQUF3Qzs7SUFDeEMsb0RBQTBDOztJQUMxQywrQ0FBb0M7O0lBQ3BDLHVDQUF1Qzs7SUFDdkMscUNBQXVCOztJQUN2QixzQ0FBdUM7O0lBQ3ZDLHNDQUF1Qzs7SUFDdkMsNENBQWtDOztJQUNsQyw2Q0FBbUM7O0lBQ25DLDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0T3B0aW9ucywgUG9zaXRpb25UeXBlIH0gZnJvbSAnY2hhcnQuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVDaGFydENvbmZpZyB7XG5cbiAgaXNEaXNwbGF5RGF0YUxhYmVsPzogYm9vbGVhbiA9IGZhbHNlO1xuICBkYXRhTGFiZWxBbmNob3I/OiBzdHJpbmcgPSAnY2VudGVyJztcbiAgZGF0YUxhYmVsQWxpZ24/OiBzdHJpbmcgPSAnY2VudGVyJztcbiAgeUF4aXNMZWZ0TGFiZWw/OiBzdHJpbmcgPSAnJztcbiAgeUF4aXNSaWdodExhYmVsPzogc3RyaW5nID0gJyc7XG4gIHhBeGlzTGFiZWw/OiBzdHJpbmcgPSAnJztcbiAgaXNEaXNwbGF5TGVnZW5kPzogYm9vbGVhbiA9IHRydWU7XG4gIGxlZ2VuZFBvc2l0aW9uPzogc3RyaW5nID0gJ3RvcCc7XG4gIGlzTGVnZW5kUG9pbnRTdHlsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTdGFja2VkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0Rpc3BsYXlZYXhpc0xlZnRHcmlkPzogYm9vbGVhbiA9IHRydWU7XG4gIGlzRGlzcGxheVlheGlzUmlnaHRHcmlkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0Rpc3BsYXlYYXhpc0dyaWQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgZm9udEZhbWlseT86IHN0cmluZyA9ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnRTaXplPzogbnVtYmVyID0gMTI7XG4gIGZvbnRDb2xvcj86IHN0cmluZyA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICBncmlkQ29sb3I/OiBzdHJpbmcgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgaXNIb3Jpem9udGFsQmFyPzogYm9vbGVhbiA9IGZhbHNlO1xuICB4QXhpc0JlZ2luQXRaZXJvPzogYm9vbGVhbiA9IGZhbHNlO1xuICB5QXhpc0JlZ2luQXRaZXJvPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBzdGF0aWMgcG9wdWxhdGVDaGFydENvbmZpZyhjaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucywgY2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnKTogQ2hhcnRPcHRpb25zIHtcblxuICAgIGlmIChjaGFydENvbmZpZy5pc0Rpc3BsYXlEYXRhTGFiZWwpIHtcbiAgICAgIGxldCBkYXRhTGFiZWxzID0ge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBhbmNob3I6IGNoYXJ0Q29uZmlnLmRhdGFMYWJlbEFuY2hvcixcbiAgICAgICAgYWxpZ246IGNoYXJ0Q29uZmlnLmRhdGFMYWJlbEFsaWduLFxuICAgICAgfVxuICAgICAgY2hhcnRPcHRpb25zLnBsdWdpbnMgPSB7IGRhdGFMYWJlbHMgfTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcueUF4aXNMZWZ0TGFiZWwubGVuZ3RoID4gMCkge1xuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS5zY2FsZUxhYmVsID0ge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBsYWJlbFN0cmluZzogY2hhcnRDb25maWcueUF4aXNMZWZ0TGFiZWxcbiAgICAgIH07XG5cbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzID0ge1xuICAgICAgICBkaXNwbGF5OiBjaGFydENvbmZpZy5pc0Rpc3BsYXlZYXhpc0xlZnRHcmlkLFxuICAgICAgICBjb2xvcjogY2hhcnRDb25maWcuZ3JpZENvbG9yXG4gICAgICB9XG5cbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0udGlja3MgPSB7XG4gICAgICAgIGJlZ2luQXRaZXJvOiBjaGFydENvbmZpZy55QXhpc0JlZ2luQXRaZXJvLFxuICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogY2hhcnRDb25maWcuZm9udFNpemUsXG4gICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yLFxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnlBeGlzUmlnaHRMYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzLnB1c2goe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBjaGFydENvbmZpZy5pc0Rpc3BsYXlZYXhpc1JpZ2h0R3JpZCB9LFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFN0cmluZzogY2hhcnRDb25maWcueUF4aXNSaWdodExhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgYmVnaW5BdFplcm86IGNoYXJ0Q29uZmlnLnlBeGlzQmVnaW5BdFplcm8sXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxuICAgICAgICAgICAgZm9udFNpemU6IGNoYXJ0Q29uZmlnLmZvbnRTaXplLFxuICAgICAgICAgICAgZm9udENvbG9yOiBjaGFydENvbmZpZy5mb250Q29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy54QXhpc0xhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc2NhbGVMYWJlbCA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnhBeGlzTGFiZWxcbiAgICAgIH07XG5cbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MgPSB7XG4gICAgICAgIGZvbnRGYW1pbHk6IGNoYXJ0Q29uZmlnLmZvbnRGYW1pbHksXG4gICAgICAgIGZvbnRTaXplOiBjaGFydENvbmZpZy5mb250U2l6ZSxcbiAgICAgICAgZm9udENvbG9yOiBjaGFydENvbmZpZy5mb250Q29sb3JcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy5pc0Rpc3BsYXlMZWdlbmQpIHtcblxuICAgICAgbGV0IHBvc2l0aW9uVHlwZTogUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gICAgICBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ3RvcCcpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdib3R0b20nKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ2xlZnQnO1xuICAgICAgfSBlbHNlIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICdyaWdodCc7XG4gICAgICB9XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kID0ge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25UeXBlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kID0ge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNMZWdlbmRQb2ludFN0eWxlKSB7XG4gICAgICBpZiAoIWNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzKSB7XG4gICAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzID0ge307XG4gICAgICB9XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kLmxhYmVscy51c2VQb2ludFN0eWxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNTdGFja2VkKSB7XG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnN0YWNrZWQgPSB0cnVlO1xuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy54QXhlc1swXS5zdGFja2VkID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHJldHVybiBjaGFydE9wdGlvbnM7XG4gIH1cbn0gIl19