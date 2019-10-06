/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class TreeLayoutChartComponent {
    constructor() {
        this.selectedSegmentationIndex = -1;
        this.chartClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let _this = this;
        // Set the dimensions and margins of the diagram
        /** @type {?} */
        var margin = { top: 20, right: 90, bottom: 30, left: 90 };
        /** @type {?} */
        var width = 960 - margin.left - margin.right;
        /** @type {?} */
        var height = 700 - margin.top - margin.bottom;
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        /** @type {?} */
        var svg = d3.select("svg")
            //.attr("width", width + margin.right + margin.left)
            //.attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate("
            + margin.left + "," + margin.top + ")");
        /*var aspect = width / height;
            d3.select(window)
            .on("resize", function() {
        
                var targetWidth = svg.node().getBoundingClientRect().width;
                console.log("targetWidth : " + targetWidth);
                svg.attr("width", targetWidth);
                svg.attr("height", targetWidth / aspect);
            });*/
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var duration = 750;
        /** @type {?} */
        var root;
        // declares a tree layout and assigns the size
        /** @type {?} */
        var treemap = d3.tree().size([height, width]);
        // Assigns parent, children, height, depth
        root = d3.hierarchy(this.treeData, (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.children; }));
        root.x0 = height / 2;
        root.y0 = 0;
        // Collapse after the second level
        //root.children.forEach(collapse);
        update(root);
        // Collapse the node and all it's children
        /**
         * @param {?} d
         * @return {?}
         */
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
        /**
         * @param {?} source
         * @return {?}
         */
        function update(source) {
            // Assigns the x and y position for the nodes
            /** @type {?} */
            var treeData = treemap(root);
            // Compute the new tree layout.
            /** @type {?} */
            var nodes = treeData.descendants();
            /** @type {?} */
            var links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach((/**
             * @param {?} d
             * @param {?} i
             * @return {?}
             */
            function (d, i) {
                console.log(i + ", d.depth " + d.depth);
                d.y = 0;
                switch (d.depth) {
                    case 6: d.y += 90;
                    case 5: d.y += 90;
                    case 4: d.y += 90;
                    case 3: d.y += 90;
                    case 2: d.y += 50;
                    case 1: d.y += 50;
                    case 0:
                        d.y += -70;
                        break;
                    default: d.y = d.depth * 90;
                }
            }));
            // ****************** Nodes section ***************************
            // Update the nodes...
            /** @type {?} */
            var node = svg.selectAll('g.node')
                .data(nodes, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.id || (d.id = ++i); }));
            // Enter any new modes at the parent's previous position.
            /** @type {?} */
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("id", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return 'g-' + d.id; }))
                .attr("transform", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            }))
                .on('click', click);
            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style("fill", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            }));
            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                //return d.children || d._children ? -13 : 13;
                return -13;
            }))
                .attr("text-anchor", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                //return d.children || d._children ? "end" : "start";
                return "end";
            }))
                .text((/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.data.name; }));
            // UPDATE
            /** @type {?} */
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            }));
            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            }))
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            /** @type {?} */
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            }))
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            // Update the links...
            /** @type {?} */
            var link = svg.selectAll('path.link')
                .data(links, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.id; }));
            // Enter any new links at the parent's previous position.
            /** @type {?} */
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", "link")
                .attr('d', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            }));
            // UPDATE
            /** @type {?} */
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return diagonal(d, d.parent); }));
            // Remove any exiting links
            /** @type {?} */
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', (/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                /** @type {?} */
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            }))
                .remove();
            // Store the old positions for transition.
            nodes.forEach((/**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            }));
            // Creates a curved (diagonal) path from parent to the child nodes
            /**
             * @param {?} s
             * @param {?} d
             * @return {?}
             */
            function diagonal(s, d) {
                /** @type {?} */
                var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
                return path;
            }
            // Toggle children on click.
            /**
             * @param {?} d
             * @return {?}
             */
            function click(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                }
                else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
                /** @type {?} */
                let index = -1;
                d3.selectAll("g.node").attr('class', 'node');
                if (d.data.index || d.data.index >= 0) {
                    index = d.data.index;
                    d3.select("#g-" + d.id).attr('class', 'node select');
                    d3.select("#g-" + d.id).select('circle.node')
                        .style("fill", "#f398b0");
                }
                _this.selectedSegmentationIndex = index;
                _this.chartClick.emit(d);
            }
        }
    }
}
TreeLayoutChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-tree-layout-chart',
                template: "<svg width=\"100%\" height=\"700\" viewBox=\"0 0 500 700\" preserveAspectRatio=\"xMidYMid meet\">  \n  <rect fill=\"#fbfbfb\" width=\"100%\" height=\"100%\"></rect>\n</svg>",
                styles: [":host ::ng-deep .node circle{fill:#fff;stroke:#247ba0;stroke-width:1px}:host ::ng-deep .node.select circle{stroke-width:3px;fill:#f398b0;stroke:#eb547c}:host ::ng-deep .node text{font:10px sans-serif}:host ::ng-deep .link{fill:none;stroke:#ccc;stroke-width:2px}"]
            }] }
];
/** @nocollapse */
TreeLayoutChartComponent.ctorParameters = () => [];
TreeLayoutChartComponent.propDecorators = {
    selectedSegmentationIndex: [{ type: Input }],
    chartClick: [{ type: Output }],
    treeData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TreeLayoutChartComponent.prototype.selectedSegmentationIndex;
    /** @type {?} */
    TreeLayoutChartComponent.prototype.chartClick;
    /** @type {?} */
    TreeLayoutChartComponent.prototype.treeData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL3RyZWUtbGF5b3V0LWNoYXJ0L3RyZWUtbGF5b3V0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVUvRSxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DO1FBSmdCLDhCQUF5QixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUc3QyxDQUFDOzs7O0lBRWpCLFFBQVE7O1lBRUYsS0FBSyxHQUFHLElBQUk7OztZQUdaLE1BQU0sR0FBRyxFQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7O1lBQ3ZELEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSzs7WUFDeEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7OztZQUtyQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsb0RBQW9EO1lBQ3BELHNEQUFzRDthQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZO2NBQ3pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7OztZQVl2QyxDQUFDLEdBQUcsQ0FBQzs7WUFDVCxRQUFRLEdBQUcsR0FBRzs7WUFDZCxJQUFJOzs7WUFHQSxPQUFPLEdBQUcsRUFB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QUFNLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ25DLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFFckIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO3lCQUN4QyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxLQUFLLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7OztZQWpQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsd0xBQWlEOzthQUVsRDs7Ozs7d0NBR0UsS0FBSzt5QkFDTCxNQUFNO3VCQUNOLEtBQUs7Ozs7SUFGTiw2REFBdUQ7O0lBQ3ZELDhDQUE2RDs7SUFDN0QsNENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBkMzogYW55O1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10cmVlLWxheW91dC1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLWxheW91dC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtbGF5b3V0LWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUxheW91dENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWRTZWdtZW50YXRpb25JbmRleDogbnVtYmVyID0gLTE7ICBcbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0cmVlRGF0YTogYW55O1xuICAgICAgICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBTZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGRpYWdyYW1cbiAgICB2YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiA5MCwgYm90dG9tOiAzMCwgbGVmdDogOTB9LFxuICAgIHdpZHRoID0gOTYwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNzAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGJvZHkgb2YgdGhlIHBhZ2VcbiAgICAvLyBhcHBlbmRzIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXG4gICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcInN2Z1wiKVxuICAgIC8vLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5yaWdodCArIG1hcmdpbi5sZWZ0KVxuICAgIC8vLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIlxuICAgICAgICArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gICAgLyp2YXIgYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgZDMuc2VsZWN0KHdpbmRvdylcbiAgICAub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFdpZHRoID0gc3ZnLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXJnZXRXaWR0aCA6IFwiICsgdGFyZ2V0V2lkdGgpO1xuICAgICAgICBzdmcuYXR0cihcIndpZHRoXCIsIHRhcmdldFdpZHRoKTtcbiAgICAgICAgc3ZnLmF0dHIoXCJoZWlnaHRcIiwgdGFyZ2V0V2lkdGggLyBhc3BlY3QpO1xuICAgIH0pOyovXG5cbiAgICB2YXIgaSA9IDAsXG4gICAgZHVyYXRpb24gPSA3NTAsXG4gICAgcm9vdDtcblxuICAgIC8vIGRlY2xhcmVzIGEgdHJlZSBsYXlvdXQgYW5kIGFzc2lnbnMgdGhlIHNpemVcbiAgICB2YXIgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtoZWlnaHQsIHdpZHRoXSk7XG5cbiAgICAvLyBBc3NpZ25zIHBhcmVudCwgY2hpbGRyZW4sIGhlaWdodCwgZGVwdGhcbiAgICByb290ID0gZDMuaGllcmFyY2h5KHRoaXMudHJlZURhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY2hpbGRyZW47IH0pO1xuICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gQ29sbGFwc2UgYWZ0ZXIgdGhlIHNlY29uZCBsZXZlbFxuICAgIC8vcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcblxuICAgIHVwZGF0ZShyb290KTtcblxuICAgIC8vIENvbGxhcHNlIHRoZSBub2RlIGFuZCBhbGwgaXQncyBjaGlsZHJlblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW5cbiAgICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKVxuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuXG4gICAgICAvLyBBc3NpZ25zIHRoZSB4IGFuZCB5IHBvc2l0aW9uIGZvciB0aGUgbm9kZXNcbiAgICAgIHZhciB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIG5ldyB0cmVlIGxheW91dC5cbiAgICAgIHZhciBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICAvLyBOb3JtYWxpemUgZm9yIGZpeGVkLWRlcHRoLlxuICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihkLGkpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKGkgKyBcIiwgZC5kZXB0aCBcIiArIGQuZGVwdGgpO1xuICAgICAgICAgIGQueSA9IDA7XG4gICAgICAgICAgc3dpdGNoKGQuZGVwdGgpIHtcbiAgICAgICAgICAgICAgY2FzZSA2IDogZC55ICs9IDkwO1xuICAgICAgICAgICAgICBjYXNlIDUgOiBkLnkgKz0gOTA7XG4gICAgICAgICAgICAgIGNhc2UgNCA6IGQueSArPSA5MDtcbiAgICAgICAgICAgICAgY2FzZSAzIDogZC55ICs9IDkwO1xuICAgICAgICAgICAgICBjYXNlIDIgOiBkLnkgKz0gNTA7XG4gICAgICAgICAgICAgIGNhc2UgMSA6IGQueSArPSA1MDtcbiAgICAgICAgICAgICAgY2FzZSAwIDogZC55ICs9IC03MDsgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGQueSA9IGQuZGVwdGggKiA5MDtcbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gKioqKioqKioqKioqKioqKioqIE5vZGVzIHNlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgbm9kZXMuLi5cbiAgICAgIHZhciBub2RlID0gc3ZnLnNlbGVjdEFsbCgnZy5ub2RlJylcbiAgICAgICAgICAuZGF0YShub2RlcywgZnVuY3Rpb24oZCkge3JldHVybiBkLmlkIHx8IChkLmlkID0gKytpKTsgfSk7XG5cbiAgICAgIC8vIEVudGVyIGFueSBuZXcgbW9kZXMgYXQgdGhlIHBhcmVudCdzIHByZXZpb3VzIHBvc2l0aW9uLlxuICAgICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlJylcbiAgICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICdnLScgKyBkLmlkOyB9KVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgc291cmNlLnkwICsgXCIsXCIgKyBzb3VyY2UueDAgKyBcIilcIjtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbignY2xpY2snLCBjbGljayk7XG5cbiAgICAgIC8vIEFkZCBDaXJjbGUgZm9yIHRoZSBub2Rlc1xuICAgICAgbm9kZUVudGVyLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbm9kZScpXG4gICAgICAgICAgLmF0dHIoJ3InLCAxZS02KVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAvL3JldHVybiBkLl9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiO1xuICAgICAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiI2ZmZlwiIDogXCIjODJiMWM2XCI7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBsYWJlbHMgZm9yIHRoZSBub2Rlc1xuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgLy9yZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IC0xMyA6IDEzO1xuICAgICAgICAgICAgICByZXR1cm4gLTEzO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIC8vcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyBcImVuZFwiIDogXCJzdGFydFwiO1xuICAgICAgICAgICAgICByZXR1cm4gXCJlbmRcIjtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuZGF0YS5uYW1lOyB9KTtcblxuICAgICAgLy8gVVBEQVRFXG4gICAgICB2YXIgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgcHJvcGVyIHBvc2l0aW9uIGZvciB0aGUgbm9kZVxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnkgKyBcIixcIiArIGQueCArIFwiKVwiO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGUgYXR0cmlidXRlcyBhbmQgc3R5bGVcbiAgICAgIG5vZGVVcGRhdGUuc2VsZWN0KCdjaXJjbGUubm9kZScpXG4gICAgICAgICAgLmF0dHIoJ3InLCAxMClcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgLy9yZXR1cm4gZC5fY2hpbGRyZW4gPyBcImxpZ2h0c3RlZWxibHVlXCIgOiBcIiNmZmZcIjtcblxuICAgICAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiI2ZmZlwiIDogXCIjODJiMWM2XCI7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKTtcblxuXG4gICAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXNcbiAgICAgIHZhciBub2RlRXhpdCA9IG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHNvdXJjZS55ICsgXCIsXCIgKyBzb3VyY2UueCArIFwiKVwiO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgbm9kZSBjaXJjbGVzIHNpemUgdG8gMFxuICAgICAgbm9kZUV4aXQuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAgIC5hdHRyKCdyJywgMWUtNik7XG5cbiAgICAgIC8vIE9uIGV4aXQgcmVkdWNlIHRoZSBvcGFjaXR5IG9mIHRleHQgbGFiZWxzXG4gICAgICBub2RlRXhpdC5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNik7XG5cbiAgICAgIC8vICoqKioqKioqKioqKioqKioqKiBsaW5rcyBzZWN0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgICAvLyBVcGRhdGUgdGhlIGxpbmtzLi4uXG4gICAgICB2YXIgbGluayA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAgICAgLmRhdGEobGlua3MsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXG4gICAgICAvLyBFbnRlciBhbnkgbmV3IGxpbmtzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuaW5zZXJ0KCdwYXRoJywgXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIilcbiAgICAgICAgICAuYXR0cignZCcsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICB2YXIgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH1cbiAgICAgICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pXG4gICAgICAgICAgfSk7XG5cbiAgICAgIC8vIFVQREFURVxuICAgICAgdmFyIGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XG5cbiAgICAgIC8vIFRyYW5zaXRpb24gYmFjayB0byB0aGUgcGFyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICAgIGxpbmtVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24oZCl7IHJldHVybiBkaWFnb25hbChkLCBkLnBhcmVudCkgfSk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBsaW5rc1xuICAgICAgdmFyIGxpbmtFeGl0ID0gbGluay5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICB2YXIgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9XG4gICAgICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgb2xkIHBvc2l0aW9ucyBmb3IgdHJhbnNpdGlvbi5cbiAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCl7XG4gICAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBjdXJ2ZWQgKGRpYWdvbmFsKSBwYXRoIGZyb20gcGFyZW50IHRvIHRoZSBjaGlsZCBub2Rlc1xuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuXG4gICAgICAgICAgdmFyIHBhdGggPSBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gXG5cbiAgICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlKGQpO1xuXG4gICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJnLm5vZGVcIikuYXR0cignY2xhc3MnLCAnbm9kZScpO1xuXG4gICAgICAgICAgaWYgKGQuZGF0YS5pbmRleCB8fCBkLmRhdGEuaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICBpbmRleCA9IGQuZGF0YS5pbmRleDtcblxuICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIjZy1cIiArIGQuaWQpLmF0dHIoJ2NsYXNzJywgJ25vZGUgc2VsZWN0Jyk7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdChcIiNnLVwiICsgZC5pZCkuc2VsZWN0KCdjaXJjbGUubm9kZScpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI2YzOThiMFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMuc2VsZWN0ZWRTZWdtZW50YXRpb25JbmRleCA9IGluZGV4O1xuICAgICAgICAgIF90aGlzLmNoYXJ0Q2xpY2suZW1pdChkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==