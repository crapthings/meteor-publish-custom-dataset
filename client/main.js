import React from 'react'
import { render } from 'react-dom'
import Test from '/collections/test'

import Nav from './nav'
import List from './list'

window.Test = Test
window._sub = undefined

window._type = new ReactiveVar('byType')

Meteor.startup(function () {

  const app = $('#app')[0]

  render(<div>
    <Nav />
    <List />
  </div>, app)

})
