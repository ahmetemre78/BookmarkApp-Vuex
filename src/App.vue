<template lang="">
  <div>
    <header>Bookmark App</header>
    <!-- InputComponent -->
    <add-bookmark-item></add-bookmark-item>
    <!-- BookmarkItemComponent -->
    <bookmark-item></bookmark-item>
 </div>
</template>
<script>
import addBookmarkItem from "@/components/addBookmark.vue"
import bookmarkItem from "@/components/bookmarkItem.vue"
export default {
  components : {addBookmarkItem,bookmarkItem}
}
</script>
<style lang="">
  
</style>