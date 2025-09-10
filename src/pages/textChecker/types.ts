export interface DiffItem {
  text: string;
  type: "equal" | "delete" | "insert";
}

export interface DiffResult {
  left: DiffItem[];
  right: DiffItem[];
}