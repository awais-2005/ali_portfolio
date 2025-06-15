// BreadboardSimulator.jsx
import React, { useState } from "react";
import {
    generateUniqueId,
    getBreadboardConfig,
    calculateTerminalPositions,
} from "./utils"; // removed .js extension if using module system or added correct extension if required

export default function BreadboardSimulator() {
    const [breadboardSize, setBreadboardSize] = useState("400-point");
    const [components, setComponents] = useState([]);
    const [wires, setWires] = useState([]);
    const [wireStyle, setWireStyle] = useState("neat");
    const [stretchingTerminal, setStretchingTerminal] = useState(null);

    const breadboardConfig = getBreadboardConfig(breadboardSize);

    function addComponent(type, position) {
        const newComponent = {
            id: generateUniqueId(),
            type,
            position,
            rotation: 0,
            terminals: calculateTerminalPositions(type, position, 0),
        };
        setComponents((prev) => [...prev, newComponent]);
    }

    function rotateComponent(componentId, direction) {
        setComponents((prev) =>
            prev.map((c) => {
                if (c.id === componentId) {
                    const newRotation = (c.rotation + (direction === "clockwise" ? 90 : -90) + 360) % 360;
                    return {
                        ...c,
                        rotation: newRotation,
                        terminals: calculateTerminalPositions(c.type, c.position, newRotation),
                    };
                }
                return c;
            })
        );
    }

    function startStretching(componentId, terminalId) {
        setStretchingTerminal({ componentId, terminalId });
    }

    function finishStretching(targetComponentId, targetTerminalId) {
        if (stretchingTerminal) {
            const newWire = {
                id: generateUniqueId(),
                from: `${stretchingTerminal.componentId}-${stretchingTerminal.terminalId}`,
                to: `${targetComponentId}-${targetTerminalId}`,
                style: wireStyle,
            };
            setWires((prev) => [...prev, newWire]);
            setStretchingTerminal(null);
        }
    }

    function handleCanvasClick(e) {
        const { offsetX, offsetY } = e.nativeEvent;
        addComponent("resistor", { x: offsetX, y: offsetY });
    }

    function clearBoard() {
        setComponents([]);
        setWires([]);
    }

    return (
        <div className="p-4 space-y-4">
            <div className="space-x-2">
                <select
                    value={breadboardSize}
                    onChange={(e) => setBreadboardSize(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="400-point">Standard 400-Point</option>
                    <option value="200-point">Mini 200-Point</option>
                </select>
                <select
                    value={wireStyle}
                    onChange={(e) => setWireStyle(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="neat">Neat</option>
                    <option value="freeform">Freeform</option>
                    <option value="physics">Physics-Based</option>
                </select>
                <button
                    onClick={clearBoard}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Clear Board
                </button>
            </div>
            <svg
                width="800"
                height="600"
                className="border"
                onClick={handleCanvasClick}
            >
                {components.map((comp) => (
                    <g
                        key={comp.id}
                        transform={`translate(${comp.position.x}, ${comp.position.y}) rotate(${comp.rotation})`}
                    >
                        <rect width="40" height="20" fill="gray" />
                        {comp.terminals.map((t) => (
                            <circle
                                key={`${comp.id}-${t.id}`}
                                cx={t.x}
                                cy={t.y}
                                r="4"
                                fill="gold"
                                onMouseDown={() => startStretching(comp.id, t.id)}
                                onMouseUp={() => finishStretching(comp.id, t.id)}
                            />
                        ))}
                    </g>
                ))}
                {wires.map((wire) => {
                    const from = components
                        .flatMap((c) => c.terminals.map((t) => ({ ...t, compId: c.id })))
                        .find((t) => `${t.compId}-${t.id}` === wire.from);
                    const to = components
                        .flatMap((c) => c.terminals.map((t) => ({ ...t, compId: c.id })))
                        .find((t) => `${t.compId}-${t.id}` === wire.to);

                    if (!from || !to) return null;

                    return (
                        <line
                            key={wire.id}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            stroke="blue"
                            strokeWidth="2"
                        />
                    );
                })}
            </svg>
        </div>
    );
}

// ✅ Test cases:
// - Check ./utils or ./utils.js exists and exports all needed functions
// - Test component addition on canvas click
// - Test rotation updates terminals
// - Test wire drawing between components
// - Test clear board resets state
// - Test import paths are valid (ESM or CommonJS depending on setup)
