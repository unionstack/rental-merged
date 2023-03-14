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
      <BlockHead>
        <BlockTitle>Basic Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="kanban-container">
            <KanbanBoard title="In Process">
              <draggable class="kanban-drag" :list="tasks.inProcess" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
            <KanbanBoard title="Working">
              <draggable class="kanban-drag" :list="tasks.working" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
            <KanbanBoard title="Done">
              <draggable class="kanban-drag" :list="tasks.completed" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
          </div>
        </CardBody>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Colored Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="kanban-container kanban-colored">
            <KanbanBoard title="In Process" variant="kanban-primary">
              <draggable class="kanban-drag" :list="tasksTwo.inProcess" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item kanban-primary-light">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
            <KanbanBoard title="Working" variant="kanban-warning">
              <draggable class="kanban-drag" :list="tasksTwo.working" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item kanban-warning-light">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
            <KanbanBoard title="Done" variant="kanban-success">
              <draggable class="kanban-drag" :list="tasksTwo.completed" item-key="id" group="tasks">
                  <template #item="{element}">
                      <div class="kanban-item kanban-success-light">
                          <div class="kanban-item-text">
                              <p>{{element}}</p>
                          </div>
                      </div>
                  </template>
              </draggable>
            </KanbanBoard>
          </div>
        </CardBody>
      </Card>
    </Block>
  </Layout>
</template>

<script>

import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import KanbanBoard from '@/components/kanban/KanbanBoard.vue';

import draggable from "vuedraggable";

export default {
  name: 'KanbanBoardPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    KanbanBoard,
    draggable
  },
  data() {
      return {
          tasks: {
            inProcess: ['Plan marketing campaign', 'Collect design assets'],
            working: ['Do Something', 'Run?'],
            completed: ['All right', 'Ok!'],
          },
          tasksTwo: {
            inProcess: ['Plan marketing campaign', 'Collect design assets'],
            working: ['Do Something', 'Run?'],
            completed: ['All right', 'Ok!'],
          },
      };
    },
}
</script>
