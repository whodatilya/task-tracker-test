<template>
    <div class="main">
        <div class="header">
            <div class="header__title">
                @codereduser
            </div>
        </div>
        <div class="content">
            <button @click="onCreateButtonClick" class="content__button">
                Go to TODO list
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    methods: {
      onCreateButtonClick () {
          this.$router.push({ name: 'todo'})
      }
    },
}
</script>