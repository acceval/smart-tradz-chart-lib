/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BaseChartComponent } from './base-chart/base-chart.component';
import { BoxPlotChartComponent } from './box-plot-chart/box-plot-chart.component';
import { ChartLibComponent } from './chart-lib.component';
import { CombinedCategoryChartComponent } from './combined-chart/combined-category-chart.component';
import { CombinedMeasureChartComponent } from './combined-chart/combined-measure-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { TreeLayoutChartComponent } from './tree-layout-chart/tree-layout-chart.component';
import { VariableWidthChartComponent } from './variable-width-chart/variable-width-chart.component';
import { WaterfallChartComponent } from './waterfall-chart/waterfall-chart.component';
import { WaterfallPluginChartComponent } from './waterfall-plugin-chart/waterfall-plugin-chart.component';
// PlotlyModule.plotlyjs = PlotlyJS;
PlotlyViaCDNModule.plotlyVersion = "1.50.0"; // can be `latest` or any version number (i.e.: '1.40.0')
// can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.plotlyBundleNames = ['cartesian', 'finance']; // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'
// optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'
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
                    PlotlyViaCDNModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJ0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOztBQUkxRyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLENBQUMseURBQXlEOztBQUN0RyxrQkFBa0IsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLHlHQUF5Rzs7QUF3QzFLLE1BQU0sT0FBTyxjQUFjOzs7WUF0QzFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsOEJBQThCO29CQUM5Qiw2QkFBNkI7b0JBQzdCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFDeEIsMkJBQTJCO29CQUMzQix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0Isa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLGtCQUFrQjtvQkFDbEIsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbG90bHlWaWFDRE5Nb2R1bGUgfSBmcm9tICdhbmd1bGFyLXBsb3RseS5qcyc7XG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICduZzItY2hhcnRzJztcbmltcG9ydCB7IEJhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm94UGxvdENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9ib3gtcGxvdC1jaGFydC9ib3gtcGxvdC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRMaWJDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tYmluZWRDYXRlZ29yeUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21iaW5lZC1jaGFydC9jb21iaW5lZC1jYXRlZ29yeS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NhdHRlckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9zY2F0dGVyLWNoYXJ0L3NjYXR0ZXItY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1sYXlvdXQtY2hhcnQvdHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFZhcmlhYmxlV2lkdGhDaGFydENvbXBvbmVudCB9IGZyb20gJy4vdmFyaWFibGUtd2lkdGgtY2hhcnQvdmFyaWFibGUtd2lkdGgtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXYXRlcmZhbGxQbHVnaW5DaGFydENvbXBvbmVudCB9IGZyb20gJy4vd2F0ZXJmYWxsLXBsdWdpbi1jaGFydC93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0LmNvbXBvbmVudCc7XG5cbi8vIFBsb3RseU1vZHVsZS5wbG90bHlqcyA9IFBsb3RseUpTO1xuXG5QbG90bHlWaWFDRE5Nb2R1bGUucGxvdGx5VmVyc2lvbiA9IFwiMS41MC4wXCI7IC8vIGNhbiBiZSBgbGF0ZXN0YCBvciBhbnkgdmVyc2lvbiBudW1iZXIgKGkuZS46ICcxLjQwLjAnKVxuUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseUJ1bmRsZU5hbWVzID0gWydjYXJ0ZXNpYW4nLCAnZmluYW5jZSddOyAvLyBvcHRpb25hbDogY2FuIGJlIG51bGwgKGZvciBmdWxsKSBvciAnYmFzaWMnLCAnY2FydGVzaWFuJywgJ2dlbycsICdnbDNkJywgJ2dsMmQnLCAnbWFwYm94JyBvciAnZmluYW5jZSdcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcnRMaWJDb21wb25lbnQsXG4gICAgQmFyQ2hhcnRDb21wb25lbnQsXG4gICAgQm94UGxvdENoYXJ0Q29tcG9uZW50LFxuICAgIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCxcbiAgICBMaW5lQ2hhcnRDb21wb25lbnQsXG4gICAgUGllQ2hhcnRDb21wb25lbnQsXG4gICAgU2NhdHRlckNoYXJ0Q29tcG9uZW50LFxuICAgIFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCxcbiAgICBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQsXG4gICAgQmFzZUNoYXJ0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2hhcnRzTW9kdWxlLFxuICAgIFBsb3RseVZpYUNETk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2hhcnRMaWJDb21wb25lbnQsXG4gICAgQmFyQ2hhcnRDb21wb25lbnQsXG4gICAgQm94UGxvdENoYXJ0Q29tcG9uZW50LFxuICAgIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCxcbiAgICBDb21iaW5lZE1lYXN1cmVDaGFydENvbXBvbmVudCxcbiAgICBMaW5lQ2hhcnRDb21wb25lbnQsXG4gICAgUGllQ2hhcnRDb21wb25lbnQsXG4gICAgU2NhdHRlckNoYXJ0Q29tcG9uZW50LFxuICAgIFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCxcbiAgICBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsQ2hhcnRDb21wb25lbnQsXG4gICAgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQsXG4gICAgQmFzZUNoYXJ0Q29tcG9uZW50LFxuICAgIENoYXJ0c01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TGliTW9kdWxlIHsgfVxuIl19