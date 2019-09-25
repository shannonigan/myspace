20.times do
  name = Faker::FunnyName.two_word_name 
  avatar = Faker::Avatar.image(slug: name, size: "100x200", format: "png", set: "set5")
  Friend.create(name: name, avatar: avatar)
end

puts "Friends Seeded"