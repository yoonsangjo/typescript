type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 단어를 추가함.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  // 단어의 정의를 리턴함.
  get(term: string) {
    return this.words[term];
  }

  // 단어를 삭제함.
  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }

  // 단어를 업데이트 함.
  update(term: string, newTerm: string) {
    if (this.words[term] !== undefined) {
      this.words[newTerm] = this.words[term];
      delete this.words[term];
    }
  }

  // 사전 단어를 모두 보여줌.
  showAll() {
    const termArr = Object.keys(this.words);
    termArr.forEach((element) => {
      return console.log(element);
    });
  }

  // 사전 단어들의 총 갯수를 리턴함.
  count() {
    return Object.keys(this.words).length;
  }

  // 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
  upsert(word: Word, newTerm?: string) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    } else if (newTerm && this.words[word.term] !== undefined) {
      this.words[newTerm] = this.words[word.term];
      delete this.words[word.term];
    }
  }

  // 해당 단어가 사전에 존재하는지 여부를 알려줌.
  exists(term: string) {
    if (this.words[term] !== undefined) {
      return `${term} : ${this.words[term]}`;
    } else {
      return '존재하지 않습니다.';
    }
  }

  // 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
  bulkAdd(arr: Word[]) {
    arr.forEach((element) => {
      this.add(element);
    });
  }

  // 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
  bulkDelete(arr: string[]) {
    arr.forEach((element) => {
      this.delete(element);
    });
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const sushi = new Word('sushi', '일본의 음식');
const mapoTofu = new Word('mapotofu', '중국의 음식');
const padThai = new Word('padthai', '태국의 음식');

const dict = new Dict();

dict.add(kimchi);
dict.add(sushi);
dict.add(mapoTofu);

dict.get('kimchi');

dict.delete('kimchi');
dict.get('kimchi');

dict.update('mapotofu', 'mapo tofu');
dict.get('mapotofu');
dict.get('mapo tofu');

dict.showAll();

dict.count();

dict.upsert(padThai);
dict.get('padthai');
dict.upsert(padThai, 'pad thai');
dict.get('padthai');
dict.get('pad thai');

dict.exists('kimchi');
dict.exists('pad thai');

const addObj = [
  {
    term: 'bulgogi',
    def: '한국의 음식',
  },
  {
    term: 'japchae',
    def: '한국의 음식',
  },
  {
    term: 'tteokgalbi',
    def: '한국의 음식',
  },
];

dict.bulkAdd(addObj);
dict.showAll();

const deleteArr = ['sushi', 'bulgogi', 'tteokgalbi'];

dict.bulkDelete(deleteArr);
dict.showAll();
