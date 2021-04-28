// @ts-nocheck
import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

// Only for demo purposes. All elements should be taken from global store.
import schemaData from './schemaData';
import schemaMapper from './schemaMapper';
const elements = schemaMapper(schemaData);

export default memo((params) => {
const isValidInputConnection = (connection) => {
    // console.log('connection', connection);
    const dataOutputPortType = elements.find(element => element.id === connection.target).type;
    const creatorInputPortTypes = elements.find(element => element.id === connection.source).data.handles.output.find(handle => handle.portId === connection.sourceHandle).type;
  
    // console.log('dataOutputPortType', dataOutputPortType);
    // console.log('creatorInputPortTypes', creatorInputPortTypes);
    return creatorInputPortTypes.find(type => type === dataOutputPortType);    
  };

  const isValidOutputConnection = (connection) => {  
    // console.log('connection', connection);
    const dataOutputPortType = elements.find(element => element.id === connection.source).type;
    const creatorInputPortTypes = elements.find(element => element.id === connection.target).data.handles.input.find(handle => handle.portId === connection.targetHandle).type;
  
    // console.log('dataOutputPortType', dataOutputPortType);
    // console.log('creatorInputPortTypes', creatorInputPortTypes);
    return creatorInputPortTypes.find(type => type === dataOutputPortType);    
  };

  return (
    <>
    {
      params.data.handles?.input.map((handle, idx) => (
        <Handle
          key={handle.portId}
          type="target"
          position="left"
          id={handle.portId}
          style={{ background: '#555', top: `${(100 / (params.data.handles.input.length + 1) * (idx + 1))}%` }}
          title={handle.desc}
          onConnect={(params) => console.log('handle onConnect', params)}
          isValidConnection={isValidInputConnection}
        />
      ))
    }
      <div>
        <div>{params.data.label}</div>
        <div style={{fontSize: '8px'}}>
          { params.data.resId && <>resId: {params.data.resId}</>}
          { params.data.dictionaryId && <>dictionaryId: {params.data.dictionaryId}</>}
          { !params.data.resId && !params.data.dictionaryId && <>Dane tymczasowe</> }
        </div>
      </div>
      {
      params.data.handles?.output.map((handle, idx) => (
        <Handle
          key={handle.portId}
          type="source"
          position="right"
          id={handle.portId}
          style={{ background: '#555', top: `${(100 / (params.data.handles.output.length + 1) * (idx + 1))}%` }}
          title={handle.desc}
          isValidConnection={isValidOutputConnection}
        />
      ))
    }
    </>
  );
});