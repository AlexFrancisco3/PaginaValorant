// VALORANT PROTOCOL // DATA ARCHIVE
// Version: Episode 09 // Act II
const VALORANT_DATA = {
  agents: [
    {
      id: "jett",
      name: "JETT",
      role: "Duelist",
      origin: "South Korea",
      biography: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",
      color: "#00f5d4",
      playstyle: "Aggressive entry fragger, high verticality, instant repositioning.",
      abilities: [
        {
          key: "Q",
          name: "Updraft",
          type: "Movement",
          cost: "150 Creds",
          description: "INSTANTLY propel Jett high into the air. Useful for reaching elevated vantage points or surprising enemies from above off-angles."
        },
        {
          key: "E",
          name: "Tailwind",
          type: "Signature",
          cost: "Free (2 Kills to recharge)",
          description: "ACTIVATE to prepare a 7.5s windup timer. RE-ACTIVATE to instantly dash in the direction Jett is moving. If stationary, she dashes forward."
        },
        {
          key: "C",
          name: "Cloudburst",
          type: "Utility",
          cost: "200 Creds",
          description: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud of smoke on impact. HOLD the ability key to curve the smoke path."
        },
        {
          key: "X",
          name: "Blade Storm",
          type: "Ultimate",
          cost: "8 Ult Points",
          description: "EQUIP a set of highly accurate throwing knives that recharge on killing an enemy. FIRE to throw a single dagger. ALT-FIRE to throw all remaining daggers in a shotgun burst."
        }
      ]
    },
    {
      id: "reyna",
      name: "REYNA",
      role: "Duelist",
      origin: "Mexico",
      biography: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by raw skill, making her sharply reliant on continuous fragging performance.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/blt65e00f345550c39a/5eb7cdc105e63778945b1214/V_AGENTS_587x900_Reyna.png",
      color: "#e11d48",
      playstyle: "Snowballing duelist, self-sustain, invulnerability phases.",
      abilities: [
        {
          key: "Q",
          name: "Devour",
          type: "Sustain",
          cost: "200 Creds (Shared)",
          description: "Enemies killed by Reyna leave Soul Orbs for 3s. Instantly consume an orb to heal rapidly for a short duration. Health over 100 turns into an overheal shield."
        },
        {
          key: "E",
          name: "Dismiss",
          type: "Signature",
          cost: "200 Creds (Shared)",
          description: "Instantly consume a nearby Soul Orb to become intangible and invulnerable for 2s. While Empress is active, Reyna also turns completely invisible."
        },
        {
          key: "C",
          name: "Leer",
          type: "Utility",
          cost: "250 Creds",
          description: "EQUIP an ethereal eye. FIRE to cast the eye forward. The eye Nearsights all enemies who look at it. Enemies can shoot and destroy the eye."
        },
        {
          key: "X",
          name: "Empress",
          type: "Ultimate",
          cost: "8 Ult Points",
          description: "INSTANTLY enter a frenzy, gaining dramatic increases in firing speed, equip speed, and reload speed. Scoring a kill refreshes the Empress duration."
        }
      ]
    },
    {
      id: "omen",
      name: "OMEN",
      role: "Controller",
      origin: "Unknown",
      biography: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/blt4e5cd400e558e70c/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png",
      color: "#6366f1",
      playstyle: "Global smokes, deceptive teleports, blind through geometry.",
      abilities: [
        {
          key: "Q",
          name: "Paranoia",
          type: "Utility",
          cost: "250 Creds",
          description: "FIRE a shadow projectile forward, reducing vision range and deafening all players it touches for 2.2s. Can travel straight through solid walls."
        },
        {
          key: "E",
          name: "Dark Cover",
          type: "Signature",
          cost: "1 Free + 150 Creds (30s Cooldown)",
          description: "EQUIP a shadow orb and enter the phased world to place long-lasting hollow smoke spheres that block vision and create one-way vantage points."
        },
        {
          key: "C",
          name: "Shrouded Step",
          type: "Movement",
          cost: "100 Creds",
          description: "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport quietly to the marked ground location."
        },
        {
          key: "X",
          name: "From the Shadows",
          type: "Ultimate",
          cost: "7 Ult Points",
          description: "EQUIP a tactical map. FIRE to begin teleporting to ANY selected location on the entire map. Appears as a Shade that can scout and cancel."
        }
      ]
    },
    {
      id: "sova",
      name: "SOVA",
      role: "Initiator",
      origin: "Russia",
      biography: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scout abilities ensure that even if you run, you cannot hide.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/bltf11234f4775760b7/5ebf99bf35fce549a2450856/V_AGENTS_587x900_ALL_Sova_2.png",
      color: "#0ea5e9",
      playstyle: "Long-range recon lineups, wall-penetrating ultimate, drone scouting.",
      abilities: [
        {
          key: "Q",
          name: "Shock Bolt",
          type: "Damage",
          cost: "150 Creds",
          description: "EQUIP a bow with a shock bolt. FIRE to send the explosive arrow forward, detonating upon collision and damaging players caught nearby (up to 75 damage)."
        },
        {
          key: "E",
          name: "Recon Bolt",
          type: "Signature",
          cost: "Free (40s Cooldown)",
          description: "EQUIP a bow with recon bolt. FIRE to send the bolt forward, pinging and revealing enemies in direct line-of-sight across up to 3 pulses."
        },
        {
          key: "C",
          name: "Owl Drone",
          type: "Recon",
          cost: "400 Creds",
          description: "EQUIP an owl drone. FIRE to deploy and pilot the drone. FIRE a recon dart to tag any enemy and periodically reveal their outline."
        },
        {
          key: "X",
          name: "Hunter's Fury",
          type: "Ultimate",
          cost: "8 Ult Points",
          description: "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy beam that penetrates all terrain, dealing 80 damage per blast."
        }
      ]
    },
    {
      id: "killjoy",
      name: "KILLJOY",
      role: "Sentinel",
      origin: "Germany",
      biography: "The genius of Germany, Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuffs will make short work of them.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/bltc621379f53e3d2eb/5f284e30474a2754605151ee/V_AGENTS_587x900_Killjoy.png",
      color: "#eab308",
      playstyle: "Automated site anchor, post-plant denial, lockdown zone denial.",
      abilities: [
        {
          key: "Q",
          name: "Alarmbot",
          type: "Debuff",
          cost: "200 Creds",
          description: "Deploy a stealth bot that hunts down enemies entering range. Detonates on target to apply Vulnerable status, doubling all incoming damage."
        },
        {
          key: "E",
          name: "Turret",
          type: "Signature",
          cost: "Free (Can recall)",
          description: "Deploy an automated sentry turret that detects and fires at enemies in a 180-degree cone, dealing chip damage and tagging movements."
        },
        {
          key: "C",
          name: "Nanoswarm",
          type: "Damage",
          cost: "200 Creds",
          description: "THROW a grenade that turns invisible once grounded. ACTIVATE from anywhere on the map to release a swarm of damaging nanobots over the bomb site."
        },
        {
          key: "X",
          name: "Lockdown",
          type: "Ultimate",
          cost: "9 Ult Points",
          description: "EQUIP the Lockdown device. FIRE to plant it. After a 13-second windup, Detains all enemies inside its massive radius for 8 seconds, disabling weapons."
        }
      ]
    },
    {
      id: "clove",
      name: "CLOVE",
      role: "Controller",
      origin: "Scotland",
      biography: "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/blte6260cb2bc320f77/65fca1c6764d720b08db832d/Clove_KeyArt_587x900.png",
      color: "#f43f5e",
      playstyle: "Post-mortem smoking, self-revive resurrection, combat decay.",
      abilities: [
        {
          key: "Q",
          name: "Meddle",
          type: "Debuff",
          cost: "250 Creds",
          description: "EQUIP a shard of immortality essence. FIRE to throw. After a brief delay, the shard erupts, applying a 90 HP Decay effect to all caught inside."
        },
        {
          key: "E",
          name: "Ruse",
          type: "Signature",
          cost: "Free (Cast while alive OR dead)",
          description: "EQUIP to view the tactical map. FIRE to place two vision-blocking clouds. Uniquely usable even after Clove has been eliminated in the round."
        },
        {
          key: "C",
          name: "Pick-Me-Up",
          type: "Sustain",
          cost: "100 Creds",
          description: "INSTANTLY absorb the life force of a fallen enemy that Clove damaged or killed to gain Haste (+speed) and 100 temporary health."
        },
        {
          key: "X",
          name: "Not Dead Yet",
          type: "Ultimate",
          cost: "8 Ult Points",
          description: "After dying, ACTIVATE to resurrect within a 2-second window. Clove must score a kill or damaging assist within 12 seconds to remain alive."
        }
      ]
    },
    {
      id: "vyse",
      name: "VYSE",
      role: "Sentinel",
      origin: "Unknown",
      biography: "A metallic mastermind commanding liquid metal, Vyse isolates, traps, and disarms her opponents. Through calculated crowd control and weapon-jamming thorns, she controls the cadence of every encounter.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/bltbbe264560a08e1e7/66c4fbdfdf9787e3573c0903/Vyse_KeyArt_587x900.png",
      color: "#a855f7",
      playstyle: "Liquid metal walls, weapon jamming ultimate, flash traps.",
      abilities: [
        {
          key: "Q",
          name: "Shear",
          type: "Trap",
          cost: "200 Creds",
          description: "PLACE a hidden filament trap on the ground. When enemies cross, an indestructible metallic wall bursts upward directly behind them, cutting off escape."
        },
        {
          key: "E",
          name: "Arc Rose",
          type: "Signature",
          cost: "Free",
          description: "PLACE an Arc Rose on any wall. ACTIVATE to trigger a blinding flash burst to all players looking at it, even through thin walls."
        },
        {
          key: "C",
          name: "Razorvine",
          type: "Slow/Damage",
          cost: "150 Creds",
          description: "LAUNCH a nest of liquid metal thorns. ACTIVATE to erupt into razor vines that slow enemies significantly and deal damage if they move quickly."
        },
        {
          key: "X",
          name: "Steel Garden",
          type: "Ultimate",
          cost: "8 Ult Points",
          description: "UNLEASH a torrent of metallic brambles across a massive area. After a short delay, all affected enemies have their primary firearms JAMMED for 8s."
        }
      ]
    },
    {
      id: "iso",
      name: "ISO",
      role: "Duelist",
      origin: "China",
      biography: "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances focus-forward toward his next duel to the death.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/bltc802ef63a7f85a53/653f5d5fbbeee96191b647b5/Iso_KeyArt_587x900.png",
      color: "#818cf8",
      playstyle: "1v1 isolation realm, impenetrable kinetic shields, vulnerability beams.",
      abilities: [
        {
          key: "Q",
          name: "Undercut",
          type: "Debuff",
          cost: "250 Creds",
          description: "EQUIP a molecular bolt. FIRE to throw forward through walls, applying Vulnerable to all targets it pierces."
        },
        {
          key: "E",
          name: "Double Tap",
          type: "Signature",
          cost: "Free",
          description: "ACTIVATE a focus timer. Eliminating enemies generates an energy orb. Shooting the orb grants a kinetic shield that blocks one damage instance."
        },
        {
          key: "C",
          name: "Contingency",
          type: "Shield",
          cost: "250 Creds",
          description: "PUSH an indestructible prismatic energy wall forward that absorbs all incoming enemy bullets and projectile utility."
        },
        {
          key: "X",
          name: "Kill Contract",
          type: "Ultimate",
          cost: "7 Ult Points",
          description: "CAST an interdimensional arena. The first enemy struck is pulled into an isolated 1v1 arena with Iso for an honorable duel."
        }
      ]
    },
    {
      id: "gekko",
      name: "GEKKO",
      role: "Initiator",
      origin: "USA",
      biography: "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/blt72007d4fa157a918/640286395b053210344400cb/Gekko_KeyArt_587x900.png",
      color: "#84cc16",
      playstyle: "Reusable creature utility, auto plant/defuse with Wingman.",
      abilities: [
        {
          key: "Q",
          name: "Wingman",
          type: "Stun/Spike",
          cost: "300 Creds",
          description: "FIRE to send Wingman seeking enemies to deliver a concussive blast. ALT-FIRE while holding the Spike to command Wingman to plant or defuse it!"
        },
        {
          key: "E",
          name: "Dizzy",
          type: "Signature",
          cost: "Free (Reusable)",
          description: "FIRE Dizzy into the air to shoot plasma at enemies, blinding their screens. Dizzy drops as an orb and can be picked up to use again after 10s."
        },
        {
          key: "C",
          name: "Mosh Pit",
          type: "Damage",
          cost: "250 Creds",
          description: "FLING Mosh like a grenade. Upon landing, Mosh duplicates across a wide zone and detonates, dealing lethal 150+ damage at center."
        },
        {
          key: "X",
          name: "Thrash",
          type: "Ultimate",
          cost: "7 Ult Points",
          description: "STEER Thrash forward and detonate on enemy clusters to Detain all players caught in the radius. Can be retrieved once per round."
        }
      ]
    },
    {
      id: "cypher",
      name: "CYPHER",
      role: "Sentinel",
      origin: "Morocco",
      biography: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
      avatar: "https://images.contentstack.io/v3/assets/blt3706121309b49a2a/blt15880ada63b4fde1/5f22033c49e3e9d2c57a6f20/V_AGENTS_587x900_Cypher.png",
      color: "#cbd5e1",
      playstyle: "Site lockdown, concealed tripwires, global wallhack intel.",
      abilities: [
        {
          key: "Q",
          name: "Cyber Cage",
          type: "Control",
          cost: "100 Creds",
          description: "TOSS a cyber cage. ACTIVATE remotely to produce a vision-blocking cylinder that emits an audio chirp when enemies enter."
        },
        {
          key: "E",
          name: "Spycam",
          type: "Signature",
          cost: "Free (Reusable)",
          description: "EQUIP a spycam. FIRE to place on any wall. ACTIVATE to view camera video feed and FIRE tracking darts that periodically reveal hit enemies."
        },
        {
          key: "C",
          name: "Trapwire",
          type: "Defense",
          cost: "200 Creds",
          description: "DEPLOY a concealed tripwire between walls. Enemies crossing are tethered, revealed, and concussed if not destroyed immediately."
        },
        {
          key: "X",
          name: "Neural Theft",
          type: "Ultimate",
          cost: "6 Ult Points",
          description: "USE on a dead enemy corpse to immediately upload neural data, revealing the live position of all surviving enemies twice in rapid succession."
        }
      ]
    }
  ],

  weapons: [
    {
      id: "vandal",
      name: "Vandal",
      category: "Rifles",
      cost: 2900,
      magazine: 25,
      reserve: 75,
      fireRate: 9.75,
      penetration: "Medium",
      runSpeed: "5.4 m/s",
      firstBulletAccuracy: "0.25 deg",
      damageRanges: [
        { range: "0 - 50m", head: 160, body: 40, leg: 34 }
      ],
      description: "The gold standard tactical rifle. Eliminates full-shielded opponents in one crisp headshot regardless of distance.",
      strengths: ["Lethal 1-shot headshot at any range", "Dominant for tap shooting and burst duels", "Predictable recoil reset"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/9c82e13d-4573-4cac-86a4-7684076433b7/displayicon.png"
    },
    {
      id: "phantom",
      name: "Phantom",
      category: "Rifles",
      cost: 2900,
      magazine: 30,
      reserve: 90,
      fireRate: 11.0,
      penetration: "Medium",
      runSpeed: "5.4 m/s",
      firstBulletAccuracy: "0.20 deg",
      damageRanges: [
        { range: "0 - 15m", head: 156, body: 39, leg: 33 },
        { range: "15 - 30m", head: 140, body: 35, leg: 29 },
        { range: "30 - 50m", head: 124, body: 31, leg: 26 }
      ],
      description: "High-cadence silenced rifle. Features superior spray control and zero bullet tracers through smokes.",
      strengths: ["No bullet tracers through smoke", "Faster fire rate and higher capacity", "Tight spray pattern at close quarters"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/ee824247-4562-494e-ac22-f4e3780f8c58/displayicon.png"
    },
    {
      id: "operator",
      name: "Operator",
      category: "Snipers",
      cost: 4700,
      magazine: 5,
      reserve: 10,
      fireRate: 0.6,
      penetration: "High",
      runSpeed: "5.1 m/s",
      firstBulletAccuracy: "0.00 deg (Scoped)",
      damageRanges: [
        { range: "0 - 50m", head: 255, body: 150, leg: 120 }
      ],
      description: "Heavy bolt-action sniper rifle. Guarantees immediate 1-shot elimination to the torso or head at all distances.",
      strengths: ["Lethal body shot damage", "Supreme angle-holding dominance", "High wall penetration"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png"
    },
    {
      id: "outlaw",
      name: "Outlaw",
      category: "Snipers",
      cost: 2400,
      magazine: 2,
      reserve: 10,
      fireRate: 2.75,
      penetration: "High",
      runSpeed: "5.4 m/s",
      firstBulletAccuracy: "0.10 deg",
      damageRanges: [
        { range: "0 - 50m", head: 238, body: 140, leg: 119 }
      ],
      description: "Double-barrel sniper rifle designed to eliminate light armor users with a single 140 body hit.",
      strengths: ["Instantly punishes half-shield buys (140 damage)", "Quick 2-slug burst capability", "Cost-effective intermediate sniper"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/52777328-406a-8533-85f8-b384a0ec8a7b/displayicon.png"
    },
    {
      id: "sheriff",
      name: "Sheriff",
      category: "Sidearms",
      cost: 800,
      magazine: 6,
      reserve: 24,
      fireRate: 4.0,
      penetration: "High",
      runSpeed: "5.73 m/s",
      firstBulletAccuracy: "0.25 deg",
      damageRanges: [
        { range: "0 - 30m", head: 159, body: 55, leg: 46 },
        { range: "30 - 50m", head: 145, body: 50, leg: 42 }
      ],
      description: "High-caliber sidearm revolver capable of 1-tap headshot eliminations against full shields inside 30 meters.",
      strengths: ["Eco round game changer", "High wall penetration", "1-shot headshot < 30m"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/e3367f0f-4139-a7b6-c695-2b0e7373074e/displayicon.png"
    },
    {
      id: "ghost",
      name: "Ghost",
      category: "Sidearms",
      cost: 500,
      magazine: 15,
      reserve: 45,
      fireRate: 6.75,
      penetration: "Medium",
      runSpeed: "5.73 m/s",
      firstBulletAccuracy: "0.30 deg",
      damageRanges: [
        { range: "0 - 30m", head: 105, body: 30, leg: 25 },
        { range: "30 - 50m", head: 87, body: 25, leg: 21 }
      ],
      description: "Silenced pistol favored for pistol rounds due to accurate rapid fire and 105 headshot damage.",
      strengths: ["Pistol round dominant", "Silenced with no tracers", "Generous 15-round magazine"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png"
    },
    {
      id: "spectre",
      name: "Spectre",
      category: "SMGs",
      cost: 1600,
      magazine: 30,
      reserve: 90,
      fireRate: 13.33,
      penetration: "Medium",
      runSpeed: "5.73 m/s",
      firstBulletAccuracy: "0.40 deg",
      damageRanges: [
        { range: "0 - 15m", head: 78, body: 26, leg: 22 },
        { range: "15 - 30m", head: 66, body: 22, leg: 18 },
        { range: "30 - 50m", head: 60, body: 20, leg: 17 }
      ],
      description: "Silenced submachine gun offering high mobility, low recoil, and deadly close-range rate of fire.",
      strengths: ["Run-and-gun mobility", "Great second round conversion weapon", "Silenced stealth fire"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png"
    },
    {
      id: "odin",
      name: "Odin",
      category: "Heavies",
      cost: 3200,
      magazine: 100,
      reserve: 200,
      fireRate: 12.0,
      penetration: "High",
      runSpeed: "5.1 m/s",
      firstBulletAccuracy: "0.80 deg",
      damageRanges: [
        { range: "0 - 30m", head: 95, body: 38, leg: 32 },
        { range: "30 - 50m", head: 77, body: 31, leg: 26 }
      ],
      description: "Devastating 100-round heavy machine gun with accelerated fire spooling and maximum wall penetration.",
      strengths: ["Supreme wallbang shredder", "Suppression fire against rush executes", "Massive sustained magazine"],
      icon: "https://titles.trackercdn.com/valorant-api/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png"
    }
  ],

  maps: [
    {
      id: "ascent",
      name: "ASCENT",
      location: "Venice, Italy",
      coordinates: "45°26'BF' N 12°20'Q' E",
      sites: ["A Site", "B Site"],
      specialFeature: "Destructible Mechanical Sliding Blast Doors",
      overview: "An open playground for small wars of position and attrition divides two sites on Ascent. Each site can be fortified by irreversible bomb doors; once down, you'll have to destroy them or find another way.",
      themeColor: "#38bdf8",
      tactics: [
        "Control Middle courtyard early to dictate rotation speed between sites.",
        "Use Sova recon or Omen flash to safely breach into B Main and market.",
        "Defenders should close A-Door when attackers push catwalk."
      ]
    },
    {
      id: "bind",
      name: "BIND",
      location: "Rabat, Morocco",
      coordinates: "34°2'A' N 6°51'Z' W",
      sites: ["A Site", "B Site"],
      specialFeature: "One-Way Instant Teleporters",
      overview: "Two sites. No middle. Gotta pick left or right. What's it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easy to flank or rapidly relocate utility.",
      themeColor: "#f59e0b",
      tactics: [
        "Throwing utility (like Sova drone or Raze boombot) into teleporters can reveal enemy campers.",
        "Hookah control on B site prevents rapid split pushes.",
        "Brimstone and Viper excel on Bind due to narrow chokepoints."
      ]
    },
    {
      id: "haven",
      name: "HAVEN",
      location: "Thimphu, Bhutan",
      coordinates: "27°28'A' N 89°38'WZ' E",
      sites: ["A Site", "B Site", "C Site"],
      specialFeature: "Three Distinct Bomb Sites (A, B, C)",
      overview: "Beneath a forgotten monastery, an emergent clamor emerges with three whole plant sites. Defenders must stretch their resources across three separate lanes while attackers look to exploit over-rotations.",
      themeColor: "#10b981",
      tactics: [
        "Fast rotations through Garage allow defenders to support both B and C sites.",
        "Attackers can fake presence on A Long to lure anchors away from C Long.",
        "Cypher or Killjoy are essential to anchor one site solo."
      ]
    },
    {
      id: "split",
      name: "SPLIT",
      location: "Tokyo, Japan",
      coordinates: "35°41'CD' N 139°41'WX' E",
      sites: ["A Site", "B Site"],
      specialFeature: "Ascender Ropes & Vertical Mid Dominance",
      overview: "If you want to go far, you'll have to go up. A pair of sites split by an elevated center allows for rapid movement using two ropes. Each site is built with towering crowns that favor vertical duels.",
      themeColor: "#ec4899",
      tactics: [
        "Securing Mid Vent and Mail Room gives total control over rotations.",
        "Raze and Omen thrive on Split due to vertical elevation points.",
        "Sage slow or wall at Mid gives defenders crucial delay time."
      ]
    },
    {
      id: "lotus",
      name: "LOTUS",
      location: "Western Ghats, India",
      coordinates: "14°07'N' 74°53'E'",
      sites: ["A Site", "B Site", "C Site"],
      specialFeature: "Rotating Stone Doors & Destructible Wall",
      overview: "A mysterious structure harboring an astral conduit radiates with ancient power. Great stone doors rotate on command, opening new paths to traverse between its three majestic sites.",
      themeColor: "#8b5cf6",
      tactics: [
        "Operating the rotating doors makes loud global sound cues; use them to mask flankers.",
        "Break the A-B connector wall early for quick rotates.",
        "Fade and Breach offer immense utility for clearing deep corners on Lotus."
      ]
    },
    {
      id: "abyss",
      name: "ABYSS",
      location: "Jan Mayen, Arctic Ocean",
      coordinates: "71°02'N 8°20'W",
      sites: ["A Site", "B Site"],
      specialFeature: "No Boundary Rails (Fall-off Death Drops)",
      overview: "Perched above a bottomless cavern in an ancestral Scion facility, Abyss features lethal vertical drops without boundary railings. Miss a jump or get hit by concussive blasts, and you plummet into the void.",
      themeColor: "#06b6d4",
      tactics: [
        "Be cautious with movement abilities near mid bridges—falling is instant death.",
        "Use Astra pull or concussions near outer ledges to knock enemies off map.",
        "Jett and Omen can exploit unconventional aerial flanks over the chasms."
      ]
    }
  ],

  ranks: [
    { name: "Iron", tiers: "1 - 3", color: "#6b7280", badge: "IRON", desc: "Foundational rank focusing on basic movement, shooting mechanics, and map familiarity." },
    { name: "Bronze", tiers: "1 - 3", color: "#b45309", badge: "BRONZE", desc: "Refining crosshair placement, spray discipline, and early economy management." },
    { name: "Silver", tiers: "1 - 3", color: "#94a3b8", badge: "SILVER", desc: "Players begin coordinating basic utility, site hits, and trade frags." },
    { name: "Gold", tiers: "1 - 3", color: "#eab308", badge: "GOLD", desc: "Solid aim fundamentals, consistent ability usage, and improved game sense." },
    { name: "Platinum", tiers: "1 - 3", color: "#0284c7", badge: "PLATINUM", desc: "Crisp gunplay, coordinated executes, and adaptive counter-strategies." },
    { name: "Diamond", tiers: "1 - 3", color: "#a855f7", badge: "DIAMOND", desc: "High mechanical mastery, tactical awareness, and sharp mid-round adaptation." },
    { name: "Ascendant", tiers: "1 - 3", color: "#10b981", badge: "ASCENDANT", desc: "Elite tier bridging competitive play and tier-1 tournament execution." },
    { name: "Immortal", tiers: "1 - 3", color: "#dc2626", badge: "IMMORTAL", desc: "Top 1% of players globally. Exceptional aim, tactical intuition, and communication." },
    { name: "Radiant", tiers: "Top 500", color: "#facc15", badge: "RADIANT", desc: "The highest echelon of VALORANT competition. Pro players and leaderboard champions." }
  ],

  proCrosshairs: [
    {
      player: "TenZ (Sentinels)",
      code: "0;s;1;P;c;5;h;0;m;1;0l;4;0v;4;0g;1;0a;1;0f;0;1b;0",
      settings: { color: "#00ffff", outlines: false, innerLength: 4, innerThickness: 2, innerOffset: 2, centerDot: false }
    },
    {
      player: "Aspas (Leviatán)",
      code: "0;P;c;5;o;1;d;1;z;3;f;0;0b;0;1b;0",
      settings: { color: "#00ffff", outlines: true, innerLength: 0, innerThickness: 0, innerOffset: 0, centerDot: true }
    },
    {
      player: "Demon1 (NRG)",
      code: "0;s;1;P;o;1;d;1;m;1;0b;0;1b;0",
      settings: { color: "#ffffff", outlines: true, innerLength: 0, innerThickness: 0, innerOffset: 0, centerDot: true }
    },
    {
      player: "Boaster (Fnatic)",
      code: "0;p;0;s;1;P;c;1;o;1;d;0;0l;4;0o;2;0a;1;0f;0;1b;0",
      settings: { color: "#22c55e", outlines: true, innerLength: 4, innerThickness: 2, innerOffset: 2, centerDot: false }
    },
    {
      player: "Chronicle (Fnatic)",
      code: "0;P;c;7;o;1;f;0;0t;1;0l;3;0v;3;0g;1;0o;2;0a;1;0f;0;1b;0",
      settings: { color: "#ff4655", outlines: true, innerLength: 3, innerThickness: 1, innerOffset: 2, centerDot: false }
    }
  ]
};

window.VALORANT_DATA = VALORANT_DATA;
