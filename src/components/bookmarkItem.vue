<template lang="">
  <div>
    <div class="container">
      <div class="bookmark--app--container">
        <bookmark-list-item v-for="bookmark in bookmarklarım" :key="bookmark.id" :bookmarks="bookmark" ></bookmark-list-item>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import bookmarkListItem from "@/components/bookmarkListItem.vue";
export default {
  components: { bookmarkListItem },
  created()
  {
    this.$store.dispatch("GetBookmarks",this.bookmarklarım)
  },
  computed: {
    ...mapGetters({
      bookmarklarım: "myBookmarks",
    }),
  },
};
</script>
<style lang=""></style>
