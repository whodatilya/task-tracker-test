export async function createTodo ({ commit }, { todoData }) {
    commit('CREATE_TODO', { todoData })
}
export async function deleteTodo ({ commit }, { index }) {
    commit('DELETE_TODO', { index })
}

export async function updateTodo ({ commit }, { index, todoValue }) {
    commit('UPDATE_TODO', { index, todoValue })
}