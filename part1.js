DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="theme-color" content="#0a0a0f">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Aspire">
<link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect width='180' height='180' rx='40' fill='%230a0a0f'/><rect x='65' y='65' width='50' height='50' rx='12' fill='url(%23g)'/><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23fbbf24'/><stop offset='1' stop-color='%23f59e0b'/></linearGradient></defs><text x='90' y='150' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle' fill='%23fbbf24'>Aspire</text></svg>">
<title>Aspire - Where Talent Meets Opportunity</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap');

  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-card: #1a1a24;
    --bg-card-hover: #20202e;
    --accent: #fbbf24;
    --accent-hover: #f59e0b;
    --gold-1: #fbbf24;
    --gold-2: #f59e0b;
    --gold-3: #d97706;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border: #2d2d3d;
  }
    * { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    position: relative;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    overscroll-behavior: none;
  }
  nav { padding-top: calc(0.5rem + env(safe-area-inset-top)); }
  body::before {
    content: '';
    position: fixed;
    top: -50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(251, 191, 36, 0.08) 0%, transparent 70%);
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 0;
  }
  main, nav { position: relative; z-index: 1; }
 .font-display { font-family: 'Playfair Display', serif; letter-spacing: -0.02em; }
 .gradient-text { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
 .spotlight-text { text-shadow: 0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1); }
 .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
 .card-hover::before { content: ''; position: absolute; inset: 0; border-radius: 0.75rem; padding: 1px; background: linear-gradient(135deg, rgba(251, 191, 36, 0.3), transparent); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0; transition: opacity 0.3s; }
 .card-hover:hover::before { opacity: 1; }
 .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15); }
 .video-thumbnail { position: relative; overflow: hidden; }
 .video-thumbnail::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%); z-index: 1; }
 .play-indicator { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; opacity: 0; transition: all 0.3s ease; }
 .video-thumbnail:hover.play-indicator { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
 .modal-backdrop { backdrop-filter: blur(12px); animation: fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
 .modal-content { animation: slideUp 0.3s ease; }
 .vote-btn-active { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0a0a0f; box-shadow: 0 8px 16px rgba(251, 191, 36, 0.3); }
 .like-btn-active { color: #ef4444; fill: #ef4444; }
 .scrollbar-hide::-webkit-scrollbar { display: none; }
 .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
 .nav-item-active { color: var(--accent); }
 .nav-item-active::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); width: 24px; height: 2px; background: var(--accent); border-radius: 2px; }
 .skeleton { background: linear-gradient(90deg, #1a1a24 25%, #20202e 50%, #1a1a24 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
  @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
 .comment-slide { animation: slideInLeft 0.3s ease; }
  @keyframes slideInLeft { from { transform: translateX(-10px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
 .rising-star-badge { background: linear-gradient(135deg, #fbbf24, #f59e0b); animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
 .director-badge { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
 .leaderboard-gold { background: linear-gradient(135deg, #fbbf24, #d97706); box-shadow: 0 0 30px rgba(251, 191, 36, 0.4); }
 .leaderboard-silver { background: linear-gradient(135deg, #e5e7eb, #9ca3af); }
 .leaderboard-bronze { background: linear-gradient(135deg, #f97316, #c2410c); }
 .account-toggle { position: relative; background: #1a1a24; border: 1px solid var(--border); }
 .account-toggle-slider { position: absolute; top: 2px; left: 2px; width: calc(50% - 2px); height: calc(100% - 4px); background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 0.375rem; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
 .account-toggle.director.account-toggle-slider { transform: translateX(100%); }
 .share-menu { animation: slideUp 0.2s ease; }
 .install-banner { padding-bottom: calc(1rem + env(safe-area-inset-bottom)); }
  @media (max-width: 390px) {.mobile-stack { grid-template-columns: 1fr!important; } }
</style>
</head>
<body class="antialiased">
  <!-- PASTE YOUR ENTIRE NAV + MAIN + MODALS HTML FROM YOUR ORIGINAL FILE HERE -->
  <!-- Everything from <nav> to the last </script> before </body> -->

  <!-- START PASTE HERE -->
  <nav class="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#2d2d3d]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-6 lg:gap-8">
          <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <i data-lucide="sparkles" class="w-5 h-5 text-gray-900"></i>
            </div>
            <div>
              <span class="font-display text-2xl font-black gradient-text spotlight-text">Aspire</span>
              <p class="text-[10px] text-amber-400/70 font-medium tracking-wider -mt-1">WHERE TALENT MEETS OPPORTUNITY</p>
            </div>
          </div>
          <div class="hidden md:flex items-center gap-1">
            <button onclick="navigateTo('home')" class="nav-item nav-item-active relative px-4 py-2 text-sm font-medium transition-colors hover:text-amber-400">Home</button>
            <button onclick="navigateTo('casting')" class="nav-item relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-amber-400">Casting Calls</button>
            <button onclick="navigateTo('leaderboard')" class="nav-item relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-amber-400">Leaderboard</button>
            <button onclick="navigateTo('trending')" class="nav-item relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-amber-400">Trending</button>
          </div>
        </div>
        <div class="flex items-center gap-2 md:gap-3">
          <div class="hidden sm:flex items-center gap-2 bg-[#1a1a24] border border-[#2d2d3d] rounded-lg px-3 py-2 w-48 lg:w-64">
            <i data-lucide="search" class="w-4 h-4 text-gray-500"></i>
            <input type="text" id="searchInput" placeholder="Search..." class="bg-transparent border-none outline-none text-sm w-full text-gray-200 placeholder:text-gray-500">
          </div>
          <div class="hidden lg:flex account-toggle rounded-lg p-1 cursor-pointer" id="accountToggle" onclick="toggleAccountType()">
            <div class="account-toggle-slider"></div>
            <div class="relative z-10 flex">
              <div class="px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors account-text-talent">
                <i data-lucide="video" class="w-3.5 h-3.5"></i>
                Talent
              </div>
              <div class="px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors account-text-director">
                <i data-lucide="clapperboard" class="w-3.5 h-3.5"></i>
                Director
              </div>
            </div>
          </div>
          <button onclick="openUploadModal()" id="uploadBtn" class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-gray-900 px-3 md:px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span class="hidden md:inline">Upload</span>
          </button>
          <button onclick="openPostCastingModal()" id="postCastingBtn" class="hidden items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 md:px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <i data-lucide="megaphone" class="w-4 h-4"></i>
            <span class="hidden md:inline">Post Call</span>
          </button>
          <button onclick="navigateTo('profile')" class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold cursor-pointer relative">
            <span id="userAvatar">JW</span>
            <div id="directorBadge" class="hidden absolute -bottom-1 -right-1 w-4 h-4 rounded-full director-badge flex items-center justify-center">
              <i data-lucide="shield-check" class="w-2.5 h-2.5 text-white"></i>
            </div>
          </button>
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-gray-400">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="mobileMenu" class="hidden md:hidden border-t border-[#2d2d3d] bg-[#0a0a0f]">
      <div class="px-4 py-3 space-y-1">
        <button onclick="navigateTo('home')" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1a24]">Home</button>
        <button onclick="navigateTo('casting')" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-[#1a1a24]">Casting Calls</button>
        <button onclick="navigateTo('leaderboard')" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-[#1a1a24]">Leaderboard</button>
        <button onclick="navigateTo('trending')" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:bg-[#1a1a24]">Trending</button>
        <button onclick="openUploadModal()" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-[#1a1a24]">Upload Audition</button>
        <button onclick="openPostCastingModal()" id="mobilePostCasting" class="hidden block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-purple-400 hover:bg-[#1a1a24]">Post Casting Call</button>
        <div class="pt-2 border-t border-[#2d2d3d] mt-2">
          <button onclick="toggleAccountType()" id="mobileAccountToggle" class="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1a24]">Switch to Director</button>
        </div>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- ALL YOUR VIEWS: homeView, castingView, leaderboardView, trendingView, profileView -->
    <!-- PASTE THEM ALL HERE FROM YOUR ORIGINAL FILE -->
    <!-- For brevity I'm not repeating 800 lines, but you paste your entire <main> section -->
    <div id="homeView" class="view">
      <div class="mb-8">
        <h1 class="font-display text-4xl md:text-6xl font-black mb-2 spotlight-text">Discover <span class="gradient-text">Talent</span></h1>
        <p class="text-gray-400 text-lg">Vote for the next star. Browse auditions from actors worldwide.</p>
      </div>
      <div class="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
        <button onclick="filterFeed('all')" class="filter-btn active px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-amber-400 text-amber-400 whitespace-nowrap">All Auditions</button>
        <button onclick="filterFeed('film')" class="filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Film</button>
        <button onclick="filterFeed('tv')" class="filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">TV Series</button>
        <button onclick="filterFeed('theater')" class="filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Theater</button>
        <button onclick="filterFeed('commercial')" class="filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Commercial</button>
        <button onclick="filterFeed('voice')" class="filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Voice Acting</button>
      </div>
      <div id="auditionGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"></div>
    </div>
    <div id="castingView" class="view hidden">
      <div class="mb-8">
        <h1 class="font-display text-4xl md:text-6xl font-black mb-2 spotlight-text">Casting <span class="gradient-text">Calls</span></h1>
        <p class="text-gray-400 text-lg">Open roles looking for talent. Submit your audition today.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" id="castingGrid"></div>
    </div>
    <div id="leaderboardView" class="view hidden">
      <div class="mb-8">
        <h1 class="font-display text-4xl md:text-6xl font-black mb-2 spotlight-text">Top Auditions <span class="gradient-text">This Week</span></h1>
        <p class="text-gray-400 text-lg">The most voted performances climbing to fame</p>
      </div>
      <div class="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
        <button onclick="filterLeaderboard('all')" class="leaderboard-filter-btn active px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-amber-400 text-amber-400 whitespace-nowrap">All Genres</button>
        <button onclick="filterLeaderboard('drama')" class="leaderboard-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Drama</button>
        <button onclick="filterLeaderboard('comedy')" class="leaderboard-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Comedy</button>
        <button onclick="filterLeaderboard('voice')" class="leaderboard-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Voice Acting</button>
        <button onclick="filterLeaderboard('action')" class="leaderboard-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Action</button>
        <button onclick="filterLeaderboard('musical')" class="leaderboard-filter-btn px-5 py-2 rounded-full text-sm font-medium bg-[#1a1a24] border border-[#2d2d3d] text-gray-400 hover:border-amber-400 whitespace-nowrap">Musical</button>
      </div>
      <div id="leaderboardPodium" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"></div>
      <div id="leaderboardList" class="space-y-3"></div>
    </div>
    <div id="trendingView" class="view hidden">
      <div class="mb-8">
        <h1 class="font-display text-4xl md:text-6xl font-black mb-2 spotlight-text">Trending <span class="gradient-text">Now</span></h1>
        <p class="text-gray-400 text-lg">Most voted auditions this week</p>
      </div>
      <div id="trendingGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"></div>
    </div>
    <div id="profileView" class="view hidden">
      <div class="mb-8 bg-gradient-to-br from-[#1a1a24] to-[#12121a] border border-[#2d2d3d] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="relative">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/30">
                <span id="profileAvatar">JW</span>
              </div>
              <div id="profileDirectorBadge" class="hidden absolute -bottom-2 -right-2 px-3 py-1 rounded-full director-badge flex items-center gap-1 text-xs font-bold text-white">
                <i data-lucide="shield-check" class="w-3 h-3"></i>
                DIRECTOR
              </div>
            </div>
            <div class="flex-1">
              <h1 class="font-display text-3xl font-black mb-1" id="profileName">Jordan Wells</h1>
              <p class="text-gray-400 mb-4" id="profileBio">Actor • Los Angeles, CA • 3 years on Aspire</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div class="text-2xl font-black gradient-text" id="profileVotes">12.4K</div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">Total Votes</div>
                </div>
                <div>
                  <div class="text-2xl font-black gradient-text" id="profileLikes">8.2K</div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">Total Likes</div>
                </div>
                <div>
                  <div class="text-2xl font-black gradient-text" id="profileViews">142K</div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">Total Views</div>
                </div>
                <div>
                  <div class="text-2xl font-black gradient-text" id="profileFame">2,340</div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">Fame Score</div>
                </div>
              </div>
              <div class="mt-4 flex flex-wrap gap-3">
                <div class="px-4 py-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/30 rounded-lg">
                  <div class="text-lg font-bold gradient-text" id="profileWins">3</div>
                  <div class="text-xs text-gray-400">Casting Wins</div>
                </div>
              </div>
              <button class="px-6 py-2 border border-amber-400 text-amber-400 rounded-lg font-medium hover:bg-amber-400/10 transition-all">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-2xl font-bold mb-4">My Auditions</h2>
      <div id="profileAuditions" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"></div>
    </div>
  </main>

  <!-- PASTE ALL YOUR MODALS HERE: auditionModal, uploadModal, postCastingModal, toast -->
  <!-- For brevity, use your exact modal code from your original file -->
  <div id="auditionModal" class="hidden fixed inset-0 z-50 modal-backdrop bg-black/80 overflow-y-auto">
    <div class="min-h-screen px-4 py-8 flex items-center justify-center">
      <div class="modal-content bg-[#1a1a24] border border-[#2d2d3d] rounded-2xl w-full max-w-5xl overflow-hidden">
        <div class="relative">
          <button onclick="closeAuditionModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
          <div class="aspect-video bg-[#0a0a0f] relative flex items-center justify-center">
            <div class="skeleton w-full h-full"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <i data-lucide="play-circle" class="w-20 h-20 text-amber-400 opacity-80"></i>
            </div>
            <div id="modalVideoInfo" class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent"></div>
          </div>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-3 mb-6">
            <button id="modalVoteBtn" onclick="toggleVote()" class="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#2d2d3d] hover:bg-[#3d3d4d] transition-all">
              <i data-lucide="award" class="w-5 h-5"></i>
              <span id="modalVoteText">Vote</span>
              <span id="modalVoteCount" class="text-sm text-gray-400"></span>
            </button>
            <button id="modalLikeBtn" onclick="toggleLike()" class="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#2d2d3d] hover:bg-[#3d3d4d] transition-all">
              <i data-lucide="heart" class="w-5 h-5"></i>
              <span id="modalLikeCount"></span>
            </button>
            <div class="relative">
              <button onclick="toggleShareMenu()" class="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#2d2d3d] hover:bg-[#3d3d4d] transition-all">
                <i data-lucide="share-2" class="w-5 h-5"></i>
                Share
              </button>
              <div id="shareMenu" class="hidden absolute top-full left-0 mt-2 w-56 bg-[#1a1a24] border border-[#2d2d3d] rounded-xl shadow-2xl p-2 share-menu z-20">
                <button onclick="shareToSocial('facebook')" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d2d3d] transition-colors text-left">
                  <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><i data-lucide="facebook" class="w-4 h-4 text-white"></i></div>
                  <span class="text-sm font-medium">Facebook</span>
                </button>
                <button onclick="shareToSocial('instagram')" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d2d3d] transition-colors text-left">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center"><i data-lucide="instagram" class="w-4 h-4 text-white"></i></div>
                  <span class="text-sm font-medium">Instagram</span>
                </button>
                <button onclick="shareToSocial('tiktok')" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d2d3d] transition-colors text-left">
                  <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 0 0 1-5.2 1.74 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </div>
                  <span class="text-sm font-medium">TikTok</span>
                </button>
                <button onclick="shareToSocial('threads')" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d2d3d] transition-colors text-left">
                  <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01c0-3.574.85-6.427 2.496-8.478C5.847 1.206 8.601.024 12.182 0h.007c3.582.024 6.336 1.206 8.184 3.509 1.646 2.051 2.496 4.905 2.496 8.48 0 3.576-.85 6.43-2.496 8.482-1.85 2.303-4.604 3.485-8.187 3.509zm5.07-11.54c-.078-.235-.1-.48-.1-.73 0-1.89.81-2.85 2.44-2.85.69 0 1.3.14 1.86.42l.27-.92c-.59-.35-1.32-.53-2.11-.53-2.27 0-3.39 1.46-3.39 3.79 0.49.06.97.15 1.44h-1.9l-.82 2.78h1.9c.09.45.13.93.13 1.48 0 2.33-1.12 3.5-3.39 3.5-.8 0-1.52-.18-2.11-.53l.27-.92c.56.28 1.17.42 1.86.42 1.63 0 2.44-.96 2.44-2.85 0-.25-.02-.5-.1-.73l-2.26-7.5h2.11l.65 2.18.66-2.18h2.11l-2.25 7.5z"/></svg>
                  </div>
                  <span class="text-sm font-medium">Threads</span>
                </button>
              </div>
            </div>
          </div>
          <div class="border-t border-[#2d2d3d] pt-6">
            <h3 class="text-lg font-bold mb-4">Comments <span id="modalCommentCount" class="text-gray-500 text-sm"></span></h3>
            <div class="flex gap-3 mb-6">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500
