let timer1, timer2;

export default function reset() {
    const html = document.documentElement;
    clearInterval(timer1)
    clearInterval(timer2)
    timer1 =  resetAnimate(html.scrollTop, 0, val=>{
        html.scrollTop = val;
    })
    timer2 =  resetAnimate(html.scrollLeft, 0, val=>{
        html.scrollLeft = val;
    })
}
/**
 * 在一定时间内，把滚动条从start动态移动到end位置
 * @param {*} start 
 * @param {*} end 
 */
function resetAnimate(start, end, callback) {
    const tick = 16; // 每16毫秒移动一次
    const duration = 300; // 总移动时间
    const times = Math.ceil(duration / tick); // 移动的次数
    let curTimes = 0; // 当前移动次数
    let dis = (end - start) / times; // 每次要移动的距离
    let timer = setInterval(()=>{
        curTimes ++;
        start += dis; // 更新每次start的位置
        if(curTimes === times) {
            start = end;
            clearInterval(timer);
        }
        callback(start); // 拿到最新位置后的回调函数
    }, tick)
    return timer;
}