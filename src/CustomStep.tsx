// @ts-nocheck
import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo((params) => {
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
        />
      ))
    }
    </>
  );
});