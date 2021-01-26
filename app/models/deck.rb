class Deck < ApplicationRecord
  belongs_to :user
  has_many :cards
  validates :title, :description, presence: true
end
