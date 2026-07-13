import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeLayoutChartComponent {
    constructor() {
        this.selectedSegmentationIndex = -1;
        this.chartClick = new EventEmitter();
    }
    ngOnInit() {
        let _this = this;
        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 90, bottom: 30, left: 90 }, width = 960 - margin.left - margin.right, height = 700 - margin.top - margin.bottom;
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
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
        var i = 0, duration = 750, root;
        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);
        // Assigns parent, children, height, depth
        root = d3.hierarchy(this.treeData, function (d) { return d.children; });
        root.x0 = height / 2;
        root.y0 = 0;
        // Collapse after the second level
        //root.children.forEach(collapse);
        update(root);
        // Collapse the node and all it's children
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
        function update(source) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);
            // Compute the new tree layout.
            var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
            // Normalize for fixed-depth.
            nodes.forEach(function (d, i) {
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
            });
            // ****************** Nodes section ***************************
            // Update the nodes...
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });
            // Enter any new modes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("id", function (d) { return 'g-' + d.id; })
                .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
                .on('click', click);
            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style("fill", function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            });
            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", function (d) {
                //return d.children || d._children ? -13 : 13;
                return -13;
            })
                .attr("text-anchor", function (d) {
                //return d.children || d._children ? "end" : "start";
                return "end";
            })
                .text(function (d) { return d.data.name; });
            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);
            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });
            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", function (d) {
                //return d._children ? "lightsteelblue" : "#fff";
                return d.children || d._children ? "#fff" : "#82b1c6";
            })
                .attr('cursor', 'pointer');
            // Remove any exiting nodes
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
                .remove();
            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);
            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);
            // ****************** links section ***************************
            // Update the links...
            var link = svg.selectAll('path.link')
                .data(links, function (d) { return d.id; });
            // Enter any new links at the parent's previous position.
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", "link")
                .attr('d', function (d) {
                var o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
            // UPDATE
            var linkUpdate = linkEnter.merge(link);
            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', function (d) { return diagonal(d, d.parent); });
            // Remove any exiting links
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
                .remove();
            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
                return path;
            }
            // Toggle children on click.
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
TreeLayoutChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TreeLayoutChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TreeLayoutChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TreeLayoutChartComponent, selector: "lib-tree-layout-chart", inputs: { selectedSegmentationIndex: "selectedSegmentationIndex", treeData: "treeData" }, outputs: { chartClick: "chartClick" }, ngImport: i0, template: "<svg width=\"100%\" height=\"700\" viewBox=\"0 0 500 700\" preserveAspectRatio=\"xMidYMid meet\">  \r\n  <rect fill=\"#fbfbfb\" width=\"100%\" height=\"100%\"></rect>\r\n</svg>", styles: [":host ::ng-deep .node circle{fill:#fff;stroke:#247ba0;stroke-width:1px}:host ::ng-deep .node.select circle{stroke-width:3px;fill:#f398b0;stroke:#eb547c}:host ::ng-deep .node text{font:10px sans-serif}:host ::ng-deep .link{fill:none;stroke:#ccc;stroke-width:2px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TreeLayoutChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tree-layout-chart',
                    templateUrl: './tree-layout-chart.component.html',
                    styleUrls: ['./tree-layout-chart.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { selectedSegmentationIndex: [{
                type: Input
            }], chartClick: [{
                type: Output
            }], treeData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvdHJlZS1sYXlvdXQtY2hhcnQvdHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcnQtbGliL3NyYy9saWIvdHJlZS1sYXlvdXQtY2hhcnQvdHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFVL0UsTUFBTSxPQUFPLHdCQUF3QjtJQU1uQztRQUpnQiw4QkFBeUIsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHN0MsQ0FBQztJQUVqQixRQUFRO1FBRU4sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdEQUFnRDtRQUNoRCxJQUFJLE1BQU0sR0FBRyxFQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsRUFDdkQsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQ3hDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTFDLGdEQUFnRDtRQUNoRCxxQ0FBcUM7UUFDckMsbURBQW1EO1FBQ25ELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLG9EQUFvRDtZQUNwRCxzREFBc0Q7YUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FB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Q0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7O3FIQTVPVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qiw4TENWckMsa0xBRU07MkZEUU8sd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7b0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRDswRUFHaUIseUJBQXlCO3NCQUF4QyxLQUFLO2dCQUNJLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0UsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyIGQzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdHJlZS1sYXlvdXQtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLWxheW91dC1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1sYXlvdXQtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUxheW91dENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNlbGVjdGVkU2VnbWVudGF0aW9uSW5kZXg6IG51bWJlciA9IC0xOyAgXHJcbiAgQE91dHB1dCgpIGNoYXJ0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIHRyZWVEYXRhOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvLyBTZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGRpYWdyYW1cclxuICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDkwLCBib3R0b206IDMwLCBsZWZ0OiA5MH0sXHJcbiAgICB3aWR0aCA9IDk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxyXG4gICAgaGVpZ2h0ID0gNzAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG4gICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXHJcbiAgICAvLyBhcHBlbmRzIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXHJcbiAgICAvLyBtb3ZlcyB0aGUgJ2dyb3VwJyBlbGVtZW50IHRvIHRoZSB0b3AgbGVmdCBtYXJnaW5cclxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCJzdmdcIilcclxuICAgIC8vLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5yaWdodCArIG1hcmdpbi5sZWZ0KVxyXG4gICAgLy8uYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcclxuICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIlxyXG4gICAgICAgICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XHJcblxyXG4gICAgLyp2YXIgYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XHJcbiAgICBkMy5zZWxlY3Qod2luZG93KVxyXG4gICAgLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0V2lkdGggPSBzdmcubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0V2lkdGggOiBcIiArIHRhcmdldFdpZHRoKTtcclxuICAgICAgICBzdmcuYXR0cihcIndpZHRoXCIsIHRhcmdldFdpZHRoKTtcclxuICAgICAgICBzdmcuYXR0cihcImhlaWdodFwiLCB0YXJnZXRXaWR0aCAvIGFzcGVjdCk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgIHZhciBpID0gMCxcclxuICAgIGR1cmF0aW9uID0gNzUwLFxyXG4gICAgcm9vdDtcclxuXHJcbiAgICAvLyBkZWNsYXJlcyBhIHRyZWUgbGF5b3V0IGFuZCBhc3NpZ25zIHRoZSBzaXplXHJcbiAgICB2YXIgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtoZWlnaHQsIHdpZHRoXSk7XHJcblxyXG4gICAgLy8gQXNzaWducyBwYXJlbnQsIGNoaWxkcmVuLCBoZWlnaHQsIGRlcHRoXHJcbiAgICByb290ID0gZDMuaGllcmFyY2h5KHRoaXMudHJlZURhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY2hpbGRyZW47IH0pO1xyXG4gICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XHJcbiAgICByb290LnkwID0gMDtcclxuXHJcbiAgICAvLyBDb2xsYXBzZSBhZnRlciB0aGUgc2Vjb25kIGxldmVsXHJcbiAgICAvL3Jvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XHJcblxyXG4gICAgdXBkYXRlKHJvb3QpO1xyXG5cclxuICAgIC8vIENvbGxhcHNlIHRoZSBub2RlIGFuZCBhbGwgaXQncyBjaGlsZHJlblxyXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xyXG4gICAgICBpZihkLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW5cclxuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpXHJcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xyXG5cclxuICAgICAgLy8gQXNzaWducyB0aGUgeCBhbmQgeSBwb3NpdGlvbiBmb3IgdGhlIG5vZGVzXHJcbiAgICAgIHZhciB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XHJcblxyXG4gICAgICAvLyBDb21wdXRlIHRoZSBuZXcgdHJlZSBsYXlvdXQuXHJcbiAgICAgIHZhciBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXHJcbiAgICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XHJcblxyXG4gICAgICAvLyBOb3JtYWxpemUgZm9yIGZpeGVkLWRlcHRoLlxyXG4gICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQsaSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpICsgXCIsIGQuZGVwdGggXCIgKyBkLmRlcHRoKTtcclxuICAgICAgICAgIGQueSA9IDA7XHJcbiAgICAgICAgICBzd2l0Y2goZC5kZXB0aCkge1xyXG4gICAgICAgICAgICAgIGNhc2UgNiA6IGQueSArPSA5MDtcclxuICAgICAgICAgICAgICBjYXNlIDUgOiBkLnkgKz0gOTA7XHJcbiAgICAgICAgICAgICAgY2FzZSA0IDogZC55ICs9IDkwO1xyXG4gICAgICAgICAgICAgIGNhc2UgMyA6IGQueSArPSA5MDtcclxuICAgICAgICAgICAgICBjYXNlIDIgOiBkLnkgKz0gNTA7XHJcbiAgICAgICAgICAgICAgY2FzZSAxIDogZC55ICs9IDUwO1xyXG4gICAgICAgICAgICAgIGNhc2UgMCA6IGQueSArPSAtNzA7IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6IGQueSA9IGQuZGVwdGggKiA5MDtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAqKioqKioqKioqKioqKioqKiogTm9kZXMgc2VjdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgbm9kZXMuLi5cclxuICAgICAgdmFyIG5vZGUgPSBzdmcuc2VsZWN0QWxsKCdnLm5vZGUnKVxyXG4gICAgICAgICAgLmRhdGEobm9kZXMsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gZC5pZCB8fCAoZC5pZCA9ICsraSk7IH0pO1xyXG5cclxuICAgICAgLy8gRW50ZXIgYW55IG5ldyBtb2RlcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXHJcbiAgICAgIHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcclxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlJylcclxuICAgICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gJ2ctJyArIGQuaWQ7IH0pXHJcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgc291cmNlLnkwICsgXCIsXCIgKyBzb3VyY2UueDAgKyBcIilcIjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAub24oJ2NsaWNrJywgY2xpY2spO1xyXG5cclxuICAgICAgLy8gQWRkIENpcmNsZSBmb3IgdGhlIG5vZGVzXHJcbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbm9kZScpXHJcbiAgICAgICAgICAuYXR0cigncicsIDFlLTYpXHJcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgICAvL3JldHVybiBkLl9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiO1xyXG4gICAgICAgICAgICAgIHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gXCIjZmZmXCIgOiBcIiM4MmIxYzZcIjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIGxhYmVscyBmb3IgdGhlIG5vZGVzXHJcbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXHJcbiAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgICAgIC8vcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAtMTMgOiAxMztcclxuICAgICAgICAgICAgICByZXR1cm4gLTEzO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgICAgIC8vcmV0dXJuIGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyBcImVuZFwiIDogXCJzdGFydFwiO1xyXG4gICAgICAgICAgICAgIHJldHVybiBcImVuZFwiO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuZGF0YS5uYW1lOyB9KTtcclxuXHJcbiAgICAgIC8vIFVQREFURVxyXG4gICAgICB2YXIgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcclxuXHJcbiAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcclxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcclxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcclxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnkgKyBcIixcIiArIGQueCArIFwiKVwiO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGUgYXR0cmlidXRlcyBhbmQgc3R5bGVcclxuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJ2NpcmNsZS5ub2RlJylcclxuICAgICAgICAgIC5hdHRyKCdyJywgMTApXHJcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgICAvL3JldHVybiBkLl9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiI2ZmZlwiIDogXCIjODJiMWM2XCI7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJyk7XHJcblxyXG5cclxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzXHJcbiAgICAgIHZhciBub2RlRXhpdCA9IG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxyXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHNvdXJjZS55ICsgXCIsXCIgKyBzb3VyY2UueCArIFwiKVwiO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vIE9uIGV4aXQgcmVkdWNlIHRoZSBub2RlIGNpcmNsZXMgc2l6ZSB0byAwXHJcbiAgICAgIG5vZGVFeGl0LnNlbGVjdCgnY2lyY2xlJylcclxuICAgICAgICAgIC5hdHRyKCdyJywgMWUtNik7XHJcblxyXG4gICAgICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgb3BhY2l0eSBvZiB0ZXh0IGxhYmVsc1xyXG4gICAgICBub2RlRXhpdC5zZWxlY3QoJ3RleHQnKVxyXG4gICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KTtcclxuXHJcbiAgICAgIC8vICoqKioqKioqKioqKioqKioqKiBsaW5rcyBzZWN0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBsaW5rcy4uLlxyXG4gICAgICB2YXIgbGluayA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgubGluaycpXHJcbiAgICAgICAgICAuZGF0YShsaW5rcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XHJcblxyXG4gICAgICAvLyBFbnRlciBhbnkgbmV3IGxpbmtzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cclxuICAgICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5pbnNlcnQoJ3BhdGgnLCBcImdcIilcclxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpXHJcbiAgICAgICAgICAuYXR0cignZCcsIGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgICAgIHZhciBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfVxyXG4gICAgICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVUERBVEVcclxuICAgICAgdmFyIGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGluayk7XHJcblxyXG4gICAgICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXHJcbiAgICAgIGxpbmtVcGRhdGUudHJhbnNpdGlvbigpXHJcbiAgICAgICAgICAuZHVyYXRpb24oZHVyYXRpb24pXHJcbiAgICAgICAgICAuYXR0cignZCcsIGZ1bmN0aW9uKGQpeyByZXR1cm4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpIH0pO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIGxpbmtzXHJcbiAgICAgIHZhciBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxyXG4gICAgICAgICAgLmF0dHIoJ2QnLCBmdW5jdGlvbihkKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fVxyXG4gICAgICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxyXG4gICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgZC54MCA9IGQueDtcclxuICAgICAgICAgIGQueTAgPSBkLnk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlcyBhIGN1cnZlZCAoZGlhZ29uYWwpIHBhdGggZnJvbSBwYXJlbnQgdG8gdGhlIGNoaWxkIG5vZGVzXHJcbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcclxuXHJcbiAgICAgICAgICB2YXIgcGF0aCA9IGBNICR7cy55fSAke3MueH1cclxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxyXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXHJcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWBcclxuXHJcbiAgICAgICAgICByZXR1cm4gcGF0aFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXHJcbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcclxuICAgICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXBkYXRlKGQpO1xyXG5cclxuICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgIGQzLnNlbGVjdEFsbChcImcubm9kZVwiKS5hdHRyKCdjbGFzcycsICdub2RlJyk7XHJcblxyXG4gICAgICAgICAgaWYgKGQuZGF0YS5pbmRleCB8fCBkLmRhdGEuaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgIGluZGV4ID0gZC5kYXRhLmluZGV4O1xyXG5cclxuICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIjZy1cIiArIGQuaWQpLmF0dHIoJ2NsYXNzJywgJ25vZGUgc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2ctXCIgKyBkLmlkKS5zZWxlY3QoJ2NpcmNsZS5ub2RlJylcclxuICAgICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiNmMzk4YjBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBfdGhpcy5zZWxlY3RlZFNlZ21lbnRhdGlvbkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICBfdGhpcy5jaGFydENsaWNrLmVtaXQoZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI3MDBcIiB2aWV3Qm94PVwiMCAwIDUwMCA3MDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPiAgXHJcbiAgPHJlY3QgZmlsbD1cIiNmYmZiZmJcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PC9yZWN0PlxyXG48L3N2Zz4iXX0=