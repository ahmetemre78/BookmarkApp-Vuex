import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
    state: {
        bookmarkList: [],
        baseURL: "http://localhost:3000/bookmarks",
    },
    getters: {
        myBookmarks: (state) => state.bookmarkList,
    },
    mutations: {
        fillBookmark(state, bookmark) {
            state.bookmarkList = bookmark;
        },
        addBookmark(state, bookmark) {
            state.bookmarkList.push(bookmark);
        },
        deleteBookmark(state, bookmarkID) {
            state.bookmarkList = state.bookmarkList.filter(
                (item) => item.id !== bookmarkID
            );
        },
        updatedBookmark(state, bookmark) {
            const updatedBookmark = state.bookmarkList.findIndex(
                (i) => i.id === bookmark.id
            );
            if (updatedBookmark > -1) {
                state.bookmarkList[updatedBookmark] = {
                    ...bookmark,
                    editStatus: false,
                };
            }
        }
    },
    actions: {
        GetBookmarks({ commit, state }) {
            axios
                .get(`${state.baseURL}`)
                .then((get_response) => {
                    console.log(get_response.data);
                    commit("fillBookmark", get_response.data);
                })
                .catch((err) => {
                    console.log("Error => ", err);
                });
        },
        addBookmarkList({ commit, state }, bookmark) {
            axios
                .post(`${state.baseURL}`, bookmark)
                .then((add_response) => {
                    console.log(add_response.data);
                    commit("addBookmark", add_response.data);
                })
                .catch((err) => {
                    console.log("Error => ", err);
                });
        },
        removeFromBookmarkList({ commit, state }, bookmarkID) {
            axios
                .delete(`${state.baseURL}/${bookmarkID}`)
                .then((delete_response) => {
                    if (delete_response.status === 200) {
                        commit("deleteBookmark", bookmarkID);
                    }
                })
                .catch((err) => {
                    console.log("Error => ", err);
                });
        },
        changeBookmark({ commit, state }, bookmark) {
            axios
                .patch(`${state.baseURL}/${bookmark.id}`, bookmark)
                .then((update_response) => {
                    commit("updatedBookmark", bookmark);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

    },
});

export default store;