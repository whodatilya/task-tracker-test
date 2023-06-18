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

<style scoped lang="sass">
.todos
    margin: 24px
    background: #ffffff
    box-shadow: 0 0 56px 40px rgba(34, 60, 80, 0.1)
    border-radius: 10px
    &__inner
        padding: 10px
    &__create_button
        background: #398945
        border-radius: 20px
        color: #FFFFFF
        font-size: 24px
        padding: 8px 12px
        &:hover
            cursor: pointer
            color: #ffffff
            background: #286230
    &__title
        font-size: 24px
        font-weight: 600
    &__table
        &_header
            display: flex
            padding-bottom: 5px
            align-items: center
            flex-direction: row
            justify-content: space-between
        &_cols
            display: grid
            align-items: center
            padding: 10px
            font-size: 24px
            grid-template-columns: 0.5fr 3fr 6fr 2fr 1fr
            gap: 0 0
            &_header
                font-size: 24px
                color: #FFFFFF
                font-weight: 500
                background: #505050
                border-radius: 8px 8px 0 0
                border-bottom: 2px solid #505050
        &_actions
            display: flex
            flex-direction: row
            justify-content: center
            &:hover
                cursor: pointer
.table
    border: 2px solid #505050
    border-radius: 10px
.actions
    &__delete
        &:hover
            filter: invert(74%) sepia(51%) saturate(3282%) hue-rotate(313deg) brightness(100%) contrast(97%)
    &__edit
        &:hover
            filter: invert(40%) sepia(99%) saturate(1450%) hue-rotate(192deg) brightness(100%) contrast(104%)
    &__confirm
        &:hover
            filter: invert(90%) sepia(42%) saturate(6776%) hue-rotate(57deg) brightness(115%) contrast(102%)
input
    height: 40px
    border-radius: 8px
    outline: none
    width: fit-content
    border-width: 0
    font-size: 24px
    padding: 0 30px 0 16px
    background: #F1F6FA
    box-shadow: inset 0 1.5px 3px rgba(0, 17, 51, 0.22)
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
select
    height: 40px
    width: 100%
    border-radius: 8px
    outline: none
    font-size: 24px
    padding: 0 30px 0 16px
</style>