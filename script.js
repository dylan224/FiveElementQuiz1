// 问卷数据
const questions = [
  {
    question: "面对一项复杂任务时，你通常会：",
    options: [
      "A. 拆解步骤，制定清晰的计划表。",
      "B. 直接动手尝试，边做边调整方法。",
      "C. 先询问他人的经验和建议。",
      "D. 兴奋地接受挑战，享受解决问题的过程。",
      "E. 反复确认细节，确保万无一失。"
    ]
  },
  {
    question: "在团队中，你最希望自己扮演的角色是？",
    options: [
      "A. 规则制定者，确保流程高效。",
      "B. 创意发起人，提出新点子。",
      "C. 协调者，化解成员间的矛盾。",
      "D. 行动派，带领大家快速推进。",
      "E. 执行者，踏实完成分配的任务。"
    ]
  },
  {
    question: "压力巨大时，你的反应是？",
    options: [
      "A. 冷静分析压力来源并逐一解决。",
      "B. 转移注意力，用乐观心态面对。",
      "C. 找朋友聊天或寻求安慰。",
      "D. 通过高强度工作释放压力。",
      "E. 默默忍耐，等待压力自然消退。"
    ]
  },
  {
    question: "你对“冒险尝试”的态度是？",
    options: [
      "A. 风险必须可控，否则绝不尝试。",
      "B. 冒险是发现新机会的最佳方式。",
      "C. 如果团队支持，可以考虑尝试。",
      "D. 越刺激的冒险越令人兴奋！",
      "E. 只选择有成功先例的稳妥方案。"
    ]
  },
  {
    question: "学习新知识时，你更倾向于？",
    options: [
      "A. 系统学习教材，按章节掌握。",
      "B. 跳出框架，用独特方法理解。",
      "C. 与他人讨论，互相启发。",
      "D. 快速实践，通过试错学习。",
      "E. 反复练习直到完全熟练。"
    ]
  },
  {
    question: "面对人际冲突，你的解决方式是？",
    options: [
      "A. 理性分析对错，提出解决方案。",
      "B. 用幽默或创意化解紧张氛围。",
      "C. 倾听双方需求，寻找折中方案。",
      "D. 直接表达立场，争取他人支持。",
      "E. 暂时回避，避免矛盾激化。"
    ]
  },
  {
    question: "你如何规划未来三个月的重要目标？",
    options: [
      "A. 制定每日任务清单并严格执行。",
      "B. 保留灵活性，随时调整方向。",
      "C. 根据亲友建议动态修正计划。",
      "D. 全情投入，优先做最感兴趣的事。",
      "E. 按固定节奏推进，拒绝临时变动。"
    ]
  },
  {
    question: "在陌生社交场合中，你通常会？",
    options: [
      "A. 观察他人行为后再决定如何融入。",
      "B. 主动结识新朋友，分享有趣话题。",
      "C. 加入小群体聊天，避免单独行动。",
      "D. 迅速成为话题中心，吸引注意力。",
      "E. 保持低调，只与熟悉的人交流。"
    ]
  },
  {
    question: "你更认同以下哪种时间管理方式？",
    options: [
      "A. 严格按日程表分配每一分钟。",
      "B. 根据灵感随时切换任务。",
      "C. 配合团队节奏调整个人计划。",
      "D. 集中精力完成最热衷的事情。",
      "E. 固定时间段专注做同一件事。"
    ]
  },
  {
    question: "面对他人的批评，你的第一反应是？",
    options: [
      "A. 分析批评是否合理并改进。",
      "B. 认为对方可能不够了解自己。",
      "C. 询问更多细节以理解对方立场。",
      "D. 激烈反驳或证明自己正确。",
      "E. 表面接受，但内心坚持原有方式。"
    ]
  },
  {
    question: "你理想的工作环境是？",
    options: [
      "A. 规则明确、分工清晰的办公室。",
      "B. 自由开放、鼓励创新的空间。",
      "C. 人际关系融洽的小团队。",
      "D. 竞争激烈、充满挑战的领域。",
      "E. 稳定少变、压力适中的岗位。"
    ]
  },
  {
    question: "遇到突发变化时，你会？",
    options: [
      "A. 迅速制定应急预案。",
      "B. 将变化视为新机会。",
      "C. 与同伴商量应对策略。",
      "D. 兴奋地拥抱变化带来的刺激。",
      "E. 按原计划推进，尽量减少影响。"
    ]
  },
  {
    question: "你更擅长哪种类型的任务？",
    options: [
      "A. 需要逻辑分析的数据处理。",
      "B. 需要创意发想的脑暴会议。",
      "C. 需要多方沟通的协调工作。",
      "D. 需要快速行动的执行项目。",
      "E. 需要长期坚持的重复性工作。"
    ]
  },
  {
    question: "休闲时，你更喜欢？",
    options: [
      "A. 独自阅读或研究感兴趣的主题。",
      "B. 尝试新奇的娱乐活动或旅行。",
      "C. 与好友聚餐或闲聊。",
      "D. 参加竞技运动或刺激游戏。",
      "E. 在家整理房间或完成未了事项。"
    ]
  },
  {
    question: "你如何对待未完成的目标？",
    options: [
      "A. 反思计划漏洞并重新设计路径。",
      "B. 转换思路，寻找替代方案。",
      "C. 寻求他人帮助共同推进。",
      "D. 投入更多热情加速完成。",
      "E. 保持原有节奏，绝不半途而废。"
    ]
  },
  {
    question: "你更倾向于如何做决定？",
    options: [
      "A. 基于数据报告和事实分析。",
      "B. 跟随直觉和内心冲动。",
      "C. 参考多数人的意见。",
      "D. 选择当下最令人兴奋的选项。",
      "E. 选择长期验证过的稳妥方案。"
    ]
  },
  {
    question: "你对“规则”的态度是？",
    options: [
      "A. 严格遵守，规则是效率的基础。",
      "B. 必要时打破规则以实现创新。",
      "C. 根据情境灵活解释规则。",
      "D. 反感束缚，追求自由突破。",
      "E. 只遵守对自己有利的规则。"
    ]
  },
  {
    question: "你希望他人如何评价你？",
    options: [
      "A. “理性可靠，值得信赖。",
      "B. “有趣有创意，充满灵感。",
      "C. “善于沟通，人缘极佳。",
      "D. “行动力强，永远充满激情。",
      "E. “踏实稳重，从不让人失望。"
    ]
  },
  {
    question: "面对一项枯燥的任务，你会？",
    options: [
      "A. 用标准化流程快速完成。",
      "B. 尝试加入新元素让它变有趣。",
      "C. 拉上同事边聊天边工作。",
      "D. 设定挑战目标激励自己。",
      "E. 耐心做完，不抱怨不拖延。"
    ]
  },
  {
    question: "你的人生信条更接近？",
    options: [
      "A. “凡事预则立，不预则废。",
      "B. “生命在于探索和突破。",
      "C. “独行快，众行远。",
      "D. “不疯狂，无人生！",
      "E. “稳中求进，厚积薄发。"
    ]
  }
];


