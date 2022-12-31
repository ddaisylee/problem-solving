// 1. 같은 장르끼리 묶어야한다.
// 장르를 key로, 장르의 노래별 재생횟수를 더한 total, 고유번호를 index로 담는 객체를 value로 한다.
// 2. 묶인 노래들을 재생 순으로 정렬해야한다.
// 3. 노래들을 2개까지 잘라야한다.
// 핵심 키워드는 '묶는 것', 정렬

function solution(genres, plays) { 
            const genreMap = new Map();
    
    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const prev = genreMap.get(genre) || {total: 0, songs: []}
                genreMap.set(genre, {
                    total: prev.total + play,
                    songs: [...prev.songs, {index, play}]
                        // 재생 순으로 정렬
                        .sort((a, b) => b.play - a.play)
                        .slice(0,2)
                        })
                    })
    
    const answer = [...genreMap.entries()]
                                    // 총 재생횟수가 많은 장르 순으로 정렬
                                    .sort((a, b) => b[1].total - a[1].total)
                                    .flatMap(item => item[1].songs)
                                    .map(item => item.index)
    
    return answer;

}