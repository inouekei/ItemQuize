import ru from './ru.js';
import ja from './ja.js';

/**
 * 初期処理。問題作成を呼び出し
 */
window.addEventListener("load", function() {
    let langs = {
        'ru': ru,
        'ja': ja,
    };
    let quizzes = null;
	const langTag = document.getElementById("select-lang");
    langTag.addEventListener('change', function() {
        loadLang();
    });
	const quizTag = document.getElementById("span-question");
	const msgTag = document.getElementById("span-msg");
    const nextTag = document.getElementById("btn-next");
    nextTag.addEventListener('click', (e) => {
        updateQuestion();
    });
    const optionTags = [];	
    for (let i = 0; i < 9; i++){
        optionTags[i] = document.getElementById("option-" + i);
        optionTags[i].addEventListener('click', (e) => {
            checkAnswer(e);
        });
    }
    let answer = null;

    quizTag.innerText = 'loading';
    msgTag.innerText = 'loading';
    loadLang();
    updateQuestion();

    /**
     * changeLang()
     * 言語変更
     * 
     * 語彙DBの変更
     * @return {} null
     */
     function loadLang(){
        quizzes = langs[langTag.options[langTag.selectedIndex].value];
        updateQuestion();
     }

     /**
     * updateQuestion()
     * 問題作成
     * 
     * DBからランダムに9個抽出し、選択肢作成。さらに選択肢を埋める数を抽出して、ランダムに表示
     * @return {} null
     */
    function updateQuestion(){
        nextTag.style.visibility = 'hidden';
        let options = [];
        for (let i = 0; i < 9; i++){
            options.push(quizzes[Math.floor( Math.random() * quizzes.length )]);
        }
        let quiz = options[Math.floor( Math.random() * options.length )];
        let quizText = quiz[1];
        quizTag.innerText = quizText;

        answer = quiz[0];

        for (let i = 0; i < 9; i++){
            optionTags[i].innerText = options[i][0];
        }
        msgTag.innerText = 'Click the correct answer';
    }

     /**
     * CheckAnswer()
     * 回答チェック
     * 
     * クリックした選択肢が正解の場合は終了、不正解の場合はギミック表示
     * 
     * @param e
     * クリックイベント
     * 
     * @return {} null
     */
      function checkAnswer(e){
        if (answer != optionTags[e.target.id.replace('option-', '')].innerText){
            msgTag.innerText = "Oops!";
            return;
        }
        msgTag.innerText = "Great!";
        nextTag.style.visibility = 'visible';
      }

    /**
     * EndQuestion()
     * 回答終了
     * 
     * 正解表示
     * @return {} null
     */
     function EndQuestion(){}
});