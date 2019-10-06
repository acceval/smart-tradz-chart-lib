/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as waterfallPlugin from 'chartjs-plugin-waterfall';
var WaterfallPluginChartComponent = /** @class */ (function () {
    function WaterfallPluginChartComponent() {
        this.plugins = [waterfallPlugin];
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.options = {
            plugins: {
                datalabels: {
                    display: false,
                },
                waterFallPlugin: {
                    stepLines: {
                        enabled: false,
                    },
                },
            },
        };
    }
    /**
     * @return {?}
     */
    WaterfallPluginChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.adaptDataForPlugin();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WaterfallPluginChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @private
     * @return {?}
     */
    WaterfallPluginChartComponent.prototype.adaptDataForPlugin = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.waterfallPluginChartData) {
            return;
        }
        /** @type {?} */
        var adaptedData = [];
        /** @type {?} */
        var currentTotal = 0;
        this.waterfallPluginChartData.forEach((/**
         * @param {?} v
         * @param {?} idx
         * @return {?}
         */
        function (v, idx) {
            if (!!v.total) {
                currentTotal = v.data;
            }
            else {
                if (v.data < 0) {
                    currentTotal += v.data;
                }
                adaptedData.push({
                    data: [currentTotal],
                    waterfall: {
                        dummyStack: true
                    },
                    stack: "" + idx
                });
                if (v.data > 0) {
                    currentTotal += v.data;
                }
            }
            if (v.backgroundColor) {
                adaptedData.push({
                    label: v.label,
                    data: [Math.abs(v.data)],
                    backgroundColor: v.backgroundColor,
                    stack: "" + idx
                });
            }
            else {
                /** @type {?} */
                var backgroundColor = [];
                if (v.total) {
                    backgroundColor = ['rgba(255, 99, 132, 0.5)'];
                }
                else {
                    if (v.data > 0) {
                        backgroundColor = ['rgba(54, 162, 235, 0.5)'];
                    }
                    else {
                        backgroundColor = ['rgba(255, 206, 86, 0.5)'];
                    }
                }
                adaptedData.push({
                    label: v.label,
                    data: [Math.abs(v.data)],
                    backgroundColor: backgroundColor,
                    stack: "" + idx
                });
            }
        }));
        this.chartData = {
            labels: ['Waterfall Model'],
            datasets: adaptedData
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WaterfallPluginChartComponent.prototype.chartClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.chartClick.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WaterfallPluginChartComponent.prototype.chartHovered = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.chartHover.emit(event);
    };
    WaterfallPluginChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-waterfall-plugin-chart',
                    template: "<lib-base-chart type=\"bar\" [data]=\"chartData\" [plugins]=\"plugins\" [options]=\"options\"\n  (chartHover)=\"chartHovered($event)\"\n  (chartClick)=\"chartClicked($event)\">\n</lib-base-chart>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    WaterfallPluginChartComponent.ctorParameters = function () { return []; };
    WaterfallPluginChartComponent.propDecorators = {
        waterfallPluginChartData: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return WaterfallPluginChartComponent;
}());
export { WaterfallPluginChartComponent };
if (false) {
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.waterfallPluginChartData;
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.chartData;
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.plugins;
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.chartClick;
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.chartHover;
    /** @type {?} */
    WaterfallPluginChartComponent.prototype.options;
}
/**
 * @record
 */
