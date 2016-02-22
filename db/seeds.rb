class Seed
  attr_reader :seed
  def initialize
    @seed
  end

  def run
    generate_skills
  end

  def generate_skills
    50.times do
      skill = Skill.new
      skill.name = Faker::Superhero.power.titleize
      skill.details = Faker::Hipster.paragraph(2)
      skill.level = [0, 1, 2].sample
      skill.save!
      puts "Generated skill # #{skill.id}"
    end
  end
end

seed = Seed.new
seed.run
