// customElements.define('euid-app',{
//     class extends HTMLElement
// })

//class를 확장한다는 것이 무엇을 의미하나요?

class 생물 {
  constructor() {
    this.type = "생물";
  }
  호흡한다() {}
}

class 척추생물 extends 생물 {
  //생물의 능력을 갖게 됨
  constructor() {
    super();
    this.type = "척추생물";
  }
  걷는다() {}
}

class 포유류 extends 척추생물 {
  //척추생물의 능력을 갖게 됨
  constructor() {
    this.type = "포유류";
  }

  낳는다(무엇 = "새끼") {}
}

class 인간 extends 포유류 {
  // 포유류의 능력을 갖게됨
  constructor() {
    this.type = "인간";
  }
  호흡한다() {}
  걷는다() {}
  낳는다(무엇 = "아이") {}
  생각을_한다() {}
  언어를_한다() {}
}
