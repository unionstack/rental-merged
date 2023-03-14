<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">Sweetalert2</BlockTitle>
        <BlockText>Inside Nioboard, we integrated the <a href="https://sweetalert2.github.io/" target="_blank">SweetAlert2</a> which is beautiful, responsive, highly customizable JavaScript's popup boxes.</BlockText>
        <BlockText>You can see full uses documentation details from <a href="https://sweetalert2.github.io/" target="_blank">here</a>.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead>
        <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3 d-flex flex-wrap">
              <li><Button href="#" variant="primary" @click="alertDefault">Default</Button></li>
              <li><Button href="#" variant="success" @click="alertSuccess">Success</Button></li>
              <li><Button href="#" variant="info" @click="alertInfo">Info</Button></li>
              <li><Button href="#" variant="warning" @click="alertWarning">Warning</Button></li>
              <li><Button href="#" variant="danger" @click="alertError">Error</Button></li>
              <li><Button href="#" variant="light" @click="alertQuestion">Question</Button></li>
          </ul>
        </CardBody>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Advanced Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <ul class="gap g-3 d-flex flex-wrap">
              <li><Button href="#" variant="primary" @click="alertPositioned">Positioned dialog</Button></li>
              <li><Button href="#" variant="primary" @click="alertConfirm">Confirm button</Button></li>
              <li><Button href="#" variant="primary" @click="alertAutoClose">Auto close timer</Button></li>
              <li><Button href="#" variant="primary" @click="alertAjaxRequest">Ajax request</Button></li>
          </ul>
        </CardBody>
      </Card>
    </Block>
  </Layout>
</template>

<script>
import Swal from 'sweetalert2/src/sweetalert2.js';

import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Button from '@/components/uielements/button/Button.vue';

export default {
  name: 'SweetalertPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    Button,
  },
  methods: {
    alertDefault() {
      Swal.fire({
        title: 'A Simple sweet alert Content'
      });
    },
    alertSuccess() {
      Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: "You clicked the button!",
      });
    },
    alertInfo() {
      Swal.fire({
        icon: 'info',
        title: 'Good job!',
        text: "You clicked the button!",
      });
    },
    alertWarning() {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
      });
    },
    alertError() {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    },
    alertQuestion() {
      Swal.fire({
        icon: 'question',
        text:'The Internet?',
        title: 'That thing is still around?',
      });
    },
    alertPositioned() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    },
    alertConfirm() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if(result.value) {
            Swal.fire('Deleted', 'You successfully deleted this file', 'success')
          } else {
            Swal.fire('Cancelled', 'Your file is still intact', 'info')
          }
      })
    },
    alertAutoClose(){
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
      });
    },
    alertAjaxRequest(){
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (name) => {
                return fetch(`//api.github.com/users/${name}`)
                .then(response => {
                    if (!response.ok) {
                    throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.name}'s avatar`,
                    imageUrl: result.value.avatar_url
                })
            }
        })

    },

  },
}
</script>
