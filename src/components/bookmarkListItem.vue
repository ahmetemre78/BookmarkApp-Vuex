<template lang="">
  <div>
    <div v-if="!bookmarks.editStatus">
      <div class="bookmark-item">
        <div class="header">
          <h3>{{ bookmarks.title }}</h3>
          <button
            class="btn-sm btn-danger"
            @click="removeFromBookmark(bookmarks)"
          >
            Kaydı Sil
          </button>
        </div>
        <p class="mt-20 mb-20">{{ bookmarks.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a :href="bookmarks.url" target="_blank">{{ bookmarks.url }}</a>
          <button
            v-if="!bookmarks.editStatus"
            class="btn-warning btn-sm"
            @click="PressChange(bookmarks)"
          >
            Düzenle
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="bookmark-item">
        <div class="header">
          <input type="text" v-model="currentData.title">
          <button
            class="btn-sm btn-danger"
            @click="removeFromBookmark(bookmarks)"
          >
            Kaydı Sil
          </button>
        </div>
        <input type="text" class="mt-20 mb-20" v-model="currentData.description">
        <div class="d-flex justify-content-between align-items-center">
          <input type="text" v-model="currentData.url">
          <button @click="editBookmark(bookmarks)" class="btn-success btn-sm">Değiştir</button>
          <button
            class="btn-default btn-sm"
            @click="bookmarks.editStatus = false"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bookmarks"],
  data()
  {
    return {
      currentData : {}
    }
  },
  methods: {
    removeFromBookmark(bookmark) {
      if (confirm("Bu bookmarkı silmek istiyor musunuz?")) {
        this.$store.dispatch("removeFromBookmarkList", bookmark.id);
      }
    },
    PressChange(bookmark)
    {
      bookmark.editStatus = true;
      this.currentData = { ...bookmark }
    },
    editBookmark(bookmark)
    {
      bookmark.editStatus = true;
      this.$store.dispatch("changeBookmark",this.currentData);
    }
  },
};
</script>
<style lang=""></style>
