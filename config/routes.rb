Rails.application.routes.draw do
  resources :weeks
  resources :days

  get '/' => 'days#index'
  root 'days#index'

end
