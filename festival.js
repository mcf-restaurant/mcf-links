// NOTICE/HOLIDAY/FESTIVAL FLOATING BANNER.
// Set your active notice here. Set to "" or null when there is no notice.
const IMPORTANT_NOTICE = "";
//📢 Notice: Special discounts on all combos available today! 📢

// List of Festivals (YYYY-MM-DD format)
const festivalList = [
  // --- JANUARY ---
  { date: "2026-01-01", name: "New Year's Day", wish: "✨ 🎆 Happy New Year! Wishing you a magnificent 365 days ahead! 🎆✨" },
  { date: "2026-01-14", name: "Makar Sankranti / Pongal / उत्तरायण", wish: "✨ 🎉 Happy Makar Sankranti and Pongal! 🌾✨" },
  { date: "2026-01-23", name: "Subhash Chandra Bose Jayanti (Parakram Diwas)", wish: "✨ 🇮🇳 Remembering Netaji on Parakram Diwas! 'Give me blood, and I shall give you freedom!' 🇮🇳✨" },
  { date: "2026-01-26", name: "Republic Day", wish: "✨ 🇮🇳 Happy Republic Day! Jai Hind! 🇮🇳✨" },
  { date: "2026-01-26", name: "Gujarat Earthquake Remembrance Day", wish: "✨ 🙏 Remembering the souls lost in the 2001 Bhuj Earthquake. Let's pledge to build disaster-resilient structures. 🙏✨" },
  { date: "2026-01-30", name: "Mahatma Gandhi Punyatithi (Martyrs' Day)", wish: "✨ 🙏 Remembering the Father of the Nation on Martyrs' Day. Let truth and non-violence guide us. 🙏✨" },

  // --- FEBRUARY ---
  { date: "2026-02-01", name: "Guru Ravidas Jayanti", wish: "✨ 🌸 Heartfelt greetings on Guru Ravidas Jayanti! 🌸✨" },
  { date: "2026-02-02", name: "Swami Vivekananda Jayanti (National Youth Day)", wish: "✨ 🌅 Arise, awake, and stop not till the goal is reached. Happy National Youth Day! 🌅✨" },
  { date: "2026-02-15", name: "Maha Shivratri", wish: "✨ 🔱 Om Namah Shivaya! Happy Maha Shivratri! 🔱✨" },
  { date: "2026-02-21", name: "Dayanand Saraswati Jayanti", wish: "✨ 📖 Respectful tributes to the founder of Arya Samaj, Maharishi Dayanand Saraswati Ji. 📖✨" },
  { date: "2026-02-23", name: "Chhatrapati Shivaji Maharaj Jayanti", wish: "✨ 🚩 Jai Bhavani, Jai Shivaji! Warm wishes on Shiv Jayanti! 🚩✨" },

  // --- MARCH ---
  { date: "2026-03-04", name: "Holi", wish: "✨ 🎨 Wishing you a vibrant and joyful Happy Holi! 🎨✨" },
  { date: "2026-03-11", name: "Tukaram Jayanti", wish: "✨ 📜 Devotional greetings on Sant Tukaram Maharaj Jayanti. ✨" },
  { date: "2026-03-20", name: "Eid al-Fitr", wish: "✨ 🌙 Eid Mubarak to you and your family! 🌙✨" },
  { date: "2026-03-20", name: "Chaitra Navratri / Ugadi / Gudi Padwa", wish: "✨ 🌸 Happy Navratri and a Prosperous New Year! 🌸✨" },
  { date: "2026-03-23", name: "Shaheed Diwas (Bhagat Singh, Sukhdev & Rajguru)", wish: "✨ 🇮🇳 Saluting the supreme sacrifice of our young heroes Bhagat Singh, Sukhdev, and Rajguru. 🇮🇳✨" },
  { date: "2026-03-27", name: "Ram Navami", wish: "✨ 🏹 Jai Shree Ram! Warm wishes on the auspicious occasion of Ram Navami! 🏹✨" },
  { date: "2026-03-28", name: "Hanuman Jayanti", wish: "✨ 🐒 May Bajrangbali bless you with immense strength, courage, and wisdom. Jai Hanuman! 🐒✨" },

  // --- APRIL ---
  { date: "2026-04-02", name: "Mahavir Jayanti", wish: "✨ 🕊️ Wishing you peace and virtue on Mahavir Jayanti. Live and let live. 🕊️✨" },
  { date: "2026-04-14", name: "Ambedkar Jayanti", wish: "✨ 📖 Jai Bhim! Happy Ambedkar Jayanti! 📖✨" },

  // --- MAY ---
  { date: "2026-05-02", name: "Buddha Purnima / Buddha Jayanti", wish: "✨ ☸️ May the teachings of Lord Buddha bring peace and harmony to your life. ☸️✨" },
  { date: "2026-05-09", name: "Rabindranath Tagore Jayanti", wish: "✨ ✍️ Remembering the Bard of Bengal, Gurudev Rabindranath Tagore on his birth anniversary. ✨" },
  { date: "2026-05-27", name: "Eid al-Adha", wish: "✨ 🐐 Heartfelt wishes on Eid al-Adha! Eid Mubarak! 🐐✨" },

  // --- JUNE ---
  { date: "2026-06-05", name: "World Environment Day", wish: "✨ 🌱 Let's nurture nature so we can have a better future. Happy Environment Day! 🌱✨" },
  { date: "2026-06-21", name: "International Yoga Day", wish: "✨ 🧘‍♂️ Align your mind, body, and soul. Happy International Yoga Day! 🧘‍♂️✨" },
  { date: "2026-06-21", name: "Kabir Jayanti", wish: "✨ 📜 Remembering Sant Kabir Das Ji on his birth anniversary. ✨" },

  // --- AUGUST ---
  { date: "2026-08-11", name: "Tulsidas Jayanti", wish: "✨ ✍️ Warm greetings on the birth anniversary of Ramcharitmanas author, Goswami Tulsidas Ji. ✨" },
  { date: "2026-08-15", name: "Independence Day", wish: "✨ 🇮🇳 Happy Independence Day! Vande Mataram! 🇮🇳✨" },
  { date: "2026-08-28", name: "Raksha Bandhan", wish: "✨ 🧵 Happy Raksha Bandhan to my wonderful sibling! 🧵✨" },

  // --- SEPTEMBER ---
  { date: "2026-09-01", name: "National Nutrition Week (Start)", wish: "🥦 Commencing National Nutrition Week! Focus on health, balanced diets, and the POSHAN Abhiyaan for a healthier nation. 🍎" },
  { date: "2026-09-02", name: "World Coconut Day", wish: "🥥 Happy World Coconut Day! Celebrating nature's versatile superfood and supporting sustainable coconut farming. 🌴" },
  { date: "2026-09-05", name: "Teachers' Day (Dr. S. Radhakrishnan Jayanti)", wish: "📚 Happy Teachers' Day! Honoring the birth anniversary of Dr. S. Radhakrishnan and celebrating the mentors shaping our future. 🎓" },
  { date: "2026-09-05", name: "International Day of Charity", wish: "❤️ Observing International Day of Charity on Mother Teresa's death anniversary. Let's contribute to uplifting the marginalized. 🤝" },
  { date: "2026-09-08", name: "International Literacy Day", wish: "📖 Happy International Literacy Day! Advocating for quality education and literacy as foundational rights for all (SDG 4). 🌍" },
  { date: "2026-09-11", name: "National Forest Martyrs Day (Khejarli Massacre)", wish: "🌿 Remembering the brave hearts of the 1730 Khejarli Massacre. Their ultimate sacrifice inspires our wildlife and forest conservation. 🌲" },
  { date: "2026-09-11", name: "9/11 Remembrance Day", wish: "🕊️ Honoring the memories of the victims of the 2001 tragedy. Reaffirming global commitments against terrorism and violence. 🗺️" },
  { date: "2026-09-14", name: "Ganesh Chaturthi", wish: "✨ 🐘 Ganpati Bappa Morya! Happy Ganesh Chaturthi! 🐘✨" },
  { date: "2026-09-14", name: "Hindi Diwas", wish: "✍️ हिंदी दिवस की शुभकामनाएं! Commemorating the adoption of Hindi as an official language under Article 343. 🇮🇳" },
  { date: "2026-09-15", name: "Engineers' Day (Sir M. Visvesvaraya Jayanti)", wish: "⚙️ Happy Engineers' Day! Saluting the legacy of Bharat Ratna Sir M. Visvesvaraya and the innovative minds building our infrastructure. 🏗️" },
  { date: "2026-09-15", name: "International Day of Democracy", wish: "🗳️ Celebrating the International Day of Democracy. Upholding transparency, constitutional rights, and good governance structures. 🏛️" },
  { date: "2026-09-16", name: "World Ozone Day", wish: "🌍 Happy World Ozone Day! Celebrating the success of the Montreal Protocol in protecting the planet's vital shield. ☀️" },
  { date: "2026-09-17", name: "Vishwakarma Jayanti", wish: "🔨 Happy Vishwakarma Jayanti! Honoring the divine architect, craftsman, and the spirit of labor and innovation. 🛠️" },
  { date: "2026-09-17", name: "World Patient Safety Day", wish: "🏥 Observing World Patient Safety Day. Promoting safe global public healthcare systems and reducing diagnostic errors. 🩺" },
  { date: "2026-09-21", name: "Sree Narayana Guru Samadhi", wish: "🙏 Solemn tributes on Sree Narayana Guru Samadhi. Remembering his message: 'One Caste, One Religion, One God for Mankind.' ✨" },
  { date: "2026-09-21", name: "International Day of Peace", wish: "🕊️ Happy International Day of Peace! Striving together for global ceasefires, non-violence, and structural harmony. 🗺️" },
  { date: "2026-09-22", name: "World Rhino Day", wish: "🦏 Happy World Rhino Day! Committing to the protection and conservation of India's iconic Greater One-Horned Rhino. 🌿" },
  { date: "2026-09-25", name: "Antyodaya Diwas (Pandit Deendayal Upadhyaya Jayanti)", wish: "🌾 Celebrating Antyodaya Diwas. Reaffirming the philosophy of Integral Humanism and uplifting the last person in society. 🇮🇳" },
  { date: "2026-09-27", name: "World Tourism Day", wish: "✈️ Happy World Tourism Day! Promoting sustainable eco-tourism, cultural heritage, and responsible travel global growth. 🗺️" },
  { date: "2026-09-28", name: "Bhagat Singh Jayanti", wish: "✊ Tributes to the legendary revolutionary freedom fighter Shaheed Bhagat Singh on his birth anniversary. Inquilab Zindabad! 🇮🇳" },

  // --- OCTOBER ---
  { date: "2026-10-01", name: "International Day of Older Persons", wish: "👴 Happy International Day of Older Persons! Honoring the wisdom, contributions, and resilience of our senior citizens. 👵" },
  { date: "2026-10-02", name: "Gandhi Jayanti / International Day of Non-Violence", wish: "🕊️ Tributes to the Father of the Nation on Gandhi Jayanti. Embracing the eternal values of Satya, Ahimsa, and cleanliness. 🇮🇳" },
  { date: "2026-10-02", name: "Lal Bahadur Shastri Jayanti", wish: "🌾 Remembering former PM Lal Bahadur Shastri on his birth anniversary. Remembering his historic call of 'Jai Jawan, Jai Kisan'. 🇮🇳" },
  { date: "2026-10-04", name: "World Animal Welfare Day", wish: "🐾 Happy World Animal Welfare Day! Promoting compassionate care, ethical treatment, and wildlife habitat conservation. 🦁" },
  { date: "2026-10-05", name: "World Teachers' Day", wish: "📚 Happy World Teachers' Day! Honoring the dedication of educators driving transformative global knowledge. 🎓" },
  { date: "2026-10-08", name: "Indian Air Force Day", wish: "✈️ Saluting our brave air warriors on Indian Air Force Day. Thank you for guarding our skies with touch the sky with glory! 🇮🇳" },
  { date: "2026-10-09", name: "World Post Day", wish: "📬 Happy World Post Day! Commemorating the 1874 Universal Postal Union establishment and its role in global communication. ✉️" },
  { date: "2026-10-10", name: "World Mental Health Day", wish: "🧠 Observing World Mental Health Day. Let's break the stigma and prioritize emotional well-being as a universal right. 💚" },
  { date: "2026-10-11", name: "International Day of the Girl Child", wish: "👧 Happy International Day of the Girl Child! Empowering girls, securing their rights, and bridging gender gaps globally. ⚡" },
  { date: "2026-10-12", name: "World Arthritis Day", wish: "🏥 Raising awareness on World Arthritis Day. Supporting early diagnosis, proper care, and access to orthopedic healthcare. 🩺" },
  { date: "2026-10-13", name: "International Day for Disaster Risk Reduction", wish: "🌪️ Observing International Day for Disaster Risk Reduction. Building resilient infrastructure and mitigation frameworks. 🏗️" },
  { date: "2026-10-15", name: "World Students' Day (Dr. APJ Abdul Kalam Jayanti)", wish: "🚀 Happy World Students' Day! Honoring the People's President Dr. APJ Abdul Kalam and inspiring young minds to dream big. 🎓" },
  { date: "2026-10-16", name: "World Food Day", wish: "🌾 Happy World Food Day! Supporting FAO's vision to eradicate hunger, ensure food security, and practice sustainable agriculture. 🍎" },
  { date: "2026-10-17", name: "International Day for the Eradication of Poverty", wish: "🤝 Observing the International Day for the Eradication of Poverty. Striving for equitable growth and economic justice. 🗺️" },
  { date: "2026-10-20", name: "Maha Navami / World Statistics Day", wish: "✨ Wishing you a blessed Maha Navami! Also celebrating the integrity of reliable data on World Statistics Day. 📊" },
  { date: "2026-10-21", name: "Vijayadashami (Dussehra) / Police Commemoration Day", wish: "🏹 Shubh Dussehra! Celebrating the victory of good over evil while honoring our brave police martyrs. 👮‍♂️" },
  { date: "2026-10-24", name: "United Nations Day", wish: "🇺🇳 Happy United Nations Day! Commemorating the 1945 UN Charter to foster global cooperation, peace, and security. 🕊️" },
  { date: "2026-10-24", name: "World Polio Day", wish: "💉 Observing World Polio Day. Celebrating the global public health progress toward a completely polio-free world. 🩺" },
  { date: "2026-10-31", name: "National Unity Day (Rashtriya Ekta Diwas)", wish: "🇮🇳 Happy National Unity Day! Honoring the Iron Man of India, Sardar Vallabhbhai Patel, on his birth anniversary. 🗽" },

  // --- NOVEMBER ---
  { date: "2026-11-01", name: "World Vegan Day / Statehood Days (Rajyotsava)", wish: "🌱 Happy World Vegan Day! Also celebrating the formation & statehood days of Kerala, Karnataka, MP, Chhattisgarh, Haryana, and Punjab. 🇮🇳" },
  { date: "2026-11-05", name: "World Tsunami Awareness Day", wish: "🌊 Observing World Tsunami Awareness Day. Promoting early warning mechanisms, coastal community safety, and traditional knowledge sharing. 🗺️" },
  { date: "2026-11-06", name: "Dhanteras (Dhantrayodashi)", wish: "✨ Shubh Dhanteras! Praying for your household's absolute prosperity, health, and a blissful beginning to the festive season. 🪙" },
  { date: "2026-11-07", name: "National Cancer Awareness Day", wish: "🏥 Observing National Cancer Awareness Day. Enhancing health frameworks, public diagnostics, and affordable care protocols. 🩺" },
  { date: "2026-11-08", name: "Diwali (Deepavali / Lakshmi Puja)", wish: "🪔 ✨ Shubh Deepavali! May the festival of lights bring infinite joy, sparkling prosperity, and wisdom to you and your family. ✨ 🪔" },
  { date: "2026-11-09", name: "Legal Services Day", wish: "⚖️ Commemorating National Legal Services Day. Committing to Article 39A and ensuring free, equal access to justice for the marginalized. 🏛️" },
  { date: "2026-11-10", name: "Govardhan Puja / World Science Day for Peace and Development", wish: "🌿 Shubh Govardhan Puja! Also highlighting science as an essential instrument for sustainable global peace. 🔬" },
  { date: "2026-11-11", name: "National Education Day (Maulana Abul Kalam Azad Jayanti) / Bhai Dooj", wish: "📚 Happy National Education Day honoring India's first Education Minister! Wishing everyone a heartwarming and beautiful Bhai Dooj. 🤝" },
  { date: "2026-11-13", name: "Chhath Puja Begins (Nahay Khay)", wish: "🌊 Warm wishes on the initiation of Chhath Puja. Embracing the highest principles of spiritual purity, austerity, and physical cleansing. ✨" },
  { date: "2026-11-14", name: "Children's Day (Pt. Jawaharlal Nehru Jayanti)", wish: "🎈 Happy Children's Day! Commemorating Chacha Nehru's birth anniversary and protecting every child's fundamental right to education and growth. 🎓" },
  { date: "2026-11-15", name: "Janjatiya Gaurav Diwas (Birsa Munda Jayanti) / Chhath Puja (Sandhya Arghya)", wish: "🏹 Saluting the iconic freedom fighter Bhagwan Birsa Munda on Janjatiya Gaurav Diwas. Prayers to the setting Sun on this auspicious Chhath Evening. ☀️" },
  { date: "2026-11-16", name: "National Press Day", wish: "📰 Happy National Press Day! Celebrating an independent, responsible, and ethical press as the structural fourth pillar of Indian democracy. ✍️" },
  { date: "2026-11-19", name: "World Toilet Day / Jhansi Ki Rani Jayanti", wish: "🚽 World Toilet Day emphasizing sanitation frameworks (SDG 6). Tributes to the legendary warrior Rani Lakshmibai on her birth anniversary. ⚔️" },
  { date: "2026-11-20", name: "World Children's Day / Universal Children's Day", wish: "🌍 Happy World Children's Day! Advocating for universal child welfare, digital safety, and youth-led environmental actions. ⚡" },
  { date: "2026-11-21", name: "World Fisheries Day", wish: "🐟 Happy World Fisheries Day! Championing sustainable marine ecosystems, small-scale fishers' welfare, and blue economy models. 🌊" },
  { date: "2026-11-24", name: "Guru Tegh Bahadur Martyrdom Day (Shaheedi Diwas)", wish: "🙏 Solemn tributes to the 9th Sikh Guru, Guru Tegh Bahadur Ji. Remembering his immense, unyielding sacrifice for human rights and liberty. ✨" },
  { date: "2026-11-25", name: "Guru Nanak Gurpurab (Guru Nanak Jayanti)", wish: "✨ Happy Guru Nanak Jayanti! May the profound teachings of Kirat Karo, Naam Japna, and Vand Chhako illuminate your life. 🙏" },
  { date: "2026-11-26", name: "Constitution Day (Samvidhan Diwas) / National Milk Day", wish: "📜 Happy Constitution Day! Celebrating the adoption of our sacred document in 1949. Also honoring Dr. Verghese Kurien's White Revolution legacy. 🥛" },
  { date: "2026-11-26", name: "26/11 Mumbai Terror Attacks Remembrance", wish: "🕯️ Paying solemn homage to the victims and legendary security personnel who made the ultimate sacrifice protecting the nation on 26/11. 🇮🇳" },

  // --- DECEMBER ---
  { date: "2026-12-01", name: "World AIDS Day / BSF Raising Day", wish: "🩸 Observing World AIDS Day to raise awareness and eliminate stigma. Also saluting our brave Border Security Force personnel on their Raising Day! 🇮🇳" },
  { date: "2026-12-02", name: "National Pollution Control Day (Bhopal Gas Tragedy Remembrance)", wish: "🏭 Remembering the victims of the 1984 Bhopal Gas Tragedy. Reaffirming our commitment to industrial safety and environmental protection. 🌿" },
  { date: "2026-12-03", name: "International Day of Persons with Disabilities", wish: "♿ Observing the International Day of Persons with Disabilities. Promoting inclusivity, accessible infrastructure, and equal opportunities for all. ⚡" },
  { date: "2026-12-04", name: "Indian Navy Day", wish: "⚓ Saluting the courage and dedication of our Indian Navy personnel on Navy Day, commemorating the historic Operation Trident (1971). 🇮🇳" },
  { date: "2026-12-05", name: "World Soil Day", wish: "🌱 Happy World Soil Day! Protecting soil biodiversity and promoting sustainable agricultural practices to ensure food security. 🌾" },
  { date: "2026-12-07", name: "Armed Forces Flag Day", wish: "🪖 Honoring the courage and sacrifices of our Armed Forces personnel. Let's contribute generously to the Flag Day fund. 🇮🇳" },
  { date: "2026-12-09", name: "International Anti-Corruption Day", wish: "🛑 Observing International Anti-Corruption Day. Strengthening institutional transparency, accountability, and good governance structures. 🏛️" },
  { date: "2026-12-10", name: "Human Rights Day", wish: "📜 Happy Human Rights Day! Commemorating the 1948 UDHR adoption and upholding dignity, freedom, and justice for all. 🌍" },
  { date: "2026-12-11", name: "International Mountain Day / UNICEF Day", wish: "🏔️ Protecting fragile mountain ecosystems on International Mountain Day. Also celebrating UNICEF's tireless work for children global welfare. 🎈" },
  { date: "2026-12-14", name: "National Energy Conservation Day", wish: "💡 Observing National Energy Conservation Day. Adopting energy-efficient systems and renewable resources to combat climate change. 🔋" },
  { date: "2026-12-16", name: "Vijay Diwas", wish: "🎖️ Saluting the valor and historic victory of our armed forces in the 1971 war, which led to the creation of Bangladesh. 🇮🇳" },
  { date: "2026-12-18", name: "Minorities Rights Day", wish: "🤝 Observing Minorities Rights Day in India. Upholding constitutional safeguards, religious freedom, and inclusive social progress. 🏛️" },
  { date: "2026-12-22", name: "National Mathematics Day (Srinivasa Ramanujan Jayanti)", wish: "📐 Happy National Mathematics Day! Celebrating the birth anniversary of the legendary mathematical genius Srinivasa Ramanujan. 📊" },
  { date: "2026-12-23", name: "National Farmers' Day (Kisan Diwas / Chaudhary Charan Singh Jayanti)", wish: "🌾 Happy National Farmers' Day! Saluting the backbone of our nation on the birth anniversary of former Prime Minister Chaudhary Charan Singh. 🇮🇳" },
  { date: "2026-12-24", name: "National Consumer Rights Day", wish: "🛒 Observing National Consumer Rights Day. Empowering citizens with awareness about the Consumer Protection Act and rights. ⚖️" },
  { date: "2026-12-25", name: "Good Governance Day (Atal Bihari Vajpayee Jayanti) / Christmas", wish: "🎄 Merry Christmas! Also celebrating Good Governance Day on the birth anniversary of former PM Bharat Ratna Atal Bihari Vajpayee. 🏛️" },
  { date: "2026-12-26", name: "Veer Baal Diwas", wish: "🙏 Solemn tributes on Veer Baal Diwas, honoring the unparalleled courage and martyrdom of Sahibzada Zorawar Singh Ji and Sahibzada Fateh Singh Ji. ✨" }
];
