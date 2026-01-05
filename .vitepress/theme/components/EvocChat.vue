<script setup>
import { ref, watch, nextTick } from "vue"
import { useChat } from '@ai-sdk/vue'
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-vue-next'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})

const featureEnabled = import.meta.env.VITE_ENABLE_CHAT === 'true'

const isOpen = ref(false)
const chatContainer = ref(null)

const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
})

// this is to scroll up whn new mess arrive
watch(messages, () => {
    nextTick(() => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight
        }
    })
}, { deep: true })

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <div v-if="featureEnabled" class="evoc-chat-wrapper">
        <!-- the button -->
        <button @click="toggleChat" class="chat-bubble" :class="{ 'is-active': isOpen }" aria-label="Toggle Chat">
            <div class="bubble-glow"></div>
            <MessageCircle v-if="!isOpen" :size="28" class="icon-pulse" />
            <X v-else :size="28" />
        </button>

        <!-- window of the chat -->
        <Transition name="slide-up">
            <div class="chat-window" v-if="isOpen">
                <div class="chat-header">
                    <div class="header-info">
                        <div class="bot-avatar">
                            <Bot :size="20" />
                        </div>
                        <div>
                            <h3>EvOC Assistant</h3>
                        </div>
                    </div>
                    <button @click="toggleChat" class="close-btn">
                        <X :size="20" />
                    </button>
                </div>

                <!-- messages to be shown -->
                <div class="chat-content" ref="chatContainer">
                    <div v-if="messages.length === 0" class="welcome-message">
                        <Bot :size="40" class="welcome-icon" />
                        <p>Hi! I'm your EvOC assistant. How can I help you with Evolutionary Algorithms today?</p>
                    </div>

                    <div v-for="m in messages" :key="m.id" class="message-row"
                        :class="m.role==='user'?'user-row': 'bot-row'">
                        <div class="message-avatar">
                            <User v-if="m.role === 'user'" :size="16" />
                            <Bot v-else :size="16" />
                        </div>
                        <div class="message-bubble" v-html="md.render(m.content)">
                        </div>
                    </div>

                     <div v-if="isLoading &&messages[messages.length - 1]?.role==='user'" class="message-row bot-row">
            <div class="message-avatar">
              <Bot :size="16" />
            </div>
            <div class="message-bubble loading-bubble">
              <Loader2 class="spin" :size="16" />
            </div>
          </div>


           <div v-if="error" class="error-msg">
            Something went wrong. Please check your connection or API key.
          </div>
                </div>

                          <!-- the input area -->

                 <form @submit.prevent="handleSubmit" class="chat-input-area">
          <input
            v-model="input"
            placeholder="Ask a question..."
            @input="handleInputChange"
          />
          <button type="submit":disabled="isLoading || !input.trim()" class="send-btn">
            <Send :size="20" />
          </button>
        </form>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .evoc-chat-wrapper {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  font-family: var(--vp-font-family-base);
}


.chat-bubble {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 
    0 10px 25px -5px rgba(59, 130, 246, 0.4),
    0 8px 10px -6px rgba(59, 130, 246, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: visible;
}

.bubble-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: inherit;
  filter: blur(12px);
  opacity: 0.6;
  z-index: -1;
  animation: pulse-glow 3s infinite;
}

.chat-bubble:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 
    0 20px 35px -10px rgba(59, 130, 246, 0.5),
    0 12px 15px -8px rgba(59, 130, 246, 0.5);
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.chat-bubble.is-active {
  background: #1e293b;
  transform: rotate(90deg) scale(1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.chat-bubble.is-active .bubble-glow {
  opacity: 0;
}

.icon-pulse {
  animation: icon-float 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.4); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
}

@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 540px;
  height: 680px;
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 120px);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 
    0 12px 24px -6px rgba(0, 0, 0, 0.12),
    0 4px 8px -4px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.dark .chat-window {
  background: rgba(24, 24, 27, 0.85);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.chat-header {
  padding: 1rem 1.25rem;
  background: #3b82f6;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dark .chat-header {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}


.header-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.bot-avatar {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.chat-header p {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.8;
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.close-btn:hover {
  background: rgba(239, 68, 68, 0.8);
  border-color: rgba(239, 68, 68, 1);
  transform: rotate(90deg);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
}


.chat-content {
  flex: 1;
  padding: 1.25rem;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
  opacity: 0.8;
  padding: 0 2rem;
  gap: 1rem;
}


.welcome-icon {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.message-row {
  display: flex;
  gap: 0.75rem;
  max-width: 85%;
  align-items: flex-start;
}


.user-row {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.message-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}



.user-row .message-avatar {
  background: var(--vp-c-brand);
  color: white;
}

.message-bubble {
  padding: 0.875rem 1.125rem;
  border-radius: 1.25rem;
  font-size: 0.935rem;
  line-height: 1.6;
}

.bot-row .message-bubble :deep(p) { margin: 0 0 0.75rem 0; }
.bot-row .message-bubble :deep(p:last-child) { margin: 0; }
.bot-row .message-bubble :deep(ul), .bot-row .message-bubble :deep(ol) { margin: 0.5rem 0; padding-left: 1.25rem; }
.bot-row .message-bubble :deep(li) { margin: 0.25rem 0; }
.bot-row .message-bubble :deep(code) { 
  background: rgba(0, 0, 0, 0.05);
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85em;
}
.dark .bot-row .message-bubble :deep(code) { background: rgba(255, 255, 255, 0.1); }
.bot-row .message-bubble :deep(pre) { 
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 0.75rem 0;
}
.bot-row .message-bubble :deep(h1), 
.bot-row .message-bubble :deep(h2), 
.bot-row .message-bubble :deep(h3) { 
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.25;
}

.bot-row .message-bubble {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top-left-radius: 0.25rem;
  color: var(--vp-c-text-1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.user-row .message-bubble {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-top-right-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.dark .user-row .message-bubble {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
}



.loading-bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}

.chat-input-area {
  padding: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 0.5rem;
  background: var(--vp-c-bg);
}

.chat-input-area input {
  flex: 1;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  outline: none;
  color: var(--vp-c-text-1);
}

.chat-input-area input:focus {
  border-color: var(--vp-c-brand);
}


.send-btn {
  background: #3b82f6;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.send-btn:hover:not(:disabled) {
  background: #2563eb;
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.error-msg {
  font-size: 0.8rem;
  color: #ef4444;
  text-align: center;
  padding: 0.5rem;
}

/* scrollabr */
.chat-content::-webkit-scrollbar {
  width: 4px;
}
.chat-content::-webkit-scrollbar-track {
  background: transparent;
}
.chat-content::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 2px;
}
</style>