# 代码规范

写 JavaScript 时用现代语法，不要写过时的写法。下面每一条都说明了应该怎么写，以及为什么。

## 运行环境

- 可以放心使用：`?.`、`??`、`??=`、`Array.prototype.at`、`Object.hasOwn`、`structuredClone`
- 项目是 ES Module（`package.json` 中 `"type": "module"`），用 `import` / `export`，不写 `require` 和 `module.exports`

## 编码约定

- if、else、for、while 必须使用花括号
- 优先解构参数和对象字段，使用 `?.` 和 `??` 表达可选访问和空值默认值
- 变量名表达完整含义，避免无意义缩写
- 数组遍历优先使用 forEach、map、filter，需要顺序 await 时可使用 for...of
- 三元表达式仅用于单行表达式，多行 JSX 条件使用独立变量、`&&` 或提前返回
- 事件处理函数使用 handle<Verb><Noun>，如 handleChangeStartTime
- 模块常量使用 PascalCase，放在同级 `config.js` 中并导入使用，含 JSX 时用 `config.jsx`
- 枚举使用纯 `[{ label, value, disabled }]` 数组
- 导出在定义处内联声明，用 `export const`，不在文件末尾集中 `export { ... }`

## 不要写 then, 用 async/await

不要写：

```js
const loadDetail = params => {
    return fetchList(params).then(res => {
        return fetchDetail(res.data[0].id);
    });
};
```

应该写：

```js
const loadDetail = async params => {
    const { data } = await fetchList(params);
    return fetchDetail(data[0].id);
};
```

原因：

- 代码从上到下按执行顺序阅读，不用在多层回调之间跳转
- 中间结果是普通变量，后面的步骤可以直接使用。then 链要么层层 return，要么把变量提到外层
- 条件和循环里的异步步骤和同步代码写法一致，then 链要靠嵌套或 reduce 拼接
- 不用担心漏写 return。then 回调里少写一个 return，后面拿到的就是 `undefined`，而且不会报错
- 断点调试时可以逐行执行，不会跳进匿名回调

写法要点：

- 互不依赖的请求用 `Promise.all` 并行，不要一个个 await

```js
const [list, config] = await Promise.all([fetchList(), fetchConfig()]);
```

- 需要按顺序执行时，在 `for...of` 里 await，不要在 `forEach` 里 await，`forEach` 不会等待回调完成
- 不需要等待结果的触发型调用可以不 await
- `new Promise` 只用来把回调式 API 包装成 Promise，比如 sleep。不要用它再包一层已经返回 Promise 的函数

## 尽量不要写 try-catch

- 接口请求不要加 try-catch。接口异常已经统一处理过，业务代码只写成功之后的逻辑
- 数据来源和形状明确的代码不要加，比如遍历自己初始化的数组，读取自己定义的对象字段
- 只有代码确实可能抛错，并且 catch 里有明确的处理方式，才适合用

不要写：

```js
const loadList = async () => {
    try {
        const { data } = await fetchList();
        this.list = data;
    } catch (error) {
        console.error(error);
    }
};
```

应该写：

```js
const loadList = async () => {
    const { data } = await fetchList();
    this.list = data;
};
```

原因：

- 接口异常已经处理过，这里的 catch 是重复处理
- catch 之后代码会继续往下走，后面的逻辑可能拿着空数据执行
- try-catch 会把真正的 bug 吞成一行日志，排查更难
- 正常流程被包进 try 块，多一层缩进，读起来更费劲
- 用 try-catch 兜底，说明对数据的形状没有把握。应该先推导清楚数据长什么样，而不是靠兜底掩盖不确定

适合使用 try-catch 的情况：

- 解析外部输入，比如用户粘贴的 JSON 文本、`localStorage` 里的字符串。`JSON.parse` 遇到非法内容一定会抛错
- 解析失败后有明确的处理，比如回退到默认值

## 不要写的过时代码

