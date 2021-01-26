class Card < ApplicationRecord
  validates :term, :definition,  presence: true
  belongs_to :deck
end
