/**
 * Created by dllo on 17/4/21.
 */
const util = require('util');

// 1.util.debuglog(section)
// util.debuglog() 方法用于创建一个函数，基于 NODE_DEBUG 环境变量的存在与否有条件地写入调试信息到 stderr。 如果 section 名称在环境变量的值中，则返回的函数类似于 console.error()。 否则，返回的函数是一个空操作。
// const debuglog = util.debuglog('foo');
// debuglog('hello from foo [%d]', 123);

// 2.util.deprecate(function, string)
// util.deprecate() 方法会包装给定的 function 或类，并标记为废弃的。

// exports.puts = util.deprecate(function() {
//     for (var i = 0, len = arguments.length; i < len; ++i) {
//         process.stdout.write(arguments[i] + '\n');
//     }
// }, 'util.puts: 使用 console.log 代替');
// 当被调用时，util.deprecate() 会返回一个函数，这个函数会使用 process.on('warning') 事件触发一个 DeprecationWarning。 默认情况下，警告只在首次被调用时才会被触发并打印到 stderr。 警告被触发之后，被包装的 function 会被调用。
//
// 如果使用了 --no-deprecation 或 --no-warnings 命令行标记，或 process.noDeprecation 属性在首次废弃警告之前被设为 true，则 util.deprecate() 方法什么也不做。
//
// 如果设置了 --trace-deprecation 或 --trace-warnings 命令行标记，或 process.traceDeprecation 属性被设为 true，则废弃的函数首次被调用时会把警告与堆栈追踪打印到 stderr。
//
// 如果设置了 --throw-deprecation 命令行标记，或 process.throwDeprecation 属性被设为 true，则当废弃的函数被调用时会抛出一个异常。
//
// --throw-deprecation 命令行标记和 process.throwDeprecation 属性优先于 --trace-deprecation 和 process.traceDeprecation。

// 3.util.format(format[, ...args])
//util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。
// 第一个参数是一个字符串，包含零个或多个占位符。 每个占位符会被对应参数转换后的值所替换
// %s - 字符串。
// %d - 数值（包括整数和浮点数）。
// %j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
// %% - 单个百分号（'%'）。不消耗参数。
// 如果占位符没有对应的参数，则占位符不被替换。

// var format = util.format('%s:%s', 'foo');
// console.log(format);// 返回: 'foo:%s'

util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'

util.format(1, 2, 3); // '1 2 3'

// 4.util.inherits(constructor, superConstructor)
// 从一个构造函数中继承原型方法到另一个。 constructor 的原型会被设置到一个从 superConstructor 创建的新对象上
// const EventEmitter = require('events');
//
// function MyStream() {
//     EventEmitter.call(this);
// }
//
// util.inherits(MyStream, EventEmitter);
//
// MyStream.prototype.write = function(data) {
//     this.emit('data', data);
// };
//
// const stream = new MyStream();
//
// console.log(stream instanceof EventEmitter); // true
// console.log(MyStream.super_ === EventEmitter); // true
//
// stream.on('data', (data) => {
//     console.log(`接收的数据："${data}"`);
// });
// stream.write('运作良好！'); // 接收的数据："运作良好！"

// 5.util.inspect(object[, options])
// util.inspect() 方法返回 object 的字符串表示，主要用于调试。 附加的 options 可用于改变格式化字符串的某些方面。

// 查看 util 对象的所有属性：
console.log(util.inspect(util, { showHidden: true, depth: null }));

// 6.自定义 util.inspect 颜色
// 可以通过 util.inspect.styles 和 util.inspect.colors 属性全局地自定义 util.inspect 的颜色输出（如果已启用）。
// util.inspect.styles 是一个映射，关联一个样式名到一个 util.inspect.colors 颜色。
/**
 * 默认的样式与关联的颜色有：
    number - yellow
    boolean - yellow
    string - green
    date - magenta
    regexp - red
    null - bold
    undefined - grey
    special - cyan （暂时只用于函数）
    name - （无样式）
 */
// 预定义的颜色代码有：white、grey、black、blue、cyan、green、magenta``red 和 yellow。 还有 bold、italic、underline 和 inverse 代码。


// 7.util.inspect.defaultOptions
//defaultOptions 值允许对被 util.inspect 使用的默认选项进行自定义。 这对 console.log 或 util.format 等显式调用 util.inspect 的函数很有用。 它需被设为一个对象，包含一个或多个有效的 util.inspect() 选项。 也支持直接设置选项的属性。
const util = require('util');
const arr = Array(101);
console.log(arr); // 打印截断的数组
util.inspect.defaultOptions.maxArrayLength = null;
console.log(arr); // 打印完整的数组


// 8.util.inspect.custom
// 一个符号，可被用于声明自定义的查看函数，详见自定义对象的查看函数。
