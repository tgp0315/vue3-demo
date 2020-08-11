import { reactive } from "Vue";
export const useCount = (initCount: number): any => {
  const state = reactive({ count: initCount});
  const increase = () => { state.count++ };
  console.log("state reactive", state);
  const reset = () => { state.count = 0 };
  return {
    state,
    increase,
    reset
  }
}