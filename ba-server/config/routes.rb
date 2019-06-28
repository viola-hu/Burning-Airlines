Rails.application.routes.draw do

  resources :reservations
  resources :flights
  resources :users, except: [ :index ]
  resources :airplanes

  #airline app user login & logout routes

  #login form
  get '/login' => 'session#new'
  #create a new user session
  post '/login' => 'session#create'
  # logout
  delete '/login' => 'session#destroy'

  get '/flights/:from/:to' => 'flights#search', as: 'flights_results'

  get '/flight/:id' => 'flights#select', as: 'flight_select'

  get '/reservation/:flight_id/:user_id/:seat' => 'reservations#create', as: 'flight_reservation'

end