export function WaterfallPluginChartData() { }
if (false) {
    /** @type {?} */
    WaterfallPluginChartData.prototype.label;
    /** @type {?} */
    WaterfallPluginChartData.prototype.data;
    /** @type {?|undefined} */
    WaterfallPluginChartData.prototype.backgroundColor;
    /** @type {?|undefined} */
    WaterfallPluginChartData.prototype.total;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXJmYWxsLXBsdWdpbi1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvd2F0ZXJmYWxsLXBsdWdpbi1jaGFydC93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxlQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFFNUQ7SUFlRTtRQUxBLFlBQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWxCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUEyRTdELFlBQU8sR0FBRztZQUNSLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVMsRUFBRTt3QkFDVCxPQUFPLEVBQUUsS0FBSztxQkFDZjtpQkFDRjthQUNGO1NBQ0YsQ0FBQTtJQW5GRCxDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxtREFBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQzs7Ozs7SUFFTywwREFBa0I7Ozs7SUFBMUI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2xDLE9BQU87U0FDUjs7WUFFSyxXQUFXLEdBQUcsRUFBRTs7WUFDbEIsWUFBWSxHQUFHLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsR0FBRztZQUUzQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNiLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQ2QsWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQ3hCO2dCQUVELFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUNwQixTQUFTLEVBQUU7d0JBQ1QsVUFBVSxFQUFFLElBQUk7cUJBQ2pCO29CQUNELEtBQUssRUFBRSxLQUFHLEdBQUs7aUJBQ2hCLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUNkLFlBQVksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUN4QjthQUNGO1lBRUQsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO2dCQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSztvQkFDZCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxlQUFlO29CQUNsQyxLQUFLLEVBQUUsS0FBRyxHQUFLO2lCQUNoQixDQUFDLENBQUM7YUFDSjtpQkFBTTs7b0JBQ0QsZUFBZSxHQUFhLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDWCxlQUFlLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2lCQUMvQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO3dCQUNkLGVBQWUsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7cUJBQy9DO3lCQUFNO3dCQUNMLGVBQWUsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7cUJBQy9DO2lCQUNGO2dCQUNELFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO29CQUNkLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixlQUFlLEVBQUUsZUFBZTtvQkFDaEMsS0FBSyxFQUFFLEtBQUcsR0FBSztpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFlTSxvREFBWTs7OztJQUFuQixVQUFvQixLQUFVO1FBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0sb0RBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUU1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkE3R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGlOQUFzRDs7aUJBRXZEOzs7OzsyQ0FHRSxLQUFLOzZCQUtMLE1BQU07NkJBQ04sTUFBTTs7SUFpR1Qsb0NBQUM7Q0FBQSxBQTlHRCxJQThHQztTQXpHWSw2QkFBNkI7OztJQUV4QyxpRUFBOEQ7O0lBRTlELGtEQUEyQjs7SUFDM0IsZ0RBQTRCOztJQUU1QixtREFBNkQ7O0lBQzdELG1EQUE2RDs7SUEyRTdELGdEQVdDOzs7OztBQWFILDhDQU1DOzs7SUFMQyx5Q0FBYzs7SUFDZCx3Q0FBYTs7SUFDYixtREFBeUI7O0lBRXpCLHlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgd2F0ZXJmYWxsUGx1Z2luIGZyb20gJ2NoYXJ0anMtcGx1Z2luLXdhdGVyZmFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi13YXRlcmZhbGwtcGx1Z2luLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhdGVyZmFsbC1wbHVnaW4tY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgd2F0ZXJmYWxsUGx1Z2luQ2hhcnREYXRhOiBXYXRlcmZhbGxQbHVnaW5DaGFydERhdGFbXTtcblxuICBjaGFydERhdGE6IENoYXJ0LkNoYXJ0RGF0YTtcbiAgcGx1Z2lucyA9IFt3YXRlcmZhbGxQbHVnaW5dO1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYXJ0SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkYXB0RGF0YUZvclBsdWdpbigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICB9XG5cbiAgcHJpdmF0ZSBhZGFwdERhdGFGb3JQbHVnaW4oKSB7XG4gICAgaWYgKCF0aGlzLndhdGVyZmFsbFBsdWdpbkNoYXJ0RGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkYXB0ZWREYXRhID0gW107XG4gICAgbGV0IGN1cnJlbnRUb3RhbCA9IDA7XG5cbiAgICB0aGlzLndhdGVyZmFsbFBsdWdpbkNoYXJ0RGF0YS5mb3JFYWNoKCh2LCBpZHgpID0+IHtcblxuICAgICAgaWYgKCEhdi50b3RhbCkge1xuICAgICAgICBjdXJyZW50VG90YWwgPSB2LmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodi5kYXRhIDwgMCkge1xuICAgICAgICAgIGN1cnJlbnRUb3RhbCArPSB2LmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBhZGFwdGVkRGF0YS5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBbY3VycmVudFRvdGFsXSxcbiAgICAgICAgICB3YXRlcmZhbGw6IHtcbiAgICAgICAgICAgIGR1bW15U3RhY2s6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0YWNrOiBgJHtpZHh9YFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodi5kYXRhID4gMCkge1xuICAgICAgICAgIGN1cnJlbnRUb3RhbCArPSB2LmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHYuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIGFkYXB0ZWREYXRhLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiB2LmxhYmVsLFxuICAgICAgICAgIGRhdGE6IFtNYXRoLmFicyh2LmRhdGEpXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHYuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIHN0YWNrOiBgJHtpZHh9YFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh2LnRvdGFsKSB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gWydyZ2JhKDI1NSwgOTksIDEzMiwgMC41KSddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh2LmRhdGEgPiAwKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBbJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjUpJ107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IFsncmdiYSgyNTUsIDIwNiwgODYsIDAuNSknXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRhcHRlZERhdGEucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IHYubGFiZWwsXG4gICAgICAgICAgZGF0YTogW01hdGguYWJzKHYuZGF0YSldLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIHN0YWNrOiBgJHtpZHh9YFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY2hhcnREYXRhID0ge1xuICAgICAgbGFiZWxzOiBbJ1dhdGVyZmFsbCBNb2RlbCddLFxuICAgICAgZGF0YXNldHM6IGFkYXB0ZWREYXRhXG4gICAgfTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7ICAgIFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGRhdGFsYWJlbHM6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgd2F0ZXJGYWxsUGx1Z2luOiB7XG4gICAgICAgIHN0ZXBMaW5lczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSwgICAgXG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKGV2ZW50OiBhbnkpIHtcbiBcbiAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKGV2ZW50OiBhbnkpIHtcbiAgXG4gICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoZXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2F0ZXJmYWxsUGx1Z2luQ2hhcnREYXRhIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGF0YTogbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIC8vIG1hcmtzIGRhdGEgYXMgdG90YWxcbiAgdG90YWw/OiBib29sZWFuO1xufSJdfQ==