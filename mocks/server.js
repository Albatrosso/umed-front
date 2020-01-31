const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });
  server.route({
    method: 'GET',
    path: '/clients',
    handler: (request, h) => ([
      {
        id: 1,
        photo: '',
        city: 'Санкт-Петербург',
        date: '28 августа 2019',
        annotation: 'ООО "ЮМед" примет участие в ежегодной научно-практической конференции «Вреденовские чтения»',
      },
      {
        id: 2,
        photo: '',
        city: 'Чебоксары',
        date: '5 июня 2019',
        annotation: 'ООО "ЮМед" примет участие в XI Межрегиональной научно-практической конференции',
      },
      {
        id: 3,
        photo: '',
        city: 'Курган',
        date: '5 июня 2019',
        annotation: 'ООО "ЮМед" примет участие в Международной научно-практической конференции',
      },
      {
        id: 4,
        photo: '',
        city: 'Саратов',
        date: '22 апреля 2019',
        annotation: 'ООО "ЮМед" примет участие во Всероссийская научно-практическая конференция с международным',
      },
      {
        id: 5,
        photo: '',
        city: 'Ессентуки',
        date: '12 апреля 2019',
        annotation: 'ООО "ЮМед" примет участие в Первом Северо-Кавказском ортопедическом научно-образовательном',
      },
      {
        id: 6,
        photo: '',
        city: 'Санкт-Петербург',
        date: '11 апреля 2019',
        annotation: '1 апреля 2019 года компания "ЮМЕд" примет участие во Всероссийской конференции Молодых',
      },
    ]),
  });

  await server.start();
  console.log('server, running at %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
