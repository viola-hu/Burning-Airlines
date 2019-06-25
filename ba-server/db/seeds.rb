# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create! name:'Harpo', email: 'harpo@marx.co', password: 'chicken', is_admin: true
u2 = User.create! name:'Groucho', email: 'groucho@marx.co', password: 'chicken', is_admin: false
u3 = User.create! name:'Chico', email: 'chico@marx.co', password: 'chicken', is_admin: false

puts "Created #{User.all.length} users"
puts "done"


Airplane.destroy_all

a1 = Airplane.create! name: 747, rows: 18, columns: 4
a2 = Airplane.create! name: 707, rows: 20, columns: 4
a3 = Airplane.create! name: 777, rows: 22, columns: 4
a4 = Airplane.create! name: 737, rows: 16, columns: 4

puts "Created #{Airplane.all.length} Airplanes"
puts "done"



Flight.destroy_all

f1 = Flight.create! flight_number: 100, date: Date.strptime('27-06-2019', '%d-%m-%Y'), to: 'SYD', from: 'YVR'
f2 = Flight.create! flight_number: 200, date: Date.strptime('28-06-2019', '%d-%m-%Y'), to: 'LAX', from: 'JFK'
f3 = Flight.create! flight_number: 300, date: Date.strptime('30-06-2019', '%d-%m-%Y'), to: 'LGS', from: 'NYO'
f4 = Flight.create! flight_number: 400, date: Date.strptime('29-06-2019', '%d-%m-%Y'), to: 'AMS', from: 'BUF'

puts "Created #{Flight.all.length} Flights"
puts "done"


Reservation.destroy_all

r1 = Reservation.create! seat: '10B'
r2 = Reservation.create! seat: '15A'
r3 = Reservation.create! seat: '20C'
r4 = Reservation.create! seat: '1A'
r5 = Reservation.create! seat: '7D'
r6 = Reservation.create! seat: '11A'
r7 = Reservation.create! seat: '12B'
r8 = Reservation.create! seat: '7C'
r9 = Reservation.create! seat: '2C'

puts "Created #{Reservation.all.length} Reservations"
puts "done"
