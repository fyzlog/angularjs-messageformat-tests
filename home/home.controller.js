import { capacity, date } from './types';

class HomeCtrl {
  constructor($scope, $sce, $compile, $interpolate) {
    'ngInject';

    const plurals = require('make-plural/plurals');
    const parse = require('messageformat-parser').parse;

    const factory = { capacity, date };

    const types = {
      connection_speed: {
        type: 'capacity'
      },
      created: {
        type: 'date'
      }
    };

    const template =
      'Capacity {connection_speed, compact} at {created, compact}';

    const data = [
      { connection_speed: 1024, created: new Date('2021-06-21 19:08:00') },
      { connection_speed: 2024, created: new Date('2021-06-21 19:09:00') }
    ];

    const MessageFormat = require('messageformat');
    const mf = new MessageFormat('ru').addFormatters({
      compact: value => {
        const handlers = {
          capacity: new Intl.NumberFormat().format,
          date: new Intl.DateTimeFormat().format
        };

        let result =
          value.constructor.name && handlers[value.constructor.name]
            ? ((value.value = handlers[value.constructor.name](value.value)),
              value.toString())
            : value;

        return result;
      }
    });
    const mfCmp = mf.compile(template);

    this.content = data
      .map(item =>
        Object.keys(item).reduce((acc, key) => {
          acc[key] = new factory[types[key].type](item[key]);
          return acc;
        }, {})
      )
      .map(item => mfCmp(item))
      .join();
  }
}

export default HomeCtrl;
