# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :followed_friends, Array

  def self.user(ids)
   ids = ids.empty? ? [0] : ids
   Friend.where("id NOT IN (?)", ids).order("RANDOM()")
  end
  
  def self.followed(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id IN (?)", ids)
  end

end
