<template>
    <div class="card-body">
        <div class="d-flex align-items-center code-toolbar py-2">
            <div class="overline-title">{{title}}</div>
            <div class="js-copy-wrap ms-auto">
                <button :data-clipboard-target="'#'+idgen" class="js-copy text-light" ref="btn" type="button">
                    <em class="icon ni ni-copy"></em>
                </button>
            </div>
        </div>
        <pre class="code-preview bg-lighter"><code :id="idgen" ref="code" class="language-plaintext"><slot></slot></code>
        </pre>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard';
import randomId from '@/utilities/randomId';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default {
    name: 'CodePreview',
    props: {
        title: {
            type: String
        },
        target: {
            type: String
        }
    },
    computed:{
        idgen(){
            return randomId(6);
        }
    },
    mounted(){
        let btnElem = this.$refs.btn;
        let options = {
            tooltip:{
                selector: 'js-copy-tooltip',
                init: 'Copy',
                success : 'Copied',
            },
            icon:{
                init: 'copy',
                success: 'copy-fill',
            }
        }

        let clipboard = new ClipboardJS(btnElem);
        //set markup
        let initMarkup = `<em class="icon ni ni-${options.icon.init}"></em><span class="${options.tooltip.selector}">${options.tooltip.init}</span>`;
        let successMarkup = `<em class="icon ni ni-${options.icon.success}"></em><span class="${options.tooltip.selector}">${options.tooltip.success}</span>`;
        btnElem.innerHTML = initMarkup;
        //on-sucess
        clipboard.on("success", function(e){
            let target = e.trigger;
            target.innerHTML = successMarkup;
            setTimeout(function(){
                target.innerHTML = initMarkup;
            }, 1000)
        });


        let codeElem = this.$refs.code;

       // then highlight each
       hljs.highlightElement(codeElem);
    },
}
</script>
