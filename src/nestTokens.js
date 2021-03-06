export default function nestTokens(tokens) {
    var nestTokens = [];
    var collector = nestTokens;
    var sections = [];

    for (let i = 0; i< tokens.length; i++) {
      let token = tokens[i];
    
      switch (token[0]) {
          case '#':
              collector.push(token);
              sections.push(token);
              collector = token[2] = [];
              break;
        case '/':
            let section_pop = sections.pop();
            collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
            break; 
          default:
              collector.push(token);
              break;
      }
    }
    return nestTokens;
}