import React, { useContext, createContext, useState } from 'react'
import './style.css'

const Context = createContext({ num: 0, age: 0 })

export default function ContextComponent() {
    const [num, setNum] = useState(10)
    const [age, setAge] = useState(12)

    const changeNum = () => {
        setNum(num + 1)
        if (age > 0) {
            setAge(age - 1)
        }
    }

    return <div>
        <div onClick={changeNum} className="btn-click">点击我，修改num和age值</div>
        <Context.Provider value={{ num, age }}>
            <ChildComponent />
        </Context.Provider>
    </div>
}


function ChildComponent() {

    const obj = useContext(Context)

    return <div>
        这是一个子组件--{obj.num} - {obj.age}
    </div>
}
