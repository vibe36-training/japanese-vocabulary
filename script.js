const words = [
  {
    id: 1,
    japanese: "学校",
    reading: "がっこう",
    meaning: "학교",
    partOfSpeech: "명사",
    example: "私は学校へ行きます。",
    exampleTranslation: "저는 학교에 갑니다."
  },
  {
    id: 2,
    japanese: "先生",
    reading: "せんせい",
    meaning: "선생님",
    partOfSpeech: "명사",
    example: "先生は日本語を教えます。",
    exampleTranslation: "선생님은 일본어를 가르칩니다."
  },
  {
    id: 3,
    japanese: "教室",
    reading: "きょうしつ",
    meaning: "교실",
    partOfSpeech: "명사",
    example: "教室に学生がいます。",
    exampleTranslation: "교실에 학생이 있습니다."
  },
  {
    id: 4,
    japanese: "友達",
    reading: "ともだち",
    meaning: "친구",
    partOfSpeech: "명사",
    example: "友達と昼ごはんを食べます。",
    exampleTranslation: "친구와 점심을 먹습니다."
  },
  {
    id: 5,
    japanese: "本",
    reading: "ほん",
    meaning: "책",
    partOfSpeech: "명사",
    example: "図書館で本を読みます。",
    exampleTranslation: "도서관에서 책을 읽습니다."
  },
  {
    id: 6,
    japanese: "水",
    reading: "みず",
    meaning: "물",
    partOfSpeech: "명사",
    example: "毎朝、水を飲みます。",
    exampleTranslation: "매일 아침 물을 마십니다."
  },
  {
    id: 7,
    japanese: "音楽",
    reading: "おんがく",
    meaning: "음악",
    partOfSpeech: "명사",
    example: "音楽を聞くのが好きです。",
    exampleTranslation: "음악을 듣는 것을 좋아합니다."
  },
  {
    id: 8,
    japanese: "日本",
    reading: "にほん",
    meaning: "일본",
    partOfSpeech: "명사",
    example: "日本は島国です。",
    exampleTranslation: "일본은 섬나라입니다."
  },
  {
    id: 9,
    japanese: "家族",
    reading: "かぞく",
    meaning: "가족",
    partOfSpeech: "명사",
    example: "家族と公園へ行きます。",
    exampleTranslation: "가족과 공원에 갑니다."
  },
  {
    id: 10,
    japanese: "食べ物",
    reading: "たべもの",
    meaning: "음식",
    partOfSpeech: "명사",
    example: "好きな食べ物はカレーです。",
    exampleTranslation: "좋아하는 음식은 카레입니다."
  },
  {
    id: 11,
    japanese: "食べる",
    reading: "たべる",
    meaning: "먹다",
    partOfSpeech: "동사",
    example: "朝ごはんにパンを食べます。",
    exampleTranslation: "아침으로 빵을 먹습니다."
  },
  {
    id: 12,
    japanese: "飲む",
    reading: "のむ",
    meaning: "마시다",
    partOfSpeech: "동사",
    example: "妹は牛乳を飲みます。",
    exampleTranslation: "여동생은 우유를 마십니다."
  },
  {
    id: 13,
    japanese: "行く",
    reading: "いく",
    meaning: "가다",
    partOfSpeech: "동사",
    example: "毎日、電車で学校へ行きます。",
    exampleTranslation: "매일 전철로 학교에 갑니다."
  },
  {
    id: 14,
    japanese: "来る",
    reading: "くる",
    meaning: "오다",
    partOfSpeech: "동사",
    example: "友達が私の家に来ます。",
    exampleTranslation: "친구가 우리 집에 옵니다."
  },
  {
    id: 15,
    japanese: "見る",
    reading: "みる",
    meaning: "보다",
    partOfSpeech: "동사",
    example: "夜、テレビを見ます。",
    exampleTranslation: "밤에 텔레비전을 봅니다."
  },
  {
    id: 16,
    japanese: "聞く",
    reading: "きく",
    meaning: "듣다",
    partOfSpeech: "동사",
    example: "通学中に音楽を聞きます。",
    exampleTranslation: "통학하는 동안 음악을 듣습니다."
  },
  {
    id: 17,
    japanese: "読む",
    reading: "よむ",
    meaning: "읽다",
    partOfSpeech: "동사",
    example: "毎晩、本を読みます。",
    exampleTranslation: "매일 밤 책을 읽습니다."
  },
  {
    id: 18,
    japanese: "書く",
    reading: "かく",
    meaning: "쓰다",
    partOfSpeech: "동사",
    example: "ノートに名前を書きます。",
    exampleTranslation: "공책에 이름을 씁니다."
  },
  {
    id: 19,
    japanese: "話す",
    reading: "はなす",
    meaning: "말하다",
    partOfSpeech: "동사",
    example: "友達と日本語で話します。",
    exampleTranslation: "친구와 일본어로 이야기합니다."
  },
  {
    id: 20,
    japanese: "勉強する",
    reading: "べんきょうする",
    meaning: "공부하다",
    partOfSpeech: "동사",
    example: "毎日、日本語を勉強します。",
    exampleTranslation: "매일 일본어를 공부합니다."
  },
  {
    id: 21,
    japanese: "大きい",
    reading: "おおきい",
    meaning: "크다",
    partOfSpeech: "형용사",
    adjectiveType: "い형용사",
    example: "このかばんは大きいです。",
    exampleTranslation: "이 가방은 큽니다."
  },
  {
    id: 22,
    japanese: "小さい",
    reading: "ちいさい",
    meaning: "작다",
    partOfSpeech: "형용사",
    adjectiveType: "い형용사",
    example: "私の犬は小さいです。",
    exampleTranslation: "우리 집 개는 작습니다."
  },
  {
    id: 23,
    japanese: "新しい",
    reading: "あたらしい",
    meaning: "새롭다",
    partOfSpeech: "형용사",
    adjectiveType: "い형용사",
    example: "これは新しい本です。",
    exampleTranslation: "이것은 새 책입니다."
  },
  {
    id: 24,
    japanese: "古い",
    reading: "ふるい",
    meaning: "오래되다, 낡다",
    partOfSpeech: "형용사",
    adjectiveType: "い형용사",
    example: "この建物は古いです。",
    exampleTranslation: "이 건물은 오래되었습니다."
  },
  {
    id: 25,
    japanese: "忙しい",
    reading: "いそがしい",
    meaning: "바쁘다",
    partOfSpeech: "형용사",
    adjectiveType: "い형용사",
    example: "今日は少し忙しいです。",
    exampleTranslation: "오늘은 조금 바쁩니다."
  },
  {
    id: 26,
    japanese: "静か",
    reading: "しずか",
    meaning: "조용하다",
    partOfSpeech: "형용사",
    adjectiveType: "な형용사",
    example: "この図書館は静かです。",
    exampleTranslation: "이 도서관은 조용합니다."
  },
  {
    id: 27,
    japanese: "元気",
    reading: "げんき",
    meaning: "건강하다, 활기차다",
    partOfSpeech: "형용사",
    adjectiveType: "な형용사",
    example: "田中さんは元気です。",
    exampleTranslation: "다나카 씨는 건강합니다."
  },
  {
    id: 28,
    japanese: "好き",
    reading: "すき",
    meaning: "좋아하다",
    partOfSpeech: "형용사",
    adjectiveType: "な형용사",
    example: "私は日本の映画が好きです。",
    exampleTranslation: "저는 일본 영화를 좋아합니다."
  },
  {
    id: 29,
    japanese: "便利",
    reading: "べんり",
    meaning: "편리하다",
    partOfSpeech: "형용사",
    adjectiveType: "な형용사",
    example: "この辞書はとても便利です。",
    exampleTranslation: "이 사전은 매우 편리합니다."
  },
  {
    id: 30,
    japanese: "きれい",
    reading: "きれい",
    meaning: "아름답다, 깨끗하다",
    partOfSpeech: "형용사",
    adjectiveType: "な형용사",
    example: "この花はきれいです。",
    exampleTranslation: "이 꽃은 아름답습니다."
  }
];

