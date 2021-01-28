class DecksController < ApplicationController

    def index
        decks = Deck.where(user_id: current_user.id)
        render json: decks.to_json(include: :cards)
    end
    
    def show
        deck = Deck.find(params[:id])
        render json: deck.to_json(include: :cards)
    end

    def create
        deck = Deck.create(deck_params)
        if deck.valid?
            render json: deck
        else 
            render json: deck.errors, status: :unprocessable_entity
        end
    end
    
    def update
        deck = Deck.find(params[:id])
        deck.update(deck_params)
        if deck.valid?
            render json: deck
        else
            render json: deck.errors, status: :unprocessable_entity
        end
    end

    def destroy
        deck = Deck.find(params[:id])
        deck.destroy
        if deck.valid?
            render json: deck
        else
            render json: deck.errors, status: :unprocessable_entity
        end
    end
    
    private
    def deck_params
        params.require(:deck).permit(:title, :description, :user_id, card_attributes: [ :term, :definition, :deck_id])
    end
end
