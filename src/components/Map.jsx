import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const fillColor = "#2f223f";
const linesColor = "#fff";
const markerColor = "#fff";
const textColor = "#fff";

const MapChart = () => {
  const markers = [
    {
      markerOffset: { x: -25, y: -30 },
      name: "Toronto",
      coordinates: [-79.3832, 43.6532],
    },
    {
      markerOffset: { x: 30, y: -30 },
      name: "Montreal",
      coordinates: [-72.5673, 45.5017],
    },
    {
      markerOffset: { x: -20, y: -30 },
      name: "Ottawa",
      coordinates: [-75.6972, 45.4215],
    },
    {
      markerOffset: { x: 85, y: -30 },
      name: "Washington",
      coordinates: [-77.0369, 38.9072],
    },
    {
      markerOffset: { x: -25, y: 40 },
      name: "New York",
      coordinates: [-74.0059, 40.7128],
    },
    {
      markerOffset: { x: 0, y: -30 },
      name: "Los Angeles",
      coordinates: [-118.2437, 34.0522],
    },
    {
      markerOffset: { x: 0, y: -30 },
      name: "San Francisco",
      coordinates: [-122.4194, 37.7749],
    },
    {
      markerOffset: { x: 0, y: -30 },
      name: "Seattle",
      coordinates: [-122.3321, 47.6062],
    },
    {
      markerOffset: { x: 0, y: 18 },
      name: "San Diego",
      coordinates: [-117.1611, 32.7157],
    },
  ];
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [78, -50, 0],
        center: [-5, -3],
        scale: 700,
      }}
      style={{ width: "100%", height: "100%" }}>
      <Geographies
        geography="/features.json"
        fill={fillColor}
        stroke={linesColor}
        strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke={markerColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            dy={markerOffset.y}
            dx={markerOffset.x}
            style={{ fontFamily: "system-ui", fill: textColor }}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
