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
                    <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </div>
                  <span class="text-sm font-medium">TikTok</span>
                </button>
                <button onclick="shareToSocial('threads')" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2d2d3d] transition-colors text-left">
                  <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01c0-3.574.85-6.427 2.496-8.478C5.847 1.206 8.601.024 12.182 0h.007c3.582.024 6.336 1.206 8.184 3.509 1.646 2.051 2.496 4.905 2.496 8.48 0 3.576-.85 6.43-2.496 8.482-1.85 2.303-4.604 3.485-8.187 3.509zm5.07-11.54c-.078-.235-.1-.48-.1-.73 0-1.89-.81-2.85-2.44-2.85-.69 0-1.3.14-1.86.42l.27-.92c.59-.35 1.32-.53 2.11-.53 2.27 0 3.39 1.46 3.39 3.79-.49.06-.97.15-1.44h-1.9l-.82 2.78h1.9c.09.45.13.93.13 1.48 0 2.33-1.12 3.5-3.39 3.5-.8 0-1.52-.18-2.11-.53l.27-.92c.56.28 1.17.42 1.86.42 1.63 0 2.44-.96 2.44-2.85 0-.25-.02-.5-.1-.73l-2.26-7.5h2.11l.65 2.18.66-2.18h2.11l-2.25 7.5z"/></svg>
                  </div>
                  <span class="text-sm font-medium">Threads</span>
                </button>
              </div>
            </div>
          </div>
          <div class="border-t border-[#2d2d3d] pt-6">
            <h3 class="text-lg font-bold mb-4">Comments <span id="modalCommentCount" class="text-gray-500 text-sm"></span></h3>
            <div class="flex gap-3 mb-6">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold flex-shrink-0">JW</div>
              <div class="flex-1">
                <textarea id="commentInput" placeholder="Add a comment..." class="w-full bg-[#0a0a0f] border border-[#2d2d3d] rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-amber-400 transition-colors" rows="2"></textarea>
                <button onclick="addComment()" class="mt-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg text-sm font-semibold hover:bg-amber-500 transition-all">Post Comment</button>
              </div>
            </div>
            <div id="modalComments" class="space-y-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="uploadModal" class="hidden fixed inset-0 z-50 modal-backdrop bg-black/80 overflow-y-auto">
    <div class="min-h-screen px-4 py-8 flex items-center justify-center">
      <div class="modal-content bg-[#1a1a24] border border-[#2d2d3d] rounded-2xl w-full max-w-2xl overflow-hidden">
        <div class="border-b border-[#2d2d3d] p-6 flex items-center justify-between">
          <h2 class="text-2xl font-bold">Upload Your Audition</h2>
          <button onclick="closeUploadModal()" class="w-10 h-10 rounded-full bg-[#2d2d3d] flex items-center justify-center hover:bg-[#3d3d4d] transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <div class="p-6">
          <form id="uploadForm" class="space-y-5
