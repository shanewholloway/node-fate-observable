# fate-observable
**An [ES Observable][spec] compliant implementation -- learning by creating**

ES Observable spec compliance validation via [es-observable-tests][].

### Project Motivation

I created [this Observable implementation][fate-obs] to learn the intricate
details and guarentees of spec compliant ES Observables. Similarly, when
promises were new and shiny, I created [fate][] as a Promises/A+ compliant
implementation to learn the guarentees of promises.

### Not intended for production

Bottom line: this project was to learn, and I do not have a long term intent to
maintain this project for real use. I'd suggest using a mature project:

 - [any-observable](https://www.npmjs.com/package/any-observable)
 - [zen-observable](https://github.com/zenparsing/zen-observable)
 - [RxJS](https://github.com/Reactive-Extensions/RxJS)


### Questions

###### What is this strage javascript dialect?

Written in [JSY][] / [offside-js][], because why would you want curly braces when you can use indentation?!
Well, that, and I'm the author of JSY / offside-js and I believe that indentation is a stronger signal
of intent from programmers than nested `{([{}])}` crazyness.


 [JSY]: https://www.npmjs.com/package/babel-preset-jsy
 [offside-js]: https://www.npmjs.com/package/babel-plugin-offside-js
 [fate-obs]: https://github.com/shanewholloway/node-fate-observable
 [fate]: https://github.com/shanewholloway/node-fate
 [spec]: https://github.com/tc39/proposal-observable
 [es-observable-tests]: https://www.npmjs.com/package/es-observable-tests
