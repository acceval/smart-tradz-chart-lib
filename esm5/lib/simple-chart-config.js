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
                fontFamily: chartConfig.fontFamily,
                fontSize: chartConfig.fontSize,
                fontColor: chartConfig.fontColor
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNoYXJ0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtY2hhcnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQUFBO1FBRUUsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksUUFBUSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVksUUFBUSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsMkJBQXNCLEdBQWEsSUFBSSxDQUFDO1FBQ3hDLDRCQUF1QixHQUFhLEtBQUssQ0FBQztRQUMxQyx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFDcEMsZUFBVSxHQUFZLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLGlCQUFpQixDQUFDO1FBQ3ZDLGNBQVMsR0FBWSxpQkFBaUIsQ0FBQztRQUN2QyxvQkFBZSxHQUFhLEtBQUssQ0FBQztJQXFHcEMsQ0FBQzs7Ozs7O0lBbkdlLHFDQUFtQjs7Ozs7SUFBakMsVUFBa0MsWUFBMEIsRUFBRSxXQUE4QjtRQUUxRixJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBQzlCLFVBQVUsR0FBRztnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsV0FBVyxDQUFDLGVBQWU7Z0JBQ25DLEtBQUssRUFBRSxXQUFXLENBQUMsY0FBYzthQUNsQztZQUNELFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBQyxVQUFVLFlBQUEsRUFBQyxDQUFDO1NB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V0FBVyxDQUFDLGtCQUFrQixFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pDO1lBQ0QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNqRDtRQUVELElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN6QixZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzVDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDN0M7UUFHRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDOzs7O0lBdEhDLCtDQUFxQzs7SUFDckMsNENBQW9DOztJQUNwQywyQ0FBbUM7O0lBQ25DLDJDQUE2Qjs7SUFDN0IsNENBQThCOztJQUM5Qix1Q0FBeUI7O0lBQ3pCLDRDQUFpQzs7SUFDakMsMkNBQWdDOztJQUNoQywrQ0FBcUM7O0lBQ3JDLHNDQUE0Qjs7SUFDNUIsbURBQXdDOztJQUN4QyxvREFBMEM7O0lBQzFDLCtDQUFvQzs7SUFDcEMsdUNBQXVDOztJQUN2QyxxQ0FBdUI7O0lBQ3ZCLHNDQUF1Qzs7SUFDdkMsc0NBQXVDOztJQUN2Qyw0Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydE9wdGlvbnMsIFBvc2l0aW9uVHlwZSB9IGZyb20gJ2NoYXJ0LmpzJztcblxuXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2hhcnRDb25maWcge1xuICBcbiAgaXNEaXNwbGF5RGF0YUxhYmVsPzogYm9vbGVhbiA9IGZhbHNlO1xuICBkYXRhTGFiZWxBbmNob3I/OiBzdHJpbmcgPSAnY2VudGVyJztcbiAgZGF0YUxhYmVsQWxpZ24/OiBzdHJpbmcgPSAnY2VudGVyJztcbiAgeUF4aXNMZWZ0TGFiZWw/OiBzdHJpbmcgPSAnJztcbiAgeUF4aXNSaWdodExhYmVsPzogc3RyaW5nID0gJyc7XG4gIHhBeGlzTGFiZWw/OiBzdHJpbmcgPSAnJztcbiAgaXNEaXNwbGF5TGVnZW5kPzogYm9vbGVhbiA9IHRydWU7XG4gIGxlZ2VuZFBvc2l0aW9uPzogc3RyaW5nID0gJ3RvcCc7XG4gIGlzTGVnZW5kUG9pbnRTdHlsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTdGFja2VkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0Rpc3BsYXlZYXhpc0xlZnRHcmlkPzogYm9vbGVhbiA9IHRydWU7XG4gIGlzRGlzcGxheVlheGlzUmlnaHRHcmlkPzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0Rpc3BsYXlYYXhpc0dyaWQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgZm9udEZhbWlseT86IHN0cmluZyA9ICdIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnRTaXplPzogbnVtYmVyID0gMTI7XG4gIGZvbnRDb2xvcj86IHN0cmluZyA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICBncmlkQ29sb3I/OiBzdHJpbmcgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgaXNIb3Jpem9udGFsQmFyPzogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgcHVibGljIHN0YXRpYyBwb3B1bGF0ZUNoYXJ0Q29uZmlnKGNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zLCBjaGFydENvbmZpZzogU2ltcGxlQ2hhcnRDb25maWcpOiBDaGFydE9wdGlvbnMge1xuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzRGlzcGxheURhdGFMYWJlbCkge1xuICAgICAgbGV0IGRhdGFMYWJlbHMgPSB7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgYW5jaG9yOiBjaGFydENvbmZpZy5kYXRhTGFiZWxBbmNob3IsXG4gICAgICAgIGFsaWduOiBjaGFydENvbmZpZy5kYXRhTGFiZWxBbGlnbiwgICAgICAgIFxuICAgICAgfVxuICAgICAgY2hhcnRPcHRpb25zLnBsdWdpbnMgPSB7ZGF0YUxhYmVsc307XG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsLmxlbmd0aCA+IDApIHsgICAgICBcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uc2NhbGVMYWJlbCA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsXG4gICAgICB9O1xuICAgICAgXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHtcbiAgICAgICAgZGlzcGxheTogY2hhcnRDb25maWcuaXNEaXNwbGF5WWF4aXNMZWZ0R3JpZCxcbiAgICAgICAgY29sb3I6IGNoYXJ0Q29uZmlnLmdyaWRDb2xvclxuICAgICAgfVxuICAgICAgXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzID0ge1xuICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogY2hhcnRDb25maWcuZm9udFNpemUsXG4gICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcueUF4aXNSaWdodExhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXMucHVzaCh7XG4gICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgZ3JpZExpbmVzOiB7IGRpc3BsYXk6IGNoYXJ0Q29uZmlnLmlzRGlzcGxheVlheGlzUmlnaHRHcmlkIH0sXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsU3RyaW5nOiBjaGFydENvbmZpZy55QXhpc1JpZ2h0TGFiZWxcbiAgICAgICAgICB9LCBcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgZm9udEZhbWlseTogY2hhcnRDb25maWcuZm9udEZhbWlseSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBjaGFydENvbmZpZy5mb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gICAgICAgICAgXG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnhBeGlzTGFiZWwubGVuZ3RoID4gMCkgeyAgICAgIFxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy54QXhlc1swXS5zY2FsZUxhYmVsID0ge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBsYWJlbFN0cmluZzogY2hhcnRDb25maWcueEF4aXNMYWJlbFxuICAgICAgfTtcblxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy54QXhlc1swXS50aWNrcyA9IHtcbiAgICAgICAgZm9udEZhbWlseTogY2hhcnRDb25maWcuZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IGNoYXJ0Q29uZmlnLmZvbnRTaXplLFxuICAgICAgICBmb250Q29sb3I6IGNoYXJ0Q29uZmlnLmZvbnRDb2xvclxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzRGlzcGxheUxlZ2VuZCkge1xuICAgICAgXG4gICAgICBsZXQgcG9zaXRpb25UeXBlOiBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgICAgIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAndG9wJykge1xuICAgICAgICBwb3NpdGlvblR5cGUgPSAndG9wJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ2JvdHRvbSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdsZWZ0Jykge1xuICAgICAgICBwb3NpdGlvblR5cGUgPSAnbGVmdCc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdyaWdodCcpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ3JpZ2h0JztcbiAgICAgIH1cbiAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQgPSB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblR5cGVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy5pc0xlZ2VuZFBvaW50U3R5bGUpIHtcbiAgICAgIGlmICghY2hhcnRPcHRpb25zLmxlZ2VuZC5sYWJlbHMpIHtcbiAgICAgICAgY2hhcnRPcHRpb25zLmxlZ2VuZC5sYWJlbHMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzLnVzZVBvaW50U3R5bGUgPSB0cnVlO1xuICAgIH0gXG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNTdGFja2VkKSB7XG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnN0YWNrZWQgPSB0cnVlO1xuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy54QXhlc1swXS5zdGFja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiBcbiAgICByZXR1cm4gY2hhcnRPcHRpb25zO1xuICB9XG59ICJdfQ==