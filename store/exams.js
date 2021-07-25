export const state = () => ({
  session: 0,
  number: 0,
  count: 0,
  back_bool: true,
  next_bool: false,
  load_bool: true,
  que_ans: [],
  check: [],
  resultItems: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  ans: [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]
  ],
  que: [
    [{
      aue: "null問題",
      ans: "ア"
    }],
    [{
        que: "情報セキュリティが満たすべき3つの性質の内、ある情報へのアクセスを認められた人だけが、その情報にアクセスできる状態を確保すること。",
        ans: 'ア'
      },
      {
        que: "情報セキュリティが満たすべき3つの性質の内、情報が破壊、改ざん又は消去されていない状態を確保すること。",
        ans: 'イ'
      },
      {
        que: "情報セキュリティが満たすべき3つの性質の内、情報へのアクセスを認められた人が、必要時に中断することなく、情報にアクセスできる状態を確保すること。",
        ans: 'ウ'
      },
      {
        que: "前もって対策すること",
        ans: 'エ'
      },
      {
        que: "不正な行為を牽制し、未然に思いとどまらせること。",
        ans: 'オ'
      },
      {
        que: "速やかに発見および通知をすること。",
        ans: 'カ'
      },
      {
        que: "正常な状態に復旧すること。",
        ans: 'キ'
      },
    ],
    [
      {
        que:"対策を講じることにより、驚異の発生の可能性を下げること。",
        ans:"ア",
      },
      {
        que:"リスクを許容の範囲として受け入れること",
        ans:"イ",
      },
      {
        que:"リスクを排除もしくは、まったく別の方法に置き換えることにより、リスクが発生する可能性を取り除くこと",
        ans:"ウ",
      },
      {
        que:"リスクを別の組織などに移すこと",
        ans:"エ",
      },
      {
        que:"コンピューター上のファイルに感染する不正プログラム",
        ans:"オ",
      },
      {
        que:"コンピューターに侵入し感染を広める不正プログラム",
        ans:"カ",
      },
    ],
    [
      {
        que:"暗号という処理",
        ans:"ア",
      },
      {
        que:"暗号化されたデータ",
        ans:"イ",
      },
      {
        que:"暗号化される前のデータ",
        ans:"ウ",
      },
      {
        que:"暗号文から平文への変換",
        ans:"エ",
      },
      {
        que:"平文から暗号文への変換の際に使う特殊な情報",
        ans:"オ",
      },
      {
        que:"複合する際に使う特殊な情報",
        ans:"カ",
      },
      {
        que:"広く用いられている共通鍵暗号化技術",
        ans:"キ",
      },
      {
        que:"広く用いられている公開鍵暗号化技術",
        ans:"ク",
      },
    ],
    [
      {
        que:"通信経路上での認証に関する脅威",
        ans:"ア",
      },
      {
        que:"認証の際にサーバーから毎回変わる乱数をクライアントに送信する認証",
        ans:"イ",
      },
      {
        que:"ID連携を実現する代表的な例",
        ans:"ウ",
      },
      {
        que:"PKIの日本語名称",
        ans:"エ",
      },
      {
        que:"証明書とそれに不随する技術を用いて、公開鍵のすり替えなどを防止する方法を実現すること",
        ans:"オ",
      },
      {
        que:"公開鍵とその所有者を証明するもの",
        ans:"カ",
      },
      {
        que:"公開鍵とそれに対応する秘密鍵の所有者を対応付ける証明書を発行する。また、証明書の失効処理を行う",
        ans:"キ",
      },
      {
        que:"証明書の失効情報を載せたリスト",
        ans:"ク",
      },
    ],
    [
      {
        que:"申請者の本人性の審査・確認を行う",
        ans:"ア",
      },
      {
        que:"サーバーを識別するための証明書",
        ans:"イ",
      },
      {
        que:"認証局が、発行する証明書の署名の正当性を示すために自ら署名して発行する証明書",
        ans:"ウ",
      },
      {
        que:"他人のコンピュータのデータを勝手に暗号化することで正常にアクセスできない状態にし、元に戻すための複合プログラムを買うよう身代金を迫る",
        ans:"エ",
      },
      {
        que:"広義にはインターネット上で決められたタスクを繰り返し実行するコンピュータプログラムを指すが、情報セキュリティ対策上では、感染したコンピュータに常駐し攻撃者からの遠隔操作命令を実行するマルウェアのことを指す",
        ans:"オ",
      },
    ],
    [
      {
        que:"データベースへの命令文を構成するデータを入力し、Webアプリケーションが想定していないSQL文を意図的に実行させる攻撃",
        ans:"ア",
      },
      {
        que:"特定のサイトやサーバに対し、日時を決めて、インターネット上の多数のコンピュータから同時に大量のパケットを送り付けて標的のネットワークを過負荷状態する分散型のサービス停止攻撃",
        ans:"イ",
      },
      {
        que:"クライアントに対してはサーバに、サーバに対してはクライアントになりすますことで通信している二者の間に介入し、通信内容の盗聴・改ざんなどを行う行為",
        ans:"ウ",
      },
    ],
    [
      {
        que:"メリット(高速処理が可能)とデメリット(鍵の管理が大変)を持ち、下図のような動作を行う",
        ans:"ア",
        image:"/2021EXAM/7-1.png",
        img:true
      },
      {
        que:"メリット(堅牢かつ鍵の交換が容易)とデメリット(処理速度が遅い)を持ち、下図のような動作を行う",
        ans:"イ",
        image:"/2021EXAM/7-2.png",
        img:true

      },
      {
        que:"良いとこ取り(高速処理が可能＋堅牢かつ鍵の交換が容易)し、下図のような動作を行う",
        ans:"ウ",
        image:"/2021EXAM/7-3.png",
        img:true

      },
      {
        que:"任意の長さをデータを固定長のデータに圧縮し、下図のような性質を持つ",
        ans:"エ",
        image:"/2021EXAM/7-4.png",
        img:true

      },
      {
        que:"メッセージに対するハッシュ値を秘密鍵で暗号化する署名技術で、下図のような動作を行う",
        ans:"オ",
        image:"/2021EXAM/7-5.png",
        img:true
      },
      {
        que:"「誰」もしくは「何」かを決める(識別する)こと",
        ans:"カ",
      },
      {
        que:"２つのカテゴリーの認証を用いるケース",
        ans:"キ",
      },
      {
        que:"クレジットカードやキャッシュカードの利用に際して、持ち主の本人確認に使われる暗証番号",
        ans:"ク",
      },
    ],
  ],
  select: [
    [
      "test問題"
    ],
    [
      "機密性",
      "完全性",
      "可用性",
      "予防",
      "抑止",
      "検知",
      "回復"
    ],
    [
      "リスクの低減",
      "リスクの保有",
      "リスクの回避",
      "リスクの移転",
      "コンピュータウイルス",
      "ワーム",
    ],
    [
      "暗号化",
      "暗号文",
      "平文",
      "複号",
      "暗号化鍵",
      "複合鍵",
      "DES(3DES)やAES",
      "RSA",
    ],
    [
      "盗聴、改竄・ハイジャック、なりすまし、捏造、再送",
      "Challenge/Response認証",
      "SSO(Single Sighn-ON)",
      "公開鍵基盤",
      "PKIの最大の目的",
      "公開鍵証明書",
      "証明局(CA)",
      "証明書失効リスト(CRL)",
    ],
    [
      "登録局(RA)",
      "サーバー証明書",
      "ルート証明書",
      "ランサムウェア",
      "ボット"
    ],
    [
      "SQLインジェクション",
      "DDoS攻撃",
      "MITM攻撃(中間者攻撃)"
    ],
    [
      "共通鍵暗号化方式",
      "公開鍵暗号化方式",
      "ハイブリッド暗号化方式",
      "ハッシュ関数",
      "ディジタル署名",
      "主体認証",
      "2要素認証(2段階認証)",
      "PIN(ピン)"
    ]
  ],
  items: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ'],
})

