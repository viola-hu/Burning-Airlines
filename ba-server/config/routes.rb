Rails.application.routes.draw do


  resources :users, except: [ :index ]
  resources :airplanes

  #airline app user login & logout routes

  #login form
  get '/login' => 'session#new'
  #create a new user session
  post '/login' => 'session#create'
  # logout
  delete '/login' => 'session#destroy'

  end
