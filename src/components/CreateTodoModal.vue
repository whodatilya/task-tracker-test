<template>
    <div class="modal">
        <div class="modal__inner">
            <div class="modal__title">
                Create new todo:
            </div>
            <div style="display: flex; flex-direction: column">
                <label for="title">Title:</label>
                <input type="text" v-model="title">
                <label for="description">Description:</label>
                <input type="text" v-model="description">
                <div class="button__wrapper">
                    <button class="button button__close" @click="closeModal">Close</button>
                    <button class="button button__create" @click="createTask">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateNewTodo",
    data () {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        createTask () {
            this.$emit('onChildButtonClick', {
                title: this.title || null,
                description: this.description || null,
                status: 'Planned',
                isEdit: false
            })
            this.title = ''
            this.description = ''
        },
        closeModal () {
            this.$emit('onCloseButtonClick')
        }
    }
}
</script>

<style scoped lang="sass">
.modal
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    display: table
    transition: opacity 0.5s ease
    &__inner
        width: 30%
        max-width: 700px
        min-width: 300px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 24px
        border-radius: 10px
        background: #FFFFFF
    &__title
        font-size: 24px
        margin-bottom: 10px
    label
        font-size: 24px
    input
        height: 40px
        margin-bottom: 18px
        border-radius: 8px
        outline: none
        border-width: 0
        font-size: 24px
        padding: 0 30px 0 16px
        background: #F1F6FA
        box-shadow: inset 0 1.5px 3px rgba(0, 17, 51, 0.22)
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
    .button
        width: 40%
        &__wrapper
            display: flex
            justify-content: space-between
        &__create
            background: #398945
            border-radius: 20px
            border: none
            color: #FFFFFF
            font-size: 24px
            padding: 8px 12px
            &:hover
                cursor: pointer
                color: #ffffff
                background: #286230
        &__close
            background: #f66d52
            border-radius: 20px
            border: none
            color: #FFFFFF
            font-size: 24px
            padding: 8px 12px
            &:hover
                cursor: pointer
                color: #ffffff
                background: #b04936
</style>