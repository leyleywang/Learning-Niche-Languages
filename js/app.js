// 小众语种学习平台应用
(function() {
    'use strict';

    // 数据存储
    const appData = {
        // 活动数据
        events: [
            {
                id: 1,
                title: '挪威语文化体验沙龙',
                language: '挪威语',
                description: '探索挪威的神秘北极光文化，学习基础问候语，品尝传统挪威美食。这是一个了解北欧文化的绝佳机会！',
                date: '2026-05-15',
                time: '19:00',
                participants: 12,
                maxParticipants: 20,
                status: 'upcoming',
                location: '上海市静安区南京西路1266号'
            },
            {
                id: 2,
                title: '捷克语啤酒文化之旅',
                language: '捷克语',
                description: '了解捷克啤酒文化，学习日常对话用语，体验正宗捷克啤酒品鉴。捷克是啤酒的故乡，不容错过！',
                date: '2026-05-20',
                time: '18:30',
                participants: 8,
                maxParticipants: 15,
                status: 'upcoming',
                location: '北京市朝阳区三里屯路19号'
            },
            {
                id: 3,
                title: '希伯来语圣经文化分享会',
                language: '希伯来语',
                description: '深入了解希伯来语的历史与文化，学习基础字母和发音，探索古老文明的语言魅力。',
                date: '2026-05-10',
                time: '14:00',
                participants: 15,
                maxParticipants: 15,
                status: 'ended',
                location: '深圳市南山区科技园路8号'
            },
            {
                id: 4,
                title: '冰岛语极光故事分享',
                language: '冰岛语',
                description: '聆听冰岛语母语者讲述极光传说，学习冰岛语基础词汇，感受北极圈的独特文化。',
                date: '2026-05-25',
                time: '20:00',
                participants: 6,
                maxParticipants: 12,
                status: 'upcoming',
                location: '广州市天河区珠江新城'
            },
            {
                id: 5,
                title: '芬兰语桑拿文化体验',
                language: '芬兰语',
                description: '了解芬兰桑拿文化，学习芬兰语日常用语，体验正宗芬兰桑拿浴的放松之旅。',
                date: '2026-05-08',
                time: '15:00',
                participants: 10,
                maxParticipants: 10,
                status: 'ended',
                location: '杭州市西湖区文三路'
            }
        ],

        // 语种数据
        languages: [
            {
                id: 'norwegian',
                name: '挪威语',
                learners: 1234,
                icon: '🇳🇴',
                courses: [
                    {
                        id: 1,
                        title: '基础发音入门',
                        level: '入门级',
                        description: '学习挪威语29个字母的发音规则，掌握基础音节拼读。',
                        progress: 75
                    },
                    {
                        id: 2,
                        title: '日常对话常用语',
                        level: '初级',
                        description: '学习问候、购物、问路等日常场景的常用表达。',
                        progress: 40
                    },
                    {
                        id: 3,
                        title: '北欧文化背景',
                        level: '文化',
                        description: '了解挪威的历史、地理、社会文化背景知识。',
                        progress: 10
                    }
                ],
                exercises: {
                    listening: 15,
                    speaking: 12,
                    writing: 10
                },
                plan: [
                    {
                        week: '第一周',
                        status: 'completed',
                        days: [
                            { name: '周一', task: '字母发音A-E', completed: true },
                            { name: '周二', task: '字母发音F-J', completed: true },
                            { name: '周三', task: '字母发音K-O', completed: true },
                            { name: '周四', task: '字母发音P-T', completed: true },
                            { name: '周五', task: '字母发音U-Z', completed: true },
                            { name: '周六', task: '复习所有字母', completed: true },
                            { name: '周日', task: '发音测试', completed: true }
                        ]
                    },
                    {
                        week: '第二周',
                        status: 'current',
                        days: [
                            { name: '周一', task: '问候语学习', completed: true },
                            { name: '周二', task: '自我介绍', completed: true },
                            { name: '周三', task: '数字表达', completed: false },
                            { name: '周四', task: '时间表达', completed: false },
                            { name: '周五', task: '购物用语', completed: false },
                            { name: '周六', task: '场景练习', completed: false },
                            { name: '周日', task: '综合测试', completed: false }
                        ]
                    },
                    {
                        week: '第三周',
                        status: 'upcoming',
                        days: [
                            { name: '周一', task: '问路用语', completed: false },
                            { name: '周二', task: '餐厅用语', completed: false },
                            { name: '周三', task: '酒店用语', completed: false },
                            { name: '周四', task: '交通用语', completed: false },
                            { name: '周五', task: '紧急用语', completed: false },
                            { name: '周六', task: '场景模拟', completed: false },
                            { name: '周日', task: '最终测试', completed: false }
                        ]
                    }
                ]
            },
            {
                id: 'czech',
                name: '捷克语',
                learners: 856,
                icon: '🇨🇿',
                courses: [
                    {
                        id: 1,
                        title: '捷克语发音基础',
                        level: '入门级',
                        description: '学习捷克语特殊发音规则，掌握重音和语调。',
                        progress: 60
                    },
                    {
                        id: 2,
                        title: '啤酒文化用语',
                        level: '主题',
                        description: '学习与啤酒相关的专业词汇和表达。',
                        progress: 30
                    }
                ],
                exercises: {
                    listening: 10,
                    speaking: 8,
                    writing: 6
                },
                plan: [
                    {
                        week: '第一周',
                        status: 'completed',
                        days: [
                            { name: '周一', task: '基础发音', completed: true },
                            { name: '周二', task: '特殊字母', completed: true },
                            { name: '周三', task: '重音规则', completed: true },
                            { name: '周四', task: '语调练习', completed: true },
                            { name: '周五', task: '词汇积累', completed: true },
                            { name: '周六', task: '复习', completed: true },
                            { name: '周日', task: '测试', completed: true }
                        ]
                    },
                    {
                        week: '第二周',
                        status: 'current',
                        days: [
                            { name: '周一', task: '啤酒词汇', completed: true },
                            { name: '周二', task: '酒吧用语', completed: false },
                            { name: '周三', task: '品酒表达', completed: false },
                            { name: '周四', task: '文化背景', completed: false },
                            { name: '周五', task: '场景练习', completed: false },
                            { name: '周六', task: '模拟对话', completed: false },
                            { name: '周日', task: '综合测试', completed: false }
                        ]
                    }
                ]
            },
            {
                id: 'hebrew',
                name: '希伯来语',
                learners: 678,
                icon: '🇮🇱',
                courses: [
                    {
                        id: 1,
                        title: '希伯来语字母入门',
                        level: '入门级',
                        description: '学习22个希伯来语字母，掌握从右到左的书写规则。',
                        progress: 45
                    },
                    {
                        id: 2,
                        title: '圣经希伯来语基础',
                        level: '初级',
                        description: '学习圣经中的常用词汇和句式。',
                        progress: 15
                    }
                ],
                exercises: {
                    listening: 12,
                    speaking: 9,
                    writing: 15
                },
                plan: [
                    {
                        week: '第一周',
                        status: 'completed',
                        days: [
                            { name: '周一', task: '字母表学习', completed: true },
                            { name: '周二', task: '书写规则', completed: true },
                            { name: '周三', task: '发音练习', completed: true },
                            { name: '周四', task: '词汇入门', completed: true },
                            { name: '周五', task: '简单句子', completed: true },
                            { name: '周六', task: '复习', completed: true },
                            { name: '周日', task: '测试', completed: true }
                        ]
                    },
                    {
                        week: '第二周',
                        status: 'current',
                        days: [
                            { name: '周一', task: '圣经词汇', completed: true },
                            { name: '周二', task: '句式结构', completed: true },
                            { name: '周三', task: '篇章阅读', completed: false },
                            { name: '周四', task: '文化背景', completed: false },
                            { name: '周五', task: '朗读练习', completed: false },
                            { name: '周六', task: '综合练习', completed: false },
                            { name: '周日', task: '测试', completed: false }
                        ]
                    }
                ]
            },
            {
                id: 'icelandic',
                name: '冰岛语',
                learners: 432,
                icon: '🇮🇸',
                courses: [
                    {
                        id: 1,
                        title: '冰岛语发音基础',
                        level: '入门级',
                        description: '学习冰岛语特殊发音，掌握古诺斯语的现代变体。',
                        progress: 30
                    }
                ],
                exercises: {
                    listening: 8,
                    speaking: 6,
                    writing: 5
                },
                plan: [
                    {
                        week: '第一周',
                        status: 'current',
                        days: [
                            { name: '周一', task: '发音入门', completed: true },
                            { name: '周二', task: '特殊发音', completed: true },
                            { name: '周三', task: '词汇积累', completed: false },
                            { name: '周四', task: '简单对话', completed: false },
                            { name: '周五', task: '文化学习', completed: false },
                            { name: '周六', task: '复习', completed: false },
                            { name: '周日', task: '测试', completed: false }
                        ]
                    }
                ]
            }
        ],

        // 母语者数据
        nativeSpeakers: [
            {
                id: 1,
                name: 'Erik',
                language: '挪威语',
                rating: 4.9,
                topics: ['daily', 'culture'],
                online: true
            },
            {
                id: 2,
                name: 'Marie',
                language: '捷克语',
                rating: 4.8,
                topics: ['daily', 'work'],
                online: true
            },
            {
                id: 3,
                name: 'David',
                language: '希伯来语',
                rating: 4.7,
                topics: ['culture', 'daily'],
                online: false
            },
            {
                id: 4,
                name: 'Sofia',
                language: '冰岛语',
                rating: 4.9,
                topics: ['daily', 'culture'],
                online: true
            }
        ],

        // 学习进度数据
        learningProgress: [
            { language: '挪威语', progress: 65 },
            { language: '捷克语', progress: 40 },
            { language: '希伯来语', progress: 25 }
        ],

        // 交流记录
        chatHistory: [
            {
                id: 1,
                speaker: 'Erik',
                language: '挪威语',
                lastMessage: '今天的对话很愉快，下次继续练习发音！',
                time: '昨天',
                unread: 0
            },
            {
                id: 2,
                speaker: 'Marie',
                language: '捷克语',
                lastMessage: '啤酒相关的词汇我已经发给你了，记得复习哦。',
                time: '3天前',
                unread: 1
            },
            {
                id: 3,
                speaker: 'Sofia',
                language: '冰岛语',
                lastMessage: '极光的故事很神奇吧？下次我给你讲更多冰岛传说。',
                time: '一周前',
                unread: 0
            }
        ],

        // 学习资料
        materials: {
            textbooks: [
                { id: 1, title: '挪威语基础教程（上）', size: '12.5 MB', downloaded: true },
                { id: 2, title: '捷克语入门词汇手册', size: '8.2 MB', downloaded: false },
                { id: 3, title: '希伯来语字母书写指南', size: '5.6 MB', downloaded: true }
            ],
            audio: [
                { id: 1, title: '挪威语日常对话音频', size: '45.2 MB', downloaded: false },
                { id: 2, title: '捷克语发音练习', size: '28.5 MB', downloaded: true },
                { id: 3, title: '希伯来语圣经朗读', size: '62.1 MB', downloaded: false }
            ],
            culture: [
                { id: 1, title: '北欧神话与文化', size: '18.3 MB', downloaded: false },
                { id: 2, title: '捷克啤酒文化史', size: '15.7 MB', downloaded: true },
                { id: 3, title: '以色列历史文化概览', size: '22.4 MB', downloaded: false }
            ]
        },

        // 学习提醒
        reminders: [
            {
                id: 1,
                title: '挪威语学习',
                time: '每天 20:00',
                enabled: true
            },
            {
                id: 2,
                title: '复习捷克语词汇',
                time: '每周三、六 19:30',
                enabled: true
            },
            {
                id: 3,
                title: '与Erik对话练习',
                time: '每周日 21:00',
                enabled: false
            }
        ],

        // 聊天消息
        chatMessages: [
            { sender: 'user', text: 'Hei! Hvordan har du det?', translation: '你好！你好吗？', time: '20:30' },
            { sender: 'partner', text: 'Hei! Jeg har det bra, takk. Og du?', translation: '你好！我很好，谢谢。你呢？', time: '20:31' },
            { sender: 'user', text: 'Jeg har det også bra!', translation: '我也很好！', time: '20:32' }
        ]
    };

    // 当前状态
    let currentState = {
        currentPage: 'home',
        selectedLanguage: null,
        currentFilter: 'all',
        currentTopic: 'daily',
        currentMaterialTab: 'textbooks',
        translationEnabled: true
    };

    // DOM元素
    const elements = {
        navItems: document.querySelectorAll('.nav-item'),
        pages: document.querySelectorAll('.page'),
        filterTabs: document.querySelectorAll('.filter-tab'),
        languageCards: document.querySelector('.language-cards'),
        learningTabs: document.querySelectorAll('.learning-tab'),
        topicButtons: document.querySelectorAll('.topic-btn'),
        materialTabs: document.querySelectorAll('.material-tab'),
        modal: document.getElementById('modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        closeModal: document.getElementById('close-modal'),
        translationToggle: document.getElementById('translation-toggle'),
        messageInput: document.getElementById('message-input'),
        sendBtn: document.getElementById('send-btn'),
        chatInterface: document.querySelector('.chat-interface'),
        speakersList: document.querySelector('.speakers-list')
    };

    // 初始化应用
    function init() {
        renderEvents();
        renderLanguages();
        renderNativeSpeakers();
        renderLearningProgress();
        renderChatHistory();
        renderMaterials();
        renderReminders();
        bindEvents();
    }

    // 绑定事件
    function bindEvents() {
        // 导航切换
        elements.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                navigateTo(page);
            });
        });

        // 活动筛选
        elements.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.dataset.filter;
                filterEvents(filter);
            });
        });

        // 学习标签切换
        elements.learningTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                switchLearningTab(tabName);
            });
        });

        // 主题按钮切换
        elements.topicButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const topic = btn.dataset.topic;
                switchTopic(topic);
            });
        });

        // 资料标签切换
        elements.materialTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const material = tab.dataset.material;
                switchMaterialTab(material);
            });
        });

        // 模态框关闭
        elements.closeModal.addEventListener('click', closeModalWindow);
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) {
                closeModalWindow();
            }
        });

        // 翻译切换
        if (elements.translationToggle) {
            elements.translationToggle.addEventListener('change', (e) => {
                currentState.translationEnabled = e.target.checked;
                renderChatMessages();
            });
        }

        // 发送消息
        if (elements.sendBtn) {
            elements.sendBtn.addEventListener('click', sendMessage);
        }
        if (elements.messageInput) {
            elements.messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }

    // 页面导航
    function navigateTo(page) {
        currentState.currentPage = page;

        // 更新导航状态
        elements.navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        // 更新页面显示
        elements.pages.forEach(p => {
            p.classList.toggle('active', p.id === `${page}-page`);
        });
    }

    // 渲染活动列表
    function renderEvents() {
        const eventsList = document.querySelector('.events-list');
        if (!eventsList) return;

        let filteredEvents = appData.events;
        if (currentState.currentFilter !== 'all') {
            filteredEvents = appData.events.filter(e => e.status === currentState.currentFilter);
        }

        eventsList.innerHTML = filteredEvents.map(event => `
            <div class="event-card ${event.status}" data-event-id="${event.id}">
                <div class="event-image">
                    <span class="event-status ${event.status}">
                        ${event.status === 'upcoming' ? '未开始' : '已结束'}
                    </span>
                </div>
                <div class="event-content">
                    <span class="event-language">${event.language}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <div class="event-meta">
                        <span class="event-date">📅 ${event.date} ${event.time}</span>
                        <span class="event-participants">👥 ${event.participants}/${event.maxParticipants}人</span>
                    </div>
                    <div class="event-actions">
                        <button class="btn btn-secondary" onclick="viewEventDetail(${event.id})">查看详情</button>
                        ${event.status === 'upcoming' && event.participants < event.maxParticipants ? 
                            `<button class="btn btn-primary" onclick="registerEvent(${event.id})">立即报名</button>` :
                            `<button class="btn btn-primary" disabled>名额已满</button>`
                        }
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 筛选活动
    function filterEvents(filter) {
        currentState.currentFilter = filter;

        elements.filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filter);
        });

        renderEvents();
    }

    // 查看活动详情
    function viewEventDetail(eventId) {
        const event = appData.events.find(e => e.id === eventId);
        if (!event) return;

        elements.modalTitle.textContent = '活动详情';
        elements.modalBody.innerHTML = `
            <div class="event-detail-image"></div>
            <h3 class="event-detail-title">${event.title}</h3>
            <div class="event-detail-meta">
                <span class="event-detail-tag">${event.language}</span>
                <span class="event-detail-tag">${event.date} ${event.time}</span>
                <span class="event-detail-tag">📍 ${event.location}</span>
            </div>
            <p class="event-detail-description">${event.description}</p>
            <div class="event-detail-participants">
                <h4>已报名 (${event.participants}/${event.maxParticipants})</h4>
                <div class="participants-avatars">
                    ${Array(Math.min(event.participants, 5)).fill().map((_, i) => 
                        `<div class="participant-avatar" style="background-color: ${getRandomColor(i)};"></div>`
                    ).join('')}
                    ${event.participants > 5 ? `<div class="participant-avatar" style="background-color: var(--memphis-gray); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">+${event.participants - 5}</div>` : ''}
                </div>
            </div>
            <div class="event-detail-actions">
                ${event.status === 'upcoming' && event.participants < event.maxParticipants ? 
                    `<button class="btn btn-primary" onclick="registerEvent(${event.id}); closeModalWindow();">立即报名</button>` :
                    `<button class="btn btn-primary" disabled>名额已满</button>`
                }
                <button class="btn btn-secondary" onclick="closeModalWindow()">关闭</button>
            </div>
        `;

        elements.modal.style.display = 'flex';
    }

    // 报名活动
    function registerEvent(eventId) {
        const event = appData.events.find(e => e.id === eventId);
        if (event && event.participants < event.maxParticipants) {
            event.participants++;
            renderEvents();
            alert('报名成功！我们会通过短信通知您活动详情。');
        }
    }

    // 关闭模态框
    function closeModalWindow() {
        elements.modal.style.display = 'none';
    }

    // 获取随机颜色
    function getRandomColor(index) {
        const colors = ['#B56BFF', '#FF6B9D', '#6BA3FF', '#FF9F6B', '#6BFF8E'];
        return colors[index % colors.length];
    }

    // 渲染语种列表
    function renderLanguages() {
        if (!elements.languageCards) return;

        elements.languageCards.innerHTML = appData.languages.map(lang => `
            <div class="language-card ${currentState.selectedLanguage === lang.id ? 'selected' : ''}" 
                 onclick="selectLanguage('${lang.id}')">
                <div class="language-icon" style="background-color: ${getLanguageColor(lang.id)};">
                    ${lang.icon}
                </div>
                <h4 class="language-name">${lang.name}</h4>
                <p class="language-learners">${lang.learners} 人在学</p>
            </div>
        `).join('');
    }

    // 获取语种颜色
    function getLanguageColor(langId) {
        const colors = {
            norwegian: '#6BA3FF',
            czech: '#FF6B9D',
            hebrew: '#FFE156',
            icelandic: '#6BFF8E'
        };
        return colors[langId] || '#6BA3FF';
    }

    // 选择语种
    function selectLanguage(langId) {
        currentState.selectedLanguage = langId;
        renderLanguages();
        
        const learningContent = document.querySelector('.learning-content');
        if (learningContent) {
            learningContent.style.display = 'block';
        }

        renderCourses();
        renderExercises();
        renderLearningPlan();
    }

    // 切换学习标签
    function switchLearningTab(tabName) {
        elements.learningTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        const tabPanels = document.querySelectorAll('.tab-panel');
        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName}-tab`);
        });
    }

    // 渲染课程
    function renderCourses() {
        const lang = appData.languages.find(l => l.id === currentState.selectedLanguage);
        if (!lang) return;

        const coursesList = document.querySelector('.courses-list');
        if (!coursesList) return;

        coursesList.innerHTML = lang.courses.map(course => `
            <div class="course-card">
                <div class="course-header">
                    <h4 class="course-title">${course.title}</h4>
                    <span class="course-level">${course.level}</span>
                </div>
                <p class="course-description">${course.description}</p>
                <div class="course-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%;"></div>
                    </div>
                    <span class="progress-text">${course.progress}%</span>
                </div>
            </div>
        `).join('');
    }

    // 渲染练习
    function renderExercises() {
        const lang = appData.languages.find(l => l.id === currentState.selectedLanguage);
        if (!lang) return;

        const exercisesGrid = document.querySelector('.exercises-grid');
        if (!exercisesGrid) return;

        const exerciseTypes = [
            { type: 'listening', label: '听力练习', count: lang.exercises.listening },
            { type: 'speaking', label: '口语练习', count: lang.exercises.speaking },
            { type: 'writing', label: '写作练习', count: lang.exercises.writing }
        ];

        exercisesGrid.innerHTML = exerciseTypes.map(exercise => `
            <div class="exercise-card" onclick="startExercise('${exercise.type}')">
                <div class="exercise-icon ${exercise.type}"></div>
                <h4 class="exercise-title">${exercise.label}</h4>
                <p class="exercise-count">${exercise.count} 个练习</p>
            </div>
        `).join('');
    }

    // 开始练习
    function startExercise(type) {
        alert(`开始${type === 'listening' ? '听力' : type === 'speaking' ? '口语' : '写作'}练习！`);
    }

    // 渲染学习计划
    function renderLearningPlan() {
        const lang = appData.languages.find(l => l.id === currentState.selectedLanguage);
        if (!lang) return;

        const learningPlan = document.querySelector('.learning-plan');
        if (!learningPlan) return;

        learningPlan.innerHTML = lang.plan.map(week => `
            <div class="plan-week">
                <div class="plan-week-header">
                    <h4 class="plan-week-title">${week.week}</h4>
                    <span class="plan-week-status ${week.status}">
                        ${week.status === 'completed' ? '已完成' : week.status === 'current' ? '进行中' : '未开始'}
                    </span>
                </div>
                <div class="plan-days">
                    ${week.days.map(day => `
                        <div class="plan-day ${day.completed ? 'completed' : ''}">
                            <span class="plan-day-name">${day.name}</span>
                            <span class="plan-day-task">${day.task}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // 渲染母语者列表
    function renderNativeSpeakers() {
        if (!elements.speakersList) return;

        const filteredSpeakers = appData.nativeSpeakers.filter(speaker => 
            speaker.topics.includes(currentState.currentTopic)
        );

        elements.speakersList.innerHTML = filteredSpeakers.map(speaker => `
            <div class="speaker-card" onclick="startChat(${speaker.id})">
                <div class="speaker-avatar" style="background-color: ${getRandomColor(speaker.id)};"></div>
                <div class="speaker-info">
                    <h4 class="speaker-name">${speaker.name}</h4>
                    <p class="speaker-language">${speaker.language} 母语者</p>
                    <p class="speaker-rating">${speaker.rating}</p>
                </div>
            </div>
        `).join('');
    }

    // 切换主题
    function switchTopic(topic) {
        currentState.currentTopic = topic;

        elements.topicButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.topic === topic);
        });

        renderNativeSpeakers();
    }

    // 开始聊天
    function startChat(speakerId) {
        const speaker = appData.nativeSpeakers.find(s => s.id === speakerId);
        if (!speaker) return;

        // 更新聊天界面头部
        const partnerName = document.querySelector('.partner-info h4');
        if (partnerName) partnerName.textContent = speaker.name;

        // 显示聊天界面
        if (elements.chatInterface) {
            elements.chatInterface.style.display = 'flex';
        }

        // 渲染聊天消息
        renderChatMessages();
    }

    // 渲染聊天消息
    function renderChatMessages() {
        const chatMessages = document.querySelector('.chat-messages');
        if (!chatMessages) return;

        chatMessages.innerHTML = appData.chatMessages.map(msg => `
            <div class="message ${msg.sender}">
                <div class="message-text">${msg.text}</div>
                ${currentState.translationEnabled && msg.translation ? 
                    `<div class="message-translation">${msg.translation}</div>` : ''
                }
                <div class="message-time">${msg.time}</div>
            </div>
        `).join('');

        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 发送消息
    function sendMessage() {
        const input = elements.messageInput;
        if (!input || !input.value.trim()) return;

        const text = input.value.trim();
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

        // 添加用户消息
        appData.chatMessages.push({
            sender: 'user',
            text: text,
            translation: '（这是一条测试消息）',
            time: time
        });

        // 清空输入框
        input.value = '';

        // 渲染消息
        renderChatMessages();

        // 模拟对方回复
        setTimeout(() => {
            const replies = [
                'Jeg forstår! (我明白了！)',
                'Bra! (很好！)',
                'Kan du si det igjen? (你能再说一遍吗？)',
                'Takk for meldingen! (谢谢你的消息！)'
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const replyTime = new Date();
            const replyTimeStr = `${replyTime.getHours()}:${replyTime.getMinutes().toString().padStart(2, '0')}`;

            appData.chatMessages.push({
                sender: 'partner',
                text: randomReply,
                translation: randomReply.includes('Jeg forstår') ? '我明白了！' : 
                            randomReply.includes('Bra') ? '很好！' :
                            randomReply.includes('Kan du si') ? '你能再说一遍吗？' :
                            '谢谢你的消息！',
                time: replyTimeStr
            });

            renderChatMessages();
        }, 1500);
    }

    // 渲染学习进度
    function renderLearningProgress() {
        const progressList = document.querySelector('.progress-list');
        if (!progressList) return;

        progressList.innerHTML = appData.learningProgress.map(item => `
            <div class="progress-item">
                <div class="progress-item-header">
                    <span class="progress-item-language">${item.language}</span>
                    <span class="progress-item-percent">${item.progress}%</span>
                </div>
                <div class="progress-item-bar">
                    <div class="progress-item-fill" style="width: ${item.progress}%;"></div>
                </div>
            </div>
        `).join('');
    }

    // 渲染交流记录
    function renderChatHistory() {
        const historyList = document.querySelector('.history-list');
        if (!historyList) return;

        historyList.innerHTML = appData.chatHistory.map(chat => `
            <div class="history-item">
                <div class="history-avatar" style="background-color: ${getRandomColor(chat.id)};"></div>
                <div class="history-info">
                    <h4 class="history-name">${chat.speaker} (${chat.language})</h4>
                    <p class="history-preview">${chat.lastMessage}</p>
                </div>
                <div class="history-meta">
                    <span class="history-time">${chat.time}</span>
                    ${chat.unread > 0 ? `<span class="badge">${chat.unread}</span>` : ''}
                </div>
            </div>
        `).join('');
    }

    // 切换资料标签
    function switchMaterialTab(material) {
        currentState.currentMaterialTab = material;

        elements.materialTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.material === material);
        });

        renderMaterials();
    }

    // 渲染学习资料
    function renderMaterials() {
        const materialsContent = document.querySelector('.materials-content');
        if (!materialsContent) return;

        const materials = appData.materials[currentState.currentMaterialTab];
        if (!materials) return;

        materialsContent.innerHTML = materials.map(material => `
            <div class="material-item">
                <div class="material-info">
                    <h4 class="material-title">${material.title}</h4>
                    <p class="material-size">${material.size}</p>
                </div>
                <div class="material-actions">
                    <button class="material-btn ${material.downloaded ? 'downloaded' : ''}" 
                            onclick="downloadMaterial(${material.id}, '${currentState.currentMaterialTab}')">
                        ${material.downloaded ? '已下载' : '下载'}
                    </button>
                </div>
            </div>
        `).join('');
    }

    // 下载资料
    function downloadMaterial(materialId, materialType) {
        const materials = appData.materials[materialType];
        const material = materials.find(m => m.id === materialId);
        
        if (material && !material.downloaded) {
            material.downloaded = true;
            alert('下载开始！');
            renderMaterials();
        } else if (material && material.downloaded) {
            alert('该资料已下载，可离线查看。');
        }
    }

    // 渲染学习提醒
    function renderReminders() {
        const remindersList = document.querySelector('.reminders-list');
        if (!remindersList) return;

        remindersList.innerHTML = appData.reminders.map(reminder => `
            <div class="reminder-item">
                <div class="reminder-info">
                    <div class="reminder-icon"></div>
                    <div class="reminder-text">
                        <h4>${reminder.title}</h4>
                        <p>${reminder.time}</p>
                    </div>
                </div>
                <label class="reminder-toggle">
                    <input type="checkbox" ${reminder.enabled ? 'checked' : ''} 
                           onchange="toggleReminder(${reminder.id})">
                    <span class="reminder-slider"></span>
                </label>
            </div>
        `).join('');
    }

    // 切换提醒
    function toggleReminder(reminderId) {
        const reminder = appData.reminders.find(r => r.id === reminderId);
        if (reminder) {
            reminder.enabled = !reminder.enabled;
        }
    }

    // 暴露全局函数
    window.viewEventDetail = viewEventDetail;
    window.registerEvent = registerEvent;
    window.closeModalWindow = closeModalWindow;
    window.selectLanguage = selectLanguage;
    window.startExercise = startExercise;
    window.startChat = startChat;
    window.downloadMaterial = downloadMaterial;
    window.toggleReminder = toggleReminder;

    // 初始化
    document.addEventListener('DOMContentLoaded', init);

})();
