class CreateAirplanes < ActiveRecord::Migration[5.2]
  def change
    create_table :airplanes do |t|
      t.integer :name
      t.integer :rows
      t.integer :columns

      t.timestamps
    end
  end
end
