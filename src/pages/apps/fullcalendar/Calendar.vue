<!-- eslint-disable no-unused-vars -->
<template>
    <Layout content="container">
        <BlockHead class="nk-page-head">
            <BlockHeadBetween class="flex-wrap gap g-2">
                <BlockHeadContent>
                    <BlockTitle tag="h1">Calendar</BlockTitle>
                    <BlockText>Calendar build with JavaScript <a href="https://fullcalendar.io/" target="_blank">FullCalendar</a> Plugin. For more info see <a href="https://fullcalendar.io" target="_blank">the official site</a>.
                    </BlockText>
                </BlockHeadContent>
                <BlockHeadContent class="nk-block-head-tools">
                    <ul class="d-flex gap g-3 justify-content-center">
                        <li>
                            <Button type="button" variant="primary" id="addEvent" data-bs-toggle="modal" data-bs-target="#eventFormModal">
                                <Icon icon="plus"></Icon><span>Add Event</span>
                            </Button>
                        </li>
                    </ul>
                </BlockHeadContent>
            </BlockHeadBetween>
        </BlockHead>

        <Block>
            <Card>
                <CardBody>
                    <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
                </CardBody>
            </Card>
        </Block>
    </Layout>
  
    <ModalContainer animation="fade" tabindex="-1" id="eventPreviewModal">
        <ModalDialog>
            <ModalContent>
                <ModalHeader>
                    <h4 class="modal-title event-title">{{previewTitle}}</h4>
                    <ButtonClose data-bs-dismiss="modal"></ButtonClose>
                </ModalHeader>
                <ModalBody>
                    <div class="row g-3">
                        <div class="col-6">
                            <h6 class="overline-title">Start Time</h6>
                            <p class="event-start small">{{previewTimeStart}}</p>
                        </div>
                        <div class="col-6">
                            <h6 class="overline-title">End Time</h6>
                            <p class="event-end small">{{previewTimeEnd}}</p>
                        </div>
                        <div class="col-12">
                            <h6 class="overline-title">Event Details</h6>
                            <p class="event-description small">{{previewDescription}}</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" variant="danger" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#eventDeleteModal">Delete</Button>
                    <Button type="button" variant="primary" data-bs-toggle="modal" data-bs-dismiss="modal" id="editEvent" data-bs-target="#eventFormModal">Edit Event</Button>
                </ModalFooter>
            </ModalContent>
        </ModalDialog>
    </ModalContainer>

    <ModalContainer animation="fade" tabindex="-1" id="eventDeleteModal">
        <ModalDialog>
            <ModalContent>
                <ModalBody class="p-5 text-center">
                    <Media middle size="xxl" shape="circle" class="mb-4" variant="danger">
                        <Icon icon="cross"></Icon>
                    </Media>
                    <h3>Are You Sure?</h3>
                    <p class="small">This event data will be removed permanently.</p>
                    <ul class="d-flex gap g-3 justify-content-center pt-1">
                        <li><Button type="button" variant="success" id="deleteEvent" data-bs-dismiss="modal">Yes Delete it!</Button></li>
                        <li><Button type="button" variant="danger" soft data-bs-dismiss="modal">Cancel</Button></li>
                    </ul>
                </ModalBody>
                <ButtonClose data-bs-dismiss="modal" class="position-absolute top-0 end-0 p-3"></ButtonClose>
            </ModalContent>
        </ModalDialog>
    </ModalContainer>

    <ModalContainer animation="fade" tabindex="-1" id="eventFormModal">
        <ModalDialog size="lg">
            <ModalContent>
                <ModalHeader>
                    <h4 class="modal-title fc-form-title"></h4>
                    <ButtonClose data-bs-dismiss="modal"></ButtonClose>
                </ModalHeader>
                <ModalBody>
                    <div class="row g-gs">
                        <div class="col-12">
                            <div class="form-group">
                                <FormLabel for="eventTitle">Event Title</FormLabel>
                                <FormInputWrap>
                                    <FormInput type="text" id="eventTitle" placeholder="Event Title" />
                                </FormInputWrap>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <FormLabel for="eventStartDate">Event Starts</FormLabel>
                                <div class="row g-2">
                                    <div class="col-7">
                                        <FormInputWrap>
                                            <FormInput type="text" class="fc-event-datepicker" id="eventStartDate" autocomplete="off" placeholder="yyyy-mm-dd" />
                                        </FormInputWrap>
                                    </div>
                                    <div class="col-5">
                                        <FormInputWrap>
                                            <FormInput type="text" class="fc-event-timepicker" id="eventStartTime" autocomplete="off" placeholder="hh-mm" />
                                        </FormInputWrap>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <FormLabel for="eventEndDate">Event Ends</FormLabel>
                                <div class="row g-2">
                                    <div class="col-7">
                                        <FormInputWrap>
                                            <FormInput type="text" class="fc-event-datepicker" id="eventEndDate" autocomplete="off" placeholder="yyyy-mm-dd" />
                                        </FormInputWrap>
                                    </div>
                                    <div class="col-5">
                                        <FormInputWrap>
                                            <FormInput type="text" class="fc-event-timepicker" id="eventEndTime" autocomplete="off" placeholder="hh-mm" />
                                        </FormInputWrap>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <FormLabel for="eventDescription">Event Description</FormLabel>
                                <FormInputWrap>
                                    <FormTextarea id="eventDescription" placeholder="Event Description"></FormTextarea>
                                </FormInputWrap>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group fc-category-select">
                                <FormLabel for="eventCategory">Event Category</FormLabel>
                                <FormInputWrap>
                                    <FormSelect id="eventCategory"></FormSelect>
                                </FormInputWrap>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" variant="danger" data-bs-dismiss="modal">Discard</Button>
                    <Button type="button" variant="primary" data-bs-dismiss="modal" id="eventAdd">Add Event</Button>
                    <Button type="button" variant="primary" data-bs-dismiss="modal" id="eventUpdate">Update Event</Button>
                </ModalFooter>
            </ModalContent>
        </ModalDialog>
    </ModalContainer>

