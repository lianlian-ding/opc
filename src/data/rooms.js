export const rooms = [
  {
    id: "kitchenRoom",
    title: "Kitchen Studio",
    label: "厨房",
    subtitle: "生活兴趣、做饭、创意能量",
    mapHint: "把日常灵感做成可分享的味道",
    accentColor: "#ff8a5b",
    secondaryColor: "#ffd66b",
    asset: "/assets/world/kitchen.png",
    position: {
      left: "60%",
      top: "48%",
      width: "15.5%",
      zIndex: 8,
    },
    items: [
      {
        title: "Seasonal menu",
        meta: "Life note",
        body: "记录料理、器物和餐桌上的小创意，给工作之外保留一块高能量区域。",
      },
      {
        title: "Creative refill",
        meta: "Habit",
        body: "把做饭当成低压的创作练习，用节奏、配色和味道训练感知力。",
      },
      {
        title: "Taste board",
        meta: "Collection",
        body: "后续可放食谱、照片、城市小店和灵感清单。",
      },
    ],
  },
  {
    id: "workRoom",
    title: "AI Workshop",
    label: "工作区",
    subtitle: "AI 工具、工作流、项目展示、运营方法",
    mapHint: "从想法到工具，把复杂流程做成系统",
    accentColor: "#4f7cff",
    secondaryColor: "#61d6c5",
    asset: "/assets/world/work.png",
    position: {
      left: "79%",
      top: "61%",
      width: "16.5%",
      zIndex: 9,
    },
    items: [
      {
        title: "AI operating table",
        meta: "Workflow",
        body: "沉淀从需求拆解、数据验证、页面构建到复盘的 AI 协作流程。",
      },
      {
        title: "Project shelf",
        meta: "Portfolio",
        body: "后续放可公开的项目案例、工具页面和关键结果。",
      },
      {
        title: "Method cards",
        meta: "System",
        body: "把运营方法、自动化脚本和知识库整理成可复用模块。",
      },
    ],
  },
  {
    id: "gymRoom",
    title: "Momentum Court",
    label: "运动场",
    subtitle: "运动、成长、自我管理",
    mapHint: "持续训练，管理节奏、体能和状态",
    accentColor: "#39bd83",
    secondaryColor: "#ffcf54",
    asset: "/assets/world/gym.png",
    position: {
      left: "73%",
      top: "29%",
      width: "15%",
      zIndex: 5,
    },
    items: [
      {
        title: "Training loop",
        meta: "Routine",
        body: "记录运动、拉伸、恢复和长期自我管理的节奏。",
      },
      {
        title: "Growth metrics",
        meta: "Tracker",
        body: "后续可接入跑步、健身、习惯和年度挑战记录。",
      },
      {
        title: "Energy rules",
        meta: "Principle",
        body: "用可坚持的策略提升状态，而不是靠短期爆发。",
      },
    ],
  },
  {
    id: "relaxRoom",
    title: "After-Hours Arcade",
    label: "休闲区",
    subtitle: "兴趣、灵感、个人记录",
    mapHint: "收纳好奇心、娱乐和轻松时刻",
    accentColor: "#a86bff",
    secondaryColor: "#ff79b6",
    asset: "/assets/world/relax.png",
    position: {
      left: "32%",
      top: "46%",
      width: "16%",
      zIndex: 7,
    },
    items: [
      {
        title: "Inspiration cabinet",
        meta: "Archive",
        body: "放电影、游戏、展览、播客和临时冒出来的灵感片段。",
      },
      {
        title: "Mood console",
        meta: "Record",
        body: "保留一个不追求效率的区域，让个人主页更像真实的人。",
      },
      {
        title: "Tiny quests",
        meta: "Play",
        body: "后续可以加入小彩蛋、收集物和访客探索进度。",
      },
    ],
  },
  {
    id: "libraryRoom",
    title: "Archive Library",
    label: "资料馆",
    subtitle: "Blog、Notes、思考沉淀",
    mapHint: "把长期思考整理成可探索的档案",
    accentColor: "#c88642",
    secondaryColor: "#7bd66f",
    asset: "/assets/world/library.png",
    position: {
      left: "50%",
      top: "24%",
      width: "14.5%",
      zIndex: 4,
    },
    items: [
      {
        title: "Blog stacks",
        meta: "Writing",
        body: "后续承载文章、观点、项目复盘和公开笔记。",
      },
      {
        title: "Knowledge map",
        meta: "Notes",
        body: "把零散材料整理成主题地图，访客可以按线索继续探索。",
      },
      {
        title: "Reading desk",
        meta: "Thinking",
        body: "沉淀方法论、阅读摘要和阶段性判断。",
      },
    ],
  },
];

export const getRoomById = (roomId) =>
  rooms.find((room) => room.id === roomId) ?? rooms[0];
