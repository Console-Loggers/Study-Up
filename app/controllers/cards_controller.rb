class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: cards
    end

    def create
        card = Card.create(card_params)
        if card.valid?
            render json: card
        else
            render json: card.errors, status: :unprocessable_entity
        end
    end

    def update
        card = Card.find(params[:id])
        card.update(card_params)
        if card.valid?
            render json: card
        else
            render json: card.errors, status: :unprocessable_entity
        end
    end

    def destroy
        card = Card.find(params[:id])
        card.destroy
        if card.valid?
            render json: card
        else
            render json: card.errors, status: :unprocessable_entity
        end
    end

    private
    #  cards have: a term(front), definition(back), & deck id

    def card_params
        params.require(:card).permit(:term, :definition, :deck_id)
    end
end