import { createComponent, createApp, reactive } from "vue";

// 计数器组件
const Counter = {
    props: {
        initCount: {
            type: Number,
            default: 0
        }
    },
    template: `
        <div class="counter-display">
            <span class="counter-label">恭喜你，你已经写了</span>
            <span class="counter-text">{{ state.count }}</span>
            <span class="counter-label">斤代码！</span>
        </div>
        <div class="counter-btns">
            <button class="btn" @click="increase">写一斤</button>
            <button class="btn" @click="reset">删库啦</button>
        </div>
    `,
    // 相当于 vue2.x beforeCreated, created
    setup(props) {
        const countOps = useCount(props.initCount)
        return { ...countOps }
    }
}

function useCount(initCount) {
    const state = reactive({ count: initCount })
    console.log("state reactive", state)
    const increase = () => { state.count++ }
    const reset = () => { state.count = 0 }
    return { state, increase, reset }
}

// 创建一个 跟组件 app
const App = createComponent({
    // 这个就相对于 在另一个 .vue 文件 引用 Counter 组件，需要在 components 属性局部注册组件
    components: {
        Counter,
    },
    // 挂载到 App 模板中
    template: `
        <div class="container">
            <h3>计数器示例</h3>
            <Counter />
        </div>
    `,
    setup() {
        console.log("App ===> 相当于 vue2.x 中 beforeCreated, created")
    }
})

// 启动
// container 就是相当于 new Vue() 中 el 元素
const container = document.querySelector("#app");
// createApp() 就是相当于 new Vue() 内部返回的就是 new Vue()
const app = createApp(App);
// 挂载组件
app.mount(container);