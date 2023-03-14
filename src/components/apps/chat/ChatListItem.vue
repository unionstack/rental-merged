<template>
    <li ref="toggleChatItem" class="toggle-chat-item">
        <slot />
    </li>
</template>

<script>
    export default {
        name: 'ChatListItem',
        mounted(){
            let chatOpenElm = this.$refs.toggleChatItem;
            let chatBodyElm = document.getElementById('chatBody');

            chatOpenElm.addEventListener('click', function(e){
                e.preventDefault();

                [...chatOpenElm.parentNode.children].forEach(item => {
                    item.classList.remove('active');
                });

                chatOpenElm.classList.add('active');
                chatBodyElm.classList.add('show-chat');
                
            });
        }
    }
</script>
