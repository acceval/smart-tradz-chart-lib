/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GlobalChartOptions } from '../global-chart-options';
var VariableWidthChartComponent = /** @class */ (function () {
    function VariableWidthChartComponent() {
        this.generatedChartData = [{
                type: 'line',
                label: '',
                data: [{ y: 0, x: 0 }, { y: 0, x: 0 }],
            }];
        this.generatedChartColors = [{
                fill: true,
                backgroundColor: '#000000',
                pointRadius: 0,
            }];
        this.variableWidthChartLegend = true;
        this.variableWidthChartOptions = {};
        this.limitLineColor = {
            // red
            fill: false,
            borderColor: 'rgba(235, 84, 124, 1)',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointRadius: 0,
            pointHitRadius: 10,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(235, 84, 124, 1)',
            cubicInterpolationMode: 'monotone',
        };
        this.volumeAllocaitonColors = [
            ['#45a090', '#5fbaaa', '#82c9bd', '#a6d8d0', '#cae8e3'],
            ['#2a90bb', '#35a3d2', '#5fb6db', '#7bc3e1', '#a4d6eb'],
            ['#ec5f85'],
            ['#a6a6a5', '#b7b7b6', '#c8c8c7', '#d9d9d8']
        ];
    }
    /**
     * @return {?}
     */
    VariableWidthChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.variableWidthChartOptions || Object.keys(this.variableWidthChartOptions).length == 0) {
            this.variableWidthChartOptions = new GlobalChartOptions().variableWidthChartOptions;
        }
        this.buildChartData();
    };
    /**
     * @private
     * @return {?}
     */
    VariableWidthChartComponent.prototype.buildChartData = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.variableWidthChartData) {
            return;
        }
        this.generatedChartData = [];
        this.generatedChartColors = [];
        /** @type {?} */
        var _this = this;
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var index = 1;
        /** @type {?} */
        var previousState = -1;
        this.variableWidthChartData.map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            /** @type {?} */
            var end = start + d.xValue;
            _this.generatedChartData.push({
                type: 'line',
                label: d.label,
                data: [{ x: start, y: d.yValue }, { x: end, y: d.yValue }]
            });
            if (previousState == d.state) {
                index++;
            }
            else {
                previousState = d.state;
                index = 0;
            }
            _this.generatedChartColors.push(_this.getVolumeAllocationColor(d.state, index));
            start = end;
        }));
        if (this.limitLineData) {
            this.generatedChartData.unshift({
                type: 'line',
                label: this.limitLineData.label,
                data: [{ x: this.limitLineData.xValue, y: 0 }, { x: this.limitLineData.xValue, y: 1250 }]
            });
            this.generatedChartColors.unshift(this.limitLineColor);
        }
        _this.chart.update();
    };
    /**
     * @private
     * @param {?} state
     * @param {?} index
     * @return {?}
     */
    VariableWidthChartComponent.prototype.getVolumeAllocationColor = /**
     * @private
     * @param {?} state
     * @param {?} index
     * @return {?}
     */
    function (state, index) {
        /** @type {?} */
        var bg = this.volumeAllocaitonColors[0][0];
        /** @type {?} */
        var border = this.volumeAllocaitonColors[0][0];
        // state : 0=win, 1=confirm, 2=current, 4=balance
        /** @type {?} */
        var color = this.volumeAllocaitonColors[state];
        bg = color[index % color.length];
        border = bg;
        return {
            fill: true,
            backgroundColor: bg,
            borderColor: border,
            borderWidth: 1,
            pointRadius: 0,
            pointHitRadius: 10,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(235,84,124,1)',
            cubicInterpolationMode: 'monotone',
        };
    };
    VariableWidthChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-variable-width-chart',
                    template: "<div style=\"display: block\">\n  <canvas #chart baseChart height=\"150\"\n    [datasets]=\"generatedChartData\"\n    [options]=\"variableWidthChartOptions\"\n    [colors]=\"generatedChartColors\"\n    [legend]=\"variableWidthChartLegend\"\n    [chartType]=\"'bubble'\">\n  </canvas>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VariableWidthChartComponent.ctorParameters = function () { return []; };
    VariableWidthChartComponent.propDecorators = {
        chart: [{ type: ViewChild, args: [BaseChartDirective,] }],
        variableWidthChartData: [{ type: Input }],
        limitLineData: [{ type: Input }],
        variableWidthChartLegend: [{ type: Input }],
        variableWidthChartOptions: [{ type: Input }]
    };
    return VariableWidthChartComponent;
}());
export { VariableWidthChartComponent };
if (false) {
    /** @type {?} */
    VariableWidthChartComponent.prototype.generatedChartData;
    /** @type {?} */
    VariableWidthChartComponent.prototype.generatedChartColors;
    /** @type {?} */
    VariableWidthChartComponent.prototype.chart;
    /** @type {?} */
    VariableWidthChartComponent.prototype.variableWidthChartData;
    /** @type {?} */
    VariableWidthChartComponent.prototype.limitLineData;
    /** @type {?} */
    VariableWidthChartComponent.prototype.variableWidthChartLegend;
    /** @type {?} */
    VariableWidthChartComponent.prototype.variableWidthChartOptions;
    /** @type {?} */
    VariableWidthChartComponent.prototype.limitLineColor;
    /**
     * @type {?}
     * @private
     */
    VariableWidthChartComponent.prototype.volumeAllocaitonColors;
}
/**
 * @record
 */
