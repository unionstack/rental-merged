<template>
  <Layout content="container">
    <BlockHead class="nk-page-head wide-md">
        <BlockHeadContent>
            <BlockTitle tag="h1">Tables</BlockTitle>
            <BlockText>Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</BlockText>
        </BlockHeadContent>
    </BlockHead>

    <Block>
        <BlockHead class="wide-md">
            <BlockText><strong class="text-black">Note:</strong> When you copy the code example and if you paste your copied code to any other component. these will not work because you just copied the component's name from code example. to use you have to <code>import</code> these component. 
            </BlockText>
            <BlockText>How to import component and use see the <a href="#">docs</a></BlockText>
            <BlockTitle>Example </BlockTitle>
            <BlockText>Using the most basic table markup, here’s how <code>.table</code>-based tables look in Bootstrap.</BlockText>
        </BlockHead>
        <Card>
            <CardBody>
                <Table class="small">
                    <TableHead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </TableBody>
                </Table>
            </CardBody>
            <CodePreview title="code example">
                &lt;Table class=&quot;small&quot;&gt;
                    &lt;TableHead&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                        &lt;/tr&gt;
                    &lt;/TableHead&gt;
                    &lt;TableBody&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                            &lt;td&gt;Mark&lt;/td&gt;
                            &lt;td&gt;Otto&lt;/td&gt;
                            &lt;td&gt;@mdo&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                            &lt;td&gt;Jacob&lt;/td&gt;
                            &lt;td&gt;Thornton&lt;/td&gt;
                            &lt;td&gt;@fat&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                            &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                            &lt;td&gt;@twitter&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/TableBody&gt;
                &lt;/Table&gt;
            </CodePreview>
        </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Variants </BlockTitle>
        <BlockText>Use contextual classes to color tables, table rows or individual cells.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="small">
                <TableHead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Heading</th>
                        <th scope="col">Heading</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">Default</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">Primary</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">Secondary</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-success">
                        <th scope="row">Success</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-danger">
                        <th scope="row">Danger</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-warning">
                        <th scope="row">Warning</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr class="table-info">
                        <th scope="row">Info</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr variant="light">
                        <th scope="row">Light</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr variant="dark">
                        <th scope="row">Dark</th>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;small&quot;&gt;
            &lt;TableHead&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;col&quot;&gt;Class&lt;/th&gt;
                    &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                    &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/TableHead&gt;
            &lt;TableBody&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;row&quot;&gt;Default&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-primary&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Primary&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-secondary&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Secondary&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-success&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Success&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-danger&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Danger&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-warning&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Warning&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-info&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Info&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-light&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Light&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr class=&quot;table-dark&quot;&gt;
                    &lt;th scope=&quot;row&quot;&gt;Dark&lt;/th&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                    &lt;td&gt;Cell&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/TableBody&gt;
        &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Striped rows </BlockTitle>
        <BlockText>Use <code>.table-striped</code> to add zebra-striping to any table row within the tbody.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
        <Table class="table-striped small">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>

        <h4 class="mt-5">Striped columns</h4>
        <p>Use <code>.table-striped-columns </code> to add zebra-striping to any table column.</p>
        <Table class="table-striped-columns small">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>

        <h4 class="mt-5">Dark</h4>
        <Table class="table-dark table-striped small">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>

        <h4 class="mt-5">Dark columns</h4>
        <Table class="table-dark table-striped-columns small">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>

        <h4 class="mt-5">Table Success</h4>
        <Table class="table-success table-striped">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-striped small&quot;&gt;
            &lt;TableHead&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                    &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                    &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                    &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/TableHead&gt;
            &lt;TableBody&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                    &lt;td&gt;Mark&lt;/td&gt;
                    &lt;td&gt;Otto&lt;/td&gt;
                    &lt;td&gt;@mdo&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                    &lt;td&gt;Jacob&lt;/td&gt;
                    &lt;td&gt;Thornton&lt;/td&gt;
                    &lt;td&gt;@fat&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                    &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                    &lt;td&gt;@twitter&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/TableBody&gt;
        &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Hoverable </BlockTitle>
        <BlockText>Add <code>.table-hover</code> to enable a hover state on table</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="table-hover small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-hover small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Table borders </BlockTitle>
        <BlockText>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="table-bordered small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        <p class="mt-5">Border color utilities can be added to change colors:</p>
        <Table class="table-bordered border-primary small">
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-bordered small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Tables without borders </BlockTitle>
        <BlockText>Add <code>.table-borderless</code> for a table without borders.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="table-borderless small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>

            <Table class="table-borderless small table-dark">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-borderless small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Small tables </BlockTitle>
        <BlockText>Add <code>.table-sm</code> to make any <code>.table</code> more compact by cutting all cell padding in half.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="table-sm small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>

            <Table class="table-sm small table-dark">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-sm small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Table group dividers</BlockTitle>
        <BlockText>Add a thicker border, darker between table groups—<code>thead</code>, <code>tbody</code>, and <code>tfoot</code>—with .table-group-divider. Customize the color by changing the <code>border-top-color</code> (which we don’t currently provide a utility class for at this time).</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody  class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody  class=&quot;table-group-divider&quot;&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td colspan=&quot;2&quot;&gt;Larry the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Vertical alignment</BlockTitle>
        <BlockText>Table cells of <code>thead</code> are always vertical aligned to the bottom. Table cells in <code>tbody</code>,  inherit their alignment from <code>table</code> and are aligned to the top by default. Use the vertical align classes to re-align where needed.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="align-middle small">
                <TableHead>
                    <tr>
                    <th scope="col" class="w-25">Heading 1</th>
                    <th scope="col" class="w-25">Heading 2</th>
                    <th scope="col" class="w-25">Heading 3</th>
                    <th scope="col" class="w-25">Heading 4</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                        <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                        <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                    </tr>
                    <tr class="align-bottom">
                        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                        <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                    </tr>
                    <tr>
                        <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                        <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                        <td class="align-top">This cell is aligned to the top.</td>
                        <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;align-middle small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                    &lt;th scope=&quot;col&quot; class=&quot;w-25&quot;&gt;Heading 1&lt;/th&gt;
                    &lt;th scope=&quot;col&quot; class=&quot;w-25&quot;&gt;Heading 2&lt;/th&gt;
                    &lt;th scope=&quot;col&quot; class=&quot;w-25&quot;&gt;Heading 3&lt;/th&gt;
                    &lt;th scope=&quot;col&quot; class=&quot;w-25&quot;&gt;Heading 4&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;
                        &lt;td&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr class=&quot;align-bottom&quot;&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: bottom;&lt;/code&gt; from the table row&lt;/td&gt;
                        &lt;td&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;
                        &lt;td&gt;This cell inherits &lt;code&gt;vertical-align: middle;&lt;/code&gt; from the table&lt;/td&gt;
                        &lt;td class=&quot;align-top&quot;&gt;This cell is aligned to the top.&lt;/td&gt;
                        &lt;td&gt;This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Nesting </BlockTitle>
        <BlockText>Border styles, active styles, and table variants are not inherited by nested tables.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="table-striped table-bordered small">
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    <td colspan="4">
                        <Table class="table mb-0">
                            <TableHead>
                                <tr>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                <tr>
                                    <th scope="row">A</th>
                                    <td>First</td>
                                    <td>Last</td>
                                </tr>
                                <tr>
                                    <th scope="row">B</th>
                                    <td>First</td>
                                    <td>Last</td>
                                </tr>
                                <tr>
                                    <th scope="row">C</th>
                                    <td>First</td>
                                    <td>Last</td>
                                </tr>
                            </TableBody>
                        </Table>
                    </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;table-striped table-bordered small&quot;&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                    &lt;td colspan=&quot;4&quot;&gt;
                        &lt;Table class=&quot;table mb-0&quot;&gt;
                            &lt;TableHead&gt;
                                &lt;tr&gt;
                                    &lt;th scope=&quot;col&quot;&gt;Header&lt;/th&gt;
                                    &lt;th scope=&quot;col&quot;&gt;Header&lt;/th&gt;
                                    &lt;th scope=&quot;col&quot;&gt;Header&lt;/th&gt;
                                &lt;/tr&gt;
                            &lt;/TableHead&gt;
                            &lt;TableBody&gt;
                                &lt;tr&gt;
                                    &lt;th scope=&quot;row&quot;&gt;A&lt;/th&gt;
                                    &lt;td&gt;First&lt;/td&gt;
                                    &lt;td&gt;Last&lt;/td&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;th scope=&quot;row&quot;&gt;B&lt;/th&gt;
                                    &lt;td&gt;First&lt;/td&gt;
                                    &lt;td&gt;Last&lt;/td&gt;
                                &lt;/tr&gt;
                                &lt;tr&gt;
                                    &lt;th scope=&quot;row&quot;&gt;C&lt;/th&gt;
                                    &lt;td&gt;First&lt;/td&gt;
                                    &lt;td&gt;Last&lt;/td&gt;
                                &lt;/tr&gt;
                            &lt;/TableBody&gt;
                        &lt;/Table&gt;
                    &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td&gt;Larry&lt;/td&gt;
                        &lt;td&gt;the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Table head </BlockTitle>
        <BlockText>Similar to tables and dark tables, use the modifier classes <code>variant="light"</code> or <code>variant="dark"</code> to make <code>thead</code> s appear light or dark gray.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="small">
                <TableHead variant="light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
            
            <Table class="small">
                <TableHead variant="dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;small&quot;&gt;
                &lt;TableHead class=&quot;table-light&quot;&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td&gt;Larry&lt;/td&gt;
                        &lt;td&gt;the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Table foot </BlockTitle>
        <BlockText>Similar to tables and dark tables, use the prop <code>variant="light"</code> or <code>variant="dark"</code> to make <code>thead</code> appear light or dark gray.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="small">
                <TableHead variant="light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
                <TableFoot>
                    <tr>
                        <td>Footer</td>
                        <td>Footer</td>
                        <td>Footer</td>
                        <td>Footer</td>
                    </tr>
                </TableFoot>
            </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;small&quot;&gt;
                &lt;TableHead variant=&quot;light&quot;&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td&gt;Larry&lt;/td&gt;
                        &lt;td&gt;the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
                &lt;TableFoot&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Footer&lt;/td&gt;
                        &lt;td&gt;Footer&lt;/td&gt;
                        &lt;td&gt;Footer&lt;/td&gt;
                        &lt;td&gt;Footer&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableFoot&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Captions </BlockTitle>
        <BlockText>A <code>caption</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <Table class="small">
                <caption>List of users</caption>
                <TableHead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </TableBody>
            </Table>

        <p class="mt-5">You can also put the <code>caption</code> on the top of the table with <code>.caption-top</code>.</p>
        <Table class="small caption-top">
            <caption>List of users</caption>
            <TableHead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>
        </CardBody>
        <CodePreview title="code example">
            &lt;Table class=&quot;small&quot;&gt;
                &lt;caption&gt;List of users&lt;/caption&gt;
                &lt;TableHead&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;First&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Last&lt;/th&gt;
                        &lt;th scope=&quot;col&quot;&gt;Handle&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/TableHead&gt;
                &lt;TableBody&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                        &lt;td&gt;Mark&lt;/td&gt;
                        &lt;td&gt;Otto&lt;/td&gt;
                        &lt;td&gt;@mdo&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                        &lt;td&gt;Jacob&lt;/td&gt;
                        &lt;td&gt;Thornton&lt;/td&gt;
                        &lt;td&gt;@fat&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                        &lt;td&gt;Larry&lt;/td&gt;
                        &lt;td&gt;the Bird&lt;/td&gt;
                        &lt;td&gt;@twitter&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/TableBody&gt;
            &lt;/Table&gt;
        </CodePreview>
    </Card>
    </Block>

    <Block>
    <BlockHead class="wide-md">
        <BlockTitle>Table responsive </BlockTitle>
        <BlockText>Across every breakpoint, use <code>.table-responsive</code> for horizontally scrolling tables.</BlockText>
    </BlockHead>
    <Card>
        <CardBody>
            <div class="table-responsive">
                <Table>
                    <TableHead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </TableBody>
                </Table>
            </div>
        </CardBody>
        <CodePreview title="code example">
            &lt;div class=&quot;table-responsive&quot;&gt;
                &lt;Table&gt;
                    &lt;TableHead&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;col&quot;&gt;#&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                            &lt;th scope=&quot;col&quot;&gt;Heading&lt;/th&gt;
                        &lt;/tr&gt;
                    &lt;/TableHead&gt;
                    &lt;TableBody&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                            &lt;td&gt;Cell&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/TableBody&gt;
                &lt;/Table&gt;
            &lt;/div&gt;
        </CodePreview>
    </Card>
    </Block>
  </Layout>
</template>

<script>
import Layout from '@/layout/Index.vue'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockText } from '@/components/block/Block.vue';
import Card from '@/components/uielements/card/Card.vue';
import CardBody from '@/components/uielements/card/CardBody.vue';
import CodePreview from '@/components/code-preview/CodePreview.vue';
import Table from '@/components/utilities/table/Table.vue';
import TableHead from '@/components/utilities/table/TableHead.vue';
import TableBody from '@/components/utilities/table/TableBody.vue';
import TableFoot from '@/components/utilities/table/TableFoot.vue';

export default {
  name: 'TablesPage', 
  components: {
    Layout,
    Block,
    BlockHead,
    BlockHeadContent,
    BlockTitle,
    BlockText,
    Card,
    CardBody,
    CodePreview,
    Table,
    TableHead,
    TableBody,
    TableFoot
  },
}
</script>
