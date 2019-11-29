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

export const double = () => {
    return {
        type: "DIVIDE",
        val: 0.5
    }
}

export const addTodo = (string) => {
    return {
        type: "TODO",
        string: string
    }
}

// Action type
// 因為 type 的字串和 Action creator 在其他檔案中會用到，
// 這樣透過綁在變數上的方式，至少讓我們在 console 上可以看見錯字警示。
export const PLUS = "PLUS";
export const MINUS = "MINUS";
export const DIVIDE = "DIVIDE";
export const TODO = "TODO";