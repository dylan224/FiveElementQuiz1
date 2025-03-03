// 问卷数据
const questions = [
    {
      text: "1. 面对一项复杂任务时，你通常会：",
      options: [
        { text: "拆解步骤，制定清晰的计划表。", element: "金" },
        { text: "直接动手尝试，边做边调整方法。", element: "木" },
        { text: "先询问他人的经验和建议。", element: "水" },
        { text: "兴奋地接受挑战，享受解决问题的过程。", element: "火" },
        { text: "反复确认细节，确保万无一失。", element: "土" }
      ]
    },
    {
      text: "2. 在团队中，你最希望自己扮演的角色是？",
      options: [
        { text: "规则制定者，确保流程高效。", element: "金" },
        { text: "创意发起人，提出新点子。", element: "木" },
        { text: "协调者，化解成员间的矛盾。", element: "水" },
        { text: "行动派，带领大家快速推进。", element: "火" },
        { text: "执行者，踏实完成分配的任务。", element: "土" }
      ]
    },
    // 可继续添加更多问题...
  ];
  
  // 当前问题索引
  let currentQuestionIndex = 0;
  
  // 记录得分
  const scores = { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 };
  
  // 获取DOM元素
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next");
  const resultElement = document.getElementById("result");
  
  // 加载问题
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = () => selectOption(option.element);
      optionsElement.appendChild(button);
    });
  }
  
  // 当用户选择一个选项
  function selectOption(element) {
    scores[element] += 1;
  
    // 显示下一题按钮
    nextButton.style.display = "inline-block";
  }
  
  // 下一题
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.style.display = "none";
    } else {
      showResult();
    }
  });
  
  // 显示结果
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
  
    // 找到得分最高的元素
    const maxScore = Math.max(...Object.values(scores));
    const dominantElements = Object.keys(scores).filter(
      (key) => scores[key] === maxScore
    );
  
    resultElement.innerHTML = `
      <p>测试完成！您的五行性格得分如下：</p>
      <ul>
        ${Object.entries(scores)
          .map(([key, value]) => `<li>${key}: ${value} 分</li>`)
          .join("")}
      </ul>
      <p>您的主要性格倾向是：${dominantElements.join("，")}</p>
    `;
  }
  
  // 初始化问卷
  loadQuestion();