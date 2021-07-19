let english =['hello', 'thanks', 'japanse', 'vietnamse',
    'country', 'mother', 'father', 'garandmother', 'grandfather',
    'love', 'sad', 'funny', 'happy'];
let vietnam =['xin chào', 'cảm ơn', 'Nhật Bản', 'Việt Nam',
    'quê hương', 'mẹ', 'bố', 'bà', 'ông', 'tình yêu', 'buồn', 'vui vẻ',
    'hạnh phúc'];
function searchLanguage(){
    let translate = document.getElementById('input').value;
    let text;
    for (let i = 0; i < english.length; i++) {
        if (translate == english[i]){
            text = "Từ " + english[i] + " = " + vietnam[i];
            break;
        }
        else if (translate == vietnam[i]){
            text = "Từ " + vietnam[i] + " = " + english[i];
            break;
        }
        else {
            text = "Không tìm thấy từ trong từ điển";
        }
    }
    document.getElementById('output').innerHTML = text;
}