const wordList = document.getElementById("word-list");
const searchInput = document.getElementById("word-search");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const toggleAllButton = document.getElementById("toggle-all-meanings");
const filterButtons = document.querySelectorAll(".filter-button");
const hiddenMeanings = new Set();
let activeFilter = "전체";

function getFilteredWords() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();

  return words.filter((word) => {
    const matchesFilter = activeFilter === "전체" || word.partOfSpeech === activeFilter;
    const searchableText = [
      word.japanese,
      word.reading,
      word.meaning,
      word.partOfSpeech,
      word.adjectiveType || "",
      word.example,
      word.exampleTranslation
    ].join(" ").toLocaleLowerCase();

    return matchesFilter && searchableText.includes(searchTerm);
  });
}

function createWordCard(word, index) {
  const meaningIsHidden = hiddenMeanings.has(word.id);
  const meaningText = meaningIsHidden ? "뜻을 가렸어요" : word.meaning;
  const meaningButtonText = meaningIsHidden ? "뜻 확인" : "뜻 가리기";
  const partOfSpeechLabel = word.adjectiveType
    ? `${word.partOfSpeech} · ${word.adjectiveType}`
    : word.partOfSpeech;

  return `
    <article class="word-card">
      <div class="card-topline">
        <span class="word-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="part-of-speech" data-pos="${word.partOfSpeech}">${partOfSpeechLabel}</span>
      </div>
      <h3 class="word-japanese" lang="ja">${word.japanese}</h3>
      <p class="word-reading" lang="ja">${word.reading}</p>
      <div class="meaning-row">
        <div class="meaning-content">
          <span class="field-label">뜻</span>
          <p class="word-meaning${meaningIsHidden ? " is-hidden" : ""}"${meaningIsHidden ? ' aria-label="가려진 뜻"' : ""}>${meaningText}</p>
        </div>
        <button
          class="meaning-toggle"
          type="button"
          data-word-id="${word.id}"
          aria-pressed="${!meaningIsHidden}"
        >${meaningButtonText}</button>
      </div>
      <div class="example-block">
        <p class="example-label">EXAMPLE</p>
        <p class="example-japanese" lang="ja">${word.example}</p>
        <p class="example-korean">${word.exampleTranslation}</p>
      </div>
    </article>
  `;
}

