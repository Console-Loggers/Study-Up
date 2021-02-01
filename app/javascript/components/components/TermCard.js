import React, { Component, Fragment } from "react"
import { Row, FormGroup, Label, Input, Col } from "reactstrap"

export class TermCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        term: "",
        definition: "",
      },
    }
  }

  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  render() {
    const { termChange, defChange, cardNumber } = this.props
    return (
      <Fragment>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Term</Label>
              <Input
                type="text"
                name="term"
                placeholder="Enter a Term"
                onChange={(e) => termChange(e, cardNumber)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Definition</Label>
              <Input
                type="text"
                name="definition"
                placeholder="Enter a Definition"
                onChange={(e) => defChange(e, cardNumber)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default TermCard
