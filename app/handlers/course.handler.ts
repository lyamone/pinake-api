exports.handler =  function handler(req, res) {
    console.log('entre al handler');
    const course = {
        id: 1,
        name: 'Curso k1071',
        description: 'Matematica Discreta',
        subscriptors: [
          {
            image:'',
            name: 'Lucas',
            lastname: 'Yamone',
            degree: 'Ingenieria en sistemas de informacion',
            university: 'UTN'
          }
        ],
        private: false,
        messagges: [],
        university: 'UTN'
      };
      res.json(course);
};
  