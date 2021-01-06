<template lang="">
    <div>
        <div class="container">
            <div class="form-group mr-5">
                <label>Başlık</label>
                <input type="text" v-model="bookmarkItem.title" class="form-control" />
            </div>
            <div class="form-group mr-5">
                <label>Açıklama</label>
                <input type="text" v-model="bookmarkItem.description" class="form-control" />
            </div>
            <div class="form-group mr-5">
                <label>URL</label>
                <input type="text" v-model="bookmarkItem.url" class="form-control" />
            </div>
            <button class="btn-primary mt-10" @click="addBookmarkList">
                Ekle
            </button>
            </div>
        </div>
</template>
<script>
export default {
    data()
    {
        return {
            bookmarkItem : {
                title : null,
                description : null,
                url : null,
                editStatus : false
            } 
        }
    },
    methods : {
        addBookmarkList()
        {
            this.$store.dispatch("addBookmarkList",this.bookmarkItem);
            this.bookmarkItem = {
                title : null,
                description : null,
                url : null,
                editStatus : false
            } 
        },
    }
    
}
</script>
<style lang="">
</style>