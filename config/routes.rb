Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users 
    resources :friends, only: [:index, :update] do
      
    get "my_friends", to: "friends#my_friends"
  end
end
end
