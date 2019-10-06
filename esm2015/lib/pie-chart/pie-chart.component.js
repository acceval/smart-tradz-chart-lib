/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalChartColors } from '../global-chart-colors';
import { GlobalChartOptions } from '../global-chart-options';
import { SimpleChartConfig } from '../simple-chart-config';
export class PieChartComponent {
    constructor() {
        this.pieChartOptions = {};
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartLegend = true;
        this.pieChartPlugins = [];
        this.pieChartColors = [];
        this.simpleChartConfig = {};
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        if (!this.pieChartColors || Object.keys(this.pieChartColors).length == 0) {
            this.pieChartColors = [{
                    backgroundColor: [],
                }];
            /** @type {?} */
            let globalColors = new GlobalChartColors().globalColors;
            globalColors.forEach((/**
             * @param {?} color
             * @return {?}
             */
            color => {
                this.pieChartColors[0].backgroundColor.push(color.backgroundColor);
            }));
        }
        if (!this.pieChartOptions || Object.keys(this.pieChartOptions).length == 0) {
            this.pieChartOptions = new GlobalChartOptions().pieChartOptions;
            if (this.simpleChartConfig && Object.keys(this.simpleChartConfig).length > 0) {
                this.pieChartOptions = SimpleChartConfig.populateChartConfig(this.pieChartOptions, this.simpleChartConfig);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.pieChartPlugins) {
            this.pieChartPlugins = [];
        }
        this.pieChartPlugins.push(pluginDataLabels);
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
PieChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pie-chart',
                template: "<div style=\"display: block;\">\n  <canvas baseChart\n    [data]=\"pieChartData\"\n    [labels]=\"pieChartLabels\"    \n    [options]=\"pieChartOptions\"\n    [plugins]=\"pieChartPlugins\"    \n    [colors]=\"pieChartColors\" \n    [legend]=\"pieChartLegend\"\n    [chartType]=\"'pie'\"    \n    (chartHover)=\"chartHovered($event)\"\n    (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PieChartComponent.ctorParameters = () => [];
PieChartComponent.propDecorators = {
    pieChartOptions: [{ type: Input }],
    pieChartLabels: [{ type: Input }],
    pieChartData: [{ type: Input }],
    pieChartLegend: [{ type: Input }],
    pieChartPlugins: [{ type: Input }],
    pieChartColors: [{ type: Input }],
    simpleChartConfig: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PieChartComponent.prototype.pieChartOptions;
    /** @type {?} */
    PieChartComponent.prototype.pieChartLabels;
    /** @type {?} */
    PieChartComponent.prototype.pieChartData;
    /** @type {?} */
    PieChartComponent.prototype.pieChartLegend;
    /** @type {?} */
    PieChartComponent.prototype.pieChartPlugins;
    /** @type {?} */
    PieChartComponent.prototype.pieChartColors;
    /** @type {?} */
    PieChartComponent.prototype.simpleChartConfig;
    /** @type {?} */
    PieChartComponent.prototype.chartClick;
    /** @type {?} */
    PieChartComponent.prototype.chartHover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPM0QsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QjtRQVhTLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBc0IsRUFBRSxDQUFDO1FBRXpDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN4RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7b0JBQ25CLGVBQWUsRUFBRSxFQUFFO2lCQUNwQixDQUFDLENBQUM7O2dCQUNELFlBQVksR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsWUFBWTtZQUN2RCxZQUFZLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUVoRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDL0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFDeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBdUM7UUFDeEUsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDRaQUF5Qzs7YUFFMUM7Ozs7OzhCQUdFLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBVFAsNENBQTRDOztJQUM1QywyQ0FBc0M7O0lBQ3RDLHlDQUFxQzs7SUFDckMsMkNBQStCOztJQUMvQiw0Q0FBcUM7O0lBQ3JDLDJDQUF5Qzs7SUFDekMsOENBQW1EOztJQUVuRCx1Q0FBNkQ7O0lBQzdELHVDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBDaGFydERhdGFTZXRzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0ICogYXMgcGx1Z2luRGF0YUxhYmVscyBmcm9tICdjaGFydGpzLXBsdWdpbi1kYXRhbGFiZWxzJztcbmltcG9ydCB7IExhYmVsLCBDb2xvciB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgR2xvYmFsQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi9nbG9iYWwtY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IEdsb2JhbENoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2dsb2JhbC1jaGFydC1vcHRpb25zJztcbmltcG9ydCB7IFNpbXBsZUNoYXJ0Q29uZmlnIH0gZnJvbSAnLi4vc2ltcGxlLWNoYXJ0LWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1waWUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBpZUNoYXJ0T3B0aW9uczogQ2hhcnRPcHRpb25zID0ge307XG4gIEBJbnB1dCgpIHBpZUNoYXJ0TGFiZWxzOiBMYWJlbFtdID0gW107XG4gIEBJbnB1dCgpIHBpZUNoYXJ0RGF0YTogbnVtYmVyW10gPSBbXTtcbiAgQElucHV0KCkgcGllQ2hhcnRMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBwaWVDaGFydFBsdWdpbnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHBpZUNoYXJ0Q29sb3JzOiBBcnJheTxhbnk+ID0gW107ICBcbiAgQElucHV0KCkgc2ltcGxlQ2hhcnRDb25maWc6IFNpbXBsZUNoYXJ0Q29uZmlnID0ge307XG5cbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLnBpZUNoYXJ0Q29sb3JzIHx8IE9iamVjdC5rZXlzKHRoaXMucGllQ2hhcnRDb2xvcnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnBpZUNoYXJ0Q29sb3JzID0gW3sgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtdLFxuICAgICAgICB9XTsgIFxuICAgICAgbGV0IGdsb2JhbENvbG9ycyA9IG5ldyBHbG9iYWxDaGFydENvbG9ycygpLmdsb2JhbENvbG9ycztcbiAgICAgIGdsb2JhbENvbG9ycy5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgdGhpcy5waWVDaGFydENvbG9yc1swXS5iYWNrZ3JvdW5kQ29sb3IucHVzaChjb2xvci5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnBpZUNoYXJ0T3B0aW9ucyB8fCBPYmplY3Qua2V5cyh0aGlzLnBpZUNoYXJ0T3B0aW9ucykubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMucGllQ2hhcnRPcHRpb25zID0gbmV3IEdsb2JhbENoYXJ0T3B0aW9ucygpLnBpZUNoYXJ0T3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc2ltcGxlQ2hhcnRDb25maWcgJiYgT2JqZWN0LmtleXModGhpcy5zaW1wbGVDaGFydENvbmZpZykubGVuZ3RoID4gMCkgeyAgICAgICBcbiAgICAgICAgdGhpcy5waWVDaGFydE9wdGlvbnMgPSBTaW1wbGVDaGFydENvbmZpZy5wb3B1bGF0ZUNoYXJ0Q29uZmlnKHRoaXMucGllQ2hhcnRPcHRpb25zLCBcbiAgICAgICAgICB0aGlzLnNpbXBsZUNoYXJ0Q29uZmlnKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBpZUNoYXJ0UGx1Z2lucykge1xuICAgICAgdGhpcy5waWVDaGFydFBsdWdpbnMgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5waWVDaGFydFBsdWdpbnMucHVzaChwbHVnaW5EYXRhTGFiZWxzKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydENsaWNrZWQoeyBldmVudCwgYWN0aXZlIH06IHsgZXZlbnQ6IE1vdXNlRXZlbnQsIGFjdGl2ZToge31bXSB9KTogdm9pZCB7ICAgIFxuICAgIGlmIChhY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoYWN0aXZlWzBdKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hhcnRIb3ZlcmVkKHsgZXZlbnQsIGFjdGl2ZSB9OiB7IGV2ZW50OiBNb3VzZUV2ZW50LCBhY3RpdmU6IHt9W10gfSk6IHZvaWQgeyAgICBcbiAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhcnRIb3Zlci5lbWl0KGFjdGl2ZVswXSk7XG4gICAgfVxuICB9XG59XG4iXX0=