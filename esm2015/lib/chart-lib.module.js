import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
// import * as PlotlyJS from 'plotly.js-dist-min';
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
import * as i0 from "@angular/core";
// PlotlyModule.plotlyjs = PlotlyJS;
PlotlyViaCDNModule.plotlyVersion = "1.50.0"; // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.plotlyBundleNames = ['cartesian', 'finance']; // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'
export class ChartLibModule {
}
ChartLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, declarations: [ChartLibComponent,
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
        BaseChartComponent], imports: [CommonModule,
        ChartsModule,
        PlotlyViaCDNModule], exports: [ChartLibComponent,
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
        ChartsModule] });
ChartLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, imports: [[
            CommonModule,
            ChartsModule,
            PlotlyViaCDNModule
        ], ChartsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ChartLibModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJ0LWxpYi9zcmMvbGliL2NoYXJ0LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsa0RBQWtEO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7O0FBRTFHLG9DQUFvQztBQUVwQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLENBQUMseURBQXlEO0FBQ3RHLGtCQUFrQixDQUFDLGlCQUFpQixHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMseUdBQXlHO0FBd0MxSyxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQXBDdkIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0Isa0JBQWtCLGFBR2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCLGFBR2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixZQUFZOzRHQUdILGNBQWMsWUF0QmhCO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixrQkFBa0I7U0FDbkIsRUFlQyxZQUFZOzJGQUdILGNBQWM7a0JBdEMxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3QixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsMkJBQTJCO3dCQUMzQix1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0Isa0JBQWtCO3dCQUNsQixZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxvdGx5VmlhQ0ROTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1wbG90bHkuanMnO1xyXG4vLyBpbXBvcnQgKiBhcyBQbG90bHlKUyBmcm9tICdwbG90bHkuanMtZGlzdC1taW4nO1xyXG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgfSBmcm9tICduZzItY2hhcnRzJztcclxuaW1wb3J0IHsgQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm94UGxvdENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9ib3gtcGxvdC1jaGFydC9ib3gtcGxvdC1jaGFydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFydExpYkNvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQtbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY29tYmluZWQtY2hhcnQvY29tYmluZWQtY2F0ZWdvcnktY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbWJpbmVkLWNoYXJ0L2NvbWJpbmVkLW1lYXN1cmUtY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGluZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGllQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2NhdHRlckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9zY2F0dGVyLWNoYXJ0L3NjYXR0ZXItY2hhcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZUxheW91dENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWxheW91dC1jaGFydC90cmVlLWxheW91dC1jaGFydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3ZhcmlhYmxlLXdpZHRoLWNoYXJ0L3ZhcmlhYmxlLXdpZHRoLWNoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi93YXRlcmZhbGwtY2hhcnQvd2F0ZXJmYWxsLWNoYXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi93YXRlcmZhbGwtcGx1Z2luLWNoYXJ0L3dhdGVyZmFsbC1wbHVnaW4tY2hhcnQuY29tcG9uZW50JztcclxuXHJcbi8vIFBsb3RseU1vZHVsZS5wbG90bHlqcyA9IFBsb3RseUpTO1xyXG5cclxuUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseVZlcnNpb24gPSBcIjEuNTAuMFwiOyAvLyBjYW4gYmUgYGxhdGVzdGAgb3IgYW55IHZlcnNpb24gbnVtYmVyIChpLmUuOiAnMS40MC4wJylcclxuUGxvdGx5VmlhQ0ROTW9kdWxlLnBsb3RseUJ1bmRsZU5hbWVzID0gWydjYXJ0ZXNpYW4nLCAnZmluYW5jZSddOyAvLyBvcHRpb25hbDogY2FuIGJlIG51bGwgKGZvciBmdWxsKSBvciAnYmFzaWMnLCAnY2FydGVzaWFuJywgJ2dlbycsICdnbDNkJywgJ2dsMmQnLCAnbWFwYm94JyBvciAnZmluYW5jZSdcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDaGFydExpYkNvbXBvbmVudCxcclxuICAgIEJhckNoYXJ0Q29tcG9uZW50LFxyXG4gICAgQm94UGxvdENoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29tYmluZWRDYXRlZ29yeUNoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ29tYmluZWRNZWFzdXJlQ2hhcnRDb21wb25lbnQsXHJcbiAgICBMaW5lQ2hhcnRDb21wb25lbnQsXHJcbiAgICBQaWVDaGFydENvbXBvbmVudCxcclxuICAgIFNjYXR0ZXJDaGFydENvbXBvbmVudCxcclxuICAgIFRyZWVMYXlvdXRDaGFydENvbXBvbmVudCxcclxuICAgIFZhcmlhYmxlV2lkdGhDaGFydENvbXBvbmVudCxcclxuICAgIFdhdGVyZmFsbENoYXJ0Q29tcG9uZW50LFxyXG4gICAgV2F0ZXJmYWxsUGx1Z2luQ2hhcnRDb21wb25lbnQsXHJcbiAgICBCYXNlQ2hhcnRDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIENoYXJ0c01vZHVsZSxcclxuICAgIFBsb3RseVZpYUNETk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ2hhcnRMaWJDb21wb25lbnQsXHJcbiAgICBCYXJDaGFydENvbXBvbmVudCxcclxuICAgIEJveFBsb3RDaGFydENvbXBvbmVudCxcclxuICAgIENvbWJpbmVkQ2F0ZWdvcnlDaGFydENvbXBvbmVudCxcclxuICAgIENvbWJpbmVkTWVhc3VyZUNoYXJ0Q29tcG9uZW50LFxyXG4gICAgTGluZUNoYXJ0Q29tcG9uZW50LFxyXG4gICAgUGllQ2hhcnRDb21wb25lbnQsXHJcbiAgICBTY2F0dGVyQ2hhcnRDb21wb25lbnQsXHJcbiAgICBUcmVlTGF5b3V0Q2hhcnRDb21wb25lbnQsXHJcbiAgICBWYXJpYWJsZVdpZHRoQ2hhcnRDb21wb25lbnQsXHJcbiAgICBXYXRlcmZhbGxDaGFydENvbXBvbmVudCxcclxuICAgIFdhdGVyZmFsbFBsdWdpbkNoYXJ0Q29tcG9uZW50LFxyXG4gICAgQmFzZUNoYXJ0Q29tcG9uZW50LFxyXG4gICAgQ2hhcnRzTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRMaWJNb2R1bGUgeyB9XHJcbiJdfQ==