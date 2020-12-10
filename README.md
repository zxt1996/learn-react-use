通过下面这些资料学习下在react中用ts写自定义hook  


[react-use](https://github.com/streamich/react-use)  

[alibaba/hooks](https://github.com/alibaba/hooks)  

## 自定义Hook的实现原理
> 自定义Hook的定义是逻辑的复用，而不是组件的复用，因此它不应该像Function Component一样直接返回组件树，自然也就没有一个独立的FiberNode来对应了。如果没有独立存储，那自定义hook函数内部调用的useState、useEffect等hook函数的数据结构应该如何存储呢？  

答案是绑定在调用这个自定义hook的Function Component对应的FiberNode上，被抽离出来的自定义Hook逻辑，在实际执行的过程中，就好像copy了一份自定义Hook代码，替换了原来的调用代码，这就是自定义Hook的本质。
