import {useEffect} from 'react'
// 方法2：使用useEffect
import resetScroll from './resetScroll'

export default function useScroll(pathname) {
    useEffect(resetScroll, [pathname]); // 只要当前pathname发生变化就触发resetScroll事件
}
