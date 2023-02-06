function solution(s, skip, index) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                    'u', 'v', 'w', 'x', 'y', 'z']
  
  const excludedSkip = alphabets.filter(alphabet => !skip.includes(alphabet));
  
  return s.split('')
            .map(word => excludedSkip[(excludedSkip.indexOf(word) + index) % excludedSkip.length])
            .join('');
}

// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아가야하기 때문에 나머지를 구합니다.