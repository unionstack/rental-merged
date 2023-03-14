<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Kanban Board</BlockTitle>
        <BlockText>Kanban boards using vue.draggable. For more info see <a href="https://github.com/SortableJS/vue.draggable.next" target="_blank">the official site</a>.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
        <div class="kanban-custom-board">
            <div class="kanban-container">
                <KanbanBoardCustom title="Open" variant="kanban-light" :count="tasks.isOpen.length">
                    <draggable class="kanban-drag" :list="tasks.isOpen" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div class="kanban-item">
                                <div class="kanban-item-title">
                                    <h6 class="title">{{element.title}}</h6>
                                </div>
                                <div class="kanban-item-text">
                                    <p>{{element.text}}</p>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
                <KanbanBoardCustom title="In Process" variant="kanban-primary" :count="tasks.inProcess.length">
                    <draggable class="kanban-drag" :list="tasks.inProcess" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div class="kanban-item">
                                <div class="kanban-item-title">
                                    <h6 class="title">{{element.title}}</h6>
                                </div>
                                <div class="kanban-item-text">
                                    <p>{{element.text}}</p>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
                <KanbanBoardCustom title="In Review" variant="kanban-warning" :count="tasks.inReview.length">
                    <draggable class="kanban-drag" :list="tasks.inReview" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div class="kanban-item">
                                <div class="kanban-item-title">
                                    <h6 class="title">{{element.title}}</h6>
                                </div>
                                <div class="kanban-item-text">
                                    <p>{{element.text}}</p>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
                <KanbanBoardCustom title="Issues" variant="kanban-danger" :count="tasks.issues.length">
                    <draggable class="kanban-drag" :list="tasks.issues" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div class="kanban-item">
                                <div class="kanban-item-title">
                                    <h6 class="title">{{element.title}}</h6>
                                </div>
                                <div class="kanban-item-text">
                                    <p>{{element.text}}</p>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
                <KanbanBoardCustom title="Completed" variant="kanban-success" :count="tasks.completed.length">
                    <draggable class="kanban-drag" :list="tasks.completed" item-key="id" group="tasks">
                        <template #item="{element}">
                            <div class="kanban-item">
                                <div class="kanban-item-title">
                                    <h6 class="title">{{element.title}}</h6>
                                </div>
                                <div class="kanban-item-text">
                                    <p>{{element.text}}</p>
                                </div>
                            </div>
                        </template>
                    </draggable>
                </KanbanBoardCustom>
            </div>
        </div>
    </Block>
  </Layout>
</template>

<script>

import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import KanbanBoardCustom from '@/components/kanban/KanbanBoardCustom.vue';
import draggable from "vuedraggable";

export default {
    name: 'KanbanBoardCustomPage', 
    components: {
        Layout,
        Block,
        BlockHead,
        BlockHeadContent,
        BlockTitle,
        BlockText,
        KanbanBoardCustom,
        draggable,
    },
    data() {
      return {
            tasks: {
                isOpen: [
                    {
                        id: 'open-01',
                        title: 'NioBoard Design Kit Update',
                        text: 'Update the new UI design for nioboard template with based on feedback'
                    },
                    {
                        id: 'open-02',
                        title: 'Implement Design into Template',
                        text: 'Start implementing new design in Coding nioboard.'
                    },
                    {
                        id: 'open-03',
                        title: 'NioBoard React Version',
                        text: 'Implement new UI design in react version nioboard template as soon as possible.'
                    },
                ],
                inProcess: [
                    {
                        id: 'process-01',
                        title: 'Techyspec Keyword Research',
                        text: 'Keyword recarch for techyspec business profile and there other websites, to improve ranking.'
                    },
                    {
                        id: 'process-02',
                        title: 'Runnergy Website Redesign',
                        text: 'Redesign there old/backdated website new modern and clean look keeping minilisim in mind.'
                    },
                    {
                        id: 'process-03',
                        title: 'Fitness Next Website Design',
                        text: 'Design a awesome website for fitness_next new product launch.'
                    },
                    {
                        id: 'process-04',
                        title: 'Wordlab Android App',
                        text: 'Wordlab Android App with with react native.'
                    },
                ],
                inReview: [
                    {
                        id: 'review-01',
                        title: 'Oberlo Development',
                        text: 'Complete website development for Oberlo limited.'
                    },
                    {
                        id: 'review-02',
                        title: 'IOS app for Getsocio',
                        text: 'Design and develop app for Getsocio IOS.'
                    },
                    {
                        id: 'review-03',
                        title: 'Responsive Changes',
                        text: 'Design and develop app for Getsocio IOS.'
                    }
                ],
                issues: [
                    {
                        id: 'issue-01',
                        title: 'IOS app for Getsocio',
                        text: 'Design and develop app for Getsocio IOS.'
                    },
                    {
                        id: 'issue-02',
                        title: 'Change images dimension',
                        text: 'Website Design: New cards for blog section and profile details'
                    },
                    {
                        id: 'issue-03',
                        title: 'Drag me to In progress section',
                        text: 'New cards for blog section and profile details'
                    },
                ],
                completed: [
                    {
                        id: 'done-01',
                        title: 'Qualitative research planning',
                        text: 'Complete website development for Oberlo limited.'
                    }
                ],
            }
      };
    }
}
</script>
