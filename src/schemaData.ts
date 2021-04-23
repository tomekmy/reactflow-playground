const schemaData = {
  name: 'Schemat przekształcenia Tomka i Huberta',
  desc: 'Schemat testowy',
  keywords: ['schamaty', 'schemat przekształcenia', 'test'],
  language: 'PL',
  resDef: {
    limit: 100,
    useLimit: true,
    steps: [{
      stepId: '4',
      resId: 1000,
      process: true,
      saveOutputData: true, // Checkbox - Zachowaj w zasobach
      resultData: false, // Checkbox - Oznacz jako dane wynikowe
      name: 'Query Builder', // hardcoded. Should be from resId and name
      handles: { // hardcoded. Should be from resId and depends on type
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
      position: {
        x: 250,
        y: 100
      },
      connectedData: {
        input: [{
          stepId: '1',
          resId: 10,
          dictionaryId: null,
          limit: 100,
          name: 'Tabela 1', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 100,
            y: 50
          }
        },
        {
          stepId: '2',
          resId: 20,
          dictionaryId: null,
          limit: 100,
          name: 'Tabela 2', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 100,
            y: 100
          }
        },
        {
          stepId: '3',
          resId: null,
          dictionaryId: 30,
          limit: 100,
          name: 'Słownik 1', // hardcoded. Should be from dictionaryId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 100,
            y: 150
          }
        }],
        output: [{
          stepId: '5',
          resId: 222,
          dictionaryId: null,
          limit: 100,
          name: 'Wynik 1', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego 1',
              type: ["schemaStep"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 375,
            y: 100
          }
        }]
      },
      connections: [{
        sourceId: '1',
        targetId: '4',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '2',
        targetId: '4',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '3',
        targetId: '4',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '4',
        targetId: '5',
        sourceHandle: null,
        targetHandle: null
      }]
    },
    {
      stepId: '6',
      resId: 2000,
      process: true,
      saveOutputData: false, // Checkbox - Zachowaj w zasobach
      resultData: false, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator A', // hardcoded. Should be from resId and name
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"]
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"]
        }], 
      },
      position: {
        x: 500,
        y: 50
      },
      connectedData: {
        input: [],
        output: [{
          stepId: '7',
          resId: null,
          dictionaryId: null,
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
          limit: 100,
          name: 'Wynik 2', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego 1',
              type: ["schemaStep"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 600,
            y: 50 
          }
        }]
      },
      connections: [{
        sourceId: '5',
        targetId: '6',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '6',
        targetId: '7',
        sourceHandle: null,
        targetHandle: null
      }]
    },


    {
      stepId: '8',
      resId: 3000,
      process: true,
      saveOutputData: true, // Checkbox - Zachowaj w zasobach
      resultData: true, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator B', // hardcoded. Should be from resId and name
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"]
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"]
        }], 
      },
      position: {
        x: 500,
        y: 150
      },
      connectedData: {
        input: [],
        output: [{
          stepId: '9',
          resId: 333,
          dictionaryId: null,
          limit: 100,
          name: 'Wynik 3', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego 1',
              type: ["schemaStep"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 600,
            y: 150
          }
        }]
      },
      connections: [{
        sourceId: '5',
        targetId: '8',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '8',
        targetId: '9',
        sourceHandle: null,
        targetHandle: null
      }]
    },
  
    {
      stepId: '10',
      resId: 3000,
      process: true,
      name: 'Kreator B', // hardcoded. Should be from resId and name
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"]
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"]
        }], 
      },
      position: {
        x: 750,
        y: 100
      },
      connectedData: {
        input: [],
        output: [{
          stepId: '11',
          resId: 444,
          dictionaryId: null,
          limit: 100,
          name: 'Wynik 4', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego 1',
              type: ["schemaStep"]
            }],
            output: [], 
          },
          position: {
            x: 850,
            y: 100
          }
        }]
      },
      connections: [{
        sourceId: '9',
        targetId: '10',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '7',
        targetId: '10',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '10',
        targetId: '11',
        sourceHandle: null,
        targetHandle: null
      }]
    },
  
    {
      stepId: '14',
      resId: 4000,
      process: true,
      saveOutputData: true, // Checkbox - Zachowaj w zasobach
      resultData: false, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator C', // hardcoded. Should be from resId and name
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table", 'dictionary']
        },
        {
          portId: 'input_2',
          desc: 'Opis portu wejściowego 2',
          type: ["table", 'dictionary']
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 3",
          type: ["table"]
        }], 
      },
      position: {
        x: 250,
        y: 275
      },
      connectedData: {
        input: [{
          stepId: '12',
          resId: 40,
          dictionaryId: null,
          limit: 100,
          name: 'Tabela 3', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 150,
            y: 250
          },
        },
        {
          stepId: '13',
          resId: 50,
          dictionaryId: null,
          limit: 100,
          name: 'Tabela 4', // hardcoded. Should be from resId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 150,
            y: 300
          },
        }],
        output: [ {
          stepId: '15',
          resId: 555,
          dictionaryId: null,
          limit: 100,
          name: 'Wynik 5', // hardcoded. Should be from dictionaryId and name
          handles: { // hardcoded. Should be from resId and depends on type
            input: [{
              portId: 'input_1',
              desc: 'Opis portu wejściowego 1',
              type: ["schemaStep"]
            }],
            output: [{
              portId: 'output_1',
              desc: "Opis portu wyjściowego 1",
              type: ["table"]
            }], 
          },
          position: {
            x: 350,
            y: 275
          },
        }]
      },
      connections: [{
        sourceId: '12',
        targetId: '14',
        sourceHandle: null,
        targetHandle: 'input_1'
      },
      {
        sourceId: '13',
        targetId: '14',
        sourceHandle: null,
        targetHandle: 'input_2'
      },
      {
        sourceId: '14',
        targetId: '15',
        sourceHandle: null,
        targetHandle: null
      },
      {
        sourceId: '15',
        targetId: '8',
        sourceHandle: null,
        targetHandle: null
      }]
    }],
  }
};

export default schemaData;