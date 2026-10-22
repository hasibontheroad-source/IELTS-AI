// IELTS Platform - Shared Sidebar Navigation Component
// Include this script AFTER core.js and theme.js in any page

const SIDEBAR_HTML = `
<div class="sidebar" id="sidebar">
  <div class="sidebar-logo">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:0.75rem">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#6366F1,#06B6D4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0;box-shadow:0 4px 15px rgba(99,102,241,0.3)">🎓</div>
        <div>
          <div style="font-weight:800;font-size:0.95rem;color:var(--text-primary);letter-spacing:-0.01em">IELTS Academic AI</div>
          <div style="font-size:0.7rem;color:var(--text-muted);font-weight:600">Cambridge 1–21 Benchmark</div>
        </div>
      </div>
      <button class="theme-toggle-btn theme-toggle-icon-only" type="button" onclick="ThemeManager.toggle()" title="Toggle Dark/Light Mode" style="padding:6px;width:32px;height:32px;border-radius:8px">
        <span class="theme-icon">☀️</span>
      </button>
    </div>
  </div>
  
  <!-- Candidate Personal Profile Banner -->
  <div style="padding:1rem 1.25rem;border-bottom:1px solid var(--sidebar-border);background:var(--glass-bg)">
    <a href="PROFILE_LINK" title="View & Edit Candidate Profile" style="display:flex;align-items:flex-start;gap:0.75rem;text-decoration:none;cursor:pointer">
      <div id="sb-avatar" style="width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#7C3AED,#06B6D4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.95rem;color:white;flex-shrink:0;box-shadow:0 4px 12px rgba(124,58,237,0.3)">🎓</div>
      <div style="min-width:0;flex:1">
        <div id="sb-name" style="font-weight:700;font-size:0.875rem;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Student</div>
        <div id="sb-user-sub" style="font-size:0.725rem;color:var(--text-muted);font-family:monospace">@student</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">
          <span id="sb-target-pill" style="font-size:0.65rem;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(99,102,241,0.18);color:var(--primary);border:1px solid rgba(99,102,241,0.3)">Target: 7.5</span>
          <span id="sb-countdown-pill" style="font-size:0.65rem;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(6,182,212,0.18);color:var(--secondary);border:1px solid rgba(6,182,212,0.3)">Exam Prep</span>
        </div>
      </div>
    </a>

    <!-- Quick Personal Account Actions -->
    <div style="display:flex;gap:6px;margin-top:0.75rem">
      <a href="PROFILE_LINK" style="flex:1;padding:5px 8px;font-size:0.7rem;font-weight:600;background:rgba(6,182,212,0.12);color:var(--secondary);border:1px solid rgba(6,182,212,0.25);border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;text-decoration:none;transition:all 0.2s">
        <span>✏️</span> Edit Profile
      </a>
      <button onclick="window.openSwitchAccountModal()" style="flex:1;padding:5px 8px;font-size:0.7rem;font-weight:600;background:var(--card-bg);color:var(--text-secondary);border:1px solid var(--card-border);border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:all 0.2s">
        <span>👥</span> Switch
      </button>
    </div>
  </div>
  
  <nav class="sidebar-nav">
    <div class="nav-section">Main Cockpit</div>
    <a class="nav-item" data-page="dashboard" href="DASHBOARD_LINK">🏠 Dashboard</a>
    
    <div class="nav-section">Exam Modules</div>
    <a class="nav-item" data-page="listening" href="LISTENING_LINK">🎧 Listening Simulation</a>
    <a class="nav-item" data-page="reading" href="READING_LINK">📖 Reading Simulation</a>
    <a class="nav-item" data-page="writing" href="WRITING_LINK">✍️ Writing Tasks 1 & 2</a>
    <a class="nav-item" data-page="speaking" href="SPEAKING_LINK">🎤 Speaking Examiner AI</a>
    
    <div class="nav-section">Full Simulation & AI</div>
    <a class="nav-item" data-page="mock-tests" href="MOCK_TESTS_LINK">📚 Cambridge 1–21 Hub</a>
    <a class="nav-item" data-page="mock-test" href="MOCK_LINK">📋 Full Mock Exam (Timed)</a>
    <a class="nav-item" data-page="ai-tests" href="AI_LINK">🤖 AI Mock Tests Lab</a>
    
    <div class="nav-section">Diagnostics & Progress</div>
    <a class="nav-item" data-page="results" href="RESULTS_LINK">🔍 Diagnostic Report & Drills</a>
    <a class="nav-item" data-page="analytics" href="ANALYTICS_LINK">📊 Psychometric Analytics</a>
    
    <div class="nav-section">Candidate Account</div>
    <a class="nav-item" data-page="profile" href="PROFILE_LINK" style="color:var(--primary);font-weight:700">👤 Candidate Profile & Edit</a>
    <a class="nav-item" data-page="settings" href="SETTINGS_LINK">⚙️ Settings & Theme</a>
    <button class="nav-item" onclick="window.openCreateAccountModal()" style="text-align:left;color:var(--text-secondary)">➕ Create Personal Profile</button>
    <button class="nav-item" onclick="window.openSwitchAccountModal()" style="text-align:left;color:var(--text-secondary)">👥 Switch Candidate</button>
    <a class="nav-item" id="admin-link" href="ADMIN_LINK" style="display:none">🛡️ Admin Console</a>
    <button class="nav-item" onclick="Auth.logout()" style="color:var(--danger);text-align:left">🚪 Logout</button>
  </nav>

  <!-- Theme Toggle Bar & Version -->
  <div style="padding:0.85rem 1.25rem;border-top:1px solid var(--sidebar-border);background:var(--glass-bg);display:flex;align-items:center;justify-content:space-between">
    <div style="font-size:0.75rem;font-weight:700;color:var(--text-secondary)">Theme Mode</div>
    <button class="theme-toggle-btn" type="button" onclick="ThemeManager.toggle()" title="Toggle Dark/Light Mode">
      <span class="theme-toggle-indicator"><span class="theme-icon">☀️</span></span>
      <span class="theme-text">Light</span>
    </button>
  </div>
  
  <div style="padding:0.75rem 1.25rem;border-top:1px solid var(--sidebar-border);font-size:0.68rem;color:var(--text-muted);display:flex;align-items:center;justify-content:space-between">
    <span>IELTS Academic AI v2.4</span>
    <span style="display:flex;align-items:center;gap:4px"><span style="width:6px;height:6px;border-radius:50%;background:#10B981"></span> Live</span>
  </div>
</div>

<!-- Mobile hamburger -->
<button id="menu-toggle" onclick="document.getElementById('sidebar').classList.toggle('sidebar-open')" 
  style="position:fixed;top:1rem;left:1rem;z-index:150;background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:0.55rem;cursor:pointer;display:none;color:var(--text-primary);font-size:1.2rem;box-shadow:0 4px 15px rgba(0,0,0,0.15)">☰</button>
`;

