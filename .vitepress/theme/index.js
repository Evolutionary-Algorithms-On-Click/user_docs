import { h } from 'vue'
import DefaultTheme from "vitepress/theme";
import EvocChat from "./components/EvocChat.vue";
import "./custom.css";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            //by this it will stay at the bottom of th epage for each page
            'layout-bottom': () => h(EvocChat)
        })
    }
};
