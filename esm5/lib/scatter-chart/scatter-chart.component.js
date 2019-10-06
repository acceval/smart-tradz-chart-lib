/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
var ScatterChartComponent = /** @class */ (function () {
    function ScatterChartComponent() {
        this.scatterChartOptions = {};
        this.scatterChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        if (!this.scatterChartColors || Object.keys(this.scatterChartColors).length == 0) {
            this.scatterChartColors = new GlobalChartColors().globalColors;
            this.scatterChartColors.forEach((/**
             * @param {?} color
             * @return {?}
             */
            function (color) {
                color['pointRadius'] = 6;
                color['pointHoverRadius'] = 6;
            }));
        }
        if (!this.scatterChartOptions || Object.keys(this.scatterChartOptions).length == 0) {
            this.scatterChartOptions = new GlobalChartOptions().scatterChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.scatterChartOptions = SimpleChartConfig.populateChartConfig(this.scatterChartOptions, this.simpleChartConfig);
            }
        }
    }
    /**
     * @return {?}
     */
    ScatterChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ScatterChartComponent.prototype.chartClicked = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ScatterChartComponent.prototype.chartHovered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, active = _a.active;
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    };
    ScatterChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-scatter-chart',
                    template: "<div style=\"display: block\">\n  <canvas baseChart\n    [datasets]=\"scatterChartData\"\n    [options]=\"scatterChartOptions\"\n    [labels]=\"scatterChartLabels\"\n    [colors]=\"scatterChartColors\"\n    [chartType]=\"'scatter'\"\n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ScatterChartComponent.ctorParameters = function () { return []; };
    ScatterChartComponent.propDecorators = {
        scatterChartOptions: [{ type: Input }],
        scatterChartLabels: [{ type: Input }],
        scatterChartData: [{ type: Input }],
        scatterChartColors: [{ type: Input }],
        simpleChartConfig: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return ScatterChartComponent;
}());
export { ScatterChartComponent };
if (false) {
    /** @type {?} */
    ScatterChartComponent.prototype.scatterChartOptions;
    /** @type {?} */
    ScatterChartComponent.prototype.scatterChartLabels;
    /** @type {?} */
    ScatterChartComponent.prototype.scatterChartData;
    /** @type {?} */
    ScatterChartComponent.prototype.scatterChartColors;
    /** @type {?} */
    ScatterChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    ScatterChartComponent.prototype.chartClick;
    /** @type {?} */
    ScatterChartComponent.prototype.chartHover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvc2NhdHRlci1jaGFydC9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRDtJQWdCRTtRQVRTLHdCQUFtQixHQUFpQixFQUFFLENBQUM7UUFHdkMsdUJBQWtCLEdBQWUsRUFBRSxDQUFDO1FBQ3BDLHNCQUFpQixHQUFzQixFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkzRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDbkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNsRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBRXhFLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFDdkYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVNLDRDQUFZOzs7O0lBQW5CLFVBQW9CLEVBQXNEO1lBQXBELGdCQUFLLEVBQUUsa0JBQU07UUFDakMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRU0sNENBQVk7Ozs7SUFBbkIsVUFBb0IsRUFBc0Q7WUFBcEQsZ0JBQUssRUFBRSxrQkFBTTtRQUNqQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixnV0FBNkM7O2lCQUU5Qzs7Ozs7c0NBR0UsS0FBSztxQ0FDTCxLQUFLO21DQUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzZCQUVMLE1BQU07NkJBQ04sTUFBTTs7SUFvQ1QsNEJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSxxQkFBcUI7OztJQUVoQyxvREFBZ0Q7O0lBQ2hELG1EQUFxQzs7SUFDckMsaURBQTJDOztJQUMzQyxtREFBNkM7O0lBQzdDLGtEQUFtRDs7SUFFbkQsMkNBQTZEOztJQUM3RCwyQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydE9wdGlvbnMsIENoYXJ0RGF0YVNldHMsIENoYXJ0VHlwZSB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnbmcyLWNoYXJ0cyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydENvbG9ycyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRPcHRpb25zIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LW9wdGlvbnMnO1xuaW1wb3J0IHsgU2ltcGxlQ2hhcnRDb25maWcgfSBmcm9tICcuLi9zaW1wbGUtY2hhcnQtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNjYXR0ZXItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NhdHRlci1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjYXR0ZXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2F0dGVyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNjYXR0ZXJDaGFydE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuICBASW5wdXQoKSBzY2F0dGVyQ2hhcnRMYWJlbHM6IExhYmVsW107XG4gIEBJbnB1dCgpIHNjYXR0ZXJDaGFydERhdGE6IENoYXJ0RGF0YVNldHNbXTtcbiAgQElucHV0KCkgc2NhdHRlckNoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNpbXBsZUNoYXJ0Q29uZmlnOiBTaW1wbGVDaGFydENvbmZpZyA9IHt9O1xuICBcbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgICBpZiAoIXRoaXMuc2NhdHRlckNoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMuc2NhdHRlckNoYXJ0Q29sb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zY2F0dGVyQ2hhcnRDb2xvcnMgPSBuZXcgR2xvYmFsQ2hhcnRDb2xvcnMoKS5nbG9iYWxDb2xvcnM7XG4gICAgICB0aGlzLnNjYXR0ZXJDaGFydENvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgY29sb3JbJ3BvaW50UmFkaXVzJ10gPSA2O1xuICAgICAgICBjb2xvclsncG9pbnRIb3ZlclJhZGl1cyddID0gNjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zIHx8IE9iamVjdC5rZXlzKHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucyA9IG5ldyBHbG9iYWxDaGFydE9wdGlvbnMoKS5zY2F0dGVyQ2hhcnRPcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zaW1wbGVDaGFydENvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKS5sZW5ndGggPiAwKSB7ICAgICAgIFxuICAgICAgICB0aGlzLnNjYXR0ZXJDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucywgXG4gICAgICAgICAgdGhpcy5zaW1wbGVDaGFydENvbmZpZyk7XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGNoYXJ0Q2xpY2tlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFydEhvdmVyZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==