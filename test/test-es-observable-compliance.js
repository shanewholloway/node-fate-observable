if (0 && !Symbol.observable) {
  Symbol.observable = Symbol('Symbol.observable')
}

const esObservableTestSuite = require("es-observable-tests")

const Observable = require('../dist/index')

esObservableTestSuite.runTests(Observable)

