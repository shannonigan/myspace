class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    # render json: Friend.all
    render json: User.random_friend(current_user.followed_friends)
  end

  def update
    current_user.followed_friends << params[:id].to_i
    current_user.save
    render json: User.random_friend(current_user.followed_friends)
  end

  def my_friends
    render json: User.followed(current_user.followed_friends)
  end

end
