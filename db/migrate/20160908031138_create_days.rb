class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.string :icon
      t.float :precipIntensity
      t.float :precipProbability
      t.string :precipType
      t.integer :temperature
      t.integer :temperatureMin
      t.integer :temperatureMax
      t.float :humidity

      t.timestamps null: false
    end
  end
end
