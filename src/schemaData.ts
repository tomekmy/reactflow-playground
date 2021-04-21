const schemaData = {
  name: 'Schemat Tomka i Huberta',
  desc: 'Fajny schemat',
  keywords: ['schamaty', 'inne słowa kluczowe'],
  language: 'PL',
  resDef: {
    limit: 100,
    useLimit: true,
    steps: [{
      stepId: '4',
      resId: 1000,
      position: {
        x: 250,
        y: 100
      },
      connectedData: {
        input: [{
          stepId: '1',
          resId: 10,
          position: {
            x: 100,
            y: 50
          }
        },
        {
          stepId: '2',
          resId: 20,
          position: {
            x: 100,
            y: 100
          }
        },
        {
          stepId: '3',
          dictionaryId: 30,
          position: {
            x: 100,
            y: 150
          }
        }],
        output: [{
          stepId: '5',
          resId: 222,
          position: {
            x: 375,
            y: 100
          }
        }]
      },
      connections: [{
        sourceId: '1',
        targetId: '4'
      },
      {
        sourceId: '2',
        targetId: '4'
      },
      {
        sourceId: '3',
        targetId: '4'
      },
      {
        sourceId: '4',
        targetId: '5'
      }]
    }],
  }
};

export default schemaData;