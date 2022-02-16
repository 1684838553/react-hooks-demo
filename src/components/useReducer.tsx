import React, { useReducer, useState } from 'react'
import './style.css'

const store = {
    num: 10  // 初始值
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'changeNum':
            return {
                ...state,
                num: action.num
            }
        case 'newObject':
            return {
                ...state,
                object: action.object
            }
        default:
            return {
                ...state
            }
    }
}

export default function ReducerComponent() {
    const [state, dispatch] = useReducer(reducer, store)

    const changeNum = (type: string) => {
        dispatch({
            type: 'changeNum',
            num: type === 'add' ? state.num + 2 : state.num - 2
        })
    }

    const newObject = () => {
        dispatch({
            type: 'newObject',
            object: {
                name: 'tom',
                age: 12
            }
        })
    }

    return <div>
        <div onClick={() => changeNum('add')} className="btn-click">点击修改num+</div>
        <div onClick={() => changeNum('minus')} className="btn-click">点击修改num-</div>
        <div onClick={newObject} className="btn-click">Hi,咱们new一个对象吧！点击我</div>
        {
            state.object ? <div className="add-background">
                new出来的对象：<br />
                姓名：{state.object.name}<br />
                年龄：{state.object.age}
            </div> : null
        }
        这是一个函数组件 - {state.num === 10 ? '初始值' : '修改值'}{state.num}
    </div>
}
