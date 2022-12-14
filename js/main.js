import ru from './ru.js';
import ja from './ja.js';
import ja_romaji from './ja_romaji.js';
import en from './en.js';

/**
 * 初期処理。問題作成を呼び出し
 */
window.addEventListener("load", function() {
    let langs = {
        'ru': ru,
        'ja': ja,
        'ja_romaji': ja_romaji,
        'en': en,
    };
    let quizzes = null;
    let stats = {};
    let isOpen = false;
    let answer = null;

    const tableTag = document.getElementById("table-vocabulary");
	const quizTag = document.getElementById("span-question");
	const audioTag = document.getElementById("audio-quiz");
	const msgTag = document.getElementById("span-msg");
    const nextTag = document.getElementById("btn-next");

    const langTag = document.getElementById("select-lang");
    langTag.addEventListener('change', function() {
        loadLang();
    });
    nextTag.addEventListener('click', (e) => {
        updateQuestion();
    });
    const endTag = document.getElementById("btn-end");
    endTag.addEventListener('click', (e) => {
        endQuestion();
    });
    const optionTags = [];	
    for (let i = 0; i < 9; i++){
        optionTags[i] = document.getElementById("option-" + i);
        optionTags[i].addEventListener('click', (e) => {
            checkAnswer(e);
        });
    }
    const menuTag = document.getElementById("menu-btn-check");
    menuTag.addEventListener('change', (e) => {
        if (e.target.checked) refreshList();
    });

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
        quizzes.forEach(function(quiz) {
            stats[quiz[0]] = [0, 0, 0, 0, 0];
        });
        audioTag.style.visibility = (langTag.options[langTag.selectedIndex].value == "ja") 
            ? 'visible' : 'hidden';
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
        isOpen = true;
        nextTag.style.visibility = 'hidden';
        endTag.style.visibility = 'visible';
        let options = [];
        for (let i = 0; i < 9; i++){
            options.push(quizzes[Math.floor( Math.random() * quizzes.length )]);
        }
        let quiz = options[Math.floor( Math.random() * options.length )];
        let quizText = quiz[1];
        quizTag.innerText = quizText;
        if (langTag.options[langTag.selectedIndex].value == "ja"){
            audioTag.src = "wav/" + quiz[2];
            audioTag.play;
        }

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
        if (!isOpen) return;
        if (answer != optionTags[e.target.id.replace('option-', '')].innerText){
            stats[answer].pop();
            stats[answer].unshift(0);
            let sum = 0;
            for (let i = 0; i < stats[answer].length; i++) {
                sum += stats[answer][i];
            }
            let percentage = (sum ? sum / stats[answer].length : 0) * 100;
            msgTag.innerText = "Oops! Your correctivity is " + percentage + "%";
            return;
        }
        isOpen = false;
        stats[answer].pop();
        stats[answer].unshift(1);
        let sum = 0;
        for (let i = 0; i < stats[answer].length; i++) {
            sum += stats[answer][i];
        }
        let percentage = (sum ? sum / stats[answer].length : 0) * 100;
        msgTag.innerText = "Great! Your correctivity is " + percentage + "%";
        nextTag.style.visibility = 'visible';
        endTag.style.visibility = 'hidden';
      }

    /**
     * EndQuestion()
     * 回答終了
     * 
     * 正解表示
     * @return {} null
     */
     function endQuestion(){
        isOpen = false;
        msgTag.innerText = answer;
        endTag.style.visibility = 'hidden';
        nextTag.style.visibility = 'visible';
     }

     /**
     * refreshList()
     * 正解率一覧更新
     * 
     * 単語ごとの正解率一覧を更新する
     * @return {} null
     */
    function refreshList(){
    }
});