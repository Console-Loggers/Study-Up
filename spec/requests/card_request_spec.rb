require 'rails_helper'

RSpec.describe "Cards", type: :request do
    
let(:user) { User.create email: 'test@test.com', password: 'test123', password_confirmation: 'test123' }

let(:deck) { Deck.create title: 'JavaScript', description: 'JS terminology', user_id: user.id }

# let!(:card) {Card.create term: 'Component', definition: 'Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.', deck_id: deck.id}

    #---- index -----
    it 'gets all the cards' do
    test = Card.create(term: 'Component', definition: 'Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.', deck_id: deck.id)

    get '/cards'
    cards = JSON.parse(response.body)

    expect(cards.length).to eq 1
    expect(cards[0]).to include(
        'id'=> test.id,
        'definition'=> test.definition,
        'deck_id'=> deck.id
    )
    expect(response).to have_http_status(200)
    end

    # -----create-----
    it 'creates a new card' do
    card_params = {
        card: {
            term: 'Component',
            definition:
                'Components are the building blocks of any React app and a typical React app will have many of these.',
            deck_id: deck.id,
        }
    }
    post '/cards', params: card_params
    card = Card.first
    
    expect(card.term).to eq 'Component'
    expect(response).to have_http_status(200)
    end

    # -----update-----
    it 'edits an card' do
    card_params = {
        card: {
            term: 'Component',
            definition:
                'Components are the building blocks of any React app and a typical React app will have many of these.',
            deck_id: deck.id,
        }
    }
    post '/cards', params: card_params
    card = Card.first

    new_card_params = {
        card: {
            term: 'Component',
            definition:
            'A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.',
            deck_id: deck.id,
        }
    }
    patch "/cards/#{card.id}", params: new_card_params
    card = Card.find card.id

    expect(card.definition).to eq 'A component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.'
    expect(response).to have_http_status(200)
    end

   # -----delete-----
   it 'deletes an card' do
    card_params = {
        card: {
            term: 'Function',
            definition:
            'Method that takes an arguement',
            deck_id: deck.id,
        }
    }
    post '/cards', params: card_params
    card = Card.first.id
    delete "/cards/#{card}"
    cards = Card.all
    

    expect(cards).to be_empty
    expect(response).to have_http_status(200)
    end
    
end

  