</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadBetween, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Button from '@/components/uielements/button/Button.vue';
import Icon from '@/components/icon/Icon.vue';
import Media from '@/components/media/Media.vue';
import ModalContainer from '@/components/uielements/modal/ModalContainer.vue';
import ModalDialog from '@/components/uielements/modal/ModalDialog.vue';
import ModalContent from '@/components/uielements/modal/ModalContent.vue';
import ModalHeader from '@/components/uielements/modal/ModalHeader.vue';
import ModalBody from '@/components/uielements/modal/ModalBody.vue';
import ModalFooter from '@/components/uielements/modal/ModalFooter.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';
import FormLabel from '@/components/forms/form-label/FormLabel.vue';
import FormInput from '@/components/forms/input/FormInput.vue';
import FormInputWrap from '@/components/forms/input/FormInputWrap.vue';
import FormTextarea from '@/components/forms/textarea/FormTextarea.vue';
import FormSelect from '@/components/forms/select/FormSelect.vue'

// fullcalendar
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import { Popover, Modal} from 'bootstrap';
import Choices from'choices.js'
import { Datepicker } from 'vanillajs-datepicker';
import toTwelve from '@/utilities/toTwelve';
import timePicker from '@/utilities/timePicker';

export default {
  name: 'CalendarPage', 
  components: {
        Layout,
        Block,
        BlockHead,
        BlockHeadBetween,
        BlockHeadContent, 
        BlockTitle, 
        BlockText,
        Card,
        CardBody,
        ModalContainer,
        ModalDialog,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalFooter,
        ButtonClose,
        Button,
        Icon,
        FullCalendar,
        Media,
        FormInput,
        FormInputWrap,
        FormLabel,
        FormTextarea,
        FormSelect
  },
  data() {
      return {
        selectedEventId:'',
        // preview modal content
        previewTitle: '',
        previewTimeStart: '',
        previewTimeEnd: '',
        previewDescription: '',
        calendarOptions: {
            plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin, listPlugin ],
            timeZone: 'UTC',
            themeSystem: 'bootstrap',
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'title prev,next',
                center: null,
                right: 'today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            height: 800,
            contentHeight: 780,
            aspectRatio: 3,
            editable: true,
            droppable: true,
            views: {
                dayGridMonth: {
                    dayMaxEventRows: 2,
                }
            },
            nowIndicator: true,
            eventMouseEnter: this.handleMouseEnter,
            eventMouseLeave: this.removePopover,    
            eventDragStart: this.removePopover,
            eventClick: this.handleEventClick,
            // events data goes here by created hooks
            events: []
        },
      }
  },
  methods: {
    // remove event
    removePopover() {
        let fcPopover = document.querySelectorAll('.event-popover');
        fcPopover.forEach(elem => {
            elem.remove();
        })
    },
    // when enter mouse on event this shows popover with each event detail
    handleMouseEnter(item){
      let elem = item.el, 
      title = item.event._def.title, 
      content = item.event._def.extendedProps.description;
      elem;
      if(content){
        const popover = new Popover(item.el, {
            template: '<div class="popover event-popover"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            title: title,
            content: content ? content : '',
            placement: 'top',
        })
        popover.show();
      }
    },
    handleEventClick(item) {
      let title = item.event._def.title;
      let description = item.event._def.extendedProps.description;
      let start = item.event._instance.range.start;
      let startDate = start.getFullYear() + '-' + String(start.getMonth() + 1).padStart(2, '0') + '-' + String(start.getDate()).padStart(2, '0');
      startDate;

      let startDateAlt = String(start.getDate()).padStart(2, '0') + ' ' + this.$monthList[start.getMonth()] + ' ' + start.getFullYear()
      let startTime = start.toUTCString().split(' '); startTime = startTime[startTime.length-2]; startTime = (startTime == '00:00:00') ? '' : startTime;
      let end = item.event._instance.range.end;
      let endDate = end.getFullYear() + '-' + String(end.getMonth() + 1).padStart(2, '0') + '-' + String(end.getDate()).padStart(2, '0');
      endDate;

      let endDateAlt = String(end.getDate()).padStart(2, '0') + ' ' + this.$monthList[end.getMonth()] + ' ' + end.getFullYear()
      let endTime = end.toUTCString().split(' '); endTime = endTime[endTime.length-2]; endTime = (endTime == '00:00:00') ? '' : endTime;
      let className = item.event._def.ui.classNames[0].slice(3);
      className;
      let eventId = item.event._def.publicId;

      // show preview modal
      this.eventPreviewModal();

      this.selectedEventId = eventId;
      this.previewTitle = title;
      this.previewTimeStart = `${startDateAlt}${startTime ? ' - ' + toTwelve(startTime) : ''}`;
      this.previewTimeEnd = `${endDateAlt}${endTime ? ' - ' + toTwelve(endTime) : ''}`;
      this.previewDescription = description;

    },
    eventPreviewModal(){
        let eventPreviewModal = document.getElementById('eventPreviewModal');
        let previewModal = new Modal(eventPreviewModal, {
            keyboard: false
        });
        previewModal.show();
    },
    eventFormModal(){
        let eventFormModal = document.getElementById('eventFormModal');
        let formModal = new Modal(eventFormModal, {
            keyboard: false
        });

        formModal.show();
    },
    eventDelete(){
        let calendarApi = this.$refs.fullCalendar.getApi()
        calendarApi.getEventById(this.selectedEventId).remove();
    },
    selectedEvent(){
        let calendarApi = this.$refs.fullCalendar.getApi()
        return calendarApi.getEventById(this.selectedEventId);
    },
  },
  mounted(){
    let deleteEvent = document.getElementById('deleteEvent');
    let editEvent = document.getElementById('editEvent');
    let addEvent = document.getElementById('addEvent');
    let eventFormModal = document.getElementById('eventFormModal');
    let formTitle = eventFormModal.querySelector('.fc-form-title');
    let formInputTitle = eventFormModal.querySelector('#eventTitle');
    let formInputDescription = eventFormModal.querySelector('#eventDescription');
    let formInputCategory = eventFormModal.querySelector('#eventCategory');
    let formInputStartDate = eventFormModal.querySelector('#eventStartDate');
    let formInputStartTime = eventFormModal.querySelector('#eventStartTime');
    let formInputEndDate = eventFormModal.querySelector('#eventEndDate');
    let formInputEndTime = eventFormModal.querySelector('#eventEndTime');
    let formEventAdd = eventFormModal.querySelector('#eventAdd');
    let formEventUpdate = eventFormModal.querySelector('#eventUpdate');

    // event category
    let eventCategorySelect = document.getElementById('eventCategory');
    const choicesCat = new Choices(eventCategorySelect, {
        silent: true,
        allowHTML: false,
        searchEnabled: true,
        placeholder: true,
        placeholderValue: null,
        searchPlaceholderValue: 'Search',
        shouldSort: false,
        choices: [
            { value: 'event-primary', label: 'Company' },
            { value: 'event-success', label: 'Seminars' },
            { value: 'event-info', label: 'Conferences' },
            { value: 'event-warning', label: 'Meeting' },
            { value: 'event-danger', label: 'Business dinners' },
            { value: 'event-dark', label: 'Private' },
            { value: 'event-primary-soft', label: 'Auctions' },
            { value: 'event-success-soft', label: 'Networking events' },
            { value: 'event-info-soft', label: 'Product launches' },
            { value: 'event-warning-soft', label: 'Fundrising' },
            { value: 'event-danger-soft', label: 'Sponsored' },
            { value: 'event-dark-soft', label: 'Sports events' },
        ],
        callbackOnCreateTemplates: function(template) {
            return{
                item: ({ classNames }, data) => {
                    return template(`
                    <div class="${classNames.item} ${
                    data.highlighted
                        ? classNames.highlightedState
                        : classNames.itemSelectable
                    } ${
                    data.placeholder ? classNames.placeholder : ''
                    }" data-item data-id="${data.id}" data-value="${data.value}" ${
                    data.active ? 'aria-selected="true"' : ''
                    } ${data.disabled ? 'aria-disabled="true"' : ''}>
                        <span class="fc-select-dot fc-${data.value}"></span> ${data.label}
                    </div>
                    `);
                },
                choice: ({ classNames }, data) => {
                    return template(`
                    <div class="${classNames.item} ${classNames.itemChoice} ${
                    data.disabled ? classNames.itemDisabled : classNames.itemSelectable
                    }" data-select-text="${this.config.itemSelectText}" data-choice ${
                    data.disabled
                        ? 'data-choice-disabled aria-disabled="true"'
                        : 'data-choice-selectable'
                    } data-id="${data.id}" data-value="${data.value}" ${
                    data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
                    }>
                        <span class="fc-select-dot fc-${data.value}"></span> ${data.label}
                    </div>
                    `);
                },
            }
        }
    });

    // date picker
    let DatepickerElem = document.querySelectorAll('.fc-event-datepicker');
    DatepickerElem.forEach(item => {
        new Datepicker(item,{
            buttonClass: 'btn',
            autohide:true,
            format: 'yyyy-mm-dd'
        });
    })
    // timepicker
    let TimepickerElem = document.querySelectorAll('.fc-event-timepicker');
    TimepickerElem.forEach(item => {
        timePicker(item,{
            format: 24,
            interval: 30,
            start: '00:00',
            end: '23:30',
        });
   })

    let calendarApi = this.$refs.fullCalendar.getApi();

    //delete event
    deleteEvent.addEventListener('click', (e) =>{
        e.preventDefault();
        this.eventDelete();
    });

    editEvent.addEventListener('click', (e) =>{
        e.preventDefault();
        let selectedEvent = this.selectedEvent();
        let start = selectedEvent._instance.range.start;
        let startDate = start.getFullYear() + '-' + String(start.getMonth() + 1).padStart(2, '0') + '-' + String(start.getDate()).padStart(2, '0');
        let startTime = start.toUTCString().split(' '); startTime = startTime[startTime.length-2]; startTime = (startTime == '00:00:00') ? '' : startTime;
        let end = selectedEvent._instance.range.end;
        let endDate = end.getFullYear() + '-' + String(end.getMonth() + 1).padStart(2, '0') + '-' + String(end.getDate()).padStart(2, '0');
        let endTime = end.toUTCString().split(' '); endTime = endTime[endTime.length-2]; endTime = (endTime == '00:00:00') ? '' : endTime;

        // this.editUpdate();
        formTitle.innerText = 'Edit Event';
        formInputTitle.value = selectedEvent._def.title;
        formInputDescription.value = selectedEvent._def.extendedProps.description ? selectedEvent._def.extendedProps.description : '';
        formInputStartDate.value = startDate;
        formInputStartTime.value = startTime;
        formInputEndDate.value = endDate;
        formInputEndTime.value = endTime;
        choicesCat.setChoiceByValue(selectedEvent._def.ui.classNames[0].slice(3));
        formEventAdd.style.display = 'none';
        formEventUpdate.style.display = 'block';
    });

    //on update button click
    formEventUpdate.addEventListener('click', (e) =>{
        e.preventDefault();
        let selectedEvent = this.selectedEvent();
        selectedEvent.remove();
        calendarApi.addEvent({
            id: this.selectedEventId,
            title: formInputTitle.value,
            start: formInputStartDate.value + (formInputStartTime.value ? 'T' + formInputStartTime.value + 'Z' : ''),
            end: formInputEndDate.value + (formInputEndTime.value ? 'T' + formInputEndTime.value + 'Z' : ''),
            className: `fc-${formInputCategory.value}`,
            description: formInputDescription.value,
        });
    });

    addEvent.addEventListener('click', (e) => {
        e.preventDefault();
        formTitle.innerText = 'Add Event';
        formInputTitle.value = '';
        formInputDescription.value = '';
        formInputStartDate.value = '';
        formInputStartTime.value = '';
        formInputEndDate.value = '';
        formInputEndTime.value = '';
        choicesCat.setChoiceByValue('event-primary');
        formEventAdd.style.display = 'block';
        formEventUpdate.style.display = 'none';
    });

    //on add button click
    formEventAdd.addEventListener('click', (e) => {
        e.preventDefault();
        calendarApi.addEvent({
            id: `added-event-id-${Math.floor(Math.random()*9999999)}`,
            title: formInputTitle.value,
            start: formInputStartDate.value + (formInputStartTime.value ? 'T' + formInputStartTime.value + 'Z' : ''),
            end: formInputEndDate.value + (formInputEndTime.value ? 'T' + formInputEndTime.value + 'Z' : ''),
            className: `fc-${formInputCategory.value}`,
            description: formInputDescription.value,
        });
    })
  },
  created(){
    // events data
    this.calendarOptions.events = [
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Reader will be distracted',
            start: this.$currentMonth + '-03T13:30:00',
            className: "fc-event-danger",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden. 1",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Rabfov va hezow.',
            start: this.$currentMonth + '-14T13:30:00',
            end: this.$currentMonth + '-14',
            className: "fc-event-success",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'The leap into electronic',
            start: this.$currentMonth + '-05',
            end: this.$currentMonth + '-06',
            className: "fc-event-primary",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Lorem Ipsum passage - Product Release',
            start: this.$currentMonth + '-02',
            end: this.$currentMonth + '-04',
            className: "fc-event-primary",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            title: 'Gibmuza viib hepobe.',
            start: this.$currentMonth + '-12',
            end: this.$currentMonth + '-10',
            className: "fc-event-dark-soft",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Jidehse gegoj fupelone.',
            start: this.$currentMonth + '-07T16:00:00',
            className: "fc-event-danger-soft",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Ke uzipiz zip.',
            start: this.$currentMonth + '-16T16:00:00',
            end: this.$currentMonth + '-14',
            className: "fc-event-info-soft",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Piece of classical Latin literature',
            start: this.$today,
            end: this.$today + '-01',
            className: "fc-event-primary",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Nogok kewwib ezidbi.',
            start: this.$today + 'T10:00:00',
            className: "fc-event-info",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Mifebi ik cumean.',
            start: this.$today + 'T14:30:00',
            className: "fc-event-warning-soft",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Play Time',
            start: this.$today + 'T17:30:00',
            className: "fc-event-info",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'Rujfogve kabwih haznojuf.',
            start: this.$yesterday + 'T05:00:00',
            className: "fc-event-danger",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        },
        {
            id: 'default-event-id-' + Math.floor(Math.random()*9999999),
            title: 'simply dummy text of the printing',
            start: this.$yesterday + 'T07:00:00',
            className: "fc-event-primary-soft",
            description: "Use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
        }
    ]

  },
}
</script>


<style>
.fc-daygrid-event-dot {
    border: 3px solid currentColor !important;
}
</style>