export function VariableWidthChartData() { }
if (false) {
    /** @type {?} */
    VariableWidthChartData.prototype.label;
    /** @type {?} */
    VariableWidthChartData.prototype.xValue;
    /** @type {?} */
    VariableWidthChartData.prototype.yValue;
    /** @type {?} */
    VariableWidthChartData.prototype.state;
}
/**
 * @record
 */
export function LimitLineData() { }
if (false) {
    /** @type {?} */
    LimitLineData.prototype.label;
    /** @type {?} */
    LimitLineData.prototype.xValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL3ZhcmlhYmxlLXdpZHRoLWNoYXJ0L3ZhcmlhYmxlLXdpZHRoLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUc3RDtJQXlCRTtRQWxCTyx1QkFBa0IsR0FBZSxDQUFDO2dCQUN2QyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1FBRUkseUJBQW9CLEdBQWUsQ0FBQztnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsZUFBZSxFQUFFLFNBQVM7Z0JBQzFCLFdBQVcsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1FBS00sNkJBQXdCLEdBQVksSUFBSSxDQUFDO1FBQ3pDLDhCQUF5QixHQUFpQixFQUFFLENBQUM7UUEyRC9DLG1CQUFjLEdBQVE7O1lBRXpCLElBQUksRUFBQyxLQUFLO1lBQ1YsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxXQUFXLEVBQUUsR0FBRztZQUNoQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsY0FBYyxFQUFFLEVBQUU7WUFFbEIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNu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QUN0QywrREFBa0Q7O0lBQ2xELGdFQUFzRDs7SUEyRHRELHFEQWVFOzs7OztJQUVGLDZEQUtDOzs7OztBQThCSCw0Q0FNQzs7O0lBSkMsdUNBQWM7O0lBQ2Qsd0NBQWU7O0lBQ2Ysd0NBQWU7O0lBQ2YsdUNBQWM7Ozs7O0FBR2hCLG1DQUdDOzs7SUFGQyw4QkFBYzs7SUFDZCwrQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXZhcmlhYmxlLXdpZHRoLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhYmxlLXdpZHRoLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBnZW5lcmF0ZWRDaGFydERhdGE6IEFycmF5PGFueT4gPSBbe1xuICAgIHR5cGU6ICdsaW5lJyxcbiAgICBsYWJlbDogJycsXG4gICAgZGF0YTogW3t5OjAsIHg6MH0sIHt5OjAsIHg6MH1dLFxuICB9XTtcblxuICBwdWJsaWMgZ2VuZXJhdGVkQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbe1xuICAgIGZpbGw6IHRydWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgcG9pbnRSYWRpdXM6IDAsXG4gIH1dO1xuXG4gIEBWaWV3Q2hpbGQoQmFzZUNoYXJ0RGlyZWN0aXZlKSBwdWJsaWMgY2hhcnQ6IEJhc2VDaGFydERpcmVjdGl2ZTtcbiAgQElucHV0KCkgdmFyaWFibGVXaWR0aENoYXJ0RGF0YTogQXJyYXk8VmFyaWFibGVXaWR0aENoYXJ0RGF0YT47XG4gIEBJbnB1dCgpIGxpbWl0TGluZURhdGE6IExpbWl0TGluZURhdGE7XG4gIEBJbnB1dCgpIHZhcmlhYmxlV2lkdGhDaGFydExlZ2VuZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHZhcmlhYmxlV2lkdGhDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICAgIGlmICghdGhpcy52YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMudmFyaWFibGVXaWR0aENoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudmFyaWFibGVXaWR0aENoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS52YXJpYWJsZVdpZHRoQ2hhcnRPcHRpb25zOyAgICAgIFxuICAgIH0gICAgXG4gICAgdGhpcy5idWlsZENoYXJ0RGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZENoYXJ0RGF0YSgpIHtcblxuICAgIGlmICghdGhpcy52YXJpYWJsZVdpZHRoQ2hhcnREYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZWRDaGFydERhdGEgPSBbXTtcbiAgICB0aGlzLmdlbmVyYXRlZENoYXJ0Q29sb3JzID0gW107XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzOyAgICBcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgbGV0IHByZXZpb3VzU3RhdGUgPSAtMTtcbiAgICB0aGlzLnZhcmlhYmxlV2lkdGhDaGFydERhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgZC54VmFsdWU7XG4gICAgICAgIF90aGlzLmdlbmVyYXRlZENoYXJ0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGxhYmVsOiBkLmxhYmVsLFxuICAgICAgICAgICAgZGF0YTogW3t4OiBzdGFydCwgeTogZC55VmFsdWV9LCB7eDogZW5kLCB5OiBkLnlWYWx1ZX1dXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09IGQuc3RhdGUpIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c1N0YXRlID0gZC5zdGF0ZTsgXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuZ2VuZXJhdGVkQ2hhcnRDb2xvcnMucHVzaChfdGhpcy5nZXRWb2x1bWVBbGxvY2F0aW9uQ29sb3IoZC5zdGF0ZSwgaW5kZXgpKTtcblxuICAgICAgICBzdGFydCA9IGVuZDtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmxpbWl0TGluZURhdGEpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVkQ2hhcnREYXRhLnVuc2hpZnQoe1xuICAgICAgICAgIHR5cGU6ICdsaW5lJywgXG4gICAgICAgICAgbGFiZWw6IHRoaXMubGltaXRMaW5lRGF0YS5sYWJlbCwgXG4gICAgICAgICAgZGF0YTogW3t4OiB0aGlzLmxpbWl0TGluZURhdGEueFZhbHVlLCB5OiAwfSwge3g6IHRoaXMubGltaXRMaW5lRGF0YS54VmFsdWUsIHk6IDEyNTB9XVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ2VuZXJhdGVkQ2hhcnRDb2xvcnMudW5zaGlmdCh0aGlzLmxpbWl0TGluZUNvbG9yKTtcbiAgICB9XG5cbiAgICBfdGhpcy5jaGFydC51cGRhdGUoKTtcblxuICB9XG5cbiAgcHVibGljIGxpbWl0TGluZUNvbG9yOiBhbnkgPSB7IC8vIHJlZFxuXG4gICAgICBmaWxsOmZhbHNlLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDIzNSwgODQsIDEyNCwgMSknLFxuICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgIGJvcmRlckRhc2g6IFs1LDVdLFxuICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICBwb2ludEhpdFJhZGl1czogMTAsXG5cbiAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDUsXG4gICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIzNSwgODQsIDEyNCwgMSknLFxuXG4gICAgICBjdWJpY0ludGVycG9sYXRpb25Nb2RlOiAnbW9ub3RvbmUnLFxuICB9O1xuXG4gIHByaXZhdGUgdm9sdW1lQWxsb2NhaXRvbkNvbG9ycyA6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW1xuICAgIFsnIzQ1YTA5MCcsICcjNWZiYWFhJywgJyM4MmM5YmQnLCcjYTZkOGQwJywnI2NhZThlMyddLFxuICAgIFsnIzJhOTBiYicsICcjMzVhM2QyJywgJyM1ZmI2ZGInLCAnIzdiYzNlMScsICcjYTRkNmViJ10sXG4gICAgWycjZWM1Zjg1J10sXG4gICAgWycjYTZhNmE1JywgJyNiN2I3YjYnLCAnI2M4YzhjNycsICcjZDlkOWQ4J11cbiAgXVxuXG4gIHByaXZhdGUgZ2V0Vm9sdW1lQWxsb2NhdGlvbkNvbG9yKHN0YXRlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIDogYW55IHtcblxuICAgICAgbGV0IGJnID0gdGhpcy52b2x1bWVBbGxvY2FpdG9uQ29sb3JzWzBdWzBdO1xuICAgICAgbGV0IGJvcmRlciA9IHRoaXMudm9sdW1lQWxsb2NhaXRvbkNvbG9yc1swXVswXTtcblxuICAgICAgLy8gc3RhdGUgOiAwPXdpbiwgMT1jb25maXJtLCAyPWN1cnJlbnQsIDQ9YmFsYW5jZVxuICAgICAgbGV0IGNvbG9yID0gdGhpcy52b2x1bWVBbGxvY2FpdG9uQ29sb3JzW3N0YXRlXTtcbiAgICAgIGJnID0gY29sb3JbaW5kZXglY29sb3IubGVuZ3RoXTtcbiAgICAgIGJvcmRlciA9IGJnO1xuXG4gICAgICByZXR1cm4gIHtcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlcixcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBwb2ludFJhZGl1czogMCxcblxuICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogNSxcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgyMzUsODQsMTI0LDEpJyxcblxuICAgICAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6J21vbm90b25lJyxcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlV2lkdGhDaGFydERhdGEge1xuXG4gIGxhYmVsOiBzdHJpbmc7XG4gIHhWYWx1ZTogbnVtYmVyO1xuICB5VmFsdWU6IG51bWJlcjtcbiAgc3RhdGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW1pdExpbmVEYXRhIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgeFZhbHVlOiBudW1iZXI7XG59XG4iXX0=