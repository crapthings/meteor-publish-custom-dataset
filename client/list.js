import React from 'react'
import { composeWithTracker as Container } from 'react-komposer'

export default Container((props, onData) => {
  _sub = Meteor.subscribe('test', _type.get())

  if (_sub.ready()) {
    const test = Test.find().fetch()
    return onData(null, { test })
  }

  onData(null, null)
})(({ test }) => <div>
  {test.map(({ _id, title, value }) => <div key={_id}>
    <h3>{title}</h3>
    {value.map(item => <div key={item._id}>
      [{item.createdAt}]: {item.title}
    </div>)}
  </div>)}
</div>)
