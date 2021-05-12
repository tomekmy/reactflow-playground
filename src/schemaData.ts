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
      type: 'queryBuilder', // hardcoded. Should be from Resource Manager
      parametersGroup: [{
        id: 'parametersGroup-1',
        pl: {
          name: 'Pierwszy tab z paramatrami',
          desc: 'Opis pierwszego taba z parametrami'
        },
        en: {
          name: 'First tab with parameters',
          desc: 'Description of first tab with parameters',
        },
        parameters: [{
          techName: 'recordsNumber',
          pl: {
            name: "Kolor",
            desc: "Parametr określający kolor",
            value: 'Czerwony',
            listValue: null,
            validationRegExp: null,
            dictionaryId: null
          },
          en: {
            name: "Color",
            desc: "Color parameter",
            value: 'Red',
            listValue: null,
            validationRegExp: null,
            dictionaryId: null
          },
          type: "string",
          required: true
        },
        {
          techName: 'carBrands',
          pl: {
            name: "Marka samochodu",
            desc: "Parametr określający markę samochodu",
            value: 'BMW',
            listValue: null,
            validationRegExp: null,
            dictionaryId: '2563'
          },
          en: {
            name: "Car Brand",
            desc: "Car brand parameter",
            value: 'BMW',
            listValue: null,
            validationRegExp: null,
            dictionaryId: '2563'
          },
          type: "dictionary",
          required: false
        }]
      }],
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego QB1',
          type: ["table", 'dictionary'],
          connectedData: {
            stepId: '1',
            resId: 10,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'output_1',
            name: 'Tabela 1', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 100,
              y: 50
            }
          },
        },
        {
          portId: 'input_2',
          desc: 'Opis portu wejściowego QB1',
          type: ["table", 'dictionary'],
          connectedData: {
            stepId: '2',
            resId: 20,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'output_1',
            name: 'Tabela 2', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 100,
              y: 100
            }
          }
        },
        {
          portId: 'input_3',
          desc: 'Opis portu wejściowego QB1',
          type: ["table", 'dictionary']
        }
      ],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego QB1",
          type: ["table"],
          connectedData: {
            stepId: '5',
            resId: 222,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'input_1',
            name: 'Wynik 1', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [{
                portId: 'input_1',
                desc: 'Opis portu wejściowego 1',
                type: ["schemaStep", "queryBuilder"]
              }],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 375,
              y: 100
            }
          }
        }], 
      },
      position: {
        x: 250,
        y: 100
      }
    },
    
    {
      stepId: '14',
      resId: 4000,
      process: true,
      saveOutputData: true, // Checkbox - Zachowaj w zasobach
      resultData: false, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator C', // hardcoded. Should be from resId and name
      type: 'schemaStep', // hardcoded. Should be from Resource Manager
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table", 'dictionary'],
          connectedData: {
            stepId: '12',
            resId: 40,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'output_1',
            name: 'Tabela 3', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 150,
              y: 250
            },
          },
        },
        {
          portId: 'input_2',
          desc: 'Opis portu wejściowego 2',
          type: ["table", 'dictionary'],
          connectedData: {
            stepId: '13',
            resId: 50,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'output_1',
            name: 'Tabela 4', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 150,
              y: 300
            },
          },
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 3",
          type: ["table"],
          connectedData: {
            stepId: '15',
            resId: 555,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'input_1',
            name: 'Wynik 5', // hardcoded. Should be from dictionaryId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [{
                portId: 'input_1',
                desc: 'Opis portu wejściowego 1',
                type: ["schemaStep", "queryBuilder"]
              }],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 350,
              y: 275
            },
          },
        }], 
      },
      position: {
        x: 250,
        y: 275
      },
    },

    {
      stepId: '6',
      resId: 2000,
      process: true,
      saveOutputData: false, // Checkbox - Zachowaj w zasobach
      resultData: false, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator A', // hardcoded. Should be from resId and name
      type: 'schemaStep', // hardcoded. Should be from Resource Manager
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"],
          connectedData: {
            existingId: '5',
            connectedHandle: 'input_1',
          }
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"],
          connectedData: {
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
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [{
                portId: 'input_1',
                desc: 'Opis portu wejściowego 1',
                type: ["schemaStep"]
              }],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 600,
              y: 50 
            }
          }
        }], 
      },
      position: {
        x: 500,
        y: 50
      },
    },


    {
      stepId: '8',
      resId: 3000,
      process: true,
      saveOutputData: true, // Checkbox - Zachowaj w zasobach
      resultData: true, // Checkbox - Oznacz jako dane wynikowe
      name: 'Kreator B', // hardcoded. Should be from resId and name
      type: 'schemaStep', // hardcoded. Should be from Resource Manager
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"],
          connectedData: {
            existingId: '5',
            connectedHandle: 'input_1',
          }
        },
        {
          portId: 'input_2',
          desc: 'Opis portu wejściowego 2',
          type: ["table"],
          connectedData: {
            existingId: '15',
            connectedHandle: 'input_2',
          }
        }
      ],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"],
          connectedData: {
            stepId: '9',
            resId: 333,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'input_1',
            name: 'Wynik 3', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [{
                portId: 'input_1',
                desc: 'Opis portu wejściowego 1',
                type: ["schemaStep"]
              }],
              output: [{
                portId: 'output_1',
                desc: "Opis portu wyjściowego 1",
                type: ["schemaStep", "queryBuilder"]
              }], 
            },
            position: {
              x: 600,
              y: 150
            }
          }
        },
        {
          portId: 'output_2',
          desc: "Opis portu wyjściowego 2",
          type: ["table"],
          connectedData: {
            stepId: '66',
            resId: 666,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'input_1',
            name: 'Wynik 6', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
            handles: { // hardcoded. Should be from resId and depends on type
              input: [{
                portId: 'input_1',
                desc: 'Opis portu wejściowego 1',
                type: ["schemaStep"]
              }],
              output: [], 
            },
            position: {
              x: 600,
              y: 210
            }
          }
        }], 
      },
      position: {
        x: 500,
        y: 150
      },
    },
  
    {
      stepId: '10',
      resId: 3000,
      process: true,
      name: 'Kreator B', // hardcoded. Should be from resId and name
      type: 'schemaStep', // hardcoded. Should be from Resource Manager
      handles: { // hardcoded. Should be from resId and depends on type
        input: [{
          portId: 'input_1',
          desc: 'Opis portu wejściowego 1',
          type: ["table"],
          connectedData: {
            existingId: '7',
            connectedHandle: 'input_1',
          }
        },
        {
          portId: 'input_2',
          desc: 'Opis portu wejściowego 2',
          type: ["table"],
          connectedData: {
            existingId: '9',
            connectedHandle: 'input_2',
          }
        }],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["table"],
          connectedData: {
            stepId: '11',
            resId: 444,
            dictionaryId: null,
            limit: 100,
            connectedHandle: 'input_1',
            name: 'Wynik 4', // hardcoded. Should be from resId and name
            type: 'table', // hardcoded. Should be from Resource Manager
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
          }
        }], 
      },
      position: {
        x: 750,
        y: 100
      },
    },
    {
      stepId: '3',
      resId: null,
      dictionaryId: 30,
      limit: 100,
      connectedHandle: 'output_1',
      name: 'Słownik 1', // hardcoded. Should be from dictionaryId and name
      type: 'dictionary', // hardcoded. Should be from Resource Manager
      handles: { // hardcoded. Should be from resId and depends on type
        input: [],
        output: [{
          portId: 'output_1',
          desc: "Opis portu wyjściowego 1",
          type: ["schemaStep", "queryBuilder"]
        }], 
      },
      position: {
        x: 100,
        y: 150
      }
    },
  ]}
};

export default schemaData;