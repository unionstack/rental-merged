<template>
    <select :id="id" :sort="sort" :cross="cross" :selectText="selectText" :search="search">
        <slot></slot>
    </select>
</template>

<script>
import Choices from 'choices.js';

export default {
    name: 'ChoiceSelect',
    props: {
        id: String,
        search: {
            type: Boolean,
            default(){
                return true
            }
        },
        sort: {
            type: Boolean,
            default(){
                return false
            }
        },
        cross: {
            type: Boolean,
            default(){
                return true
            }
        },
        selectText: {
            type: String,
            default(){
                return 'Press to enter'
            }
        },
    },
    methods: {
        jsSelect (){
            let elem = document.getElementById(this.id);
            new Choices(elem, {
                silent: true,
                allowHTML: false,
                searchEnabled: this.search,
                placeholder: true,
                placeholderValue: null,
                searchPlaceholderValue: 'Search',
                shouldSort: this.sort,
                removeItemButton: this.cross,
                itemSelectText: this.selectText,
            });
        }
    },
    mounted() {
        // initialize select
        this.jsSelect();
    }
}
</script>
