// 이 함수는 배열의 마지막 요소를 반환해야 합니다.
function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}

// 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
function prepend<T, V>(arr: T[], item: V) {
  return [item, ...arr];
}

// 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
function mix<T, V>(arr1: T[], arr2: V[]) {
  return [...arr1, ...arr2];
}

// 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
function count<T>(arr: T[]) {
  return arr.length;
}

// 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
function findIndex<T>(arr: T[], item: T) {
  if (arr.includes(item)) {
    return arr.indexOf(item);
  } else {
    return null;
  }
}

// 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
function slice<T>(arr: T[], startIndex: number, endIndex?: number) {
  return arr.slice(startIndex, endIndex);
}
