/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ChartLibComponent } from './chart-lib.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { BoxPlotChartComponent } from './box-plot-chart/box-plot-chart.component';
import { CombinedCategoryChartComponent } from './combined-chart/combined-category-chart.component';
import { CombinedMeasureChartComponent } from './combined-chart/combined-measure-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { TreeLayoutChartComponent } from './tree-layout-chart/tree-layout-chart.component';
import { VariableWidthChartComponent } from './variable-width-chart/variable-width-chart.component';
import { WaterfallChartComponent } from './waterfall-chart/waterfall-chart.component';
import { WaterfallPluginChartComponent } from './waterfall-plugin-chart/waterfall-plugin-chart.component';
import { BaseChartComponent } from './base-chart/base-chart.component';
PlotlyModule.plotlyjs = PlotlyJS;
var ChartLibModule = /** @class */ (function () {
    function ChartLibModule() {
    }
    ChartLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ChartLibComponent,
                        BarChartComponent,
                        BoxPlotChartComponent,
                        CombinedCategoryChartComponent,
                        CombinedMeasureChartComponent,
                        LineChartComponent,
                        PieChartComponent,
                        ScatterChartComponent,
                        TreeLayoutChartComponent,
                        VariableWidthChartComponent,
                        WaterfallChartComponent,
                        WaterfallPluginChartComponent,
                        BaseChartComponent
                    ],
                    imports: [
                        CommonModule,
                        ChartsModule,
                        PlotlyModule
                    ],
                    exports: [
                        ChartLibComponent,
                        BarChartComponent,
                        BoxPlotChartComponent,
                        CombinedCategoryChartComponent,
                        CombinedMeasureChartComponent,
                        LineChartComponent,
                        PieChartComponent,
                        ScatterChartComponent,
                        TreeLayoutChartComponent,
                        VariableWidthChartComponent,
                        WaterfallChartComponent,
                        WaterfallPluginChartComponent,
                        BaseChartComponent
                    ]
                },] }
    ];
    return ChartLibModule;
}());
export { ChartLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssUUFBUSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBRWpDO0lBQUE7SUFxQzhCLENBQUM7O2dCQXJDOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3QixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUFDNkIscUJBQUM7Q0FBQSxBQXJDL0IsSUFxQytCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRMaWJDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7IFBsb3RseU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItcGxvdGx5LmpzJztcbmltcG9ydCAqIGFzIFBsb3RseUpTIGZyb20gJ3Bsb3RseS5qcy9kaXN0L3Bsb3RseS5qcyc7XG5pbXBvcnQgeyBCb3hQbG90Q2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2JveC1wbG90LWNoYXJ0L2JveC1wbG90LWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21iaW5lZENhdGVnb3J5Q2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLWNhdGVnb3J5LWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tYmluZWQtY2hhcnQvY29tYmluZWQtbWVhc3VyZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2F0dGVyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3NjYXR0ZXItY2hhcnQvc2NhdHRlci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZUxheW91dENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWxheW91dC1jaGFydC90cmVlLWxheW91dC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmFyaWFibGVXaWR0aENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi92YXJpYWJsZS13aWR0aC1jaGFydC92YXJpYWJsZS13aWR0aC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3dhdGVyZmFsbC1jaGFydC93YXRlcmZhbGwtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0L3dhdGVyZmFsbC1wbHVnaW4tY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5cblBsb3RseU1vZHVsZS5wbG90bHlqcyA9IFBsb3RseUpTO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGFydExpYkNvbXBvbmVudCwgXG4gICAgQmFyQ2hhcnRDb21wb25lbnQsXG4gICAgQm94UGxvdENoYXJ0Q29tcG9uZW50LFxuICAgIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCxcbiAgICBMaW5lQ2hhcnRDb21wb25lbnQsXG4gICAgUGllQ2hhcnRDb21wb25lbnQsXG4gICAgU2NhdHRlckNoYXJ0Q29tcG9uZW50LFxuICAgIFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCxcbiAgICBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQsXG4gICAgQmFzZUNoYXJ0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2hhcnRzTW9kdWxlLFxuICAgIFBsb3RseU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hhcnRMaWJDb21wb25lbnQsXG4gICAgQmFyQ2hhcnRDb21wb25lbnQsXG4gICAgQm94UGxvdENoYXJ0Q29tcG9uZW50LFxuICAgIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCxcbiAgICBMaW5lQ2hhcnRDb21wb25lbnQsXG4gICAgUGllQ2hhcnRDb21wb25lbnQsXG4gICAgU2NhdHRlckNoYXJ0Q29tcG9uZW50LFxuICAgIFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCxcbiAgICBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQsXG4gICAgQmFzZUNoYXJ0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRMaWJNb2R1bGUgeyB9XG4iXX0=