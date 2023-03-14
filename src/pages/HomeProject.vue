<template>
  <Layout>
    <Row utils="g-gs">
        <Col xxl="7">
            <Row utils="g-gs">
                <Col md="6">
                    <Card full>
                        <CardBody>
                            <div class="d-flex flex-column flex-sm-row-reverse align-items-sm-center justify-content-sm-between">
                                <Pureknob class="nk-chart-project-active" id="active-project" :data="activeProject" />
                                <CardTitle tag="div" class="mb-0 mt-4 mt-sm-0">
                                    <h5 class="title mb-3 mb-xl-5">Active Projects</h5>
                                    <div class="amount h1">284</div>
                                    <div class="d-flex align-items-center smaller flex-wrap">
                                        <div class="change up">
                                            <Icon icon="upword-alt-fill"></Icon> +2.7%
                                        </div>
                                        <span class="text-light"> Projects this month</span>
                                    </div>
                                </CardTitle>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card full>
                        <CardBody>
                            <div class="d-flex flex-column flex-sm-row-reverse align-items-sm-center justify-content-sm-between gx-xl-5">
                                <div class="nk-chart-project-earnings">
                                    <ChartBar id="earningsChart" :data="earningsChart" />
                                </div>
                                <CardTitle tag="div" class="mb-0 mt-4 mt-sm-0">
                                    <h5 class="title mb-3 mb-xl-5">Projects Earnings</h5>
                                    <div class="amount h1">$169</div>
                                    <div class="d-flex align-items-center smaller flex-wrap">
                                        <div class="change up">
                                            <Icon icon="upword-alt-fill"></Icon> 10.5%
                                        </div>
                                        <span class="text-light">From last Week</span>
                                    </div>
                                </CardTitle>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card full>
                        <CardBody class="d-flex flex-column flex-sm-row-reverse align-items-sm-center justify-content-sm-between gx-xl-5">
                            <div class="nk-chart-project-earnings">
                                <ChartLine id="total-clients-chart" :data="totalClientsChart"/>
                            </div>
                            <CardTitle tag="div" class="mb-0 mt-4 mt-sm-0">
                                <h5 class="title mb-3 mb-xl-5">Total Clients</h5>
                                <div class="amount h1">970</div>
                                <div class="d-flex align-items-center smaller flex-wrap">
                                    <div class="change up">
                                        <Icon icon="upword-alt-fill"></Icon> 2%
                                    </div>
                                    <span class="text-light">Than last month</span>
                                </div>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card full>
                        <CardBody>
                            <div class="d-flex flex-column flex-sm-row-reverse align-items-sm-center justify-content-sm-between gx-xl-5">
                                <Pureknob class="nk-chart-project-done" id="total-task-done" :data="totalTaskDone">
                                    <span class="knob-title small text-light">Task Done</span>
                                </Pureknob>
                                <CardTitle tag="div" class="mb-0 mt-4 mt-sm-0">
                                    <h5 class="title mb-3 mb-xl-5">Total Task Done</h5>
                                    <div class="amount h1">768</div>
                                    <div class="d-flex align-items-center smaller flex-wrap">
                                        <div class="change up">
                                            <em class="icon ni ni-upword-alt-fill"></em> 14.2%
                                        </div>
                                        <span class="text-light">From last week</span>
                                    </div>
                                </CardTitle>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>

        <Col xxl="5">
            <Card full class="col-sep">
                <CardBody class="py-2 flex-grow-0">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">Projects Overview</h5>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu size="sm" alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Options</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">7 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">15 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">30 days</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                </CardBody>
                <CardBody class="d-flex flex-column justify-content-between">
                    <Row utils="g-gs text-center">
                        <Col class="col-6" sm="3">
                            <div class="amount h2 mb-0 text-success">946</div>
                            <span class="smaller">Total Projects</span>
                        </Col>
                        <Col class="col-6" sm="3">
                            <div class="amount h2 mb-0 text-primary">280</div>
                            <span class="smaller">Active Projects</span>
                        </Col>
                        <Col class="col-6" sm="3">
                            <div class="amount h2 mb-0 text-secondary">586</div>
                            <span class="smaller">Revenue</span>
                        </Col>
                        <Col class="col-6" sm="3">
                            <div class="amount h2 mb-0 text-warning">9,453</div>
                            <span class="smaller">Working Hours</span>
                        </Col>
                    </Row>
                    <div class="nk-chart-project-overview mt-3">
                        <ChartBar id="projects-overview-chart" :data="projectsOverviewChart"></ChartBar>
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="7">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">Projects Stats</h5>
                        </CardTitle>
                        <CardTools class="d-none d-sm-inline-block">
                            <Button href="#" soft size="sm" variant="secondary">Export Report</Button>
                        </CardTools>
                    </CardTitleGroup>
                </CardBody>
                <div class="table-responsive">
                    <Table middle class="mb-0">
                        <TableHead class="table-light table-head-sm">
                            <tr>
                                <th class="tb-col">
                                    <OverlineTitle tag="span">items</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-xxl">
                                    <OverlineTitle tag="span">budget</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-sm">
                                    <OverlineTitle tag="span">progress</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end  tb-col-xxl">
                                    <OverlineTitle tag="span">asign</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">status</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span"><span class="d-none d-sm-inline-blcok">due</span> date</OverlineTitle>
                                </th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/a.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Create Wireframe</a>
                                            <span class="text smaller">Esther Howard</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$32,400</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">63%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="63"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end  tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/c.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Badge variant="info-soft">In progress</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">07 Sep 2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/b.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Divine Opulence</a>
                                            <span class="text smaller">Jenny Wilson</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$265,816</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">100%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="100"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/c.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Badge variant="success-soft">Completed</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">12 Aug 2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/c.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Charto CRM</a>
                                            <span class="text smaller">Cody Fisher</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$9,538</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">30%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="30"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Badge variant="info-soft">In progress</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">18 Oct 2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup overlap>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/d.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Mountain Trip Kit </a>
                                            <span class="text smaller">Savannah Nguyen</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$12,930</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">0%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="0"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="badge text-bg-warning-soft">Pending</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">25 Jul 2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/e.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Chat Application</a>
                                            <span class="text smaller">Jane Cooper</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$184,384</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">80%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="80"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/c.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Badge variant="info-soft">In progress</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">07 Sep 2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup overlap>
                                        <Media middle shape="circle" size="md">
                                            <Img src="/images/product/f.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <a href="#" class="title">Mountain Trip Kit </a>
                                            <span class="text smaller">Jane Cooper</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <span class="small">$12,930</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <div class="d-flex align-items-center">
                                        <span class="small me-1">36%</span>
                                        <Progress size="sm" class="w-100">
                                            <ProgressBar variant="success" progress="36"></ProgressBar>
                                        </Progress>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end tb-col-xxl">
                                    <MediaGroup overlap>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media middle size="xs" shape="circle" class="media-border border-white">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Badge variant="info-soft">In progress</Badge>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">25 Jul 2022</span>
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>

        <Col xxl="5">
            <Card full>
                <CardBody>
                    <Row utils="g-gs">
                        <Col sm="6">
                            <CardTitle tag="div">
                                <div class="mb-1 small text-light">Next Delivery</div>
                                <h2 class="title">Chat Application</h2>
                            </CardTitle>
                            <MediaGroup class="my-4">
                                <Media middle size="md" shape="circle">
                                    <Img src="/images/avatar/a.jpg" alt=""/>
                                </Media>
                                <MediaText>
                                    <span class="title">Jenny Wilson</span>
                                    <span class="text smaller">Manager</span>
                                </MediaText>
                            </MediaGroup>
                            <p class="small">Flat cartoony illustrations with vivid unblended colors and asymmetrical beautiful purple hair lady</p>
                            <div class="list-group-dotted mt-4 mb-5">
                                <div class="list-group-wrap">
                                    <div class="p-3">
                                        <div class="h5 mb-0">25 Oct 2022</div>
                                        <span class="smaller">Due Date</span>
                                    </div>
                                    <div class="p-3">
                                        <div class="h5 mb-0">$58,642</div>
                                        <span class="smaller">Budget</span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap gap g-3">
                                <div class="gap-col">
                                    <Button href="#" soft size="sm" variant="primary">
                                        <span>View Project</span>
                                        <Icon icon="external-alt" />
                                    </Button>
                                </div>
                                <div class="gap-col">
                                    <MediaGroup overlap>
                                        <Media href="#" middle shape="circle" size="sm" class="media-border border-white" v-nk-tooltip="'Alex Smith'">
                                            <Img src="/images/avatar/a.jpg" alt=""/>
                                        </Media>
                                        <Media href="#" middle shape="circle" size="sm" class="media-border border-white" v-nk-tooltip="'Kevin Martin'">
                                            <Img src="/images/avatar/b.jpg" alt=""/>
                                        </Media>
                                    </MediaGroup>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" utils="text-sm-end">
                            <Img src="/images/product/a-lg.jpg" alt="" class="rounded img-cover"/>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>

        <Col md="6" xxl="4">
            <Card full>
                <CardBody>
                    <CardTitleGroup>
                        <CardTitle tag="div" class="mb-0">
                            <h5 class="title">Avg. Agent Earnings</h5>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu size="sm" alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Options</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">7 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">15 days</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">30 days</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                    <div class="amount-wrap mt-3 mb-4">
                        <div class="amount h2 mb-1">$238,560.93</div>
                        <div class="d-flex align-items-center smaller">
                            <div class="change up">
                                <Icon icon="trend-up" /> +2% 
                            </div>
                            <span>than last Week</span>
                        </div>
                    </div><!-- .amount-wrap -->
                    <div class="list-group-dotted">
                        <div class="list-group-wrap flex-column">
                            <div class="py-1 px-2">
                                <div class="d-flex flex-wrap justify-content-between">
                                    <span class="small">2:30 PM</span>
                                    <span class="small">$5,256.26</span>
                                    <span class="change down small">-129.34</span>
                                </div>
                            </div>
                            <div class="py-1 px-2">
                                <div class="d-flex flex-wrap justify-content-between">
                                    <span class="small">3:55 PM</span>
                                    <span class="small">$5,837.34</span>
                                    <span class="change up small">+539.84</span>
                                </div>
                            </div>
                        </div>
                    </div><!-- .list-group-dotted -->
                    <div class="nk-chart-project-avg-earnings mt-4">
                        <ChartLine id="avg-earnings-chart" :data="avgEarningsChart" />
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col md="6" xxl="4">
            <Card full>
                <CardBody>
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title mb-1">Daily Task</h5>
                            <p class="small">Percentage of product a user demands</p>
                        </CardTitle>
                    </CardTitleGroup>
                    <Schedule class="mt-4">
                        <ScheduleItem symbol="active">
                            <span class="smaller">10:00</span>
                            <div class="h6 mb-0">IOS Dev Team Meeting</div>
                        </ScheduleItem>
                        <ScheduleItem symbol="active">
                            <span class="smaller">12:00</span>
                            <div class="h6 mb-0">Believing is the absence of doubt</div>
                        </ScheduleItem>
                        <ScheduleItem>
                            <span class="smaller">16:00</span>
                            <div class="h6 mb-0">Start with a baseline</div>
                        </ScheduleItem>
                        <ScheduleItem>
                            <span class="smaller">18:00</span>
                            <div class="h6 mb-0">Break through self doubt and fear</div>
                        </ScheduleItem>
                    </Schedule>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="4">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">Members of Employee</h5>
                        </CardTitle>
                        <CardTools class="d-none d-sm-inline-block">
                            <Button href="#" size="sm" soft variant="secondary">
                                <span>Add Member</span>
                            </Button>
                        </CardTools>
                    </CardTitleGroup>
                </CardBody>
                <div class="table-responsive">
                    <Table middle class="mb-0">
                        <TableHead variant="light" small>
                            <tr>
                                <th class="tb-col">
                                    <OverlineTitle tag="span">members</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">tasks</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end tb-col-sm">
                                    <OverlineTitle tag="span">status</OverlineTitle>
                                </th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/a.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Timothy Smith</span>
                                            <span class="text smaller">Product Manager</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">238</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-1" :data="statusChartOne" />
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/b.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Alexis Clarke</span>
                                            <span class="text smaller">React Developer</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">107</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-2" :data="statusChartTwo" />
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/c.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Herbert Stokes</span>
                                            <span class="text smaller">Lead Designer</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">76</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-3" :data="statusChartThree" />
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/d.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Nancy Martino</span>
                                            <span class="text smaller">UI/UX Designer</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">683</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-4" :data="statusChartFour" />
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/e.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Michael Morris</span>
                                            <span class="text smaller">Lead Developer</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">395</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-5" :data="statusChartFive" />
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/b.jpg" alt=""/>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Glen Matney</span>
                                            <span class="text smaller">Lead Designer</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">46</span>
                                </td>
                                <td class="tb-col tb-col-end tb-col-sm">
                                    <Pureknob id="status-chart-6" :data="statusChartSix" />
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>

    </Row>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/Index.vue';
