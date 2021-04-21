const schemaMapper = (schemaData) => {

  let flowSchema = [];

  schemaData.resDef.steps.forEach((step, index) => {
    flowSchema.push({
      id: step.stepId,
      type: 'selectorNode', // hardcoded. Should be from resId
      position: step.position,
      style: {
        border: '1px solid #777',
        padding: 10
      }, // hardcoded
      data: {
        label: `Item ${index}`,
        resId: step.resId,
        handles: { // hardcoded. Should be from resId
          input: [{
            portId: 'input_1',
            desc: 'Opis portu wejściowego QB1',
            type: ["table", 'dictionary']
          }],
          output: [{
            portId: 'output_1',
            desc: "Opis portu wyjściowego QB1",
            type: ["table"]
          }], 
        },
      }
    });

    const inputData = step.connectedData.input.map((input, index) => (
      {
        id: input.stepId,
        data: {
          resId: input.resId || null,
          dictionaryId: input.dictionaryId || null,
          label: `Item ${index}`,
          handles: { // hardcoded. Should be from resId
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego QB1',
              type: ["table", 'dictionary']
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego QB1",
              type: ["table"]
            }], 
          },
        },
        type: 'selectorNode', // hardcoded. Should be from resId
        position: input.position,
        style: {
          border: '1px solid #777',
          padding: 10
        }, // hardcoded
      }
    ));

    const outputData = step.connectedData.output.map((output, index) => (
      {
        id: output.stepId,
        data: {
          resId: output.resId || null,
          label: `Item ${index}`,
          handles: { // hardcoded. Should be from resId
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego QB1',
              type: ["table", 'dictionary']
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego QB1",
              type: ["table"]
            }], 
          },
        },
        type: 'selectorNode', // hardcoded. Should be from resId
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
        style: { stroke: '#fff' } // hardcoded
      }
    ));

    flowSchema = [...flowSchema, ...inputData, ...outputData, ...connections];
  });

  

  console.log('flowSchema: ', flowSchema);

  return flowSchema;
};

export default schemaMapper;