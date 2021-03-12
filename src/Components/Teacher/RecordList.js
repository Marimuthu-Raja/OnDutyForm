import React, { Component } from 'react'
import Records from './Records'
import {Segment,Header, Container} from 'semantic-ui-react'


export default class RecordList extends Component {
    render() {
        return (
            <>
                    <Container>
                        <Segment style={{marginTop:'20px'}} raised>
                            <Header as='h2' textAlign='center' color='teal'>
                                On Duty Records
                            </Header>
                        </Segment>
                    </Container>

                    <Records/>
            </>
        )
    }
}
