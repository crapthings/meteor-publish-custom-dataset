import _ from 'lodash'
import faker from 'faker'

import Test from '/collections/test'
import Groups from '/collections/groups'

Meteor.publish('test', function (type) {

  const groups = Groups.find().fetch()

  const _type = {
    byType: _.map(_.groupBy(groups, 'type'), (v, k) => ({ _id: Random.id(), title: k, value: v })),
    byDate: _.map(_.groupBy(groups, 'createdAt'), (v, k) => ({ _id: Random.id(), title: k, value: v })),
  }

  _.each(_type[type] || _type.byType, type => {
    this.added('test', type._id, type)
  })

  this.ready()

})
