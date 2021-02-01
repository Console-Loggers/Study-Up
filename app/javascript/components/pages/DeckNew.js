import React, { Component, Fragment } from "react"
import { Redirect } from "react-router-dom"
import TermCard from "../components/TermCard"
import Button from "../components/Button"
import { Form, FormGroup, Label, Input, FormText } from "reactstrap"

export class DeckNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: "",
        description: "",
        cards: [
          {
            term: "",
            definition: "",
          },
          {
            term: "",
            definition: "",
          },
          {
            term: "",
            definition: "",
          },
        ],
      },
      submitted: false,
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleTermChange = (e, cardNumber) => {
    const { cards } = this.state.form
    let { form } = this.state
    let currentCards = cards
    let newCards = [...currentCards]
    newCards[cardNumber] = { term: e.target.value, definition: "" }
    form.cards = newCards
    this.setState({ form: form })
  }

  handleDefChange = (e, cardNumber) => {
    const { cards } = this.state.form
    let { form } = this.state
    let currentCards = cards
    let newCards = [...currentCards]
    const thisCard = cards[cardNumber]
    newCards[cardNumber] = { ...thisCard, definition: e.target.value }
    form.cards = newCards
    this.setState({ form: form })
  }

  handleAddCard = () => {
    const { cards } = this.state.form
    let { form } = this.state
    form.cards = [...cards, { term: "", definition: "" }]
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createDeck(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    const { form } = this.state
    return (
      <Fragment>
        <h1>Create a New Deck</h1>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>

        {this.state.submitted && <Redirect to="/mydecks" />}
      </Fragment>
    )
  }
}

export default DeckNew
