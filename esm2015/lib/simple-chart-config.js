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
    static populateChartConfig(chartOptions, chartConfig) {
        if (chartConfig.isDisplayDataLabel) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWNoYXJ0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL3NpbXBsZS1jaGFydC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUVFLHVCQUFrQixHQUFhLEtBQUssQ0FBQztRQUNyQyxvQkFBZSxHQUFZLFFBQVEsQ0FBQztRQUNwQyxtQkFBYyxHQUFZLFFBQVEsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQUM3QixvQkFBZSxHQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQWEsSUFBSSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHVCQUFrQixHQUFhLEtBQUssQ0FBQztRQUNyQyxjQUFTLEdBQWEsS0FBSyxDQUFDO1FBQzVCLDJCQUFzQixHQUFhLElBQUksQ0FBQztRQUN4Qyw0QkFBdUIsR0FBYSxLQUFLLENBQUM7UUFDMUMsdUJBQWtCLEdBQWEsSUFBSSxDQUFDO1FBQ3BDLGVBQVUsR0FBWSxnQkFBZ0IsQ0FBQztRQUN2QyxhQUFRLEdBQVksRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBWSxpQkFBaUIsQ0FBQztRQUN2QyxjQUFTLEdBQVksaUJBQWlCLENBQUM7UUFDdkMsb0JBQWUsR0FBYSxLQUFLLENBQUM7UUFDbEMscUJBQWdCLEdBQWEsS0FBSyxDQUFDO1FBQ25DLHFCQUFnQixHQUFhLEtBQUssQ0FBQztJQXVHckMsQ0FBQztJQXJHUSxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBMEIsRUFBRSxXQUE4QjtRQUUxRixJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxJQUFJLFVBQVUsR0FBRztnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsV0FBVyxDQUFDLGVBQWU7Z0JB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QjtZQUNELFlBQVksQ0FBQyxNQUFNLEdBQUc7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxZQUFZO2FBQ3ZCLENBQUM7U0FDSDthQUFNO1lBQ0wsWUFBWSxDQUFDLE1BQU0sR0FBRztnQkFDcEIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1NBQ0g7UUFFRCxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNqQztZQUNELFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDekIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM1QyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQzdDO1FBR0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnRPcHRpb25zLCBQb3NpdGlvblR5cGUgfSBmcm9tICdjaGFydC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUNoYXJ0Q29uZmlnIHtcclxuXHJcbiAgaXNEaXNwbGF5RGF0YUxhYmVsPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRhdGFMYWJlbEFuY2hvcj86IHN0cmluZyA9ICdjZW50ZXInO1xyXG4gIGRhdGFMYWJlbEFsaWduPzogc3RyaW5nID0gJ2NlbnRlcic7XHJcbiAgeUF4aXNMZWZ0TGFiZWw/OiBzdHJpbmcgPSAnJztcclxuICB5QXhpc1JpZ2h0TGFiZWw/OiBzdHJpbmcgPSAnJztcclxuICB4QXhpc0xhYmVsPzogc3RyaW5nID0gJyc7XHJcbiAgaXNEaXNwbGF5TGVnZW5kPzogYm9vbGVhbiA9IHRydWU7XHJcbiAgbGVnZW5kUG9zaXRpb24/OiBzdHJpbmcgPSAndG9wJztcclxuICBpc0xlZ2VuZFBvaW50U3R5bGU/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNTdGFja2VkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRGlzcGxheVlheGlzTGVmdEdyaWQ/OiBib29sZWFuID0gdHJ1ZTtcclxuICBpc0Rpc3BsYXlZYXhpc1JpZ2h0R3JpZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc0Rpc3BsYXlYYXhpc0dyaWQ/OiBib29sZWFuID0gdHJ1ZTtcclxuICBmb250RmFtaWx5Pzogc3RyaW5nID0gJ0hlbHZldGljYSBOZXVlJztcclxuICBmb250U2l6ZT86IG51bWJlciA9IDEyO1xyXG4gIGZvbnRDb2xvcj86IHN0cmluZyA9ICdyZ2JhKDAsMCwwLDAuNSknO1xyXG4gIGdyaWRDb2xvcj86IHN0cmluZyA9ICdyZ2JhKDAsMCwwLDAuMSknO1xyXG4gIGlzSG9yaXpvbnRhbEJhcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICB4QXhpc0JlZ2luQXRaZXJvPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHlBeGlzQmVnaW5BdFplcm8/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcG9wdWxhdGVDaGFydENvbmZpZyhjaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucywgY2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnKTogQ2hhcnRPcHRpb25zIHtcclxuXHJcbiAgICBpZiAoY2hhcnRDb25maWcuaXNEaXNwbGF5RGF0YUxhYmVsKSB7XHJcbiAgICAgIGxldCBkYXRhTGFiZWxzID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgYW5jaG9yOiBjaGFydENvbmZpZy5kYXRhTGFiZWxBbmNob3IsXHJcbiAgICAgICAgYWxpZ246IGNoYXJ0Q29uZmlnLmRhdGFMYWJlbEFsaWduLFxyXG4gICAgICB9XHJcbiAgICAgIGNoYXJ0T3B0aW9ucy5wbHVnaW5zID0geyBkYXRhTGFiZWxzIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS5zY2FsZUxhYmVsID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnlBeGlzTGVmdExhYmVsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmdyaWRMaW5lcyA9IHtcclxuICAgICAgICBkaXNwbGF5OiBjaGFydENvbmZpZy5pc0Rpc3BsYXlZYXhpc0xlZnRHcmlkLFxyXG4gICAgICAgIGNvbG9yOiBjaGFydENvbmZpZy5ncmlkQ29sb3JcclxuICAgICAgfVxyXG5cclxuICAgICAgY2hhcnRPcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcyA9IHtcclxuICAgICAgICBiZWdpbkF0WmVybzogY2hhcnRDb25maWcueUF4aXNCZWdpbkF0WmVybyxcclxuICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxyXG4gICAgICAgIGZvbnRTaXplOiBjaGFydENvbmZpZy5mb250U2l6ZSxcclxuICAgICAgICBmb250Q29sb3I6IGNoYXJ0Q29uZmlnLmZvbnRDb2xvcixcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhcnRDb25maWcueUF4aXNSaWdodExhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnlBeGVzLnB1c2goe1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICBncmlkTGluZXM6IHsgZGlzcGxheTogY2hhcnRDb25maWcuaXNEaXNwbGF5WWF4aXNSaWdodEdyaWQgfSxcclxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgbGFiZWxTdHJpbmc6IGNoYXJ0Q29uZmlnLnlBeGlzUmlnaHRMYWJlbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBjaGFydENvbmZpZy55QXhpc0JlZ2luQXRaZXJvLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBjaGFydENvbmZpZy5mb250RmFtaWx5LFxyXG4gICAgICAgICAgICBmb250U2l6ZTogY2hhcnRDb25maWcuZm9udFNpemUsXHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhcnRDb25maWcueEF4aXNMYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc2NhbGVMYWJlbCA9IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIGxhYmVsU3RyaW5nOiBjaGFydENvbmZpZy54QXhpc0xhYmVsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjaGFydE9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzID0ge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IGNoYXJ0Q29uZmlnLmZvbnRGYW1pbHksXHJcbiAgICAgICAgZm9udFNpemU6IGNoYXJ0Q29uZmlnLmZvbnRTaXplLFxyXG4gICAgICAgIGZvbnRDb2xvcjogY2hhcnRDb25maWcuZm9udENvbG9yXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzRGlzcGxheUxlZ2VuZCkge1xyXG5cclxuICAgICAgbGV0IHBvc2l0aW9uVHlwZTogUG9zaXRpb25UeXBlID0gJ3RvcCc7XHJcbiAgICAgIGlmIChjaGFydENvbmZpZy5sZWdlbmRQb3NpdGlvbiA9PSAndG9wJykge1xyXG4gICAgICAgIHBvc2l0aW9uVHlwZSA9ICd0b3AnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ2JvdHRvbSc7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnRDb25maWcubGVnZW5kUG9zaXRpb24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgcG9zaXRpb25UeXBlID0gJ2xlZnQnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoYXJ0Q29uZmlnLmxlZ2VuZFBvc2l0aW9uID09ICdyaWdodCcpIHtcclxuICAgICAgICBwb3NpdGlvblR5cGUgPSAncmlnaHQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNoYXJ0T3B0aW9ucy5sZWdlbmQgPSB7XHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25UeXBlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXJ0Q29uZmlnLmlzTGVnZW5kUG9pbnRTdHlsZSkge1xyXG4gICAgICBpZiAoIWNoYXJ0T3B0aW9ucy5sZWdlbmQubGFiZWxzKSB7XHJcbiAgICAgICAgY2hhcnRPcHRpb25zLmxlZ2VuZC5sYWJlbHMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjaGFydE9wdGlvbnMubGVnZW5kLmxhYmVscy51c2VQb2ludFN0eWxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhcnRDb25maWcuaXNTdGFja2VkKSB7XHJcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uc3RhY2tlZCA9IHRydWU7XHJcbiAgICAgIGNoYXJ0T3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uc3RhY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBjaGFydE9wdGlvbnM7XHJcbiAgfVxyXG59ICJdfQ==