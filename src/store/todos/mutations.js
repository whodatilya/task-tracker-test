export function CREATE_TODO (state, { todoData }) {
    state.todos.push(todoData)
}
export function DELETE_TODO (state, { index }) {
    state.todos.splice(index, 1)
}
export function UPDATE_TODO (state, { index, todoValue }) {
    state.todos.splice(index, 1, todoValue)
}