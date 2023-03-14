<template>
  <Layout>
    <Row utils="g-gs">
        <Col xl="6">
            <Card full>
                <CardBody>
                    <div class="d-flex flex-column flex-sm-row-reverse justify-content-between align-items-sm-center align-items-xxl-center gap g-3">
                        <div class="gap-col d-xl-none d-xxl-block">
                            <Img src="/images/award/b.png" alt="" class="pt-lg-3"/>
                        </div>
                        <div class="gap-col">
                            <CardTitle tag="div" class="mb-4">
                                <h4 class="title mb-1 lh-base">Discover, Collect, Sell and Create your own NFTs.</h4>
                                <p class="small">The world's first and largest digital marketplace.</p>
                            </CardTitle>
                            <div class="d-flex flex-wrap gap g-3">
                                <div class="gap-col">
                                    <div class="d-flex align-items-center">
                                        <div class="amount h3 mb-0">25k</div>
                                        <span class="ms-1 small">At work</span>
                                    </div>
                                </div>
                                <div class="gap-col">
                                    <div class="d-flex align-items-center">
                                        <div class="amount h3 mb-0">80k</div>
                                        <span class="ms-1 small">Auction</span>
                                    </div>
                                </div>
                                <div class="gap-col">
                                    <div class="d-flex align-items-center">
                                        <div class="amount h3 mb-0">22k</div>
                                        <span class="ms-1 small">Artist</span>
                                    </div>
                                </div>
                            </div>
                            <ul class="d-flex flex-wrap gap g-2 pt-4">
                                <li>
                                    <Button href="#" size="sm" variant="primary">Explore Now</Button>
                                </li>
                                <li>
                                    <Button href="#" size="sm" variant="secondary">Create Your Own</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col sm="6" xl="3">
            <Card full class="overflow-hidden">
                <CardBody class="pb-0">
                    <CardTitleGroup>
                        <MediaGroup>
                            <Media size="sm" middle shape="circle" variant="primary">
                                <Icon icon="coins"></Icon>
                            </Media>
                            <MediaText>
                                <h4>Total Revenue</h4>
                            </MediaText>
                        </MediaGroup>
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
                    <div class="amount-wrap mt-3">
                        <div class="amount h2 mb-2">$2,526.56</div>
                        <div class="d-flex flex-wrap align-items-center gap g-1">
                            <div class="gap-col">
                                <Badge variant="success-soft"> 
                                    <Icon icon="trend-up"></Icon> 4.55% 
                                </Badge>
                            </div>
                            <div class="gap-col">
                                <span class="small">Previous month</span>
                            </div>
                        </div>
                    </div><!-- .amount-wrap -->
                </CardBody>
                <div class="nk-chart-nft-total-revenue m-n1">
                    <ChartLine id="total-revenue-chart" :data="totalRevenueChart"/>
                </div>
            </Card>
        </Col>

        <Col sm="6" xl="3">
            <Card full class="overflow-hidden">
                <CardBody class="pb-0">
                    <CardTitleGroup>
                        <MediaGroup>
                            <Media size="sm" middle shape="circle" variant="warning">
                                <Icon icon="wallet-fill" variant="white"></Icon>
                            </Media>
                            <MediaText>
                                <h4>Estimated</h4>
                            </MediaText>
                        </MediaGroup>
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
                    <div class="amount-wrap mt-3">
                        <div class="amount h2 mb-2">$5,625.64</div>
                        <div class="d-flex flex-wrap align-items-center gap g-1">
                            <div class="gap-col">
                                <Badge variant="danger-soft"> 
                                    <Icon icon="trend-down"></Icon> 3.88% 
                                </Badge>
                            </div>
                            <div class="gap-col">
                                <span class="small">Previous month</span>
                            </div>
                        </div>
                    </div><!-- .amount-wrap -->
                </CardBody>
                <div class="nk-chart-nft-estimated m-n1">
                    <ChartLine id="estimated-chart" :data="estimatedChart"/>
                </div>
            </Card>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody>
                    <CardTitleGroup class="mb-4">
                        <CardTitle tag="div">
                            <h5 class="title">Marketplace</h5>
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
                    <div class="nk-chart-nft-marketplace mb-3">
                        <ChartLine id="marketplace-chart" :data="marketplaceChart"/>
                    </div>
                    <ChartLegendGroup class="justify-content-center flex-wrap gap gy-2 gx-4">
                        <div class="gap-col">
                            <ChartLegend dot="warning" small>
                                <div class="title">Total Atwork</div>
                            </ChartLegend>
                        </div>
                        <div class="gap-col">
                            <ChartLegend dot="success" small>
                                <div class="title">Total Auction</div>
                            </ChartLegend>
                        </div>
                        <div class="gap-col">
                            <ChartLegend dot="pink" small>
                                <div class="title">Total Artist</div>
                            </ChartLegend>
                        </div>
                    </ChartLegendGroup>
                </CardBody>
            </Card>
        </Col>

        <Col xxl="6">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">Recent NFT Collections</h5>
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
                                    <OverlineTitle tag="span">Collections</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">Volume</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">24h%</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">creators</OverlineTitle>
                                </th>
                                <th class="tb-col tb-col-end">
                                    <OverlineTitle tag="span">items</OverlineTitle>
                                </th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="images/product/a.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <span class="title text-truncate">Nike v22 Running</span>
                                            <span class="text smaller">Artworks</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">8,568.02</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <div class="change up small">
                                        <Icon icon="trend-up"></Icon>
                                        <span class="ms-1">3.08</span>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">6.0k</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">18.6k</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="images/product/b.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <span class="title text-truncate">Business Kit (Mug)</span>
                                            <span class="text smaller">16 Oct 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">24,718.40</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <div class="change up small">
                                        <Icon icon="trend-up"></Icon>
                                        <span class="ms-1">1.20</span>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">3.0k</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">13.6k</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="images/product/c.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <span class="title text-truncate">Borosil Paper Cup</span>
                                            <span class="text smaller">21 Feb 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">3,280.45</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <div class="change down small">
                                        <Icon icon="trend-down"></Icon>
                                        <span class="ms-1">0.34</span>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">5.0k</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">12.1k</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="images/product/d.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <span class="title text-truncate">Mountain Trip Kit</span>
                                            <span class="text smaller">14 Jun 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">28,843.25</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <div class="change up small">
                                        <Icon icon="trend-up"></Icon>
                                        <span class="ms-1">8.26</span>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">5.0k</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">19.6k</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle" class="flex-shrink-0">
                                            <Img src="images/product/e.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <span class="title text-truncate">One Seater Sofa</span>
                                            <span class="text smaller">28 Jul 2022</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">18,735.20</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <div class="change down small">
                                        <Icon icon="trend-down"></Icon>
                                        <span class="ms-1">7.65</span>
                                    </div>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">7.5k</span>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">15.6k</span>
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>

        <Col xxl="4">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">History of Bids</h5>
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
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/a.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Jane Cooper</router-link>
                                            <span class="text smaller">@janeCooper12</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">346.47 ETH</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/b.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Esther Howard</router-link>
                                            <span class="text smaller">@estherHoward</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">852.34 ETH</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/c.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Tower Hill</router-link>
                                            <span class="text smaller">@towerHill</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">754.15 ETH</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/d.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Michael Morris</router-link>
                                            <span class="text smaller">@michael21</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">14.92 ETH</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/product/e.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Alexis Clarke</router-link>
                                            <span class="text smaller">@alexis_30</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <span class="small">30.749 ETH</span>
                                </td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </Col>
        
        <Col md="6" xxl="4">
            <Card full>
                <CardBody>
                    <CardTitleGroup class="mb-4">
                        <CardTitle tag="div">
                            <h5 class="title">Popularity</h5>
                        </CardTitle>
                        <ChartLegendGroup class="gap gx-3 align-items-center">
                            <div class="gap-col">
                                <ChartLegend dot="success" small>
                                    <div class="title">Like</div>
                                </ChartLegend>
                            </div>
                            <div class="gap-col">
                                <ChartLegend dot="info" small>
                                    <div class="title">Share</div>
                                </ChartLegend>
                            </div>
                        </ChartLegendGroup>
                    </CardTitleGroup>
                    <div class="nk-chart-nft-popularity">
                        <ChartBar id="popularity-chart" :data="popularityChart" />
                    </div>
                </CardBody>
            </Card>
        </Col>

        <Col md="6" xxl="4">
            <Card full>
                <CardBody class="flex-grow-0 py-2">
                    <CardTitleGroup>
                        <CardTitle tag="div">
                            <h5 class="title">Popular Creators</h5>
                        </CardTitle>
                        <CardTools class="d-none d-sm-inline-block">
                            <Button as="RouterLink" to="/user-manage/user-list" size="sm" soft variant="secondary">
                                <span>See all</span>
                            </Button>
                        </CardTools>
                    </CardTitleGroup>
                </CardBody>
                <div class="table-responsive">
                    <Table middle class="mb-0">
                        <TableBody>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/avatar/a.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Timothy Smith</router-link>
                                            <span class="text smaller">68,945 ETH</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
                                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                                            <Icon icon="more-v"></Icon>
                                        </Button>
                                        <DropdownMenu size="sm" alignment="end">
                                            <DropdownContent class="py-1">
                                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="edit"></Icon>
                                                            <span>Share</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="flag"></Icon>
                                                            <span>Report</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-profile">
                                                            <Icon icon="eye"></Icon>
                                                            <span>View Details</span>
                                                        </router-link>
                                                    </ListItem>
                                                </List>
                                            </DropdownContent>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/avatar/b.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Alexis Clarke</router-link>
                                            <span class="text smaller">58,943 ETH</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
                                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                                            <Icon icon="more-v"></Icon>
                                        </Button>
                                        <DropdownMenu size="sm" alignment="end">
                                            <DropdownContent class="py-1">
                                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="edit"></Icon>
                                                            <span>Share</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="flag"></Icon>
                                                            <span>Report</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-profile">
                                                            <Icon icon="eye"></Icon>
                                                            <span>View Details</span>
                                                        </router-link>
                                                    </ListItem>
                                                </List>
                                            </DropdownContent>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/avatar/c.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Herbert Stokes</router-link>
                                            <span class="text smaller">45,657 ETH</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
                                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                                            <Icon icon="more-v"></Icon>
                                        </Button>
                                        <DropdownMenu size="sm" alignment="end">
                                            <DropdownContent class="py-1">
                                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="edit"></Icon>
                                                            <span>Share</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="flag"></Icon>
                                                            <span>Report</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-profile">
                                                            <Icon icon="eye"></Icon>
                                                            <span>View Details</span>
                                                        </router-link>
                                                    </ListItem>
                                                </List>
                                            </DropdownContent>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/avatar/d.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Nancy Martino</router-link>
                                            <span class="text smaller">38,945 ETH</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
                                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                                            <Icon icon="more-v"></Icon>
                                        </Button>
                                        <DropdownMenu size="sm" alignment="end">
                                            <DropdownContent class="py-1">
                                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="edit"></Icon>
                                                            <span>Share</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="flag"></Icon>
                                                            <span>Report</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-profile">
                                                            <Icon icon="eye"></Icon>
                                                            <span>View Details</span>
                                                        </router-link>
                                                    </ListItem>
                                                </List>
                                            </DropdownContent>
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb-col">
                                    <MediaGroup>
                                        <Media middle size="md" shape="circle">
                                            <Img src="/images/avatar/e.jpg" alt="" />
                                        </Media>
                                        <MediaText>
                                            <router-link to="/user-manage/user-profile" class="title">Michael Morris</router-link>
                                            <span class="text smaller">18,945 ETH</span>
                                        </MediaText>
                                    </MediaGroup>
                                </td>
                                <td class="tb-col tb-col-end">
                                    <Dropdown>
                                        <Button href="#" size="sm" zoom class="btn-icon me-n1" data-bs-toggle="dropdown">
                                            <Icon icon="more-v"></Icon>
                                        </Button>
                                        <DropdownMenu size="sm" alignment="end">
                                            <DropdownContent class="py-1">
                                                <List class="link-list link-list-hover-bg-primary link-list-md">
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="edit"></Icon>
                                                            <span>Share</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-edit">
                                                            <Icon icon="flag"></Icon>
                                                            <span>Report</span>
                                                        </router-link>
                                                    </ListItem>
                                                    <ListItem>
                                                        <router-link to="/user-manage/user-profile">
                                                            <Icon icon="eye"></Icon>
                                                            <span>View Details</span>
                                                        </router-link>
                                                    </ListItem>
                                                </List>
                                            </DropdownContent>
                                        </DropdownMenu>
                                    </Dropdown>
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
import Img from '@/components/img/Img.vue';
import CardTitle from '@/components/uielements/card/CardTitle.vue';
import Button from '@/components/uielements/button/Button.vue';
import CardTools from '@/components/uielements/card/CardTools.vue';
import Dropdown from '@/components/uielements/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/uielements/dropdown/DropdownMenu.vue';
import DropdownItem from '@/components/uielements/dropdown/DropdownItem.vue';
import DropdownLink from '@/components/uielements/dropdown/DropdownLink.vue';
import DropdownHeader from '@/components/uielements/dropdown/DropdownHeader.vue';
import Icon from '@/components/icon/Icon.vue';
import MediaGroup from '@/components/media/MediaGroup.vue';
import Media from '@/components/media/Media.vue';
import MediaText from '@/components/media/MediaText.vue';
import CardTitleGroup from '@/components/uielements/card/CardTitleGroup.vue';
import Badge from '@/components/uielements/badge/Badge.vue';
import ChartLine from '@/components/chart/ChartLine.vue';
import ChartBar from '@/components/chart/ChartBar.vue';
import ChartLegendGroup from '@/components/chart/ChartLegendGroup.vue';
import ChartLegend from '@/components/chart/ChartLegend.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';
import DropdownContent from '@/components/uielements/dropdown/DropdownContent.vue';
import List from '@/components/list/List.vue';
import ListItem from '@/components/list/ListItem.vue';

