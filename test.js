'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.notOk(require('./'))
  t.ok(proxyquire('./', {
    'global/window': {
      navigator: {
        geolocation: {}
      }
    }
  }))
  t.end()
})
