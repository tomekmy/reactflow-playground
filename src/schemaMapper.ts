const schemaMapper = (schemaData) => {

  let flowSchema = [];

  schemaData.resDef.steps.forEach((step) => {
    flowSchema.push({
      id: step.stepId,
      type: 'selectorNode', // hardcoded. Should be from resId
      position: step.position,
      style: {
        border: '1px solid #777',
        padding: 10
      }, // hardcoded
      data: {
        label: step.name,
        resId: step.resId,
        handles: step.handles
      }
    });

    const inputData = step.connectedData.input.map((input) => (
      {
        id: input.stepId,
        data: {
          resId: input.resId || null,
          dictionaryId: input.dictionaryId || null,
          label: input.name,
          handles: input.handles,
        },
        type: 'selectorNode', // hardcoded. Should be from resId
        position: input.position,
        style: {
          border: '1px solid #777',
          padding: 10
        }, // hardcoded
      }
    ));

    const outputData = step.connectedData.output.map((output) => (
      {
        id: output.stepId,
        data: {
          resId: output.resId || null,
          label: output.name,
          handles: output.handles,
        },
        type: 'selectorNode', // hardcoded. Should be from resId and depends on type
        position: output.position,
        style: {
          border: '1px solid #777',
          padding: 10
        }, // hardcoded
      }
    ));

    const connections = step.connections.map((connection) => (
      {
        id: `connect_${connection.sourceId}-${connection.targetId}`,
        source: connection.sourceId,
        target: connection.targetId,
        sourceHandle: connection.sourceHandle,
        targetHandle: connection.targetHandle,
        style: { stroke: '#fff' } // hardcoded
      }
    ));

    flowSchema = [...flowSchema, ...inputData, ...outputData, ...connections];
  });

  

  console.log('flowSchema: ', flowSchema);

  return flowSchema;
};

export default schemaMapper;