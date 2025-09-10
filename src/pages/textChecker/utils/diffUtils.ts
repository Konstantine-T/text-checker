import type { DiffItem, DiffResult } from "../types";

export const computeDiff = (text1: string, text2: string): DiffResult => {
  const words1 = text1.split(/(\s+)/);
  const words2 = text2.split(/(\s+)/);

  const dp: number[][] = Array(words1.length + 1)
    .fill(null)
    .map(() => Array(words2.length + 1).fill(0));

  for (let i = 1; i <= words1.length; i++) {
    for (let j = 1; j <= words2.length; j++) {
      if (words1[i - 1] === words2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const leftResult: DiffItem[] = [];
  const rightResult: DiffItem[] = [];
  let i = words1.length;
  let j = words2.length;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && words1[i - 1] === words2[j - 1]) {
      leftResult.unshift({ text: words1[i - 1], type: "equal" });
      rightResult.unshift({ text: words2[j - 1], type: "equal" });
      i--;
      j--;
    } else if (i > 0 && (j === 0 || dp[i - 1][j] >= dp[i][j - 1])) {
      leftResult.unshift({ text: words1[i - 1], type: "delete" });
      i--;
    } else {
      rightResult.unshift({ text: words2[j - 1], type: "insert" });
      j--;
    }
  }

  return { left: leftResult, right: rightResult };
};