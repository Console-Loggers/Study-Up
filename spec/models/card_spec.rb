require 'rails_helper'

RSpec.describe Card, type: :model do

    let(:user) { User.create email: 'test@test.com', password: 'test123', password_confirmation: 'test123' }

    let(:deck) { Deck.create title: 'JavaScript', description: 'JS terminology', user_id: user.id }

    it "should have a valid term" do
        card = Card.create(

            definition:
                'Components are the building blocks of any React app and a typical React app will have many of these.',
            deck_id: deck.id,
        )
        expect(card.errors[:term]).to include "can't be blank"
      end
    
      it "should have a valid definition" do
        card = Card.create(

            term: 'Component',
            deck_id: deck.id,
        )
        expect(card.errors[:definition]).to include "can't be blank"
      end

    
end
