Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/home', to: 'home#landing_page'
  get '/cookies', to: 'home#cookies'
  get '/landing-page', to: 'home#landing_page'
  get '/not-permitted', to: 'home#not_permitted'

  root 'welcome#index'
end
