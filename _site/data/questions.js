// PassMate UK - Question Bank
// 300+ original questions based on DVSA 2024/2025 theory test domains
// All questions are original and not copied from any commercial source.

const QUESTIONS = [

  // ─────────────────────────────────────────────
  // ALERTNESS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q001", category: "alertness", subcategory: "observation",
    question: "You are driving on a busy road and your mobile phone rings. What should you do?",
    options: ["A. Answer it quickly and keep driving", "B. Pull over safely before answering", "C. Use loudspeaker so both hands stay on wheel", "D. Slow down and answer if it's urgent"],
    correct: "B", difficulty: "easy",
    explanation: "You must not use a hand-held phone while driving. Pull over in a safe place before using your phone. Hands-free is legal but can still be a distraction.",
    hcRule: "Rule 149", imageUrl: null
  },
  {
    id: "Q002", category: "alertness", subcategory: "observation",
    question: "What is the main benefit of looking well ahead when driving?",
    options: ["A. You can drive faster", "B. You can spot hazards earlier and react in time", "C. It reduces fuel consumption", "D. It helps with lane changing"],
    correct: "B", difficulty: "easy",
    explanation: "Looking well ahead gives you more time to identify developing hazards and plan your response, reducing the need for sudden braking or swerving.",
    hcRule: "Rule 159", imageUrl: null
  },
  {
    id: "Q003", category: "alertness", subcategory: "distractions",
    question: "You are feeling very tired on a long motorway journey. What should you do?",
    options: ["A. Open a window and continue", "B. Turn up the radio", "C. Stop at the next services and rest", "D. Drink a can of energy drink and continue"],
    correct: "C", difficulty: "easy",
    explanation: "If you feel tired, you should stop at a safe place and rest. Opening a window or loud music offer only very brief relief and are not safe solutions.",
    hcRule: "Rule 91", imageUrl: null
  },
  {
    id: "Q004", category: "alertness", subcategory: "observation",
    question: "What should you do FIRST when you notice a potential hazard ahead?",
    options: ["A. Sound your horn", "B. Brake sharply", "C. Check your mirrors", "D. Indicate and move to the side"],
    correct: "C", difficulty: "medium",
    explanation: "The Mirror-Signal-Manoeuvre routine requires you to check mirrors before braking or changing course, so you know what is happening behind you before reacting.",
    hcRule: "Rule 159", imageUrl: null
  },
  {
    id: "Q005", category: "alertness", subcategory: "distractions",
    question: "Which of the following is the MOST dangerous distraction while driving?",
    options: ["A. Listening to the radio", "B. Reading a text message on a hand-held phone", "C. Having a passenger in the car", "D. Eating a snack at a red light"],
    correct: "B", difficulty: "easy",
    explanation: "Using a hand-held phone to read or send messages is illegal and one of the most dangerous distractions as it takes your eyes, hands, and concentration off the road.",
    hcRule: "Rule 149", imageUrl: null
  },
  {
    id: "Q006", category: "alertness", subcategory: "anticipation",
    question: "You are following a bus that has stopped. A passenger gets off. What should you anticipate?",
    options: ["A. The bus will pull away immediately", "B. The passenger may cross the road in front of the bus", "C. Other buses may stop behind you", "D. You should overtake the bus immediately"],
    correct: "B", difficulty: "medium",
    explanation: "Passengers who have just left a bus may cross the road without checking traffic. Be prepared to stop, particularly if the bus blocks your view of pedestrians.",
    hcRule: "Rule 223", imageUrl: null
  },
  {
    id: "Q007", category: "alertness", subcategory: "observation",
    question: "When should you use your mirrors?",
    options: ["A. Only when overtaking", "B. Regularly and before signalling, changing speed, or direction", "C. Only when reversing", "D. Every five minutes on motorways"],
    correct: "B", difficulty: "easy",
    explanation: "You should check your mirrors regularly and always before signalling, changing speed, or changing direction to ensure you are aware of what is behind you.",
    hcRule: "Rule 159", imageUrl: null
  },
  {
    id: "Q008", category: "alertness", subcategory: "anticipation",
    question: "A ball rolls into the road ahead. What should you expect?",
    options: ["A. Nothing - balls rarely cause accidents", "B. A child may run into the road to fetch it", "C. Another vehicle may swerve to avoid it", "D. The ball will stop rolling quickly"],
    correct: "B", difficulty: "easy",
    explanation: "A ball in the road often means a child is nearby and may run into the road without checking for traffic. Slow down and be prepared to stop.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q009", category: "alertness", subcategory: "observation",
    question: "What does a good driving position help you achieve?",
    options: ["A. Faster acceleration", "B. Better all-round visibility and control", "C. Lower insurance premiums", "D. Reduced tyre wear"],
    correct: "B", difficulty: "easy",
    explanation: "A correct driving position - seat adjusted, mirrors set, hands at 10-and-2 or 9-and-3 - gives you full control of the vehicle and good visibility in all directions.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q010", category: "alertness", subcategory: "distractions",
    question: "Why is it dangerous to drive while under the influence of some prescription medicines?",
    options: ["A. Prescription medicines are always safe to drive on", "B. Some medicines can cause drowsiness, blurred vision, or impaired reactions", "C. Medicines only affect cyclists", "D. Only illegal drugs affect driving ability"],
    correct: "B", difficulty: "medium",
    explanation: "Certain prescribed medications - including antihistamines, strong painkillers, and sedatives - can impair your ability to drive. Always check the label or ask your doctor.",
    hcRule: "Rule 96", imageUrl: null
  },
  {
    id: "Q011", category: "alertness", subcategory: "observation",
    question: "You are approaching a junction with parked vehicles on your left that obstruct your view. What should you do?",
    options: ["A. Sound your horn and proceed", "B. Flash your lights and speed up", "C. Slow down and edge forward until you can see clearly", "D. Assume the road is clear and proceed normally"],
    correct: "C", difficulty: "medium",
    explanation: "Where your view is blocked, slow right down and creep forward until you can see safely into the junction. Never assume the road is clear.",
    hcRule: "Rule 170", imageUrl: null
  },
  {
    id: "Q012", category: "alertness", subcategory: "anticipation",
    question: "You see a school ahead with children on the pavement. What should you do?",
    options: ["A. Maintain your speed - children should wait", "B. Sound your horn to warn children", "C. Slow down and be ready to stop", "D. Flash your lights"],
    correct: "C", difficulty: "easy",
    explanation: "Near schools, children may step into the road unexpectedly. Reduce speed and be ready to stop. Be especially alert at school start and finish times.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q013", category: "alertness", subcategory: "observation",
    question: "What is a 'blind spot' on a vehicle?",
    options: ["A. The area directly in front of the bonnet", "B. An area not visible in any mirror", "C. The area illuminated by headlights at night", "D. A fault with the windscreen"],
    correct: "B", difficulty: "easy",
    explanation: "Blind spots are areas around your vehicle not visible via mirrors. You should turn your head to check blind spots before changing lanes or pulling out.",
    hcRule: "Rule 161", imageUrl: null
  },
  {
    id: "Q014", category: "alertness", subcategory: "observation",
    question: "When driving at night, what does a dazzling reflection in your rear-view mirror from following headlights mean?",
    options: ["A. Your brake lights are faulty", "B. The following driver is too close and you may need to increase your distance ahead", "C. You should accelerate away", "D. You should brake to warn the following driver"],
    correct: "B", difficulty: "medium",
    explanation: "If a following vehicle's lights dazzle you in the mirror, they are too close. Increase the gap ahead so you have more room to brake progressively. Many mirrors have a night position to reduce glare.",
    hcRule: "Rule 235", imageUrl: null
  },
  {
    id: "Q015", category: "alertness", subcategory: "distractions",
    question: "You are driving and your sat-nav loses signal. What should you do?",
    options: ["A. Look at your phone to re-route while driving", "B. Pull over safely to check your route before continuing", "C. Speed up to reach your destination before getting lost", "D. Ask a passenger to hold the phone in front of your face"],
    correct: "B", difficulty: "medium",
    explanation: "Looking at a phone or screen while driving is extremely dangerous. Pull over in a safe place to sort navigation issues before continuing your journey.",
    hcRule: "Rule 149", imageUrl: null
  },
  {
    id: "Q016", category: "alertness", subcategory: "anticipation",
    question: "A pedestrian is walking along the road at night wearing dark clothing. What should you do?",
    options: ["A. Flash your lights to warn them", "B. Sound your horn", "C. Slow down - they may be difficult to see in time", "D. Move to the opposite side of the road"],
    correct: "C", difficulty: "medium",
    explanation: "Pedestrians in dark clothing are very hard to see at night. Reduce speed so your stopping distance is within the area illuminated by your headlights.",
    hcRule: "Rule 93", imageUrl: null
  },
  {
    id: "Q017", category: "alertness", subcategory: "observation",
    question: "What does a 'lifesaver' check involve?",
    options: ["A. Checking your seatbelt before moving", "B. A final glance over your shoulder in your blind spot before a manoeuvre", "C. Checking all doors are closed", "D. Checking your brakes at the start of a journey"],
    correct: "B", difficulty: "medium",
    explanation: "A lifesaver is a final over-the-shoulder blind spot check done before a manoeuvre such as changing lanes, especially on motorcycles. It can prevent collisions with vehicles in your blind spot.",
    hcRule: "Rule 161", imageUrl: null
  },
  {
    id: "Q018", category: "alertness", subcategory: "distractions",
    question: "How does loud music in a car affect driving safety?",
    options: ["A. It has no effect", "B. It can mask important sounds such as horns or emergency sirens", "C. It helps the driver stay awake on long journeys", "D. It only affects new drivers"],
    correct: "B", difficulty: "medium",
    explanation: "Very loud music can prevent you from hearing emergency sirens, horns from other drivers, or sounds indicating a problem with your vehicle.",
    hcRule: "Rule 148", imageUrl: null
  },
  {
    id: "Q019", category: "alertness", subcategory: "anticipation",
    question: "You are driving in fog. Ahead, a vehicle's rear lights disappear suddenly. What should this tell you?",
    options: ["A. The vehicle has entered a tunnel", "B. The vehicle may have stopped or turned; reduce speed immediately", "C. You are now clear of the fog", "D. The vehicle ahead has turned its lights off"],
    correct: "B", difficulty: "hard",
    explanation: "In fog, disappearing tail lights could mean the vehicle has stopped suddenly or turned sharply. React by slowing down immediately as your stopping distance may be insufficient.",
    hcRule: "Rule 235", imageUrl: null
  },
  {
    id: "Q020", category: "alertness", subcategory: "observation",
    question: "What effect can strong sunlight have on driving?",
    options: ["A. No effect - sunlight improves visibility", "B. It can dazzle drivers and obscure hazards, especially when low on the horizon", "C. It makes road markings brighter and easier to see", "D. It reduces stopping distances"],
    correct: "B", difficulty: "easy",
    explanation: "Low sun can be very dangerous, particularly at sunrise and sunset. Use your sun visor and sunglasses. Slow down if sun is directly in your eyes and you cannot see clearly.",
    hcRule: "Rule 237", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // ATTITUDE (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q021", category: "attitude", subcategory: "courtesy",
    question: "A driver behind you is flashing their lights and sounding their horn. What should you do?",
    options: ["A. Brake check them to teach them a lesson", "B. Speed up to get out of their way", "C. Stay calm, keep to the speed limit, and do not react aggressively", "D. Slow down and wave them past on a bend"],
    correct: "C", difficulty: "easy",
    explanation: "Aggressive behaviour from other drivers should never be responded to in kind. Stay calm, maintain safe speed and distance, and let them pass when it is safe to do so.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q022", category: "attitude", subcategory: "road-rage",
    question: "What is 'road rage'?",
    options: ["A. Anger caused by road works", "B. Violent or aggressive behaviour by drivers towards each other", "C. Racing on public roads", "D. Dangerous overtaking"],
    correct: "B", difficulty: "easy",
    explanation: "Road rage refers to aggressive or violent behaviour arising from driving disputes. It is dangerous, illegal, and can lead to accidents or criminal charges.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q023", category: "attitude", subcategory: "consideration",
    question: "You are waiting to emerge from a side road and a driver slows to let you out. What should you do?",
    options: ["A. Emerge quickly without acknowledging them", "B. Thank them with a smile or a wave", "C. Honk your horn to thank them", "D. Flash your headlights"],
    correct: "B", difficulty: "easy",
    explanation: "A simple wave acknowledges courtesy and encourages positive driving behaviour. It costs nothing and improves road relationships.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q024", category: "attitude", subcategory: "consideration",
    question: "You are driving through a narrow village street with cars parked on both sides. Another car approaches from the opposite direction. What should you do?",
    options: ["A. Drive through as fast as possible to clear the gap first", "B. Sound your horn and expect the other driver to reverse", "C. Slow down and give way, especially if there is space on your side to pull in", "D. Flash your lights and proceed"],
    correct: "C", difficulty: "medium",
    explanation: "In a narrow road, whoever has space to pull in should do so to allow the other vehicle to pass. Courtesy and common sense prevent confrontation.",
    hcRule: "Rule 155", imageUrl: null
  },
  {
    id: "Q025", category: "attitude", subcategory: "courtesy",
    question: "When should you use your vehicle's horn?",
    options: ["A. To greet friends", "B. To warn other road users of your presence", "C. To express frustration at slow drivers", "D. To signal your approach to a junction"],
    correct: "B", difficulty: "easy",
    explanation: "The horn should only be used to warn other road users of your presence. It must not be used between 11:30pm and 7:00am in built-up areas, or when stationary (unless in danger).",
    hcRule: "Rule 112", imageUrl: null
  },
  {
    id: "Q026", category: "attitude", subcategory: "road-rage",
    question: "Another driver makes a mistake that nearly causes an accident. What is the safest response?",
    options: ["A. Follow them closely and flash your lights", "B. Overtake them and brake sharply in front", "C. Take a breath, stay calm, and continue driving safely", "D. Wind down your window and shout at them"],
    correct: "C", difficulty: "easy",
    explanation: "Retaliating with aggression escalates danger. Stay calm and continue driving safely. Everyone makes mistakes - aggressive responses can cause serious accidents.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q027", category: "attitude", subcategory: "consideration",
    question: "You are driving behind a learner driver who is going slowly. What should you do?",
    options: ["A. Sit very close behind them to encourage them to speed up", "B. Overtake at the first opportunity, even on a bend", "C. Be patient - learning to drive takes time and slow speeds are normal", "D. Sound your horn repeatedly"],
    correct: "C", difficulty: "easy",
    explanation: "Learner drivers are still developing their skills and may drive slowly or hesitantly. Be patient and give them space - tailgating them increases their anxiety and the risk of an accident.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q028", category: "attitude", subcategory: "consideration",
    question: "A driver joins the motorway from a slip road and needs to merge into your lane. What should you do?",
    options: ["A. Speed up to prevent them merging", "B. Move to the right lane if safe to do so, or adjust your speed to create a gap", "C. Sound your horn and maintain your position", "D. Brake sharply to let them in"],
    correct: "B", difficulty: "medium",
    explanation: "Vehicles on a slip road must give way to traffic already on the motorway, but courteous drivers should help by moving over or adjusting speed to create a safe gap.",
    hcRule: "Rule 259", imageUrl: null
  },
  {
    id: "Q029", category: "attitude", subcategory: "courtesy",
    question: "You are reversing from a driveway and blocking a passing pedestrian. What should you do?",
    options: ["A. Continue reversing - the highway belongs to vehicles", "B. Stop and let the pedestrian pass before continuing", "C. Sound your horn to warn them to wait", "D. Reverse as fast as possible to clear their path quicker"],
    correct: "B", difficulty: "easy",
    explanation: "Pedestrians have priority on the pavement and crossing the road. Stop your manoeuvre and allow them to pass safely before continuing.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q030", category: "attitude", subcategory: "consideration",
    question: "Why should you avoid making eye contact with an aggressive driver?",
    options: ["A. It might blind you", "B. It can be interpreted as a challenge and escalate aggression", "C. It is illegal", "D. It distracts you from the road"],
    correct: "B", difficulty: "medium",
    explanation: "Sustained eye contact with an aggressive driver can be seen as a challenge and escalate the situation. Stay calm, look ahead, and drive away if possible.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q031", category: "attitude", subcategory: "road-rage",
    question: "You feel you have been cut up by another driver. What is the correct response?",
    options: ["A. Overtake them and slam on your brakes", "B. Follow them and confront them at the next stop", "C. Stay calm and maintain a safe following distance", "D. Sound your horn continuously for at least 30 seconds"],
    correct: "C", difficulty: "easy",
    explanation: "Reacting aggressively to other drivers' mistakes dramatically increases crash risk. Letting it go and driving calmly is always the right choice.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q032", category: "attitude", subcategory: "consideration",
    question: "When parking on a residential street, why should you consider your neighbours?",
    options: ["A. To avoid parking fines", "B. To avoid blocking driveways, dropped kerbs, and access routes", "C. To ensure your vehicle is safe from theft", "D. There is no need to consider neighbours when parking"],
    correct: "B", difficulty: "easy",
    explanation: "Parking inconsiderately - blocking dropped kerbs, driveways, or bus stops - is inconsiderate and often illegal. Think about how your parking affects others.",
    hcRule: "Rule 243", imageUrl: null
  },
  {
    id: "Q033", category: "attitude", subcategory: "courtesy",
    question: "A cyclist is in the middle of a narrow lane in front of you. What should you do?",
    options: ["A. Rev your engine to get them to move over", "B. Overtake immediately regardless of space", "C. Be patient and wait until there is sufficient space to overtake safely", "D. Sound your horn repeatedly"],
    correct: "C", difficulty: "easy",
    explanation: "Cyclists may position themselves in the centre of a narrow lane for safety. Be patient and only overtake when there is enough room to pass at a safe distance.",
    hcRule: "Rule 212", imageUrl: null
  },
  {
    id: "Q034", category: "attitude", subcategory: "consideration",
    question: "Why is tailgating dangerous and inconsiderate?",
    options: ["A. It uses more fuel", "B. It reduces your following distance, giving less time to react and pressuring the driver ahead", "C. It dazzles the driver ahead", "D. It causes tyre wear"],
    correct: "B", difficulty: "easy",
    explanation: "Tailgating reduces your braking distance to dangerous levels and intimidates the driver in front, who may panic-brake. Always maintain the two-second rule (four seconds in wet conditions).",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q035", category: "attitude", subcategory: "road-rage",
    question: "You feel very angry after an argument before setting off. What should you do?",
    options: ["A. Drive as normal - emotions do not affect driving", "B. Wait until you have calmed down before driving", "C. Drive faster to release tension", "D. Use loud music to distract yourself from anger"],
    correct: "B", difficulty: "medium",
    explanation: "Driving while angry significantly impairs judgment and increases risk-taking. Wait until you feel calm before driving, or find an alternative way to travel.",
    hcRule: "Rule 90", imageUrl: null
  },
  {
    id: "Q036", category: "attitude", subcategory: "consideration",
    question: "You are driving in slow-moving traffic. A driver signals to change into your lane. What should you do?",
    options: ["A. Speed up to prevent them from entering", "B. Flash your lights aggressively", "C. Allow them space to merge if it is safe", "D. Sound your horn"],
    correct: "C", difficulty: "easy",
    explanation: "Cooperative lane-merging in slow traffic keeps traffic flowing and reduces conflict. Allow vehicles to merge when it is safe and does not create danger.",
    hcRule: "Rule 133", imageUrl: null
  },
  {
    id: "Q037", category: "attitude", subcategory: "courtesy",
    question: "Why should you avoid using your headlights to flash at other drivers when they are behind a slow vehicle?",
    options: ["A. It is illegal in all circumstances", "B. It could be misread as aggression or signal to overtake when it is unsafe", "C. Headlights are only for night use", "D. It uses too much battery power"],
    correct: "B", difficulty: "medium",
    explanation: "Flashing headlights is officially only for warning of your presence. Other uses can be misinterpreted - you should never signal to another driver that it is safe to overtake.",
    hcRule: "Rule 110", imageUrl: null
  },
  {
    id: "Q038", category: "attitude", subcategory: "consideration",
    question: "You are driving in a queue at traffic lights. The lights turn green but the vehicle ahead has not moved. What should you do?",
    options: ["A. Sound your horn immediately", "B. Wait for a few moments - the driver may not have seen the lights yet", "C. Overtake them", "D. Flash your headlights"],
    correct: "B", difficulty: "easy",
    explanation: "Give drivers a moment before sounding your horn. Aggressive responses to minor delays are unnecessary and increase stress for everyone.",
    hcRule: "Rule 147", imageUrl: null
  },
  {
    id: "Q039", category: "attitude", subcategory: "consideration",
    question: "What is the purpose of the 'two-second rule' in relation to attitude as well as safety?",
    options: ["A. It prevents other drivers from cutting in", "B. It shows respect for other drivers and gives sufficient reaction time", "C. It is only relevant on motorways", "D. It helps fuel economy"],
    correct: "B", difficulty: "medium",
    explanation: "Maintaining a two-second gap shows consideration for the driver ahead and gives you time to react. Tailgating is both dangerous and intimidating.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q040", category: "attitude", subcategory: "road-rage",
    question: "An angry driver gets out of their car and approaches yours in traffic. What should you do?",
    options: ["A. Get out and confront them", "B. Shout back from your window", "C. Keep your doors locked, stay calm, and if threatened call 999", "D. Drive onto the pavement to escape"],
    correct: "C", difficulty: "medium",
    explanation: "If threatened by an aggressive driver, keep windows up, doors locked, and do not engage. Move away if safely possible. Call 999 if you are in danger.",
    hcRule: "Rule 147", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // SAFETY MARGINS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q041", category: "safety-margins", subcategory: "stopping-distances",
    question: "In good conditions, what is the overall stopping distance at 30 mph?",
    options: ["A. 12 metres", "B. 23 metres", "C. 36 metres", "D. 53 metres"],
    correct: "B", difficulty: "medium",
    explanation: "At 30 mph, the thinking distance is 9m and braking distance is 14m, giving an overall stopping distance of 23 metres. (3 car lengths)",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q042", category: "safety-margins", subcategory: "stopping-distances",
    question: "At 70 mph on a dry road, what is the overall stopping distance?",
    options: ["A. 53 metres", "B. 75 metres", "C. 96 metres", "D. 120 metres"],
    correct: "C", difficulty: "hard",
    explanation: "At 70 mph the thinking distance is 21m and braking distance 75m, giving 96 metres overall - equivalent to 24 car lengths.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q043", category: "safety-margins", subcategory: "following-distance",
    question: "The 'two-second rule' helps you maintain a safe following distance. In wet weather, how should you adjust it?",
    options: ["A. Keep the same two-second gap", "B. Reduce to one second", "C. Double it to at least four seconds", "D. Only use it on motorways"],
    correct: "C", difficulty: "easy",
    explanation: "In wet conditions braking distances roughly double, so the gap should be at least four seconds. In ice or snow, it may need to be ten times longer.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q044", category: "safety-margins", subcategory: "braking",
    question: "You are driving at 60 mph on a dry road. What is the braking distance alone (excluding thinking distance)?",
    options: ["A. 18 metres", "B. 36 metres", "C. 55 metres", "D. 73 metres"],
    correct: "C", difficulty: "hard",
    explanation: "At 60 mph the braking distance is 55 metres (thinking distance is 18m, total = 73m). Remember, this assumes good brakes, tyres and a dry road.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q045", category: "safety-margins", subcategory: "stopping-distances",
    question: "What is the thinking distance at 50 mph?",
    options: ["A. 9 metres", "B. 12 metres", "C. 15 metres", "D. 18 metres"],
    correct: "C", difficulty: "medium",
    explanation: "Thinking distance increases by 3 metres for every 10 mph. At 50 mph, thinking distance = 15 metres. Total stopping distance at 50 mph is 53 metres.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q046", category: "safety-margins", subcategory: "braking",
    question: "What effect does carrying a heavy load have on your vehicle's stopping distance?",
    options: ["A. Shorter stopping distance", "B. No effect", "C. Longer stopping distance", "D. Only affects acceleration"],
    correct: "C", difficulty: "easy",
    explanation: "Extra weight increases momentum, which means your vehicle needs more distance to stop. Adjust your following distance and speed accordingly when carrying heavy loads.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q047", category: "safety-margins", subcategory: "stopping-distances",
    question: "How does driving on a road with a loose gravel surface affect braking?",
    options: ["A. Braking is more effective on gravel", "B. Braking distance increases as tyres have less grip", "C. There is no difference compared to tarmac", "D. The ABS system makes it safe"],
    correct: "B", difficulty: "medium",
    explanation: "Loose or gravel surfaces reduce tyre grip dramatically, increasing braking distances. Drive slowly and brake gently on such surfaces.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q048", category: "safety-margins", subcategory: "following-distance",
    question: "You are driving behind a large lorry. Why should you increase your following distance?",
    options: ["A. Lorries brake faster than cars", "B. Lorries obscure your view ahead and require longer stopping distances", "C. Lorry drivers have priority", "D. The law requires 10 car lengths behind lorries"],
    correct: "B", difficulty: "easy",
    explanation: "Large vehicles block your forward view - you cannot see hazards ahead. They also take longer to stop, so you need more space. Increase your following distance significantly.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q049", category: "safety-margins", subcategory: "braking",
    question: "What is aquaplaning and how does it affect braking?",
    options: ["A. Braking while on water - has no effect on safety", "B. When a layer of water builds between tyres and road, causing loss of steering and braking ability", "C. When brakes overheat in wet conditions", "D. A type of brake fade on motorways"],
    correct: "B", difficulty: "hard",
    explanation: "Aquaplaning occurs when tyres ride on a film of water rather than the road. You lose control of steering and braking. Ease off the accelerator gently - do not brake sharply.",
    hcRule: "Rule 227", imageUrl: null
  },
  {
    id: "Q050", category: "safety-margins", subcategory: "stopping-distances",
    question: "Tyres with worn tread affect braking distance most in which conditions?",
    options: ["A. Dry conditions", "B. Cold conditions", "C. Wet conditions", "D. All conditions equally"],
    correct: "C", difficulty: "medium",
    explanation: "Tyre tread channels water away from the contact patch. Worn tyres cannot disperse water effectively, dramatically increasing braking distances in wet conditions.",
    hcRule: "Rule 227", imageUrl: null
  },
  {
    id: "Q051", category: "safety-margins", subcategory: "braking",
    question: "Your brakes feel 'spongy' when you press the pedal. What does this suggest?",
    options: ["A. The brakes are fine - just the brake pads settling", "B. There may be air in the brake fluid or a fluid leak - get them checked immediately", "C. You need to press harder", "D. The handbrake is partially on"],
    correct: "B", difficulty: "medium",
    explanation: "Spongy brakes often indicate air in the hydraulic system or a fluid leak. This is a serious safety issue and the vehicle should not be driven until inspected by a mechanic.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q052", category: "safety-margins", subcategory: "following-distance",
    question: "What is the minimum following distance recommended on a motorway in dry conditions?",
    options: ["A. One second", "B. Two seconds", "C. Five seconds", "D. Ten seconds"],
    correct: "B", difficulty: "easy",
    explanation: "The two-second rule applies on motorways too. In poor weather or when following large vehicles, double this gap. The gap should be visible past the vehicle in front.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q053", category: "safety-margins", subcategory: "stopping-distances",
    question: "How much does braking distance increase if your speed doubles from 30 mph to 60 mph?",
    options: ["A. It doubles", "B. It triples", "C. It quadruples", "D. It stays the same"],
    correct: "C", difficulty: "hard",
    explanation: "Braking distance increases with the SQUARE of speed. Doubling your speed from 30 to 60 mph quadruples your braking distance - from 14m to 55m.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q054", category: "safety-margins", subcategory: "braking",
    question: "When driving in icy conditions, stopping distances can be up to how many times longer than on dry roads?",
    options: ["A. 2 times", "B. 5 times", "C. 10 times", "D. 15 times"],
    correct: "C", difficulty: "medium",
    explanation: "On ice, stopping distances can be up to 10 times greater than on dry roads. Reduce speed significantly and allow enormous gaps when driving in icy conditions.",
    hcRule: "Rule 227", imageUrl: null
  },
  {
    id: "Q055", category: "safety-margins", subcategory: "following-distance",
    question: "You are driving at 60 mph and the car in front brakes suddenly. What is the key factor in whether you stop in time?",
    options: ["A. The power of your engine", "B. Your following distance and reaction time", "C. The colour of your car", "D. Whether your hazard lights work"],
    correct: "B", difficulty: "easy",
    explanation: "Maintaining a sufficient following distance gives you the space and time to react and stop. Even with good brakes, too small a gap at speed makes a crash inevitable.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q056", category: "safety-margins", subcategory: "stopping-distances",
    question: "A driver's reaction time is typically around 0.7 seconds. What most increases reaction time?",
    options: ["A. Listening to the radio", "B. Alcohol, drugs, tiredness, or distractions", "C. Driving a manual vs automatic", "D. Cold weather"],
    correct: "B", difficulty: "easy",
    explanation: "Alcohol, drugs, extreme fatigue, and distractions such as mobile phones all increase reaction time significantly, adding metres to thinking distance.",
    hcRule: "Rule 90", imageUrl: null
  },
  {
    id: "Q057", category: "safety-margins", subcategory: "braking",
    question: "What does 'brake fade' mean?",
    options: ["A. Brakes that work better after warming up", "B. A reduction in braking effectiveness due to overheating of brake components", "C. Brakes that fade in colour from use", "D. The brakes activating automatically on a hill"],
    correct: "B", difficulty: "hard",
    explanation: "Brake fade occurs when brakes overheat, reducing their effectiveness. It typically happens after sustained heavy braking, such as driving down a long steep hill in too high a gear.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q058", category: "safety-margins", subcategory: "following-distance",
    question: "Which of these is the BEST way to check the two-second gap to the vehicle in front?",
    options: ["A. Count the car lengths visually", "B. When the vehicle ahead passes a fixed point, say 'only a fool breaks the two-second rule'", "C. Use your odometer", "D. Keep one car length per 10 mph"],
    correct: "B", difficulty: "medium",
    explanation: "Pick a fixed point (bridge, lamp post, road marking). When the car in front passes it, count two seconds. If you reach that point before finishing, you are too close.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q059", category: "safety-margins", subcategory: "stopping-distances",
    question: "Overall stopping distance at 20 mph in dry conditions is approximately:",
    options: ["A. 6 metres", "B. 12 metres", "C. 18 metres", "D. 24 metres"],
    correct: "B", difficulty: "medium",
    explanation: "At 20 mph: thinking distance 6m + braking distance 6m = 12m total. This is why 20 mph zones are used near schools and residential areas.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q060", category: "safety-margins", subcategory: "braking",
    question: "How should you brake on a vehicle NOT fitted with ABS (anti-lock braking system) if you need to stop urgently?",
    options: ["A. Press the brake as hard as possible and hold", "B. Pump the brake pedal rapidly to avoid wheel lock", "C. Apply the handbrake only", "D. Use engine braking only"],
    correct: "B", difficulty: "hard",
    explanation: "Without ABS, holding the brake too hard locks the wheels, causing loss of steering. Cadence braking (rapid pumping) prevents lock-up. With ABS, press firmly and hold.",
    hcRule: "Rule 120", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // HAZARD AWARENESS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q061", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "What is a 'developing hazard'?",
    options: ["A. A permanent hazard such as a sharp bend", "B. A situation that is changing and may require you to take action", "C. A hazard marked by road signs", "D. A hazard that only affects motorcyclists"],
    correct: "B", difficulty: "easy",
    explanation: "A developing hazard is one that is unfolding - such as a pedestrian stepping off the kerb, or a car pulling out of a junction. It requires active monitoring and a response.",
    hcRule: "Rule 159", imageUrl: null
  },
  {
    id: "Q062", category: "hazard-awareness", subcategory: "static-hazards",
    question: "You approach a parked ice cream van on the left with children nearby. What hazard should you anticipate?",
    options: ["A. The van may move off suddenly", "B. Children may run into the road without looking", "C. The van may cause congestion", "D. Other drivers may stop to buy ice cream"],
    correct: "B", difficulty: "easy",
    explanation: "Children near parked vehicles - especially an ice cream van - may dash into the road impulsively. Slow down significantly and be ready to stop.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q063", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You see a motorcyclist ahead check their mirror repeatedly. What should you anticipate?",
    options: ["A. They are about to stop for fuel", "B. They may be about to change lane or turn", "C. Their mirror is faulty", "D. They are checking your speed"],
    correct: "B", difficulty: "medium",
    explanation: "A motorcyclist repeatedly checking mirrors is likely preparing to manoeuvre. Ease off and give them space to do so safely.",
    hcRule: "Rule 211", imageUrl: null
  },
  {
    id: "Q064", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What is the hazard of driving near a row of parked cars?",
    options: ["A. You may get caught by a parking restriction", "B. Car doors may open suddenly into your path", "C. Parked cars may roll forwards", "D. Drivers may be texting and distracted"],
    correct: "B", difficulty: "easy",
    explanation: "Car doors can open without warning. Leave a 1-metre gap when passing parked cars to avoid being hit by an opening door - this is sometimes called the 'door zone'.",
    hcRule: "Rule 211", imageUrl: null
  },
  {
    id: "Q065", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You see a dog running near the road ahead. What is the main hazard?",
    options: ["A. The dog may slow your progress", "B. The dog may run into the road and cause you to swerve", "C. The dog's owner may be distracted", "D. Dogs rarely enter main roads"],
    correct: "B", difficulty: "easy",
    explanation: "Animals are unpredictable. A dog near the road may suddenly dart across. Slow down and be prepared to stop.",
    hcRule: "Rule 214", imageUrl: null
  },
  {
    id: "Q066", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What hazard does a road with surface water present?",
    options: ["A. Bright reflection may dazzle you", "B. Risk of aquaplaning and significantly increased stopping distances", "C. Damaged road markings", "D. Flooded drains may cause mud on the road"],
    correct: "B", difficulty: "medium",
    explanation: "Surface water can cause aquaplaning (loss of tyre contact) and greatly increases braking distances. Reduce speed and increase following distance.",
    hcRule: "Rule 227", imageUrl: null
  },
  {
    id: "Q067", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You are driving on a country road and a tractor pulls out of a field ahead. What should you do?",
    options: ["A. Sound your horn and flash your lights", "B. Overtake immediately while you have space", "C. Slow down and be prepared to stop - tractors can be slow and may make wide turns", "D. Drive around the tractor onto the verge"],
    correct: "C", difficulty: "easy",
    explanation: "Tractors are large, slow, and may turn very wide or stop unexpectedly. Slow down, stay back, and only overtake when there is clear visibility and sufficient space.",
    hcRule: "Rule 169", imageUrl: null
  },
  {
    id: "Q068", category: "hazard-awareness", subcategory: "static-hazards",
    question: "You are driving past a building site. What hazard should you look for?",
    options: ["A. Workers may be on their lunch break", "B. Mud or debris on the road and vehicles entering/exiting without warning", "C. Cranes may fall onto the road", "D. Noise from the site may distract you"],
    correct: "B", difficulty: "medium",
    explanation: "Building sites produce mud and debris tracked onto roads, which reduces tyre grip. Vehicles may emerge suddenly from site entrances. Reduce speed and stay alert.",
    hcRule: "Rule 228", imageUrl: null
  },
  {
    id: "Q069", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You are approaching a junction and see a pedestrian about to step off the kerb. They are looking the wrong way. What should you do?",
    options: ["A. Sound your horn and maintain speed", "B. Slow down and be ready to stop - they may step into your path", "C. Flash your lights", "D. Move to the centre of the road"],
    correct: "B", difficulty: "easy",
    explanation: "A pedestrian looking the wrong way may step out in front of you. Anticipate this, slow down, and be ready to stop.",
    hcRule: "Rule 170", imageUrl: null
  },
  {
    id: "Q070", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What is the main danger of driving on a road where leaves have fallen?",
    options: ["A. Reduced visibility", "B. Wet leaves are as slippery as ice and dramatically reduce grip", "C. Leaves block road drains and cause flooding", "D. Leaves are only a problem at night"],
    correct: "B", difficulty: "medium",
    explanation: "Wet autumn leaves are extremely slippery and can reduce grip to near-zero. Treat them with as much caution as ice - reduce speed and brake gently.",
    hcRule: "Rule 227", imageUrl: null
  },
  {
    id: "Q071", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "A car ahead signals left but you suspect it is going to turn right. What should you do?",
    options: ["A. Overtake on the right immediately", "B. Hang back and wait to see what happens before committing", "C. Sound your horn to correct them", "D. Flash your lights"],
    correct: "B", difficulty: "medium",
    explanation: "Never act solely on another driver's signal - it may be incorrect or still engaged from a previous turn. Observe their actual movement before deciding what to do.",
    hcRule: "Rule 170", imageUrl: null
  },
  {
    id: "Q072", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What risk does a ford (a water crossing over a road) present?",
    options: ["A. Only high vehicles are at risk", "B. Your brakes may become wet and less effective after crossing", "C. Water reflects headlights and dazzles drivers", "D. Fords are always clearly signposted"],
    correct: "B", difficulty: "medium",
    explanation: "After driving through water, your brakes may be temporarily less effective as water affects brake pads. After a ford, dry your brakes by applying light pressure gently.",
    hcRule: "Rule 121", imageUrl: null
  },
  {
    id: "Q073", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You see a queue of stationary traffic ahead. What should you do?",
    options: ["A. Sound your horn to warn others", "B. Check your mirror, ease off the accelerator and brake progressively", "C. Flash your hazard lights and maintain speed", "D. Move immediately to the nearest side street"],
    correct: "B", difficulty: "easy",
    explanation: "When you see stationary traffic, check mirrors first, then begin reducing speed progressively. Braking early and gently alerts following drivers. Use hazard lights if traffic is stopped on a motorway.",
    hcRule: "Rule 116", imageUrl: null
  },
  {
    id: "Q074", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What hazard do humpback bridges present?",
    options: ["A. Reduced speed limit", "B. Your view is restricted and oncoming vehicles may be hidden until very close", "C. The road surface is always slippery", "D. Only relevant for large vehicles"],
    correct: "B", difficulty: "medium",
    explanation: "Humpback bridges restrict your view beyond the crest. Slow right down and be prepared for oncoming vehicles. Give way to oncoming traffic if the bridge is narrow.",
    hcRule: "Rule 151", imageUrl: null
  },
  {
    id: "Q075", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You are following a lorry that is indicating left at a junction. Why should you not overtake on the left?",
    options: ["A. Lorries always have priority at junctions", "B. The lorry may swing right before turning left - you could be trapped on the inside", "C. It is always illegal to overtake at junctions", "D. Lorries indicate incorrectly by law"],
    correct: "B", difficulty: "hard",
    explanation: "Long vehicles often swing wide to the right before making a tight left turn. If you attempt to pass on the left, you could be trapped between the lorry and the kerb.",
    hcRule: "Rule 167", imageUrl: null
  },
  {
    id: "Q076", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What does a triangular warning sign with a picture of a skidding car mean?",
    options: ["A. No overtaking zone", "B. Slippery road ahead", "C. Sharp bend ahead", "D. Road narrows ahead"],
    correct: "B", difficulty: "easy",
    explanation: "This sign warns of a slippery road surface, often used near areas prone to ice, mud, or other low-grip surfaces. Reduce speed and drive with extra care.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q077", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "You see an elderly person at a zebra crossing who is moving slowly. What should you do?",
    options: ["A. Edge forwards to encourage them to hurry", "B. Be patient and allow them to cross at their own pace", "C. Sound your horn once to alert them to hurry", "D. Proceed once you feel they have nearly finished crossing"],
    correct: "B", difficulty: "easy",
    explanation: "Pedestrians, once stepping onto a zebra crossing, have absolute priority. Be patient and allow them to cross fully at their own pace.",
    hcRule: "Rule 195", imageUrl: null
  },
  {
    id: "Q078", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What additional hazard is present when driving past a row of shops?",
    options: ["A. Delivery vehicles may be double parked", "B. Street lighting is brighter", "C. Speed limits are lower near shops", "D. Shoppers are unlikely to cross the road near shops"],
    correct: "A", difficulty: "medium",
    explanation: "Delivery vehicles often stop to unload near shops, forcing drivers to move out into traffic. Expect partial obstructions and pedestrians stepping around vehicles.",
    hcRule: "Rule 243", imageUrl: null
  },
  {
    id: "Q079", category: "hazard-awareness", subcategory: "developing-hazards",
    question: "A pedestrian steps off the pavement into the road ahead without looking. You are 30 metres away at 30 mph. What should you do?",
    options: ["A. Swerve to avoid and sound horn", "B. Brake firmly - your stopping distance at 30 mph is 23 metres", "C. Flash lights only", "D. Accelerate to get past before they step further"],
    correct: "B", difficulty: "medium",
    explanation: "At 30 mph your stopping distance is ~23 metres. With 30 metres, you should be able to stop if you react immediately. Brake firmly - do not swerve unless braking is impossible.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q080", category: "hazard-awareness", subcategory: "static-hazards",
    question: "What is the danger of a dip in the road (a low point between two hills)?",
    options: ["A. It looks like there is nothing ahead", "B. Water collects in dips and vehicles - including pedestrians or cyclists - may be hidden", "C. The road always narrows in dips", "D. Dips are only dangerous to motorcycles"],
    correct: "B", difficulty: "medium",
    explanation: "A dip in the road can conceal hazards - a stopped vehicle, flooding, or a cyclist at the bottom. Always reduce speed and be ready to stop when approaching a dip.",
    hcRule: "Rule 160", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // VULNERABLE ROAD USERS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q081", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "When overtaking a cyclist, how much space should you leave?",
    options: ["A. At least 0.5 metres", "B. At least 1.0 metre", "C. At least 1.5 metres", "D. At least 2.0 metres"],
    correct: "C", difficulty: "medium",
    explanation: "The Highway Code recommends leaving at least 1.5 metres when passing a cyclist at lower speeds, and more at higher speeds. Give them the same space you'd give a car.",
    hcRule: "Rule 212", imageUrl: null
  },
  {
    id: "Q082", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "You are driving towards a zebra crossing where a person is waiting to cross. What must you do?",
    options: ["A. Sound your horn to acknowledge them and drive through", "B. Flash your lights to tell them to wait", "C. Slow down and give way once they step onto the crossing", "D. Continue - they have not stepped out yet"],
    correct: "C", difficulty: "easy",
    explanation: "You must give way to pedestrians on a zebra crossing. Once they have stepped onto the crossing, you must stop. Be prepared to stop even before they step out.",
    hcRule: "Rule 195", imageUrl: null
  },
  {
    id: "Q083", category: "vulnerable-road-users", subcategory: "motorcyclists",
    question: "Why are motorcyclists particularly vulnerable at junctions?",
    options: ["A. Motorcycles have no brakes", "B. Motorcycles are harder to see and may be travelling faster than expected", "C. Motorcyclists always break speed limits", "D. Junctions have no speed limit for motorcycles"],
    correct: "B", difficulty: "easy",
    explanation: "Motorcycles are narrow and can be hidden behind other vehicles or missed due to their size. Always look specifically for motorcycles - 'SMIDSY' (Sorry Mate I Didn't See You) is a common collision cause.",
    hcRule: "Rule 211", imageUrl: null
  },
  {
    id: "Q084", category: "vulnerable-road-users", subcategory: "horse-riders",
    question: "You are approaching a horse and rider on a narrow lane. What should you do?",
    options: ["A. Sound your horn to warn them you are approaching", "B. Pass slowly and wide, as horses can be frightened by vehicles", "C. Flash your lights and pass quickly", "D. Continue at normal speed - horses are used to traffic"],
    correct: "B", difficulty: "easy",
    explanation: "Horses can be frightened by engine noise and sudden movements. Pass wide and slowly. If the horse appears nervous, stop and switch off your engine.",
    hcRule: "Rule 215", imageUrl: null
  },
  {
    id: "Q085", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "A cyclist is riding in the centre of a narrow lane. What should you do?",
    options: ["A. Sound your horn to make them move over", "B. Overtake immediately - they are breaking the rules", "C. Be patient and wait for a safe opportunity to pass with plenty of room", "D. Rev your engine to signal your intention to pass"],
    correct: "C", difficulty: "easy",
    explanation: "Cyclists may ride in the centre of a narrow lane to discourage unsafe overtaking. This is acceptable behaviour. Be patient and only overtake when you can leave sufficient space.",
    hcRule: "Rule 213", imageUrl: null
  },
  {
    id: "Q086", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "Where would you find a 'Pegasus crossing'?",
    options: ["A. Near airports for access vehicles", "B. On motorways for emergency services", "C. On roads used by horse riders, including higher push buttons for use from horseback", "D. Near shopping centres for mobility scooters"],
    correct: "C", difficulty: "hard",
    explanation: "A Pegasus crossing (also called an equestrian crossing) is designed for horse riders. It has higher push buttons so riders can activate the crossing without dismounting.",
    hcRule: "Rule 199", imageUrl: null
  },
  {
    id: "Q087", category: "vulnerable-road-users", subcategory: "motorcyclists",
    question: "Why do motorcyclists sometimes move within their lane (position slightly left or right)?",
    options: ["A. To show off their bike handling skills", "B. To improve visibility and avoid poor road surfaces or reduce wind turbulence from large vehicles", "C. They are always about to overtake", "D. It is illegal and dangerous"],
    correct: "B", difficulty: "medium",
    explanation: "Motorcyclists adjust position within their lane to improve their view ahead and to avoid hazards such as potholes, drain covers, or turbulence from large vehicles.",
    hcRule: "Rule 211", imageUrl: null
  },
  {
    id: "Q088", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "A cyclist signals they are moving into the centre of the road to turn right. What should you do?",
    options: ["A. Overtake them on the right before they turn", "B. Pass them on the left if there is space", "C. Slow down and let them move to the correct position to turn", "D. Flash your lights and wait"],
    correct: "C", difficulty: "medium",
    explanation: "Give cyclists space and time to move to their turning position. Overtaking them while they are manoeuvring is extremely dangerous.",
    hcRule: "Rule 178", imageUrl: null
  },
  {
    id: "Q089", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "What does a toucan crossing allow that a pelican crossing does not?",
    options: ["A. Cars to cross", "B. Cyclists to cross alongside pedestrians", "C. Horses to cross", "D. It has no pedestrian phase"],
    correct: "B", difficulty: "medium",
    explanation: "A toucan (two-can cross) crossing allows both pedestrians and cyclists to cross at the same time. It is often used where cycle paths cross roads.",
    hcRule: "Rule 199", imageUrl: null
  },
  {
    id: "Q090", category: "vulnerable-road-users", subcategory: "horse-riders",
    question: "A group of horses is blocking the road and a rider waves you down. What should you do?",
    options: ["A. Edge past them slowly while they are grouped", "B. Stop and switch off your engine until the rider signals it is safe to proceed", "C. Sound your horn gently to encourage them to move", "D. Reverse and find an alternative route immediately"],
    correct: "B", difficulty: "medium",
    explanation: "Stop and switch off your engine - the noise may panic the horses. Wait for the rider's signal before moving. This is a common equestrian crossing situation.",
    hcRule: "Rule 215", imageUrl: null
  },
  {
    id: "Q091", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "At a junction, a cyclist is waiting ahead of your vehicle in an advanced stop line box (cycle waiting area). What should you do?",
    options: ["A. Move forward into the box so you do not miss the green light", "B. Stop at the first stop line before the cycle box", "C. Sound your horn to move the cyclist out of the way", "D. Wait until the cyclist has cleared the box then proceed"],
    correct: "B", difficulty: "medium",
    explanation: "Vehicles must stop at the first stop line and must not enter the cycle waiting area (ASL box). These zones allow cyclists to position ahead of traffic safely.",
    hcRule: "Rule 178", imageUrl: null
  },
  {
    id: "Q092", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "Why should you take extra care when driving past a bus stop where passengers have just alighted?",
    options: ["A. Buses always reverse into traffic from stops", "B. Passengers may cross the road from behind the bus without seeing traffic", "C. Bus stops have no waiting restrictions", "D. Buses often break down at stops"],
    correct: "B", difficulty: "easy",
    explanation: "Passengers leaving a bus may cross immediately from behind it, where they cannot see approaching traffic and drivers cannot see them. Slow down when passing a bus stop.",
    hcRule: "Rule 223", imageUrl: null
  },
  {
    id: "Q093", category: "vulnerable-road-users", subcategory: "motorcyclists",
    question: "What is the MOST common cause of collisions involving motorcycles at junctions?",
    options: ["A. Motorcyclists speeding", "B. Car drivers failing to see the motorcycle", "C. Road surface defects", "D. Motorcycle brake failure"],
    correct: "B", difficulty: "easy",
    explanation: "The most common cause is car drivers failing to see motorcycles when pulling out of junctions. Motorcycles are narrow and can be obscured by other vehicles or missed due to inattention.",
    hcRule: "Rule 211", imageUrl: null
  },
  {
    id: "Q094", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "A cyclist is wobbling slightly ahead. What should this tell you?",
    options: ["A. They are about to fall - accelerate past immediately", "B. They may be a young or inexperienced cyclist - slow down and give them more space", "C. You should sound your horn to warn them", "D. They are deliberately blocking the road"],
    correct: "B", difficulty: "easy",
    explanation: "A cyclist who wobbles may be young, inexperienced, or reacting to a road surface defect. Give them extra space and do not pressure them by driving close behind.",
    hcRule: "Rule 212", imageUrl: null
  },
  {
    id: "Q095", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "At a puffin crossing, where are the sensors that detect pedestrians still on the crossing?",
    options: ["A. Under the road surface", "B. On the traffic light post at the side of the road", "C. Embedded in the crossing stripes", "D. On the central reservation"],
    correct: "B", difficulty: "hard",
    explanation: "Puffin crossings have sensors on the traffic light post that detect pedestrians still crossing. The lights remain red until the crossing is clear, rather than using a fixed flashing amber phase.",
    hcRule: "Rule 199", imageUrl: null
  },
  {
    id: "Q096", category: "vulnerable-road-users", subcategory: "motorcyclists",
    question: "Why should you check your mirror before opening your car door when parked?",
    options: ["A. To look for parking wardens", "B. To check for cyclists who may be approaching and be struck by the opening door", "C. Mirrors are only for use while moving", "D. It is required by the MOT test"],
    correct: "B", difficulty: "easy",
    explanation: "Opening a car door into the path of a passing cyclist or motorcyclist can cause serious injury or death. Always check mirrors and blind spots before opening your door.",
    hcRule: "Rule 239", imageUrl: null
  },
  {
    id: "Q097", category: "vulnerable-road-users", subcategory: "horse-riders",
    question: "How should you pass a horse and rider in a narrow country lane?",
    options: ["A. Drive at normal speed to get past quickly", "B. Slow to a walking pace and give as much room as possible", "C. Sound a short horn blast before passing", "D. Flash your lights to warn the rider"],
    correct: "B", difficulty: "easy",
    explanation: "Pass horses at a walking pace (about 10 mph or less) and as wide as possible. Sudden speed, noise, or flashing lights can startle a horse causing it to throw its rider.",
    hcRule: "Rule 215", imageUrl: null
  },
  {
    id: "Q098", category: "vulnerable-road-users", subcategory: "cyclists",
    question: "You want to turn left at a junction. A cyclist is alongside you. What should you do?",
    options: ["A. Turn left sharply - you have right of way", "B. Let the cyclist go ahead before turning", "C. Sound your horn and turn", "D. Move the cyclist aside with your bumper"],
    correct: "B", difficulty: "easy",
    explanation: "Cyclists travelling alongside you when you turn left are in serious danger of being hit. Check your left mirror and left blind spot before turning and give way to cyclists.",
    hcRule: "Rule 182", imageUrl: null
  },
  {
    id: "Q099", category: "vulnerable-road-users", subcategory: "pedestrians",
    question: "You are reversing around a corner. A pedestrian walks behind your car. What should you do?",
    options: ["A. Continue - it is their fault for walking behind a reversing vehicle", "B. Sound horn and continue", "C. Stop immediately and wait until they have cleared the area", "D. Accelerate to clear the manoeuvre faster"],
    correct: "C", difficulty: "easy",
    explanation: "When reversing, other road users have priority. Stop and wait until the path is clear. Never continue reversing around a pedestrian.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q100", category: "vulnerable-road-users", subcategory: "motorcyclists",
    question: "Why should you leave extra room when following a motorcyclist over a pothole?",
    options: ["A. Motorcyclists always brake hard at potholes", "B. Motorcyclists may swerve suddenly to avoid the pothole and move into your path", "C. Motorcycles create spray that affects your visibility", "D. Potholes are only dangerous to four-wheeled vehicles"],
    correct: "B", difficulty: "medium",
    explanation: "A motorcyclist who encounters a pothole may swerve unpredictably to avoid it. Leaving extra space gives you time to react if they change course suddenly.",
    hcRule: "Rule 211", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // OTHER TYPES OF VEHICLE (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q101", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "You are driving behind a large lorry in windy conditions. What should you expect?",
    options: ["A. The lorry will slow down significantly", "B. Turbulence from the lorry may affect your steering when you overtake", "C. Wind reduces the lorry's braking distance", "D. The lorry will use hazard lights"],
    correct: "B", difficulty: "medium",
    explanation: "Large vehicles create turbulence. When overtaking, you may experience a sudden blast of wind as you emerge from the lorry's slipstream. Be prepared with a firm grip on the wheel.",
    hcRule: "Rule 163", imageUrl: null
  },
  {
    id: "Q102", category: "other-types-of-vehicle", subcategory: "buses",
    question: "A bus is indicating to pull out from a bus stop. What should you do?",
    options: ["A. Maintain speed - you have right of way", "B. If it is safe, allow the bus to pull out - buses have priority in some areas", "C. Overtake the bus immediately before it moves", "D. Sound your horn to indicate you are passing"],
    correct: "B", difficulty: "medium",
    explanation: "In many areas buses have priority when pulling out from stops (indicated by a 'Give way to buses' sign). Even where they don't have legal priority, giving way improves traffic flow.",
    hcRule: "Rule 223", imageUrl: null
  },
  {
    id: "Q103", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "You hear an emergency vehicle's siren behind you. What should you do?",
    options: ["A. Brake sharply and stop immediately wherever you are", "B. Pull over safely as soon as possible to let the vehicle pass", "C. Speed up to clear the route faster", "D. Ignore it - it will find another route"],
    correct: "B", difficulty: "easy",
    explanation: "Pull over to the left as soon as it is safe to do so. Do not mount the kerb, block a junction, or stop on a no-stopping area. Act calmly and safely.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q104", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "Why should you be careful when a long lorry is turning at a junction?",
    options: ["A. Lorry drivers always have poor visibility", "B. The rear wheels may cut across the kerb and your lane", "C. Lorries always have priority at junctions", "D. The lorry may stall during the turn"],
    correct: "B", difficulty: "medium",
    explanation: "When a long vehicle turns, its rear wheels take a shorter path than the front (off-tracking). The tail may swing across the lane or kerb. Give lorries wide space at junctions.",
    hcRule: "Rule 221", imageUrl: null
  },
  {
    id: "Q105", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "An ambulance is approaching at speed from behind. You are at a red traffic light. What should you do?",
    options: ["A. Drive through the red light immediately to clear the path", "B. Wait for the light to change, then move if it is safe", "C. Stay put - never cross a red light", "D. Drive onto the pavement"],
    correct: "B", difficulty: "hard",
    explanation: "You must not break traffic laws to make way for emergency vehicles - you could cause an accident. Wait for the light to change, then move out of the way safely. If there is no safe option, stay where you are.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q106", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "What is the blind spot area directly behind a large lorry sometimes called?",
    options: ["A. The dead zone", "B. The kill zone", "C. The no-zone", "D. The shadow zone"],
    correct: "C", difficulty: "hard",
    explanation: "The 'no-zone' refers to the large blind spots around trucks and lorries where the driver cannot see your vehicle. Avoid driving directly behind or beside a lorry for extended periods.",
    hcRule: "Rule 163", imageUrl: null
  },
  {
    id: "Q107", category: "other-types-of-vehicle", subcategory: "buses",
    question: "A school bus is stopped with flashing amber lights. What does this mean?",
    options: ["A. The bus is broken down", "B. Children are getting on or off - be prepared to stop", "C. The bus is about to pull out", "D. The bus driver needs assistance"],
    correct: "B", difficulty: "medium",
    explanation: "Flashing amber lights on a school bus indicate children may be crossing the road. Be prepared to stop and wait until all children are safely across and the lights stop flashing.",
    hcRule: "Rule 220", imageUrl: null
  },
  {
    id: "Q108", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "You are overtaking a long lorry on a dual carriageway. When is it safe to pull back in?",
    options: ["A. As soon as you have passed the cab", "B. When you can see the entire lorry in your rear-view mirror", "C. When you can see the front of the lorry in your rear-view mirror", "D. After five seconds of passing"],
    correct: "C", difficulty: "medium",
    explanation: "Only move in front of a lorry when you can see its FRONT in your rear-view mirror, meaning you have fully cleared it. Long vehicles require much more distance to pass.",
    hcRule: "Rule 163", imageUrl: null
  },
  {
    id: "Q109", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "An emergency vehicle's blue flashing lights are visible but you cannot hear a siren. What should you do?",
    options: ["A. Do nothing - no siren means they are not on an emergency call", "B. Still give way - the siren may be inaudible due to your vehicle noise or distance", "C. Flash your lights back at them", "D. Slow down and wait for them to pass you"],
    correct: "B", difficulty: "medium",
    explanation: "Emergency vehicles may run with lights but not always sirens, or the siren may not be audible inside your vehicle. Blue lights alone mean an emergency vehicle - give way.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q110", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "Why does a large lorry take longer to stop than a car travelling at the same speed?",
    options: ["A. Lorries have larger engines", "B. The greater mass means much greater kinetic energy that must be dissipated by braking", "C. Lorry brakes are always older", "D. Air brakes are less effective than disc brakes"],
    correct: "B", difficulty: "medium",
    explanation: "Kinetic energy increases with mass. A fully laden lorry may weigh 25-40 tonnes compared to a car's 1-2 tonnes, meaning much more energy must be absorbed to stop - resulting in longer stopping distances.",
    hcRule: "Rule 126", imageUrl: null
  },
  {
    id: "Q111", category: "other-types-of-vehicle", subcategory: "buses",
    question: "What should you do when you see a bus pulling away from a stop on the opposite side of the road?",
    options: ["A. Nothing - it is on the opposite side", "B. Be alert - passengers may cross the road from behind the bus", "C. Speed up before passengers cross", "D. Sound your horn to warn pedestrians"],
    correct: "B", difficulty: "medium",
    explanation: "Passengers crossing from behind a bus on the opposite carriageway may not be visible until they step into your path. Slow down and be ready to stop.",
    hcRule: "Rule 206", imageUrl: null
  },
  {
    id: "Q112", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "A fire engine behind you is using lights and sirens. You are approaching a narrow bridge. What should you do?",
    options: ["A. Stop just before the bridge and let it pass", "B. Cross the bridge as quickly as possible, then pull over", "C. Reverse so the fire engine can use the bridge", "D. Continue - there is not enough room to pull over"],
    correct: "B", difficulty: "hard",
    explanation: "If pulling over before the bridge is not safe, cross first then pull over. The emergency vehicle may follow you over the bridge or use another route. Safety first - never reverse on a main road unnecessarily.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q113", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "What does a 'vehicle width restriction' sign mean and which vehicles does it affect most?",
    options: ["A. Only cars are restricted", "B. No vehicle wider than the stated width may pass - primarily affects large vehicles and lorries", "C. The road is closed to all traffic", "D. Only motorcycles may pass"],
    correct: "B", difficulty: "medium",
    explanation: "Width restriction signs show the maximum width allowed - stated in metres. Wide vehicles including lorries, vans with wing mirrors, and some cars towing wide trailers may be unable to proceed.",
    hcRule: "Rule 248", imageUrl: null
  },
  {
    id: "Q114", category: "other-types-of-vehicle", subcategory: "buses",
    question: "You see a bus with a 'Not in service' sign. What does this mean for how you should drive near it?",
    options: ["A. Treat it exactly as you would a normal bus in service", "B. It may stop unexpectedly at any point to pick up staff or turn round", "C. It has no passengers so it is safe to overtake immediately", "D. Out of service buses have right of way over all traffic"],
    correct: "B", difficulty: "medium",
    explanation: "Even out-of-service buses can stop unpredictably at depots or turning points. Always treat large vehicles with care, regardless of their service status.",
    hcRule: "Rule 163", imageUrl: null
  },
  {
    id: "Q115", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "A police car is following you with lights on but no siren. What should you do?",
    options: ["A. Continue driving - the siren was not sounding", "B. Pull over and stop safely - the police are signalling you to stop", "C. Speed up and look for a safe place to stop several miles ahead", "D. Flash your hazard lights in acknowledgement and continue"],
    correct: "B", difficulty: "easy",
    explanation: "If a police vehicle signals you to pull over - either by lights, siren, or a loudhailer - you must stop as soon as it is safe to do so. Failure to do so is a criminal offence.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q116", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "What does a green flashing beacon on a vehicle indicate?",
    options: ["A. A military vehicle", "B. A doctor on an emergency call", "C. A recovery vehicle", "D. A school bus"],
    correct: "B", difficulty: "hard",
    explanation: "Green flashing beacons are used by doctors responding to emergency calls. Treat with similar consideration to other emergency vehicles, giving way when safe.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q117", category: "other-types-of-vehicle", subcategory: "buses",
    question: "What is the minimum age at which someone can drive a minibus carrying passengers for hire or reward?",
    options: ["A. 17", "B. 18", "C. 21", "D. 25"],
    correct: "C", difficulty: "hard",
    explanation: "To drive a minibus (8 passenger seats) for hire or reward, you must be at least 21 and hold the appropriate D1 licence category. Certain community transport exemptions exist.",
    hcRule: "Rule 36", imageUrl: null
  },
  {
    id: "Q118", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "What does a 'high vehicle' warning sign at the entrance to a low bridge indicate?",
    options: ["A. The bridge has a weight limit", "B. Vehicles above the stated height must not pass", "C. The bridge is under repair", "D. Only emergency vehicles may use the bridge"],
    correct: "B", difficulty: "easy",
    explanation: "Low bridge signs indicate a height restriction in metres and feet. Vehicles taller than this must NOT pass - striking a bridge causes serious damage and injury, and can disrupt rail services.",
    hcRule: "Rule 248", imageUrl: null
  },
  {
    id: "Q119", category: "other-types-of-vehicle", subcategory: "emergency-vehicles",
    question: "What colour beacon does a coastguard or mountain rescue vehicle use?",
    options: ["A. Blue", "B. Green", "C. Amber", "D. Red"],
    correct: "A", difficulty: "hard",
    explanation: "Coastguard and mountain rescue vehicles use blue flashing beacons - the same as police, fire, and ambulance. Give way and treat them the same as other emergency vehicles.",
    hcRule: "Rule 219", imageUrl: null
  },
  {
    id: "Q120", category: "other-types-of-vehicle", subcategory: "large-vehicles",
    question: "You are behind a refuse collection lorry that is stopping frequently. What should you do?",
    options: ["A. Overtake at every opportunity to avoid delays", "B. Allow extra space and be patient - they stop frequently and without much warning", "C. Use your horn to hurry them along", "D. Flash your lights to alert them you are behind"],
    correct: "B", difficulty: "easy",
    explanation: "Refuse lorries stop frequently, often without warning. Allow a larger following distance and be prepared for sudden stops. Overtake only when it is safe and legal to do so.",
    hcRule: "Rule 163", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // VEHICLE SAFETY (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q121", category: "vehicle-safety", subcategory: "tyres",
    question: "What is the minimum legal tread depth for car tyres in the UK?",
    options: ["A. 1.0 mm", "B. 1.6 mm", "C. 2.0 mm", "D. 3.0 mm"],
    correct: "B", difficulty: "easy",
    explanation: "Car tyres must have a minimum tread depth of 1.6 mm across the central three-quarters of the tyre and around the entire circumference. Driving with illegal tyres risks a fine and 3 penalty points per tyre.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q122", category: "vehicle-safety", subcategory: "lights",
    question: "When must you use headlights?",
    options: ["A. Only at night", "B. Between sunset and sunrise and when visibility is seriously reduced", "C. Only in foggy conditions", "D. Only when driving on motorways at night"],
    correct: "B", difficulty: "easy",
    explanation: "You must use headlights between sunset and sunrise, and whenever visibility is seriously reduced (typically when you cannot see more than 100 metres ahead).",
    hcRule: "Rule 113", imageUrl: null
  },
  {
    id: "Q123", category: "vehicle-safety", subcategory: "brakes",
    question: "How should you check your brakes are working before driving?",
    options: ["A. Press the brake pedal at low speed at the start of a journey and check it feels firm", "B. Rev the engine in neutral and apply brakes", "C. Drive at 30 mph and brake hard", "D. Brakes do not need to be checked - they are always working"],
    correct: "A", difficulty: "easy",
    explanation: "Test your brakes at low speed at the start of any journey. The pedal should feel firm, not spongy or travel too far. Any concerns should be investigated by a mechanic immediately.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q124", category: "vehicle-safety", subcategory: "mirrors",
    question: "You notice your rear-view mirror is cracked and misted. What should you do?",
    options: ["A. Drive carefully using just wing mirrors", "B. Get it replaced before driving as it impairs rear visibility", "C. Tape over the crack temporarily", "D. It is legal to drive without a rear-view mirror"],
    correct: "B", difficulty: "medium",
    explanation: "While you are legally required to have at least two mirrors providing rear view (and interior if fitted), a cracked or obscured mirror impairs visibility and should be replaced.",
    hcRule: "Rule 161", imageUrl: null
  },
  {
    id: "Q125", category: "vehicle-safety", subcategory: "tyres",
    question: "What effect does underinflated tyre pressure have?",
    options: ["A. Improved fuel economy", "B. Better handling in wet conditions", "C. Increased tyre wear, longer stopping distances and poor handling", "D. No noticeable effect at normal speeds"],
    correct: "C", difficulty: "medium",
    explanation: "Underinflated tyres flex more, generating heat, wearing faster, and reducing contact patch efficiency. Stopping distances increase and handling becomes less predictable.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q126", category: "vehicle-safety", subcategory: "lights",
    question: "When should you use rear fog lights?",
    options: ["A. Any time it is raining", "B. When visibility falls below 100 metres", "C. Whenever driving at night", "D. Whenever driving in built-up areas at night"],
    correct: "B", difficulty: "medium",
    explanation: "Rear fog lights should be used only when visibility is seriously reduced - generally when you cannot see more than 100 metres. Using them unnecessarily can dazzle following drivers.",
    hcRule: "Rule 226", imageUrl: null
  },
  {
    id: "Q127", category: "vehicle-safety", subcategory: "checks",
    question: "When checking engine oil, where should you park and what precaution should you take?",
    options: ["A. Park on a slope facing uphill for accuracy", "B. Park on level ground and check the oil cold, or wait several minutes after switching off", "C. Check the oil while the engine is running", "D. Check the oil immediately after a long drive"],
    correct: "B", difficulty: "medium",
    explanation: "Check oil on a level surface. After driving, wait 5-10 minutes for oil to drain back to the sump for an accurate reading. Checking on a slope or while hot gives an inaccurate result.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q128", category: "vehicle-safety", subcategory: "tyres",
    question: "What should you do if you have a blow-out (tyre bursts) at motorway speed?",
    options: ["A. Brake hard and stop immediately", "B. Grip the wheel firmly, ease off the accelerator, and steer in a straight line before slowing gradually", "C. Swerve to the hard shoulder immediately", "D. Change gear to slow down"],
    correct: "B", difficulty: "hard",
    explanation: "A blowout at speed can pull the car violently. Grip the wheel firmly, do not brake sharply. Ease off the accelerator, maintain direction, and slow gradually before moving to the hard shoulder.",
    hcRule: "Rule 274", imageUrl: null
  },
  {
    id: "Q129", category: "vehicle-safety", subcategory: "lights",
    question: "When driving at night, when should you switch from full beam to dipped headlights?",
    options: ["A. When passing street lights", "B. When approaching oncoming vehicles or when you can see the tail lights of a vehicle ahead", "C. Only in 30 mph zones", "D. Only when flashed by oncoming traffic"],
    correct: "B", difficulty: "easy",
    explanation: "Switch to dipped headlights when you can see oncoming vehicles or the tail lights of a vehicle you are following to avoid dazzling them. Use full beam only on unlit roads when no one is nearby.",
    hcRule: "Rule 114", imageUrl: null
  },
  {
    id: "Q130", category: "vehicle-safety", subcategory: "brakes",
    question: "What warning indicator would tell you that your brake fluid level is low?",
    options: ["A. Oil pressure warning light", "B. Brake warning light (exclamation mark in circle or 'BRAKE' text)", "C. ABS warning light", "D. Temperature warning light"],
    correct: "B", difficulty: "easy",
    explanation: "A brake warning light (often an exclamation mark in a circle) can indicate low brake fluid, worn brake pads, or that the handbrake is on. Stop safely and investigate before continuing.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q131", category: "vehicle-safety", subcategory: "checks",
    question: "How often should you check your tyre pressure?",
    options: ["A. Once a year at MOT time", "B. Regularly - at least once a month and before long journeys", "C. Only if a tyre looks flat", "D. Only after buying new tyres"],
    correct: "B", difficulty: "easy",
    explanation: "Tyre pressure should be checked at least monthly and before any long journey, using an accurate gauge when the tyres are cold. Refer to the vehicle manual for correct pressures.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q132", category: "vehicle-safety", subcategory: "mirrors",
    question: "Why should you set your mirrors BEFORE you start a journey?",
    options: ["A. Mirrors can only be adjusted when the engine is off", "B. To ensure you have full visibility of the road behind before you begin moving", "C. Insurance requires mirrors to be set before each trip", "D. Mirrors move during driving and need resetting"],
    correct: "B", difficulty: "easy",
    explanation: "Adjusting mirrors while moving is dangerous. Set them before your journey so you can see behind without having to move your head excessively, giving you maximum awareness.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q133", category: "vehicle-safety", subcategory: "tyres",
    question: "What does a tyre sidewall bulge indicate?",
    options: ["A. Normal wear pattern", "B. Internal structural damage - the tyre could fail at any time and must be replaced immediately", "C. The tyre is over-inflated", "D. The tyre is suitable for fitting a tube"],
    correct: "B", difficulty: "medium",
    explanation: "A bulge in the sidewall indicates internal structural damage, usually from a kerb strike or pothole. The tyre can fail catastrophically at speed. Stop driving and replace the tyre.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q134", category: "vehicle-safety", subcategory: "lights",
    question: "What does a red warning triangle placed on the road behind a broken-down vehicle indicate to approaching drivers?",
    options: ["A. Road works ahead", "B. A vehicle ahead has broken down - slow down and be prepared to pass with care", "C. Turn around - road is closed", "D. Emergency stop area"],
    correct: "B", difficulty: "easy",
    explanation: "A warning triangle placed at least 45m behind a broken-down vehicle (further on a motorway if used) warns approaching traffic. Slow down and pass carefully.",
    hcRule: "Rule 274", imageUrl: null
  },
  {
    id: "Q135", category: "vehicle-safety", subcategory: "checks",
    question: "What colour should engine coolant typically appear if healthy?",
    options: ["A. Colourless or slightly brown", "B. Green, blue, or orange depending on type, and clear/clean", "C. Black", "D. Red"],
    correct: "B", difficulty: "medium",
    explanation: "Modern coolants are dyed green, blue, red, or orange for identification. Healthy coolant is clear and coloured. Brown or rusty coolant indicates contamination and should be changed.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q136", category: "vehicle-safety", subcategory: "tyres",
    question: "Can you legally drive on a spare 'space-saver' tyre at 70 mph?",
    options: ["A. Yes, it is identical to a standard tyre", "B. No - space-saver tyres have a maximum speed limit, typically 50 mph", "C. Yes, but only on motorways", "D. No - spare tyres are illegal on public roads"],
    correct: "B", difficulty: "medium",
    explanation: "Space-saver (temporary) spare tyres are not designed for extended use and carry a maximum speed limit, usually marked on the tyre. Typically 50 mph. Replace with a full tyre as soon as possible.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q137", category: "vehicle-safety", subcategory: "lights",
    question: "Why should you not use hazard lights while moving in normal traffic flow?",
    options: ["A. They waste battery power", "B. They cancel the turn signal and may confuse other drivers about your intentions", "C. Hazard lights are only permitted on motorways", "D. They reduce engine performance"],
    correct: "B", difficulty: "medium",
    explanation: "Hazard lights while moving can prevent other drivers from seeing your indicators and may incorrectly suggest you are stationary. Only use them to warn of danger, not as a thank-you signal.",
    hcRule: "Rule 116", imageUrl: null
  },
  {
    id: "Q138", category: "vehicle-safety", subcategory: "checks",
    question: "What should the windscreen washer bottle contain in winter?",
    options: ["A. Plain water", "B. Washing-up liquid diluted in water", "C. Screenwash with antifreeze additive suitable for freezing temperatures", "D. Engine antifreeze"],
    correct: "C", difficulty: "easy",
    explanation: "Plain water freezes and can crack the washer bottle and tubes. Use a proper screenwash with antifreeze additive. In winter, increase the concentration to handle sub-zero temperatures.",
    hcRule: "Rule 229", imageUrl: null
  },
  {
    id: "Q139", category: "vehicle-safety", subcategory: "brakes",
    question: "Your vehicle pulls to one side when you brake. What could this indicate?",
    options: ["A. The road is cambered - it is normal", "B. A brake fault on one side, uneven tyre pressure, or a worn suspension component", "C. Fuel is running low", "D. You need to change gears"],
    correct: "B", difficulty: "medium",
    explanation: "A vehicle that pulls to one side when braking may have a seized brake caliper, uneven tyre pressure, or worn suspension. This is a safety issue that requires mechanical inspection.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q140", category: "vehicle-safety", subcategory: "tyres",
    question: "What does 'mixing' tyre types mean and why is it generally inadvisable?",
    options: ["A. Using tyres of different colours", "B. Fitting different types of tyre (e.g. cross-ply with radial) which can create unpredictable handling differences between axles", "C. Using tyres from different manufacturers on the same vehicle", "D. Having different tread depths on different tyres"],
    correct: "B", difficulty: "hard",
    explanation: "Cross-ply and radial tyres behave differently. Mixing types on the same axle is illegal; fitting different types on front and rear axles can create dangerous handling imbalance. Always consult your vehicle manual.",
    hcRule: "Rule 89", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // SAFETY FIRST (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q141", category: "safety-first", subcategory: "seat-belts",
    question: "Who is responsible for ensuring passengers under 14 years wear a seat belt or use an appropriate child restraint?",
    options: ["A. The child's parents", "B. The driver of the vehicle", "C. The passenger themselves", "D. All adults in the vehicle equally"],
    correct: "B", difficulty: "easy",
    explanation: "The driver is legally responsible for ensuring children under 14 are wearing a seat belt or using the appropriate child restraint. Adults over 14 are responsible for themselves.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q142", category: "safety-first", subcategory: "airbags",
    question: "Why should a rear-facing baby seat NEVER be placed in a seat with an active frontal airbag?",
    options: ["A. The baby may be frightened by the airbag light", "B. If the airbag deploys it can strike the back of the baby seat with fatal force", "C. It is a legal requirement but not a safety issue", "D. The baby's weight may accidentally trigger the airbag"],
    correct: "B", difficulty: "easy",
    explanation: "A deploying airbag strikes the back of a rear-facing child seat with enormous force, potentially killing the child. Never use a rear-facing baby seat in a seat with an active airbag.",
    hcRule: "Rule 102", imageUrl: null
  },
  {
    id: "Q143", category: "safety-first", subcategory: "child-seats",
    question: "What child restraint group is suitable for babies from birth up to 13 kg (about 15 months)?",
    options: ["A. Group 1", "B. Group 0 / 0+", "C. Group 2", "D. Group 3"],
    correct: "B", difficulty: "medium",
    explanation: "Group 0 and 0+ restraints are rear-facing infant carriers for babies from birth up to 10 kg (Group 0) or 13 kg (Group 0+). They must be fitted rear-facing.",
    hcRule: "Rule 102", imageUrl: null
  },
  {
    id: "Q144", category: "safety-first", subcategory: "head-restraints",
    question: "What is the purpose of a head restraint?",
    options: ["A. Added head comfort on long journeys", "B. To prevent whiplash injury by limiting how far the head moves backward in a rear collision", "C. To hold the seatbelt in position", "D. To prevent sunburn"],
    correct: "B", difficulty: "easy",
    explanation: "Head restraints (headrests) limit rearward movement of the head in a rear-end collision, reducing the risk of whiplash injury to the neck. They must be adjusted correctly to be effective.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q145", category: "safety-first", subcategory: "seat-belts",
    question: "Is there an exemption from wearing a seat belt for delivery drivers making frequent stops?",
    options: ["A. No - all drivers must wear a seat belt at all times", "B. Yes - drivers who make frequent stops during a local delivery round can be exempt", "C. Yes - but only on roads with a 20 mph limit", "D. Yes - but only in a vehicle under 3.5 tonnes"],
    correct: "B", difficulty: "hard",
    explanation: "Drivers making deliveries or collections frequently during a journey of less than 50 metres at a time may be exempt from wearing a seat belt during that local delivery work. This is a specific legal exemption.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q146", category: "safety-first", subcategory: "airbags",
    question: "If your vehicle has a side airbag, what should you avoid when setting your seat position?",
    options: ["A. Reclining the seat too far back", "B. Sitting too close to the door where the airbag deploys from", "C. Sitting too far from the steering wheel", "D. Having the seat too high"],
    correct: "B", difficulty: "medium",
    explanation: "Side airbags deploy from the door or seat side bolster. Sitting too close to the airbag deployment zone can increase injury risk. Sit at the correct distance from doors and use the seat manufacturer's guidance.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q147", category: "safety-first", subcategory: "seat-belts",
    question: "What should you check about your seat belt before each journey?",
    options: ["A. That it is the same colour as the interior", "B. That it clicks securely, the strap is not frayed, and the recoil mechanism works", "C. That it matches the current MOT certificate", "D. Nothing - seat belts do not require regular checks"],
    correct: "B", difficulty: "easy",
    explanation: "Inspect your seat belt for damage: check the latch clicks firmly, the strap recoils properly, and the webbing is not frayed or cut. A faulty seat belt may not protect you in an accident.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q148", category: "safety-first", subcategory: "child-seats",
    question: "When can a child travel without a child car seat in a taxi?",
    options: ["A. Never - taxis must always have child seats", "B. If no child seat is available - the child must then sit in the rear and can wear an adult belt if over 3", "C. Children under 3 may travel without restraint in a taxi's rear seat", "D. Children are always exempt in taxis"],
    correct: "B", difficulty: "hard",
    explanation: "In licensed taxis without a child seat available, children aged 3+ can travel in the rear wearing an adult belt if available. Children under 3 can travel without restraint in the rear. This is a specific taxi exemption.",
    hcRule: "Rule 102", imageUrl: null
  },
  {
    id: "Q149", category: "safety-first", subcategory: "head-restraints",
    question: "Where should the top of your head restraint be positioned relative to your head?",
    options: ["A. At shoulder height", "B. At the height of your ears", "C. At or above the top of your head (minimum at eye level)", "D. Below the nape of your neck"],
    correct: "C", difficulty: "medium",
    explanation: "The head restraint should ideally be level with the top of your head or at minimum level with your eyes. Too low and it becomes a pivot point for the neck rather than a support.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q150", category: "safety-first", subcategory: "seat-belts",
    question: "A passenger in your car refuses to wear their seat belt. They are an adult. Who receives the penalty if caught?",
    options: ["A. The driver", "B. The passenger", "C. Both driver and passenger equally", "D. The vehicle owner"],
    correct: "B", difficulty: "medium",
    explanation: "Adults (14+) are responsible for wearing their own seat belt. If they refuse, they face the fixed penalty - not the driver. However, the driver is responsible for under-14s.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q151", category: "safety-first", subcategory: "airbags",
    question: "Can an airbag cause injury?",
    options: ["A. No - airbags are completely safe", "B. Yes - they deploy with great force and can injure occupants who are too close or out of position", "C. Only if they malfunction", "D. Only to rear passengers"],
    correct: "B", difficulty: "medium",
    explanation: "Airbags deploy explosively in milliseconds. Sitting too close, or being out of position, can result in injuries from the bag itself. Always wear a seat belt and maintain correct seating position.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q152", category: "safety-first", subcategory: "child-seats",
    question: "What is the i-Size (R129) regulation that applies to modern child seats?",
    options: ["A. A size limit for child seats in small cars", "B. A European safety standard that requires rear-facing use until 15 months and tests for side impact", "C. An international standard only applicable to premium vehicles", "D. A rule that bans child seats in front passenger seats"],
    correct: "B", difficulty: "hard",
    explanation: "i-Size (ECE R129) is a modern EU standard requiring rear-facing use until at least 15 months, improved side-impact testing, and simpler vehicle fit compatibility via ISOFIX.",
    hcRule: "Rule 102", imageUrl: null
  },
  {
    id: "Q153", category: "safety-first", subcategory: "seat-belts",
    question: "Is it legal to wear a seat belt across the body but under the arm (armpit) rather than across the chest?",
    options: ["A. Yes - any method of wearing the belt is legal", "B. No - this does not protect the upper body and is a misuse of the belt", "C. Yes - this is recommended for pregnant women", "D. Yes - if the vehicle is over 10 years old"],
    correct: "B", difficulty: "medium",
    explanation: "Wearing the shoulder belt under the arm does not protect the chest and ribs and can cause serious abdominal injuries. Seat belts must be worn across the chest and lap as designed.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q154", category: "safety-first", subcategory: "head-restraints",
    question: "How should a head restraint fit relative to the back of your head?",
    options: ["A. With a 10 cm gap for comfort", "B. As close as possible to the back of the head (ideally touching), with no large gap", "C. With your head tilted forward touching the restraint", "D. Position doesn't matter for safety"],
    correct: "B", difficulty: "medium",
    explanation: "The closer the head restraint is to the back of your head, the more quickly it will support it in a rear impact. A large gap reduces its effectiveness in preventing whiplash.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q155", category: "safety-first", subcategory: "seat-belts",
    question: "You are pregnant. Should you wear a seat belt?",
    options: ["A. No - seat belts are dangerous during pregnancy", "B. Yes - the lap belt across the thighs and shoulder belt over the collarbone, NOT over the bump", "C. Yes - with the lap belt across the bump", "D. Only in the first trimester"],
    correct: "B", difficulty: "medium",
    explanation: "Pregnant women must wear seat belts with the lap portion under the bump across the top of the thighs, and the shoulder portion between the breasts. Never place the lap belt over the bump.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q156", category: "safety-first", subcategory: "airbags",
    question: "When replacing a steering wheel that has an airbag, what should you always do?",
    options: ["A. Disconnect the airbag system first - accidental deployment is dangerous", "B. Keep the airbag connected so it stays active during fitting", "C. Leave the engine running to power the airbag", "D. Nothing special is required"],
    correct: "A", difficulty: "hard",
    explanation: "Airbag systems must always be disabled (via the battery or system fuse) before working on the steering wheel. An accidental deployment can cause serious injury to anyone nearby.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q157", category: "safety-first", subcategory: "child-seats",
    question: "At what age or size can a child legally travel without a child car seat in the UK?",
    options: ["A. When they turn 10", "B. When they are 135 cm tall or turn 12, whichever comes first", "C. When they reach 50 kg", "D. From age 7 if they wear an adult belt"],
    correct: "B", difficulty: "medium",
    explanation: "Children must use an appropriate child restraint until they are 135 cm tall or turn 12 years old, whichever comes first. After this they can use an adult seat belt.",
    hcRule: "Rule 102", imageUrl: null
  },
  {
    id: "Q158", category: "safety-first", subcategory: "seat-belts",
    question: "Which vehicle type does NOT always require seat belts for passengers?",
    options: ["A. Sports cars", "B. Older vehicles manufactured before seat belt regulations applied", "C. Electric vehicles", "D. 4x4 off-road vehicles"],
    correct: "B", difficulty: "hard",
    explanation: "Vehicles manufactured before seat belt fitting regulations came into effect may not have them. However, modern vehicles and all post-regulation vehicles must have seat belts.",
    hcRule: "Rule 100", imageUrl: null
  },
  {
    id: "Q159", category: "safety-first", subcategory: "airbags",
    question: "Does the presence of airbags mean you do not need to wear a seat belt?",
    options: ["A. Yes - modern airbags replace seat belts", "B. No - airbags are supplementary restraints; they work WITH seat belts, not instead of them", "C. Only if there are front and side airbags", "D. Only at speeds below 40 mph"],
    correct: "B", difficulty: "easy",
    explanation: "Airbags are Supplemental Restraint Systems (SRS) designed to work with seat belts. Without a seat belt, an inflating airbag can cause fatal injuries. Always wear your seat belt.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q160", category: "safety-first", subcategory: "child-seats",
    question: "What does ISOFIX mean?",
    options: ["A. A type of car insurance for child passengers", "B. An international standard for attaching child seats directly to the car chassis via metal anchor points", "C. A brand of child car seat", "D. A repair kit for broken child seats"],
    correct: "B", difficulty: "medium",
    explanation: "ISOFIX is a standardised connection system that anchors child seats directly to the vehicle's chassis via metal brackets. It is more secure than using a seat belt alone and reduces incorrect fitting.",
    hcRule: "Rule 102", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // RULES OF THE ROAD (22 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q161", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "What is the national speed limit for a car on a single carriageway road in the UK (unless otherwise signed)?",
    options: ["A. 50 mph", "B. 60 mph", "C. 70 mph", "D. 55 mph"],
    correct: "B", difficulty: "easy",
    explanation: "The national speed limit on a single carriageway for cars and motorcycles is 60 mph. On a dual carriageway or motorway it is 70 mph. This is indicated by the circular white sign with a diagonal black stripe.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q162", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "What is the speed limit for a car towing a caravan on a motorway?",
    options: ["A. 50 mph", "B. 60 mph", "C. 70 mph", "D. 55 mph"],
    correct: "B", difficulty: "medium",
    explanation: "Cars towing caravans or trailers are limited to 60 mph on motorways and dual carriageways, and 50 mph on single carriageways. They are also not permitted to use the right-hand lane on a 3-lane motorway.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q163", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "On a three-lane motorway, when is it legal to use the right-hand lane?",
    options: ["A. Whenever you wish", "B. Only when overtaking and you must return to the left when it is safe", "C. Only for long-distance travel", "D. In congested traffic at all times"],
    correct: "B", difficulty: "easy",
    explanation: "The right-hand lane of a motorway is for overtaking only. You must move back to the left as soon as it is safe to do so after overtaking. Travelling in the right lane unnecessarily is 'lane hogging'.",
    hcRule: "Rule 264", imageUrl: null
  },
  {
    id: "Q164", category: "rules-of-the-road", subcategory: "junctions",
    question: "At a T-junction with no markings, who has priority?",
    options: ["A. The driver turning right always has priority", "B. Vehicles on the major road have priority over those emerging from the minor road", "C. The first car to arrive has priority", "D. All vehicles have equal priority - negotiate between yourselves"],
    correct: "B", difficulty: "medium",
    explanation: "At an unmarked T-junction, the vehicle on the continuing road (major road) generally has priority over those joining it from the minor road. Always give way to traffic on the road you are joining.",
    hcRule: "Rule 172", imageUrl: null
  },
  {
    id: "Q165", category: "rules-of-the-road", subcategory: "roundabouts",
    question: "When approaching a roundabout, who has priority?",
    options: ["A. Vehicles entering the roundabout", "B. Vehicles already ON the roundabout (circulating traffic)", "C. The largest vehicle", "D. Traffic coming from the right on the approach"],
    correct: "B", difficulty: "easy",
    explanation: "At a roundabout, you must give way to traffic already circulating on the roundabout (from the right). Only enter when there is a safe gap.",
    hcRule: "Rule 185", imageUrl: null
  },
  {
    id: "Q166", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "What is 'lane hogging' on a motorway?",
    options: ["A. Driving in the left lane at all times", "B. Driving continuously in the middle or right lane without overtaking", "C. Overtaking other vehicles repeatedly", "D. Driving below the national speed limit"],
    correct: "B", difficulty: "easy",
    explanation: "Lane hogging - staying in the middle or right lane when the left lane is clear - is illegal and can attract a fixed penalty. Always move back to the left after overtaking.",
    hcRule: "Rule 264", imageUrl: null
  },
  {
    id: "Q167", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "What is the default speed limit in a built-up area with street lighting?",
    options: ["A. 20 mph", "B. 30 mph", "C. 40 mph", "D. 50 mph"],
    correct: "B", difficulty: "easy",
    explanation: "In built-up areas with street lighting (lamp posts less than 200 metres apart), the default speed limit is 30 mph unless otherwise signed. Many areas now have 20 mph zones - always look for signs.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q168", category: "rules-of-the-road", subcategory: "junctions",
    question: "At a junction, you want to turn right but cannot see past vehicles parked near the junction. What should you do?",
    options: ["A. Edge out quickly and rely on other drivers to stop", "B. Sound your horn and proceed", "C. Creep forward cautiously until you can see clearly, waiting for a safe gap", "D. Wait for another driver to signal it is safe"],
    correct: "C", difficulty: "easy",
    explanation: "Creep slowly forward until you can see clearly in both directions. Never rely on other drivers to warn you. Never pull out until you are certain it is safe.",
    hcRule: "Rule 170", imageUrl: null
  },
  {
    id: "Q169", category: "rules-of-the-road", subcategory: "roundabouts",
    question: "You are at a roundabout and want to turn right (take the third exit). Which lane should you approach in?",
    options: ["A. Left lane", "B. Either lane depending on signs/markings", "C. Right lane", "D. Straight-ahead lane"],
    correct: "C", difficulty: "medium",
    explanation: "For exits past the 12 o'clock position (generally right turns or U-turns), approach in the right lane. Signal right on approach, keep right on the roundabout, signal left AFTER passing the exit before yours.",
    hcRule: "Rule 186", imageUrl: null
  },
  {
    id: "Q170", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "What does a solid white line along the centre of a road mean?",
    options: ["A. You may overtake if safe", "B. You must not cross or straddle the line", "C. A lane for cyclists only", "D. A pedestrian crossing area"],
    correct: "B", difficulty: "easy",
    explanation: "A solid white centre line means you must not cross or straddle it. It is used where overtaking is dangerous - typically on bends, hills, or near junctions. A hazard warning line (long dashes) means do not cross unless safe.",
    hcRule: "Rule 128", imageUrl: null
  },
  {
    id: "Q171", category: "rules-of-the-road", subcategory: "junctions",
    question: "What does a 'GIVE WAY' double dotted white line across the road mean?",
    options: ["A. You must stop completely", "B. You must give way to traffic on the major road before crossing", "C. You have priority", "D. Slow down to 20 mph"],
    correct: "B", difficulty: "easy",
    explanation: "A give way line (two broken white lines) means you must give priority to traffic on the road you are joining. You do not have to stop unless necessary.",
    hcRule: "Rule 172", imageUrl: null
  },
  {
    id: "Q172", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "What speed limit applies to a car on a motorway during a 'smart motorway' variable speed limit display showing '50'?",
    options: ["A. 50 mph is advisory only", "B. 50 mph is the mandatory maximum and enforced by cameras", "C. 60 mph is still the limit - 50 is a suggestion", "D. Only heavy vehicles are restricted to 50"],
    correct: "B", difficulty: "medium",
    explanation: "Variable speed limits displayed on smart motorway gantries are mandatory when displayed on a red-ringed sign. They are enforced by average speed cameras. Treat them the same as any fixed speed limit.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q173", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "You are travelling on a dual carriageway and see a vehicle travelling the wrong way towards you in your lane. What should you do?",
    options: ["A. Flash your lights and sound horn, then pull onto the verge if necessary", "B. Stop in your lane and wait for them to swerve", "C. Continue at speed - they will move", "D. Accelerate and overtake them on the left"],
    correct: "A", difficulty: "hard",
    explanation: "A wrong-way driver is an extreme emergency. Flash, sound horn to warn them, and if a collision is imminent, steer to the left onto the hard shoulder or verge. Never stop in the carriageway.",
    hcRule: "Rule 263", imageUrl: null
  },
  {
    id: "Q174", category: "rules-of-the-road", subcategory: "roundabouts",
    question: "At a mini roundabout, which direction do you go around?",
    options: ["A. Clockwise", "B. Anticlockwise", "C. Either direction if the road is clear", "D. Straight over the central marking"],
    correct: "B", difficulty: "easy",
    explanation: "At a mini roundabout, as with all UK roundabouts, you travel anticlockwise around the central marking. You must give way to the right as usual.",
    hcRule: "Rule 187", imageUrl: null
  },
  {
    id: "Q175", category: "rules-of-the-road", subcategory: "junctions",
    question: "You are turning right from a major road into a minor road. What should you do if an oncoming vehicle is also turning right?",
    options: ["A. You have priority - proceed first", "B. Normally pass offside-to-offside (right side to right side) if the road layout allows it", "C. Stop and wait for the other vehicle to complete its turn", "D. Both vehicles should proceed simultaneously"],
    correct: "B", difficulty: "hard",
    explanation: "When two vehicles are both turning right, the safest method is offside-to-offside (passing each other driver's side to driver's side). This allows both drivers to see oncoming traffic. Follow road markings where they indicate otherwise.",
    hcRule: "Rule 179", imageUrl: null
  },
  {
    id: "Q176", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "What is the speed limit for a car on a dual carriageway?",
    options: ["A. 60 mph", "B. 70 mph", "C. 80 mph", "D. The same as a single carriageway"],
    correct: "B", difficulty: "easy",
    explanation: "The national speed limit for cars on a dual carriageway is 70 mph. Some stretches may have lower limits shown on signs. Vehicles towing trailers are limited to 60 mph.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q177", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "You are on a motorway approaching an exit. When should you move to the left lane to exit?",
    options: ["A. At the exit sign", "B. Start moving left in good time before the exit, but do not cut across lanes suddenly", "C. Only after passing the countdown markers", "D. Signal and move over all lanes at once at the 300-yard marker"],
    correct: "B", difficulty: "medium",
    explanation: "Plan ahead and begin moving to the left lane well before your exit. Use the countdown markers (three, two, one bar) to monitor your approach. Do not cut across lanes at the last second.",
    hcRule: "Rule 261", imageUrl: null
  },
  {
    id: "Q178", category: "rules-of-the-road", subcategory: "junctions",
    question: "When emerging from a side road at a T-junction with a give way line, when can you safely enter the major road?",
    options: ["A. When the major road appears clear at a distance", "B. When there is a gap in traffic that is clearly sufficient to complete your manoeuvre safely", "C. When a vehicle on the major road slows down", "D. When another car in the side road toots their horn"],
    correct: "B", difficulty: "easy",
    explanation: "You must be certain there is a safe gap large enough for your complete manoeuvre before emerging. Do not rely on vehicles slowing - they may not. Never emerge on hope.",
    hcRule: "Rule 172", imageUrl: null
  },
  {
    id: "Q179", category: "rules-of-the-road", subcategory: "roundabouts",
    question: "When going straight ahead at a roundabout, which lane should you normally use?",
    options: ["A. Left lane", "B. Right lane", "C. Middle lane on wide roundabouts", "D. Either - there is no rule"],
    correct: "A", difficulty: "medium",
    explanation: "Unless signs or markings indicate otherwise, use the left lane when going straight ahead. Signal left as you pass the exit before yours to indicate you are leaving. Check right mirror before moving left.",
    hcRule: "Rule 186", imageUrl: null
  },
  {
    id: "Q180", category: "rules-of-the-road", subcategory: "speed-limits",
    question: "You are driving on a road where the speed limit is 30 mph and you regularly drive at 35 mph. What risk does this present?",
    options: ["A. No risk - 35 mph is close enough", "B. You risk a fixed penalty notice, penalty points, and increased stopping distance puts pedestrians at greater risk", "C. Only a risk during school hours", "D. Risk only if wet roads are present"],
    correct: "B", difficulty: "easy",
    explanation: "Even slightly exceeding the speed limit is illegal and increases stopping distances. In a 30 mph zone, even a few mph extra dramatically reduces reaction time to protect pedestrians.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q181", category: "rules-of-the-road", subcategory: "lane-discipline",
    question: "What do diagonal white stripes (chevrons) on the road indicate?",
    options: ["A. A cycle lane", "B. A separation area to divide lanes of traffic - you must not enter this area unless instructed by signs", "C. A bus lane", "D. A pedestrian crossing zone"],
    correct: "B", difficulty: "medium",
    explanation: "Diagonal white stripes or chevrons mark separation areas used to protect traffic turning right or to separate opposing traffic. You must not enter a hatched area bounded by a solid white line.",
    hcRule: "Rule 130", imageUrl: null
  },
  {
    id: "Q182", category: "rules-of-the-road", subcategory: "junctions",
    question: "What does a flashing amber traffic light at a junction mean?",
    options: ["A. Stop - red is about to show", "B. Give way to pedestrians on the crossing - you may proceed with caution if the crossing is clear", "C. All vehicles have right of way", "D. The traffic light system has failed - treat as a give way"],
    correct: "B", difficulty: "medium",
    explanation: "A flashing amber light at a pelican crossing means you may proceed only if the crossing is clear. Give way to any pedestrians still on the crossing.",
    hcRule: "Rule 196", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // ROAD SIGNS (22 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q183", category: "road-signs", subcategory: "warning-signs",
    question: "What shape are UK warning signs?",
    options: ["A. Circular with red border", "B. Rectangular", "C. Triangular with red border", "D. Diamond-shaped"],
    correct: "C", difficulty: "easy",
    explanation: "Warning signs are triangular with a red border on a white background. They warn of hazards ahead such as bends, junctions, schools, and level crossings.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q184", category: "road-signs", subcategory: "mandatory-signs",
    question: "What do circular signs with a red border indicate?",
    options: ["A. Information", "B. Prohibition or restriction - you must not do the thing shown", "C. Direction", "D. Warning"],
    correct: "B", difficulty: "easy",
    explanation: "Circular signs with a red border are prohibitory signs - they tell you what you MUST NOT do (e.g., no entry, speed limit, no overtaking). They are mandatory.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q185", category: "road-signs", subcategory: "mandatory-signs",
    question: "What does a circular blue sign with a white arrow pointing upwards mean?",
    options: ["A. Right of way for oncoming traffic", "B. One-way street - proceed ahead only", "C. Road narrows - keep left", "D. Motorway ahead"],
    correct: "B", difficulty: "easy",
    explanation: "Circular blue signs with white symbols give positive instructions - you MUST follow them. A white upward arrow means you must proceed in that direction (one-way ahead).",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q186", category: "road-signs", subcategory: "information-signs",
    question: "What colour are motorway information signs?",
    options: ["A. Green", "B. White", "C. Blue", "D. Yellow"],
    correct: "C", difficulty: "easy",
    explanation: "Motorway signs have blue backgrounds. Green signs are used on primary routes (A roads). White signs are used on local roads. Brown signs indicate tourist attractions.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q187", category: "road-signs", subcategory: "road-markings",
    question: "What does a yellow cross painted on a junction box in the road mean?",
    options: ["A. Cyclists have priority here", "B. You must not enter the box unless your exit is clear", "C. Stop and give way", "D. No vehicles over 3.5 tonnes"],
    correct: "B", difficulty: "easy",
    explanation: "A yellow box junction prevents vehicles blocking the junction. You must not enter until your exit is clear. Exception: you may enter to turn right if only oncoming traffic or vehicles turning right block you.",
    hcRule: "Rule 174", imageUrl: null
  },
  {
    id: "Q188", category: "road-signs", subcategory: "warning-signs",
    question: "A triangular sign showing a silhouette of a child with a flag. What does this mean?",
    options: ["A. Children's hospital ahead", "B. School crossing patrol ahead - be prepared to stop", "C. Playground on the right", "D. School zone speed camera"],
    correct: "B", difficulty: "easy",
    explanation: "This sign warns of a school crossing patrol (lollipop person) ahead. You must stop when the crossing patrol shows their stop sign - this is a legal requirement.",
    hcRule: "Rule 195", imageUrl: null
  },
  {
    id: "Q189", category: "road-signs", subcategory: "mandatory-signs",
    question: "A circular sign with a red border, blue background and a white car shows two vehicles side by side. What does it prohibit?",
    options: ["A. Parking", "B. Overtaking", "C. Waiting", "D. Two-way traffic"],
    correct: "B", difficulty: "medium",
    explanation: "The 'no overtaking' sign shows two cars side by side (car and motorcycle symbol) on a circular white/red-bordered sign. You must not overtake in this area.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q190", category: "road-signs", subcategory: "road-markings",
    question: "What do zigzag white lines on either side of a zebra crossing mean?",
    options: ["A. No parking at any time on the zigzag area", "B. Emergency stopping only", "C. Loading bay restrictions", "D. Bus only zone"],
    correct: "A", difficulty: "medium",
    explanation: "The zigzag markings on approaches to zebra crossings prohibit parking or overtaking. They ensure pedestrians and drivers have clear sightlines at the crossing.",
    hcRule: "Rule 191", imageUrl: null
  },
  {
    id: "Q191", category: "road-signs", subcategory: "information-signs",
    question: "What does a brown sign with a camera symbol indicate?",
    options: ["A. CCTV surveillance area", "B. Scenic viewpoint - photography recommended", "C. Speed camera ahead", "D. A tourist attraction or place of historic interest"],
    correct: "D", difficulty: "medium",
    explanation: "Brown signs with white symbols indicate tourist attractions and places of interest - historic houses, museums, theme parks, country parks, etc.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q192", category: "road-signs", subcategory: "warning-signs",
    question: "A triangular sign with a red border shows a train on a level crossing. What warning does it give?",
    options: ["A. Speed camera ahead", "B. Level crossing with automatic half-barriers ahead", "C. Railway station ahead", "D. Train yard - no entry"],
    correct: "B", difficulty: "medium",
    explanation: "A level crossing warning sign alerts you to an automatic half-barrier crossing ahead where trains may be passing. The variant showing a train without barriers indicates an unguarded crossing.",
    hcRule: "Rule 291", imageUrl: null
  },
  {
    id: "Q193", category: "road-signs", subcategory: "mandatory-signs",
    question: "What does a circular sign with a red border and the number '30' inside mean?",
    options: ["A. Minimum speed 30 mph", "B. Maximum speed limit of 30 mph", "C. Speed camera at 30 mph", "D. Recommended speed of 30 mph"],
    correct: "B", difficulty: "easy",
    explanation: "A circular sign with a red border and a number is a mandatory maximum speed limit. You must not exceed this speed. A circular blue sign with a number is a minimum speed limit.",
    hcRule: "Rule 124", imageUrl: null
  },
  {
    id: "Q194", category: "road-signs", subcategory: "road-markings",
    question: "What do single yellow lines along the kerb mean?",
    options: ["A. No parking at any time", "B. Restricted parking - times shown on nearby sign or plate", "C. Loading only at all times", "D. No stopping"],
    correct: "B", difficulty: "medium",
    explanation: "A single yellow line means parking is restricted. The times of restriction are shown on a nearby sign or plate. Outside the restricted hours, parking may be permitted.",
    hcRule: "Rule 247", imageUrl: null
  },
  {
    id: "Q195", category: "road-signs", subcategory: "information-signs",
    question: "A rectangular white sign with a black border and the text 'STOP 100 yds'. What does this mean?",
    options: ["A. You may stop here for 100 yards", "B. There is a STOP sign or junction 100 yards ahead", "C. Speed bump 100 yards ahead", "D. Speed camera 100 yards ahead"],
    correct: "B", difficulty: "medium",
    explanation: "Distance warning signs - rectangular with black borders - tell you how far ahead a hazard or feature is. This sign warns of a STOP junction ahead, giving you time to prepare.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q196", category: "road-signs", subcategory: "warning-signs",
    question: "A triangular sign with two arrows pointing opposite ways (left and right). What does this warn of?",
    options: ["A. Crossroads ahead", "B. Two-way traffic ahead", "C. One-way system ends", "D. Road narrows"],
    correct: "B", difficulty: "medium",
    explanation: "This sign warns you are about to encounter two-way traffic, often after a one-way section or on a bridge. Be prepared for oncoming vehicles.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q197", category: "road-signs", subcategory: "road-markings",
    question: "What do double yellow lines mean?",
    options: ["A. No parking between 8am and 6pm", "B. No waiting at any time", "C. No loading at any time", "D. Residents parking only"],
    correct: "B", difficulty: "easy",
    explanation: "Double yellow lines mean no waiting (parking) at any time of day on any day, including Sundays and bank holidays. Breaking this restriction risks a penalty charge notice (PCN).",
    hcRule: "Rule 247", imageUrl: null
  },
  {
    id: "Q198", category: "road-signs", subcategory: "mandatory-signs",
    question: "What does a red circle with a white horizontal bar across it mean?",
    options: ["A. No vehicles over 7.5 tonnes", "B. No entry for vehicular traffic", "C. No overtaking", "D. No waiting"],
    correct: "B", difficulty: "easy",
    explanation: "The 'no entry' sign - a red circle with a white horizontal bar - prohibits all vehicular traffic from entering that road. It is a one-way road entry from the wrong direction.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q199", category: "road-signs", subcategory: "information-signs",
    question: "What does a green rectangular sign on a primary route indicate?",
    options: ["A. Motorway direction", "B. Tourist attraction", "C. Direction of travel on primary A-roads", "D. Cycle route"],
    correct: "C", difficulty: "easy",
    explanation: "Green rectangular signs indicate primary route directions on major A-roads. Blue is for motorways, white for local roads, brown for tourist attractions, and yellow for temporary diversions.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q200", category: "road-signs", subcategory: "warning-signs",
    question: "A triangular sign shows a car skidding to the right with wavy lines beneath it. What does it warn of?",
    options: ["A. Slippery road surface ahead", "B. Speed humps ahead", "C. Gravel road ahead", "D. Flooding ahead"],
    correct: "A", difficulty: "easy",
    explanation: "This warning sign indicates a risk of skidding - the road surface may be slippery due to ice, mud, water, or loose material. Reduce speed and drive smoothly.",
    hcRule: "Rule 74", imageUrl: null
  },
  {
    id: "Q201", category: "road-signs", subcategory: "road-markings",
    question: "What does a 'box junction' (yellow hatched box) allow you to do that you might think is prohibited?",
    options: ["A. Nothing - you must never enter it", "B. You may enter to turn right if you are only prevented from completing the turn by oncoming traffic or vehicles turning right", "C. You may enter if the left lane of your exit is clear", "D. You may wait for up to 30 seconds inside it"],
    correct: "B", difficulty: "hard",
    explanation: "You must not enter a yellow box junction unless your exit is clear. The exception is turning right - you may wait in the box for a gap in oncoming traffic, provided your exit is clear.",
    hcRule: "Rule 174", imageUrl: null
  },
  {
    id: "Q202", category: "road-signs", subcategory: "mandatory-signs",
    question: "A blue circle with a white cycle symbol. What does it mean?",
    options: ["A. No cycling allowed", "B. Cycle route - cyclists only", "C. Shared pedestrian and cycle route", "D. Cycle parking area"],
    correct: "B", difficulty: "medium",
    explanation: "A blue circular sign with a white cycle symbol indicates a route for cyclists only - vehicles are not permitted. A shared route sign (blue rectangle) shows both a walking and cycling symbol.",
    hcRule: "Rule 140", imageUrl: null
  },
  {
    id: "Q203", category: "road-signs", subcategory: "information-signs",
    question: "What does a white rectangular sign with 'URBAN CLEARWAY' and times written on it mean?",
    options: ["A. Parking is free during the stated times", "B. You must not stop to pick up or set down passengers during the stated times, except in a marked bay", "C. No vehicles during the stated times", "D. No loading or unloading during the stated times"],
    correct: "B", difficulty: "hard",
    explanation: "An urban clearway prohibits stopping (including to pick up or drop off passengers) during the hours shown. The exception is stopping in a specifically marked bay.",
    hcRule: "Rule 247", imageUrl: null
  },
  {
    id: "Q204", category: "road-signs", subcategory: "warning-signs",
    question: "What does a triangular sign with a red border showing a car and motorbike side by side inside mean?",
    options: ["A. Motorbike parking ahead", "B. End of no-overtaking zone", "C. Shared road for cars and motorcycles only", "D. Warning - risk of side winds"],
    correct: "B", difficulty: "hard",
    explanation: "A triangular (warning) sign showing two vehicles side by side indicates the END of the no-overtaking restriction. Note: this is different from the circular no-overtaking prohibition sign.",
    hcRule: "Rule 74", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // DOCUMENTS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q205", category: "documents", subcategory: "licence",
    question: "How long is a standard UK driving licence photo card valid before the photo must be renewed?",
    options: ["A. 5 years", "B. 10 years", "C. 15 years", "D. Until age 70 then every 3 years"],
    correct: "B", difficulty: "medium",
    explanation: "The photo on a UK driving licence must be renewed every 10 years, even though the driving entitlement may last longer. The licence itself typically lasts until age 70 then requires renewal every 3 years.",
    hcRule: "Rule 1", imageUrl: null
  },
  {
    id: "Q206", category: "documents", subcategory: "insurance",
    question: "What is the minimum level of insurance required by law to drive on UK roads?",
    options: ["A. Fully comprehensive", "B. Third party, fire and theft", "C. Third party only", "D. Any level if you are under 25"],
    correct: "C", difficulty: "easy",
    explanation: "The legal minimum is third party insurance, which covers damage or injury to third parties (other people and their property). It does not cover your own vehicle, fire, or theft.",
    hcRule: "Rule 143", imageUrl: null
  },
  {
    id: "Q207", category: "documents", subcategory: "mot",
    question: "When does a new car require its first MOT test?",
    options: ["A. After 1 year", "B. After 2 years", "C. After 3 years", "D. After 4 years"],
    correct: "C", difficulty: "easy",
    explanation: "A new vehicle's first MOT is required when it is 3 years old. After that, an annual MOT is required. Driving without a valid MOT is illegal (except when driving to a pre-booked MOT).",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q208", category: "documents", subcategory: "vehicle-registration",
    question: "What must you do when you buy a new vehicle?",
    options: ["A. Notify your local council", "B. Notify the DVLA that you are now the registered keeper", "C. Apply for a new number plate", "D. Produce your old registration document at a Post Office"],
    correct: "B", difficulty: "easy",
    explanation: "When you buy a vehicle, you must notify the DVLA that you are the new registered keeper (V5C logbook). The previous keeper tears off Section 2 and sends it to DVLA, and you keep the main V5C.",
    hcRule: "Rule 144", imageUrl: null
  },
  {
    id: "Q209", category: "documents", subcategory: "insurance",
    question: "You lend your car to a friend. Whose insurance covers them driving it?",
    options: ["A. Your insurance automatically", "B. It depends - only if your policy includes 'driving other cars' extension or the friend has their own policy that covers them driving other cars", "C. The friend's licence covers them in any car", "D. No insurance is needed for occasional loans"],
    correct: "B", difficulty: "hard",
    explanation: "Just because you own the car does not mean your friend is covered. Check your policy. The friend needs to be a named driver on your policy, or they need a 'driving other cars' extension on their own policy.",
    hcRule: "Rule 143", imageUrl: null
  },
  {
    id: "Q210", category: "documents", subcategory: "mot",
    question: "Can you legally drive a vehicle with an expired MOT?",
    options: ["A. Yes, for up to 30 days after expiry", "B. Only to a pre-booked MOT test centre", "C. Yes - MOT is only checked when you get a new insurance policy", "D. Yes, if the vehicle is under 5 years old"],
    correct: "B", difficulty: "medium",
    explanation: "It is illegal to drive a vehicle with an expired MOT except when driving it to a pre-booked MOT appointment. You are also not covered by road tax without a valid MOT.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q211", category: "documents", subcategory: "licence",
    question: "You receive 6 penalty points within 2 years of passing your test. What happens?",
    options: ["A. Nothing - 12 points is the limit for everyone", "B. Your licence is automatically revoked and you must retake both theory and practical tests", "C. You receive a warning letter only", "D. Your licence is suspended for 6 months"],
    correct: "B", difficulty: "medium",
    explanation: "New drivers who accumulate 6 or more penalty points within 2 years of passing their first full test have their licence revoked. They must then reapply for a provisional and pass both tests again.",
    hcRule: "Rule 2", imageUrl: null
  },
  {
    id: "Q212", category: "documents", subcategory: "vehicle-registration",
    question: "What is the V5C document?",
    options: ["A. An MOT certificate", "B. The vehicle registration certificate (logbook) showing the registered keeper", "C. Proof of insurance", "D. A vehicle tax receipt"],
    correct: "B", difficulty: "easy",
    explanation: "The V5C is the vehicle registration certificate (logbook). It records the registered keeper, not necessarily the owner. It must be updated when ownership changes and is needed for selling, taxing, and registration queries.",
    hcRule: "Rule 144", imageUrl: null
  },
  {
    id: "Q213", category: "documents", subcategory: "insurance",
    question: "What is a 'Certificate of Motor Insurance'?",
    options: ["A. Your full policy document", "B. The document that proves your vehicle is insured - required to tax a vehicle", "C. Proof of no-claims discount", "D. The insurance company's registration document"],
    correct: "B", difficulty: "medium",
    explanation: "A Certificate of Motor Insurance (or insurance certificate) is the legal proof that your vehicle is insured. It is required to tax a vehicle and may be requested at the roadside by police.",
    hcRule: "Rule 143", imageUrl: null
  },
  {
    id: "Q214", category: "documents", subcategory: "mot",
    question: "Which of these items is checked during an MOT test?",
    options: ["A. Engine compression", "B. Seatbelt operation, lights, steering, brakes, tyres, and exhaust emissions", "C. Service history records", "D. Satellite navigation systems"],
    correct: "B", difficulty: "easy",
    explanation: "An MOT covers safety items including brakes, tyres, lights, steering, seat belts, windscreen, horn, mirrors, and exhaust emissions. It does not test engine internals or general mechanical condition.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q215", category: "documents", subcategory: "licence",
    question: "At what age must you notify the DVLA if you develop a medical condition that may affect your driving?",
    options: ["A. Only at age 70 or above", "B. At any age, as soon as the condition is diagnosed or becomes relevant", "C. Only if you are under 25", "D. Only if the condition results in hospitalisation"],
    correct: "B", difficulty: "medium",
    explanation: "You must notify the DVLA of any medical condition that may affect your ability to drive safely, at any age. Failure to do so can result in prosecution and invalidation of your insurance.",
    hcRule: "Rule 90", imageUrl: null
  },
  {
    id: "Q216", category: "documents", subcategory: "vehicle-registration",
    question: "If you change your address, who must you notify?",
    options: ["A. Your insurance company only", "B. DVLA, your insurance company, and any relevant finance company", "C. Only your insurance company within 7 days", "D. No one - addresses do not need to be updated on documents"],
    correct: "B", difficulty: "medium",
    explanation: "You must notify the DVLA (to update your licence and V5C), your insurance company (as address affects premium and coverage), and any finance company that holds interest in the vehicle.",
    hcRule: "Rule 144", imageUrl: null
  },
  {
    id: "Q217", category: "documents", subcategory: "insurance",
    question: "What does 'driving without insurance' carry as a minimum penalty?",
    options: ["A. A verbal warning", "B. A fixed penalty of £300 and 6 penalty points", "C. A driving ban", "D. Up to £1000 fine only"],
    correct: "B", difficulty: "medium",
    explanation: "The minimum fixed penalty for driving without insurance is £300 and 6 penalty points. In court, an unlimited fine and disqualification can be imposed. Your vehicle can also be seized and crushed.",
    hcRule: "Rule 143", imageUrl: null
  },
  {
    id: "Q218", category: "documents", subcategory: "licence",
    question: "What is the eyesight standard required to hold a UK driving licence?",
    options: ["A. 20/20 vision uncorrected", "B. Ability to read a standard number plate at 20 metres (with glasses or contacts if worn)", "C. Passing an annual eye test", "D. No standard - eyesight is self-reported"],
    correct: "B", difficulty: "easy",
    explanation: "You must be able to read a standard number plate (new format) at 20 metres. If you cannot do this without correction, you must wear glasses or contact lenses whenever driving.",
    hcRule: "Rule 92", imageUrl: null
  },
  {
    id: "Q219", category: "documents", subcategory: "mot",
    question: "Can a vehicle with an MOT 'advisory' item still legally be driven?",
    options: ["A. No - all advisory items must be repaired before use", "B. Yes - advisories are not failures but should be monitored and repaired soon", "C. Only with a speed restriction sign on the vehicle", "D. Only if accompanied by a qualified mechanic"],
    correct: "B", difficulty: "medium",
    explanation: "Advisory items recorded during an MOT are not failures - the vehicle has passed. However, advisories indicate items approaching failure that should be monitored and repaired to maintain safety.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q220", category: "documents", subcategory: "licence",
    question: "How many penalty points can a driver accumulate before losing their licence (for an established driver)?",
    options: ["A. 6 points", "B. 9 points", "C. 12 points", "D. 15 points"],
    correct: "C", difficulty: "easy",
    explanation: "An established driver (more than 2 years after passing) reaches the totting-up threshold at 12 penalty points within 3 years. A court can then impose a disqualification.",
    hcRule: "Rule 2", imageUrl: null
  },
  {
    id: "Q221", category: "documents", subcategory: "vehicle-registration",
    question: "What does SORN mean?",
    options: ["A. Standard Off Road Notification", "B. Statutory Off Road Notification - declared when you take a vehicle off the road and stop taxing it", "C. Safe Operations Road Notice", "D. Special Operator Road Network"],
    correct: "B", difficulty: "medium",
    explanation: "A SORN (Statutory Off Road Notification) must be made if you are not taxing your vehicle and it is kept off the road. A vehicle with a SORN cannot legally be on a public road.",
    hcRule: "Rule 144", imageUrl: null
  },
  {
    id: "Q222", category: "documents", subcategory: "insurance",
    question: "What is 'continuous insurance enforcement' (CIE)?",
    options: ["A. A legal requirement that all vehicles kept on public roads must be insured, whether driven or not", "B. Annual MOT enforcement", "C. A government scheme for young drivers", "D. Monthly insurance payment enforcement"],
    correct: "A", difficulty: "hard",
    explanation: "Under CIE, a vehicle must be insured at all times if it is taxed and registered (not SORNed). The DVLA compares its registry with insurance records and can issue fixed penalties to uninsured keepers.",
    hcRule: "Rule 143", imageUrl: null
  },
  {
    id: "Q223", category: "documents", subcategory: "licence",
    question: "What must you do if your driving licence is lost or stolen?",
    options: ["A. Nothing - you can continue driving without it", "B. Apply for a replacement from DVLA (online or by post) - driving is still legal if you are otherwise licensed", "C. Stop driving immediately until a new licence arrives", "D. Attend a police station to report it within 24 hours"],
    correct: "B", difficulty: "medium",
    explanation: "If your licence is lost or stolen, apply for a replacement from the DVLA. You can continue to drive legally as the entitlement exists - you just need to carry a replacement once received.",
    hcRule: "Rule 1", imageUrl: null
  },
  {
    id: "Q224", category: "documents", subcategory: "vehicle-registration",
    question: "What colour is a DVLA 'retention' document for a personalised number plate?",
    options: ["A. Red", "B. Green", "C. Blue", "D. Yellow"],
    correct: "C", difficulty: "hard",
    explanation: "DVLA retention certificates for personalised registrations (V778) are blue. They confirm your right to retain and later assign the number to a vehicle. They are valid for 12 months and renewable.",
    hcRule: "Rule 144", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // ACCIDENTS (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q225", category: "accidents", subcategory: "first-aid",
    question: "You arrive at the scene of an accident. Someone is unconscious but breathing. What position should they be placed in?",
    options: ["A. Flat on their back", "B. Sitting up", "C. The recovery position", "D. Face down"],
    correct: "C", difficulty: "easy",
    explanation: "An unconscious person who is breathing should be placed in the recovery position (on their side, lower arm out, top knee bent) to keep the airway clear and prevent choking.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q226", category: "accidents", subcategory: "reporting",
    question: "You are involved in an accident that injures another person. What must you do?",
    options: ["A. Leave a note and continue your journey", "B. Stop, give your details to anyone with reasonable grounds to require them, and if no police present, report to a police station within 24 hours", "C. Phone your insurance company within 7 days", "D. Attend your local council office within 48 hours"],
    correct: "B", difficulty: "medium",
    explanation: "If injury occurs, you must stop, exchange details, and if a police officer is not present, report the accident at a police station as soon as practicable and within 24 hours.",
    hcRule: "Rule 286", imageUrl: null
  },
  {
    id: "Q227", category: "accidents", subcategory: "breakdowns",
    question: "Your vehicle breaks down on a motorway. Where should you stop and what should you do?",
    options: ["A. In the left lane with hazard lights on", "B. On the hard shoulder as far left as possible, get out via the left-side doors and stand behind a barrier", "C. Stop at the next junction and call breakdown services from there", "D. Park in a motorway service area"],
    correct: "B", difficulty: "medium",
    explanation: "On a motorway, pull onto the hard shoulder and stop as far left as possible. Exit via the left doors, go to the embankment behind the barrier (not alongside the vehicle), and call for help using a motorway SOS phone.",
    hcRule: "Rule 277", imageUrl: null
  },
  {
    id: "Q228", category: "accidents", subcategory: "first-aid",
    question: "How many chest compressions should you give per minute during CPR on an adult?",
    options: ["A. 30 compressions per minute", "B. 60 compressions per minute", "C. 100 compressions per minute", "D. 120 compressions per minute"],
    correct: "C", difficulty: "hard",
    explanation: "Current UK Resuscitation Council guidance recommends 100-120 compressions per minute for adult CPR, with compressions 5-6 cm deep. Alternate 30 compressions with 2 rescue breaths if trained.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q229", category: "accidents", subcategory: "fire",
    question: "Your vehicle catches fire. What should you do first?",
    options: ["A. Try to extinguish the fire yourself before leaving", "B. Stop the engine, get everyone out of the vehicle, move away, and call 999", "C. Open the bonnet to ventilate the fire", "D. Drive to the nearest garage"],
    correct: "B", difficulty: "easy",
    explanation: "Vehicle fires can escalate within seconds. Stop the engine, evacuate all occupants, move well away from the vehicle, and call 999. Only use a fire extinguisher if it is very small and not spreading.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q230", category: "accidents", subcategory: "first-aid",
    question: "Someone at an accident has a bleeding wound. What is the most effective first aid you can give?",
    options: ["A. Apply a tourniquet immediately", "B. Apply firm direct pressure to the wound with a clean cloth", "C. Pour water over the wound to clean it", "D. Elevate the person's legs"],
    correct: "B", difficulty: "easy",
    explanation: "Direct pressure stops bleeding by allowing the blood to clot. Use a clean cloth or bandage. Keep pressing firmly. Only use a tourniquet for life-threatening limb bleeding as a last resort.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q231", category: "accidents", subcategory: "reporting",
    question: "You hit a parked car and the owner is nowhere to be found. What should you do?",
    options: ["A. Drive away - it was an accident", "B. Leave a note with your name and contact details, and report to police", "C. Take a photo and leave without leaving details", "D. Wait for at least one hour then drive away"],
    correct: "B", difficulty: "easy",
    explanation: "If you cannot find the other owner, leave a note with your name and contact details. You should also report the incident to a police station within 24 hours to cover your legal obligations.",
    hcRule: "Rule 286", imageUrl: null
  },
  {
    id: "Q232", category: "accidents", subcategory: "breakdowns",
    question: "You break down on a smart motorway without a hard shoulder. What should you do?",
    options: ["A. Stop in any lane and put on hazard lights", "B. Try to reach an Emergency Refuge Area (ERA) - marked with blue signs with an orange SOS phone symbol", "C. Walk to the nearest junction", "D. Open your bonnet and wait"],
    correct: "B", difficulty: "medium",
    explanation: "On smart motorways without hard shoulders, Emergency Refuge Areas (ERAs) are provided at regular intervals. Get to one as quickly as possible. If you cannot move, put on hazard lights and call 999.",
    hcRule: "Rule 277", imageUrl: null
  },
  {
    id: "Q233", category: "accidents", subcategory: "first-aid",
    question: "Someone's arm is trapped in a vehicle after an accident. Should you try to pull them free?",
    options: ["A. Yes - get them out as quickly as possible", "B. Only if there is a fire risk", "C. No - unless there is immediate danger, wait for emergency services who have the right equipment", "D. Yes - with another person helping"],
    correct: "C", difficulty: "medium",
    explanation: "Moving someone with possible spinal injuries can cause permanent damage or death. Unless there is immediate danger (fire, etc.), keep them still and calm until emergency services arrive.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q234", category: "accidents", subcategory: "fire",
    question: "What type of fire extinguisher is suitable for an electrical fire in a vehicle?",
    options: ["A. Water extinguisher", "B. CO2 (carbon dioxide) or dry powder extinguisher", "C. Foam extinguisher", "D. Wet chemical extinguisher"],
    correct: "B", difficulty: "medium",
    explanation: "Water and foam must not be used on electrical fires. CO2 or dry powder extinguishers are safe for electrical fires. A CO2 extinguisher is also less damaging to the vehicle interior.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q235", category: "accidents", subcategory: "reporting",
    question: "After a collision involving only property damage (no injury), what documents must you produce to the other party?",
    options: ["A. Your driving licence and insurance certificate", "B. Your name, address, and vehicle registration number", "C. Your full insurance policy", "D. Your MOT certificate"],
    correct: "B", difficulty: "medium",
    explanation: "Following a damage-only collision, you must provide your name, address, and the vehicle's registration number to anyone who has reasonable grounds to require them. Insurance details are also commonly exchanged.",
    hcRule: "Rule 286", imageUrl: null
  },
  {
    id: "Q236", category: "accidents", subcategory: "breakdowns",
    question: "At what distance behind your broken-down vehicle should you place a warning triangle on a single carriageway?",
    options: ["A. 10 metres", "B. 25 metres", "C. 45 metres", "D. 100 metres"],
    correct: "C", difficulty: "medium",
    explanation: "A warning triangle should be placed at least 45 metres (approximately 150 feet) behind a broken-down vehicle on a single carriageway to give following drivers adequate warning. Do NOT use them on motorways.",
    hcRule: "Rule 274", imageUrl: null
  },
  {
    id: "Q237", category: "accidents", subcategory: "first-aid",
    question: "A motorcyclist is injured and their helmet is on. Should you remove it?",
    options: ["A. Always remove it to check for head injuries", "B. Only remove it if they are not breathing - otherwise leave it", "C. Always remove it if they are conscious", "D. Only remove it if the visor is cracked"],
    correct: "B", difficulty: "hard",
    explanation: "Remove a motorcyclist's helmet only if they are not breathing and you need to perform CPR. The neck must be kept stable during removal. Otherwise, leave it on to avoid aggravating potential spinal injuries.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q238", category: "accidents", subcategory: "reporting",
    question: "How many days after an accident resulting in injury must you report to police if you did not do so at the scene?",
    options: ["A. 24 hours", "B. 48 hours", "C. 5 days", "D. 7 days"],
    correct: "A", difficulty: "medium",
    explanation: "You must report an accident involving injury to a police station as soon as reasonably practicable and within 24 hours. You must also produce insurance details at the station within 7 days.",
    hcRule: "Rule 286", imageUrl: null
  },
  {
    id: "Q239", category: "accidents", subcategory: "fire",
    question: "Your vehicle is on fire near a petrol station. What should you do?",
    options: ["A. Try to push the vehicle away from the pumps", "B. Move away from the vehicle and the petrol station immediately and call 999", "C. Pour sand over the fire from the petrol station sand bucket", "D. Use the petrol station's hose to extinguish the fire with water"],
    correct: "B", difficulty: "easy",
    explanation: "Near a petrol station, the risk of explosion is extreme. Get everyone away from both the vehicle AND the station as fast as possible. Call 999 immediately.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q240", category: "accidents", subcategory: "breakdowns",
    question: "You have a blowout on a motorway and cannot reach the hard shoulder. What should you do?",
    options: ["A. Stop in your lane, put hazard lights on, and attempt to change the tyre", "B. Put hazard lights on, call 999, stay in your car with seatbelt on until help arrives", "C. Get out and flag down other vehicles", "D. Continue driving slowly to the next junction"],
    correct: "B", difficulty: "hard",
    explanation: "If you cannot reach the hard shoulder after a blowout, stay in your vehicle with the seatbelt on. Put hazard lights on, call 999, and wait. Exiting onto a live motorway lane is extremely dangerous.",
    hcRule: "Rule 277", imageUrl: null
  },
  {
    id: "Q241", category: "accidents", subcategory: "first-aid",
    question: "How do you check if an unconscious person is breathing?",
    options: ["A. Check their pulse at the wrist", "B. Look for chest rise, listen for breath sounds, and feel for air on your cheek for up to 10 seconds", "C. Shake them gently", "D. Pinch their nose and look for reaction"],
    correct: "B", difficulty: "medium",
    explanation: "The 'look, listen, feel' technique: look for chest movement, listen for sounds of breathing, and feel for air on your cheek. Do this for no more than 10 seconds before deciding if CPR is needed.",
    hcRule: "Rule 283", imageUrl: null
  },
  {
    id: "Q242", category: "accidents", subcategory: "reporting",
    question: "Which animals must by law be reported to the police if you hit them on the road?",
    options: ["A. All animals including cats", "B. Dogs, horses, cattle, pigs, goats, sheep, donkeys, and mules", "C. Only dogs and horses", "D. Only farm animals on agricultural land"],
    correct: "B", difficulty: "hard",
    explanation: "Under the Road Traffic Act, you must stop and report to police if you hit a dog, horse, cattle, pigs, goats, sheep, donkeys, or mules. Cats are not legally included, though it is good practice to report them.",
    hcRule: "Rule 286", imageUrl: null
  },
  {
    id: "Q243", category: "accidents", subcategory: "breakdowns",
    question: "What colour and markings do Emergency Refuge Areas (ERAs) on smart motorways have?",
    options: ["A. Red background with white SOS phone symbol", "B. Blue background with orange SOS telephone symbol", "C. Yellow background with breakdown vehicle symbol", "D. Green background with white arrow"],
    correct: "B", difficulty: "medium",
    explanation: "ERAs are marked with a blue sign featuring an orange SOS telephone symbol. They are typically 500-800 metres apart on smart motorways and provide a safe place to stop and call for help.",
    hcRule: "Rule 277", imageUrl: null
  },
  {
    id: "Q244", category: "accidents", subcategory: "fire",
    question: "If you see a petrol fire, which type of extinguisher should you NOT use?",
    options: ["A. Dry powder", "B. Foam", "C. Water", "D. CO2"],
    correct: "C", difficulty: "medium",
    explanation: "Water must never be used on a petrol fire - it can spread the burning fuel and make the fire worse. Use foam, dry powder, or CO2 on fuel-based fires.",
    hcRule: "Rule 283", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // VEHICLE LOADING (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q245", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "When carrying a load in your car boot, where should the heaviest items be placed?",
    options: ["A. On top, so they are easiest to access", "B. As low as possible and towards the front of the boot", "C. Spread evenly across the rear seat and boot", "D. Behind the rear axle for better balance"],
    correct: "B", difficulty: "medium",
    explanation: "Heavy items should be positioned low and as close to the rear seats as possible to keep the vehicle's centre of gravity low and reduce the effect on handling.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q246", category: "vehicle-loading", subcategory: "towing",
    question: "What does a vehicle's 'gross vehicle weight' (GVW) mean?",
    options: ["A. The weight of the vehicle alone", "B. The maximum permitted total weight including vehicle, passengers, fuel, and load", "C. The weight of the vehicle when fully fuelled", "D. The engine weight only"],
    correct: "B", difficulty: "medium",
    explanation: "GVW (or Gross Vehicle Weight Rating, GVWR) is the maximum total weight the vehicle is designed to carry - including itself, fuel, passengers, and any load. Exceeding it is illegal and dangerous.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q247", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "You are carrying passengers in the rear of your estate car. What must you ensure?",
    options: ["A. The boot is separate from the passenger area by a screen or barrier", "B. The boot is empty if passengers are in the rear", "C. Items in the boot are secured so they cannot slide forward in a collision", "D. Rear passengers must use the middle seat only"],
    correct: "C", difficulty: "medium",
    explanation: "Unsecured loads in the boot can become dangerous projectiles in a sudden stop or collision. Always secure heavy or loose items to protect passengers.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q248", category: "vehicle-loading", subcategory: "towing",
    question: "What is the maximum noseweight a typical car towbar will support?",
    options: ["A. 25 kg", "B. 50 kg", "C. 75 kg", "D. 100 kg"],
    correct: "C", difficulty: "hard",
    explanation: "Most car towbars are rated to a maximum noseweight of 75 kg. Exceeding this places excessive load on the rear axle, affecting steering and braking. Check your vehicle handbook for the specific limit.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q249", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "You are carrying a load that overhangs the back of your vehicle by more than 1 metre. What must you do?",
    options: ["A. Nothing if the load is visible", "B. Mark the end of the load with a red flag or reflective marker and inform the police if over 3.05 m", "C. Drive only on motorways where there is more space", "D. You cannot legally carry such a load"],
    correct: "B", difficulty: "hard",
    explanation: "An overhang of 1 metre or more must be marked with a flag during the day or a red reflector/light at night. Loads over 3.05 m may require police notification or a special order.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q250", category: "vehicle-loading", subcategory: "towing",
    question: "When towing a trailer, are you permitted to use the right-hand lane on a three-lane motorway?",
    options: ["A. Yes, if you are overtaking", "B. Yes, at any time", "C. No - vehicles towing trailers are prohibited from the right-hand lane of a motorway with 3 or more lanes", "D. Only if the trailer is under 750 kg"],
    correct: "C", difficulty: "medium",
    explanation: "Vehicles towing trailers may only use the left and middle lanes of a three-or-more-lane motorway. They are prohibited from the right-hand lane except in roadworks or where signed otherwise.",
    hcRule: "Rule 265", imageUrl: null
  },
  {
    id: "Q251", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "How does an overloaded vehicle affect braking?",
    options: ["A. No effect - brakes are designed for any load", "B. Braking distance increases as extra weight creates more momentum to be absorbed", "C. Braking improves as more weight keeps tyres on the road", "D. Only affects braking on wet roads"],
    correct: "B", difficulty: "easy",
    explanation: "Excess weight increases kinetic energy, meaning brakes must work harder to stop the vehicle. Stopping distances increase significantly with an overloaded vehicle.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q252", category: "vehicle-loading", subcategory: "towing",
    question: "When setting off with a loaded trailer, what should you check first?",
    options: ["A. That the trailer is the right colour", "B. That the trailer lights, coupling, safety chain, and load are all secure and functioning", "C. That the engine oil level is correct", "D. That all passengers have their windows closed"],
    correct: "B", difficulty: "easy",
    explanation: "Before towing, check: the coupling is locked, safety chain is attached, electrical connection works (lights, indicators, brakes), load is secure, and trailer tyres are correctly inflated.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q253", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "What effect does a heavy load on a roof rack have?",
    options: ["A. Improves aerodynamics and fuel economy", "B. Raises the centre of gravity, reducing stability, especially when cornering", "C. Has no effect on handling", "D. Reduces noise inside the vehicle"],
    correct: "B", difficulty: "medium",
    explanation: "A heavy roof load raises the vehicle's centre of gravity, making it more prone to rolling, especially at corners and in crosswinds. It also increases wind resistance and fuel consumption.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q254", category: "vehicle-loading", subcategory: "towing",
    question: "What is 'snaking' or 'snaking and swaying' when towing a caravan?",
    options: ["A. The caravan weaving rhythmically from side to side in an uncontrollable manner", "B. A type of advanced towing technique", "C. The noise made by the towbar at speed", "D. The caravan brakes activating unexpectedly"],
    correct: "A", difficulty: "medium",
    explanation: "Snaking occurs when a caravan sways from side to side in increasing arcs. To correct it: ease off the accelerator (do NOT brake hard), and hold the steering wheel straight. Reduce speed and load to prevent recurrence.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q255", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "When carrying a very long piece of timber that extends beyond your vehicle, when must you use a night-marker?",
    options: ["A. Never - daytime flags are sufficient at all times", "B. When driving between sunset and sunrise - the end must carry a red light visible from behind", "C. Only on motorways", "D. Only when the load exceeds 3 metres"],
    correct: "B", difficulty: "hard",
    explanation: "At night, any load projecting beyond your vehicle must carry a red light (or reflector) visible from behind. By day, a red/white flag or bright marker must be used on the projection.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q256", category: "vehicle-loading", subcategory: "towing",
    question: "If a trailer becomes detached while you are driving, what should you do?",
    options: ["A. Accelerate away to separate from it faster", "B. Stop safely and as quickly as possible, put hazard lights on, and retrieve the trailer", "C. Continue driving - the safety chain will hold it", "D. Reverse to reconnect the trailer"],
    correct: "B", difficulty: "medium",
    explanation: "Stop safely and quickly. A detached trailer is an extreme road hazard. Put on hazard lights, warn other drivers, and secure the trailer. The safety chain is only a secondary backup, not a towing solution.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q257", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "How does an improperly secured load affect your legal liability?",
    options: ["A. You have no liability once it leaves your vehicle", "B. You could be prosecuted for an insecure load and held liable for any damage or injury caused", "C. Liability rests with the loading company only", "D. Only the vehicle owner is liable, not the driver"],
    correct: "B", difficulty: "medium",
    explanation: "If your load falls from your vehicle and causes an accident, you can be prosecuted for an insecure load and may face civil liability for injury or damage. The driver and owner share responsibility.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q258", category: "vehicle-loading", subcategory: "towing",
    question: "What is the maximum width of a vehicle and trailer combination permitted on UK roads without a special permit?",
    options: ["A. 2.0 metres", "B. 2.5 metres", "C. 3.0 metres", "D. 3.5 metres"],
    correct: "B", difficulty: "hard",
    explanation: "The maximum width for a standard vehicle or trailer on UK roads is 2.55 metres (sometimes stated as 2.5m for general guidance). Wider loads require special authorisation and may need a police escort.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q259", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "You are moving house and loading a hired van. What precaution should you take before driving?",
    options: ["A. Ensure you are comfortable with the extra height and length, secure all items, and check mirrors are correctly set for the van", "B. No precautions are needed - van hire includes full training", "C. Only load the van in daylight", "D. Reduce tyre pressure for heavy loads"],
    correct: "A", difficulty: "medium",
    explanation: "Driving a van for the first time requires adjustment: understand its height (risk of low bridges), length (turning and parking), and ensure all mirrors are correctly positioned. Secure all items to prevent movement.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q260", category: "vehicle-loading", subcategory: "towing",
    question: "What category of licence do you need to tow a trailer with a Maximum Authorised Mass (MAM) exceeding 3,500 kg?",
    options: ["A. A standard category B (car) licence", "B. Category BE", "C. Category C1E or CE depending on the towing vehicle", "D. No special category - any licence permits trailer towing"],
    correct: "C", difficulty: "hard",
    explanation: "Category B (car) licence with the appropriate allowance permits towing up to certain limits. Heavy trailers require C1E (medium lorry and trailer) or CE (large lorry and trailer) entitlements.",
    hcRule: "Rule 38", imageUrl: null
  },
  {
    id: "Q261", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "Why should you not drive with items hanging from your rear-view mirror?",
    options: ["A. It is only illegal on motorways", "B. It can obstruct your forward vision and is an MOT failure point", "C. It may distract pedestrians", "D. There is no rule against it"],
    correct: "B", difficulty: "medium",
    explanation: "Items hanging from the rear-view mirror can obstruct forward vision and distract the driver. An obstructed windscreen is an MOT failure and could result in prosecution.",
    hcRule: "Rule 97", imageUrl: null
  },
  {
    id: "Q262", category: "vehicle-loading", subcategory: "towing",
    question: "When reversing a trailer, which way do you steer to make the trailer go left?",
    options: ["A. Steer left", "B. Steer right", "C. The same as without a trailer", "D. Apply the handbrake"],
    correct: "B", difficulty: "medium",
    explanation: "When reversing a trailer, steering is opposite to normal. To make the trailer go left, steer right. To make it go right, steer left. Practice slowly in a large open space first.",
    hcRule: "Rule 254", imageUrl: null
  },
  {
    id: "Q263", category: "vehicle-loading", subcategory: "carrying-loads",
    question: "When are you required to check your vehicle's load is secure?",
    options: ["A. Only before setting off", "B. Before setting off and after any stop where the load may have shifted", "C. Only if the load weighs over 1 tonne", "D. Only if driving on a motorway"],
    correct: "B", difficulty: "medium",
    explanation: "Check your load is secure before setting off and again after any stop (especially on rough roads or after an emergency brake). Loads can shift during transit and become insecure.",
    hcRule: "Rule 98", imageUrl: null
  },
  {
    id: "Q264", category: "vehicle-loading", subcategory: "towing",
    question: "What is the effect of a heavily rear-biased load in a car (most weight in the boot)?",
    options: ["A. Better grip on the rear wheels", "B. Front wheels may lighten causing reduced steering response", "C. Fuel economy improves", "D. Stopping distances decrease"],
    correct: "B", difficulty: "hard",
    explanation: "A heavy rear bias lifts the front axle weight, reducing front tyre grip and making steering lighter and less responsive. This is particularly dangerous at speed. Distribute load as evenly as possible.",
    hcRule: "Rule 98", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // MOTORWAY RULES (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q265", category: "motorway-rules", subcategory: "joining",
    question: "When joining a motorway from a slip road, who has priority?",
    options: ["A. Vehicles on the slip road always have priority", "B. Traffic already on the motorway has priority", "C. The largest vehicle has priority", "D. Priority alternates at set intervals"],
    correct: "B", difficulty: "easy",
    explanation: "Traffic on the motorway has priority. You must adjust your speed on the slip road to join safely in a gap in the traffic. Do not stop at the end of the slip road unless absolutely necessary.",
    hcRule: "Rule 259", imageUrl: null
  },
  {
    id: "Q266", category: "motorway-rules", subcategory: "lanes",
    question: "What is the minimum motorway speed you should normally maintain to avoid being a hazard?",
    options: ["A. 30 mph", "B. 40 mph", "C. 50 mph", "D. There is no minimum speed limit on motorways"],
    correct: "D", difficulty: "medium",
    explanation: "There is no statutory minimum speed limit on motorways, but you must not drive so slowly that you create a hazard for other traffic. Driving extremely slowly on a motorway can be as dangerous as speeding.",
    hcRule: "Rule 253", imageUrl: null
  },
  {
    id: "Q267", category: "motorway-rules", subcategory: "lanes",
    question: "You are on a two-lane motorway and wish to overtake a slow vehicle. Which lane should you use?",
    options: ["A. The right-hand (lane 2) lane only", "B. Either lane", "C. Undertake on the left if the right is also slow", "D. Move to the hard shoulder to pass"],
    correct: "A", difficulty: "easy",
    explanation: "Overtaking on a motorway must be done in a lane to the right of the vehicle being overtaken. On a two-lane motorway, use lane 2 to overtake. Return to lane 1 when safe.",
    hcRule: "Rule 264", imageUrl: null
  },
  {
    id: "Q268", category: "motorway-rules", subcategory: "contraflow",
    question: "What does a contraflow mean on a motorway?",
    options: ["A. Traffic is routed the wrong way down a motorway", "B. Traffic is directed into lanes on the opposite side of the central barrier using temporary cones", "C. The motorway is operating in one direction only", "D. A special lane for emergency vehicles"],
    correct: "B", difficulty: "medium",
    explanation: "In a contraflow, roadworks cones divert traffic onto the opposite carriageway, creating a two-way flow separated by cones. Lanes are usually narrower and speed limits are lower.",
    hcRule: "Rule 288", imageUrl: null
  },
  {
    id: "Q269", category: "motorway-rules", subcategory: "smart-motorways",
    question: "What does a red X on a smart motorway gantry mean?",
    options: ["A. Road works 500 metres ahead", "B. That lane is closed - do not proceed in that lane", "C. A speed camera is operating in that lane", "D. Heavy traffic in that lane"],
    correct: "B", difficulty: "easy",
    explanation: "A red X on a smart motorway overhead gantry means the lane is closed. You must not proceed beyond the red X in that lane. Enforcement cameras may issue fines for ignoring a red X.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q270", category: "motorway-rules", subcategory: "joining",
    question: "You miss your motorway exit. What should you do?",
    options: ["A. Stop on the hard shoulder and reverse to the exit", "B. Make a U-turn across the central reservation", "C. Continue to the next junction and use a different route", "D. Cross the chevron markings to reach the exit"],
    correct: "C", difficulty: "easy",
    explanation: "If you miss a motorway exit, continue to the next junction and exit there. Stopping on the hard shoulder or reversing on a motorway is extremely dangerous and illegal.",
    hcRule: "Rule 261", imageUrl: null
  },
  {
    id: "Q271", category: "motorway-rules", subcategory: "lanes",
    question: "Can you use the hard shoulder on a traditional motorway to overtake?",
    options: ["A. Yes, if traffic is very heavy", "B. Yes, at off-peak times", "C. No - the hard shoulder is for emergencies only and must not be used for driving", "D. Yes, if indicated by overhead signs"],
    correct: "C", difficulty: "easy",
    explanation: "The hard shoulder of a traditional motorway is reserved for genuine emergencies and breakdowns. It must never be used for normal driving, overtaking, or as a shortcut to exits.",
    hcRule: "Rule 264", imageUrl: null
  },
  {
    id: "Q272", category: "motorway-rules", subcategory: "smart-motorways",
    question: "On an 'All Lane Running' (ALR) smart motorway, what has the hard shoulder been converted to?",
    options: ["A. A cycle lane", "B. A permanent running lane", "C. A bus-only lane", "D. An emergency vehicle lane"],
    correct: "B", difficulty: "medium",
    explanation: "On All Lane Running (ALR) smart motorways, the hard shoulder has been permanently converted to a running lane. Emergency Refuge Areas replace the hard shoulder for breakdowns.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q273", category: "motorway-rules", subcategory: "contraflow",
    question: "In a motorway contraflow, which lane should you choose?",
    options: ["A. The fastest lane available", "B. Follow overhead signs and choose the lane appropriate for your exit, keeping left unless overtaking", "C. Always use the rightmost available lane", "D. Lane choice does not apply in contraflows"],
    correct: "B", difficulty: "medium",
    explanation: "In a contraflow, follow lane markings and overhead signs carefully. Keep left unless overtaking, as in normal motorway driving, and plan your exit well in advance as sight lines may be limited.",
    hcRule: "Rule 288", imageUrl: null
  },
  {
    id: "Q274", category: "motorway-rules", subcategory: "joining",
    question: "You are on the slip road and the motorway is very busy. The vehicle ahead of you has stopped at the end of the slip road. What should you do?",
    options: ["A. Overtake the stopped vehicle and force a gap in the motorway traffic", "B. Stay behind and wait for a safe gap before moving", "C. Sound your horn to indicate the vehicle ahead should move", "D. Use the hard shoulder to join the motorway"],
    correct: "B", difficulty: "medium",
    explanation: "Stopping on a slip road is a last resort. Stay behind the vehicle and wait for a safe gap. Never use the hard shoulder to join the motorway or overtake stopped traffic on the slip road.",
    hcRule: "Rule 259", imageUrl: null
  },
  {
    id: "Q275", category: "motorway-rules", subcategory: "lanes",
    question: "What should you do if you realise you are about to run out of fuel on a motorway?",
    options: ["A. Stop in the left lane with hazard lights on", "B. Signal and move to the hard shoulder before you run out, then call for assistance", "C. Accelerate to reach a service station", "D. Ask a passing motorist for fuel"],
    correct: "B", difficulty: "medium",
    explanation: "Move to the hard shoulder as soon as possible if you think you are running low on fuel and cannot reach a services. Running out of fuel in a live lane is extremely dangerous.",
    hcRule: "Rule 277", imageUrl: null
  },
  {
    id: "Q276", category: "motorway-rules", subcategory: "smart-motorways",
    question: "What does a variable speed limit of 50 on a smart motorway gantry help manage?",
    options: ["A. Traffic flow to reduce stop-start congestion and emissions", "B. The police speed enforcement activity level", "C. Fuel pricing at motorway services", "D. The number of vehicles permitted on a section at once"],
    correct: "A", difficulty: "medium",
    explanation: "Variable speed limits smooth traffic flow by preventing bunching, reducing stop-start driving which wastes fuel and increases accident risk. They can also reduce noise and emissions in sensitive areas.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q277", category: "motorway-rules", subcategory: "lanes",
    question: "What colour are the reflective studs between motorway lanes?",
    options: ["A. Red", "B. Green", "C. White", "D. Amber"],
    correct: "C", difficulty: "medium",
    explanation: "White reflective studs mark the lane dividers between lanes. Red studs mark the left edge (hard shoulder boundary). Amber studs mark the central reservation. Green studs mark slip road entries/exits.",
    hcRule: "Rule 132", imageUrl: null
  },
  {
    id: "Q278", category: "motorway-rules", subcategory: "contraflow",
    question: "Why are speed limits typically reduced in motorway roadworks (contraflow) zones?",
    options: ["A. To allow road workers time to clear the area", "B. Because lanes are narrower, barriers are closer, and road workers are present - reducing reaction time margins", "C. To prevent damage to road-laying machinery", "D. There is no legal requirement for reduced speed in roadworks"],
    correct: "B", difficulty: "easy",
    explanation: "Roadwork zones have reduced speed limits because lanes are narrower, the central barrier is closer, and workers may be nearby. There is less margin for error at higher speeds.",
    hcRule: "Rule 288", imageUrl: null
  },
  {
    id: "Q279", category: "motorway-rules", subcategory: "joining",
    question: "When is it permissible to reverse on a motorway?",
    options: ["A. If you have missed your exit", "B. If directed to do so by a police officer or Highways England officer", "C. Never under any circumstances", "D. When the motorway is closed ahead"],
    correct: "B", difficulty: "medium",
    explanation: "Reversing on a motorway is generally prohibited. The only exception is if you are directed to do so by a uniformed police officer or Highways England traffic officer in an emergency situation.",
    hcRule: "Rule 263", imageUrl: null
  },
  {
    id: "Q280", category: "motorway-rules", subcategory: "smart-motorways",
    question: "What does a 'Dynamic Hard Shoulder' (DHS) smart motorway use that ALR does not?",
    options: ["A. More cameras", "B. A hard shoulder that can be opened during busy periods to provide an extra running lane", "C. A dedicated breakdown lane at all times", "D. Higher speed limits during quiet periods"],
    correct: "B", difficulty: "hard",
    explanation: "On a DHS motorway, the hard shoulder can be opened as an extra lane during peak demand (shown by overhead signs). When not open, it remains an emergency stopping area.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q281", category: "motorway-rules", subcategory: "lanes",
    question: "Which vehicle may use a motorway's right-hand lane as a normal running lane?",
    options: ["A. A car towing a trailer", "B. A car with no trailer or special restriction", "C. A large lorry over 7.5 tonnes", "D. A minibus carrying 9 or more passengers"],
    correct: "B", difficulty: "medium",
    explanation: "Standard cars (Category B) with no towing restriction can use all lanes. Vehicles over 3.5 tonnes, those towing trailers, and certain buses are prohibited from the right-hand lane on 3-lane motorways.",
    hcRule: "Rule 264", imageUrl: null
  },
  {
    id: "Q282", category: "motorway-rules", subcategory: "joining",
    question: "At what speed should you join a motorway from a slip road?",
    options: ["A. 40 mph to be safe", "B. As close to the speed of motorway traffic as possible to merge smoothly", "C. 30 mph to give way to motorway traffic", "D. The speed shown on the slip road limit sign"],
    correct: "B", difficulty: "easy",
    explanation: "Use the slip road to build up your speed to match motorway traffic flow so you can merge smoothly and safely. Joining too slowly forces motorway traffic to brake and increases collision risk.",
    hcRule: "Rule 259", imageUrl: null
  },
  {
    id: "Q283", category: "motorway-rules", subcategory: "smart-motorways",
    question: "How quickly must you exit a lane where a red X is showing?",
    options: ["A. At the next junction", "B. Within 100 metres", "C. As soon as it is safe to do so", "D. You can remain until the lane becomes physically blocked"],
    correct: "C", difficulty: "medium",
    explanation: "When you see a red X, you must move out of that lane as soon as it is safe to do so. Do not drive past a red X in that lane. The lane may be closed due to an accident, debris, or a broken-down vehicle.",
    hcRule: "Rule 262", imageUrl: null
  },
  {
    id: "Q284", category: "motorway-rules", subcategory: "lanes",
    question: "You have been travelling in the middle lane for some time. Traffic ahead clears and the left lane is empty. What should you do?",
    options: ["A. Stay in the middle lane - it is more comfortable", "B. Move to the left lane as soon as it is safe", "C. Signal right and move further right", "D. There is no obligation to move left on motorways"],
    correct: "B", difficulty: "easy",
    explanation: "You must move back to the left lane when it is safe and when there is no traffic to overtake. Staying in the middle lane unnecessarily is lane hogging - an endorsable offence.",
    hcRule: "Rule 264", imageUrl: null
  },

  // ─────────────────────────────────────────────
  // ENVIRONMENTAL ISSUES (20 questions)
  // ─────────────────────────────────────────────
  {
    id: "Q285", category: "environmental-issues", subcategory: "emissions",
    question: "What is the purpose of a catalytic converter?",
    options: ["A. To improve fuel economy", "B. To reduce harmful exhaust emissions by converting pollutants into less harmful gases", "C. To increase engine power", "D. To reduce engine noise"],
    correct: "B", difficulty: "easy",
    explanation: "A catalytic converter chemically converts harmful exhaust gases (carbon monoxide, nitrogen oxides, and hydrocarbons) into less harmful carbon dioxide, nitrogen, and water vapour.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q286", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "Which of the following driving techniques MOST reduces fuel consumption?",
    options: ["A. Accelerating hard then braking late", "B. Driving at high revs in a low gear", "C. Smooth acceleration, maintaining steady speed, and anticipating traffic to reduce unnecessary braking", "D. Keeping the engine running at all times to maintain temperature"],
    correct: "C", difficulty: "easy",
    explanation: "Smooth, progressive acceleration, maintaining steady speeds, and anticipating traffic to avoid unnecessary braking significantly reduces fuel consumption and emissions.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q287", category: "environmental-issues", subcategory: "emissions",
    question: "What does 'idling' a vehicle mean and why should you avoid it?",
    options: ["A. Driving slowly - unavoidable in traffic", "B. Running the engine when the vehicle is stationary - wastes fuel and produces unnecessary emissions", "C. Driving in too high a gear", "D. Leaving the air conditioning on while driving"],
    correct: "B", difficulty: "easy",
    explanation: "Idling means leaving the engine running while stationary. It produces exhaust emissions for no purpose and wastes fuel. Switch off the engine if stationary for more than a minute or two.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q288", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "At what speed does a petrol car typically achieve its best fuel economy on motorways?",
    options: ["A. 50 mph", "B. 60 mph", "C. 70 mph", "D. 80 mph"],
    correct: "B", difficulty: "medium",
    explanation: "Most petrol cars are most efficient at around 55-60 mph. Above 60 mph, aerodynamic drag increases exponentially, sharply reducing fuel economy. Driving at 70 mph uses significantly more fuel than 60 mph.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q289", category: "environmental-issues", subcategory: "emissions",
    question: "What does a DPF (Diesel Particulate Filter) do?",
    options: ["A. Reduces engine noise", "B. Removes soot and particulate matter from diesel exhaust gases", "C. Improves fuel injection efficiency", "D. Converts diesel exhaust to natural gas"],
    correct: "B", difficulty: "medium",
    explanation: "A DPF captures soot and particulate matter from diesel exhaust. It requires periodic 'regeneration' - best achieved by driving at sustained motorway speeds to burn off accumulated soot.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q290", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "How does tyre pressure affect fuel consumption?",
    options: ["A. Higher pressure reduces fuel consumption by reducing rolling resistance", "B. Under-inflated tyres increase rolling resistance, increasing fuel consumption", "C. Tyre pressure has no effect on fuel economy", "D. Lower pressure improves grip and reduces fuel use"],
    correct: "B", difficulty: "medium",
    explanation: "Underinflated tyres flex more, increasing rolling resistance and requiring more fuel to maintain speed. Check tyres monthly and inflate to the manufacturer's recommended pressure.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q291", category: "environmental-issues", subcategory: "emissions",
    question: "What is a ULEZ (Ultra Low Emission Zone)?",
    options: ["A. A motorway zone with enforced minimum speeds", "B. An urban area where older, more polluting vehicles must pay a daily charge or be banned", "C. A zone where zero emissions are permitted at all times", "D. A government programme for electric vehicle charging"],
    correct: "B", difficulty: "medium",
    explanation: "A ULEZ (such as London's) requires vehicles not meeting minimum emission standards (Euro 4 petrol, Euro 6 diesel) to pay a daily charge when driving in the zone. It aims to improve air quality.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q292", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "What effect does carrying unnecessary weight in your vehicle have?",
    options: ["A. Improves stability and fuel economy", "B. Increases fuel consumption - remove unnecessary items from the boot", "C. Has no effect on fuel consumption", "D. Reduces tyre wear"],
    correct: "B", difficulty: "easy",
    explanation: "Every 50 kg of excess weight increases fuel consumption by about 1-2%. Remove items you do not need for the journey - especially heavy items in the boot.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q293", category: "environmental-issues", subcategory: "emissions",
    question: "Which gas from vehicle exhausts is the main contributor to the greenhouse effect?",
    options: ["A. Carbon monoxide (CO)", "B. Nitrogen oxide (NOx)", "C. Carbon dioxide (CO2)", "D. Sulphur dioxide (SO2)"],
    correct: "C", difficulty: "easy",
    explanation: "Carbon dioxide (CO2) is the primary greenhouse gas produced by vehicle combustion. It is measured in g/km and forms the basis for UK Vehicle Excise Duty (car tax) rates.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q294", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "Why does using air conditioning increase fuel consumption?",
    options: ["A. It increases engine temperature", "B. The A/C compressor is driven by the engine, creating additional mechanical load that requires more fuel", "C. A/C uses electrical power from the battery which the alternator must recharge", "D. A/C systems reduce aerodynamics"],
    correct: "B", difficulty: "medium",
    explanation: "Air conditioning's compressor is belt-driven by the engine. Running A/C adds mechanical load, which increases fuel consumption by around 10-20%, especially at low speeds.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q295", category: "environmental-issues", subcategory: "emissions",
    question: "What is 'eco-driving'?",
    options: ["A. Driving exclusively on electric vehicles", "B. A style of driving that minimises fuel consumption and emissions through smooth, anticipatory driving", "C. Driving only in designated eco zones", "D. Using biofuels exclusively"],
    correct: "B", difficulty: "easy",
    explanation: "Eco-driving involves smooth acceleration, anticipating traffic to reduce braking, maintaining steady speeds, and switching off the engine when stationary - reducing fuel use and emissions.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q296", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "In which gear should you cruise on a motorway at 60 mph for best fuel economy?",
    options: ["A. Third gear", "B. Fourth gear", "C. Fifth or sixth gear (highest appropriate gear)", "D. The gear does not matter"],
    correct: "C", difficulty: "easy",
    explanation: "Higher gears at appropriate speeds keep engine revs lower, using less fuel. On a motorway at 60 mph, use the highest gear in which the engine runs smoothly without labouring.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q297", category: "environmental-issues", subcategory: "emissions",
    question: "What does a green number plate on a UK vehicle indicate?",
    options: ["A. Agricultural vehicle", "B. Fully electric (zero emission) vehicle", "C. Hybrid vehicle", "D. Vehicle exempt from road tax"],
    correct: "B", difficulty: "medium",
    explanation: "Green number plates (green flash or fully green plate) were introduced in the UK to identify fully electric, zero-emission vehicles. They can help with access to clean air zones and charging priority.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q298", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "How does anticipating traffic lights improve fuel economy?",
    options: ["A. It does not - braking patterns do not affect fuel use", "B. Easing off the accelerator early lets the engine brake, saving fuel compared to hard braking then re-accelerating", "C. Anticipating lights allows you to use lower gears more often", "D. It only helps diesel vehicles"],
    correct: "B", difficulty: "medium",
    explanation: "If you ease off the accelerator well before a red light, you use engine braking (coasting) which uses minimal fuel. Hard braking and then re-accelerating from zero wastes significantly more fuel.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q299", category: "environmental-issues", subcategory: "emissions",
    question: "Why is it particularly important to reduce vehicle emissions in urban areas?",
    options: ["A. Urban roads have lower speed limits", "B. Concentrated emissions in cities contribute to poor air quality, health issues, and NOx pollution", "C. Urban roads are made of different materials sensitive to pollution", "D. Urban vehicles use different fuel types"],
    correct: "B", difficulty: "easy",
    explanation: "In urban areas, vehicle exhaust (particularly NOx and particulates from diesels) concentrates at street level, contributing to poor air quality linked to respiratory disease, premature death, and climate change.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q300", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "What single action could save you the most fuel on a long motorway journey?",
    options: ["A. Switching off the radio", "B. Reducing your speed from 70 mph to 60 mph", "C. Inflating tyres by 5 psi above the recommended pressure", "D. Removing the spare tyre"],
    correct: "B", difficulty: "medium",
    explanation: "Aerodynamic drag increases with the square of speed. Slowing from 70 to 60 mph reduces fuel consumption by approximately 15-25%. It is the single biggest fuel-saving change on motorways.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q301", category: "environmental-issues", subcategory: "emissions",
    question: "What does it mean when a diesel engine produces black or dark grey smoke from the exhaust?",
    options: ["A. The engine is warming up normally", "B. The engine is using premium diesel", "C. The engine is burning excess fuel or has a blocked DPF - an environmental and mechanical concern", "D. The vehicle needs an oil change"],
    correct: "C", difficulty: "medium",
    explanation: "Black or dark smoke from a diesel exhaust indicates incomplete combustion - excess fuel, a faulty injector, a blocked DPF, or a dirty air filter. It is an emission failure and should be investigated immediately.",
    hcRule: "Rule 89", imageUrl: null
  },
  {
    id: "Q302", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "Which of the following reduces fuel consumption on a longer journey?",
    options: ["A. Fitting wider tyres", "B. Combining multiple short trips into one longer journey", "C. Running the engine to warm up before setting off", "D. Using premium fuel at all times"],
    correct: "B", difficulty: "medium",
    explanation: "Cold engines use significantly more fuel. Combining several short trips into one means the engine runs warm for more of the journey, improving efficiency and reducing total emissions.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q303", category: "environmental-issues", subcategory: "emissions",
    question: "What does a car's Euro emission standard rating indicate?",
    options: ["A. The country in which the car was manufactured", "B. The level of exhaust pollutants the vehicle produces - higher numbers (Euro 6) indicate cleaner engines", "C. The vehicle's fuel efficiency in mpg", "D. The age of the vehicle"],
    correct: "B", difficulty: "medium",
    explanation: "Euro emission standards (Euro 1-6) set limits on exhaust pollutants. Euro 6 is the current standard for new cars, setting strict limits on NOx, carbon monoxide, hydrocarbons, and particulates.",
    hcRule: "Rule 123", imageUrl: null
  },
  {
    id: "Q304", category: "environmental-issues", subcategory: "fuel-efficiency",
    question: "Why should you remove a roof rack when not in use?",
    options: ["A. Roof racks are illegal when not carrying a load", "B. An empty roof rack significantly increases aerodynamic drag and fuel consumption", "C. Roof racks cause tyre wear", "D. They interfere with GPS signals"],
    correct: "B", difficulty: "easy",
    explanation: "An empty roof rack can increase fuel consumption by up to 10% by creating aerodynamic drag. Always remove it when not in use. A roof box with items inside is even worse for drag.",
    hcRule: "Rule 123", imageUrl: null
  }

];

// Export for use in quiz.js and tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS };
}
