/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TreeLayoutChartComponent = /** @class */ (function () {
    function TreeLayoutChartComponent() {
        this.selectedSegmentationIndex = -1;
        this.chartClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TreeLayoutChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _this = this;
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
                var path = "M " + s.y + " " + s.x + "\n            C " + (s.y + d.y) / 2 + " " + s.x + ",\n              " + (s.y + d.y) / 2 + " " + d.x + ",\n              " + d.y + " " + d.x;
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
                var index = -1;
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
    };
    TreeLayoutChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-tree-layout-chart',
                    template: "<svg width=\"100%\" height=\"700\" viewBox=\"0 0 500 700\" preserveAspectRatio=\"xMidYMid meet\">  \n  <rect fill=\"#fbfbfb\" width=\"100%\" height=\"100%\"></rect>\n</svg>",
                    styles: [":host ::ng-deep .node circle{fill:#fff;stroke:#247ba0;stroke-width:1px}:host ::ng-deep .node.select circle{stroke-width:3px;fill:#f398b0;stroke:#eb547c}:host ::ng-deep .node text{font:10px sans-serif}:host ::ng-deep .link{fill:none;stroke:#ccc;stroke-width:2px}"]
                }] }
    ];
    /** @nocollapse */
    TreeLayoutChartComponent.ctorParameters = function () { return []; };
    TreeLayoutChartComponent.propDecorators = {
        selectedSegmentationIndex: [{ type: Input }],
        chartClick: [{ type: Output }],
        treeData: [{ type: Input }]
    };
    return TreeLayoutChartComponent;
}());
export { TreeLayoutChartComponent };
if (false) {
    /** @type {?} */
    TreeLayoutChartComponent.prototype.selectedSegmentationIndex;
    /** @type {?} */
    TreeLayoutChartComponent.prototype.chartClick;
    /** @type {?} */
    TreeLayoutChartComponent.prototype.treeData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcnQtbGliLyIsInNvdXJjZXMiOlsibGliL3RyZWUtbGF5b3V0LWNoYXJ0L3RyZWUtbGF5b3V0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsvRTtJQVdFO1FBSmdCLDhCQUF5QixHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdDLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUc3QyxDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjs7WUFFTSxLQUFLLEdBQUcsSUFBSTs7O1lBR1osTUFBTSxHQUFHLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQzs7WUFDdkQsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLOztZQUN4QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7O1lBS3JDLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixvREFBb0Q7WUFDcEQsc0RBQXNEO2FBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVk7Y0FDekIsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7Ozs7O1lBWXZDLENBQUMsR0FBRyxDQUFDOztZQUNULFFBQVEsR0FBRyxHQUFHOztZQUNkLElBQUk7OztZQUdBLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFB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QkFFN0MsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ25DLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFFckIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3JELEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO3lCQUN4QyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxLQUFLLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7O2dCQWpQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsd0xBQWlEOztpQkFFbEQ7Ozs7OzRDQUdFLEtBQUs7NkJBQ0wsTUFBTTsyQkFDTixLQUFLOztJQXlPUiwrQkFBQztDQUFBLEFBbFBELElBa1BDO1NBN09ZLHdCQUF3Qjs7O0lBRW5DLDZEQUF1RDs7SUFDdkQsOENBQTZEOztJQUM3RCw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGQzOiBhbnk7XG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRyZWUtbGF5b3V0LWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtbGF5b3V0LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTGF5b3V0Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZFNlZ21lbnRhdGlvbkluZGV4OiBudW1iZXIgPSAtMTsgIFxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRyZWVEYXRhOiBhbnk7XG4gICAgICAgIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIC8vIFNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZGlhZ3JhbVxuICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDkwLCBib3R0b206IDMwLCBsZWZ0OiA5MH0sXG4gICAgd2lkdGggPSA5NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA3MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgYm9keSBvZiB0aGUgcGFnZVxuICAgIC8vIGFwcGVuZHMgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcbiAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwic3ZnXCIpXG4gICAgLy8uYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLnJpZ2h0ICsgbWFyZ2luLmxlZnQpXG4gICAgLy8uYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiXG4gICAgICAgICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvKnZhciBhc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcbiAgICBkMy5zZWxlY3Qod2luZG93KVxuICAgIC5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0V2lkdGggPSBzdmcubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldFdpZHRoIDogXCIgKyB0YXJnZXRXaWR0aCk7XG4gICAgICAgIHN2Zy5hdHRyKFwid2lkdGhcIiwgdGFyZ2V0V2lkdGgpO1xuICAgICAgICBzdmcuYXR0cihcImhlaWdodFwiLCB0YXJnZXRXaWR0aCAvIGFzcGVjdCk7XG4gICAgfSk7Ki9cblxuICAgIHZhciBpID0gMCxcbiAgICBkdXJhdGlvbiA9IDc1MCxcbiAgICByb290O1xuXG4gICAgLy8gZGVjbGFyZXMgYSB0cmVlIGxheW91dCBhbmQgYXNzaWducyB0aGUgc2l6ZVxuICAgIHZhciB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgIC8vIEFzc2lnbnMgcGFyZW50LCBjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aFxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jaGlsZHJlbjsgfSk7XG4gICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBDb2xsYXBzZSBhZnRlciB0aGUgc2Vjb25kIGxldmVsXG4gICAgLy9yb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuXG4gICAgdXBkYXRlKHJvb3QpO1xuXG4gICAgLy8gQ29sbGFwc2UgdGhlIG5vZGUgYW5kIGFsbCBpdCdzIGNoaWxkcmVuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlblxuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpXG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG5cbiAgICAgIC8vIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgICAgdmFyIHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgbmV3IHRyZWUgbGF5b3V0LlxuICAgICAgdmFyIG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSBmb3IgZml4ZWQtZGVwdGguXG4gICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQsaSl7XG4gICAgICAgICAgY29uc29sZS5sb2coaSArIFwiLCBkLmRlcHRoIFwiICsgZC5kZXB0aCk7XG4gICAgICAgICAgZC55ID0gMDtcbiAgICAgICAgICBzd2l0Y2goZC5kZXB0aCkge1xuICAgICAgICAgICAgICBjYXNlIDYgOiBkLnkgKz0gOTA7XG4gICAgICAgICAgICAgIGNhc2UgNSA6IGQueSArPSA5MDtcbiAgICAgICAgICAgICAgY2FzZSA0IDogZC55ICs9IDkwO1xuICAgICAgICAgICAgICBjYXNlIDMgOiBkLnkgKz0gOTA7XG4gICAgICAgICAgICAgIGNhc2UgMiA6IGQueSArPSA1MDtcbiAgICAgICAgICAgICAgY2FzZSAxIDogZC55ICs9IDUwO1xuICAgICAgICAgICAgICBjYXNlIDAgOiBkLnkgKz0gLTcwOyBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDogZC55ID0gZC5kZXB0aCAqIDkwO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyAqKioqKioqKioqKioqKioqKiogTm9kZXMgc2VjdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgICAgLy8gVXBkYXRlIHRoZSBub2Rlcy4uLlxuICAgICAgdmFyIG5vZGUgPSBzdmcuc2VsZWN0QWxsKCdnLm5vZGUnKVxuICAgICAgICAgIC5kYXRhKG5vZGVzLCBmdW5jdGlvbihkKSB7cmV0dXJuIGQuaWQgfHwgKGQuaWQgPSArK2kpOyB9KTtcblxuICAgICAgLy8gRW50ZXIgYW55IG5ldyBtb2RlcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgICB2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gJ2ctJyArIGQuaWQ7IH0pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBzb3VyY2UueTAgKyBcIixcIiArIHNvdXJjZS54MCArIFwiKVwiO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrKTtcblxuICAgICAgLy8gQWRkIENpcmNsZSBmb3IgdGhlIG5vZGVzXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlJylcbiAgICAgICAgICAuYXR0cigncicsIDFlLTYpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIC8vcmV0dXJuIGQuX2NoaWxkcmVuID8gXCJsaWdodHN0ZWVsYmx1ZVwiIDogXCIjZmZmXCI7XG4gICAgICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCIjZmZmXCIgOiBcIiM4MmIxYzZcIjtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gQWRkIGxhYmVscyBmb3IgdGhlIG5vZGVzXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAvL3JldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gLTEzIDogMTM7XG4gICAgICAgICAgICAgIHJldHVybiAtMTM7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgLy9yZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiZW5kXCIgOiBcInN0YXJ0XCI7XG4gICAgICAgICAgICAgIHJldHVybiBcImVuZFwiO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5kYXRhLm5hbWU7IH0pO1xuXG4gICAgICAvLyBVUERBVEVcbiAgICAgIHZhciBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24gZm9yIHRoZSBub2RlXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueSArIFwiLFwiICsgZC54ICsgXCIpXCI7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgbm9kZSBhdHRyaWJ1dGVzIGFuZCBzdHlsZVxuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJ2NpcmNsZS5ub2RlJylcbiAgICAgICAgICAuYXR0cigncicsIDEwKVxuICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAvL3JldHVybiBkLl9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCIjZmZmXCIgOiBcIiM4MmIxYzZcIjtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpO1xuXG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBub2Rlc1xuICAgICAgdmFyIG5vZGVFeGl0ID0gbm9kZS5leGl0KCkudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgc291cmNlLnkgKyBcIixcIiArIHNvdXJjZS54ICsgXCIpXCI7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIE9uIGV4aXQgcmVkdWNlIHRoZSBub2RlIGNpcmNsZXMgc2l6ZSB0byAwXG4gICAgICBub2RlRXhpdC5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgICAgLmF0dHIoJ3InLCAxZS02KTtcblxuICAgICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG9wYWNpdHkgb2YgdGV4dCBsYWJlbHNcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KTtcblxuICAgICAgLy8gKioqKioqKioqKioqKioqKioqIGxpbmtzIHNlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgbGlua3MuLi5cbiAgICAgIHZhciBsaW5rID0gc3ZnLnNlbGVjdEFsbCgncGF0aC5saW5rJylcbiAgICAgICAgICAuZGF0YShsaW5rcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cbiAgICAgIC8vIEVudGVyIGFueSBuZXcgbGlua3MgYXQgdGhlIHBhcmVudCdzIHByZXZpb3VzIHBvc2l0aW9uLlxuICAgICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5pbnNlcnQoJ3BhdGgnLCBcImdcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKVxuICAgICAgICAgIC5hdHRyKCdkJywgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHZhciBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfVxuICAgICAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbylcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gVVBEQVRFXG4gICAgICB2YXIgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rKTtcblxuICAgICAgLy8gVHJhbnNpdGlvbiBiYWNrIHRvIHRoZSBwYXJlbnQgZWxlbWVudCBwb3NpdGlvblxuICAgICAgbGlua1VwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbihkKXsgcmV0dXJuIGRpYWdvbmFsKGQsIGQucGFyZW50KSB9KTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIGxpbmtzXG4gICAgICB2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgIHZhciBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX1cbiAgICAgICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgICBkLngwID0gZC54O1xuICAgICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlcyBhIGN1cnZlZCAoZGlhZ29uYWwpIHBhdGggZnJvbSBwYXJlbnQgdG8gdGhlIGNoaWxkIG5vZGVzXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG5cbiAgICAgICAgICB2YXIgcGF0aCA9IGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWBcblxuICAgICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGUoZCk7XG5cbiAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgICAgICAgIGQzLnNlbGVjdEFsbChcImcubm9kZVwiKS5hdHRyKCdjbGFzcycsICdub2RlJyk7XG5cbiAgICAgICAgICBpZiAoZC5kYXRhLmluZGV4IHx8IGQuZGF0YS5pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gZC5kYXRhLmluZGV4O1xuXG4gICAgICAgICAgICAgIGQzLnNlbGVjdChcIiNnLVwiICsgZC5pZCkuYXR0cignY2xhc3MnLCAnbm9kZSBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2ctXCIgKyBkLmlkKS5zZWxlY3QoJ2NpcmNsZS5ub2RlJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjZjM5OGIwXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5zZWxlY3RlZFNlZ21lbnRhdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgX3RoaXMuY2hhcnRDbGljay5lbWl0KGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19