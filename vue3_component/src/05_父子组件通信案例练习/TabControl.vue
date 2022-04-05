<template>
    <div class="tab-control">
        <div class="tab-control-item"
        :class="{active: itemIndex == index}"
        v-for="(item,index) in titles" 
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ["itemClick"],
        data() {
            return {
                itemIndex: 0
            }
        },
        props: {
            titles: {
                type: Array,
            }
        },
        methods: {
            itemClick(index) {
                this.itemIndex = index;
                this.$emit("itemClick", index)
            }
        }
    }
</script>

<style scoped>
    .tab-control {
       display: flex; 
    }

    .tab-control-item{
        flex: 1;
        text-align: center;
    }
    .tab-control-item.active {
        color: red;
    }

    .tab-control-item.active span {
        border-bottom: 4px solid red;
        padding: 3px;
    }
</style>