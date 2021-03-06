/*
やりたいこと
①実行ボタンが押される
②fizzNumとbuzzNumの値を取得する
③取得したデータを元にif文で倍数や条件などを判断する
④fizzbuzzListに取得したデータを出力する
⑤出力したデータを空にし、新しいデータを出力する
*/

//ここから実践

// ②実行ボタンが押されたらfizzNumとbuzzNumの値を取得する
const execFizzBuzz = () => {
  //click後の文字列をNumber()関数を使用して数値か確認する
  const fizzNum = Number(document.getElementById('fizz-num').value);
  const buzzNum = Number(document.getElementById('buzz-num').value);
  const fizzBuzzList = document.getElementById('fizz-buzz-list');
  fizzBuzzList.innerHTML = '';

  //③取得したデータを元にif文で倍数などを判断する
  //文字列が入力された時、少数が入力された時、空欄だった時はエラー
  //取得した数値を整数か判断し、両者とも整数（0を除く）であればif文で条件分岐する
  if (
    Number.isInteger(fizzNum) &&
    Number.isInteger(buzzNum) &&
    fizzNum > 0 &&
    buzzNum > 0
    ) {
    for (let i = 1; i <= 99; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        addList(`FizzBuzz ${i}`);
      } else if (i % fizzNum === 0) {
        addList(`Fizz ${i}`)
      } else if (i % buzzNum === 0) {
        addList(`Buzz ${i}`);
      }
    }
  } else {
    addList('整数値を入力してください');
  }
};

// ④fizzbuzzListに取得したデータを出力する
//出力工程を関数化する
const addList = (addData) => {
  const fizzBuzzList = document.getElementById('fizz-buzz-list');
  const fizzBuzzData = document.createElement('li');
  fizzBuzzData.innerHTML = addData;
  fizzBuzzList.appendChild(fizzBuzzData);
};

// ⑤出力したデータを空にし、新しいデータを出力する
// const changeData = () => {
//   const fizzbuzzList = document.getElementById('fizz-buzz-list');
//   fizzbuzzList.innerHTML = '';
//   buttonClick();
// }

//①実行ボタンが押される
//addEventListenerメソッドでクリックされたらbuttonClickを実行
const fizzBuzzButton = document.getElementById('fizz-buzz-button');
fizzBuzzButton.addEventListener('click', execFizzBuzz);


