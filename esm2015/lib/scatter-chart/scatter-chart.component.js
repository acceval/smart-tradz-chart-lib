/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
export class ScatterChartComponent {
    constructor() {
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
            color => {
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
    ngOnInit() {
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    chartClicked({ event, active }) {
        if (active.length > 0) {
            this.chartClick.emit(active[0]);
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    chartHovered({ event, active }) {
        if (active.length > 0) {
            this.chartHover.emit(active[0]);
        }
    }
}
ScatterChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-scatter-chart',
                template: "<div style=\"display: block\">\n  <canvas baseChart\n    [datasets]=\"scatterChartData\"\n    [options]=\"scatterChartOptions\"\n    [labels]=\"scatterChartLabels\"\n    [colors]=\"scatterChartColors\"\n    [chartType]=\"'scatter'\"\n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ScatterChartComponent.ctorParameters = () => [];
ScatterChartComponent.propDecorators = {
    scatterChartOptions: [{ type: Input }],
    scatterChartLabels: [{ type: Input }],
    scatterChartData: [{ type: Input }],
    scatterChartColors: [{ type: Input }],
    simpleChartConfig: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jaGFydC1saWIvIiwic291cmNlcyI6WyJsaWIvc2NhdHRlci1jaGFydC9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU8zRCxNQUFNLE9BQU8scUJBQXFCO0lBV2hDO1FBVFMsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUd2Qyx1QkFBa0IsR0FBZSxFQUFFLENBQUM7UUFDcEMsc0JBQWlCLEdBQXNCLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTNELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUV4RSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQ3ZGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFDeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFDeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZ1dBQTZDOzthQUU5Qzs7Ozs7a0NBR0UsS0FBSztpQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUVMLE1BQU07eUJBQ04sTUFBTTs7OztJQVBQLG9EQUFnRDs7SUFDaEQsbURBQXFDOztJQUNyQyxpREFBMkM7O0lBQzNDLG1EQUE2Qzs7SUFDN0Msa0RBQW1EOztJQUVuRCwyQ0FBNkQ7O0lBQzdELDJDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnREYXRhU2V0cywgQ2hhcnRUeXBlIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vZ2xvYmFsLWNoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBHbG9iYWxDaGFydE9wdGlvbnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBTaW1wbGVDaGFydENvbmZpZyB9IGZyb20gJy4uL3NpbXBsZS1jaGFydC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2NhdHRlci1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NhdHRlci1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjYXR0ZXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2NhdHRlckNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XG4gIEBJbnB1dCgpIHNjYXR0ZXJDaGFydExhYmVsczogTGFiZWxbXTtcbiAgQElucHV0KCkgc2NhdHRlckNoYXJ0RGF0YTogQ2hhcnREYXRhU2V0c1tdO1xuICBASW5wdXQoKSBzY2F0dGVyQ2hhcnRDb2xvcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XG4gIFxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyBcblxuICAgIGlmICghdGhpcy5zY2F0dGVyQ2hhcnRDb2xvcnMgfHwgT2JqZWN0LmtleXModGhpcy5zY2F0dGVyQ2hhcnRDb2xvcnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNjYXR0ZXJDaGFydENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcbiAgICAgIHRoaXMuc2NhdHRlckNoYXJ0Q29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICBjb2xvclsncG9pbnRSYWRpdXMnXSA9IDY7XG4gICAgICAgIGNvbG9yWydwb2ludEhvdmVyUmFkaXVzJ10gPSA2O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNjYXR0ZXJDaGFydE9wdGlvbnMgfHwgT2JqZWN0LmtleXModGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zKS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLnNjYXR0ZXJDaGFydE9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnICYmIE9iamVjdC5rZXlzKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcpLmxlbmd0aCA+IDApIHsgICAgICAgXG4gICAgICAgIHRoaXMuc2NhdHRlckNoYXJ0T3B0aW9ucyA9IFNpbXBsZUNoYXJ0Q29uZmlnLnBvcHVsYXRlQ2hhcnRDb25maWcodGhpcy5zY2F0dGVyQ2hhcnRPcHRpb25zLCBcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgY2hhcnRDbGlja2VkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoYXJ0SG92ZXJlZCh7IGV2ZW50LCBhY3RpdmUgfTogeyBldmVudDogTW91c2VFdmVudCwgYWN0aXZlOiB7fVtdIH0pOiB2b2lkIHsgICAgXG4gICAgaWYgKGFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdChhY3RpdmVbMF0pO1xuICAgIH1cbiAgfVxufVxuIl19