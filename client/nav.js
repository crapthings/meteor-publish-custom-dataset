import React from 'react'
import { composeWithTracker as Container } from 'react-komposer'

export default Container((props, onData) => {
  _sub && _sub.stop()
  onData(null, { type: _type.get() })
})(({ type }) => <div>
  <h3>{type}</h3>
  <ul>
    <li onClick={() => _type.set('byType')}>by type</li>
    <li onClick={() => _type.set('byDate')}>by date</li>
  </ul>
</div>)