| 不要写 | 应该写 | 原因 |
| --- | --- | --- |
| `var` | `const`，需要重新赋值时用 `let` | `var` 是函数作用域并且会变量提升，在循环和条件里容易出现意外共享。`const` 直接表达不会重新赋值 |
| `function () {}` 回调 | `() => {}` | 箭头函数不绑定自己的 `this`，不需要 `var that = this` 或 `bind` |
| `'a' + b + 'c'` | `` `a${b}c` `` | 可读性更好，多行文本不用拼 `\n` |
| `arguments` | `(...args) => {}` | `arguments` 不是真数组，箭头函数里也没有它 |
| `fn.apply(null, args)` | `fn(...args)` | 更短，意图清楚 |
| `Object.assign({}, a, b)` | `{ ...a, ...b }` | 更短，意图清楚。少写第一个参数 `{}` 时，`Object.assign` 会直接改掉原对象 |
| `JSON.parse(JSON.stringify(x))` | `structuredClone(x)` | 前者会丢掉 `undefined`，把 `Date` 变成字符串，不支持 `Map`、`Set`，遇到循环引用会报错。含函数的对象 `structuredClone` 会报错，需要单独处理 |
| `arr.indexOf(x) !== -1` | `arr.includes(x)` | 直接表达"是否包含"，也能正确处理 `NaN` |
| `arr[arr.length - 1]` | `arr.at(-1)` | 不用重复写数组名 |
| `Array.prototype.slice.call(list)` | `Array.from(list)` 或 `[...list]` | 不需要借用原型方法 |
| `obj.hasOwnProperty(key)` | `Object.hasOwn(obj, key)` | 对象没有原型，或者自己定义了 `hasOwnProperty` 时，前者会出错 |
| `Object.keys(obj).forEach(key => obj[key])` | `Object.entries(obj).forEach(([key, value]) => {})` | 不用再按 key 取一次值 |
| `{ a: a, foo: function () {} }` | `{ a, foo() {} }` | 属性和方法简写 |
| `==`、`!=` | `===`、`!==` | `==` 会隐式转换类型，比如 `0 == ''` 为 `true` |
| `require`、`module.exports` | `import`、`export` | 项目是 ES Module |
| `(function () {})()` 包裹模块 | 直接写在模块里 | 模块自带作用域 |

## 不要写 && 链和 ||, 用 ?. 和 ??

不要写：

```js
const city = user && user.address && user.address.city;
const pageSize = options.pageSize || 10;
if (!config.timeout) {
    config.timeout = 3000;
}
```

应该写：

```js
const city = user?.address?.city;
const pageSize = options.pageSize ?? 10;
config.timeout ??= 3000;
```

原因：

- `?.` 一次表达"有就继续取，没有就是 `undefined`"，不用把路径重复写一遍
- `||` 会把 `0`、`''`、`false` 当成没有值并换成默认值。用户把 `pageSize` 设成 `0` 时会被悄悄改成 `10`，`??` 只在 `null` 和 `undefined` 时才用默认值
- `??=` 把"没有值才赋值"写成一行，也不会覆盖已有的 `0` 和 `''`

# 命名规范

## 命名风格

| 风格   | 别名   | 英文       | 示例     |
| ------ | ------ | ---------- | -------- |
| 驼峰   | 小驼峰 | camelCase  | aaBbCc   |
| 帕斯卡 | 大驼峰 | PascalCase | AaBbCc   |
| 蛇形   | -      | snake_case | aa_bb_cc |

## 使用场景

- 帕斯卡：常量名、组件名、组件目录名
- 驼峰：页面目录名（即 `src/pages/` 下的一级目录）、其他场景基本都用驼峰
- 蛇形：前端不允许使用；后端需要的字段名与后端保持一致，不要转换格式，比如 `app_id`、`role_id` 等

## 中英文符号

- 不允许使用中文符号，顿号除外
- 英文符号后注意留空格，比如逗号后面加空格，与英语写作习惯一致

## 包裹函数

用 `debounce` 等函数包裹时，新函数的命名在前面加 `debounced` 前缀：

```js
const fetchData = () => {};
const debouncedFetchData = debounce(fetchData, 200);
```

## 数组遍历的回调参数

遍历数组时，回调函数的参数这样命名：

- 单层遍历：`item`、`index`
- 嵌套遍历：从第一层开始依次是 `item1`、`index1`；`item2`、`index2`；`item3`、`index3`
- `reduce`：`acc`、`cur`、`index`、`array`

