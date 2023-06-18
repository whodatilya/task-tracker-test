<template>
    <div class="todos">
        <div class="todos__inner">
            <div class="todos__table_header">
                <div class="todos__title">
                    TODO list:
                </div>
                <div class="todos__create_button" @click="processModal">
                    Create New
                </div>
            </div>
            <div class="table" v-if="todos.length">
                <div class="todos__table_cols todos__table_cols_header">
                    <div class="todos__table_id">Id</div>
                    <div class="todos__table_name">Title</div>
                    <div class="todos__table_desc">Description</div>
                    <div class="todos__table_status">Status</div>
                    <div class="todos__table_actions">Actions</div>
                </div>
                <div>
                    <div class="todos__table_cols" v-for="(todo, index) in todos">
                        <div class="todos__table_id">{{ index }}</div>
                        <div class="todos__table_name" v-if="todo.isEdit">
                            <input v-model="editedTodo.title">
                        </div>
                        <div class="todos__table_name" v-else>{{ todo.title }}</div>
                        <div class="todos__table_desc" v-if="todo.isEdit">
                            <input type="text" v-model="editedTodo.description">
                        </div>
                        <div class="todos__table_desc" v-else>{{ todo.description }}</div>
                        <div class="todos__table_status" v-if="todo.isEdit">
                            <select v-model="editedTodo.status">
                                <option :selected="todo.status === option" v-for="option in optionsList">{{ option }}</option>
                            </select>
                        </div>
                        <div class="todos__table_status" v-else>{{ todo.status }}</div>
                        <div class="todos__table_actions">
                            <div v-if="todo.isEdit" class="actions__confirm" @click="processConfirm(index, todo)">
                                <img :src="iconConfirm" alt="">
                            </div>
                            <div v-else class="todos__table_actions">
                                <div class="actions__delete" @click="deleteTodo(index)">
                                    <img :src="iconDelete" alt="">
                                </div>
                                <div class="actions__edit" @click="updateTodo(index, todo)">
                                    <img :src="iconEdit" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div v-else style="display: flex; justify-content: center; font-size: 24px">
                Create at least one task :(
            </div>
        </div>
        <create-new-todo @onChildButtonClick="createTodo" @onCloseButtonClick="processModal" v-if="isShowModal"/>
    </div>
</template>

<script>
import iconDelete from '@/assets/svg/iconDelete.svg'
import iconConfirm from '@/assets/svg/iconConfirm.svg'
import iconEdit from '@/assets/svg/iconEdit.svg'
import CreateNewTodo from "@/components/CreateTodoModal.vue";

export default {
    name: "TodosPage",
    components: {CreateNewTodo},
    data () {
        return {
            isShowModal: false,
            isEditMode: false,
            editedTodo: {
                title: '',
                description: '',
                status: ''
            },
            optionsList: [
                'In Progress',
                'Planned',
                'Completed',
                'Canceled'
            ],
            iconDelete,
            iconEdit,
            iconConfirm
        }
    },
    computed: {
        todos () {
            return this.$store.state.todos.todos
        }
    },
    methods: {
        processModal () {
            this.isShowModal = !this.isShowModal
        },
        processConfirm (id, todo) {
            todo.isEdit = false
            this.$store.dispatch('todos/updateTodo', { index: id, todoValue: this.editedTodo})
        },
        createTodo (todoValues) {
            this.$store.dispatch('todos/createTodo', { todoData: todoValues })
            this.processModal()
        },
        deleteTodo (id) {
            this.$store.dispatch('todos/deleteTodo', { index: id })
        },
        updateTodo (id, todo) {
            todo.isEdit = true
            this.editedTodo = this.todos[id]
        }
    }
}
</script>