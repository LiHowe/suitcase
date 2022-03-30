import './style.css'

import {
  range,
  compare
} from '../src'

const o1 = {
  name: 'haha',
  age: 1,
  hello() {
    console.log('hello')
  }
}


const o2 = {
  name: 'haha',
  age: 1,
  hello() {
    console.log('hello')
  }
}

console.log(compare(o1, o2))
console.log(...range(1, 10))
