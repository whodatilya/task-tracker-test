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