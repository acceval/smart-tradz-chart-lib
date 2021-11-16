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
import * as PlotlyJS from 'plotly.js-dist-min';
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
export class ChartLibModule {
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
                    BaseChartComponent,
                    ChartsModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLFlBQVksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBd0NqQyxNQUFNLE9BQU8sY0FBYzs7O1lBdEMxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQiw4QkFBOEI7b0JBQzlCLDZCQUE2QjtvQkFDN0Isa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QiwyQkFBMkI7b0JBQzNCLHVCQUF1QjtvQkFDdkIsNkJBQTZCO29CQUM3QixrQkFBa0I7b0JBQ2xCLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydExpYkNvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXJDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuaW1wb3J0IHsgUGxvdGx5TW9kdWxlIH0gZnJvbSAnYW5ndWxhci1wbG90bHkuanMnO1xuaW1wb3J0ICogYXMgUGxvdGx5SlMgZnJvbSAncGxvdGx5LmpzLWRpc3QtbWluJztcbmltcG9ydCB7IEJveFBsb3RDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYm94LXBsb3QtY2hhcnQvYm94LXBsb3QtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tYmluZWQtY2hhcnQvY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbWJpbmVkTWVhc3VyZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1tZWFzdXJlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5lQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGllQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNjYXR0ZXJDaGFydENvbXBvbmVudCB9IGZyb20gJy4vc2NhdHRlci1jaGFydC9zY2F0dGVyLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTGF5b3V0Q2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtbGF5b3V0LWNoYXJ0L3RyZWUtbGF5b3V0LWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3ZhcmlhYmxlLXdpZHRoLWNoYXJ0L3ZhcmlhYmxlLXdpZHRoLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXYXRlcmZhbGxDaGFydENvbXBvbmVudCB9IGZyb20gJy4vd2F0ZXJmYWxsLWNoYXJ0L3dhdGVyZmFsbC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3dhdGVyZmFsbC1wbHVnaW4tY2hhcnQvd2F0ZXJmYWxsLXBsdWdpbi1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcblxuUGxvdGx5TW9kdWxlLnBsb3RseWpzID0gUGxvdGx5SlM7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXJ0TGliQ29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50LFxuICAgIEJveFBsb3RDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZENhdGVnb3J5Q2hhcnRDb21wb25lbnQsXG4gICAgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIFBpZUNoYXJ0Q29tcG9uZW50LFxuICAgIFNjYXR0ZXJDaGFydENvbXBvbmVudCxcbiAgICBUcmVlTGF5b3V0Q2hhcnRDb21wb25lbnQsXG4gICAgVmFyaWFibGVXaWR0aENoYXJ0Q29tcG9uZW50LFxuICAgIFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50LFxuICAgIFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50LFxuICAgIEJhc2VDaGFydENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBQbG90bHlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENoYXJ0TGliQ29tcG9uZW50LFxuICAgIEJhckNoYXJ0Q29tcG9uZW50LFxuICAgIEJveFBsb3RDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZENhdGVnb3J5Q2hhcnRDb21wb25lbnQsXG4gICAgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQsXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxuICAgIFBpZUNoYXJ0Q29tcG9uZW50LFxuICAgIFNjYXR0ZXJDaGFydENvbXBvbmVudCxcbiAgICBUcmVlTGF5b3V0Q2hhcnRDb21wb25lbnQsXG4gICAgVmFyaWFibGVXaWR0aENoYXJ0Q29tcG9uZW50LFxuICAgIFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50LFxuICAgIFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50LFxuICAgIEJhc2VDaGFydENvbXBvbmVudCxcbiAgICBDaGFydHNNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydExpYk1vZHVsZSB7IH1cbiJdfQ==