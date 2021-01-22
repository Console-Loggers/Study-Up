class DecksController < ApplicationController

    def index
        decks = Deck.all
        render json: decks
    end
    
    def create
        deck = Deck.create(deck_params)
        if deck.valid?
            render json: deck
        else 
            render json:deck.errors, status: :unprocessable_entity
        end
    end

    # **********Both update and delete have same syntax and both are failing.**********

    # def update
    #     deck = Deck.find params[:id] deck.update(deck_params)
    #     if deck.valid?
    #         render json: deck
    #     else 
    #         render json: deck.errors, status: :unprocessable_entity
    #     end
    # end
    
    def destroy
        deck = Deck.find params[:id] deck.destroy
        if deck.valid?
            render json: deck
        else
            render json: deck.errors, status: :unprocessable_entity
        end
    end
    
    private
    def deck_params
        params.require(:deck).permit(:title, :description, :user_id)
    end
end