export default {
    name: 'HomePageNft',
    components: {
        Layout,
        Row,
        Col,
        Card,
        CardBody,
        Img,
        CardTitle,
        Button,
        CardTools,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        DropdownLink,
        DropdownHeader,
        Icon,
        MediaGroup,
        Media,
        MediaText,
        CardTitleGroup,
        Badge,
        ChartLine,
        ChartBar,
        ChartLegendGroup,
        ChartLegend,
        Table,
        TableHead,
        TableBody,
        OverlineTitle,
        DropdownContent,
        List,
        ListItem
    },
    data(){
        return {
            totalRevenueChart: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                yAxis: false,
                xAxis: false,
                datasets: [
                    {
                        tension: .4,
                        label: "Revenue",
                        borderColor: this.$Colors.primary,
                        backgroundGradient: this.$Colors.primary,
                        borderWidth: 2,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointHoverBackgroundColor: this.$Colors.primary,
                        data: [420, 460, 295, 505, 288, 699, 667, 740, 655, 967, 837, 1450]
                    }
                ]
            },
            estimatedChart: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                yAxis: false,
                xAxis: false,
                datasets: [
                    {
                        tension: .4,
                        label: "Estimated",
                        borderColor: this.$Colors.yellow,
                        backgroundGradient: this.$Colors.yellow,
                        borderWidth: 2,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointHoverBackgroundColor: this.$Colors.yellow,
                        data: [420, 460, 295, 505, 288, 699, 667, 740, 655, 967, 837, 1450]
                    }
                ]
            },
            marketplaceChart: {
                labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                borderDash: [8, 4],
                xGridColor: this.$Colors.white,
                xGridBorderColor: this.$Colors.white,
                yGridBorderColor: this.$Colors.white,
                datasets: [
                    {
                        tension: .4,
                        borderWidth: 2,
                        borderColor: this.$Colors.yellow,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.yellow,
                        pointHoverBackgroundColor: this.$Colors.yellow,
                        backgroundGradient: this.$Colors.yellow,
                        label: "Total Atwork",
                        fill: true,
                        data: [0, 15, 10, 28, 20, 38, 30, 22, 30, 12, 38, 30]
                    },
                    {
                        tension: .4,
                        borderWidth: 2,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.success,
                        borderColor: this.$Colors.success,
                        pointHoverBackgroundColor: this.$Colors.success,
                        backgroundGradient: this.$Colors.success,
                        label: "Total Auction",
                        fill: true,
                        data: [30, 24, 49, 36, 40, 49, 39, 38, 59, 50, 56, 66]
                    },
                    {
                        tension: .4,
                        borderWidth: 2,
                        pointBorderColor: this.$Colors.white,
                        pointBackgroundColor: this.$Colors.pink,
                        borderColor: this.$Colors.pink,
                        pointHoverBackgroundColor: this.$Colors.pink,
                        label: "Total Artist",
                        borderDash: [8,4],
                        data: [44, 34, 39, 68, 29, 61, 10, 48, 45, 70, 46, 55]
                    },
                ]
            },
            popularityChart: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                ticksValue: 'k',
                borderDash: [8, 4],
                xGridColor: this.$Colors.white,
                yGridBorderColor: this.$Colors.white,
                barPercentage : 0.7,
                categoryPercentage: 0.6,
                datasets: [
                    {
                        borderRadius: 10,
                        borderColor: this.$Colors.success,
                        backgroundColor: this.$Colors.success,
                        label: "Like",
                        data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95]
                    },
                    {
                        borderRadius: 10,
                        borderColor: this.$Colors.info,
                        backgroundColor: this.$Colors.info,
                        label: "Share",
                        data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125]
                    }
                ]
            },
        }
    }
}
</script>