function initSidebar(currentPage, basePath = '') {
  const isPages = window.location.pathname.includes('/pages/');
  const prefix = isPages ? '' : 'pages/';
  const rootPrefix = isPages ? '../' : '';
  
  const html = SIDEBAR_HTML
    .replace('DASHBOARD_LINK', rootPrefix + 'pages/dashboard.html')
    .replace('LISTENING_LINK', prefix + 'listening.html')
    .replace('READING_LINK', prefix + 'reading.html')
    .replace('WRITING_LINK', prefix + 'writing.html')
    .replace('SPEAKING_LINK', prefix + 'speaking.html')
    .replace('MOCK_TESTS_LINK', prefix + 'mock-tests.html')
    .replace('MOCK_LINK', prefix + 'mock-test.html')
    .replace('AI_LINK', prefix + 'ai-tests.html')
    .replace('RESULTS_LINK', prefix + 'results.html')
    .replace('ANALYTICS_LINK', prefix + 'analytics.html')
    .replace(/PROFILE_LINK/g, prefix + 'profile.html')
    .replace('SETTINGS_LINK', prefix + 'settings.html')
    .replace('ADMIN_LINK', prefix + 'admin.html');
  
  // Insert sidebar at start of body
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  const sbNode = wrapper.firstElementChild;
  const btnNode = wrapper.lastElementChild;
  document.body.insertBefore(btnNode, document.body.firstChild);
  document.body.insertBefore(sbNode, document.body.firstChild);
  
  // Update user info
  const user = (typeof Auth !== 'undefined' && typeof Auth.getUser === 'function') 
    ? Auth.getUser() 
    : (typeof Storage !== 'undefined' ? Storage.get('user') : null);

  if (user) {
    const nameEl = document.getElementById('sb-name');
    const userSubEl = document.getElementById('sb-user-sub');
    const avatarEl = document.getElementById('sb-avatar');
    const targetPill = document.getElementById('sb-target-pill');
    const countdownPill = document.getElementById('sb-countdown-pill');

    if (nameEl) nameEl.textContent = user.name || 'Student';
    if (userSubEl) userSubEl.textContent = user.username ? `@${user.username}` : '@student';
    if (avatarEl) avatarEl.textContent = (user.name || 'S')[0].toUpperCase();
    if (targetPill && user.targetBand) targetPill.textContent = `Target: Band ${user.targetBand}`;

    if (countdownPill && typeof UserAccounts !== 'undefined' && user.targetExamDate) {
      const days = UserAccounts.getDaysUntilExam(user.targetExamDate);
      if (days !== null) {
        countdownPill.textContent = days > 0 ? `⏳ ${days}d to exam` : (days === 0 ? '🎯 Exam Today!' : '🏁 Exam Completed');
      }
    }
    
    // Show admin link
    if (user.role === 'admin' || user.username?.toLowerCase() === 'admin') {
      const adminLink = document.getElementById('admin-link');
      if (adminLink) adminLink.style.display = 'flex';
    }
  }
  
  // Mark current page active
  if (currentPage) {
    document.querySelectorAll('.nav-item[data-page]').forEach(el => {
      if (el.dataset.page === currentPage) el.classList.add('active');
    });
  }

  // Sync theme switchers
  if (typeof ThemeManager !== 'undefined') {
    ThemeManager.updateToggles(ThemeManager.getTheme());
    ThemeManager.bindButtons();
  }

  // Inject Global Personal Account Modals
  injectGlobalAccountModals();
  
  // Mobile styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 1024px) {
      #menu-toggle { display: flex !important; }
      .sidebar { transform: translateX(-260px); }
      .sidebar.sidebar-open { transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);
}