export const getters = {
  count: state => {
    return state.count
  },
  ans: state => {
    return state.ans[state.session][state.number]
  },

  back_bool: state => {
    return state.back_bool
  },
  next_bool: state => {
    return state.next_bool
  },
  que: state => {
    return state.que
  },
  number: state => {
    return state.number
  },
  select: state => {
    return state.select
  },
  items: state => {
    return state.items
  },
  session: state => {
    return state.session
  },
  resultItems: state => {
    return state.resultItems[state.session]
  }
}
export const actions = ({
  // clearAns(state){
  //   state.number = 0
  //   state.ans[state.session] = ""
  //   console.log("clear")
  // },
})

export const mutations = ({
  clearAns(state){
    state.number = 0
    state.ans[state.session] = [""]
  },
  checkAns: function (state) {
    state.number = 0
    state.count = 0
    for (let i = 0; i < state.que[state.session].length; i++) {
      if (state.que[state.session][i].ans == state.ans[state.session][i]) {
        state.count++
        state.check[i] = "〇"
      } else {
        state.check[i] = "×"
      }
    }
  },
  queshuffle(state){
    var session = state.session
    var i = state.que[session].length
    // console.log("i : "+ i)
    while(--i){
      // console.log("i -> " + i)
      var j = Math.floor(Math.random() * ( i + 1)); //2,0,3,0,2,0
      // console.log(j)


      if(state.que[session][i].ans == state.que[session][j].ans){
        // console.log(state.que[session][i].ans + state.que[session][j].ans)
        // console.log("conti:"+i+ "j:" +j + "now continue stop")
        continue
      }else{
        // console.log("conti:"+i+ "j:" +j)
        var k = state.que[session][j]
        // console.log(k)
        state.que[session][j] = state.que[session][i]
        state.que[session][i] = k 
        // console.log("state.que[session]" + state.que[session][i].que)
      }
    }
    // console.log(state.que[state.session])
    // console.log("Shuffle conpleat")
  },
  getAns(state, value) {
    state.ans[state.session][state.number] = value
  },

  boolcheck(state) {
    const nums = (Number(state.que[state.session].length) - 2)
    // console.log("state.number : " + state.number + " state.que[state.session].length : " + state.que[state.session].length)
    if (state.number == 0) {
      state.back_bool = true
      state.next_bool = false
    } else if (1 <= state.number && state.number < state.que[state.session].length - 1) {
      state.back_bool = false
      state.next_bool = false
    } else if (Number(state.number) > nums) {
      state.back_bool = false
      state.next_bool = true
    }
  },
  numberClear(state){
    state.number = 0
  },
  back(state) {
    state.number--
  },
  next(state) {
    state.number++
  },
  changepage(state, index) {
    state.session = index
  },
  selectorGetter(state) {
    state.items = state.items.slice(0, state.select[state.session].length);
  },
  setitem(state) {
    let userans = []
    let ansers = []
    function getAns(){
      for(let i = 0;i < state.select[state.session].length; i++)
      {
        "get!"
        for(let j = 0;j < state.select[state.session].length; j++){
          if(state.ans[state.session][i] == state.items[j])
          {
            console.log("get!")
            userans[i] = state.select[state.session][j]
          }
          if(state.que[state.session][i].ans == state.items[j])
          {
            ansers[i] = state.select[state.session][j]
          }
        }
      }
    }
    getAns()
    state.resultItems[state.session].length = state.select[state.session].length
    for (let i = 0; i < state.select[state.session].length; i++) {
      state.resultItems[state.session][i] = {}
      // console.log(state.resultItems[state.session][i])
      state.resultItems[state.session][i].anser = state.ans[state.session][i]
      state.resultItems[state.session][i].example = state.que[state.session][i].ans
      state.resultItems[state.session][i].que = state.que[state.session][i].que
      state.resultItems[state.session][i].anser_common = userans[i]
      state.resultItems[state.session][i].example_common = ansers[i]
      state.resultItems[state.session][i].name = ("問題 " + (i + 1))
    }
    state.items = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ']
  }


})
