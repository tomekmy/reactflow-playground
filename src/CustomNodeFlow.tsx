import React, { useState, useEffect, useCallback } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  Controls
} from 'react-flow-renderer';

import CustomStep from './CustomStep';
import schemaData from './schemaData';
import schemaDataWithoutConnections from './schemaDataWithoutConnections';
import schemaRawData from './schemaRawData';
import schemaMapper from './schemaMapper';

import './index.css';

const onNodeDragStop = (event, node) => console.log('drag stop', node);
const onElementClick = (event, element) => console.log('click', element);

const bgColor = '#1A192B';

const connectionLineStyle = { stroke: '#fff' };
const nodeTypes = {
  selectorNode: CustomStep,
  table: CustomStep,
  dictionary: CustomStep,
  queryBuilder: CustomStep,
  schemaStep: CustomStep
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(schemaMapper(schemaData));
    // setElements(schemaMapper(schemaDataWithoutConnections));
    // setElements(schemaRawData);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
      console.log('elements', elements);
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setElements((els) => {
        return addEdge({ ...params,  style: { stroke: '#fff' } }, els)
      }
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
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;