// Global Account Modals (Create Personal Account & Switch Account)
function injectGlobalAccountModals() {
  if (document.getElementById('global-personal-account-modal')) return;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'global-personal-account-modal';
  modalContainer.innerHTML = `
    <!-- 1. CREATE PERSONAL ACCOUNT MODAL -->
    <div id="modal-create-account" style="display:none;position:fixed;inset:0;background:rgba(5,8,18,0.85);backdrop-filter:blur(8px);z-index:9999;align-items:center;justify-content:center;padding:1rem">
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:20px;max-width:480px;width:100%;padding:2rem;color:var(--text-primary);box-shadow:var(--shadow-hover);max-height:90vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
          <div style="display:flex;align-items:center;gap:0.75rem">
            <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#7C3AED,#06B6D4);display:flex;align-items:center;justify-content:center;font-size:1.25rem">👤</div>
            <div>
              <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-primary);margin:0">Create Personal Account</h3>
              <p style="font-size:0.75rem;color:var(--text-muted);margin:2px 0 0 0">Private test history & target band tracking</p>
            </div>
          </div>
          <button onclick="window.closeGlobalModals()" style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer">✕</button>
        </div>

        <div id="create-modal-err" style="display:none;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);color:var(--danger);padding:0.75rem;border-radius:10px;font-size:0.8rem;margin-bottom:1rem"></div>

        <div style="display:flex;flex-direction:column;gap:1rem">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Candidate Full Name *</label>
            <input type="text" id="g-cand-name" placeholder="e.g. Aisha Rahman" style="width:100%;box-sizing:border-box" />
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Username *</label>
              <input type="text" id="g-cand-user" placeholder="e.g. aisha99" style="width:100%;box-sizing:border-box" />
            </div>
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Password *</label>
              <input type="password" id="g-cand-pass" placeholder="Min 4 chars" style="width:100%;box-sizing:border-box" />
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Target Band</label>
              <select id="g-cand-target" style="width:100%;box-sizing:border-box">
                <option value="6.5">Band 6.5 (Undergrad)</option>
                <option value="7.0">Band 7.0 (Masters)</option>
                <option value="7.5" selected>Band 7.5 (Top 50 Uni)</option>
                <option value="8.0">Band 8.0 (Law/Medicine)</option>
                <option value="8.5">Band 8.5 (Near Native)</option>
                <option value="9.0">Band 9.0 (Expert)</option>
              </select>
            </div>
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Official Exam Date</label>
              <input type="date" id="g-cand-date" style="width:100%;box-sizing:border-box" />
            </div>
          </div>

          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:var(--text-secondary);margin-bottom:4px">Target Destination / University</label>
            <input type="text" id="g-cand-dest" placeholder="e.g. University of Oxford / Express Entry Canada" style="width:100%;box-sizing:border-box" />
          </div>

          <div style="display:flex;gap:0.75rem;margin-top:0.5rem">
            <button onclick="window.submitCreateAccount()" class="btn-primary" style="flex:1;padding:12px;border-radius:12px">
              ✨ Create & Log In
            </button>
            <button onclick="window.closeGlobalModals()" class="btn-secondary" style="border-radius:12px;padding:12px 18px">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. SWITCH CANDIDATE ACCOUNT MODAL -->
    <div id="modal-switch-account" style="display:none;position:fixed;inset:0;background:rgba(5,8,18,0.85);backdrop-filter:blur(8px);z-index:9999;align-items:center;justify-content:center;padding:1rem">
      <div style="background:var(--card-bg);border:1px solid var(--card-border);border-radius:20px;max-width:440px;width:100%;padding:2rem;color:var(--text-primary);box-shadow:var(--shadow-hover)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
          <div>
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-primary);margin:0">Switch Candidate Account</h3>
            <p style="font-size:0.75rem;color:var(--text-muted);margin:2px 0 0 0">Select active personal profile</p>
          </div>
          <button onclick="window.closeGlobalModals()" style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer">✕</button>
        </div>

        <div id="switch-account-list" style="display:flex;flex-direction:column;gap:8px;max-height:280px;overflow-y:auto;margin-bottom:1.25rem">
          <!-- Filled by JS -->
        </div>

        <div style="display:flex;gap:0.75rem">
          <button onclick="window.openCreateAccountModal()" style="flex:1;background:rgba(99,102,241,0.18);border:1px solid var(--primary);color:var(--primary);font-weight:700;border-radius:10px;padding:10px;font-size:0.8rem;cursor:pointer">
            ➕ Add New Candidate
          </button>
          <button onclick="window.closeGlobalModals()" class="btn-secondary" style="border-radius:10px;padding:10px 16px">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);
}

window.openCreateAccountModal = function() {
  window.closeGlobalModals();
  const m = document.getElementById('modal-create-account');
  if (m) {
    m.style.display = 'flex';
    const err = document.getElementById('create-modal-err');
    if (err) err.style.display = 'none';
    const candName = document.getElementById('g-cand-name');
    if (candName) candName.focus();
  }
};

window.openSwitchAccountModal = function() {
  window.closeGlobalModals();
  const m = document.getElementById('modal-switch-account');
  if (m) {
    m.style.display = 'flex';
    const list = document.getElementById('switch-account-list');
    const users = (typeof UserAccounts !== 'undefined') ? UserAccounts.getAll() : [];
    const active = (typeof Auth !== 'undefined' && Auth.getUser()) ? Auth.getUser().username : '';

    if (list) {
      list.innerHTML = users.map(u => {
        const isCurrent = active && u.username && active.toLowerCase() === u.username.toLowerCase();
        return `
          <div onclick="window.selectAccount('${u.username}')" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;background:${isCurrent ? 'rgba(99,102,241,0.15)' : 'var(--card-bg-elevated)'};border:1px solid ${isCurrent ? 'var(--primary)' : 'var(--card-border)'};cursor:pointer;transition:all 0.2s">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,#7C3AED,#06B6D4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.85rem;color:white">
                ${(u.name || 'U')[0].toUpperCase()}
              </div>
              <div>
                <div style="font-weight:700;font-size:0.85rem;color:var(--text-primary)">${u.name}</div>
                <div style="font-size:0.7rem;color:var(--text-muted);font-family:monospace">@${u.username} • Target Band ${u.targetBand || 7.5}</div>
              </div>
            </div>
            ${isCurrent ? '<span style="font-size:0.7rem;font-weight:700;color:var(--success);background:rgba(16,185,129,0.15);padding:2px 8px;border-radius:4px">Active</span>' : '<span style="font-size:0.75rem;color:var(--text-muted)">Switch →</span>'}
          </div>
        `;
      }).join('');
    }
  }
};

window.closeGlobalModals = function() {
  const m1 = document.getElementById('modal-create-account');
  const m2 = document.getElementById('modal-switch-account');
  if (m1) m1.style.display = 'none';
  if (m2) m2.style.display = 'none';
};

window.submitCreateAccount = function() {
  const name = (document.getElementById('g-cand-name').value || '').trim();
  const username = (document.getElementById('g-cand-user').value || '').trim();
  const password = (document.getElementById('g-cand-pass').value || '').trim();
  const targetBand = document.getElementById('g-cand-target').value;
  const examDate = document.getElementById('g-cand-date').value;
  const dest = (document.getElementById('g-cand-dest').value || '').trim();
  const errBox = document.getElementById('create-modal-err');

  try {
    if (typeof UserAccounts === 'undefined') throw new Error('UserAccounts module not loaded');
    const newAcc = UserAccounts.createAccount({
      name,
      username,
      password,
      targetBand,
      targetExamDate: examDate,
      targetDestination: dest
    });

    UserAccounts.switchAccount(newAcc.username);
    if (typeof Toast !== 'undefined') Toast.success(`Personal account created for ${newAcc.name}!`);
    window.closeGlobalModals();
    setTimeout(() => window.location.reload(), 400);
  } catch (err) {
    if (errBox) {
      errBox.textContent = `⚠️ ${err.message}`;
      errBox.style.display = 'block';
    } else {
      alert(err.message);
    }
  }
};

window.selectAccount = function(username) {
  try {
    if (typeof UserAccounts !== 'undefined') {
      UserAccounts.switchAccount(username);
      if (typeof Toast !== 'undefined') Toast.success(`Switched account to @${username}`);
      window.closeGlobalModals();
      setTimeout(() => window.location.reload(), 300);
    }
  } catch (e) {
    alert(e.message);
  }
};

window.initSidebar = initSidebar;
