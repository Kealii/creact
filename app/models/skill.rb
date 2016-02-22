class Skill < ActiveRecord::Base
  enum level: [:Bad, :Mediocre, :Fantastic]
end
