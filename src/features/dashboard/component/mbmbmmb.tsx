"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const SemiCircleChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 400,
      height = 200,
      radius = 100;

    const data = [
      {
        value: 0.55,
        color: "#6257e3",
        label: "Daily payment",
        percentage: "55%",
      },
      { value: 0.2, color: "#73cdfc", label: "Hobby", percentage: "20%" },
      { value: 0.25, color: "#2c2f44", label: "", percentage: "75%" },
    ];

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .select("g")
      .attr("transform", `translate(${width / 2},${height})`);

    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle((d: any, i: number, arr: any) =>
        i === 0
          ? -Math.PI
          : arr
              .slice(0, i)
              .reduce((sum: any, d: any) => sum + d.value * Math.PI, -Math.PI)
      )
      .endAngle((d: any, i: number, arr: any) =>
        arr
          .slice(0, i + 1)
          .reduce((sum: any, d: any) => sum + d.value * Math.PI, -Math.PI)
      );

    svg
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("d", arc as any)
      .attr("fill", (d: any) => d.color);

    // Add center text
    svg
      .selectAll(".center-text")
      .data([data[2]])
      .join("text")
      .attr("class", "center-text")
      .attr("x", 0)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .style("fill", "#fff")
      .text("75%");

    // Add legends
    const legend = svg
      .selectAll(".legend")
      .data(data.slice(0, 2))
      .join("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${i === 0 ? -100 : 100}, 50)`);

    legend
      .append("circle")
      .attr("r", 6)
      .attr("fill", (d: any) => d.color);

    legend
      .append("text")
      .attr("x", 10)
      .attr("y", 5)
      .text((d: any) => d.label)
      .style("font-size", "14px")
      .style("fill", "#fff");

    legend
      .append("text")
      .attr("x", 10)
      .attr("y", 25)
      .text((d: any) => d.percentage)
      .style("font-size", "16px")
      .style("fill", "#fff");
  }, []);

  return (
    <svg ref={svgRef}>
      <g></g>
    </svg>
  );
};

export default SemiCircleChart;