function updateToggleAllButton() {
  const anyMeaningsHidden = hiddenMeanings.size > 0;
  const buttonText = anyMeaningsHidden ? "뜻 모두 보이기" : "뜻 모두 가리기";

  toggleAllButton.querySelector("span").textContent = buttonText;
  toggleAllButton.setAttribute("aria-label", buttonText);
}

function renderWords() {
  const filteredWords = getFilteredWords();

  wordList.innerHTML = filteredWords.map(createWordCard).join("");
  resultCount.textContent = `${filteredWords.length}개 단어`;
  emptyState.hidden = filteredWords.length > 0;
  wordList.hidden = filteredWords.length === 0;
  updateToggleAllButton();
}

searchInput.addEventListener("input", renderWords);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    renderWords();
  });
});

wordList.addEventListener("click", (event) => {
  const button = event.target.closest(".meaning-toggle");

  if (!button) {
    return;
  }

  const wordId = Number(button.dataset.wordId);

  if (hiddenMeanings.has(wordId)) {
    hiddenMeanings.delete(wordId);
  } else {
    hiddenMeanings.add(wordId);
  }

  renderWords();
});

toggleAllButton.addEventListener("click", () => {
  if (hiddenMeanings.size > 0) {
    hiddenMeanings.clear();
  } else {
    words.forEach((word) => hiddenMeanings.add(word.id));
  }

  renderWords();
});

document.getElementById("total-count").textContent = String(words.length);
renderWords();
