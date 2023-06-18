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

<style scoped lang="sass">
.main
    height: 92vh
    .header
        background: #505050
        justify-content: space-between
        display: flex
        flex-direction: row
        padding: 6px
        height: fit-content
        &__title
            color: #efefef
            padding: 8px 16px
            letter-spacing: .2rem
            font-size: 32px
    .content
        display: flex
        align-items: center
        align-content: center
        height: 100%
        justify-content: center
        &__button
            cursor: pointer
            font-size: 32px
            color: #ffffff
            text-shadow: 1px 1px 1px #272625
            padding: 10px 18px
            box-shadow: 0 0 10px #575757
            border-radius: 5px
            border: none
            background: #f66d52
            &:hover
                color: #ffffff
                background: #398945
</style>