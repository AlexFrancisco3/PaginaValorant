// VALORANT PROTOCOL // CORE CONTROLLER
// Episodes & Acts interactive client

document.addEventListener('DOMContentLoaded', () => {
  // Initialize state
  const state = {
    activeTab: 'agents',
    agentFilter: 'ALL',
    selectedAgent: null,
    compareWeapon1: 'vandal',
    compareWeapon2: 'phantom',
    selectedMap: 'ascent',
    crosshair: {
      color: '#00ffff',
      outlines: true,
      outlineOpacity: 0.8,
      outlineThickness: 1,
      centerDot: false,
      centerDotSize: 2,
      innerOpacity: 1,
      innerLength: 4,
      innerThickness: 2,
      innerOffset: 2,
      recoilActive: false
    }
  };

  // Cache DOM elements
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const sections = document.querySelectorAll('.content-section');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioIcon = document.getElementById('audioIcon');
  const audioLabel = document.getElementById('audioLabel');

  // AUDIO SYSTEM INTEGRATION
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      const isMuted = window.tacticalAudio.toggleMute();
      if (isMuted) {
        audioLabel.textContent = 'AUDIO: OFF';
        audioIcon.setAttribute('data-lucide', 'volume-x');
        audioToggleBtn.classList.add('opacity-50');
      } else {
        audioLabel.textContent = 'AUDIO: ON';
        audioIcon.setAttribute('data-lucide', 'volume-2');
        audioToggleBtn.classList.remove('opacity-50');
        window.tacticalAudio.playClick();
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Add click sound to general interactive buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('.interactive-sound')) {
      window.tacticalAudio.playClick();
    }
  });

  // NAVIGATION TABS
  function switchTab(tabId) {
    state.activeTab = tabId;
    navTabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-tab') === tabId;
      tab.classList.toggle('active', isMatch);
      if (isMatch) {
        tab.classList.add('text-white', 'bg-[#ff4655]', 'shadow-lg');
        tab.classList.remove('text-gray-400', 'bg-transparent');
      } else {
        tab.classList.remove('text-white', 'bg-[#ff4655]', 'shadow-lg');
        tab.classList.add('text-gray-400', 'bg-transparent');
      }
    });

    sections.forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== tabId);
    });

    window.tacticalAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabId === 'crosshair') {
      renderCrosshairPreview();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  navTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Quick Action Jump Buttons
  document.querySelectorAll('[data-jump-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-jump-tab');
      switchTab(target);
    });
  });

  // ==========================================
  // SECTION 1: AGENTS ROSTER & MODAL
  // ==========================================
  const agentsGrid = document.getElementById('agentsGrid');
  const agentFilterBtns = document.querySelectorAll('.agent-filter-btn');
  const agentModal = document.getElementById('agentModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function renderAgents() {
    if (!agentsGrid) return;
    agentsGrid.innerHTML = '';

    const filtered = VALORANT_DATA.agents.filter(agent => {
      if (state.agentFilter === 'ALL') return true;
      return agent.role.toUpperCase() === state.agentFilter;
    });

    filtered.forEach(agent => {
      const card = document.createElement('div');
      card.className = 'agent-card bg-[#141d24] border border-[#2c3945] rounded-lg overflow-hidden flex flex-col cursor-pointer group hover:border-[#ff4655] transition-all';
      card.innerHTML = `
        <div class="relative h-72 bg-gradient-to-b from-[#1b2732] to-[#0f1923] overflow-hidden flex items-end justify-center">
          <div class="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur border border-white/10 rounded text-xs font-mono tracking-wider" style="color: ${agent.color}">
            <span class="w-2 h-2 rounded-full" style="background-color: ${agent.color}"></span>
            ${agent.role.toUpperCase()}
          </div>
          <div class="absolute top-3 right-3 text-xs font-mono text-gray-500 uppercase">
            // ${agent.origin}
          </div>
          <img src="${agent.avatar}" alt="${agent.name}" class="h-80 object-cover object-top filter brightness-95 group-hover:scale-105 group-hover:brightness-110 transition duration-300 pointer-events-none" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#141d24] via-transparent to-transparent opacity-80"></div>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-display text-3xl font-bold tracking-wider text-white group-hover:text-[#ff4655] transition">${agent.name}</h3>
              <span class="text-xs font-mono text-gray-400">// 0${VALORANT_DATA.agents.indexOf(agent) + 1}</span>
            </div>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-3">${agent.biography}</p>
          </div>
          <div class="pt-3 border-t border-[#222e3a] flex items-center justify-between">
            <div class="flex gap-1.5">
              ${agent.abilities.map(ab => `
                <span class="w-6 h-6 rounded bg-[#1f2c38] flex items-center justify-center text-xs font-bold text-gray-300 border border-white/5" title="${ab.name} (${ab.key})">
                  ${ab.key}
                </span>
              `).join('')}
            </div>
            <button class="text-xs font-hud font-bold text-[#ff4655] flex items-center gap-1 group-hover:translate-x-1 transition">
              DOSSIER <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openAgentModal(agent);
      });

      agentsGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  agentFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      agentFilterBtns.forEach(b => {
        b.classList.remove('bg-[#ff4655]', 'text-white');
        b.classList.add('bg-[#141d24]', 'text-gray-400');
      });
      btn.classList.add('bg-[#ff4655]', 'text-white');
      btn.classList.remove('bg-[#141d24]', 'text-gray-400');
      state.agentFilter = btn.getAttribute('data-role');
      window.tacticalAudio.playHover();
      renderAgents();
    });
  });

  // AGENT MODAL DETAILS
  let currentModalAbilityIndex = 0;

  function openAgentModal(agent) {
    state.selectedAgent = agent;
    currentModalAbilityIndex = 0;
    window.tacticalAudio.playAgentSelect();

    const avatar = document.getElementById('modalAgentAvatar');
    const name = document.getElementById('modalAgentName');
    const role = document.getElementById('modalAgentRole');
    const origin = document.getElementById('modalAgentOrigin');
    const bio = document.getElementById('modalAgentBio');
    const playstyle = document.getElementById('modalAgentPlaystyle');
    const abilitiesContainer = document.getElementById('modalAbilitiesContainer');

    avatar.src = agent.avatar;
    name.textContent = agent.name;
    role.textContent = agent.role.toUpperCase();
    origin.textContent = agent.origin;
    bio.textContent = agent.biography;
    playstyle.textContent = agent.playstyle;

    renderModalAbilities(agent);

    agentModal.classList.remove('hidden');
    agentModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
  }

  function renderModalAbilities(agent) {
    const abilitiesContainer = document.getElementById('modalAbilitiesContainer');
    abilitiesContainer.innerHTML = `
      <div class="flex gap-2 border-b border-[#2c3945] pb-3 mb-4">
        ${agent.abilities.map((ab, idx) => `
          <button class="ability-tab-btn flex-1 py-2 px-3 rounded font-hud font-bold text-xs uppercase transition flex items-center justify-center gap-2 ${idx === currentModalAbilityIndex ? 'bg-[#ff4655] text-white' : 'bg-[#1a2530] text-gray-400 hover:text-white'}" data-ability-idx="${idx}">
            <span class="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center text-[10px]">${ab.key}</span>
            <span>${ab.name}</span>
          </button>
        `).join('')}
      </div>
      <div id="modalAbilityDetail" class="p-4 bg-[#101820] border border-[#222f3b] rounded-lg">
        ${renderSingleAbilityDetail(agent.abilities[currentModalAbilityIndex])}
      </div>
    `;

    abilitiesContainer.querySelectorAll('.ability-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.getAttribute('data-ability-idx'), 10);
        currentModalAbilityIndex = idx;
        window.tacticalAudio.playAbility();
        renderModalAbilities(agent);
      });
    });
  }

  function renderSingleAbilityDetail(ability) {
    return `
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40 text-xs font-mono font-bold rounded">
            SLOT: [${ability.key}]
          </span>
          <h4 class="font-display text-2xl font-bold text-white tracking-wide">${ability.name}</h4>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">TYPE: ${ability.type}</span>
          <span class="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-500/30 px-2 py-1 rounded">${ability.cost}</span>
        </div>
      </div>
      <p class="text-sm text-gray-300 leading-relaxed font-sans">${ability.description}</p>
    `;
  }

  function closeAgentModal() {
    agentModal.classList.add('hidden');
    agentModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeAgentModal);
  if (agentModal) {
    agentModal.addEventListener('click', (e) => {
      if (e.target === agentModal) closeAgentModal();
    });
  }

  // ==========================================
  // SECTION 2: ARSENAL & WEAPON COMPARISON
  // ==========================================
  const weapon1Select = document.getElementById('weapon1Select');
  const weapon2Select = document.getElementById('weapon2Select');
  const comparisonView = document.getElementById('comparisonView');

  function populateWeaponSelectors() {
    if (!weapon1Select || !weapon2Select) return;
    weapon1Select.innerHTML = '';
    weapon2Select.innerHTML = '';

    VALORANT_DATA.weapons.forEach(w => {
      const opt1 = new Option(`${w.name} (${w.category}) - ${w.cost}c`, w.id);
      const opt2 = new Option(`${w.name} (${w.category}) - ${w.cost}c`, w.id);
      weapon1Select.add(opt1);
      weapon2Select.add(opt2);
    });

    weapon1Select.value = state.compareWeapon1;
    weapon2Select.value = state.compareWeapon2;

    weapon1Select.addEventListener('change', () => {
      state.compareWeapon1 = weapon1Select.value;
      renderWeaponComparison();
    });

    weapon2Select.addEventListener('change', () => {
      state.compareWeapon2 = weapon2Select.value;
      renderWeaponComparison();
    });
  }

  function renderWeaponComparison() {
    if (!comparisonView) return;
    const w1 = VALORANT_DATA.weapons.find(w => w.id === state.compareWeapon1) || VALORANT_DATA.weapons[0];
    const w2 = VALORANT_DATA.weapons.find(w => w.id === state.compareWeapon2) || VALORANT_DATA.weapons[1];

    comparisonView.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Weapon 1 Card -->
        <div class="bg-[#141d24] border border-[#2c3945] rounded-xl p-6 relative overflow-hidden val-cut-tl-br">
          <div class="flex items-start justify-between mb-4">
            <div>
              <span class="text-xs font-mono text-[#ff4655] uppercase tracking-widest">// ARSENAL SPEC // 01</span>
              <h3 class="font-display text-4xl font-bold tracking-wider text-white">${w1.name}</h3>
              <p class="text-xs font-mono text-gray-400">${w1.category.toUpperCase()} // COST: ${w1.cost} CREDITS</p>
            </div>
            <span class="px-3 py-1 bg-[#1e2a36] border border-white/10 rounded font-mono text-xs text-cyan-400">
              ${w1.penetration} Pen
            </span>
          </div>

          <div class="h-32 flex items-center justify-center bg-gradient-to-b from-[#192430] to-[#0f171e] rounded-lg p-4 mb-6 border border-white/5">
            <img src="${w1.icon}" alt="${w1.name}" class="max-h-24 max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>

          <p class="text-xs text-gray-300 mb-6 leading-relaxed">${w1.description}</p>

          <!-- Specifications comparison bars -->
          <div class="space-y-3 font-mono text-xs mb-6">
            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>FIRE RATE</span>
                <span class="text-white font-bold">${w1.fireRate} rds/sec</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-cyan-400 h-full rounded-full" style="width: ${Math.min(100, (w1.fireRate / 16) * 100)}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>MAGAZINE CAPACITY</span>
                <span class="text-white font-bold">${w1.magazine} rounds</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-amber-400 h-full rounded-full" style="width: ${Math.min(100, (w1.magazine / 100) * 100)}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>RUN SPEED</span>
                <span class="text-white font-bold">${w1.runSpeed}</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-emerald-400 h-full rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>

          <!-- Damage breakdown matrix -->
          <div class="bg-[#0f171e] p-4 rounded-lg border border-[#222e3a]">
            <h4 class="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">// DAMAGE MATRIX</h4>
            <div class="space-y-2">
              ${w1.damageRanges.map(dr => `
                <div class="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5">
                  <span class="text-gray-400">${dr.range}</span>
                  <div class="flex gap-4">
                    <span class="text-red-400 font-bold">HEAD: ${dr.head}</span>
                    <span class="text-yellow-400 font-bold">BODY: ${dr.body}</span>
                    <span class="text-gray-400">LEG: ${dr.leg}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Weapon 2 Card -->
        <div class="bg-[#141d24] border border-[#2c3945] rounded-xl p-6 relative overflow-hidden val-cut-tl-br">
          <div class="flex items-start justify-between mb-4">
            <div>
              <span class="text-xs font-mono text-[#ff4655] uppercase tracking-widest">// ARSENAL SPEC // 02</span>
              <h3 class="font-display text-4xl font-bold tracking-wider text-white">${w2.name}</h3>
              <p class="text-xs font-mono text-gray-400">${w2.category.toUpperCase()} // COST: ${w2.cost} CREDITS</p>
            </div>
            <span class="px-3 py-1 bg-[#1e2a36] border border-white/10 rounded font-mono text-xs text-cyan-400">
              ${w2.penetration} Pen
            </span>
          </div>

          <div class="h-32 flex items-center justify-center bg-gradient-to-b from-[#192430] to-[#0f171e] rounded-lg p-4 mb-6 border border-white/5">
            <img src="${w2.icon}" alt="${w2.name}" class="max-h-24 max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>

          <p class="text-xs text-gray-300 mb-6 leading-relaxed">${w2.description}</p>

          <!-- Specifications comparison bars -->
          <div class="space-y-3 font-mono text-xs mb-6">
            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>FIRE RATE</span>
                <span class="text-white font-bold">${w2.fireRate} rds/sec</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-cyan-400 h-full rounded-full" style="width: ${Math.min(100, (w2.fireRate / 16) * 100)}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>MAGAZINE CAPACITY</span>
                <span class="text-white font-bold">${w2.magazine} rounds</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-amber-400 h-full rounded-full" style="width: ${Math.min(100, (w2.magazine / 100) * 100)}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-gray-400 mb-1">
                <span>RUN SPEED</span>
                <span class="text-white font-bold">${w2.runSpeed}</span>
              </div>
              <div class="w-full bg-[#1e2b38] h-2 rounded-full overflow-hidden">
                <div class="bg-emerald-400 h-full rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>

          <!-- Damage breakdown matrix -->
          <div class="bg-[#0f171e] p-4 rounded-lg border border-[#222e3a]">
            <h4 class="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">// DAMAGE MATRIX</h4>
            <div class="space-y-2">
              ${w2.damageRanges.map(dr => `
                <div class="flex items-center justify-between text-xs font-mono py-1.5 border-b border-white/5">
                  <span class="text-gray-400">${dr.range}</span>
                  <div class="flex gap-4">
                    <span class="text-red-400 font-bold">HEAD: ${dr.head}</span>
                    <span class="text-yellow-400 font-bold">BODY: ${dr.body}</span>
                    <span class="text-gray-400">LEG: ${dr.leg}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Verdict Box -->
      <div class="mt-6 p-4 bg-[#141d24] border border-[#2c3945] rounded-xl flex items-center justify-between flex-wrap gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded bg-[#ff4655]/20 border border-[#ff4655]/40 flex items-center justify-center text-[#ff4655]">
            <i data-lucide="zap" class="w-5 h-5"></i>
          </div>
          <div>
            <h5 class="text-sm font-bold text-white uppercase font-hud">TACTICAL VERDICT & APPLICATION</h5>
            <p class="text-xs text-gray-400">
              ${w1.name} (${w1.cost}c) vs ${w2.name} (${w2.cost}c):
              ${w1.cost === w2.cost ? 'Equal cost bracket. Vandal provides instant 1-tap lethal headshots at all ranges, while Phantom excels at close-range spray transfer and stealth fire through smokes.' : (w1.cost > w2.cost ? `${w1.name} provides superior firepower at higher buy commitment.` : `${w1.name} provides high economy value for force/save rounds.`)}
            </p>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================
  // SECTION 3: INTERACTIVE CROSSHAIR STUDIO
  // ==========================================
  const crosshairCanvas = document.getElementById('crosshairCanvas');
  const testFireBtn = document.getElementById('testFireBtn');
  const copyProfileBtn = document.getElementById('copyProfileBtn');
  const hitmarkerIndicator = document.getElementById('hitmarkerIndicator');
  const proPresetsContainer = document.getElementById('proPresetsContainer');
  const crosshairCodeInput = document.getElementById('crosshairCodeInput');

  // Sliders
  const inputColor = document.getElementById('chColor');
  const inputOutlines = document.getElementById('chOutlines');
  const inputOutlineThickness = document.getElementById('chOutlineThickness');
  const inputCenterDot = document.getElementById('chCenterDot');
  const inputCenterDotSize = document.getElementById('chCenterDotSize');
  const inputInnerLength = document.getElementById('chInnerLength');
  const inputInnerThickness = document.getElementById('chInnerThickness');
  const inputInnerOffset = document.getElementById('chInnerOffset');

  function renderCrosshairPreview() {
    if (!crosshairCanvas) return;
    const ctx = crosshairCanvas.getContext('2d');
    const w = crosshairCanvas.width;
    const h = crosshairCanvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Clear canvas
    ctx.clearRect(0, 0, w, h);

    // Draw range backdrop target
    ctx.save();
    // Concentric target rings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    [30, 60, 100, 150].forEach(r => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Silhouette head target
    ctx.fillStyle = 'rgba(255, 70, 85, 0.12)';
    ctx.strokeStyle = 'rgba(255, 70, 85, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Crosshair rendering parameters
    const ch = state.crosshair;
    const spreadOffset = ch.recoilActive ? ch.innerOffset + 8 : ch.innerOffset;
    const length = ch.innerLength * 2.5;
    const thickness = ch.innerThickness * 1.5;
    const outlineThick = ch.outlineThickness * 1.5;

    // Helper: draw stroked rectangle with optional outline
    function drawCrosshairBar(x, y, bw, bh) {
      if (ch.outlines) {
        ctx.fillStyle = `rgba(0, 0, 0, ${ch.outlineOpacity})`;
        ctx.fillRect(
          x - outlineThick,
          y - outlineThick,
          bw + outlineThick * 2,
          bh + outlineThick * 2
        );
      }
      ctx.fillStyle = ch.color;
      ctx.fillRect(x, y, bw, bh);
    }

    // Center Dot
    if (ch.centerDot) {
      const dSize = ch.centerDotSize * 2;
      const dx = cx - dSize / 2;
      const dy = cy - dSize / 2;
      if (ch.outlines) {
        ctx.fillStyle = `rgba(0, 0, 0, ${ch.outlineOpacity})`;
        ctx.fillRect(dx - outlineThick, dy - outlineThick, dSize + outlineThick * 2, dSize + outlineThick * 2);
      }
      ctx.fillStyle = ch.color;
      ctx.fillRect(dx, dy, dSize, dSize);
    }

    // Inner lines (4 directions: Top, Bottom, Left, Right)
    if (length > 0 && thickness > 0) {
      // Top
      drawCrosshairBar(
        cx - thickness / 2,
        cy - spreadOffset - length,
        thickness,
        length
      );
      // Bottom
      drawCrosshairBar(
        cx - thickness / 2,
        cy + spreadOffset,
        thickness,
        length
      );
      // Left
      drawCrosshairBar(
        cx - spreadOffset - length,
        cy - thickness / 2,
        length,
        thickness
      );
      // Right
      drawCrosshairBar(
        cx + spreadOffset,
        cy - thickness / 2,
        length,
        thickness
      );
    }

    ctx.restore();

    // Update code output
    updateCrosshairCodeDisplay();
  }

  function updateCrosshairCodeDisplay() {
    if (!crosshairCodeInput) return;
    const ch = state.crosshair;
    // Format realistic pseudo Valorant crosshair string
    const code = `0;P;c;custom;o;${ch.outlines ? '1' : '0'};d;${ch.centerDot ? '1' : '0'};0t;${ch.innerThickness};0l;${ch.innerLength};0o;${ch.innerOffset};0a;${ch.innerOpacity};0f;0;1b;0`;
    crosshairCodeInput.value = code;
  }

  function bindCrosshairInputs() {
    if (inputColor) {
      inputColor.addEventListener('input', (e) => {
        state.crosshair.color = e.target.value;
        renderCrosshairPreview();
      });
    }
    if (inputOutlines) {
      inputOutlines.addEventListener('change', (e) => {
        state.crosshair.outlines = e.target.checked;
        renderCrosshairPreview();
      });
    }
    if (inputOutlineThickness) {
      inputOutlineThickness.addEventListener('input', (e) => {
        state.crosshair.outlineThickness = parseFloat(e.target.value);
        renderCrosshairPreview();
      });
    }
    if (inputCenterDot) {
      inputCenterDot.addEventListener('change', (e) => {
        state.crosshair.centerDot = e.target.checked;
        renderCrosshairPreview();
      });
    }
    if (inputCenterDotSize) {
      inputCenterDotSize.addEventListener('input', (e) => {
        state.crosshair.centerDotSize = parseFloat(e.target.value);
        renderCrosshairPreview();
      });
    }
    if (inputInnerLength) {
      inputInnerLength.addEventListener('input', (e) => {
        state.crosshair.innerLength = parseFloat(e.target.value);
        renderCrosshairPreview();
      });
    }
    if (inputInnerThickness) {
      inputInnerThickness.addEventListener('input', (e) => {
        state.crosshair.innerThickness = parseFloat(e.target.value);
        renderCrosshairPreview();
      });
    }
    if (inputInnerOffset) {
      inputInnerOffset.addEventListener('input', (e) => {
        state.crosshair.innerOffset = parseFloat(e.target.value);
        renderCrosshairPreview();
      });
    }
  }

  // Quick Pro Presets
  function renderProPresets() {
    if (!proPresetsContainer) return;
    proPresetsContainer.innerHTML = '';

    VALORANT_DATA.proCrosshairs.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'px-3 py-2 bg-[#192430] hover:bg-[#ff4655] hover:text-white border border-[#2c3945] rounded text-left transition font-mono text-xs flex items-center justify-between';
      btn.innerHTML = `
        <span class="font-bold">${p.player}</span>
        <span class="w-3 h-3 rounded-full border border-white/40" style="background-color: ${p.settings.color}"></span>
      `;
      btn.addEventListener('click', () => {
        state.crosshair.color = p.settings.color;
        state.crosshair.outlines = p.settings.outlines;
        state.crosshair.innerLength = p.settings.innerLength;
        state.crosshair.innerThickness = p.settings.innerThickness;
        state.crosshair.innerOffset = p.settings.innerOffset;
        state.crosshair.centerDot = p.settings.centerDot;

        // Sync slider elements
        if (inputColor) inputColor.value = p.settings.color;
        if (inputOutlines) inputOutlines.checked = p.settings.outlines;
        if (inputCenterDot) inputCenterDot.checked = p.settings.centerDot;
        if (inputInnerLength) inputInnerLength.value = p.settings.innerLength;
        if (inputInnerThickness) inputInnerThickness.value = p.settings.innerThickness;
        if (inputInnerOffset) inputInnerOffset.value = p.settings.innerOffset;

        window.tacticalAudio.playHover();
        renderCrosshairPreview();
      });
      proPresetsContainer.appendChild(btn);
    });
  }

  // Interactive Test Fire
  if (testFireBtn) {
    testFireBtn.addEventListener('click', () => {
      window.tacticalAudio.playShot();
      state.crosshair.recoilActive = true;
      renderCrosshairPreview();

      // Trigger hitmarker and recoil decay
      setTimeout(() => {
        window.tacticalAudio.playHitmarker();
        if (hitmarkerIndicator) {
          hitmarkerIndicator.classList.remove('hidden');
          hitmarkerIndicator.classList.add('hitmarker-active');
          setTimeout(() => {
            hitmarkerIndicator.classList.add('hidden');
            hitmarkerIndicator.classList.remove('hitmarker-active');
          }, 350);
        }
      }, 70);

      setTimeout(() => {
        state.crosshair.recoilActive = false;
        renderCrosshairPreview();
      }, 160);
    });
  }

  // Copy Profile Code
  if (copyProfileBtn) {
    copyProfileBtn.addEventListener('click', () => {
      if (crosshairCodeInput) {
        crosshairCodeInput.select();
        navigator.clipboard.writeText(crosshairCodeInput.value).then(() => {
          const originalText = copyProfileBtn.innerHTML;
          copyProfileBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> COPIED!';
          if (window.lucide) window.lucide.createIcons();
          setTimeout(() => {
            copyProfileBtn.innerHTML = originalText;
            if (window.lucide) window.lucide.createIcons();
          }, 1800);
        });
      }
    });
  }

  // ==========================================
  // SECTION 4: MAPS INTEL GUIDE
  // ==========================================
  const mapListContainer = document.getElementById('mapListContainer');
  const mapDetailContainer = document.getElementById('mapDetailContainer');

  function renderMapsGuide() {
    if (!mapListContainer || !mapDetailContainer) return;
    mapListContainer.innerHTML = '';

    VALORANT_DATA.maps.forEach(m => {
      const isSelected = m.id === state.selectedMap;
      const btn = document.createElement('button');
      btn.className = `w-full text-left p-4 rounded-lg border transition mb-2 flex items-center justify-between ${isSelected ? 'bg-[#ff4655] text-white border-[#ff4655] shadow-lg' : 'bg-[#141d24] text-gray-300 border-[#2c3945] hover:border-white/20'}`;
      btn.innerHTML = `
        <div>
          <h4 class="font-display text-2xl font-bold tracking-wider">${m.name}</h4>
          <p class="text-xs font-mono opacity-80">${m.location}</p>
        </div>
        <div class="text-right">
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-black/30 border border-white/10">${m.sites.length} SITES</span>
        </div>
      `;

      btn.addEventListener('click', () => {
        state.selectedMap = m.id;
        window.tacticalAudio.playHover();
        renderMapsGuide();
      });

      mapListContainer.appendChild(btn);
    });

    const activeMap = VALORANT_DATA.maps.find(m => m.id === state.selectedMap) || VALORANT_DATA.maps[0];
    mapDetailContainer.innerHTML = `
      <div class="bg-[#141d24] border border-[#2c3945] rounded-xl p-6 val-cut-tl-br">
        <div class="flex items-start justify-between mb-4 border-b border-[#2c3945] pb-4">
          <div>
            <span class="text-xs font-mono text-[#ff4655] uppercase tracking-widest">// MAP DOSSIER</span>
            <h3 class="font-display text-5xl font-bold tracking-wider text-white">${activeMap.name}</h3>
            <p class="text-xs font-mono text-gray-400">${activeMap.location} // COORDS: ${activeMap.coordinates}</p>
          </div>
          <div class="flex gap-2">
            ${activeMap.sites.map(s => `<span class="px-3 py-1 bg-[#1f2c38] text-white text-xs font-mono font-bold rounded border border-white/10">${s}</span>`).join('')}
          </div>
        </div>

        <div class="mb-6">
          <h5 class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">// ARCHITECTURAL MECHANIC</h5>
          <p class="text-sm font-semibold text-white bg-cyan-950/30 border border-cyan-500/20 p-3 rounded-lg">${activeMap.specialFeature}</p>
        </div>

        <div class="mb-6">
          <h5 class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">// INTEL OVERVIEW</h5>
          <p class="text-sm text-gray-300 leading-relaxed">${activeMap.overview}</p>
        </div>

        <div>
          <h5 class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">// RECOMMENDED TACTICS & CALLOUT CONTROL</h5>
          <ul class="space-y-2.5">
            ${activeMap.tactics.map(t => `
              <li class="flex items-start gap-2.5 text-xs text-gray-300 bg-[#0f171e] p-3 rounded-lg border border-white/5">
                <i data-lucide="shield-alert" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span>${t}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================
  // SECTION 5: COMPETITIVE RANKS
  // ==========================================
  const ranksGrid = document.getElementById('ranksGrid');

  function renderCompetitiveRanks() {
    if (!ranksGrid) return;
    ranksGrid.innerHTML = '';

    VALORANT_DATA.ranks.forEach((r, idx) => {
      const card = document.createElement('div');
      card.className = 'bg-[#141d24] border border-[#2c3945] rounded-xl p-5 hover:border-white/30 transition flex flex-col justify-between';
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center font-display text-lg font-bold text-black" style="background-color: ${r.color}">
              0${idx + 1}
            </span>
            <span class="text-xs font-mono text-gray-400">${r.tiers}</span>
          </div>
          <h4 class="font-display text-3xl font-bold tracking-wider text-white mb-1" style="color: ${r.color}">${r.name.toUpperCase()}</h4>
          <p class="text-xs text-gray-300 leading-relaxed mb-4">${r.desc}</p>
        </div>
        <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
          <span>RANK RATING (RR)</span>
          <span class="text-white font-bold">100 RR / TIER</span>
        </div>
      `;
      ranksGrid.appendChild(card);
    });
  }

  // INITIALIZE EVERYTHING
  renderAgents();
  populateWeaponSelectors();
  renderWeaponComparison();
  renderProPresets();
  bindCrosshairInputs();
  renderCrosshairPreview();
  renderMapsGuide();
  renderCompetitiveRanks();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
