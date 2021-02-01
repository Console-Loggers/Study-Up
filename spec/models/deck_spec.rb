require 'rails_helper'

RSpec.describe Deck, type: :model do
    let(:user) { User.create email: 'matt@test.com', password: '123456', password_confirmation: '123456'}

    # id: 1,
    # title: 'JavaScript',
    # description: 'JS terminology',
    # user_id: 1,

    it "should have a valid title" do
        deck = Deck.create(

            description: "JS terminology",
            user_id: user.id
        )
        expect(deck.errors[:title]).to include "can't be blank"
      end

    it "should have a valid description" do
        deck = Deck.create(

            title: 'Javascript',
            user_id: user.id
        )
        expect(deck.errors[:description]).to include "can't be blank"
      end

end
