class AddFollowedFriendsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :followed_friends, :text
  end
end
