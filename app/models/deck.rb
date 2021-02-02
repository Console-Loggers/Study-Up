class Deck < ApplicationRecord
  belongs_to :user
  has_many :cards
  validates :title, :description, presence: true

  accepts_nested_attributes_for :cards
end
