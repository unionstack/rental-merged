<template>
  <Layout>
    <Row utils="g-gs">
        <Col xxl="6">
            <Card full>
                <CardBody>
                    <CardTitleGroup class="mb-4 align-items-start">
                        <CardTitle tag="div">
                            <h4 class="title mb-0">Highlights</h4>
                            <span class="small">Latest social statistics</span>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Actions</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Ticket</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Customer</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Contact</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                    <Row utils="g-gs">
                        <Col sm="6" md="4" lg="6" xl="4">
                            <BoxDotted full>
                                <Icon size="lg" variant="primary" icon="chart-up" />
                                <h5 class="title mt-2 mb-3">Avg. Client Rating</h5>
                                <div class="amount h3">7.8/10</div>
                                <div class="d-flex align-items-center smaller flex-wrap">
                                    <div class="change up">
                                        <Icon icon="trend-up" /> +2.5%
                                    </div>
                                    <span>than last Week</span>
                                </div>
                            </BoxDotted>
                        </Col>
                        <Col sm="6" md="4" lg="6" xl="4">
                            <BoxDotted full>
                                <Icon size="lg" variant="success" icon="user-add" />
                                <h5 class="title mt-2 mb-3">Instagram Followers</h5>
                                <div class="amount h3">7784k</div>
                                <div class="d-flex align-items-center smaller flex-wrap">
                                    <div class="change down">
                                        <Icon icon="trend-down" /> -1.5%
                                    </div>
                                    <span>than last Week</span>
                                </div>
                            </BoxDotted>
                        </Col>
                        <Col md="4" lg="12" xl="4">
                            <BoxDotted full>
                                <Icon size="lg" variant="warning" icon="coins" />
                                <h5 class="title mt-2 mb-3">Google Ads CPC</h5>
                                <div class="amount h3">$5.02</div>
                                <div class="d-flex align-items-center smaller flex-wrap">
                                    <div class="change up">
                                        <Icon icon="trend-up" /> +2.6%
                                    </div>
                                    <span>than last Week</span>
                                </div>
                            </BoxDotted>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>

        <Col sm="6" xxl="3">
            <Card full class="overflow-hidden">
                <div class="col-sep">
                    <CardBody>
                        <CardTitleGroup class="align-items-start">
                            <CardTitle tag="div">
                                <h4 class="title mb-0">External Links</h4>
                                <span class="small">Most used resources</span>
                            </CardTitle>
                            <CardTools>
                                <Dropdown>
                                    <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                        <Icon icon="more-v" />
                                    </Button>
                                    <DropdownMenu alignment="end">
                                        <DropdownItem>
                                            <DropdownHeader class="pt-2 pb-0">
                                                <h6 class="mb-0">Actions</h6>
                                            </DropdownHeader>
                                        </DropdownItem>
                                        <DropdownItem divider></DropdownItem>
                                        <DropdownItem>
                                            <DropdownLink href="#">Create invoice</DropdownLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <DropdownLink href="#">Create payment</DropdownLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <DropdownLink href="#">Settings</DropdownLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </CardTools>
                        </CardTitleGroup>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem class="py-3 d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <Img src="/images/icon/a.png" class="me-2" alt=""/>
                                <Link href="#" class="h6">Google Analytics</Link>
                            </div>
                            <Link href="#" class="btn-link"><Icon icon="external-alt" /></Link>
                        </ListGroupItem>
                        <ListGroupItem class="py-3 d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <Img src="/images/icon/b.png" class="me-2" alt=""/>
                                <Link href="#" class="h6">Facebook Ads</Link>
                            </div>
                            <Link href="#" class="btn-link"><Icon icon="external-alt" /></Link>
                        </ListGroupItem>
                        <ListGroupItem class="py-3 d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center">
                                <Img src="/images/icon/c.png" class="me-2" alt=""/>
                                <Link href="#" class="h6">Seranking</Link>
                            </div>
                            <Link href="#" class="btn-link"><Icon icon="external-alt" /></Link>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </Card>
        </Col>

        <Col sm="6" xxl="3">
            <Card full class="overflow-hidden">
                <div class="nk-chart-marketing-campaign bg-primary">
                    <CardBody>
                        <div class="nk-chart-marketing-campaign-visitor">
                            <ChartBar id="campaign-chart" :data="campaignChart"/>
                        </div>
                    </CardBody>
                </div>
                <CardBody>
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h4 class="title mb-0">Campaign Visitors</h4>
                            <p class="small mt-1">Last Campaign Performance</p>
                        </CardTitle>
                        <div class="amount-wrap text-end">
                            <div class="amount h3 mb-0">784k</div>
                            <div class="change down small">
                                <Icon icon="trend-down" />
                                -1.4%
                            </div>
                        </div>
                    </CardTitleGroup>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody>
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h4 class="title mb-0">Campaign Overview</h4>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
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
                        <div class="d-flex align-items-center">
                            <div class="amount h1 mb-0">$560.93</div>
                            <div class="change up smaller ms-1">
                                <Icon icon="trend-up" /> +2.7%
                            </div>
                        </div>
                        <span class="smaller">Avarage cost per interaction</span>
                    </div>
                    <div class="nk-chart-marketing-campaign-overview mb-2">
                        <ChartLine id="campaign-overview-chart" :data="campaignOverviewChart" />
                    </div>
                    <ChartLegendGroup class="justify-content-center flex-wrap gap gy-2 gx-4">
                        <div class="gap-col">
                            <ChartLegend small dot="primary">
                                <div class="title">Social Campaigns</div>
                            </ChartLegend>
                        </div>
                        <div class="gap-col">
                            <ChartLegend small dot="success">
                                <div class="title">Email Newsletter</div>
                            </ChartLegend>
                        </div>  
                        <div class="gap-col">
                            <ChartLegend small dot="warning">
                                <div class="title">Google Ads</div>
                            </ChartLegend>
                        </div>  
                    </ChartLegendGroup>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody class="flex-grow-0">
                    <CardTitleGroup class="mb-4 align-items-start">
                        <CardTitle tag="div">
                            <h4 class="title mb-0">Top Referral Sources</h4>
                            <span class="small">80% activity growth</span>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
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
                    <Nav pills class="nav-pills-border gap g-1">
                      <NavItem>
                        <NavLink active v-nk-tab="'#pills-google'" type="button">
                            <div class="d-flex align-items-center">
                                <Media size="tiny" sharp middle>
                                    <Img src="/images/icon/d.png" alt="icon"/>
                                </Media>
                                <div class="h6 d-none d-md-inline-block ms-2">Google</div>
                            </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink v-nk-tab="'#pills-facebook'" type="button">
                            <div class="d-flex align-items-center">
                                <Media size="tiny" sharp middle>
                                    <Img src="/images/icon/b.png" alt="icon"/>
                                </Media>
                                <div class="h6 d-none d-md-inline-block ms-2">Facebook</div>
                            </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink v-nk-tab="'#pills-instagram'" type="button">
                            <div class="d-flex align-items-center">
                                <Media size="tiny" sharp middle>
                                    <Img src="/images/icon/e.png" alt="icon"/>
                                </Media>
                                <div class="h6 d-none d-md-inline-block ms-2">Instagram</div>
                            </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink v-nk-tab="'#pills-search'" type="button">
                            <div class="d-flex align-items-center">
                                <Media size="tiny" sharp middle>
                                    <Img src="/images/icon/c.png" alt="icon"/>
                                </Media>
                                <div class="h6 d-none d-md-inline-block ms-2">Seranking</div>
                            </div>
                        </NavLink>
                      </NavItem>
                    </Nav>
                </CardBody>
                <TabContent>
                    <TabPane active id="pills-google">
                        <div class="table-responsive">
                            <Table middle class="mb-0">
                                <TableHead variant="light" small>
                                    <tr>
                                        <th class="tb-col">
                                            <OverlineTitle tag="span">parameter</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">status</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">conversion</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end">
                                            <OverlineTitle tag="span">revenue</OverlineTitle>
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Email Marketing Campaign</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">37%(438)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$84,034</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google Workspace</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">100%(1.6k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$3,326</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google AdSense</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(634)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$28,359</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">New Model BS 2000 X</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0%(0)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$14,945</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Affiliation Program</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0.1%(153)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$5,806</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Best Rated Headsets of 2022</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(6.4k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$15,342</span>
                                        </td>
                                    </tr>
                                </TableBody>
                            </Table>
                        </div>
                    </TabPane>
                    <TabPane id="pills-facebook">
                        <div class="table-responsive">
                            <Table middle class="mb-0">
                                <TableHead variant="light" small>
                                    <tr>
                                        <th class="tb-col">
                                            <OverlineTitle tag="span">parameter</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">status</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">conversion</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end">
                                            <OverlineTitle tag="span">revenue</OverlineTitle>
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google AdSense</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(634)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$28,359</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">New Model BS 2000 X</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0%(0)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$14,945</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Email Marketing Campaign</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">37%(438)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$84,034</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google Workspace</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">100%(1.6k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$3,326</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Affiliation Program</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0.1%(153)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$5,806</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Best Rated Headsets of 2022</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(6.4k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$15,342</span>
                                        </td>
                                    </tr>
                                </TableBody>
                            </Table>
                        </div>
                    </TabPane>
                    <TabPane id="pills-instagram">
                        <div class="table-responsive">
                            <Table middle class="mb-0">
                                <TableHead variant="light" small>
                                    <tr>
                                        <th class="tb-col">
                                            <OverlineTitle tag="span">parameter</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">status</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">conversion</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end">
                                            <OverlineTitle tag="span">revenue</OverlineTitle>
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Email Marketing Campaign</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">37%(438)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$84,034</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google Workspace</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">100%(1.6k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$3,326</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google AdSense</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(634)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$28,359</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">New Model BS 2000 X</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0%(0)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$14,945</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Affiliation Program</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0.1%(153)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$5,806</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Best Rated Headsets of 2022</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(6.4k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$15,342</span>
                                        </td>
                                    </tr>
                                </TableBody>
                            </Table>
                        </div>
                    </TabPane>
                    <TabPane id="pills-search">
                        <div class="table-responsive">
                            <Table middle class="mb-0">
                                <TableHead variant="light" small>
                                    <tr>
                                        <th class="tb-col">
                                            <OverlineTitle tag="span">parameter</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">status</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end tb-col-sm">
                                            <OverlineTitle tag="span">conversion</OverlineTitle>
                                        </th>
                                        <th class="tb-col tb-col-end">
                                            <OverlineTitle tag="span">revenue</OverlineTitle>
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google AdSense</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(634)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$28,359</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">New Model BS 2000 X</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0%(0)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$14,945</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Email Marketing Campaign</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="info-soft">Active</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">37%(438)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$84,034</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Google Workspace</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">100%(1.6k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$3,326</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Affiliation Program</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="danger-soft">In draft</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">0.1%(153)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$5,806</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tb-col">
                                            <div class="h6">Best Rated Headsets of 2022</div>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <Badge variant="success-soft">Completed</Badge>
                                        </td>
                                        <td class="tb-col tb-col-end tb-col-sm">
                                            <span class="small">18%(6.4k)</span>
                                        </td>
                                        <td class="tb-col tb-col-end">
                                            <span class="small">$15,342</span>
                                        </td>
                                    </tr>
                                </TableBody>
                            </Table>
                        </div>
                    </TabPane>
                </TabContent>            
            </Card>
        </Col>

        <Col xl="6" xxl="4">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup class="align-items-start">
                        <CardTitle tag="div">
                            <h4 class="title mb-0">Top Channels</h4>
                            <span class="small">Users from all channels</span>
                        </CardTitle>
                        <CardTools>
                            <Dropdown>
                                <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Actions</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Ticket</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Customer</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Contact</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                </CardBody>
                <div class="table-responsive">
                    <Table middle class="mb-0">
                        <TableHead variant="light" small>
                            <tr>
                                <th class="tb-col">
                                    <OverlineTitle tag="span">source</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">visitors</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">revenues</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">conversion</OverlineTitle>
                                </th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="dark">
                                            <Icon icon="github-circle"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Github.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">2.4K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$3.877</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.7%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="info">
                                            <Icon icon="twitter"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Twitter.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">2.4K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$3.426</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.4%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="danger">
                                            <Icon icon="google"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Google.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">2.0K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$2.444</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.2%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="info">
                                            <Icon icon="vimeo"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Vimeo.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">1.9K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$2.236</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.2%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="danger">
                                            <Icon icon="youtube"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Youtube.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">1.9K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$2.236</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.2%</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media size="sm" middle shape="circle" variant="info">
                                            <Icon icon="facebook-f"></Icon>
                                        </Media>
                                        <MediaText>
                                            <span class="title">Facebook.com</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">1.9K</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="change up small">$2.236</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="text-info small">4.2%</span>
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>

        <Col xl="6" xxl="4">
            <Card full>
                <div class="col-sep">
                    <CardBody class="py-2">
                        <CardTitleGroup>
                            <CardTitle tag="div">
                                <h4 class="title mb-0">Feedback</h4>
                            </CardTitle>
                            <CardTools>
                                <Button as="RouterLink" to="#" soft size="sm" variant="secondary">View All</Button>
                            </CardTools>
                        </CardTitleGroup>
                    </CardBody>
                    <CardBody>
                        <Timeline center>
                            <TimelineList>
                                <TimelineItem avatar="/images/avatar/a.jpg">
                                    <p class="small"><strong>Timothy Smith</strong> Commented on Cloud <strong>Killan James</strong></p>
                                    <span class="smaller time">1 hour ago</span>
                                    <p class="small">It's an Affiliate commissions SaaS application that allows you to track your affiliate revenue.</p>
                                </TimelineItem>
                                <TimelineItem avatar="/images/avatar/b.jpg">
                                    <p class="small"><strong>Nancy Martino</strong> Commented on Cloud <strong>Glen Matney</strong></p>
                                    <span class="smaller time">2 hours ago</span>
                                    <p class="small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </TimelineItem>
                                <TimelineItem avatar="/images/avatar/c.jpg">
                                    <p class="small"><strong>Michael Morris</strong> Commented on Cloud <strong>Williams Son</strong></p>
                                    <span class="smaller time">3 hours ago</span>
                                    <p class="small">But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                </TimelineItem>
                            </TimelineList>
                        </Timeline>
                    </CardBody>
                </div>
            </Card>
        </Col>

        <Col xxl="4">
            <Card full>
                <CardBody>
                    <CardTitleGroup class="align-items-start">
                        <div class="card-title">
                            <h4 class="title mb-0">Effectiveness</h4>
                            <span class="small">User involment by ads type</span>
                        </div>
                        <CardTools>
                            <Dropdown>
                                <Button href="#" zoom size="sm" class="btn-icon me-n1" data-bs-toggle="dropdown">
                                    <Icon icon="more-v" />
                                </Button>
                                <DropdownMenu alignment="end">
                                    <DropdownItem>
                                        <DropdownHeader class="pt-2 pb-0">
                                            <h6 class="mb-0">Actions</h6>
                                        </DropdownHeader>
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Ticket</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Customer</DropdownLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <DropdownLink href="#">New Contact</DropdownLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </CardTools>
                    </CardTitleGroup>
                    <div class="nk-chart-marketing-effectiveness mt-3">
                        <ChartRadar id="effectiveness-chart" :data="effectivenessChart"/>
                    </div>
                </CardBody>
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
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import CardTools from '@/components/uielements/card/CardTools.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Button from '@/components/uielements/button/Button.vue';
import Icon from '@/components/icon/Icon.vue';
import BoxDotted from '@/components/box/BoxDotted.vue';
import ListGroup from '@/components/uielements/list/ListGroup.vue';
import ListGroupItem from '@/components/uielements/list/ListGroupItem.vue';
import Img from '@/components/img/Img.vue'
import Link from '@/components/link/Link.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import ChartLegendGroup from '@/components/chart/ChartLegendGroup.vue';
import ChartLegend from '@/components/chart/ChartLegend.vue';
import Nav from '@/components/uielements/nav/Nav.vue';
import NavItem from '@/components/uielements/nav/NavItem.vue';
import NavLink from '@/components/uielements/nav/NavLink.vue';
import TabContent from '@/components/uielements/tab/TabContent.vue';
import TabPane from '@/components/uielements/tab/TabPane.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import Timeline from '@/components/timeline/Timeline.vue';
import TimelineList from '@/components/timeline/TimelineList.vue';
import TimelineItem from '@/components/timeline/TimelineItem.vue';
import ChartRadar from '@/components/chart/ChartRadar.vue';

// utilities
import hexRGB from '@/utilities/hexRGB';

export default {
    name: 'HomePageMarketing',
    components: {
        Layout,
        Row,
        Col,
        Card,
        CardBody,
        CardTitleGroup,
        CardTitle,
        CardTools,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownLink,
        DropdownHeader,
        Button,
        Icon,
        BoxDotted,
        ListGroup,
        ListGroupItem,
        Img,
        Link,
        ChartBar,
        ChartLine,
        ChartLegendGroup,
        ChartLegend,
        Nav,
        NavItem,
        NavLink,
        TabContent,
        TabPane,
        MediaGroup,
        Media,
        MediaText,
        Table,
        TableHead,
        TableBody,
        OverlineTitle,
        Badge,
        Timeline,
        TimelineList,
        TimelineItem,
        ChartRadar
    },
    data(){
        return {
            campaignChart: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                xGridColor: hexRGB(this.$Colors.white, 0.1),
                yGridColor: hexRGB(this.$Colors.white, 0.1),
                xGridBorderColor: hexRGB(this.$Colors.white, 0.1),
                yGridBorderColor: hexRGB(this.$Colors.white, 0.1),
                barThickness: 10,
                datasets: [
                    {
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        backgroundColor: hexRGB(this.$Colors.white, 0.8),
                        hoverBackgroundColor: this.$Colors.white,
                        label: "Visitors",
                        data: [600, 680, 470, 770, 570, 810, 670]
                    },
                ]
            },
            campaignOverviewChart: {
                labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ticksValue: 'k',
                borderDash: [8, 4],
                xGridColor: this.$Colors.white,
                yGridColor: this.$Colors.gray100,
                xGridBorderColor: this.$Colors.gray100,
                yGridBorderColor: this.$Colors.white,
                datasets: [
                    {
                        tension: 0.4,
                        borderWidth: 2,
                        borderColor: this.$Colors.primary,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.primary,
                        pointHoverBackgroundColor: this.$Colors.primary,
                        backgroundGradient: this.$Colors.primary,
                        label: "Social",
                        data: [0, 15, 10, 28, 20, 38, 30, 22, 30, 12, 38, 30]
                    },
                    {
                        tension: 0.4,
                        borderWidth: 2,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.success,
                        borderColor: this.$Colors.success,
                        pointHoverBackgroundColor: this.$Colors.success,
                        backgroundGradient: this.$Colors.success,
                        label: "Email Newsletter",
                        data: [30, 24, 49, 36, 40, 49, 39, 38, 59, 50, 56, 66]
                    },
                    {
                        tension: 0.4,
                        borderWidth: 2,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.warning,
                        borderColor: this.$Colors.warning,
                        pointHoverBackgroundColor: this.$Colors.warning,
                        label: "Google Ads",
                        borderDash: [8,4],
                        data: [44, 34, 39, 68, 29, 61, 10, 48, 45, 70, 46, 55]
                    },
                ]
            },
            effectivenessChart: {
                labels: ['AdSense','Facebook','Video ads','Pop-ups','Email marketing','Banners',],
                legend: false,
                ticksColor: '#9CA3AF',
                ticksFontSize: 11,
                ticksFontWeight: 100,
                gridBorderDash: [8, 4],
                yAxis: false,
                xAxis: false,
                gridColorX: 'transparent',
                gridColorY: 'transparent',
                gridBorderColorX: 'transparent',
                gridBorderColorY: 'transparent',
                ticksNumberLabel: false,
                datasets: [
                    {
                        borderWidth: 2,
                        color: this.$Colors.primary,
                        backgroundGradient: this.$Colors.primary,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.primary,
                        pointHoverBackgroundColor: this.$Colors.primary,
                        label: 'Dataset',
                        data: [80, 70, 56, 91, 86, 80],
                    },
                ]
            }
        }
    }
}
</script>