```js
list.forEach((item1, index1) => {
    item1.children.forEach((item2, index2) => {});
});
const total = list.reduce((acc, cur, index, array) => acc + cur.count, 0);
```

项目中只有极少数场景第一层不使用 `item`，比如遍历 `pageFormList` 时。

## 箭头函数

尽量不使用 `function`，使用箭头函数。

### 返回值缩写

箭头函数不带花括号的缩写形式会隐式 `return`。使用规则：

- 没有用到返回值时，不要用缩写形式
- 返回值很少，只有一行并且是简单表达式时，可以用缩写形式
- 其他情况不允许用缩写形式，比如返回值跨多行，或者是复杂的表达式
- 在 JSX 里返回 DOM 时，不可以用缩写形式

没有用到返回值，不要缩写：

```js
// 不要写
list.forEach(item => handleItem(item, options));
// 应该写
list.forEach(item => {
    handleItem(item, options);
});
```

回调只是把参数原样传给另一个函数时，不需要再包一层箭头函数，直接传函数：

```js
list.forEach(handleItem);
```

简单的单行表达式，可以缩写：

```js
const ids = list.map(item => item.id);
const enabledList = list.filter(item => item.enabled);
```

返回值跨多行，不要缩写：

```js
// 不要写
const options = list.map(item => ({
    label: item.name,
    value: item.id
}));
// 应该写
const options = list.map(item => {
    return {
        label: item.name,
        value: item.id
    };
});
```

在 JSX 里返回 DOM，不要缩写：

```jsx
// 不要写
const renderList = list => list.map(item => <li key={item.id}>{item.name}</li>);
// 应该写
const renderList = list => {
    return list.map(item => {
        return <li key={item.id}>{item.name}</li>;
    });
};
```

### 原因

代码可读性非常重要，不要为了省几个字符而牺牲可读性：

- 缩写形式的 `return` 是隐含的。没用到返回值时还写成缩写，读的人会误以为这里在返回什么
- 多行内容外面再包一层 `({ ... })` 或 `( ... )`，括号的层次比显式 `return` 更难读
- 显式 `return` 的写法，之后要在函数里加一行逻辑时不用改结构
- 在 JSX 里，缩写形式把标签和函数的括号混在一起，一眼看不出函数在哪里结束

# 样式规则

- Tailwind 优先使用内置尺度，如 text-lg、rounded-lg、p-2.5、size-7。只有内置尺度不适用时才使用任意值
- 必须编写自定义 CSS 时，使用扁平语义命名，类型或角色前缀在前，如 btn-xxx、icon-xxx，不使用 BEM
- 后代样式使用原生 CSS nesting 和 `&`，不重复铺开父级选择器
- 不添加叙述布局背景或解释魔法值的无效 CSS 注释
- 尽量使用 Tailwind 写法，不要写各种奇葩的类名写一堆乱七八糟的样式代码

## 空行规范

### import 和 export

- `import` 语句都写在文件顶部，动态 `import()` 除外
- `import` 语句之间不加空行
- `import` 与 `export` 之间空一行
- `export` 语句之间空一行

```js
import { debounce } from 'lodash';
import Config from './config.js';

export const Options = [];

export default {
    name: 'MyPage'
};
```

### 对象字面量

- 对象字面量的属性之间不加空行
- 常见的糟粕写法：给对象里各个方法之间加冗余空行

不要写：

```js
const handlers = {
    // 提交
    handleSubmit() {},

    // 重置
    handleReset() {}
};
```

应该写：

```js
const handlers = {
    // 提交
    handleSubmit() {},
    // 重置
    handleReset() {}
};
```

## 注释规范

- 函数名见名知意的不写注释，逻辑复杂的函数才写注释说明意图
- 注释内容简短用单行注释 `//`，内容较多用多行注释 `/* */`
- 注释用来解释代码在做什么、为什么这么做，不是记录每次改动
- 不要把和用户的对话、需求背景、改动历史塞进注释里。这类信息属于 commit message，不属于代码
- 不堆砌注释，不为显而易见的代码逐行加注释

不要写：

```js
// 用户说早期没有 port, 这里加上
// 2026-11-04 改成默认 8316
// 上次 bug 是因为没判空, 这次补上
const port = config.port ?? 8316;
```

应该写：

```js
const port = config.port ?? 8316;
```
