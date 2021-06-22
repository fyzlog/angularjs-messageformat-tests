import { capacity } from './capacity.type';
import { date } from './date.type';

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

    console.log(parse(template, plurals));

    const MessageFormat = require('messageformat');
    const mf = new MessageFormat('ru').addFormatters({
      compact: value => value
    });
    const mfCmp = mf.compile(template);

    console.log(mfCmp);

    this.content = data
      .map(item =>
        Object.keys(item).reduce((acc, key) => {
          console.log(acc, key, types[key].type, factory);
          acc[key] = factory[types[key].type];
          return acc;
        }, {})
      )
      .map(item => mfCmp(item))
      .join();
    console.log(this.content);
  }
}

export default HomeCtrl;