// 用于打乱数组顺序的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 用于打乱数组顺序的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 当前显示的问题索引
let currentQuestionIndex = 0;

// 统计用户的选择
const userAnswers = [];

// 渲染单个问题到页面
function renderQuestion(index) {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ''; // 清空容器

  if (index < shuffledQuestions.length) {
    const q = shuffledQuestions[index];
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // 问题标题
    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `问题 ${index + 1}: ${q.question}`;
    questionDiv.appendChild(questionTitle);

    // 打乱选项顺序
    const shuffledOptions = shuffleArray([...q.options]);

    // 问题选项
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    shuffledOptions.forEach(option => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question-${index + 1}`;
      optionInput.value = option[0]; // 选项的字母A/B/C/D/E
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option.slice(2))); // 去掉标号
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);
    questionsContainer.appendChild(questionDiv);

    // 显示"下一题"按钮
    const nextButton = document.createElement("button");
    nextButton.textContent = index < shuffledQuestions.length - 1 ? "下一题" : "提交问卷";
    nextButton.classList.add("submit-btn");
    nextButton.onclick = () => nextQuestion();
    questionsContainer.appendChild(nextButton);
  } 
}

// 显示下一题
function nextQuestion() {
  const selectedOption = document.querySelector(`input[name="question-${currentQuestionIndex + 1}"]:checked`);
  if (selectedOption) {
    userAnswers.push(selectedOption.value); // 保存选择
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      showResults();
    }
  } else {
    alert("请选择一个选项！");
  }
}

// 显示结果
function showResults() {
  const totalScores = { A: 0, B: 0, C: 0, D: 0, E: 0 }; // 统计五行分数
  const resultDiv = document.getElementById("result");

  // 统计答案
  userAnswers.forEach(answer => {
    totalScores[answer]++;
  });

  // 找到分数最高的五行
  const maxScore = Math.max(...Object.values(totalScores));
  const dominantTypes = Object.keys(totalScores).filter(key => totalScores[key] === maxScore);

  // 显示结果
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>测试结果</h2>
    <p>您的性格倾向为：${dominantTypes.map(type => type === 'A' ? '金' : type === 'B' ? '木' : type === 'C' ? '水' : type === 'D' ? '火' : '土').join('、')}</p>
    <p>分数详情：</p>
    <ul>
      <li>金（A）: ${totalScores['A']} 分</li>
      <li>木（B）: ${totalScores['B']} 分</li>
      <li>水（C）: ${totalScores['C']} 分</li>
      <li>火（D）: ${totalScores['D']} 分</li>
      <li>土（E）: ${totalScores['E']} 分</li>
    </ul>
  `;

  // 隐藏问题容器
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.style.display = "none";
}

// 在初始化时打乱问题顺序并显示第一个问题
const shuffledQuestions = shuffleArray([...questions]);
renderQuestion(currentQuestionIndex);