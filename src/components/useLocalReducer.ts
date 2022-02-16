// 自定义hooks
// useLocalReducer 省去每个文件都需创建一次store

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

export default function useLocalReducer() {
    const [state, dispatch] = useReducer(reducer, store)

    return [state, dispatch]
}
