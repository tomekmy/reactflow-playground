const schemaMapper = (schemaData) => {

  let flowSchema = [];

  schemaData.resDef.steps.forEach((step) => {
    const creatorInputHandles = step.handles.input.map((handle) => ({
      portId: handle.portId,
      desc: handle.desc,
      type: handle.type
    }));

    const creatorOutputHandles = step.handles.output.map((handle) => ({
      portId: handle.portId,
      desc: handle.desc,
      type: handle.type
    }));

    flowSchema.push({
      id: step.stepId,
      type: step.type,
      position: step.position,
      style: {
        border: '1px solid #777',
        padding: 10
      }, // hardcoded
      data: {
        label: step.name,
        resId: step.resId,
        handles: {
          input: creatorInputHandles,
          output: creatorOutputHandles
        }
      }
    });

    const inputData = step.handles.input.map((input) => {
      if (input.connectedData?.stepId) {
        return {
          id: input.connectedData.stepId,
          data: {
            resId: input.connectedData.resId || null,
            dictionaryId: input.connectedData.dictionaryId || null,
            label: input.connectedData.name,
            handles: input.connectedData.handles,
          },
          type: input.connectedData.type,
          position: input.connectedData.position,
          style: {
            border: '1px solid #777',
            padding: 10
          }, // hardcoded
        }
      }
      return null;
    }).filter(Boolean);

    const outputData = step.handles.output.map((output) => {
      if (output.connectedData) {
        return {
          id: output.connectedData.stepId,
          data: {
            resId: output.connectedData.resId || null,
            label: output.connectedData.name,
            handles: output.connectedData.handles,
          },
          type: output.connectedData.type,
          position: output.connectedData.position,
          style: {
            border: '1px solid #777',
            padding: 10
          }, // hardcoded
        };
      }
      return null;
    }).filter(Boolean);

    const inputConnections = step.handles.input.map((handle) => {
      if (handle.connectedData?.stepId) {
        return {
          id: `connect_${handle.connectedData.stepId}-${step.stepId}`,
          source: handle.connectedData.stepId,
          target: step.stepId,
          sourceHandle: handle.connectedData.connectedHandle,
          targetHandle: handle.portId,
          style: { stroke: '#fff' } // hardcoded
        }
      }
      if (handle.connectedData?.existingId) {
        return {
          id: `connect_${handle.connectedData.existingId}-${step.stepId}`,
          source: handle.connectedData.existingId,
          target: step.stepId,
          sourceHandle: handle.connectedData.connectedHandle,
          targetHandle: handle.portId,
          style: { stroke: '#fff' } // hardcoded
        }
      }
      return null;
    }).filter(Boolean);;

    const outputConnections = step.handles.output.map((handle) => {
      if (handle.connectedData) {
        return {
          id: `connect_${step.stepId}-${handle.connectedData.stepId}`,
          source: step.stepId,
          target: handle.connectedData.stepId,
          sourceHandle: handle.portId,
          targetHandle: handle.connectedData.connectedHandle,
          style: { stroke: '#fff' } // hardcoded
        };
      }
      return null;
    }).filter(Boolean);

    flowSchema = [...flowSchema, ...inputData, ...outputData, ...inputConnections, ...outputConnections];
  });

  return flowSchema;
};

export default schemaMapper;