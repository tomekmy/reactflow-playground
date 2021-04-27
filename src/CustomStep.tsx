// @ts-nocheck
import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo((params) => {
const isValidInputConnection = (connection) => {
    return true;
    const sourcePortType = params.data.handles.input.find(handle => handle.portId === connection.targetHandle).type;
    const targetPortType = elements.find(element => element.stepId === connection.target).type;
  
    console.log('sourcePortType', sourcePortType);
    console.log('targetPortType', targetPortType);
    return sourcePortType.find(type => type === targetPortType);    
  };

  const isValidOutputConnection = (connection) => {  
    return true;
    const sourcePortType = params.data.handles.output.find(handle => handle.portId === connection.sourceHandle).type;
    const targetPortType = elements.find(element => element.stepId === connection.target).type;
    
    console.log('sourcePortType', sourcePortType);
    console.log('targetPortType', targetPortType);
    return sourcePortType.find(type => type === targetPortType);    
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