/**
 * Created by dllo on 17/4/20.
 */
var assert = require('assert');
// assert(true);// 通过
// console.log('通过');
// assert(1);// 通过
// console.log('通过');
// // assert(false);// 抛出 "AssertionError: false == true"
// console.log('通过');
// // assert(0);// 抛出 "AssertionError: 0 == true"
// console.log('通过');
// assert(false, '不是真值');// 抛出 "AssertionError: 不是真值"
// console.log('通过');

// 2.assert.deepEqual(actual, expected[, message])
// 测试 actual 参数与 expected 参数是否深度相等。 原始值使用相等运算符（==）比较。只比较可枚举的自身属性 error不可枚举
var a1 = {
    b:1
}
var a2 = {
    b:2
}
var a3 = {
    b:'1'
}
var a4 = a1;
const _a4 = Object.create(a1);
//判断两个对象是否相等 不等报AssertionError
// assert.deepEqual(a1,a2);//不通过
// assert.deepEqual(a1,a3);//通过
// assert.deepEqual(a1,a4);//通过
// assert.deepEqual(a1,_a4);//AssertionError: { b: 1 } deepEqual {} 原型会被忽略
// console.log('通过');

// 3.assert.notDeepEqual(actual, expected[, message])
// 测试是否不深度相等。 与 assert.deepEqual() 相反。
// assert.notDeepEqual(a1,a2);//通过
// assert.notDeepEqual(a1,a3);//不通过
// assert.notDeepEqual(a1,a4);//不通过
// assert.notDeepEqual(a1,_a4);//通过 因为原型被忽略导致不相等
// console.log('通过');

// 4.assert.deepStrictEqual(actual, expected[, message])
// 大多数情况下与 assert.deepEqual() 一样，但有两个例外。 首先，原始值使用全等运算符（===）比较。 其次，对象的比较包括检查它们的原型是否全等
// assert.deepStrictEqual(a1,a3)//不通过 因为1 !== "1"
// console.log('通过');

// 5.assert.notDeepStrictEqual(actual, expected[, message])
// 测试是否不深度全等。 与 assert.deepStrictEqual() 相反。

// 6.assert.doesNotThrow(block[, error][, message])
// 断言 block 函数不会抛出错误
// assert.doesNotThrow(function () {
//     throw new TypeError('错误');
// },TypeError,'抛出错误');// 抛出错误

// assert.doesNotThrow(function () {
//     throw new TypeError('错误');
// },TypeError);// ...

// assert.doesNotThrow(function () {
//     throw new TypeError('错误');
// },SyntaxError);// TypeError: 错误


// 7.assert.throws(block[, error][, message])
// 期望 block 函数抛出错误。
// 如果指定了 error，error 可以是构造函数、正则表达式、或自定义的验证函数。
// 如果指定了 message，则当 block 不抛出错误时，message 会作为 AssertionError 的错误信息。
// assert.throws(
// function () {
//     throw new Error('错误信息');
// },
// Error
// );
// 使用正则
// assert.throws(
//    function () {
//     throw new Error('错误信息');
// },
// /错误/
// );


// 8.assert.equal(actual, expected[, message])
// 使用相等运算符（==）测试 actual 参数与 expected 参数是否相等。
// assert.equal(1, 1);
// 通过，1 == 1
// assert.equal(1, '1');
// 通过，1 == '1'
// assert.equal(1, 2);
// 抛出 AssertionError: 1 == 2
// assert.equal({a: {b: 1}}, {a: {b: 1}});
// 抛出 AssertionError: { a: { b: 1 } } == { a: { b: 1 } }  a: { b: 1 } } == { a: { b: 1 }返回false

// 9.assert.fail(actual, expected, message, operator)
// 抛出 AssertionError。 如果 message 不存在，则错误信息会被设为 actual 的值加分隔符 operator 再加 expected 的值。 否则，错误信息为 message 的值。
//message 不存在
// assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError: 1 > 2
//message 存在
// assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError: 错误信息

// 10.assert.ifError(value)
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
// assert.ifError(false);//不抛出
// assert.ifError(true);//抛出true assert.ifError = function(err) { if (err) throw err; };

// 11.assert.notEqual(actual, expected[, message])
// 使用不等运算符（!=）测试是否不相等
// assert.notEqual(1, 2);// 通过
// assert.notEqual(1, 1);// 抛出 AssertionError: 1 != 1
// assert.notEqual(1, '1');// 抛出 AssertionError: 1 != '1'


// 12.assert.notStrictEqual(actual, expected[, message])
// 使用不全等运算符（!==）测试是否不全等。
// assert.notStrictEqual(1, 2);// 通过
// assert.notStrictEqual(1, 1);// 抛出 AssertionError: 1 !== 1
// assert.notStrictEqual(1, '1');// 通过

// 13.assert.ok(value[, message])
// 测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。
// 如果 value 不为真值，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。
// assert.ok(true);// 通过
// assert.ok(1);// 通过
// assert.ok(false);// 抛出 "AssertionError: false == true"
// assert.ok(0);// 抛出 "AssertionError: 0 == true"
// assert.ok(false, '不是真值');// 抛出 "AssertionError: 不是真值"

// 14.assert.strictEqual(actual, expected[, message])
// 使用全等运算符（===）测试是否全等。
// assert.strictEqual(1, 2);// 抛出 AssertionError: 1 === 2
// assert.strictEqual(1, 1);// 通过
// assert.strictEqual(1, '1');// 抛出 AssertionError: 1 === '1'
