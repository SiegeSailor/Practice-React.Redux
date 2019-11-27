// Action creator
export const add = () => {
    return {
        type: "PLUS",
        val: 1
    }
}

export const sub = () => {
    return {
        type: "MINUS",
        val: 1
    }
}

// Action type
// 因為 type 的字串和 Action creator 在其他檔案中會用到，
// 這樣透過綁在變數上的方式，至少讓我們在 console 上可以看見錯字警示。
export const PLUS = "PLUS";
export const MINUS = "MINUS";