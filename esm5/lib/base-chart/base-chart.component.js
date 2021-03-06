/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
var BaseChartComponent = /** @class */ (function () {
    function BaseChartComponent() {
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    BaseChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.options) {
            /** @type {?} */
            var opt = Object.assign(Object.create(Object.getPrototypeOf(this.options)), this.options);
            opt.onClick = (/**
             * @param {?=} event
             * @param {?=} active
             * @return {?}
             */
            function (event, active) {
                _this.chartClicked(event, active);
            });
            opt.hover = opt.hover || {};
            opt.hover.onHover = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                _this.chartHovered(event, active);
            });
            this._options = opt;
        }
        else {
            /** @type {?} */
            var opt = {};
            opt.onClick = (/**
             * @param {?=} event
             * @param {?=} active
             * @return {?}
             */
            function (event, active) {
                _this.chartClicked(event, active);
            });
            opt.hover = opt.hover || {};
            opt.hover.onHover = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                _this.chartHovered(event, active);
            });
            this._options = opt;
        }
        this._chart = new Chart(this.canvasRef.nativeElement, {
            type: this.type,
            data: this.data,
            options: this._options,
            plugins: this.plugins
        });
    };
    /**
     * @private
     * @param {?} event
     * @param {?} chartObj
     * @return {?}
     */
    BaseChartComponent.prototype.chartClicked = /**
     * @private
     * @param {?} event
     * @param {?} chartObj
     * @return {?}
     */
    function (event, chartObj) {
        this.chartClick.emit(chartObj);
    };
    /**
     * @private
     * @param {?} event
     * @param {?} chartObj
     * @return {?}
     */
    BaseChartComponent.prototype.chartHovered = /**
     * @private
     * @param {?} event
     * @param {?} chartObj
     * @return {?}
     */
    function (event, chartObj) {
        this.chartHover.emit(chartObj);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    BaseChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._chart) {
            this._chart.destroy();
        }
    };
    BaseChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-base-chart',
                    template: "<div class=\"chart-container\" style=\"position: relative; width: 100%; height: 100%\">\n  <canvas #chartCanvas></canvas>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    BaseChartComponent.ctorParameters = function () { return []; };
    BaseChartComponent.propDecorators = {
        canvasRef: [{ type: ViewChild, args: ['chartCanvas',] }],
        type: [{ type: Input }],
        data: [{ type: Input }],
        options: [{ type: Input }],
        plugins: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return BaseChartComponent;
}());
export { BaseChartComponent };
if (false) {
    /** @type {?} */
    BaseChartComponent.prototype.canvasRef;
    /** @type {?} */
    BaseChartComponent.prototype.type;
    /** @type {?} */
    BaseChartComponent.prototype.data;
    /** @type {?} */
    BaseChartComponent.prototype.options;
    /** @type {?} */
    BaseChartComponent.prototype.plugins;
    /** @type {?} */
    BaseChartComponent.prototype.chartClick;
    /** @type {?} */
    BaseChartComponent.prototype.chartHover;
    /**
     * @type {?}
     * @private
     */
    BaseChartComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    BaseChartComponent.prototype._chart;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFFbEM7SUFtQkU7UUFOaUIsZUFBVSxHQUF3RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JGLGVBQVUsR0FBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1wRyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBcUNDO1FBbkNDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVYsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFM0YsR0FBRyxDQUFDLE9BQU87Ozs7O1lBQUcsVUFBQyxLQUFrQixFQUFFLE1BQWE7Z0JBQzlDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQSxDQUFDO1lBRUYsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7O1lBQUcsVUFBQyxLQUFpQixFQUFFLE1BQVk7Z0JBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7U0FFckI7YUFBTTs7Z0JBRUMsR0FBRyxHQUF1QixFQUFFO1lBQ2xDLEdBQUcsQ0FBQyxPQUFPOzs7OztZQUFHLFVBQUMsS0FBa0IsRUFBRSxNQUFhO2dCQUM5QyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUEsQ0FBQztZQUVGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7OztZQUFHLFVBQUMsS0FBaUIsRUFBRSxNQUFZO2dCQUNsRCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUEsQ0FBQztZQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUNwRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyx5Q0FBWTs7Ozs7O0lBQXBCLFVBQXFCLEtBQWlCLEVBQUUsUUFBYTtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8seUNBQVk7Ozs7OztJQUFwQixVQUFxQixLQUFpQixFQUFFLFFBQWE7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtJQUEwQztpQkFDM0M7Ozs7OzRCQUdFLFNBQVMsU0FBQyxhQUFhO3VCQUV2QixLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUVMLE1BQU07NkJBQ04sTUFBTTs7SUErRFQseUJBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQXpFWSxrQkFBa0I7OztJQUU3Qix1Q0FBZ0Q7O0lBRWhELGtDQUErQjs7SUFDL0Isa0NBQStCOztJQUMvQixxQ0FBcUM7O0lBQ3JDLHFDQUFzQjs7SUFFdEIsd0NBQXNHOztJQUN0Ryx3Q0FBb0c7Ozs7O0lBRXBHLHNDQUFxQzs7Ozs7SUFDckMsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ2hhcnQgZnJvbSAnY2hhcnQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYmFzZS1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0Q2FudmFzJykgY2FudmFzUmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIHR5cGU6IENoYXJ0LkNoYXJ0VHlwZTtcbiAgQElucHV0KCkgZGF0YTogQ2hhcnQuQ2hhcnREYXRhO1xuICBASW5wdXQoKSBvcHRpb25zOiBDaGFydC5DaGFydE9wdGlvbnM7XG4gIEBJbnB1dCgpIHBsdWdpbnM6IGFueTtcblxuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjx7IGV2ZW50PzogTW91c2VFdmVudCwgYWN0aXZlPzoge31bXSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IENoYXJ0LkNoYXJ0T3B0aW9ucztcbiAgcHJpdmF0ZSBfY2hhcnQ6IENoYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG5cbiAgICAgIGNvbnN0IG9wdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5vcHRpb25zKSksIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgIG9wdC5vbkNsaWNrID0gKGV2ZW50PzogTW91c2VFdmVudCwgYWN0aXZlPzoge31bXSkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMuY2hhcnRDbGlja2VkKGV2ZW50LCBhY3RpdmUpOyAgICAgICAgXG4gICAgICB9O1xuXG4gICAgICBvcHQuaG92ZXIgPSBvcHQuaG92ZXIgfHwge307XG4gICAgICBvcHQuaG92ZXIub25Ib3ZlciA9IChldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRIb3ZlcmVkKGV2ZW50LCBhY3RpdmUpOyAgICAgIFxuICAgICAgfTsgICAgICBcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHQ7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgXG4gICAgICBjb25zdCBvcHQ6IENoYXJ0LkNoYXJ0T3B0aW9ucyA9IHt9O1xuICAgICAgb3B0Lm9uQ2xpY2sgPSAoZXZlbnQ/OiBNb3VzZUV2ZW50LCBhY3RpdmU/OiB7fVtdKSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jaGFydENsaWNrZWQoZXZlbnQsIGFjdGl2ZSk7XG4gICAgICB9O1xuXG4gICAgICBvcHQuaG92ZXIgPSBvcHQuaG92ZXIgfHwge307XG4gICAgICBvcHQuaG92ZXIub25Ib3ZlciA9IChldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRIb3ZlcmVkKGV2ZW50LCBhY3RpdmUpOyAgICAgICAgXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9vcHRpb25zID0gb3B0O1xuICAgIH1cblxuICAgIHRoaXMuX2NoYXJ0ID0gbmV3IENoYXJ0KHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMgICAgICBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnRDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50LCBjaGFydE9iajogYW55KSB7XG4gICAgdGhpcy5jaGFydENsaWNrLmVtaXQoY2hhcnRPYmopO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydEhvdmVyZWQoZXZlbnQ6IE1vdXNlRXZlbnQsIGNoYXJ0T2JqOiBhbnkpIHtcbiAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChjaGFydE9iaik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMuX2NoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==