<script setup>

const { t } = useI18n()

useHead({
    title: t('pages.howitworks.title') + " | Spixi",
    meta: [
        {
            name: 'description',
            content: t('pages.howitworks.subtitle1')
        }
    ]
})
</script>

<template>
    <div class="pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto">

        <!-- Hero Section -->
        <div class="bg-gray-100 dark:bg-[#1B232B] rounded-3xl mb-16 overflow-hidden relative">
            <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/4"></div>
            <div class="flex flex-col md:flex-row items-center justify-between py-16 px-10 gap-10 relative z-10">
                <div class="md:w-3/5 inline-flex flex-col justify-between item">
                    <span class="text-accent uppercase tracking-widest text-xs font-bold mb-2 block">{{ t('pages.howitworks.subtitle1') }}</span>
                    <h2 class="text-3xl md:text-5xl font-lexend font-bold text-black dark:text-spixi-dark">
                        {{ t('pages.howitworks.title') }}
                    </h2>
                    <p class="text-lg text-spixi dark:text-gray-400 mt-6 leading-relaxed max-w-xl">
                        {{ t('pages.howitworks.subtitle2') }}
                    </p>
                </div>
                <!-- Abstract visual representation of distributed nodes/apps -->
                <div class="md:w-2/5 hidden md:flex justify-center">
                   <div class="relative w-64 h-64">
                       <div class="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse"></div>
                       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-accent relative z-10 drop-shadow-xl">
                           <circle cx="100" cy="100" r="40" fill="currentColor" opacity="0.2" />
                           <circle cx="100" cy="100" r="25" fill="currentColor" />
                           <circle cx="40" cy="50" r="10" fill="currentColor" opacity="0.6" />
                           <circle cx="160" cy="50" r="10" fill="currentColor" opacity="0.6" />
                           <circle cx="40" cy="150" r="10" fill="currentColor" opacity="0.6" />
                           <circle cx="160" cy="150" r="10" fill="currentColor" opacity="0.6" />
                           <line x1="100" y1="100" x2="40" y2="50" stroke="currentColor" stroke-width="2" opacity="0.4" />
                           <line x1="100" y1="100" x2="160" y2="50" stroke="currentColor" stroke-width="2" opacity="0.4" />
                           <line x1="100" y1="100" x2="40" y2="150" stroke="currentColor" stroke-width="2" opacity="0.4" />
                           <line x1="100" y1="100" x2="160" y2="150" stroke="currentColor" stroke-width="2" opacity="0.4" />
                       </svg>
                   </div>
                </div>
            </div>
        </div>

        <!-- Helper Section -->
        <Helper
            :title="t('pages.howitworks.helper')"
            :subtitle="t('pages.howitworks.helperdesc')"
            class="mb-20"
            />

        <!-- Steps / Ecology Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <!-- Step 1 -->
            <div class="bg-white dark:bg-[#121820] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-colors">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                </div>
                <h3 class="text-xl font-bold dark:text-white mb-3">{{ t('pages.howitworks.steps.step1.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('pages.howitworks.steps.step1.content') }}</p>
            </div>

             <!-- Step 2 -->
             <div class="bg-white dark:bg-[#121820] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-colors">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
                <h3 class="text-xl font-bold dark:text-white mb-3">{{ t('pages.howitworks.steps.step2.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('pages.howitworks.steps.step2.content') }}</p>
            </div>

             <!-- Step 3 -->
             <div class="bg-white dark:bg-[#121820] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-colors">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 class="text-xl font-bold dark:text-white mb-3">{{ t('pages.howitworks.steps.step3.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('pages.howitworks.steps.step3.content') }}</p>
            </div>

             <!-- Step 4 -->
             <div class="bg-white dark:bg-[#121820] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-colors">
                <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3 class="text-xl font-bold dark:text-white mb-3">{{ t('pages.howitworks.steps.step4.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ t('pages.howitworks.steps.step4.content') }}</p>
            </div>
        </div>

        <!-- Architecture Diagram Section -->
        <div class="mb-20">
             <div class="text-center mb-10">
                <h2 class="text-3xl font-lexend font-bold dark:text-white">{{ t('pages.howitworks.architecture.title') }}</h2>
            </div>
            
            <div class="bg-card-bg/50 dark:bg-card-bg border border-gray-200 dark:border-white/5 rounded-3xl p-6 md:p-10 flex justify-center">
                <div class="flex flex-col items-center gap-6">
                    <!-- Spixi Host -->
                     <div class="flex flex-col items-center gap-4">
                        <div class="w-32 h-40 bg-spixi dark:bg-[#1F2937] text-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-spixi/50 relative">
                             <div class="font-bold text-center p-2">{{ t('pages.howitworks.architecture.host') }}</div>
                        </div>
                     </div>

                     <!-- Connection -->
                     <div class="h-10 w-0.5 md:h-0.5 md:w-16 bg-accent/50 relative">
                        <div class="absolute inset-0 bg-accent animate-pulse"></div>
                     </div>

                     <!-- Bridge/SDK -->
                      <div class="flex flex-col items-center gap-4">
                        <div class="px-6 py-3 bg-accent text-white rounded-xl font-mono text-sm shadow-lg shadow-accent/20">
                             {{ t('pages.howitworks.architecture.bridge') }}
                        </div>
                     </div>

                     <!-- Connection -->
                     <div class="h-10 w-0.5 md:h-0.5 md:w-16 bg-accent/50 relative">
                        <div class="absolute inset-0 bg-accent animate-pulse delay-75"></div>
                     </div>

                     <!-- Mini App -->
                      <div class="flex flex-col items-center gap-4">
                        <div class="w-32 h-40 bg-white dark:bg-black border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center p-2 shadow-sm relative">
                             <div class="text-4xl mb-2">🚀</div>
                             <div class="font-bold text-center text-sm dark:text-white">{{ t('pages.howitworks.architecture.miniapp') }}</div>
                             <div class="text-xs text-gray-500 mt-1">HTML/JS</div>
                        </div>
                     </div>

                     <!-- Network Link -->
                     <div class="h-16 w-0.5 md:h-0.5 md:w-24 border-t-2 border-dashed border-gray-400 dark:border-gray-600 relative flex justify-center">
                        <span class="bg-gray-100 dark:bg-[#1B232B] px-2 text-xs text-gray-500 absolute -top-2.5">P2P</span>
                     </div>
                    
                     <!-- Network -->
                      <div class="flex flex-col items-center gap-4">
                        <div class="w-24 h-24 rounded-full border-2 border-accent/30 flex items-center justify-center relative">
                            <div class="absolute inset-0 rounded-full border border-accent/10 animate-ping"></div>
                             <div class="text-center font-bold text-accent text-sm p-2">{{ t('pages.howitworks.architecture.network') }}</div>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <h2 class="text-3xl md:text-5xl font-lexend text-black dark:text-spixi-dark py-4 mt-10 text-center" id="faq">
            {{ t('pages.howitworks.faq.title') }}
        </h2>

        <div class="w-full flex justify-center mb-20">
            <div class="w-full md:w-9/12">
                <Faq
                    v-for = "i in 10"
                    :key = "i"
                    :id = "`faq${i}`"
                    :question = "t(`pages.howitworks.faq.q${i}`)"
                    :answer = "t(`pages.howitworks.faq.a${i}`) ? t(`pages.howitworks.faq.a${i}`) : undefined"
                />
            </div>
        </div>

        <SpixiSummary />

    </div>
</template>