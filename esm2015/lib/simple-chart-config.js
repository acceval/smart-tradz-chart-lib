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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNoYXJ0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaW1wbGUtY2hhcnQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBRUUsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksUUFBUSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVksUUFBUSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQzdCLG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBYSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsMkJBQXNCLEdBQWEsSUFBSSxDQUFDO1FBQ3hDLDRCQUF1QixHQUFhLEtBQUssQ0FBQztRQUMxQyx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFDcEMsZUFBVSxHQUFZLGdCQUFnQixDQUFDO1FBQ3ZDLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLGlCQUFpQixDQUFDO1FBQ3ZDLGNBQVMsR0FBWSxpQkFBaUIsQ0FBQztRQUN2QyxvQkFBZSxHQUFhLEtBQUssQ0FBQztJQXFHcEMsQ0FBQzs7Ozs7O0lBbkdRLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxZQUEwQixFQUFFLFdBQThCO1FBRTFGLElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFOztnQkFDOUIsVUFBVSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE1BQU0sRUFBRSxXQUFXLENBQUMsZUFBZTtnQkFDbkMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxjQUFjO2FBQ2xDO1lBQ0QsWUFBWSxDQUFDLE9BQU8sR0FBRyxFQUFDLFVBQVUs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SDtRQUVELElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2pDO1lBQ0QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNqRDtRQUVELElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN6QixZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzVDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDN0M7UUFHRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7OztJQXRIQywrQ0FBcUM7O0lBQ3JDLDRDQUFvQzs7SUFDcEMsMkNBQW1DOztJQUNuQywyQ0FBNkI7O0lBQzdCLDRDQUE4Qjs7SUFDOUIsdUNBQXlCOztJQUN6Qiw0Q0FBaUM7O0lBQ2pDLDJDQUFnQzs7SUFDaEMsK0NBQXFDOztJQUNyQyxzQ0FBNEI7O0lBQzVCLG1EQUF3Qzs7SUFDeEMsb0RBQTBDOztJQUMxQywrQ0FBb0M7O0lBQ3BDLHVDQUF1Qzs7SUFDdkMscUNBQXVCOztJQUN2QixzQ0FBdUM7O0lBQ3ZDLHNDQUF1Qzs7SUFDdkMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBQb3NpdGlvblR5cGUgfSBmcm9tICdjaGFydC5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNoYXJ0Q29uZmlnIHtcbiAgXG4gIGlzRGlzcGxheURhdGFMYWJlbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGF0YUxhYmVsQW5jaG9yPzogc3RyaW5nID0gJ2NlbnRlcic7XG4gIGRhdGFMYWJlbEFsaWduPzogc3RyaW5nID0gJ2NlbnRlcic7XG4gIHlBeGlzTGVmdExhYmVsPzogc3RyaW5nID0gJyc7XG4gIHlBeGlzUmlnaHRMYWJlbD86IHN0cmluZyA9ICcnO1xuICB4QXhpc0xhYmVsPzogc3RyaW5nID0gJyc7XG4gIGlzRGlzcGxheUxlZ2VuZD86IGJvb2xlYW4gPSB0cnVlO1xuICBsZWdlbmRQb3NpdGlvbj86IHN0cmluZyA9ICd0b3AnO1xuICBpc0xlZ2VuZFBvaW50U3R5bGU/OiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhY2tlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNEaXNwbGF5WWF4aXNMZWZ0R3JpZD86IGJvb2xlYW4gPSB0cnVlO1xuICBpc0Rpc3BsYXlZYXhpc1JpZ2h0R3JpZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNEaXNwbGF5WGF4aXNHcmlkPzogYm9vbGVhbiA9IHRydWU7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmcgPSAnSGVsdmV0aWNhIE5ldWUnO1xuICBmb250U2l6ZT86IG51bWJlciA9IDEyO1xuICBmb250Q29sb3I/OiBzdHJpbmcgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgZ3JpZENvbG9yPzogc3RyaW5nID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gIGlzSG9yaXpvbnRhbEJhcj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIHB1YmxpYyBzdGF0aWMgcG9wdWxhdGVDaGFydENvbmZpZyhjaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucywgY2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnKTogQ2hhcnRPcHRpb25zIHtcblxuICAgIGlmIChjaGFydENvbmZpZy5pc0Rpc3BsYXlEYXRhTGFiZWwpIHtcbiAgICAgIGxldCBkYXRhTGFiZWxzID0geyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGFuY2hvcjogY2hhcnRDb25maWcuZGF0YUxhYmVsQW5jaG9yLFxuICAgICAgICBhbGlnbjogY2hhcnRDb25maWcuZGF0YUxhYmVsQWxpZ24sICAgICAgICBcbiAgICAgIH1cbiAgICAgIGNoYXJ0T3B0aW9ucy5wbHVnaW5zID0ge2RhdGFMYWJlbHN9O1xuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy55QXhpc0xlZnRMYWJlbC5sZW5ndGggPiAwKSB7ICAgICAgXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnNjYWxlTGFiZWwgPSB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGxhYmVsU3RyaW5nOiBjaGFydENvbmZpZy55QXhpc0xlZnRMYWJlbFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6IGNoYXJ0Q29uZmlnLmlzRGlzcGxheVlheGlzTGVmdEdyaWQsXG4gICAgICAgIGNvbG9yOiBjaGFydENvbmZpZy5ncmlkQ29sb3JcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcyA9IHtcbiAgICAgICAgZm9udEZhbWlseTogY2hhcnRDb25maWcuZm9udEZhbWlseSxcbiAgICAgICAgZm9udFNpemU6IGNoYXJ0Q29uZmlnLmZvbnRTaXplLFxuICAgICAgICBmb250Q29sb3I6IGNoYXJ0Q29uZmlnLmZvbnRDb2xvclxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnlBeGlzUmlnaHRMYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzLnB1c2goe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGdyaWRMaW5lczogeyBkaXNwbGF5OiBjaGFydENvbmZpZy5pc0Rpc3BsYXlZYXhpc1JpZ2h0R3JpZCB9LFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFN0cmluZzogY2hhcnRDb25maWcueUF4aXNSaWdodExhYmVsXG4gICAgICAgICAgfSwgXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGNoYXJ0Q29uZmlnLmZvbnRGYW1pbHksXG4gICAgICAgICAgICBmb250U2l6ZTogY2hhcnRDb25maWcuZm9udFNpemUsXG4gICAgICAgICAgICBmb250Q29sb3I6IGNoYXJ0Q29uZmlnLmZvbnRDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9ICAgICAgICAgIFxuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy54QXhpc0xhYmVsLmxlbmd0aCA+IDApIHsgICAgICBcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc2NhbGVMYWJlbCA9IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnhBeGlzTGFiZWxcbiAgICAgIH07XG5cbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0udGlja3MgPSB7XG4gICAgICAgIGZvbnRGYW1pbHk6IGNoYXJ0Q29uZmlnLmZvbnRGYW1pbHksXG4gICAgICAgIGZvbnRTaXplOiBjaGFydENvbmZpZy5mb250U2l6ZSxcbiAgICAgICAgZm9udENvbG9yOiBjaGFydENvbmZpZy5mb250Q29sb3JcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIGlmIChjaGFydENvbmZpZy5pc0Rpc3BsYXlMZWdlbmQpIHtcbiAgICAgIFxuICAgICAgbGV0IHBvc2l0aW9uVHlwZTogUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gICAgICBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ3RvcCcpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdib3R0b20nKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ2xlZnQnO1xuICAgICAgfSBlbHNlIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICdyaWdodCc7XG4gICAgICB9XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kID0ge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25UeXBlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kID0ge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnRDb25maWcuaXNMZWdlbmRQb2ludFN0eWxlKSB7XG4gICAgICBpZiAoIWNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzKSB7XG4gICAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzID0ge307XG4gICAgICB9XG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kLmxhYmVscy51c2VQb2ludFN0eWxlID0gdHJ1ZTtcbiAgICB9IFxuXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzU3RhY2tlZCkge1xuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS5zdGFja2VkID0gdHJ1ZTtcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc3RhY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gXG4gICAgcmV0dXJuIGNoYXJ0T3B0aW9ucztcbiAgfVxufSAiXX0=