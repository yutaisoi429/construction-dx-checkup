const PAGE_VERSION = "2026-06-07-step2-focus";

const adoptionInputs = document.querySelectorAll("[data-adoption]");
const adoptionScore = document.querySelector("#adoptionScore");
const adoptionBar = document.querySelector("#adoptionBar");
const adoptionTitle = document.querySelector("#adoptionTitle");
const adoptionText = document.querySelector("#adoptionText");

function renderAdoption() {
  const total = [...adoptionInputs].reduce(
    (sum, input) => sum + Number(input.value),
    0,
  );
  adoptionScore.textContent = Number.isInteger(total)
    ? total
    : total.toFixed(1);
  adoptionBar.style.width = `${Math.round((total / 6) * 100)}%`;

  if (total >= 4.5) {
    adoptionTitle.textContent = "実行準備あり：小さく試して横展開できます";
    adoptionText.textContent =
      "導入目的と運用体制がかなり整理されています。1〜2現場で試し、削減時間と現場の声を見ながら横展開しましょう。";
  } else if (total >= 2.5) {
    adoptionTitle.textContent =
      "一部要整理：伴走相談で抜け漏れを確認しましょう";
    adoptionText.textContent =
      "課題は見えていますが、運用ルールや浸透計画に抜けがありそうです。無料相談で決めるべき項目を整理しましょう。";
  } else {
    adoptionTitle.textContent = "要整理：導入前に現状を整理しましょう";
    adoptionText.textContent =
      "導入理由や運用ルールが未整理です。無料相談で「何を決めれば自社で進められるか」を一緒に整理しましょう。";
  }
}

adoptionInputs.forEach((input) =>
  input.addEventListener("change", renderAdoption),
);
renderAdoption();