import Row from '@/components/layout/Row.vue';
import Col from '@/components/layout/Col.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import Pureknob from '@/components/knob/Pureknob.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import Icon from '@/components/icon/Icon.vue';
import Progress from '@/components/uielements/progress/Progress.vue';
import ProgressBar from '@/components/uielements/progress/ProgressBar.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTools from '@/components/uielements/card/CardTools.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Button from '@/components/uielements/button/Button.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import MediaText from '@/components/media/MediaText.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import Media from '@/components/media/Media.vue';
import Img from '@/components/img/Img.vue';
import Schedule from '@/components/schedule/Schedule.vue';
import ScheduleItem from '@/components/schedule/ScheduleItem.vue';

export default {
  name: 'HomePageProject',
  components: {
    Layout,
    Row,
    Col,
    Card,
    CardBody,
    Pureknob,
    CardTitle,
    ChartBar,
    Icon,
    Progress,
    ProgressBar,
    ChartLine,
    CardTitleGroup,
    CardTools,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    DropdownHeader,
    Button,
    Table,
    TableHead,
    TableBody,
    OverlineTitle,
    MediaGroup,
    MediaText,
    Badge,
    Media,
    Img,
    Schedule,
    ScheduleItem
},
  data(){
    return {
        activeProject: {
            readonly: true, 
            size: 110,
            value: 73,
            angleOffset: 0.4,
            angleStart: 1,
            angleEnd: 1,
            colorFg: this.$Colors.primary,
            trackWidth: "0.15"
        },
        earningsChart: {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            yAxis: false,
            xGridColor: this.$Colors.white,
            yGridColor: this.$Colors.white,
            xGridBorderColor: this.$Colors.white,
            yGridBorderColor: this.$Colors.white,
            barThickness: 6,
            datasets: [
                {
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: this.$Colors.info,
                    backgroundColor: this.$Colors.info,
                    hoverBackgroundColor: this.$Colors.info,
                    label: "Earnings",
                    data: [700, 780, 570, 870, 670, 910, 770]
                },
            ]
        },
        totalClientsChart: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            yAxis: false,
            xAxis: false,
            maxTicksLimit: 4,
            datasets: [
                {
                    tension:.4,
                    label: "Total Clients",
                    borderColor: this.$Colors.success,
                    backgroundGradient: this.$Colors.success,
                    borderWidth: 4,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: this.$Colors.success,
                    borderCapStyle: "round",
                    data: [38, 40, 23, 80, 70, 110]
                }
            ]
        },
        totalTaskDone: {
            size: 136,
            value: 65,
            angleOffset: -0.5,
            angleStart: 0.7,
            angleEnd: 0.7,
            colorFg: this.$Colors.pink,
            trackWidth: "0.15"
        },
        projectsOverviewChart: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            stacked: false,
            ticksValue: 'k',
            borderDash: [8, 4],
            xGridColor: this.$Colors.white,
            xGridBorderColor: this.$Colors.white,
            yGridBorderColor: this.$Colors.white,
            barThickness: 10,
            datasets: [
                {
                    borderColor: this.$Colors.primary,
                    backgroundColor: this.$Colors.primary,
                    borderWidth: 1,
                    label: "Total Income",
                    data: [120, 160, 95, 105, 98, 99, 167, 140, 155, 267, 237, 250],
                    order: 1
                },
                {
                    borderColor: this.$Colors.warning,
                    backgroundColor: this.$Colors.warning,
                    borderWidth: 2,
                    label: "Total Profit",
                    data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
                    type: 'line',
                    order: 0
                }
            ]
        },
        avgEarningsChart: {
            labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan","13 Jan", "14 Jan", "15 Jan"],
            ticksValue: 'k',
            borderDash: [8, 4],
            xAxis: false,
            yGridBorderColor: this.$Colors.white,
            datasets: [
                {
                    tension: .4,
                    label: "Avg Earnings",
                    borderColor: this.$Colors.success,
                    backgroundGradient: this.$Colors.success,
                    pointBackgroundColor: 'transparent',
                    borderWidth: 2,
                    pointBorderColor: 'transparent',
                    pointHoverBackgroundColor: this.$Colors.success,
                    data: [55, 105, 100, 115, 150, 145, 190, 150, 200, 190, 230, 200, 256, 234, 300]
                }
            ]
        },
        statusChartOne: {
            size: 24, 
            value: 60, 
            trackWidth: 0.3, 
            angleOffset: 0.4, 
            hideValue: true, 
            colorFg: this.$Colors.success
        },
        statusChartTwo: {
            size: 24, 
            value: 42, 
            trackWidth: 0.3, 
            hideValue: true, 
            angleOffset: 0.4, 
            colorFg: this.$Colors.info
        },
        statusChartThree: {
            size: 24, 
            value: 50, 
            trackWidth: 0.3, 
            hideValue: true, 
            angleOffset: 0.4, 
            colorFg: this.$Colors.purple
        },
        statusChartFour: {
            size: 24, 
            value: 34, 
            trackWidth: 0.3, 
            hideValue: true, 
            angleOffset: 0.4, 
            colorFg: this.$Colors.warning
        },
        statusChartFive: {
            size: 24, 
            value: 26, 
            trackWidth: 0.3, 
            hideValue: true, 
            angleOffset: 0.4, 
            colorFg: this.$Colors.danger
        },
        statusChartSix: {
            size: 24, 
            value: 46, 
            trackWidth: 0.3, 
            hideValue: true, 
            angleOffset: 0.4, 
            colorFg: this.$Colors.primary
        },
    }
  }
}
</script>
