import _ from 'lodash'
import faker from 'faker'
import Groups from '/collections/groups'

Meteor.startup(function () {

  Groups.remove({})

  if (_.isEmpty(Groups.findOne())) {
    const data = _.times(2000, () => ({
      title: faker.lorem.sentence(),
      type: _.sample(['type1', 'type2', 'type3']),
      createdAt: _.sample([2004, 2010, 2011, 2015, 2016, 2017]),
    }))

    Groups.batchInsert(data)
  }

})
