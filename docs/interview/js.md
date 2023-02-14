### JS 数据类型

JS 数据类型分为 **_基本数据类型_** 和 **复杂数据类型**

基本数据类型：Number、String、Boolean、undefined、null、symbol、bigInt （放在栈中）

复杂数据类型：Object （放在堆中）

### 如何判断数据类型？（3 种方式）

typeof：不能判断复杂数据类型

instanceof：判断某个实例的原型

Object.prototype.toString.call()：所有数据都能判断

#### var、let、const 的区别

- var 声明是全局作用域或者函数作用域，let 和 const 是块作用域
- var 变量可以重新赋值和声明，let 可以重新赋值不能重复声明，const 不可以重新赋值不能重复声明
- 都可以变量提升到作用域顶部，var 初始化为 undefined，let 和 const 不能初始化
- 声明期间，var 和 let 可以不初始化，const 必须初始化

#### promise

#### 异步

#### 原型和原型链

### 作用域和作用域链

作用域分为：全局作用域和块级作用域

作用域链：当查找某个变量时，从当前作用域开始逐级向上查找，直至找到全局作用域还未找到就停止查找，抛出异常。这种层级关系就叫做作用域链

### 执行上下文

当 JavaScript 代码执行一段可执行代码时，会创建对应的执行上下文。对于每个执行上下文，都有三个重要属性：

a) 变量对象（Variable object，VO）；

b) 作用域链（Scope chain）；

c) this。（this 指向）

### 闭包

定义：那些能够访问自由变量的函数

闭包=函数+函数能够访问的自由变量（在函数中使用的，既不是函数参数也不是函数的局部变量的变量）

### new 的实现

1. 创建一个空对象
2. 把这个对象的[[proto]]链接到构造函数的 prototype
3. 构造函数的 this 指向这个对象，执行构造函数的代码
4. 返回这个对象

### this，怎么改变 this？手写 call，apply，bind

**_this 永远指向最后调用它的那个对象_**

- 箭头函数无 this

- new 调用：绑定到新创建的对象

- bind：多次 bind 只认第一次绑定，箭头函数中 this 不会被修改

- apply、call

- 对象

- 直接调用

### 手写 call

```javascript
Function.prototype.myCall = function (target, ...args) {
  target = target || window;
  const symbolKey = Symbol();
  target[symbolKey] = this;
  const res = target[symbolKey](...args);
  delete target[symbolKey];
  return res;
};
```

### 手写 apply

```javascript
Function.prototype.myApply = function (target, args) {
  target = target || window;
  const symbolKey = Symbol();
  target[symbolKey] = this;
  const res = target[symbolKey](...args);
  delete target[symbolKey];
  return res;
};
```

Call 和 apply 的区别就是，**_apply 传入的是数组，call 传入的是一个个值_**

### 手写 bind

```javascript
Function.prototype.myBind = function (target, ...outArgs) {
  target = target || {};
  const symbolKey = Symbol();
  target[symbolKey] = this;
  return function (...innerArgs) {
    const res = target[symbolKey](...outArgs, ...innerArgs);
    return res;
  };
};
```

### 手写深拷贝

```javascript
function deepClone(obj = {}, map = new WeakMap()) {
  if (typeof obj != "object") return obj;
  if (map.get(obj)) return map.get(obj);
  let result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}
```

### JS 的事件循环？宏任务有哪些？微任务有哪些？

### 从浏览器地址栏输入 url 到请求返回发生了什么？

### 浏览器的垃圾回收机制

1. 标记清除
2. 引用计数

### 跨域问题解决方式（开发和生产环境）
