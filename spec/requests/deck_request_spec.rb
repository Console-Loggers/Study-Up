require 'rails_helper'

RSpec.describe "Decks", type: :request do

    let(:user) { User.create email: 'matt@test.com', password: '123456', password_confirmation: '123456'}

    # id: 1,
    # title: 'JavaScript',
    # description: 'JS terminology',
    # user_id: 1,

    # -----index------
    it 'gets all the decks' do
        Deck.create( 
        title: 'Javascript',
        description: 'JS terminology',
        user_id: user.id)

        get '/decks'
        decks = JSON.parse(response.body)

        expect(decks.length).to eq 1
        expect(response).to have_http_status(200)
    end
    
    # -----Create-----
    it 'creates the deck' do
        deck_params = { 
            deck: {
                title: 'Javascript',
                description: 'JS terminology',
                user_id: user.id
            }
        }

        post '/decks', params: deck_params
        deck = Deck.first
        

        expect(deck.title).to eq 'Javascript'
        expect(response).to have_http_status(200)
    end

    # -----Update-----
    it 'Updates a new deck' do
        deck_params = { 
            deck: {
                title: 'Javascript',
                description: 'JS terminology',
                user_id: user.id
            }
        }

        post '/decks', params: deck_params
        deck = Deck.first

        new_deck_params = { 
            deck: {
                title: 'Javascript',
                description: 'Terms',
                user_id: user.id
            }
        }

        patch "/decks/#{deck.id}", params: new_deck_params 
        deck = Deck.find deck.id
        expect(deck.description).to eq 'Terms'
        expect(response).to have_http_status(200)
    end

    # -----Delete----- 
    it 'deletes a deck' do
        deck_params = { 
            deck: {
                title: 'Javascript',
                description: 'JS terminology',
                user_id: user.id
            }
        }

        post '/decks', params: deck_params
        deck = Deck.first
        delete "/decks/#{deck.id}"
        decks = Deck.all

        expect(decks).to be_empty
        expect(response).to have_http_status(200)
    end

end
