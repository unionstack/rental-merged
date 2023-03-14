<template>
    <OffcanvasContainer position="end" size="lg" id="notificationOffcanvas">
        <OffcanvasHeader border="bottom" class="border-light">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">Recent Notification</h5>
            <ButtonClose dismiss="offcanvas" aria-label="Close"></ButtonClose>
        </OffcanvasHeader>
        <OffcanvasBody data-simplebar>
            <Schedule>
                <ScheduleItem symbol="active">
                    <span class="smaller">2:12 PM</span>
                    <div class="h6">Added 3 New Images</div>
                    <List class="d-flex flex-wrap gap g-2 py-2">
                        <ListItem>
                            <Media size="xxl">
                                <Img src="/images/product/a.jpg" alt="" thumbnail/>
                            </Media>
                        </ListItem>
                        <ListItem>
                            <Media size="xxl">
                                <Img src="/images/product/b.jpg" alt="" thumbnail/>
                            </Media>
                        </ListItem>
                        <ListItem>
                            <Media size="xxl">
                                <Img src="/images/product/c.jpg" alt="" thumbnail/>
                            </Media>
                        </ListItem>
                    </List>
                </ScheduleItem>

                <ScheduleItem symbol="active">
                    <span class="smaller">4:23 PM</span>
                    <div class="h6">Invitation for creative designs pattern</div>
                </ScheduleItem>
                <ScheduleItem symbol="active" contentClass="nk-schedule-content-no-border">
                    <span class="smaller">10:30 PM</span>
                    <div class="h6">Task report - uploaded weekly reports</div>
                    <List tag="div" class="list-group-dotted mt-3">
                        <ListItem tag="div" class="list-group-wrap">
                            <div class="p-3">
                                <MediaGroup>
                                    <Media class="rounded-0">
                                        <Img src="/images/icon/file-type-pdf.svg" alt=""/>
                                    </Media>
                                    <MediaText class="ms-1">
                                        <a href="#" class="title">Modern Designs Pattern</a>
                                        <span class="text smaller fw-semibold text-muted">1.6.mb</span>
                                    </MediaText>
                                </MediaGroup>
                            </div>
                            <div class="p-3">
                                <MediaGroup>
                                    <Media class="rounded-0">
                                        <Img src="/images/icon/file-type-doc.svg" alt=""/>
                                    </Media>
                                    <MediaText class="ms-1">
                                        <a href="#" class="title">Cpanel Upload Guidelines</a>
                                        <span class="text smaller fw-semibold text-muted">18kb</span>
                                    </MediaText>
                                </MediaGroup>
                            </div>
                            <div class="p-3">
                                <MediaGroup>
                                    <Media class="rounded-0">
                                        <Img src="/images/icon/file-type-code.svg" alt=""/>
                                    </Media>
                                    <MediaText class="ms-1">
                                        <a href="#" class="title">Weekly Finance Reports</a>
                                        <span class="text smaller fw-semibold text-muted">10mb</span>
                                    </MediaText>
                                </MediaGroup>
                            </div>
                        </ListItem>
                    </List>
                </ScheduleItem>
                <ScheduleItem symbol="active">
                    <span class="smaller">3:23 PM</span>
                    <div class="h6">Assigned you to new database design project</div>
                </ScheduleItem>
                <ScheduleItem symbol="active" contentClass="nk-schedule-content-no-border flex-grow-1">
                    <span class="smaller">5:05 PM</span>
                    <div class="h6">You have received a new order</div>
                    <Alert class="mt-2" variant="info">
                        <div class="d-flex">
                            <Icon class="opacity-75" size="lg" icon="file-code" />
                            <div class="ms-2 d-flex flex-wrap flex-grow-1 justify-content-between">
                                <div>
                                    <h6 class="alert-heading mb-0 fw-semibold">Business Template - UI/UX design</h6>
                                    <span class="smaller d-block my-1">Shared information with your team to understand and contribute to your project.</span>
                                </div>
                                <div class="d-block mt-1">
                                    <Button href="#" size="md" variant="info">
                                        <Icon icon="download" />
                                        <span>Download</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Alert>
                </ScheduleItem>
                <ScheduleItem symbol="active">
                    <span class="smaller">2:45 PM</span>
                    <div class="h6">Project status updated successfully</div>
                </ScheduleItem>
            </Schedule>
        </OffcanvasBody>
    </OffcanvasContainer>
</template>

<script>
// import components
import OffcanvasContainer from '@/components/uielements/offcanvas/OffcanvasContainer.vue';
import OffcanvasHeader from '@/components/uielements/offcanvas/OffcanvasHeader.vue';
import OffcanvasBody from '@/components/uielements/offcanvas/OffcanvasBody.vue';
import Schedule from '@/components/schedule/Schedule.vue';
import ScheduleItem from '@/components/schedule/ScheduleItem.vue';
import Media from '@/components/media/Media.vue';
import Img from '@/components/img/Img.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import Alert from '@/components/uielements/alert/Alert.vue';
import Icon from '@/components/icon/Icon.vue';
import Button from '@/components/uielements/button/Button.vue';
import ButtonClose from '@/components/uielements/button-close/ButtonClose.vue';

export default {
    name: 'NotificationOffcanvas',
    components: {
        OffcanvasContainer,
        OffcanvasHeader,
        OffcanvasBody,
        Schedule,
        ScheduleItem,
        Media,
        Img,
        List,
        ListItem,
        MediaGroup,
        MediaText,
        Alert,
        Icon,
        Button,
        ButtonClose
    }
}
</script>
