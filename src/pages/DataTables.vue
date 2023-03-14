<!-- eslint-disable no-unused-vars -->
<template>
  <Layout content="container">
    
    <BlockHead class="nk-page-head">
      <BlockHeadContent>
        <BlockTitle tag="h1">DataTables</BlockTitle>
        <BlockText>The tables in this section had use Simple-DataTables plugin. For more info see <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">the official github repo</a>.</BlockText>
      </BlockHeadContent>
    </BlockHead>

    <Block>
      <BlockHead class="wide-md">
        <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
        </BlockText>
        <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
        <BlockTitle>Example</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
            <DataTable id="datatable-init" class="table-border">
            <TableHead>
                <tr>
                    <th><OverlineTitle tag="span">Name</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Position</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Office</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Age</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Start date</OverlineTitle></th>
                    <th><OverlineTitle tag="span">Salary</OverlineTitle></th>
                </tr>
            </TableHead>
            <TableBody>
              <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
              </tr>
              <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
              </tr>
              <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td>$372,000</td>
              </tr>
              <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td>$137,500</td>
              </tr>
              <tr>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010/10/14</td>
                  <td>$327,900</td>
              </tr>
              <tr>
                  <td>Colleen Hurst</td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>39</td>
                  <td>2009/09/15</td>
                  <td>$205,500</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
              <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
              </tr>
              <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
              </tr>
            </TableBody>
          </DataTable>
          </div>
        </CardBody>
      </Card>
    </Block>

    <Block>
      <BlockHead>
        <BlockTitle>Datetime Sorting</BlockTitle>
      </BlockHead>
      <Card>
        <CardBody>
          <div class="table-responsive">
            <DataTable id="datatable-init-2" class="table-border">
              <TableHead>
                <tr>
                  <th class="text-nowrap" data-type="date" data-format="ISO_8601"><OverlineTitle tag="span">ISO 8601</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="MYSQL"><OverlineTitle tag="span">MySQL</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="RFC_2822"><OverlineTitle tag="span">RFC 2822</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="MMM DD, YYYY"><OverlineTitle tag="span">MMM DD, YYYY</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="DD/MM/YYYY"><OverlineTitle tag="span">DD/MM/YYYY</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="MM-DD-YY"><OverlineTitle tag="span">MM-DD-YY</OverlineTitle></th>
                  <th class="text-nowrap" data-type="date" data-format="UNIX"><OverlineTitle tag="span">UNIX</OverlineTitle> </th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td>2013-06-27T19:10:21-07:00</td>
                  <td>1994-12-06 22:56:36</td>
                  <td>Tue, 14 Mar 1995 07:11:46 -0800</td>
                  <td>Dec 8, 2001</td>
                  <td>19/10/2016</td>
                  <td>07-23-12</td>
                  <td>853102101</td>
                </tr>
                <tr>
                  <td>1980-09-12T02:50:23-07:00</td>
                  <td>1997-11-23 07:06:45</td>
                  <td>Mon, 21 Nov 2005 04:23:35 -0800</td>
                  <td>Aug 19, 1997</td>
                  <td>27/05/1981</td>
                  <td>01-13-17</td>
                  <td>713671686</td>
                </tr>
                <tr>
                  <td>1994-10-27T12:11:30-07:00</td>
                  <td>2001-06-22 09:21:47</td>
                  <td>Sat, 30 Apr 2005 03:36:38 -0700</td>
                  <td>Aug 1, 1984</td>
                  <td>04/11/2011</td>
                  <td>04-25-11</td>
                  <td>1408349475</td>
                </tr>
                <tr>
                  <td>2015-05-20T15:38:00-07:00</td>
                  <td>1990-12-20 10:13:03</td>
                  <td>Thu, 16 Jan 2003 16:38:36 -0800</td>
                  <td>Aug 19, 1982</td>
                  <td>05/11/1989</td>
                  <td>03-06-18</td>
                  <td>677441387</td>
                </tr>
                <tr>
                  <td>1982-07-05T06:31:38-07:00</td>
                  <td>1989-11-18 13:43:58</td>
                  <td>Thu, 09 Nov 2000 10:25:09 -0800</td>
                  <td>Oct 11, 2003</td>
                  <td>16/07/1992</td>
                  <td>10-29-11</td>
                  <td>523469491</td>
                </tr>
                <tr>
                  <td>2008-08-11T01:01:32-07:00</td>
                  <td>1981-02-16 19:29:34</td>
                  <td>Thu, 18 Dec 2003 07:16:19 -0800</td>
                  <td>May 16, 1981</td>
                  <td>30/04/1989</td>
                  <td>05-24-87</td>
                  <td>1141495716</td>
                </tr>
                <tr>
                  <td>1982-11-28T18:34:32-08:00</td>
                  <td>2002-02-22 04:36:38</td>
                  <td>Fri, 11 Mar 1994 01:16:08 -0800</td>
                  <td>Apr 2, 2014</td>
                  <td>12/10/2008</td>
                  <td>05-01-90</td>
                  <td>464746558</td>
                </tr>
                <tr>
                  <td>1996-07-29T13:05:44-07:00</td>
                  <td>1993-03-15 18:27:14</td>
                  <td>Fri, 06 Jun 2003 07:53:59 -0700</td>
                  <td>Jul 16, 2004</td>
                  <td>14/02/1995</td>
                  <td>02-08-96</td>
                  <td>405430252</td>
                </tr>
                <tr>
                  <td>1987-03-02T20:03:45-08:00</td>
                  <td>1990-01-09 10:26:10</td>
                  <td>Thu, 15 Sep 2005 13:12:25 -0700</td>
                  <td>Nov 9, 2005</td>
                  <td>14/06/1983</td>
                  <td>11-19-13</td>
                  <td>1310935236</td>
                </tr>
                <tr>
                  <td>2014-04-02T01:20:31-07:00</td>
                  <td>1995-03-19 17:07:42</td>
                  <td>Sat, 11 May 2013 04:14:36 -0700</td>
                  <td>Jun 11, 2000</td>
                  <td>17/02/2001</td>
                  <td>05-03-15</td>
                  <td>636464866</td>
                </tr>
                <tr>
                  <td>1984-01-18T00:39:34-08:00</td>
                  <td>2015-12-11 13:14:55</td>
                  <td>Fri, 25 Jan 2013 21:09:50 -0800</td>
                  <td>Aug 15, 2013</td>
                  <td>11/02/2005</td>
                  <td>11-29-93</td>
                  <td>922286213</td>
                </tr>
                <tr>
                  <td>2012-09-04T15:14:23-07:00</td>
                  <td>1990-01-22 12:37:32</td>
                  <td>Sat, 01 May 1999 08:20:37 -0700</td>
                  <td>Jan 27, 1999</td>
                  <td>02/02/2010</td>
                  <td>12-04-06</td>
                  <td>545366064</td>
                </tr>
                <tr>
                  <td>1988-03-14T11:42:05-08:00</td>
                  <td>1992-10-11 21:13:23</td>
                  <td>Tue, 16 Sep 2008 10:32:44 -0700</td>
                  <td>May 28, 2012</td>
                  <td>15/08/2003</td>
                  <td>02-21-90</td>
                  <td>896785729</td>
                </tr>
                <tr>
                  <td>1983-06-01T05:28:43-07:00</td>
                  <td>1999-07-12 06:19:13</td>
                  <td>Tue, 16 Nov 1999 21:31:30 -0800</td>
                  <td>Nov 30, 2008</td>
                  <td>23/01/2004</td>
                  <td>03-17-08</td>
                  <td>1422578713</td>
                </tr>
                <tr>
                  <td>1980-08-06T05:20:08-07:00</td>
                  <td>1986-09-14 19:36:53</td>
                  <td>Fri, 29 Oct 1999 22:21:35 -0700</td>
                  <td>May 28, 2014</td>
                  <td>23/01/1983</td>
                  <td>03-13-04</td>
                  <td>1459690948</td>
                </tr>
                <tr>
                  <td>2014-02-15T19:50:40-08:00</td>
                  <td>1997-11-11 15:45:24</td>
                  <td>Tue, 07 Jun 1988 16:20:04 -0700</td>
                  <td>Oct 17, 1992</td>
                  <td>04/12/1993</td>
                  <td>10-10-08</td>
                  <td>1349969151</td>
                </tr>
                <tr>
                  <td>2007-02-08T13:38:13-08:00</td>
                  <td>2010-01-05 22:22:21</td>
                  <td>Mon, 18 Sep 2017 01:18:07 -0700</td>
                  <td>Apr 29, 1999</td>
                  <td>16/08/1994</td>
                  <td>06-30-84</td>
                  <td>756326365</td>
                </tr>
                <tr>
                  <td>2014-02-03T17:32:42-08:00</td>
                  <td>1989-06-20 22:14:41</td>
                  <td>Mon, 20 Apr 1981 04:11:15 -0800</td>
                  <td>Jan 17, 1993</td>
                  <td>16/07/2015</td>
                  <td>09-20-15</td>
                  <td>688566388</td>
                </tr>
                <tr>
                  <td>2015-03-30T05:58:40-07:00</td>
                  <td>2010-10-31 08:34:15</td>
                  <td>Tue, 26 May 1998 19:03:54 -0700</td>
                  <td>Jan 12, 2012</td>
                  <td>13/08/1988</td>
                  <td>11-27-09</td>
                  <td>660566468</td>
                </tr>
                <tr>
                  <td>1992-07-03T09:37:26-07:00</td>
                  <td>1996-01-19 16:42:48</td>
                  <td>Wed, 06 Apr 2005 16:01:04 -0700</td>
                  <td>Aug 19, 1994</td>
                  <td>10/10/1990</td>
                  <td>12-03-10</td>
                  <td>797131280</td>
                </tr>
                <tr>
                  <td>2004-03-01T04:34:57-08:00</td>
                  <td>1982-10-26 19:46:32</td>
                  <td>Fri, 23 May 2008 11:31:53 -0700</td>
                  <td>Apr 27, 2018</td>
                  <td>30/03/2000</td>
                  <td>09-15-13</td>
                  <td>1012207791</td>
                </tr>
              </TableBody>
          </DataTable>
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
import DataTable from '@/components/data-tables/SimpleDataTable.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import OverlineTitle from '@/components/misc/OverlineTitle.vue';

export default {
  name: 'DataTablesPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    DataTable,
    TableHead,
    TableBody,
    OverlineTitle
  },

}
</script>
