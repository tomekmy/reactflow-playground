import React, { useState, useEffect, useCallback } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import CustomStep from './CustomStep';

import './index.css';

const onNodeDragStop = (event, node) => console.log('drag stop', node);
const onElementClick = (event, element) => console.log('click', element);

const bgColor = '#1A192B';

const connectionLineStyle = { stroke: '#fff' };
const nodeTypes = {
  selectorNode: CustomStep,
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements([
      {
        id: '1', // steps[0].ports.input[0].stepId
        type: 'selectorNode', // steps[0].ports.input
        data: { 
          label: 'Table 1', // z nazwy bytu z steps[0].ports.input[0].resId
          resId: 10, // steps[0].ports.input[0].resId
          ports: { // dla tabeli zapewne będzie to tylko port output
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
            }]
          }
        }, 
        position: { x: 100, y: 50 },
        style: { border: '1px solid #777', padding: 10 },
      },
      {
        id: '2', // steps[0].ports.input[1].stepId
        type: 'selectorNode', // steps[0].ports.input
        data: {
          label: 'Table 2', // z nazwy bytu z steps[0].ports.input[1].resId
          resId: 20, // steps[0].ports.input[1].resId
          ports: { // dla tabeli zapewne będzie to tylko port output
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
            }]
          }
        },
        position: { x: 100, y: 100 },
        style: { border: '1px solid #777', padding: 10 },
      },
      {
        id: '3', // steps[0].ports.input[2].stepId
        type: 'selectorNode', // steps[0].ports.input
        data: {
          label: 'Słownik 1', // z nazwy bytu z steps[0].ports.input[2].dictionaryId
          dictionaryId: 30, // steps[0].ports.input[2].dictionaryId
          ports: { // dla tabeli zapewne będzie to tylko port output
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
            }]
          }
        },
        position: { x: 100, y: 150 },
        style: { border: '1px solid #777', padding: 10 },
      },
      {
        id: '4', // steps[0].stepId
        type: 'selectorNode', // określamy z steps[0].resId type
        data: { 
          label: 'Query Builder', // z nazwy bytu z steps[0].resId
          resId: 1000, // steps[0].resId
          ports: { // steps[0].resId z definicji portów tego resId
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego QB1',
              type: ["table", 'dictionary']
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego QB1",
              type: ["table"]
            }]
          } 
        }, 
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 250, y: 100 },
      },
      {
        id: '5', // steps[0].output[0].stepId
        type: 'selectorNode', // określamy z steps[0].output[0].resId a gdy brak (i dictionaryId) to znaczy że dane tymczasowe
        data: {
          label: 'Wynik 1', // określamy z steps[0].output[0].resId a gdy brak to znaczy że dane tymczasowe
          resId: 222, // steps[0].output[0].resId
          ports: { // dla wyniku zapewne zawsze będą to dwa porty, wejście i wyjście
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego 1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }]
          }
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 375, y: 100 },
      },
      {
        id: '6', // steps[1].stepId
        type: 'selectorNode', // określamy z steps[1].resId
        data: {
          label: 'Kreator A', // z nazwy bytu z steps[1].resId
          resId: 2000, // steps[1].resId
          ports: { // steps[1].resId z definicji portów tego resId
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego A1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego A1",
              type: ["table"]
            }]
          }
        }, 
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 500, y: 50 },
      },
      {
        id: '7', // steps[2].stepId
        type: 'selectorNode', // określamy z steps[2].resId
        data: {
          label: 'Kreator B', // z nazwy bytu z steps[2].resId
          resId: 3000, // steps[2].resId
          ports: { // steps[2].resId z definicji portów tego resId
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego B1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego B1",
              type: ["table"]
            }]
          }
        }, 
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 500, y: 150 },
      },
      {
        id: '8', // steps[2].output[0].stepId
        type: 'selectorNode', // określamy z steps[2].output[0].resId ale jeśli brak resId i dictionaryId to są to dane tymczasowe
        data: {
          label: 'Wynik 2', // w przypadku danych tymczasowych ustalamy labelkę stałą
          outputData: { // dane tymczasowe
            columns:[{
              name: 'Kolumna 1',
              type: 'string'
            },
            {
              name: 'Kolumna 2',
              type: 'number'
            },
            {
              name: 'Kolumna 3',
              type: 'date'
            }]
          },
          ports: { // dla wyniku zapewne zawsze będą to dwa porty, wejście i wyjście
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego 1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }]
          }
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 600, y: 50 },
      },
      {
        id: '9', // steps[2].output[1].stepId
        type: 'selectorNode', // określamy z steps[2].output[1].resId
        data: {
          label: 'Wynik 3', // z nazwy bytu z steps[2].output[1].resId
          resId: 333, // steps[2].output[1].resId
          ports: { // dla wyniku zapewne zawsze będą to dwa porty, wejście i wyjście
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego 1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }]
          }
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 600, y: 150 },
      },
      {
        id: '10', // steps[3].stepId
        type: 'selectorNode', // określamy z steps[3].resId
        data: {
          label: 'Kreator B', // z nazwy bytu z steps[3].resId
          resId: 3000, // steps[3].resId
          ports: { // steps[3].resId z definicji portów tego resId
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego B1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego B1",
              type: ["table"]
            }]
          }
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 750, y: 100 },
      },
      {
        id: '11', // steps[3].output[0].stepId
        type: 'selectorNode', // określamy z steps[3].output[0].resId ale jeśli brak resId i dictionaryId to są to dane tymczasowe
        data: {
          label: 'Wynik 4', // z nazwy bytu z steps[3].output[0].resId
          resId: 444, // steps[3].output[0].resId
          ports: { // dla ostatniego wyniku zapewne zawsze będzie to tylko port wejściowy
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego 1",
              type: ["table"]
            }],
            output: []
          }
        }, // określamy z steps[3].output[0].resId a gdy brak to znaczy że dane tymczasowe
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 850, y: 100 },
      },
      {
        id: '12', // steps[4].ports.input[0].stepId
        type: 'selectorNode', // steps[4].ports.input
        data: {
          label: 'Table 3', // z nazwy bytu z steps[4].ports.input[0].resId
          resId: 40, // steps[4].ports.input[0].resId
          ports: { // dla tabeli zapewne będzie to tylko port output
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
            }]
          }
        },
        position: { x: 150, y: 250 },
        style: { border: '1px solid #777', padding: 10 },
      },
      {
        id: '13', // steps[4].ports.input[1].stepId
        type: 'selectorNode', // steps[4].ports.input
        data: {
          label: 'Table 4', // z nazwy bytu z steps[4].ports.input[1].resId
          resId: 50, // steps[4].ports.input[1].resId
          ports: { // dla tabeli zapewne będzie to tylko port output
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
            }]
          }
        },
        position: { x: 150, y: 300 },
        style: { border: '1px solid #777', padding: 10 },
      },
      {
        id: '14', // steps[4].stepId
        type: 'selectorNode', // określamy z steps[4].resId
        data: {
          label: 'Kreator C', // z nazwy bytu z steps[4].resId
          resId: 4000, // steps[4].resId
          ports: { // steps[4].resId z definicji portów tego resId
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego C1",
              type: ["table"]
            },
            {
              portId: 'input_2',
              desc: "Opis portu wejściowego C2",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego C1",
              type: ["table"]
            }]
          } 
        }, 
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 250, y: 275 },
      },
      {
        id: '15', // steps[4].output[0].stepId
        type: 'selectorNode', // określamy z steps[4].output[0].resId ale jeśli brak resId i dictionaryId to są to dane tymczasowe
        data: {
          label: 'Wynik 5', // z nazwy bytu steps[4].output[0].resId
          resId: 555, // steps[4].output[0].resId
          ports: { // dla wyniku zapewne zawsze będą to dwa porty, wejście i wyjście
            input: [{
              portId: 'input_1',
              desc: "Opis portu wejściowego 1",
              type: ["table"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }]
          }
        }, // określamy z steps[4].output[0].resId a gdy brak to znaczy że dane tymczasowe
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 350, y: 275 },
      },
      // {
      //   id: '3',
      //   type: 'output',
      //   data: { label: 'Output A' },
      //   position: { x: 650, y: 25 },
      //   targetPosition: 'left',
      // },
      // {
      //   id: '4',
      //   type: 'output',
      //   data: { label: 'Output B' },
      //   position: { x: 650, y: 100 },
      //   targetPosition: 'left',
      // },
      {
        id: 'connect_1-4', // Budowane z steps[0].ports.input[0].sourceId - steps[0].ports.input[0].targetId
        source: '1', // steps[0].ports.input[0].sourceId
        target: '4', // steps[0].ports.input[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_2-4', // Budowane z steps[0].ports.input[1].sourceId - steps[0].ports.input[1].targetId
        source: '2', // steps[0].ports.input[1].sourceId
        target: '4', // steps[0].ports.input[1].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_3-4', // Budowane z steps[0].ports.input[2].sourceId - steps[0].ports.input[2].targetId
        source: '3', // steps[0].ports.input[2].sourceId
        target: '4', // steps[0].ports.input[2].targetId   
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_4-5', // Budowane z steps[0].ports.output[0].sourceId - steps[0].ports.output[0].targetId
        source: '4', // steps[0].ports.output[0].sourceId
        target: '5', // steps[0].ports.output[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_5-6', // Budowane z steps[1].ports.input[0].sourceId - steps[1].ports.input[0].targetId
        source: '5', // steps[1].ports.input[0].sourceId
        target: '6', // steps[1].ports.input[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_5-7', // Budowane z steps[2].ports.input[0].sourceId - steps[2].ports.input[0].targetId
        source: '5', // steps[2].ports.input[0].sourceId
        target: '7', // steps[2].ports.input[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_6-8', // Budowane z steps[1].ports.output[0].sourceId - steps[1].ports.output[0].targetId
        source: '6', // steps[1].ports.output[0].sourceId
        target: '8', // steps[1].ports.output[0].targetId
        style: { stroke: '#fff' }
      },
      {
        id: 'connect_7-9', // Budowane z steps[2].ports.output[0].sourceId - steps[2].ports.output[0].targetId
        source: '7', // steps[2].ports.output[0].sourceId
        target: '9', // steps[2].ports.output[0].targetId
        style: { stroke: '#fff' }
      },
      {
        id: 'connect_8-10', // Budowane z steps[3].ports.input[0].sourceId - steps[3].ports.input[0].targetId
        source: '8', // steps[3].ports.input[0].sourceId
        target: '10', // steps[3].ports.input[0].targetId
        style: { stroke: '#fff' }
      },
      {
        id: 'connect_9-10', // Budowane z steps[3].ports.input[1].sourceId - steps[3].ports.input[1].targetId
        source: '9', // steps[3].ports.input[1].sourceId
        target: '10', // steps[3].ports.input[1].targetId
        style: { stroke: '#fff' }
      },
      {
        id: 'connect_10-11', // Budowane z steps[3].ports.output[0].sourceId - steps[3].ports.output[0].targetId
        source: '10', // steps[3].ports.output[0].sourceId
        target: '11', // steps[3].ports.output[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_12-14', // Budowane z steps[4].ports.input[0].sourceId - steps[4].ports.input[0].targetId
        source: '12', // steps[4].ports.input[0].sourceId
        target: '14', // steps[4].ports.input[0].targetId
        targetHandle: 'input_1', // steps[4].ports.input[0].portId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_13-14', // Budowane z steps[4].ports.input[1].sourceId - steps[4].ports.input[1].targetId
        source: '13', // steps[4].ports.input[1].sourceId
        target: '14', // steps[4].ports.input[1].targetId
        targetHandle: 'input_2', // steps[4].ports.input[1].portId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_14-15', // Budowane z steps[4].ports.output[0].sourceId - steps[4].ports.output[0].targetId
        source: '14', // steps[4].ports.output[0].sourceId
        target: '15', // steps[4].ports.output[0].targetId
        style: { stroke: '#fff' },
      },
      {
        id: 'connect_15-7', // Budowane z steps[2].ports.input[1].sourceId - steps[2].ports.input[1].targetId
        source: '15', // steps[2].ports.input[1].sourceId
        target: '7', // steps[2].ports.input[1].targetId
        style: { stroke: '#fff' },
      },
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params,  style: { stroke: '#fff' } }, els)
      ),
    []
  );

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        // console.log('flow loaded:', rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      style={{ background: bgColor }}
      onLoad={onLoad}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      defaultZoom={1.5}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'selectorNode') return bgColor;
          if (n.type === 'output') return '#ff0072';
        }}
        nodeColor={(n) => {
          if (n.type === 'selectorNode') return bgColor;
          return '#fff';
        }}
      />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;