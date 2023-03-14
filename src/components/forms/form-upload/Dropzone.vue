<template>
    <div class="js-upload dropzone" :id="id" :maxFiles="maxFiles" :maxFilesize="maxFilesize" :acceptedFiles="acceptedFiles">
        <div class="dz-message">
            <div class="dz-message-icon">
                <Icon :icon="icon" size="lg"></Icon>
            </div>
            <span class="dz-message-text">Drag and drop file.
                <small>Max {{maxFilesize}} MiB</small>
            </span>
            <div class="dz-message-btn mt-2">
                <span class="btn btn-md btn-primary">Upload</span>
            </div>
        </div>
    </div>
</template>

<script>
import Dropzone from "dropzone";
import Icon from "@/components/icon/Icon.vue";

export default {
    name: 'DropzonePage',
    props:{
        id: {
            type: String
        },
        icon: {
            type: String,
            default: 'files'
        },
        maxFiles: {
            type: Number,
            default: null
        },
        maxFilesize: {
            type: Number,
            default: 256
        },
        acceptedFiles: {
            type: String
        }
    },
    components: {
        Icon
    },
    methods:{
        dropzone (){
            let itemId = this.id;
            let myDropzone = new Dropzone(`#${itemId}`,{
                url: "image",
                maxFilesize: this.maxFilesize,
                maxFiles: this.maxFiles,
                acceptedFiles: this.acceptedFiles
            });
            myDropzone;
        }
    },
    mounted(){
        this.dropzone();
    }
}
</script>
