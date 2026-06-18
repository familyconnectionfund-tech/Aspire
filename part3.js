    { id: 2, userId: 5, text: 'Your detective work is always so layered. Love the subtle choices here.', timestamp: '2025-10-18', likes: 32 },
    { id: 3, userId: 9, text: 'This gave me chills. You\'re going to be perfect for this role!', timestamp: '2025-10-19', likes: 28 }
  ],
  2: [
    { id: 4, userId: 7, text: 'Beautiful interpretation! You found new depths in familiar text.', timestamp: '2025-10-17', likes: 67 },
    { id: 5, userId: 1, text: 'The vulnerability in your voice... stunning work, Sofia.', timestamp: '2025-10-17', likes: 54 }
  ],
  3: [
    { id: 6, userId: 12, text: 'Your range is insane! From commanding to broken in seconds.', timestamp: '2025-10-19', likes: 41 },
    { id: 7, userId: 10, text: 'This is exactly what Captain Nova should sound like. Heroic!', timestamp: '2025-10-19', likes: 38 }
  ]
};

function updateAccountUI() {
  const toggle = document.getElementById('accountToggle');
  const talentText = document.querySelector('.account-text-talent');
  const directorText = document.querySelector('.account-text-director');
  const uploadBtn = document.getElementById('uploadBtn');
  const postCastingBtn = document.getElementById('postCastingBtn');
  const mobilePostCasting = document.getElementById('mobilePostCasting');
  const directorBadge = document.getElementById('directorBadge');
  const profileDirectorBadge = document.getElementById('profileDirectorBadge');
  const mobileAccountToggle = document.getElementById('mobileAccountToggle');
  
  if (accountType === 'director') {
    toggle.classList.add('director');
    talentText.style
